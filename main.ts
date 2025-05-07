input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("C5 B C5 A C5 G C5 B ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
