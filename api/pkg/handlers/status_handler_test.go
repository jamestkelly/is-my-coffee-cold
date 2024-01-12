package handlers

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

// TestStatusCheck
// Unit test to verify functionality of the StatusCheck method. It instantiates a default
// *gin.Engine and simulates the end-point.
func TestStatusCheck(t *testing.T) {
	r := gin.Default()
	r.GET("/status", StatusCheck)
	w := httptest.NewRecorder()
	req, err := http.NewRequest("GET", "/status", nil)
	if err != nil {
		t.Errorf("Error making request to '/status' end-point: %v", err)
	}

	r.ServeHTTP(w, req)
	assert.Equal(t, 200, w.Code)

	if !strings.Contains(w.Body.String(), "`is-my-coffee-cold` API has been brewing since:") {
		t.Errorf("Response body does not contain expected output.")
	}
}

// TestMachineInformation
// Unit test to verify functionality of the MachineInformation method. It instantiates a default
// *gin.Engine and simulates the end-point.
func TestMachineInformation(t *testing.T) {
	r := gin.Default()
	r.GET("/machine", MachineInformation)
	w := httptest.NewRecorder()
	req, err := http.NewRequest("GET", "/machine", nil)
	if err != nil {
		t.Errorf("Error making request to '/machine' end-point: %v", err)
	}

	r.ServeHTTP(w, req)
	assert.Equal(t, 200, w.Code)
}
