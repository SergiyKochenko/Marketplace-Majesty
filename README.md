"# Marketplace-Majesty" 



The site was constantly tested during the process of creating the site in the Gitpod Environment and the deployed site on Heroku was also tested in terms of user experience.
The available functionality and user experience is reflected in the table below.

| Goals/actions  | As a guest | As a logged user  | Result | Comment |
|--|:--:|:--:|:--:|--|
| User can use menu and navigating through pages | &check; | &check; | Pass | Click on menu item redirects to appropriate page |
| User can see the home page | &check; | &check; | Pass | |
| User can see the Pricing page | &check; |&check;  |  Pass| |
| User can see the Sign Up page | &check; |&check;  |  Pass| |
| User can see the Login page  | &check; |&check;  |  Pass| |
| User can see the Logout page  | &check; |&check;  |  Pass| |
| User can click the Book Now button  | &check; |&check;  |  Pass| Redirects to the page with a message that the user must register or log in for guest or shows up form for authorized user |
| User can see the Booknow page | &cross; | &check;  | Pass |A page is displayed with a message that the user must register or log in  |
| User can fill fields in the form the Booknow page | &cross; | &check;  | Pass |This page and form are available only to authorized users |
| User can see the Bookings page   | &cross; | &check;  | Pass | This page is available only to an authorized users|
| User can see the Change booking page  | &cross;  | &check;  | Pass | This page is available only to authorized users|
| User can edit booking in the form on the Change booking page  | &cross;  | &check;  | Pass |This page is available only to authorized users ||
| User can see the Delete booking page  |  &cross; | &check;  |Pass  | This page is available only to authorized users |
| User can see the  User's blog page  |  &check; | &check;  |Pass  |  |
| User can see the Create post  |  &cross; | &check;  |Pass  | This page is available only to authorized users |
| User can see the Delete post  |  &cross; | &check;  |Pass  | This page is available only to authorized users |
| User can see the  Update post  |  &cross; | &check;  |Pass  | This page is available only to authorized users |
| User can see the  attach image  |  &cross; | &check;  |Pass  | This page is available only to authorized users |
| User can like post and unlike  |  &cross; | &check;  |Pass  | This page is available only to authorized users |
| Admin can create service, edit and delete from admin site  |  &cross; | &check;  |Pass  | This page is available only for authorized admin |
| Admin can create post, update and delete from admin panel  |  &cross; | &check;  |Pass  | This page is available only for authorized admin |
| Admin can approve or delete comments from admin panel  |  &cross; | &check;  |Pass  | This page is available only for authorized admin |
| |








…or create a new repository on the command line:
echo "# Marketplace-Majesty" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SergiyKochenko/Marketplace-Majesty.git
git push -u origin main

…or push an existing repository from the command line:
git remote add origin https://github.com/SergiyKochenko/Marketplace-Majesty.git
git branch -M main
git push -u origin main

backend:
- py -m venv venv
- venv\scripts\activate
- python -m pip install Django==4.2.7
- django-admin startproject backend
- pip install djangorestframework==3.14.0 djangorestframework-simplejwt==5.2.2 PyJWT==2.6.0
- pip freeze > requirements.txt
- python manage.py startapp userauths
- python manage.py startapp store
- python manage.py startapp vendor
- python manage.py startapp customer
- python manage.py startapp api
-----------------------------
- python manage.py runserver
-----------------------------
- python manage.py migrate
- pip install django-jazzmin
- pip freeze > requirements.txt
- python manage.py createsuperuser
- pip install shortuuid
- py manage.py makemigrations
- py manage.py migrate
- pip install django-cors-headers==3.14.0
- python -m pip install Pillow
- pip install stripe
- pip install environs
- pip install django-anymail
- pip install boto3==1.20.26 botocore==1.23.54 django-storages==1.12.3
- python manage.py collectstatic

=============================
- frontend:
- .exit
- cls
- npm
- npm install --global yarn
- yarn
- yarn create vite . --template react 
- "C:\Users\Acer PC\AppData\Local\Yarn\bin\create-vite" . --template react
- yarn add axios dayjs jwt-decode js-cookie react-router-dom@6.10.0 zustand
- yarn remove zustand
- yarn add zustand@4.4.4
- yarn add simple-zustand-devtools
- yarn add sweetalert2
- yarn add @paypal/react-paypal-js
- yarn add chart.js
- yarn add react-chartjs-2
----------
- yarn dev
----------
