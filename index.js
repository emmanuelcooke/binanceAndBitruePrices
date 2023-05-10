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
	//'DGBUSDT',
	'FILUSDT',
	'SGBUSDT'
];

app.get('/', async (req, res) => {
	// Information to reach API
const binancePrices = await fetchBinancePrices(symbols);
const bitruePrices = await fetchBitruePrices(symbols);});
const allPrices = {};
	for (const symbol of symbols) {
		const binancePrice = binancePrices[symbol];
		const bitruePrice = bitruePrices[symbol];

		allPrices[symbol] = {
			binance: binancePrice,	bitrue: bitruePrice
		};
	}
res.json(allPrices);

app.listen(5000, () => {
    console.log('listening on port on ${PORT}');
});