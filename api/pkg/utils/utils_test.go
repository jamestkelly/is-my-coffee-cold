package utils

import (
	"os"
	"reflect"
	"testing"
)

// TestIsNullOrEmptyString
// Unit test to verify that the IsNullOrEmptyString method correctly identifies null or empty strings.
func TestIsNullOrEmptyString(t *testing.T) {
	str := ""
	if !IsNullOrEmptyString(str) {
		t.Errorf("Expected input string '%s' to result in 'true', got '%v' instead.", str, IsNullOrEmptyString(str))
	}

	str = "Hello world!"
	if IsNullOrEmptyString(str) {
		t.Errorf("Expected input string '%s' to result in 'false', got '%v' instead.", str, IsNullOrEmptyString(str))
	}
}

// TestNonNullOrEmptyString
// Unit test to verify that the NonNullOrEmptyString method correctly identifies populated strings.
func TestNonNullOrEmptyString(t *testing.T) {
	str := ""
	if NonNullOrEmptyString(str) {
		t.Errorf("Expected input string '%s' to result in 'true', got '%v' instead.", str, NonNullOrEmptyString(str))
	}

	str = "Hello world!"
	if !NonNullOrEmptyString(str) {
		t.Errorf("Expected input string '%s' to result in 'false', got '%v' instead.", str, NonNullOrEmptyString(str))
	}
}

// TestPropertyIsEmpty
// Unit test to verify that the PropertyIsEmpty method correctly identifies empty properties.
func TestPropertyIsEmpty(t *testing.T) {
	type testObj struct {
		Message string
	}
	testObject := testObj{Message: "Hello world!"}

	if PropertyIsEmpty(reflect.ValueOf(testObject).Field(0)) {
		t.Errorf("Expected 'false' but got '%v' instead.", PropertyIsEmpty(reflect.ValueOf(testObject).Field(0)))
	}

	testObject = testObj{Message: ""}

	if !PropertyIsEmpty(reflect.ValueOf(testObject).Field(0)) {
		t.Errorf("Expected 'true' but got '%v' instead.", PropertyIsEmpty(reflect.ValueOf(testObject).Field(0)))
	}
}

// TestObjectIsPopulated
// Unit test to verify that the ObjectIsPopulated method correctly identifies populated structures.
func TestObjectIsPopulated(t *testing.T) {
	type testObj struct {
		Message     string
		ID          int
		Description string
	}
	tObj := testObj{
		Message:     "Hello world!",
		ID:          1,
		Description: "A 'Hello world!' message.",
	}

	if !ObjectIsPopulated(tObj) {
		t.Errorf("Expected 'true' but got '%v' instead.", !ObjectIsPopulated(tObj))
	}

	tObj = testObj{
		Message:     "Hello world!",
		ID:          1,
		Description: "",
	}

	if ObjectIsPopulated(tObj) {
		t.Errorf("Expected 'false' but got '%v' instead.", ObjectIsPopulated(tObj))
	}

}

// TestGetStringEnvironmentVariable
// Unit test to verify that the GetStringEnvironmentVariable correctly returns the environment variable.
func TestGetStringEnvironmentVariable(t *testing.T) {
	expectedValue := "TestValue"
	key := "TestVariable"

	err := os.Setenv(key, expectedValue)
	if err != nil {
		t.Errorf("Unexpected error while attempting to set test environment variable: %v", err)
	}

	value, err := GetStringEnvironmentVariable(key)
	if err != nil {
		t.Errorf("Error fetching environment variable with Key(%s) due to error: %v", key, err)
	}

	if reflect.TypeOf(expectedValue) != reflect.TypeOf(value) {
		t.Errorf("Expected returned value to be of type '%s', got '%s' instead.", reflect.TypeOf(expectedValue), reflect.TypeOf(value))
	}

	if expectedValue != value {
		t.Errorf("Expected '%s' but got '%s' instead.", expectedValue, value)
	}
}

