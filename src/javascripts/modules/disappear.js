export default class Disappear {
  constructor(el) {
    this.el = el;
    el.addEventListener('click', this.hide);
  }

  hide = () => (this.el.style.display = 'none');
}
