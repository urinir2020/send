input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(7)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
})
radio.setGroup(10)
basic.showLeds(`
    # # # # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
