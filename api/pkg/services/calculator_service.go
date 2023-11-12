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

// calculateDecay
// Approximates the amount of time taken in seconds for a coffee of a given temperature to reach the
// provided `undrinkable` temperature given the surrounding temperature. This method combines Newton's
// rate of cooling with the modified Euler method to interpolate the point at which the temperature has
// decayed corresponding to the given limit.
func calculateDecay(localTemp, coffeeTemp, undrinkableTemp float64) int {
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
	end := 40.0  // Minutes
	steps := end * 60.0
	stepSize := (end - start) / steps
	timeArr := getSteppedTimeArray(start, steps, stepSize)
	tempArr := getApproximateTemparatureArray(localTemp, coffeeTemp, steps, stepSize)
	closestTempIndex := utils.FindClosestIndex(tempArr, 0, len(tempArr)-1, undrinkableTemp)

	return int(timeArr[closestTempIndex] * 60)
}
