exports.seed = function(knex) {
  return knex('operator').insert([
    {id: 1, type: 'operator', username: 'Carl Casper', email:'Carl@eljefe.com',password: '$2a$06$AHiH8/1KVnuST8PIweVMxOkDtMdnxf6.X6vUynFCvqGh8z0hkqZ7.', currentLocation: 'Grove and Bedford Streets, West Village, NY'},
    {id: 2, type: 'operator', username: 'Rocco Mangel', email:'Rocco@tacos.com',password: '$2a$06$AHiH8/1KVnuST8PIweVMxOkDtMdnxf6.X6vUynFCvqGh8z0hkqZ7.', currentLocation: '8 Montague Terrace, Brooklyn Heights, NY'},
    {id: 3, type: 'operator', username: 'Bob Belcher', email:'Bob@burgers.com',password: '$2a$06$AHiH8/1KVnuST8PIweVMxOkDtMdnxf6.X6vUynFCvqGh8z0hkqZ7.', currentLocation: '41 Charlton Street and Sixth Ave, SoHo, NY'},
  ]);
};