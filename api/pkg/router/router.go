package router

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jamestkelly/go-logger-interface"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/handlers"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/middleware"
)

// routerLogger A Logger interface used to print logs for the router service.
var routerLogger = logger.LoggerInterface{Prefix: "RouterService"}

// InitialiseRouter
// Creates the *gin.Engine used to service end-points for the API server.
func InitialiseRouter(apiVersion int) *gin.Engine {
	routerLogger.LogMessage("Initialising `is-my-coffee-cold` API router...", "INFO")
	r := gin.New()
	r.Use(middleware.LogRequest())

	api := r.Group(fmt.Sprintf("/api/v%d", apiVersion))
	{
		statusGroup := api.Group("/status")
		{
			statusGroup.GET("/", handlers.StatusCheck)
			statusGroup.GET("/machine", handlers.MachineInformation)
		}
		calculateGroup := api.Group("/calculate")
		{
			calculateGroup.POST("/v1/is-my-coffee-cold", handlers.PostCoffeeUndrinkableTimeIterative)
			calculateGroup.POST("/v2/is-my-coffee-cold", handlers.PostCoffeeUndrinkableTimeRecursive)
		}
		userGroup := api.Group("/user")
		{
			userGroup.GET("/:userID")
		}
	}

	return r
}
