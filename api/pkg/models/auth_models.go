package models

// User
// Structure used for User objects within Firebase authentication.
type User struct {
	Email         string `json:"email"`
	EmailVerified bool   `json:"emailVerified"`
	PhoneNumber   string `json:"phone"`
	Password      string `json:"password"`
	DisplayName   string `json:"string"`
	PhotoURL      string `json:"photoUrl"`
	Disabled      bool   `json:"bool"`
}

// GetUserByIdRequest
// Structure used for requests to fetch users by ID.
type GetUserByIdRequest struct {
	UserID string `json:"userId"`
}

// GetUserByEmailRequest
// Structure used for requests to fetch users by email.
type GetUserByEmailRequest struct {
	Email string `json:"email"`
}
