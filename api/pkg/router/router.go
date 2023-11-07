package router

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/log"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/middleware"
)

// routerLogger A Logger interface used to print logs for the router service.
var routerLogger = log.Logger{Prefix: "RouterService"}

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
			statusGroup.GET("/health")
			statusGroup.GET("/machine")
		}
		calculateGroup := api.Group("/calculate")
		{
			calculateGroup.POST("/is-my-coffee-cold")
		}
		userGroup := api.Group("/user")
		{
			userGroup.GET("/:userID")
		}
	}

	return r
}
