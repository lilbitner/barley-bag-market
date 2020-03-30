# README

# Judith's Barley Bags

A full stack web application that is a platform for Judith (my mother) to share her Barley Bag creations with friends and family.

## Technologies featured: 
1. React
2. Ruby on Rails
3. JavaScript
4. CSS 

Judith's Barley Bags was created as part of the Module 4 project in the Flatiron School software engineering bootcamp program.

## Features:

1. Can learn about Barley Bags and their purpose
2. Can submit a custom order for several Barley Bags based on fabric choice, size, and 'act of kindness' as a form of payment
3. Can submit a review of the Barley Bag product and view other verified reviews
4. Can learn more about Judith through a fully functioning Crossword Puzzle

## Link to Demo Video: https://www.youtube.com/watch?v=eRKoAQ0iNxE

## Installation:

1. The backend application uses 'Rails version 6.0.2.1 - Ruby 2.6.1'. Fork & Clone down repository, run $bundle install, run $rails DB:create, run $rails DB:seed, run $rails s.

2. The frontend application uses 'React version 16.13.0'. Fork & Clone down repository, run $npm install, and $npm start to open the application in a browser.

## How to interact with this application:

Please visit https://judiths-barley-bags.firebaseapp.com/ to interact with the webpage and order yourself a Barley Bag! 
The frontend repository can be found here: https://github.com/lilbitner/barley-bag-market

The backend is hosted by Heroku with the following endpoints: 

1. ‘GET, ‘POST’ to the endpoint $/bags
2. ‘GET, ‘POST’ to the endpoint $/reviews

## Rails Dependencies

gem 'rails', gem 'bootsnap', '>= 1.4.2', require: false gem 'rack-cors' gem 'byebug' gem 'listen', '>= 3.0.5', '< 3.2' gem 'spring' gem 'spring-watcher-listen', '~> 2.0.0' gem 'tzinfo-data'

## Additional Comments:

The Carousel property on the 'Shop Barley Bags' page is an imported package and component that is customized to Judith's Barley Bags web page. The package was installed from the following code source: https://www.npmjs.com/package/react-responsive-carousel
