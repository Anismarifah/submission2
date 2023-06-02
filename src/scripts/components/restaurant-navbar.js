class NavbarRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav role="navigation">
        <div class="app-logo">
          <a href="#" tabindex="2">
            <img src="images/favicon.ico" alt="Restoran App Logo">
            <!-- <h1>Restoran App</h1> -->
          </a>
        </div>
        <ul id="main-menu" class="main-menu">
          <li><a href="/" tabindex="3">Home</a></li>
          <li><a href="#" tabindex="4">Favorites</a></li>
          <li><a href="https://www.linkedin.com/in/samidin-samidin-46386b264/" tabindex="5">About Us</a></li>
        </ul>

        <button class="menu-toggle" aria-label="Toggle navigation" aria-controls="main-menu" aria-expanded="false" tabindex="6">
        <input type="checkbox"  id="input-menu-toggle" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    `;
    const toggleButton = document.querySelector('.menu-toggle');
    const input_toggleButton = document.querySelector('#input-menu-toggle');

    const nav = document.querySelector('nav ul');

    input_toggleButton.addEventListener('click',() =>{
      if (input_toggleButton.checked) {
        nav.classList.add('slide');
        toggleButton.setAttribute('aria-expanded','true');
      } else {
        nav.classList.remove('slide');
        toggleButton.setAttribute('aria-expanded','false');
      }
    });
  

  

    toggleButton.addEventListener('keydown', (event) => {
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
        input_toggleButton.click();
      }
    });

    const links = document.querySelectorAll('#input-main-menu');
    links.forEach(link => {
      link.addEventListener('click', () => {
        toggleButton.checked = false;
        toggleButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('slide');
      });
    });
  }
}

customElements.define('restaurant-navbar', NavbarRestaurant);
