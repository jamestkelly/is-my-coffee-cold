package services

import (
	"fmt"
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
func TestGetApproximateTemparatureArray(t *testing.T) {
	epsilon := 1e-6
	localTemp := 25.0
	coffeeTemp := 80.0
	steps := 10.0
	stepSize := 0.1
	result := getApproximateTemparatureArray(localTemp, coffeeTemp, steps, stepSize)

	if len(result) != int(steps) {
		t.Errorf("Expected result length: %d, got: %d", int(steps), len(result))
	}

	expected := []float64{80, 79.45275, 78.9109451375, 78.37453123338187, 77.84345464760972, 77.317662273866, 76.79710153424104, 76.28172037397533, 75.77146725625428, 75.26629115705455}
	for i, v := range result {
		if !utils.AlmostEqual(v, expected[i], epsilon) {
			t.Errorf("At step %d, expected: %f, got: %f", i, expected[i], v)
		}
	}
}

// TestCalculateDecayRecursive
// Unit test to verify that the `calculateDecayRecursive` method correctly approximates the amount of time
// taken for a liquid to cool via the implementation of the modified Euler method alongside Newton's
// rate of cooling.
func TestCalculateDecayRecursive(t *testing.T) {
	localTemperature := 21.0  // Celcius
	coffeeTemperature := 80.0 // Celcius
	undrinkable := 24.0       // Celcius
	expectedResult := 1787    // Seconds
	factor := 1000.0
	result := CalculateDecayRecursive(localTemperature, coffeeTemperature, undrinkable, factor)

	if reflect.TypeOf(result.Seconds) != reflect.TypeOf(expectedResult) {
		t.Errorf("Expected result to be type of '%s', got '%s' instead.", reflect.TypeOf(expectedResult), reflect.TypeOf(result))
	}

	if result.Seconds != expectedResult {
		t.Errorf("Expected result to be %d, got %d instead.", expectedResult, result)
	}
}

// TestCalculateDecayIterative
// Unit test to verify that the `calculateDecayIterative` method correctly approximates the amount of time
// taken for a liquid to cool via the implementation of the modified Euler method alongside Newton's
// rate of cooling.
func TestCalculateDecayIterative(t *testing.T) {
	localTemperature := 21.0  // Celcius
	coffeeTemperature := 80.0 // Celcius
	undrinkable := 24.0       // Celcius
	expectedResult := 1787    // Seconds
	factor := 1000.0
	result := CalculateDecayIterative(localTemperature, coffeeTemperature, undrinkable, factor)

	if reflect.TypeOf(result.Seconds) != reflect.TypeOf(expectedResult) {
		t.Errorf("Expected result to be type of '%s', got '%s' instead.", reflect.TypeOf(expectedResult), reflect.TypeOf(result.Seconds))
	}

	if result.Seconds != expectedResult {
		t.Errorf("Expected result to be %d, got %d instead.", expectedResult, result.Seconds)
	}
}

// table
// Simple structure to house input steps for iterations in benchmark tests.
var table = []struct {
	input float64
}{
	{input: 1000.0},
	{input: 10000.0},
	{input: 100000.0},
	{input: 1000000.0},
}

// BenchmarkCalculateDecayIterative
// Benchmark test for the iterative calculation of temperature decay.
func BenchmarkCalculateDecayIterative(b *testing.B) {
	localTemperature := 21.0  // Celcius
	coffeeTemperature := 80.0 // Celcius
	undrinkable := 24.0       // Celcius

	for _, v := range table {
		b.Run(fmt.Sprintf("steps_%v", v.input), func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				result := CalculateDecayIterative(localTemperature, coffeeTemperature, undrinkable, v.input)
				b.Log(result)
			}
		})
	}
}

// BenchmarkCalculateDecayRecursive
// Benchmark test for the recursive calculation of temperature decay.
func BenchmarkCalculateDecayRecursive(b *testing.B) {
	localTemperature := 21.0  // Celcius
	coffeeTemperature := 80.0 // Celcius
	undrinkable := 24.0       // Celcius

	for _, v := range table {
		b.Run(fmt.Sprintf("steps_%v", v.input), func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				result := CalculateDecayRecursive(localTemperature, coffeeTemperature, undrinkable, v.input)
				b.Log(result)
			}
		})
	}
}
