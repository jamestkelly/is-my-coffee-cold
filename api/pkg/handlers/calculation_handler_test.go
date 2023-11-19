package handlers

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/models"
	"github.com/stretchr/testify/assert"
)

// TestPostCoffeeUndrinkableTimeRecursive
// Unit test to verify functionality of the PostCoffeeUndrinkableTimeRecursive method. It instantiates a default
// *gin.Engine and simulates the end-point.
func TestPostCoffeeUndrinkableTimeRecursive(t *testing.T) {
	r := gin.Default()
	r.POST("/is-my-coffee-cold", PostCoffeeUndrinkableTimeRecursive)

	t.Run("Valid Request", func(t *testing.T) {
		request := models.CoffeeUndrinkableTimeRequest{
			LocalTemperature:  21.0,
			CoffeeTemperature: 80.0,
			Undrinkable:       24.0,
			Factor:            180.0,
		}

		body, err := json.Marshal(request)
		assert.NoError(t, err)

		w := httptest.NewRecorder()
		req, _ := http.NewRequest("POST", "/is-my-coffee-cold", strings.NewReader(string(body)))
		req.Header.Set("Content-Type", "application/json")
		r.ServeHTTP(w, req)
		assert.Equal(t, 200, w.Code)
	})
}
