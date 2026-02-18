class Title extends Phaser.Scene {
    constructor() {
        super("titleScene")
    }

    preload() {
        // load assets
        this.load.path = "./assets/"

        // load JSON (ie dialog text)
        this.load.json('dialog', 'json/dialog.json')

        // load images
        this.load.image('dialogbox', 'img/dialogbox.png')
        this.load.image('bottom', 'img/bottom.png')
        this.load.image('quince', 'img/quince.png')
        this.load.image('snout', 'img/snout.png')
        this.load.image('starveling', 'img/starveling.png')
        this.load.image('theseus', 'img/theseus.png')
        this.load.image('lysander', 'img/lysander.png')
        this.load.image('philostrate', 'img/philostrate.png')
        this.load.image('chocobo', 'img/chocobo.png')


        // load bitmap font
        this.load.bitmapFont('gem_font', 'font/gem.png', 'font/gem.xml')
        this.load.bitmapFont('ethno_font', 'font/ethnocentric-regular.png', 'font/ethnocentric-regular.xml')
    }

    create() {
        // add title text
        this.add.bitmapText(centerX, centerY - 32, 'ethno_font', 'A MIDSUMMER NIGHT\'S DREAM', 32).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 16, 'ethno_font', 'Press SPACE to start', 20).setOrigin(0.5)

        // create input
        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        // wait for player input
        if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.scene.start("talkingScene")
        }
    }
}