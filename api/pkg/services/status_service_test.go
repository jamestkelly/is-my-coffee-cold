package services

import (
	"testing"

	"github.com/jamestkelly/is-my-coffee-cold/pkg/utils"
)

// TestGetStatusCheck
// Unit test to verify that the status check information is retrieved correctly.
func TestStatusCheck(t *testing.T) {
	payload, err := GetStatusCheckInformation()
	if err != nil {
		t.Errorf("Error fetching status check information: %v", err)
	}

	if !utils.ObjectIsPopulated(payload) {
		t.Errorf("Not all fields of the payload are populated correctly.")
	}
}

// TestGetMachineInformation
// Unit test to verify that the machine information is retrieved correctly.
func TestGetMachineInformation(t *testing.T) {
	payload, err := GetMachineInformation()
	if err != nil {
		t.Errorf("Error fetching machine information: %v", err)
	}

	if !utils.ObjectIsPopulated(payload) {
		t.Errorf("Not all fields of the payload are populated correctly.")
	}
}
