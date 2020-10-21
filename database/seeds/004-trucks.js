exports.seed = function(knex) {
  return knex('trucks').insert([
    {id: 1, operator_id: 1, name:'Eureka Street Food', imgUrl:'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80', cuisineType:'Californian', customerRatingAvg: 3.6},
    {id: 2, operator_id: 1, name:'Talepeo', imgUrl:'https://images.unsplash.com/photo-1570441262582-a2d4b9a916a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80', cuisineType:'Spanish', customerRatingAvg: 3.9},
    {id: 3, operator_id: 2, name:'Roccos Tacos', imgUrl:'https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=863&q=80', cuisineType:'Mexican', customerRatingAvg: 4.7},
    {id: 4, operator_id: 2,  name:'Kitchenette Karts', imgUrl:'https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1245&q=80', cuisineType:'Vietnamese', customerRatingAvg: 4.2},
    {id: 5, operator_id: 3, name:'Bobs Burgers', imgUrl:'https://images.unsplash.com/photo-1595263431750-b57c02c30102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80', cuisineType:'American', customerRatingAvg: 2.3},
  ]);
};