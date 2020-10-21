
exports.seed = function(knex) {
  return knex('diner').insert([
    {id: 1, type: 'diner', username: 'Bubbles', email:'ajg@gmail.com',password: 'password', currentLocation: '2880 Broadway, New York, NY'},
    {id: 2, type: 'diner', username: 'Beadie', email:'marja@lambda.com',password: 'password', currentLocation: '408 W 20 St, New York, NY'},
    {id: 3, type: 'diner', username: 'McNulty', email:'cris@premier.com',password: 'password', currentLocation: '129 W 81st St, New York, NY'},
  ]);
};