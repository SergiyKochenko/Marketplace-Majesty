"# Marketplace-Majesty" 


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
py -m venv venv
venv\scripts\activate
python -m pip install Django==4.2.7
django-admin startproject backend
pip install djangorestframework==3.14.0 djangorestframework-simplejwt==5.2.2 PyJWT==2.6.0
pip freeze > requirements.txt
python manage.py startapp userauths
python manage.py startapp store
python manage.py startapp vendor
python manage.py startapp customer
python manage.py startapp api
-----------------------------
python manage.py runserver
-----------------------------
python manage.py migrate
pip install django-jazzmin
pip freeze > requirements.txt
python manage.py createsuperuser
pip install shortuuid
py manage.py makemigrations

=============================
frontend:
.exit
cls
npm
npm install --global yarn
yarn
yarn create vite . --template react 
"C:\Users\Acer PC\AppData\Local\Yarn\bin\create-vite" . --template react
yarn add axios dayjs jwt-decode js-cookie react-router-dom@6.10.0 zustand
----------
yarn dev
----------