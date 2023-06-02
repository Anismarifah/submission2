class FooterRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       
       <footer class="watermark"><i>Copyright</i> @ 2023 - SAM RESTO Apps</footer>
                `;
  }
}

customElements.define('restaurant-footer', FooterRestaurant);
