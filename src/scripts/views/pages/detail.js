import UrlParser from '../../routes/url-parser';

const Detail = {
    async render() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const fetchData = await fetch(`https://restaurant-api.dicoding.dev/detail/${url.id}`);
        const jsonData = await fetchData.json()
        const data = jsonData.restaurant

        let list_makanan = ""
        data.menus.foods.forEach(val => {
            list_makanan += `<li> ${val.name} </li>`
        })

        let list_minuman = ""
        data.menus.drinks.forEach(val => {
            list_minuman += `<li> ${val.name} </li>`
        })

        let review = ""
        data.customerReviews.forEach(val => {
            review += `
                <div>
                    Tanggal Review: ${val.date} <br>
                    Nama: ${val.name} <br>
                    Review: ${val.review} <br>
                    <br>
                </div>
            `
        })

        return `
        <header>
        <a href="/#/">Beranda</a>
    </header>

    <main>
        <h1>${data.name}</h1>
        <img src="https://restaurant-api.dicoding.dev/images/small/${data.pictureId}" alt="Restaurant Image">
        <p>${data.address}</p>
        <h2>${data.city}</h2>
        <p>${data.description}</p>

        <section>
            <h1>Makanan:</h1>
            <ol>
                ${list_makanan}
            </ol>
        </section>

        <section>
            <h1>Minuman:</h1>
            <ol>
                ${list_minuman}
            </ol>
        </section>

        <section>
            <h3>Review:</h3>
            <p>${review}</p>
        </section>
    </main>

        `;
    },
    async afterRender() {
        
    },
};

export default Detail;