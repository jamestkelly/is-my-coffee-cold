package log

import (
	"fmt"
	"time"

	"github.com/fatih/color"
	"github.com/jamestkelly/is-my-coffee-cold/pkg/utils"
)

// base The base formatted string to be printed by the Logger.
// magenta A magenta colour utilised for "DEBUG" level logs.
// cyan A cyan colour utilised for standard output to the Logger.
// green A green colour utilised for "INFO" level logs.
// yellow A yellow colour utilised for "WARN" level logs.
// red A red colour utilised for "ERROR" level logs.
var (
	base    = "[%s] %s [%s] - %s\r\n"
	magenta = color.New(color.FgMagenta).SprintFunc()
	cyan    = color.New(color.FgCyan).SprintFunc()
	green   = color.New(color.FgGreen).SprintFunc()
	yellow  = color.New(color.FgYellow).SprintFunc()
	red     = color.New(color.FgRed).SprintFunc()
)

// Logger
// A structure containing the Prefix or name of the service that logs are written for.
type Logger struct {
	Prefix string
}

// LogMessage
// Structure method to print a log message provided both a message and severity.
func (l *Logger) LogMessage(message, severity string) {
	if utils.IsNullOrEmptyString(message) {
		l.LogMessage("No message string passed to logger interface.", "ERROR")
	}

	if utils.IsNullOrEmptyString(severity) {
		l.LogMessage("No severity string passed to logger interface.", "ERROR")
	}

	logTime := time.Now().Format("2006-01-02 15:04:05")
	fmt.Printf(base, logTime, formatSeverity(severity), l.Prefix, cyan(message))
}

// formatSeverity
// Private method to convert the provided severity string to its corresponding colour for printing.
func formatSeverity(severity string) string {
	var formattedSeverity string

	switch severity {
	case "DEBUG":
		formattedSeverity = magenta(severity)
	case "INFO":
		formattedSeverity = green(severity)
	case "WARN":
		formattedSeverity = yellow(severity)
	case "ERROR":
		formattedSeverity = red(severity)
	}

	return formattedSeverity
}
