let Mão = 0
input.onGesture(Gesture.Shake, function () {
    Mão = randint(0, 2)
    if (Mão == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Mão == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # . # . #
            . # # # .
            . # # # .
            `)
    } else if (Mão == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
