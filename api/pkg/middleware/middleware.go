package middleware

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jamestkelly/go-logger-interface"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/auth"
)

var middlewareLogger = logger.LoggerInterface{Prefix: "MiddlewareService"}

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

// AuthenticationMiddleware
// Middleware function to require tokens from request headers and validate them
func AuthenticationMiddleware(ctx *gin.Context) {
	idToken := ctx.Request.Header.Get("Authorization")

	if isValid, err := auth.VerifyUserToken(ctx.Request.Context(), idToken); err != nil || !isValid {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Unauthorised"})
		return
	}

	ctx.Next()
}
