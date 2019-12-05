cookingpot project design:

1: dashboard:  shows the food list -> detailpage, updatepage, profilepage, logout
2: homepage: Login, register -> loginpage, registerpage
4: updatepage: could be add elements of the food list.
5: profilepage: shows the profile(option: can change the username and password)
6: loginpage: username, password -> homepage
7: registerpage: firstname, lastname, email, username, password -> login page
8: logoutpage: ->dashboard


Use Cases:
(1) Login / Logout
Use “token based authentication” for security purposes
URL: /api/login
Username
Password
Method: POST
/api/logout

(2) Register
URL: /api/register
First name
Last name
Email
Username
Password
Method: POST

(3) dashboard:
foodlist
URL: /api/foodlist
Method: GET
field:
  name
  ingredians
  culture

URL: /api/foodlist
Method: POST
field:
  name
  ingredians
  introduction
  cooking
  culture

(4) updatepage:
URL: /api/foodlist/<id>
Method: GET
field:
  id
  name
  ingredians
  introduction
  cooking
  culture


URL: /api/foodlist/<id>
Method: PUT
field:
name
ingredians
introduction
cooking
culture


(6)profilepage:
URL: /api/register
Method: GET
field:
First name
Last name
Email
Username
Password
