# binanceAndBitruePrices

Here is the challenge task.

The task is very simple.

Your task is to fetch crypto prices from 2 exchanges (binance and bitrue)?

12 cryptos are "SGB,XRP,LTC,XLM,DOGE,ADA,ALGO,BCH,DGB,BTC,ETH,FIL".

You need to build a simple backend endpoint and the backend endpoint should return the result.

The format value should look like this:
{"XRP":38010,"LTC":7484181,"XLM":8264,"DOGE":8748,"ADA":30386,"ALGO":21995,"BCH":10898158,"DGB":912,"BTC":1771929769,"ETH":129158483,"FIL":419152,"SGB":1167}

We multiply 10^5 to consider the price integer value.
For example, if the BTC price is 17719.29769, you should return 1771929769.

You don’t need to send us source code until we process the payment.
Once you finish the work, please give us a backend endpoint to check.
For example https://10.10.10.10/getprice.
