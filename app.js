let ws = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");
let stockPriceElementEth = document.getElementById("stock-price-eth");
let lastPrice_eth = null;

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElementEth.innerText = price;
    stockPriceElementEth.style.color =
        !lastPrice_eth || lastPrice_eth === price
            ? "black"
            : price > lastPrice_eth
                ? "green"
                : "red";
    lastPrice_eth = price;
};

let ws_btc = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
let stockPriceElementBtc = document.getElementById("stock-price-btc");
let lastPrice_btc = null;

ws_btc.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElementBtc.innerText = price;
    stockPriceElementBtc.style.color =
        !lastPrice_btc || lastPrice_btc === price
            ? "black"
            : price > lastPrice_btc
                ? "green"
                : "red";
    lastPrice_btc = price;
};

let ws_bnb = new WebSocket("wss://stream.binance.com:9443/ws/bnbusdt@trade");
let stockPriceElementBnb = document.getElementById("stock-price-bnb");
let lastPrice_bnb = null;

ws_bnb.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElementBnb.innerText = price;
    stockPriceElementBnb.style.color =
        !lastPrice_bnb || lastPrice_bnb === price
            ? "black"
            : price > lastPrice_bnb
                ? "green"
                : "red";
    lastPrice_bnb = price;
};

let ws_xrp = new WebSocket("wss://stream.binance.com:9443/ws/xrpusdt@trade");
let stockPriceElementXrp = document.getElementById("stock-price-xrp");
let lastPrice_xrp = null;

ws_xrp.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElementXrp.innerText = price;
    stockPriceElementXrp.style.color =
        !lastPrice_xrp || lastPrice_xrp === price
            ? "black"
            : price > lastPrice_xrp
                ? "green"
                : "red";
    lastPrice_xrp = price;
};

let ws_ada = new WebSocket("wss://stream.binance.com:9443/ws/adausdt@trade");
let stockPriceElementAda = document.getElementById("stock-price-ada");
let lastPrice_ada = null;

ws_ada.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElementAda.innerText = price;
    stockPriceElementAda.style.color =
        !lastPrice_ada || lastPrice_ada === price
            ? "black"
            : price > lastPrice_ada
                ? "green"
                : "red";
    lastPrice_ada = price;
};

let ws_sol = new WebSocket("wss://stream.binance.com:9443/ws/solusdt@trade");
let stockPriceElementSol = document.getElementById("stock-price-sol");
let lastPrice_sol = null;

ws_sol.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElementSol.innerText = price;
    stockPriceElementSol.style.color =
        !lastPrice_sol || lastPrice_sol === price
            ? "black"
            : price > lastPrice_sol
                ? "green"
                : "red";
    lastPrice_sol = price;
};

let ws_avax = new WebSocket("wss://stream.binance.com:9443/ws/avaxusdt@trade");
let stockPriceElementAvax = document.getElementById("stock-price-avax");
let lastPrice_avax = null;

ws_avax.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElementAvax.innerText = price;
    stockPriceElementAvax.style.color =
        !lastPrice_avax || lastPrice_avax === price
            ? "black"
            : price > lastPrice_avax
                ? "green"
                : "red";
    lastPrice_avax = price;
};

let ws_doge = new WebSocket("wss://stream.binance.com:9443/ws/dogeusdt@trade");
let stockPriceElementDoge = document.getElementById("stock-price-doge");
let lastPrice_solano = null;

ws_doge.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElementDoge.innerText = price;
    stockPriceElementDoge.style.color =
        !lastPrice_doge || lastPrice_doge === price
            ? "black"
            : price > lastPrice_doge
                ? "green"
                : "red";
    lastPrice_doge = price;
};
