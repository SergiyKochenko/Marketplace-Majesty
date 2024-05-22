"# Marketplace-Majesty" 



# Shop Platform

This project is a commercial shop platform designed to provide a seamless shopping experience for customers, along with robust management tools for admins.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Manual Testing Plan](#manual-testing-plan)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Overview

The Shop Platform is an e-commerce solution that allows customers to browse products, add items to their cart, and complete purchases. Admins have the ability to manage products, orders, and user accounts.

## Features

- User Registration and Authentication
- Product Browsing and Search
- Shopping Cart and Checkout
- Order Management
- Wishlist
- Admin Panel for Managing Products, Orders, and Users

## Technologies Used

- Frontend: HTML, CSS, JavaScript, React
- Backend: Node.js, Express.js
- Database: MongoDB
- Deployment: Heroku

## Installation

To install and run this project locally:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/shop-platform.git
    cd shop-platform
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables. Create a `.env` file in the root directory and add the following:
    ```
    MONGO_URI=your_mongodb_uri
    SECRET_KEY=your_secret_key
    ```

4. Run the application:
    ```sh
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Register for an account or log in if you already have one.
2. Browse products and add items to your cart.
3. Proceed to checkout to complete your purchase.
4. Admin users can log in to the admin panel to manage products, orders, and users.

## Manual Testing Plan

The available functionality and user experience are reflected in the table below.

| Goals/Actions  | As a Guest | As a Logged User | As an Admin | Result | Comment |
|----------------|:----------:|:----------------:|:-----------:|--------|---------|
| User can navigate through the menu and pages | &check; | &check; | &check; | Pass | Menu items redirect to the appropriate pages |
| User can see the home page | &check; | &check; | &check; | Pass | |
| User can view product listings | &check; | &check; | &check; | Pass | |
| User can view individual product details | &check; | &check; | &check; | Pass | |
| User can search for products | &check; | &check; | &check; | Pass | Search functionality works correctly |
| User can see the cart page | &check; | &check; | &check; | Pass | |
| User can add products to the cart | &check; | &check; | &check; | Pass | Product is successfully added to the cart |
| User can remove products from the cart | &check; | &check; | &check; | Pass | Product is successfully removed from the cart |
| User can see the checkout page | &cross; | &check; | &check; | Pass | Checkout page is only available to logged-in users |
| User can proceed to checkout and place an order | &cross; | &check; | &check; | Pass | Order placement is successful for logged-in users |
| User can see the Sign Up page | &check; | &check; | &check; | Pass | |
| User can see the Login page | &check; | &check; | &check; | Pass | |
| User can log out | &cross; | &check; | &check; | Pass | |
| User can see their account details | &cross; | &check; | &check; | Pass | Only available to logged-in users |
| User can edit their account details | &cross; | &check; | &check; | Pass | Only available to logged-in users |
| User can view their order history | &cross; | &check; | &check; | Pass | Only available to logged-in users |
| User can track the status of their orders | &cross; | &check; | &check; | Pass | Only available to logged-in users |
| User can view the Wishlist page | &check; | &check; | &check; | Pass | |
| User can add products to the Wishlist | &check; | &check; | &check; | Pass | Product is successfully added to the Wishlist |
| User can remove products from the Wishlist | &check; | &check; | &check; | Pass | Product is successfully removed from the Wishlist |
| Admin can view all orders in the admin panel | &cross; | &cross; | &check; | Pass | Only available to admin users |
| Admin can update the status of orders | &cross; | &cross; | &check; | Pass | Only available to admin users |
| Admin can add new products from the admin panel | &cross; | &cross; | &check; | Pass | Only available to admin users |
| Admin can edit existing products from the admin panel | &cross; | &cross; | &check; | Pass | Only available to admin users |
| Admin can delete products from the admin panel | &cross; | &cross; | &check; | Pass | Only available to admin users |
| Admin can manage user accounts | &cross; | &cross; | &check; | Pass | Only available to admin users |
| Admin can view sales reports | &cross; | &cross; | &check; | Pass | Only available to admin users |
| Admin can manage site settings | &cross; | &cross; | &check; | Pass | Only available to admin users |

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## Contact

For any inquiries or issues, please contact [yourname](mailto:yourname@example.com).

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
