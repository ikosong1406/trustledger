const VITE_API_KEY = "G1ZAQLRST5V1ZATU";

export const fetchStockData = async (symbol) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${VITE_API_KEY}`
  );
  const data = await response.json();
  return data;
};
