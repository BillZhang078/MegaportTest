const { getValue, data } = require('./SearchObjectValue');

test('properly output the value when path is name', () => {
  expect(getValue('name', data)).toBe('Megaport');
});

test('properly output the value when path is address.office', () => {
  expect(getValue('address.office', data)).toEqual({
    unit: 'Level 3',
    street: '825 Ann Street',
    suburb: 'Fortitude Valley',
    city: 'Brisbane',
    state: 'Queensland',
    postcode: 4006,
  });
});

test('properly output the value when path is address.office.state', () => {
  expect(getValue('address.office.state', data)).toBe('Queensland');
});
