const express = require('express');
const { fetchBinancePrices } = require('./binance');
const { fetchBitruePrices } = require('./bitrue');

const app = express();
const PORT = process.env.PORT || 3000;
const symbols = [
		'BTCUSDT',
		'ETHUSDT',
		'LTCUSDT',
		'XRPUSDT',
		'XLMUSDT',
		'DOGEUSDT',
		'ADAUSDT',
		'ALGOUSDT',
		'BCHUSDT',
		// 'DGBUSDT',
		'FILUSDT',
		'SGBUSDT',
];

app.get('/', async (req, res) => {
		const binancePrices = await fetchBinancePrices(symbols);
		const bitruePrices = await fetchBitruePrices(symbols);

		if (!binancePrices || !bitruePrices) {
				res.status(500).json({ error: 'Failed to fetch prices from Binance or Bitrue' });
				return;
		}

		const allPrices = {};
		for (const symbol of symbols) {
				const binancePrice = binancePrices[symbol];
				const bitruePrice = bitruePrices[symbol];

						allPrices[symbol] = {
								binance: binancePrice,	bitrue: bitruePrice
						};
		}
		res.json(allPrices);
});

app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
});
