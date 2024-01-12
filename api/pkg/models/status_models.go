package models

import "time"

// StatusResponse
// Structure for managing status response objects.
type StatusResponse struct {
	Date    time.Time
	Message string
}

// MachineInformation
// Structure for managing machine information response objects.
type MachineInformation struct {
	Hostname     string `json:"name"`
	Architecture string `json:"architecture"`
	RAM          uint64 `json:"total_bytes"`
	VirtualRAM   uint64 `json:"virtual_total_bytes"`
}
