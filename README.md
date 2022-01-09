# torre
This application was built entirely in JavaScript. Express.js was used for the backend and Vue.js was used for the frontend. 

The application has two endpoints only: profile/$username and people/. On the profile page you can see the user's personal information, such as their name, location, profile image, and their skills grouped by their level of proficiency. 
Clicking on one of the user's skills will redirect you to a grid of people, who has the same skill and level of proficiency. From this page you can browse among all users who fit this search criteria. You can also see the user's profile by clicking on the "See More" button on an user's card.

This application has been deployed using AWS Amplify for the frontend and Netlify for the backend, and it's available on https://master.d22fsph3yl598m.amplifyapp.com/people/
