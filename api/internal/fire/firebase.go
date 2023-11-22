package fire

import (
	"context"
	"encoding/json"

	firebase "firebase.google.com/go"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/utils"
	"google.golang.org/api/option"
)

// adminKey
// Basic structure utilised to parse and store Firebase Admin SDK options from
// environment variables.
type AdminKey struct {
	Type           string `json:"type"`
	ProjectId      string `json:"project_id"`
	PrivateKeyId   string `json:"private_key_id"`
	PrivateKey     string `json:"private_key"`
	ClientEmail    string `json:"client_email"`
	ClientId       string `json:"client_id"`
	AuthURI        string `json:"auth_uri"`
	TokenURI       string `json:"token_uri"`
	AuthProvider   string `json:"auth_provider_x509_cert_url"`
	ClientCertURL  string `json:"client_x509_cert_url"`
	UniverseDomain string `json:"universe_domain"`
}

// getFirebaseAdminConfiguration
// Retrieves the Firebase Admin SDK configuration from environment variables.
func getFirebaseAdminConfiguration() (AdminKey, error) {
	projectType, err := utils.GetStringEnvironmentVariable("FIREBASE_TYPE")
	if err != nil {
		return AdminKey{}, err
	}

	projectId, err := utils.GetStringEnvironmentVariable("FIREBASE_PROJECT_ID")
	if err != nil {
		return AdminKey{}, err
	}

	privateKeyId, err := utils.GetStringEnvironmentVariable("FIREBASE_PRIVATE_KEY_ID")
	if err != nil {
		return AdminKey{}, err
	}

	privateKey, err := utils.GetStringEnvironmentVariable("FIREBASE_PRIVATE_KEY")
	if err != nil {
		return AdminKey{}, err
	}

	clientEmail, err := utils.GetStringEnvironmentVariable("FIREBASE_CLIENT_EMAIL")
	if err != nil {
		return AdminKey{}, err
	}

	clientId, err := utils.GetStringEnvironmentVariable("FIREBASE_CLIENT_ID")
	if err != nil {
		return AdminKey{}, err
	}

	authUri, err := utils.GetStringEnvironmentVariable("FIREBASE_AUTH_URI")
	if err != nil {
		return AdminKey{}, err
	}

	tokenUri, err := utils.GetStringEnvironmentVariable("FIREBASE_TOKEN_URI")
	if err != nil {
		return AdminKey{}, err
	}

	authProvider, err := utils.GetStringEnvironmentVariable("FIREBASE_AUTH_PROVIDER_X509_CERT_URL")
	if err != nil {
		return AdminKey{}, err
	}

	clientCertUrl, err := utils.GetStringEnvironmentVariable("FIREBASE_CLIENT_X509_CERT_URL")
	if err != nil {
		return AdminKey{}, err
	}

	universeDomain, err := utils.GetStringEnvironmentVariable("FIREBASE_UNIVERSE_DOMAIN")
	if err != nil {
		return AdminKey{}, err
	}

	return AdminKey{
		Type:           projectType,
		ProjectId:      projectId,
		PrivateKeyId:   privateKeyId,
		PrivateKey:     privateKey,
		ClientEmail:    clientEmail,
		ClientId:       clientId,
		AuthURI:        authUri,
		TokenURI:       tokenUri,
		AuthProvider:   authProvider,
		ClientCertURL:  clientCertUrl,
		UniverseDomain: universeDomain,
	}, nil
}

// InitialiseFirebaseApp
// Initializes a Firebase application using the Firebase Admin SDK configuration obtained
// from environment variables. It retrieves the configuration, marshals it into JSON format,
// and uses it to create a new Firebase app instance with the specified project ID.
func InitialiseFirebaseApp() (*firebase.App, error) {
	adminKey, err := getFirebaseAdminConfiguration()
	if err != nil {
		return nil, err
	}

	adminKeyJSON, err := json.Marshal(adminKey)
	if err != nil {
		return nil, err
	}

	opt := option.WithCredentialsJSON(adminKeyJSON)
	config := &firebase.Config{ProjectID: adminKey.ProjectId}
	app, err := firebase.NewApp(context.Background(), config, opt)
	if err != nil {
		return nil, err
	}

	return app, nil
}
