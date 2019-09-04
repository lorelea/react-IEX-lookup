const dev = {
    "servicesApi" : "https://sandbox.iexapis.com/stable",
    "apiToken"    : "Tpk_6403cc7fbd5045a6bb679c87df92fb97"
};
const prod = {
    "servicesApi" : "https://cloud.iexapis.com/stable",
    "apiToken"    : "Tpk_6403cc7fbd5045a6bb679c87df92fb97"
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default config