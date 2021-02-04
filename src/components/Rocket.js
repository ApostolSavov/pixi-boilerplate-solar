import { Container, Sprite } from 'pixi.js'
import Fire from './Fire.js'
import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'


export default class Rocket extends Container {
    constructor() {
        super()
        this.name = 'rocket'
        this._body = null
        this._fire = null
        this.x = -400
        this.y = 50

        this._init()
    }

    _animateRocket() {
        gsap.to(this,
            {
                duration: 5,
                angle: -360,
                repeat: -1,
                ease: 'linear'
            })
    }

    _createFire() {
        const fire = new Fire()
        fire.scale.set(0.6)
        fire.angle = -90
        fire.x = 340
        fire.y = 260
        this._fire = fire
    }

    _createRocket() {
        const rocket = new Sprite.from('rocket')
        rocket.pivot.set(-300, 0)

        this._body = rocket
    }

    _init() {
        gsap.registerPlugin(MotionPathPlugin)

        this._createRocket()
        this._createFire()

        this.addChild(this._fire, this._body)

        this._animateRocket()
    }
}