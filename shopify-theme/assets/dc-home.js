class DCreationsHome extends HTMLElement {
  connectedCallback() {
    this.slides = [...this.querySelectorAll('[data-dc-slide]')];
    this.dots = [...this.querySelectorAll('[data-dc-index]')];
    this.index = 0;
    this.querySelectorAll('[data-dc-direction]').forEach((button) => {
      button.addEventListener('click', () => this.show(this.index + Number(button.dataset.dcDirection)));
    });
    this.dots.forEach((button) => button.addEventListener('click', () => this.show(Number(button.dataset.dcIndex))));
    this.timer = window.setInterval(() => this.show(this.index + 1), 7000);
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }

  show(next) {
    if (!this.slides.length) return;
    this.index = (next + this.slides.length) % this.slides.length;
    this.slides.forEach((slide, index) => slide.classList.toggle('is-active', index === this.index));
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === this.index);
      dot.setAttribute('aria-current', index === this.index ? 'true' : 'false');
    });
  }
}

if (!customElements.get('d-creations-home')) customElements.define('d-creations-home', DCreationsHome);
