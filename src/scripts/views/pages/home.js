const Home = {
    async render() {
        return `
        <section class="hero">
            <img src="images/heros/hero-image_2.jpg" alt="Hero Image">
            <div class="hero-text">
                <h2>SAM RESTO</h2>
                <p><b>Explore SAM RESTO</b></p>
                <a href="#restaurant-cards" tabindex="7">Explore Now</a>
            </div>
        </section>
        <main id="content">
            <section class="content">
                
                <div class="latest">
                <h1>Explore SAM RESTO di kota anda</h1>
                <div class="container">
                <div id="restaurant-cards">
                </div>
                </div>
            </section>
        </main>
        `;
    },
    async afterRender() {
        try {
            // const jsonData = await import('../DATA.json');
            const fetchData = await fetch('https://restaurant-api.dicoding.dev/list') // request
            const jsonData = await fetchData.json() // ubah response ke json
            
        
            const restaurantData = jsonData.restaurants;
        
            let restaurantCardsHTML = '';
        
            restaurantData.forEach((restaurant) => {
              restaurantCardsHTML += `
                <div class="card">
                  <img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}">
                  <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
                  <p>${restaurant.city}</p>
                  <p>${restaurant.rating}</p>
                  <p>${restaurant.description.slice(0, 150)}...</p>
                </div>
              `;
            });
        
            document.querySelector('#restaurant-cards').innerHTML = restaurantCardsHTML;
          } catch (error) {
            console.error(error);
          }
    },
};

export default Home;