package services

import (
	"fmt"
	"time"

	"github.com/elastic/go-sysinfo"
	"github.com/jamestkelly/go-logger-interface"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/models"
)

// statusServiceLogger A logger interface utilised for status serivce method logging.
var statusServiceLogger = logger.LoggerInterface{Prefix: "StatusService"}

// GetStatusCheckInformation
// Retrieves the status check information.
func GetStatusCheckInformation() (models.StatusResponse, error) {
	var payload models.StatusResponse
	process, err := sysinfo.Self()
	if err != nil {
		statusServiceLogger.LogMessage(
			fmt.Sprintf("Error fetching process information: %v", err),
			"ERROR",
		)

		return payload, err
	}

	processInfo, err := process.Info()
	if err != nil {
		statusServiceLogger.LogMessage(
			fmt.Sprintf("Error parsing process information: %v", err),
			"ERROR",
		)

		return payload, err
	}

	payload.Date = time.Now()
	payload.Message = fmt.Sprintf("`is-my-coffee-cold` API has been brewing since: %s", processInfo.StartTime.String())
	return payload, nil
}

// GetMachineInformation
// Retrieves the machineset information.
func GetMachineInformation() (models.MachineInformation, error) {
	var payload models.MachineInformation
	process, err := sysinfo.Host()
	if err != nil {
		statusServiceLogger.LogMessage(
			fmt.Sprintf("Error retrieving host machine information: %v", err),
			"ERROR",
		)

		return payload, err
	}

	memoryInfo, err := process.Memory()
	if err != nil {
		statusServiceLogger.LogMessage(
			fmt.Sprintf("Error parsing host machine memory information from process: %v", err),
			"ERROR",
		)

		return payload, err
	}

	payload.Hostname = process.Info().Hostname
	payload.Architecture = process.Info().Architecture
	payload.RAM = memoryInfo.Total / 1024 / 1024
	payload.VirtualRAM = memoryInfo.VirtualTotal / 1024 / 1024
	return payload, nil
}
