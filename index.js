const axios = require('axios');

async function getSolPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
    const solPrice = response.data.solana.usd;
    return solPrice;
  } catch (error) {
    console.error('Error retrieving SOL price:', error);
    throw error;
  }
}

module.exports = {
  getSolPrice
};
