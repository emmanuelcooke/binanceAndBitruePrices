const axios = require('axios');
const BITRUE_API = 'https://www.bitrue.com/api/v1/ticker/price';

async function fetchBitruePrices(symbols) {
		try {
				const prices = {};
				for (const symbol of symbols) {
						const response = await axios.get(BITRUE_API, { params: { symbol } });
						if (!response.data || !response.data.price) {
								throw new Error(`No data received for symbol ${symbol} from Bitrue API`);
						}
						prices[symbol] = Math.floor(parseFloat(response.data.price * 10 ** 5));
				}
				return prices;
		} catch (error) {
				console.error(`Error fetching Bitrue prices: ${error.message}`);
				console.error('Response data:', error.response?.data);
				const prices = {};
				for (const symbol of symbols) {
						prices[symbol] = 'N/A';
				}
				return prices;
		}
}

module.exports = { fetchBitruePrices };