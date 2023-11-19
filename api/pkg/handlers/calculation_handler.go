package handlers

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/log"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/models"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/services"
)

// calculationLogger A logger interface for printing logs regarding calculation functions.
var calculationLogger = log.Logger{Prefix: "CalculationHandler"}

// PostCoffeeUndrinkableTimeRecursive
// Handler for request to calculate the amount of time a coffee goes cold via the recursive implementation.
func PostCoffeeUndrinkableTimeRecursive(ctx *gin.Context) {
	var request models.CoffeeUndrinkableTimeRequest
	factor := 180.0

	if err := ctx.BindJSON(&request); err != nil {
		msg := fmt.Sprintf("Unable to parse request due to error: %v", err)
		calculationLogger.LogMessage(msg, "ERROR")
		ctx.IndentedJSON(http.StatusBadRequest, msg)
	}

	if request.LocalTemperature == 0.0 || request.CoffeeTemperature == 0.0 || request.Undrinkable == 0.0 {
		ctx.IndentedJSON(http.StatusBadRequest, "No temperature can be zero (0) to calculate coffee temperature decay.")
	}

	if request.CoffeeTemperature < request.Undrinkable {
		msg := fmt.Sprintf("Coffee temperature %vC cannot be lower than undrinkable temperature %vC.", request.CoffeeTemperature, request.Undrinkable)
		ctx.IndentedJSON(http.StatusBadRequest, msg)
	}

	if request.Undrinkable <= request.LocalTemperature {
		msg := fmt.Sprintf("Undrinkable temperature %vC cannot be lower than local temperature %vC.", request.Undrinkable, request.LocalTemperature)
		ctx.IndentedJSON(http.StatusBadRequest, msg)
	}

	if request.Factor == -1.0 {
		ctx.IndentedJSON(
			http.StatusOK,
			services.CalculateDecayRecursive(
				request.LocalTemperature,
				request.CoffeeTemperature,
				request.Undrinkable,
				factor,
			),
		)
	}

	ctx.IndentedJSON(
		http.StatusOK,
		services.CalculateDecayRecursive(
			request.LocalTemperature,
			request.CoffeeTemperature,
			request.Undrinkable,
			request.Factor,
		),
	)
}

// PostCoffeeUndrinkableTimeIterative
// Handler for request to calculate the amount of time a coffee goes cold via the recursive implementation.
//
// Deprecated: The iterative method for this decay method was determined to be less performant than the
// recursive improved method.
func PostCoffeeUndrinkableTimeIterative(ctx *gin.Context) {
	var request models.CoffeeUndrinkableTimeRequest
	factor := 180.0

	if err := ctx.BindJSON(&request); err != nil {
		msg := fmt.Sprintf("Unable to parse request due to error: %v", err)
		calculationLogger.LogMessage(msg, "ERROR")
		ctx.IndentedJSON(http.StatusBadRequest, msg)
	}

	if request.LocalTemperature == 0.0 || request.CoffeeTemperature == 0.0 || request.Undrinkable == 0.0 {
		ctx.IndentedJSON(http.StatusBadRequest, "No temperature can be zero (0) to calculate coffee temperature decay.")
	}

	if request.CoffeeTemperature < request.Undrinkable {
		msg := fmt.Sprintf("Coffee temperature %vC cannot be lower than undrinkable temperature %vC.", request.CoffeeTemperature, request.Undrinkable)
		ctx.IndentedJSON(http.StatusBadRequest, msg)
	}

	if request.Undrinkable <= request.LocalTemperature {
		msg := fmt.Sprintf("Undrinkable temperature %vC cannot be lower than local temperature %vC.", request.Undrinkable, request.LocalTemperature)
		ctx.IndentedJSON(http.StatusBadRequest, msg)
	}

	if request.Factor == -1.0 {
		ctx.IndentedJSON(
			http.StatusOK,
			services.CalculateDecayIterative(
				request.LocalTemperature,
				request.CoffeeTemperature,
				request.Undrinkable,
				factor,
			),
		)
	}

	ctx.IndentedJSON(
		http.StatusOK,
		services.CalculateDecayIterative(
			request.LocalTemperature,
			request.CoffeeTemperature,
			request.Undrinkable,
			request.Factor,
		),
	)
}