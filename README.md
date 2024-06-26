# Model-View-Controller-MVC-Tech-Blog


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  
## Overview of MVC Tech Blog

## User Story
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions


```

## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

```
## Table of Contents

- [Description](#description)
- [Links](#links)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contact me](#contact-me)


  
## Description
Overview of MVC Tech Blog for developers to write blogs about technology on a website.
This web application uses sequelize, handlebars.js ,and express-session for authentication.

## Links
- [The URL of Github Repository](https://github.com/kathylopez97/ORM-E-Commerce-Back-End)
- [The URL of the deployed application ](https://kathys-techblog-8bc3b3ace330.herokuapp.com/)

## Installation 

Instructions on how to use the MVC Tech Blog  

1. Clone the repo

   ```
     git@github.com:kathylopez97/Model-View-Controller-MVC-Tech-Blog.git
   ```
2. Install NPM packages

   ```
   npm i 

   ```

3. To run MVC Tech Blog 

    Use MYSQL 
   ```
   my sql -u root -p
   ```
4. Enter your SQL Password,
   ```
    use ktechblog_db;
   ```
   ```
   source db/schema.sql;
   ```
   ``` 
   exit
5. Run Server
   ```
   npm run seed 
   ```
   ```
   node server.js
   ```

## Usage
![login](public/images/login.png)
![blog1](public/images/blog1.png)
![blog2](public/images/blog2.png)

## Credits 
- Heroku:[Heroku](https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli)
- Visual Studio Code: [VS Code](https://code.visualstudio.com/)
- Professional README Guide: [README.md](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

## Contact me
![GitHub Contributors Image](https://contrib.rocks/image?repo=kathylopez97/Model-View-Controller-MVC-Tech-Blog)

Contact me If you have any questions or additional feedback.
- [Github](https://github.com/kathylopez97/Model-View-Controller-MVC-Tech-Blog)
- [Email](kathyylopezz97@gmail.com)
