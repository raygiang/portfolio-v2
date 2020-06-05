export default class ScrollController {
  constructor(document) {
    this.wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  }

  preventDefault(e) {
    e.preventDefault();
  }

  preventDefaultForScrollKeys(e) {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    const keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 36: 1};

    if (keys[e.keyCode]) {
      e.preventDefault();
      return false;
    }
  }

  // call this to Disable
  disableScroll() {
    window.addEventListener('DOMMouseScroll', this.preventDefault, false); // older FF
    window.addEventListener(this.wheelEvent, this.preventDefault, {passive: false}); // modern desktop
    document.body.addEventListener('touchmove', this.preventDefault, {passive: false}); // mobile
    window.addEventListener('keydown', this.preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  enableScroll() {
    window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    window.removeEventListener(this.wheelEvent, this.preventDefault, {passive: false}); 
    document.body.removeEventListener('touchmove', this.preventDefault, {passive: false});
    window.removeEventListener('keydown', this.preventDefaultForScrollKeys, false);
  }
}
