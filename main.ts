radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        RingbitCar.forward()
    } else if (receivedNumber == 2) {
        RingbitCar.back()
    } else if (receivedNumber == 3) {
        RingbitCar.brake()
    } else if (receivedNumber == 4) {
        RingbitCar.turnleft()
    } else if (receivedNumber == 5) {
        RingbitCar.turnright()
    }
})
input.onButtonPressed(Button.A, function () {
    RingbitCar.forward()
})
input.onButtonPressed(Button.AB, function () {
    RingbitCar.brake()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.back()
})
basic.showString("Vitajte")
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
basic.pause(500)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
strip.showRainbow(1, 360)
strip.setBrightness(10000)
strip.setMatrixWidth(10)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    strip.rotate(2)
    strip.show()
    basic.pause(100)
})
basic.forever(function () {
    led.setBrightness(input.soundLevel())
})
