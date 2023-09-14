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
9. In the project_lap3_server folder create a file called `.env` and install all dependencies.
2. In this file paste the following
`PORT=3000
 BCRYPT_SALT_ROUNDS=12
 DB_URI=<Paste the SRV connection string from Mongo Altas> 
 TEST_DB_URI = <Repeat the process of making a new database if you need to do testing>`
4. Run the commands `cd project_lap3_server` & `npm run dev` in the terminal.
5. Open the project using live server from the `index.html` file.


## Tech Stack
ThinkFast is built using the following technologies:

Frontend: HTML, CSS, Javascript

Backend: Node.js, Express.js, Docker, MongoDB, Mongoose

## Process
Project Planning: Reading the project brief and discussing ideas.

UI/UX Design: Played CrazyEights to sketch out quick ideas for app visuals. Created lo-fi wireframes with Figma to further visualize the application's layout and user interface.

Backend Development: Implemented the server using Node.js and Express.js to handle user requests and interact with the APIs. Created databases using MongoDB to hold quiz and user data.  (something about Docker)

Frontend Development: Developed the user interface using HTML, CSS and Javascript and integrated with the backend APIs.

Testing: Performed unit testing with Vitest and Jest to identify and fix issues.

Deployment: Deployed the application to a web server (Render).

## Features
1. Item Listings
Easily create and browse posts for items you want to give away. Users can provide detailed descriptions and upload images of the items. Each item listing displays relevant information, making it simple for others to find items they're interested in.

2. Comment
Trash to Treasure encourages interaction among users through the comment system. Users can leave comments on item listings to ask questions, express interest, or share their thoughts.

3. Contact and Arrangement
When users find an item they want, they can easily reach out to the item owner by clicking the "Contact Owner" button. Whether it's arranging a pickup time or discussing delivery options, the platform makes communication convenient and efficient. This feature ensures that item exchanges are smooth and hassle-free.

4. Secure Authentication
Trash to Treasure prioritizes user security. Our robust login and registration system ensures that only legitimate users have access to the platform. Your information is protected, and you can confidently engage with others in the community.

5. Mobile Responsive
Access Trash to Treasure from various devices, including smartphones and tablets. The web app is designed to provide a seamless experience, regardless of the device you're using, so you can engage with the platform anytime, anywhere.

## Wins and Challenges

### Wins
- Successfully implemented a user-friendly and visually appealing interface
- Integrated authentication features like login and sign up using JWT tokens


### Challenges
- Working with MongoDB
- Authentication issues
