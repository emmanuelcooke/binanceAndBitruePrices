const axios = require('axios');
const BINANCE_US_API = 'https://api.binance.us/api/v3/ticker/price';

async function fetchBinancePrices(symbols) {
		try {
				const encodedSymbols = encodeURIComponent(JSON.stringify(symbols));
				const response = await axios.get(BINANCE_US_API);

				if (!response.data) {
						throw new Error('No data received from Binance US API');
				}

				const allPrices = response.data;
				const prices = {};

				for (const symbol of symbols) {
						const symbolPrice = allPrices.find((price) => price.symbol === symbol);
						if (symbolPrice) {
								prices[symbol] = Math.floor(symbolPrice.price * 10 ** 5);
						} else {
								prices[symbol] = 'N/A';
						}
				}

				return prices;
		} catch (error) {
				console.error(`Error fetching Binance US prices: ${error.message}`);
				console.error('Response data:', error.response?.data);
				const prices = {};
				for (const symbol of symbols) {
						prices[symbol] = 'N/A';
				}
				return prices;
		}
}

module.exports = { fetchBinancePrices };
