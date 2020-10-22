# back-end

deployed landing page: https://foodtrucktrackr7.netlify.app/

deployed react app: https://foodtrucktrackr7.vercel.app/

deployed API: https://foodtrucktrackr7.herokuapp.com/



## **Auth Endpoints**
--------------------------------------------

| Table    |  Method   |  Endpoint | Required Fields       | Description  |
|----------|:---------|:----------|:----------------------|:-------------|
| operator    |  Get     | /api/operators |token labeled as authorization in header |returns all operators |
| diner    |  Get     | /api/diners |token labeled as authorization in header |returns all diners |
| operator or diner    |  Post     | /api/register | username, password, type | create a new user|
| operator or diner    |  Post     | /api/login | username, password |login a user |


## **Trucks Endpoints**
----------------------------------------------

| Table    |  Method   |  Endpoint | required fields       | Description  |
|----------|:---------|:----------|:----------------------|:-------------|
| trucks | get | /trucks/ | none | list all foodtrucks in database |
| trucks | get | /trucks/owned/ | token with operator_id| list the trucks owned by the operator that is logged in |
| trucks | post | /trucks/ | name, operator_id, cuisineType | add truck to logged in operator |
| trucks | delete | /trucks/ | none | delete a truck if logged in user is operator |
| trucks | put | /trucks/ | name, operator_id, cuisineType | edit a truck owned by logged in operator |
| trucks | post | /trucks/search/ | name or cuisineType or customerRatingAvg | search for a truck |


## **Menu Endpoints**
----------------------------------------------

| Table    |  Method   |  Endpoint | required fields       | Description  |
|----------|:---------|:----------|:----------------------|:-------------|
| menuItems | post | /trucks/menu/ | truck name | list the items in the menu for given truck |
| menuItems | post | /trucks/menu/additem/ | truck_id, itemName(must be unique), itemDescription, customerRatingAvg | add an item in the truck's menu array |
