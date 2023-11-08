package config

import (
	"os"
	"testing"

	"github.com/jamestkelly/is-my-coffee-cold/pkg/utils"
)

// TestGetServerConfiguration
// Unit test to verify that the server configuration environment variables are fetched correctly.
func TestGetServerConfiguration(t *testing.T) {
	os.Setenv("IS_MY_COFFEE_COLD_API_PORT", "1")
	os.Setenv("IS_MY_COFFEE_COLD_API_VERSION", "1")

	serverConfig, err := GetServerConfiguration()
	if err != nil {
		t.Errorf("Error getting server environment configuration: %v", err)
	}

	if !utils.ObjectIsPopulated(serverConfig) {
		t.Errorf("Server environment configuration properties are not populated.")
	}
}
