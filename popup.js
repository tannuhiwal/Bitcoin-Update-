document.addEventListener('DOMContentLoaded', function () {
  const coinSelector = document.getElementById('coin');
  const priceDisplay = document.getElementById('price');

  coinSelector.addEventListener('change', function () {
    const selectedCoin = coinSelector.value;
    updatePrice(selectedCoin);
  });

  const initialCoin = coinSelector.value;
  updatePrice(initialCoin);
});

function updatePrice(coin) {
  const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const price = data[coin].usd;
      document.getElementById('price').textContent = `Price: $${price}`;
    })
    .catch(error => {
      console.error('Error fetching price:', error);
    });
}
