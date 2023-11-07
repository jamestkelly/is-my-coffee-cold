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
