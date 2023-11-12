package middleware

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/log"
)

var middlewareLogger = log.Logger{Prefix: "MiddlewareService"}

// LogRequest
// Custom logger for logging of requests to the API server.
func LogRequest() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		t := time.Now()
		ctx.Next()
		lag := time.Since(t)

		middlewareLogger.LogMessage(
			fmt.Sprintf("%s %s %s %s", ctx.Request.Method, ctx.Request.RequestURI, ctx.Request.Proto, lag),
			"INFO",
		)
	}
}