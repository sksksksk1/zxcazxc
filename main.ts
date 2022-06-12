input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P2, 0)
})
OLED.init(128, 64)
let strip = neopixel.create(DigitalPin.P3, 8, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.show()
basic.forever(function () {
    OLED.writeStringNewLine("The Moisture senser's value is ")
    OLED.writeNumNewLine(pins.analogReadPin(AnalogPin.P1))
    basic.pause(100)
    if (pins.analogReadPin(AnalogPin.P1) >= 0 && pins.analogReadPin(AnalogPin.P1) < 35) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        pins.servoWritePin(AnalogPin.P2, 180)
        OLED.clear()
    } else if (pins.analogReadPin(AnalogPin.P1) >= 35 && pins.analogReadPin(AnalogPin.P1) < 70) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        pins.servoWritePin(AnalogPin.P2, 180)
        OLED.clear()
    } else if (pins.analogReadPin(AnalogPin.P1) >= 70 && pins.analogReadPin(AnalogPin.P1) < 105) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        pins.servoWritePin(AnalogPin.P2, 180)
        OLED.clear()
    } else if (pins.analogReadPin(AnalogPin.P1) >= 105 && pins.analogReadPin(AnalogPin.P1) < 140) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        pins.servoWritePin(AnalogPin.P2, 180)
        OLED.clear()
    } else if (pins.analogReadPin(AnalogPin.P1) >= 140 && pins.analogReadPin(AnalogPin.P1) < 175) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        pins.servoWritePin(AnalogPin.P2, 180)
        OLED.clear()
    } else if (pins.analogReadPin(AnalogPin.P1) >= 175 && pins.analogReadPin(AnalogPin.P1) < 210) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        pins.servoWritePin(AnalogPin.P2, 180)
        OLED.clear()
    } else if (pins.analogReadPin(AnalogPin.P1) >= 210 && pins.analogReadPin(AnalogPin.P1) < 245) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        pins.servoWritePin(AnalogPin.P2, 180)
        OLED.clear()
    } else if (pins.analogReadPin(AnalogPin.P1) >= 245 && pins.analogReadPin(AnalogPin.P1) < 270) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        pins.servoWritePin(AnalogPin.P2, 0)
        OLED.clear()
    }
})
