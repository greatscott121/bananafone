input.onPinPressed(TouchPin.P0, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
basic.forever(function () {
    basic.showIcon(IconNames.EighthNote)
    basic.pause(100)
    basic.showIcon(IconNames.QuarterNote)
    basic.pause(100)
})
