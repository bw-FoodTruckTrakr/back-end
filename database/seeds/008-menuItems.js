  

exports.seed = function(knex) {
  return knex('menuItems').insert([
    {id: 1, truck_id:1, itemName:"", itemDescription:"", itemPrice: 3.99,  customerRatingAvg: 4.5},
    {id: 2, truck_id:1, itemName:" ", itemDescription:"",itemPrice: 4.99, customerRatingAvg: 4},
    {id: 3, truck_id:1, itemName:" ", itemDescription:"", itemPrice: 2.00,  customerRatingAvg: 3.2},
    {id: 4, truck_id:2, itemName:" ", itemDescription:"",itemPrice: 5.75, customerRatingAvg: 3.7},
    {id: 5, truck_id:2, itemName:"   ", itemDescription:"", itemPrice: 7.99,  customerRatingAvg: 4.8},
    {id: 6, truck_id:2, itemName:"  ", itemDescription:"",itemPrice: 5.99, customerRatingAvg: 3.6},
    {id: 7, truck_id:3, itemName:"  ", itemDescription:"", itemPrice: 15.99,  customerRatingAvg: 4.4},
    {id: 8, truck_id:3, itemName:"  ", itemDescription:"",itemPrice: 8.99, customerRatingAvg: 2.2},
    {id: 9, truck_id:3, itemName:"  ", itemDescription:"", itemPrice: 9.99,  customerRatingAvg: 5},
    {id: 10, truck_id:4, itemName:" ", itemDescription:"",itemPrice: 8.99, customerRatingAvg: 4.7},
    {id: 11, truck_id:4, itemName:"   ", itemDescription:"", itemPrice: 12.50,  customerRatingAvg: 3.7},
    {id: 12, truck_id:4, itemName:" ", itemDescription:"",itemPrice: 6.99, customerRatingAvg: 1.8},
    {id: 13, truck_id:5, itemName:"", itemDescription:"", itemPrice: 5.00,  customerRatingAvg: 3.5},
    {id: 14, truck_id:5, itemName:"", itemDescription:"",itemPrice: 4.99, customerRatingAvg: 4.6},
  ]);
};