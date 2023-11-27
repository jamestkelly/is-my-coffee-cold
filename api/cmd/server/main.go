package main

import (
	"flag"
	"fmt"

	firebase "firebase.google.com/go"
	"github.com/jamestkelly/go-logger-interface"
	"github.com/jamestkelly/is-my-coffee-cold/internal/config"
	"github.com/jamestkelly/is-my-coffee-cold/internal/fire"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/router"
)

var (
	serverLogger = logger.LoggerInterface{Prefix: "ServerLogger"} // serverLogger A logger interface for logs from the root of the server.
	ServerConfig config.ServerConfig                              // serverConfig A structure containing server properties, e.g., port.
	App          *firebase.App                                    // App A pointer to the Firebase application.
)

// init
// Initialises and instantiates required variables and properties for the server.
func init() {
	s, err := config.GetServerConfiguration()
	if err != nil {
		serverLogger.LogMessage(
			fmt.Sprintf("Error instantiating server configuration due to error: %v. Exiting.", err),
			"FATAL",
		)
	}

	app, err := fire.InitialiseFirebaseApp()
	if err != nil {
		serverLogger.LogMessage(
			fmt.Sprintf("Error instantiating Firebase application due to error: %v. Exiting.", err),
			"FATAL",
		)
	}

	ServerConfig = s
	App = app
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
			"FATAL",
		)
	}
}
