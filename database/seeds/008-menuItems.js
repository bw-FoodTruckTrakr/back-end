  
exports.seed = function(knex) {
  return knex('menuItems').insert([
    {id: 1, truck_id:1, itemName:"California Pizza", itemDescription:"light thin-crust pizza with fresh local ingredients as toppings – artichoke, goat cheese, chicken, avocado.", itemPrice: 13.99,  customerRatingAvg: 4.5},
    {id: 2, truck_id:1, itemName:"California Roll", itemDescription:"Sushi roll made with rice, cucumber, avocado, and krab, but is rolled inside-out",itemPrice: 9.99, customerRatingAvg: 4},
    {id: 3, truck_id:2, itemName:"Gazpacho", itemDescription:"tomato-based Andalusian soup is most famous for being served cold", itemPrice: 6.00,  customerRatingAvg: 3.2},
    {id: 4, truck_id:2, itemName:"Churros", itemDescription:"fried dough pastry, cut into sausage shapes and doused in sugar",itemPrice: 5.75, customerRatingAvg: 3.7},
    {id: 5, truck_id:3, itemName:"Tacos", itemDescription:"choice of beef or chicken, and flour or corn tortilla", itemPrice: 2.00,  customerRatingAvg: 4.8},
    {id: 6, truck_id:3, itemName:"Burrito", itemDescription:"tortilaa rolled around beans and shredded beef",itemPrice: 6.99, customerRatingAvg: 3.6},
    {id: 7, truck_id:3, itemName:"Quesadillas", itemDescription:"filled with chicken and cheese", itemPrice: 5.99,  customerRatingAvg: 4.4},
    {id: 8, truck_id:3, itemName:"Rice and Beans", itemDescription:"arroz con gandules and red beans ",itemPrice: 3.99, customerRatingAvg: 2.2},
    {id: 9, truck_id:4, itemName:"Phở", itemDescription:"chewy rice noodles in piping hot savoury broth with tender slices of beef and topped with crunchy, spicy, herby garnishes", itemPrice: 4.99,  customerRatingAvg: 5},
    {id: 10, truck_id:4, itemName:"bánh mì", itemDescription:"crusty baguette is packed with pickled vegetables, coriander, fresh chilli, and pork",itemPrice: 8.99, customerRatingAvg: 4.7},
    {id: 11, truck_id:4, itemName:"spring rolls", itemDescription:"choice of shrimp or vegetable, fried or fresh", itemPrice: 6.50,  customerRatingAvg: 3.7},
    {id: 12, truck_id:5, itemName:"Hamburger", itemDescription:"all american burger",itemPrice: 5.00, customerRatingAvg: 1.8},
    {id: 13, truck_id:5, itemName:"Cheeseburger", itemDescription:"our award winning burger with cheese", itemPrice: 6.00,  customerRatingAvg: 2.4},
  ]);
}; 