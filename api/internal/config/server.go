package config

import (
	"fmt"
	"os"

	"github.com/jamestkelly/is-my-coffee-cold/pkg/log"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/utils"
)

// serverConfigLogger
// Logger interface for logging server configuration logs.
var serverConfigLogger = log.Logger{Prefix: "ServerConfigurationService"}

// ServerConfig
// Structure containing server attributes, e.g., port number, API version, etc.
type ServerConfig struct {
	Port       int
	APIVersion int
}

// GetServerConfiguration
// Retrieves the server configuration from environment variables.
func GetServerConfiguration() (ServerConfig, error) {
	port, err := utils.GetIntEnvironmentVariable("IS_MY_COFFEE_COLD_API_PORT")
	if err != nil {
		serverConfigLogger.LogMessage(
			fmt.Sprintf("Unabled to load 'IS_MY_COFFEE_COLD_API_PORT' due to error: %v. Exiting...", err),
			"ERROR",
		)
		os.Exit(1)
	}

	apiVersion, err := utils.GetIntEnvironmentVariable("IS_MY_COFFEE_COLD_API_VERSION")
	if err != nil {
		serverConfigLogger.LogMessage(
			fmt.Sprintf("Unabled to load 'IS_MY_COFFEE_COLD_API_VERSION' due to error: %v. Exiting...", err),
			"ERROR",
		)
		os.Exit(1)
	}

	return ServerConfig{
		Port:       port,
		APIVersion: apiVersion,
	}, nil
}
