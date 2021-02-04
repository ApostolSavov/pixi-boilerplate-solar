import { Container, Sprite } from 'pixi.js'


export default class Earth extends Container {
    constructor() {
        super()
        this.name = 'earth'
        this._body = null

        this._init()
    }




    _createEarth() {
        const earth = new Sprite.from('earth')
        earth.anchor.set(0.5)
        earth.x = -400
        earth.y = 50
        this._body = earth

        this.addChild(earth)
    }

    _init(){
        this._createEarth()
    }
}