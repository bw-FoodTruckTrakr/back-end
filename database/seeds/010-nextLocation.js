exports.seed = function(knex) {
  return knex('nextLocation').insert([
    {truck_id: 1, location:"", arrivalTime: "2:00 pm", departureTime: '9:00 pm'},
    {truck_id: 2, location:"", arrivalTime: "2:30 pm", departureTime: '11:00 pm'},
    {truck_id: 3, location:"", arrivalTime: "12:50 pm", departureTime: '10:00 pm'},
    {truck_id: 4, location:"", arrivalTime: "2:30 pm", departureTime: '10:30pm'},
    {truck_id: 5, location:"", arrivalTime: "1:45 pm", departureTime: '9:00 pm'},
  ]);
};