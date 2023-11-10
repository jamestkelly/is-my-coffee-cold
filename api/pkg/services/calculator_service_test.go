package services

import (
	"reflect"
	"testing"
)

// TestGetSteppedTimeArray
// Unit test to verify that the getSteppedTimeArray method correctly generates an array of float64 elements
// that increment from the given starting point by the provided step size for the given number of steps.
func TestGetSteppedTimeArray(t *testing.T) {
	start := 0.0
	steps := 5.0
	stepSize := 1.0
	expectedResult := []float64{0, 1, 2, 3, 4}
	result := getSteppedTimeArray(start, steps, stepSize)
	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("Test case 1 failed. Expected %v, got %v", expectedResult, result)
	}

	start = 2.5
	steps = 3.0
	stepSize = 2.0
	expectedResult = []float64{2.5, 4.5, 6.5}
	result = getSteppedTimeArray(start, steps, stepSize)
	if !reflect.DeepEqual(result, expectedResult) {
		t.Errorf("Test case 2 failed. Expected %v, got %v", expectedResult, result)
	}
}

// TestGetApproximateTemparatureArray
// Unit test to verify that the getApproximateTemparatureArray method correctly generates an array of
// approximated temperatures.
func TestGetApproximateTemparatureArray(t *testing.T) {

}
