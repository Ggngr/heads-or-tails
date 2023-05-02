input.onButtonPressed(Button.A, function () {
    basic.showString("Ali")
    basic.showNumber(a)
    basic.showString("Beren")
    basic.showNumber(b)
})
input.onGesture(Gesture.Shake, function () {
    heads = Math.randomBoolean()
    tails = Math.randomBoolean()
    if (tails == heads) {
        basic.showString("a")
        basic.pause(100)
        a += 1
    } else {
        basic.showString("b")
        basic.pause(100)
        b += 1
    }
    basic.showIcon(IconNames.Yes)
})
let b = 0
let a = 0
let tails = false
let heads = false
heads = false
tails = false
a = 0
b = 0