// TestGetIntEnvironmentVariable
// Unit test to verify that the GetIntEnvironmentVariable correctly returns the environment variable.
func TestGetIntEnvironmentVariable(t *testing.T) {
	expectedValue := 7
	expectedValueAsStr := "7"
	key := "TestVariable"

	err := os.Setenv(key, expectedValueAsStr)
	if err != nil {
		t.Errorf("Unexpected error while attempting to set test environment variable: %v", err)
	}

	value, err := GetIntEnvironmentVariable(key)
	if err != nil {
		t.Errorf("Error fetching environment variable with Key(%s) due to error: %v", key, err)
	}

	if reflect.TypeOf(expectedValue) != reflect.TypeOf(value) {
		t.Errorf("Expected returned value to be of type '%s', got '%s' instead.", reflect.TypeOf(expectedValue), reflect.TypeOf(value))
	}

	if expectedValue != value {
		t.Errorf("Expected '%d' but got '%d' instead.", expectedValue, value)
	}
}

// TestGetBooleanEnvironmentVariable
// Unit test to verify that the GetBooleanEnvironmentVariable correctly returns the environment variable.
func TestGetBooleanEnvironmentVariable(t *testing.T) {
	expectedValue := "false"
	key := "TestVariable"

	err := os.Setenv(key, expectedValue)
	if err != nil {
		t.Errorf("Unexpected error while attempting to set test environment variable: %v", err)
	}

	value, err := GetBooleanEnvironmentVariable(key)
	if err != nil {
		t.Errorf("Error fetching environment variable with Key(%s) due to error: %v", key, err)
	}

	if reflect.TypeOf(false) != reflect.TypeOf(value) {
		t.Errorf("Expected returned value to be of type '%s', got '%s' instead.", reflect.TypeOf(expectedValue), reflect.TypeOf(value))
	}

	if value {
		t.Errorf("Expected 'false' but got '%v' instead.", value)
	}
}

// TestFindClosest
// Unit test to verify that the FindClosest method correctly finds the closest value to the given target.
func TestFindClosest(t *testing.T) {
	arr := []float64{1.0, 2.0, 3.0, 7.0, 9.0}

	// Test cases with various target values
	testCases := []struct {
		target   float64
		expected float64
	}{
		{target: 4.0, expected: 3.0},  // Closest value is 3.0
		{target: 8.0, expected: 7.0},  // Closest value is 7.0
		{target: 1.5, expected: 1.0},  // Closest value is 1.0
		{target: 10.0, expected: 9.0}, // Closest value is 9.0
		// Add more test cases as needed
	}

	for _, testCase := range testCases {
		result := FindClosest(arr, 0, len(arr)-1, testCase.target)
		if result != testCase.expected {
			t.Errorf("For target %v, expected %v, but got %v", testCase.target, testCase.expected, result)
		}
	}
}

// TestFindClosestIndex
// Unit test to verify that the FindClosestIndex method correctly finds the index of the closest value to the
// given target.
func TestFindClosestIndex(t *testing.T) {
	arr := []float64{1.0, 2.0, 3.0, 7.0, 9.0}

	// Test cases with various target values
	testCases := []struct {
		target   float64
		expected int
	}{
		{target: 4.0, expected: 2},  // Closest value is at index 2
		{target: 8.0, expected: 3},  // Closest value is at index 3
		{target: 1.5, expected: 0},  // Closest value is at index 0
		{target: 10.0, expected: 4}, // Closest value is at index 4
		// Add more test cases as needed
	}

	for _, testCase := range testCases {
		result := FindClosestIndex(arr, 0, len(arr)-1, testCase.target)
		if result != testCase.expected {
			t.Errorf("For target %v, expected index %v, but got %v", testCase.target, testCase.expected, result)
		}
	}
}

// TestAlmostEqual
// Unit test to verify that the AlmostEqual method correctly verifies that two float64
// values are within the provided epsilon.
func TestAlmostEqual(t *testing.T) {
	tests := []struct {
		a, b, epsilon float64
		expected      bool
	}{
		{1.0, 1.0002, 0.0002, true},                // Equal within epsilon
		{0.0, 0.0001, 0.0001, true},                // Equal within epsilon
		{-1.0, -1.0002, 0.0002, true},              // Equal within epsilon
		{123456789.0, 123456788.999, 0.001, false}, // Not within epsilon
	}

	for _, test := range tests {
		result := AlmostEqual(test.a, test.b, test.epsilon)
		if result != test.expected {
			t.Errorf("For %.4f and %.4f with epsilon %.4f, expected %t, but got %t",
				test.a, test.b, test.epsilon, test.expected, result)
		}
	}
}
