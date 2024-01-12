package auth

import (
	"context"
	"testing"

	"firebase.google.com/go"
	"firebase.google.com/go/auth"
	"github.com/jamestkelly/go-logger-interface"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/models"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

// MockAuthService for testing
type MockAuthService struct {
	mock.Mock
}

func (m *MockAuthService) CreateUser(ctx context.Context, params *auth.UserToCreate) (*auth.UserRecord, error) {
	args := m.Called(ctx, params)
	return args.Get(0).(*auth.UserRecord), args.Error(1)
}

func (m *MockAuthService) GetUser(ctx context.Context, uid string) (*auth.UserRecord, error) {
	args := m.Called(ctx, uid)
	return args.Get(0).(*auth.UserRecord), args.Error(1)
}

func (m *MockAuthService) GetUserByEmail(ctx context.Context, email string)
 
(*auth.UserRecord, error) {
	args := m.Called(ctx, email)
	return args.Get(0).(*auth.UserRecord), args.Error(1)
}

func TestRegisterUser(t *testing.T) {
	// Set up mock logger
	authLogger := logger.LoggerInterface{}

	// Set up mock AuthService
	mockAuthService := new(MockAuthService)
	mockAuthService.On("CreateUser", mock.Anything, mock.Anything).Return(&auth.UserRecord{}, nil)

	// Initialize Client with mock AuthService
	C.AuthService = mockAuthService

	// Test user
	user := models.User{
		Email:         "test@example.com",
		Password:      "testpassword",
		DisplayName:   "Test User",
		EmailVerified: false,
	}

	// Call RegisterUser
	userRecord, err := C.RegisterUser(context.Background(), user)

	// Assert results
	assert.NoError(t, err)
	assert.NotNil(t, userRecord)
	mockAuthService.AssertExpectations(t)
}