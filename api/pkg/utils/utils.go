package utils

import (
	"errors"
	"fmt"
	"math"
	"os"
	"reflect"
	"strconv"
)

// IsNullOrEmptyString
// Returns a boolean value indicating if a string is either empty or null.
func IsNullOrEmptyString(str string) bool {
	if str == "" || len(str) <= 0 {
		return true
	}

	return false
}

// NonNullOrEmptyString
// Inverse method of `IsNullOrEmptyString`, returns true if the string is neither empty nor null.
func NonNullOrEmptyString(str string) bool {
	return !IsNullOrEmptyString(str)
}

// PropertyIsEmpty
// Generic method used on structures to verify if a given field or property is empty.
func PropertyIsEmpty(value reflect.Value) bool {
	switch value.Kind() {
	case reflect.String, reflect.Slice, reflect.Map:
		return value.Len() == 0
	case reflect.Ptr:
		return !value.IsNil()
	default:
		return false
	}
}

// ObjectIsPopulated
// Checks if all fields of a given object are populated.
func ObjectIsPopulated(obj interface{}) bool {
	reflectValue := reflect.ValueOf(obj)

	for i := 0; i < reflectValue.NumField(); i++ {
		field := reflectValue.Field(i)
		if PropertyIsEmpty(field) {
			return false
		}
	}

	return true
}

// GetStringEnvironmentVariable
// Fetches the corresponding string value for an environment variable as defined by the key provided.
func GetStringEnvironmentVariable(key string) (string, error) {
	value := os.Getenv(key)
	if IsNullOrEmptyString(value) {
		return value, errors.New(fmt.Sprintf("Key(%s) is not set or has an empty value", key))
	}

	return value, nil
}

// GetIntEnvironmentVariable
// Fetches the corresponding int value for an environment variable as defined by the key provided.
func GetIntEnvironmentVariable(key string) (int, error) {
	value, err := GetStringEnvironmentVariable(key)
	if err != nil {
		return 0, err
	}

	res, err := strconv.Atoi(value)
	if err != nil {
		return 0, errors.New(fmt.Sprintf("Unable to convert value of Key(%s) to integer due to error: %v", key, err))
	}

	return res, nil
}

// GetBooleanEnvironmentVariable
// Fetches the corresponding bool value for an environment variable as defined by the key provided.
func GetBooleanEnvironmentVariable(key string) (bool, error) {
	value, err := GetStringEnvironmentVariable(key)
	if err != nil {
		return false, err
	}

	res, err := strconv.ParseBool(value)
	if err != nil {
		return false, errors.New(fmt.Sprintf("Unabled to convert value of Key(%s) to boolean due to error: %v", key, err))
	}

	return res, nil
}

// FindClosest
// Recursive method to find the closest value in an array to the provided input value.
func FindClosest(arr []float64, left, right int, target float64) float64 {
	// Base case for when there is only one element remaining in the array
	if left == right {
		return arr[left]
	}

	// Find mid-point index
	mid := (left + right) / 2

	// Recusrive search to find closest values in left and right halves of array
	leftClosest := FindClosest(arr, left, mid, target)
	rightClosest := FindClosest(arr, mid+1, right, target)

	if math.Abs(leftClosest-target) <= math.Abs(rightClosest-target) {
		return leftClosest
	}

	return rightClosest
}

// FindClosestIndex
// Recursive method to find the index of the closest value in an array to the provided input value.
func FindClosestIndex(arr []float64, left, right int, target float64) int {
	// Base case for when there is only one element remaining in the array
	if left == right {
		return left
	}

	// Find mid-point index
	mid := (left + right) / 2

	// Recusrive search to find closest values in left and right halves of array
	leftClosestIndex := FindClosestIndex(arr, left, mid, target)
	rightClosestIndex := FindClosestIndex(arr, mid+1, right, target)

	if math.Abs(arr[leftClosestIndex]-target) <= math.Abs(arr[rightClosestIndex]-target) {
		return leftClosestIndex
	}

	return rightClosestIndex
}

// AlmostEqual
// Checks if two float64 values are approximately equal
func AlmostEqual(a, b, epsilon float64) bool {
	return math.Abs(a-b) <= epsilon
}
