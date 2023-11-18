package services

import (
	"fmt"

	"github.com/jamestkelly/is-my-coffee-cold/pkg/log"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/utils"
)

// calculatorServiceLogger A logger interface utilised for calculator serivce method logging.
var calculatorServiceLogger = log.Logger{Prefix: "StatusService"}

// getSteppedTimeArray
// Generates an array of times in minutes, e.g., 1.0 for 1 minute, incremented by the provided step size.
func getSteppedTimeArray(start, steps, stepSize float64) []float64 {
	arr := make([]float64, int(steps))
	arr[0] = start

	for i := 1; i < len(arr); i++ {
		arr[i] = start + stepSize*float64(i)
	}

	return arr
}

// getApproximateTemparatureArray
// Approximates the corresponding coffee temperature at each step given the set step size.
func getApproximateTemparatureArray(localTemp, coffeeTemp, steps, stepSize float64) []float64 {
	arr := make([]float64, int(steps))
	arr[0] = coffeeTemp
	k := 0.1 // Positive constant

	// Approximate corresponding coffee temperature for each corresponding time
	for i := 0; i < len(arr)-1; i++ {
		k1 := stepSize * ((-k) * (arr[i] - localTemp))
		k2 := stepSize * ((-k) * (arr[i] + k1 - localTemp))
		arr[i+1] = arr[i] + 0.5*(k1+k2)
	}

	return arr
}

// calculateDecayRecursive
// Approximates the amount of time taken in seconds for a coffee of a given temperature to reach the
// provided `undrinkable` temperature given the surrounding temperature. This method combines Newton's
// rate of cooling with the modified Euler method to interpolate the point at which the temperature has
// decayed corresponding to the given limit. It uses the recursive `utils.FindClosestIndex` method to
// determine the point at which the coffee becomes undrinkable.
func calculateDecayRecursive(localTemp, coffeeTemp, undrinkableTemp, factor float64) int {
	calculatorServiceLogger.LogMessage(
		fmt.Sprintf(
			"Calculating coffee temperature decay to %vC, given local temperature of %vC and initial coffee temperature %vC.",
			undrinkableTemp,
			localTemp,
			coffeeTemp,
		),
		"INFO",
	)
	start := 0.0 // Minutes
	end := 180.0 // Minutes
	steps := end * factor
	stepSize := (end - start) / steps
	timeArr := getSteppedTimeArray(start, steps, stepSize)
	tempArr := getApproximateTemparatureArray(localTemp, coffeeTemp, steps, stepSize)
	closestTempIndex := utils.FindClosestIndex(tempArr, 0, len(tempArr)-1, undrinkableTemp)

	return int(timeArr[closestTempIndex] * 60)
}

// calculateDecayIterative
// Approximates the amount of time taken in seconds for a coffee of a given temperature to reach the
// provided `undrinkable` temperature given the surrounding temperature. This method combines Newton's
// rate of cooling with the modified Euler method to interpolate the point at which the temperature has
// decayed corresponding to the given limit. It uses the iterate or _original_ version of the calculateDecay
// method.
//
// Deprecated: The iterative method for this decay method was determined to be less performant than the
// recursive improved method.
func calculateDecayIterative(localTemp, coffeeTemp, undrinkableTemp, factor float64) int {
	calculatorServiceLogger.LogMessage(
		fmt.Sprintf(
			"Calculating coffee temperature decay to %vC, given local temperature of %vC and initial coffee temperature %vC.",
			undrinkableTemp,
			localTemp,
			coffeeTemp,
		),
		"INFO",
	)
	start := 0.0 // Minutes
	end := 180.0 // Minutes
	steps := end * factor
	stepSize := (end - start) / steps
	timeArr := getSteppedTimeArray(start, steps, stepSize)
	tempArr := getApproximateTemparatureArray(localTemp, coffeeTemp, steps, stepSize)

	minutes := 0.0

	for k := 0; k < len(tempArr); k++ {
		temperature := tempArr[k]
		if temperature < undrinkableTemp {
			minutes = timeArr[k]
			break
		}
	}

	return int(minutes * 60.0)
}
