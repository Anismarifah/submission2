import ENDPOIN from "../globals/api-endpoints";

class Source {
    static async List() {
        const response = await fetch(ENDPOIN.List);
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    static async Details(id) {
        const response = await fetch(ENDPOIN(id));
        return response.json();
    }
}

export default Source;