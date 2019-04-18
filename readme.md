# clone project to any directory

git clone https://github.com/GvozdevIlya/tangelo_test.git

# .env

run in terminal in project folder `cp .env.evample .env`
(
DONT FORGET TO CHANGE:
1.JWT_SECRET
2.DB_USER
3.DB_PASS

# basic installation

run npm install

# database

name:tangelo_project

import the tangelo_project 20-55-25.sql from sql_backup to your mysql

# node

you need latest LTS version [download here](https://nodejs.org/en/download/)

# postman

import collection of routes from postman_backup folder to the Postman program.

#run project

type nodemon

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

We can do some refactor about mysql tables: like create another tables for roles.
Also if we want to assing a lot of achivements for one user we need to create another table where
we will keep id of user and id of achievement.
