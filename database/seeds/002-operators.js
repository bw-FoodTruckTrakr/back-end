exports.seed = function(knex) {
  return knex('operator').insert([
    {id: 1, type: 'operator', username: 'Carl Casper', email:'Carl@eljefe.com',password: 'password', currentLocation: 'Grove and Bedford Streets, West Village, NY'},
    {id: 2, type: 'operator', username: 'Rocco Mangel', email:'Rocco@tacos.com',password: 'password', currentLocation: '8 Montague Terrace, Brooklyn Heights, NY'},
    {id: 3, type: 'operator', username: 'Bob Belcher', email:'Bob@burgers.com',password: 'password', currentLocation: '41 Charlton Street and Sixth Ave, SoHo, NY'},
  ]);
};