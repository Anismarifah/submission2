import ENV from "./config";

const ENDPOIN = {
    LIST: `${ENV.BASE_URL}/list`,
    IMG: {
        S: `${ENV.BASE_URL}/images/small/`,
        M: `${ENV.BASE_URL}/images/medium/`,
        L: `${ENV.BASE_URL}/images/large/`,
    },
};

export default ENDPOIN;