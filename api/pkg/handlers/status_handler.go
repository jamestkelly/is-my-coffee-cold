package handlers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/log"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/services"
)

// statusLogger A logger interface for printing logs regarding status information.
var statusLogger = log.Logger{Prefix: "StatusHandler"}

// StatusCheck
// Returns a basic health-check response.
func StatusCheck(ctx *gin.Context) {
	payload, err := services.GetStatusCheckInformation()
	if err != nil {
		message := fmt.Sprintf("Error fetching process information: %v", err)
		statusLogger.LogMessage(
			message,
			"ERROR",
		)
		ctx.IndentedJSON(
			http.StatusInternalServerError,
			message,
		)
	}

	ctx.IndentedJSON(http.StatusOK, payload)
}

// MachineInformation
// Additional status verification message to retrieve machineset details.
func MachineInformation(ctx *gin.Context) {
	payload, err := services.GetMachineInformation()
	if err != nil {
		message := fmt.Sprintf("Error fetching host machine information: %v", err)
		statusLogger.LogMessage(
			message,
			"ERROR",
		)
		ctx.IndentedJSON(
			http.StatusInternalServerError,
			message,
		)
	}

	ctx.IndentedJSON(http.StatusOK, payload)
}
