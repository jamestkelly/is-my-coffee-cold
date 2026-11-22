# Is my coffee cold?

A free [coffee cooling calculator](https://is-my-coffee-cold.vercel.app/). Estimate how long a drink will take to reach a personal temperature cutoff. No account, API key, or location is required.

## Calculate an estimate

Use three finite temperatures, all in degrees Celsius: starting coffee temperature, ambient air temperature, and the drinker's cutoff. Zero is a valid reading.

1. If any reading is missing, ask for it.
2. If the coffee is already at or below the cutoff, the wait is zero.
3. Otherwise, if the air is at or above the cutoff, the drink will not reach that temperature in finite time.
4. Otherwise, minutes = `ln((start - air) / (cutoff - air)) / 0.1`. Use the natural logarithm; round only for display.

Example: coffee at 80 °C in 21 °C air reaches 24 °C after about 30 minutes. Change only the cutoff to 40 °C and the estimate becomes about 11 minutes.

The fixed cooling rate assumes constant air temperature and is not calibrated for the cup, lid or drink volume. The estimate is not a measurement of the drink's current temperature.

## Weather and privacy

Enter the room temperature for indoor use. Outdoors, the visitor can explicitly request a reading from [Open-Meteo](https://open-meteo.com/). Only then does the browser request location permission and send coordinates rounded to one decimal place to the weather provider. The temperature stays editable if permission is denied or the lookup fails.

## Links

- [Calculator and language selector](https://is-my-coffee-cold.vercel.app/)
- [Localized page URLs](https://is-my-coffee-cold.vercel.app/sitemap.xml)
- [Source, model derivation and local setup](https://github.com/jamestkelly/is-my-coffee-cold)
- [Report an issue](https://github.com/jamestkelly/is-my-coffee-cold/issues)
