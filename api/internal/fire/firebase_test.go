package fire

import (
	"log"
	"os"
	"reflect"
	"testing"

	firebase "firebase.google.com/go"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/utils"
)

// TestMain
// The main entry point for all tests in this file.
func TestMain(m *testing.M) {
	setUp()

	// Run all tests
	exitCode := m.Run()
	os.Exit(exitCode)
}

// setup
// Initialises all variables common to the tests.
func setUp() {
	expectedValue := "test-value"
	err := os.Setenv("FIREBASE_TYPE", expectedValue)
	if err != nil {
		log.Fatalf("Unable to set `FIREBASE_TYPE` environment variable due to error: %v.", err)
	}

	err = os.Setenv("FIREBASE_PROJECT_ID", expectedValue)
	if err != nil {
		log.Fatalf("Unable to set `FIREBASE_PROJECT_ID` environment variable due to error: %v.", err)
	}

	err = os.Setenv("FIREBASE_PRIVATE_KEY_ID", expectedValue)
	if err != nil {
		log.Fatalf("Unable to set `FIREBASE_PRIVATE_KEY_ID` environment variable due to error: %v.", err)
	}

	err = os.Setenv("FIREBASE_PRIVATE_KEY", expectedValue)
	if err != nil {
		log.Fatalf("Unable to set `FIREBASE_PRIVATE_KEY` environment variable due to error: %v.", err)
	}

	err = os.Setenv("FIREBASE_CLIENT_EMAIL", expectedValue)
	if err != nil {
		log.Fatalf("Unable to set `FIREBASE_CLIENT_EMAIL` environment variable due to error: %v.", err)
	}

	err = os.Setenv("FIREBASE_CLIENT_ID", expectedValue)
	if err != nil {
		log.Fatalf("Unable to set `FIREBASE_CLIENT_ID` environment variable due to error: %v.", err)
	}

	err = os.Setenv("FIREBASE_AUTH_URI", expectedValue)
	if err != nil {
		log.Fatalf("Unable to set `FIREBASE_AUTH_URI` environment variable due to error: %v.", err)
	}

	err = os.Setenv("FIREBASE_TOKEN_URI", expectedValue)
	if err != nil {
		log.Fatalf("Unable to set `FIREBASE_TOKEN_URI` environment variable due to error: %v.", err)
	}

	err = os.Setenv("FIREBASE_AUTH_PROVIDER_X509_CERT_URL", expectedValue)
	if err != nil {
		log.Fatalf("Unable to set `FIREBASE_AUTH_PROVIDER_X509_CERT_URL` environment variable due to error: %v.", err)
	}

	err = os.Setenv("FIREBASE_CLIENT_X509_CERT_URL", expectedValue)
	if err != nil {
		log.Fatalf("Unable to set `FIREBASE_CLIENT_X509_CERT_URL` environment variable due to error: %v.", err)
	}

	err = os.Setenv("FIREBASE_UNIVERSE_DOMAIN", expectedValue)
	if err != nil {
		log.Fatalf("Unable to set `FIREBASE_UNIVERSE_DOMAIN` environment variable due to error: %v.", err)
	}
}

// TestGetFirebaseAdminConfiguration
// Unit test to verify that the Firebase Admin SDK configuration is correctly
// read in from environment variables.
func TestGetFirebaseAdminConfiguration(t *testing.T) {
	adminConfig, err := getFirebaseAdminConfiguration()
	if err != nil {
		t.Errorf("Unable to retrieve Firebase Admin SDK configuration due to error: %v.", err)
	}

	if !utils.ObjectIsPopulated(adminConfig) {
		t.Error("Object contains empty properties.")
	}
}

// TestInitialiseFirebaseApp
// Unit test to verify that the Firebase application is initialised correctly.
func TestInitialiseFirebaseApp(t *testing.T) {
	var expectedApp *firebase.App

	app, err := InitialiseFirebaseApp()
	if err != nil {
		t.Errorf("Unable to initalise Firebase application due to error: %v.", err)
	}

	if reflect.TypeOf(expectedApp) != reflect.TypeOf(app) {
		t.Errorf("Expected application be of Type(%v), got Type(%v) instead.", reflect.TypeOf(expectedApp), reflect.TypeOf(app))
	}
}
