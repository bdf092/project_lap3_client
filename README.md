# ThinkFast

ThinkFast is a full-stack web app designed to assist Crammer Education in staying one step ahead of their competition and support students with revision. 

ThinkFast enables students to enjoy educational multiple-choice quizzes to aid with revision. Users can register for an account and create quizzes of their own, which are saved on the database. 

### Installation & Usage
To run the application locally, follow these steps:

1. Copy the SSH key on the GitHub Repo.
2. Open your terminal and navigate to the desired directory using the command `cd <write file path here>`.
3. Run the command `git clone <Paste SSH key here>`.
6. Run the command `npm install` to install the required dependencies.
7. Run the command `code .` in the terminal to open the project in VSCode.
8. Go to Mongo Atlas website and create a cluster and respective database. Make sure to copy the SRV connection string as you will need it later. 
9. In the project_lap3_server folder create a file called `.env`.
10. In this file paste the following:
`PORT=3000
 BCRYPT_SALT_ROUNDS=12
 DB_URI=<Paste the SRV connection string from Mongo Altas> 
 TEST_DB_URI = <Repeat the process of making a new database if you need to do testing>`
11. Run the commands `cd project_lap3_server` & `npm run dev` in the terminal.
12. Run the command  `cd project_lap3_client` & `npm run dev` in the terminal.
13. Open the project accessing: `http://localhost:5173/.


## Tech Stack
ThinkFast is built using the following technologies:

Frontend: HTML, CSS, Javascript

Backend: Node.js, Express.js, Docker, MongoDB, Mongoose

## Process
Project Planning: Reading the project brief and discussing ideas.

UI/UX Design: Played CrazyEights to sketch out quick ideas for app visuals. Created lo-fi wireframes with Figma to further visualize the application's layout and user interface.

Backend Development: Implemented the server using Node.js and Express.js to handle user requests and interact with the APIs. Created databases using MongoDB to hold quiz and user data. Used Docker to containerise the app.

Frontend Development: Developed the user interface using HTML, CSS and Javascript and integrated with the backend APIs.

Testing: Performed unit testing with Vitest and Jest to identify and fix issues.

Deployment: Deployed the application using Netlify for the frontend and Render for the backend.

## Features
### 1. User Signup and Login
   
Get started on your journey to academic success by creating your personal ThinkFast account. We've made it quick and easy for you to sign up, so you can jump right into your revision quizzes. With a secure login system, your progress and quiz history are always at your fingertips.

### 2. Create Your Quiz
   
Tailor your revision experience to your unique needs with the "Create Quiz" feature. Whether you want to brush up on a specific subject, chapter, or concept, ThinkFast allows you to craft custom quizzes. Simply select the topics you want to review, set the difficulty level, and you're ready to roll.

### 3. Timed Quizzes
We understand that time management is crucial when preparing for exams. ThinkFast's "Timed Quizzes" feature ensures you stay on track by setting the clock ticking. Challenge yourself to answer questions within a specified time frame, just like in a real exam. This feature is designed to boost your focus, speed, and recall abilities, making your revision sessions more productive.

### 4. Secure Authentication
   
Think Fast prioritises user security. Our robust login and registration system ensures that only legitimate users have access to the platform. Your information is protected, and you can confidently engage with others in the community.

## Wins and Challenges

### Wins
- Successfully implemented a user-friendly and visually appealing interface
- Integrated authentication features like login and sign up using JWT tokens


### Challenges
- Working with MongoDB
- Authentication issues
