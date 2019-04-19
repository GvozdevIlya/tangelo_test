# Description

Basic REST API project.

Because I have only 3 hours I have started to write code without any TDD methodology.

For building this project I have chosen:

* Node.js(express)  - server side
* MySql             - database
* yup               - validation
* bcrypt            - hash passwords
* dotenv            - environment variables
* jsonwebtoken      - generate token
* nodemon           - automatically restarting the node application
* hbs (handlebars)  - our views

In project we have 2 Controllers

* AchievementController (
two functions: 
1. addNewAchievement - ((add new achievement (only System user))a.validating request,b.prepare sql query because of prevent sql injection and send it)
2. fetchAchievements - ((get all users achievements (only Admin user))a.validating request,b.prepare sql query because of prevent sql injection and send it)                                       

)

* AuthController (
several function:

1.registerNewUser - ((only System user))
2.fetchUserAchievements (only User)
3.fetchUsers(only Admin user)
4.authLogin (check passwords and of password correct generating token and redirecting to /users page)
)

* middleware
middleware/index.js
checkUser (check user by role)
checkAdmin ( check if user is admin)
The funtion that checks for the user and if he is in our database with the correct password is very flexible.


If you would have known there would be repeated achieviements then we would have made a pivot table instead of adding a user_id to the achieviments table

# clone project to any directory

git clone https://github.com/GvozdevIlya/tangelo_test.git
***

# .env

run in terminal in project folder `cp .env.evample .env`
(
DONT FORGET TO CHANGE:
1.JWT_SECRET
2.DB_USER
3.DB_PASS
***
# basic installation

run npm install
***
# database

name:tangelo_project

import the tangelo_project 20-55-25.sql from sql_backup to your mysql
***
# node

you need latest LTS version [download here](https://nodejs.org/en/download/)
***
# postman

import collection of routes from postman_backup folder to the Postman program.

#run project

type nodemon
***
# PAGES

login: http://localhost:3000/login
user: admin
password: 123
In this system we are using jwt authorisation

token is in cookies

we have 3 roles
1: user
2: admin
3: system
***


