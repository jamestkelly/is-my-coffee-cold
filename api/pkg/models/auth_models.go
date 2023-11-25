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
