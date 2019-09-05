const dev = {
    "servicesApi" : "https://sandbox.iexapis.com/stable",
    "apiToken"    : "Tpk_6403cc7fbd5045a6bb679c87df92fb97"
};
const prod = {
    "servicesApi" : "https://cloud.iexapis.com/stable",
    "apiToken"    : "pk_751ca3addf034ca9aad7203640ca54d9"
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default config