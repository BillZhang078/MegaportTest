const axios = require('axios');

async function simpleGet(url) {
  try {
    const respone = await axios.get(url);
    return respone;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = { simpleGet };
