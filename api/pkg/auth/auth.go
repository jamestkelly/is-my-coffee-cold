package auth

import (
	"context"
	"fmt"

	firebase "firebase.google.com/go"
	"firebase.google.com/go/auth"
	"github.com/jamestkelly/go-logger-interface"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/models"
)

var (
	authLogger = logger.LoggerInterface{Prefix: "AuthenticationService"} // authLogger A logger interface for printing logs regarding authentication services.
	C          Client                                                    // Client A pointer to the structure housing the Firebase authentication client used for user management.
)

// Client
// A structure used to house the Firebase authentication client.
type Client struct {
	AuthService *auth.Client
}

// InitialiseClient
// Instantiates the authentication client.
func InitialiseClient(app *firebase.App, ctx context.Context) {
	c, err := app.Auth(ctx)
	if err != nil {
		authLogger.LogMessage(
			fmt.Sprintf("Unabled to initialise authentication client due to error: %v. Exiting...", err),
			"FATAL",
		)
	}

	C.AuthService = c
}

// RegisterUser
// Registers a new user in the Firebase authentication service.
func (C Client) RegisterUser(ctx context.Context, user models.User) (*auth.UserRecord, error) {
	params := (&auth.UserToCreate{}).
		Email(user.Email).
		EmailVerified(user.EmailVerified).
		PhoneNumber(user.PhoneNumber).
		Password(user.Password).
		DisplayName(user.DisplayName).
		PhotoURL(user.PhotoURL).
		Disabled(user.Disabled)

	u, err := C.AuthService.CreateUser(ctx, params)
	if err != nil {
		authLogger.LogMessage(
			fmt.Sprintf("Unabled to create user due to error: %v. Aborting...", err),
			"ERROR",
		)
		return nil, err
	}

	authLogger.LogMessage(
		"Successfully created a new user.",
		"INFO",
	)

	return u, nil
}

// GetUserByUID
// Retrieves an `*auth.UserRecord` object corresponding to the supplied UID.
func GetUserByUID(ctx context.Context, uid string) (*auth.UserRecord, error) {
	u, err := C.AuthService.GetUser(ctx, uid)
	if err != nil {
		authLogger.LogMessage(
			fmt.Sprintf("Unable to retrieve User(%s) due to error: %v.", uid, err),
			"ERROR",
		)
		return nil, err
	}

	authLogger.LogMessage(
		fmt.Sprintf("Successfully retrieved details for User(%s).", uid),
		"INFO",
	)
	return u, nil
}

// GetUserByEmail
// Retrieves an `*auth.UserRecord` object corresponding to the supplied email.
func GetUserByEmail(ctx context.Context, userEmail string) (*auth.UserRecord, error) {
	u, err := C.AuthService.GetUserByEmail(ctx, userEmail)
	if err != nil {
		authLogger.LogMessage(
			fmt.Sprintf("Unable to retrieve User(%s) due to error: %v.", userEmail, err),
			"ERROR",
		)
		return nil, err
	}

	authLogger.LogMessage(
		fmt.Sprintf("Successfully retrieved details for User(%s).", userEmail),
		"INFO",
	)
	return u, nil
}
