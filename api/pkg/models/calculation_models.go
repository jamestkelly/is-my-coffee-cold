package models

// CoffeeUndrinkableTimeRequest
// Basic structure for parsing of JSON payload from a POST request to calculate coffee
// temperature decay.
type CoffeeUndrinkableTimeRequest struct {
	LocalTemperature  float64 `json:"localTemperature"`
	CoffeeTemperature float64 `json:"coffeeTemperature"`
	Undrinkable       float64 `json:"undrinkable"`
	Factor            float64 `json:"factor"`
}

// CoffeeUndrinkableTimeResponse
// Basic structure to house the JSON payload response for the coffee temperature decay
// calculation.
type CoffeeUndrinkableTimeResponse struct {
	Seconds int `json:"seconds"`
}
