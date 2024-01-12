package handlers

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jamestkelly/go-logger-interface"
)

// statusLogger A logger interface for printing logs regarding status information.
var authLogger = logger.LoggerInterface{Prefix: "AuthHandler"}

// GetUserById
// Lorem Ipsum
func GetUserById(ctx *gin.Context) {
	uid := ctx.Param("uid")
	fmt.Printf("%s", uid)
}

// GetUserByEmail
// Lorem Ipsum
func GetUserByEmail(ctx *gin.Context) {

}
