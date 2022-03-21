input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . . .
        # # # . .
        # . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . # .
        . . # # #
        . . . # .
        . . # # #
        . . # . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . # . .
        # # # # #
        # # # # #
        # . # . .
        # . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . . . #
        # # # # #
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # # . # #
        # # # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # # # .
        . # . # .
        `)
})
