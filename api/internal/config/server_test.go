package config

import (
	"testing"

	"github.com/jamestkelly/is-my-coffee-cold/pkg/utils"
)

// TestGetServerConfiguration
// Unit test to verify that the server configuration environment variables are fetched correctly.
func TestGetServerConfiguration(t *testing.T) {
	serverConfig, err := GetServerConfiguration()
	if err != nil {
		t.Errorf("Error getting server environment configuration: %v", err)
	}

	if !utils.ObjectIsPopulated(serverConfig) {
		t.Errorf("Server environment configuration properties are not populated.")
	}
}
