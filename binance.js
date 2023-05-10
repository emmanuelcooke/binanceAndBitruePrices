const axios = require('axios');
const BINANCE_US_API = 'https://api.binance.us/api/v3/ticker/price';
async function fetchBinancePrices(symbols) {
	try {
		const prices = {};
		for (const symbol of symbols) {
			const response = await axios.get(BINANCE_API, { params: { symbol } });
			if (!response.data || !response.data.price) {
				throw new Error(`No data received for symbol ${symbol} from Binance API`);
			}
			prices[symbol] = Math.floor(parseFloat(response.data.price * 10 ** 5));
	}
		return prices;
		} catch (error) {
			console.error(`Error fetching Binance prices: ${error.message}`);
			console.error('Response data:', error.response?.data);
			const prices = {};
			for (const symbol of symbols) {
				prices[symbol] = 'N/A';
			}
			return prices;
		}
}

module.exports = { fetchBinancePrices };