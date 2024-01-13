package handlers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jamestkelly/go-logger-interface"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/auth"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/utils"
)

// statusLogger A logger interface for printing logs regarding status information.
var authLogger = logger.LoggerInterface{Prefix: "AuthHandler"}

// GetUserById
// Retrieves a user by their UID.
func GetUserById(ctx *gin.Context) {
	uid := ctx.Param("uid")

	if utils.IsNullOrEmptyString(uid) {
		msg := "Empty UID provided as path parameter. Cannot process request."
		authLogger.LogMessage(
			fmt.Sprintf("%d: %s", http.StatusBadRequest, msg),
			"ERROR",
		)
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": msg})
		return
	}

	user, err := auth.GetUserByUID(ctx, uid)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err})
	}

	ctx.JSON(
		http.StatusOK,
		user,
	)
}

// GetUserByEmail
// Retrieves a user by their email address.
func GetUserByEmail(ctx *gin.Context) {
	email := ctx.Param("email")

	if utils.IsNullOrEmptyString(email) {
		msg := "Empty User email provided as path parameter. Cannot process request."
		authLogger.LogMessage(
			fmt.Sprintf("%d: %s", http.StatusBadRequest, msg),
			"ERROR",
		)
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": msg})
		return
	}

	user, err := auth.GetUserByEmail(ctx, email)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err})
	}

	ctx.JSON(
		http.StatusOK,
		user,
	)
}
