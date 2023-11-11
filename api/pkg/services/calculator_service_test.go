package services

import (
	"reflect"
	"testing"

	"github.com/jamestkelly/is-my-coffee-cold/pkg/utils"
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
// Test for getApproximateTemparatureArray
func TestGetApproximateTemparatureArray(t *testing.T) {
	// Define a small epsilon for float64 comparisons
	epsilon := 1e-6

	// Test case 1
	localTemp := 25.0
	coffeeTemp := 80.0
	steps := 10.0
	stepSize := 0.1
	result := getApproximateTemparatureArray(localTemp, coffeeTemp, steps, stepSize)

	t.Log(result)

	// Check if the result has the correct length
	if len(result) != int(steps) {
		t.Errorf("Expected result length: %d, got: %d", int(steps), len(result))
	}

	// Check if the result values are approximately correct
	expected := []float64{80, 79.45275, 78.9109451375, 78.37453123338187, 77.84345464760972, 77.317662273866, 76.79710153424104, 76.28172037397533, 75.77146725625428, 75.26629115705455}
	for i, v := range result {
		if !utils.AlmostEqual(v, expected[i], epsilon) {
			t.Errorf("At step %d, expected: %f, got: %f", i, expected[i], v)
		}
	}
}
