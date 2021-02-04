import { Container, Sprite, BLEND_MODES } from 'pixi.js';
import gsap from 'gsap';


export default class Sun extends Container {
    constructor() {
        super()
        this.name = 'sun';
        this._body = null;
        this._blast = null;
        this._glowTop = null;
        this._glowBottom = null;

        this._tl = gsap.timeline();

        this._init();
    }

    /**
     * Plays the blast scaling animation
     */
    animateBlast() {

        this._tl
            .seek(0)
            .to(this._blast.scale,
                {
                    x: 10,
                    y: 10,
                    duration: 10
                });
    }

    /**
     * Plays the sun glow scaling animation repeatedly until
     * @private
     */
    _animateGlow() {
        gsap.to(this._glowTop.scale,
            {
                x: 1.2,
                y: 1.2,
                duration: 4,
                yoyo: true,
                repeat: -1
            })
    }

    /**
     * Creates and adds the blast sprite
     * @private
     */
    _createBlast() {
        const blast = new Sprite.from('sunBlast');
        blast.anchor.set(0.5);
        blast.alpha = 0;
        blast.x = 400;
        blast.y = - 150;
        this._blast = blast;
        this.addChild(blast);
    }

    /**
     * Creates and adds the sun sprite
     * @private
     */
    _createSun() {
        const sun = new Sprite.from('sun');

        sun.anchor.set(0.5);
        sun.x = 400;
        sun.y = -150;

        this._body = sun;

        this.addChild(sun);
    }

    /**
     * Creates and applies a blend mode to the glow sprites
     * @private
     */
    _createGlow() {
        const glowTop = new Sprite.from('sunGlow');
        const glowBot = new Sprite.from('sunGlow');
        [glowTop, glowBot].forEach(x => {
            x.anchor.set(0.5)
            x.scale.set(0.6)
            x.alpha = 0.5;
            x.x = 400;
            x.y = -150;
            x.blendMode = BLEND_MODES.SCREEN;
        })
        this._glowTop = glowTop;
        this._glowBottom = glowBot;

        this.addChild(glowTop, glowBot);
    }

    /**
     * Initializes the class
     * @private
     */
    _init() {
        this._createSun();
        this._createGlow();
        this._createBlast();

        this._animateGlow()
    }
}