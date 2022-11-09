input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
