import gsap from 'gsap/gsap-core'
import { Container, Sprite } from 'pixi.js'


export default class Stars extends Container {
    constructor(amount) {
        super()
        this.name = 'stars'
        this._stars = []

        this._init(amount)
    }

    /**
     * Creates and adds stars randomly, based on given amount
     * @param {number} amount 
     * @private
     */
    _createStar(amount = 1) {
        if (amount == 0) {
            return
        }

        const star = new Sprite.from('star')

        star.scale.set(Math.random() + 0.3)
        star.rotation = Math.random()
        star.anchor.set(0.5)
        star.x = (Math.random() - 0.5) * 1400
        star.y = (Math.random() - 0.5) * 700
        this._stars.push(star)
        this.addChild(star)

        this._createStar(amount - 1)
    }

    /**
     * Animates the slight star rotation and movement randomly
     * @private
     */
    _animateStars() {
        gsap.to(this._stars,
            {
                rotation: Math.random() / 10,
                x: `+=${(Math.random() - 0.5) * 30}`,
                duration: 5,
                yoyo: true,
                repeat: -1
            })
    }

    /**
     * Initializes the class, the passed parameter to be used for the amount of stars
     * @param {number} amount 
     */
    _init(amount) {
        this._createStar(amount)
        this._animateStars()
    }
}