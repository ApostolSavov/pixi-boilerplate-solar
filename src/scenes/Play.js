import Scene from './Scene';
import { DisplacementFilter } from '@pixi/filter-displacement'
import Footer from '../components/Footer';
import Rocket from '../components/Rocket';
import Earth from '../components/Earth';
import Stars from '../components/Stars';
import Sun from '../components/Sun';
export default class Play extends Scene {
  async onCreated() {

    const earth = new Earth()
    const rocket = new Rocket()
    const sun = new Sun()
    const stars = new Stars(15)

    const blastFilter = new DisplacementFilter(sun._blast)
    this.filters = [blastFilter]
    setInterval(sun.animateBlast.bind(sun), 5000)

    this.addChild(stars)
    earth.addChild(rocket)
    this.addChild(earth)
    this.addChild(sun)

    const footer = new Footer();
    footer.x = - window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    this.addChild(footer);
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) { // eslint-disable-line no-unused-vars

  }
}
