const baseAPI = require('./baseAPI');

const url = 'https://api.megaport.com/v2/locations';

async function fetchLocations() {
  const result = await baseAPI.simpleGet(url);
  const { data } = result.data;
  console.log(data);
}

fetchLocations();
