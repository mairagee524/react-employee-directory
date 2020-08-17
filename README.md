# Employee Directory

### Unit 19 React Homework: Employee Directory

## Overview

For this assignment, you'll create a employee directory with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## User Story

* As a user, I want to be able to view my entire employee directory adt once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users, when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

Follow these guidelines for committing:

* Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

* Don't commit half done work, for the sake of your collaborators (and your future self!)

* Test your application before you commit to ensure functionality at every step in the development process

We would like you to have well over 200 commits by graduation, so commit early and often!


## Submission on BCS

You are required to submit the following:

* the URL to the deployed application

* the URL to the Github repository

## License Badge
INSERT LICENSE BADGE

## Description
Project 19 tasked the student with building out an employee tracker using React as the main library with the funcationality to search for employees by name as well as order the list by one data type.

Once stylized, I then used the randomuser.me API to generate an array of random people objects which are then populated into the application via the Map method on the Employee Card component. Cards are arranged using CSS Grid to ensure responsive design for the grid if the display is collapsed.

Lastly, I added a search bar and age ordering functionality to meet the requirements of the assignment. The searchbar uses a dynamic search functionality where it actively searches on change of the text in the search bar. The ordering buttons will reorder the page based on the age of the employee.

## Demo
INSERT GIF

## Table of Contents
Deployed
Installation
Usage
Credits
License
Contributing
Questions

## Live Site
You can access the delployed version of this application via the URL.

## Installation
To install this application, first, branch the Github Repo and clone the repo to your local machine. Then, you will need to install the node dependencies which can be done by running the npm install command in your terminal/bash shell.

After the dependencies have been installed, you can run the app by running NPM Start or Node Server.js.

## Usage
Once everything has been set up, the application can be launched by running the command node server.js or npm start.

You can then use the employee tracker to search or order employees and view the different cards

## Credits
This application was completed by Maira Garcia as a project for UCLA/Trilogy's Full Stack Software Development Bootcamp.

Dependencies for this project include the node modules:

- Create React App

- React Bootstrap

- Axios

## License Blurb
								MIT License

		Unit 13 Express-Handlebars: Eat-Da-Burger!   Copyright (C) 2020 Jeffrey Quittman

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

## Contributing
If you would like to contribute to this application, please feel free to email me via the email found in the questions section and we can discuss how to collaborate and enhance this application

## Questions
- For any questions related to this applicaiton, please contact me at: mairagee524@gmail.com.

- Please use this link to access my Github Profile: https://github.com/mairagee524