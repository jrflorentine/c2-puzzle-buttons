input.onButtonPressed(Button.A, function () {
    radio.sendNumber(Button_Num)
    basic.showNumber(Button_Num)
    basic.pause(1000)
    basic.clearScreen()
})
let Button_Num = 0
radio.setGroup(1)
Button_Num = 1
