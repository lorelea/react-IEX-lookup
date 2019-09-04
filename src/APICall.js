import apiConfig from './api-config.js';

function getAllSymbols() {
    return fetch(`${apiConfig.servicesApi}/ref-data/symbols?token=${apiConfig.apiToken}`)
        .then(checkStatus)
        .then(response => response.json())
        .catch(handleError)
}
function getSymbolInfo(symbol) {
    return fetch(`${apiConfig.servicesApi}/search/${symbol}?token=${apiConfig.apiToken}`)
        .then(checkStatus)
        .then(response => response.json())
        .catch(handleError)
}
function getLatestPrice(symbol) {
    return fetch(`${apiConfig.servicesApi}/stock/${symbol}/price?token=${apiConfig.apiToken}`)
        .then(checkStatus)
        .then(response => response.json())
        .catch(handleError)
}
function getCompanyInfo(symbol) {
    return fetch(`${apiConfig.servicesApi}/stock/${symbol}/company?token=${apiConfig.apiToken}`)
        .then(checkStatus)
        .then(response => response.json())
        .catch(handleError)
}

function checkStatus(response) {
    if (response.ok) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    throw error;
}
function handleError(response) {
    if ([401, 403].includes(response.status)) {
        // auth_status=Unauthorized/Forbidden => route to login
    }

    throw response.StatusText;
}

const APICall = { getAllSymbols, getSymbolInfo, getLatestPrice, getCompanyInfo };
export default APICall;