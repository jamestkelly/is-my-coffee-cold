package main

import (
	"flag"
	"fmt"
	"os"

	"github.com/jamestkelly/is-my-coffee-cold/internal/config"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/log"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/router"
)

// serverLogger A logger interface for logs from the root of the server.
// serverConfig A structure containing server properties, e.g., port.
var (
	serverLogger = log.Logger{Prefix: "ServerLogger"}
	ServerConfig config.ServerConfig
)

// init
// Initialises and instantiates required variables and properties for the server.
func init() {
	s, err := config.GetServerConfiguration()
	if err != nil {
		serverLogger.LogMessage(
			fmt.Sprintf("Error instantiating server configuration: %v. Exiting.", err),
			"ERROR",
		)
		os.Exit(1)
	}

	ServerConfig = s
}

// main
// Main entry point for the server.
func main() {
	flag.Parse()
	portStr := fmt.Sprintf(":%d", ServerConfig.Port)
	r := router.InitialiseRouter(ServerConfig.APIVersion)
	err := r.Run(portStr)
	if err != nil {
		serverLogger.LogMessage(
			fmt.Sprintf("Unable to initialise API Server v%d at Port(%d) due to error: %v", ServerConfig.APIVersion, ServerConfig.Port, err),
			"ERROR",
		)
		os.Exit(1)
	}
}
