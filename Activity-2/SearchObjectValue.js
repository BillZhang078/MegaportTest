const { get } = require('http');

const data = {
  name: 'Megaport',
  address: {
    office: {
      unit: 'Level 3',
      street: '825 Ann Street',
      suburb: 'Fortitude Valley',
      city: 'Brisbane',
      state: 'Queensland',
      postcode: 4006,
    },
  },
  industry: {
    type: 'Internet and telecommunications',
    asxListed: true,
  },
};

/**
 * get the value of the property
 * @param {String} path - the object path ie. 'address.office.state'
 * @obj {Object} the object
 */
function getValue(path, obj) {
  path = path.split('.');
  pathLength = path.length;
  for (let i = 0; i < pathLength; i++) {
    obj = obj[path[i]];
  }
  return obj;
}

console.log(getValue('address.office', data));

module.exports = {
  data,
  getValue,
};
