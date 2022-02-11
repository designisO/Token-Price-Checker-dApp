// main.js

const serverUrl = "https://mwzauzuvmlfp.usemoralis.com:2053/server";
const appId = "#";
Moralis.start({ serverUrl, appId });

async function getPrice() {
    let address = document.getElementById('address').value;
    console.log(address);
    let price = await Moralis.Cloud.run("getPrice", {address: address});
    let ethPrice = (price.nativePrice.value / (10**price.nativePrice.decimals)) + "ETH";
    console.log(ethPrice)
    let usdPrice = price.usdPrice + " USD"
    document.getElementById("eth_price").innerHTML = ethPrice;
    document.getElementById("usd_price").innerHTML = usdPrice;
    console.log(price);
}

document.getElementById("btn").addEventListener('click', getPrice);
