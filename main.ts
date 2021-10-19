maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 7) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 15)
        music.playMelody("F C E F G G F E ", 500)
        basic.pause(500)
    } else {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    }
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        music.playMelody("C - - - - - - - ", 100)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 8) {
        music.playMelody("E - - - - - - - ", 200)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 11) {
        music.playMelody("F - - - - - - - ", 300)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 11) {
        music.playMelody("B - - - - - - - ", 400)
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) < 14) {
        music.playMelody("- - - - - - - C5 ", 500)
    }
})
