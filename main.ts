input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 206)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
})
basic.forever(function () {
	
})
