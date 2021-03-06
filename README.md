

# Friend Finder Application

## Description
FriendFinder is a friend matching app based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, the program will look for the closest matching existing record from another user. 

## Requirements
- Modularity in the form of separate files for server logic, storing of friends, views, and routing.
- 10 question survey for user to determine compatibility with other users/friends. 
- Use `express` and `path` npm packages.
- Separate JavaScript files for routing (`htmlRoutes.js` and `apiRoutes.js`).
- Appropriate GET and POST routes for serving HTML pages and API calls.
- Separate file for storing friends (`friends.js`).
- Calculate best match for user once survey is completed and return that match to the user.

## Technologies Used
- JavaScript
- jQuery
- node.js
- Express.js
- HTML
- Bootstrap

## Demo	
* FriendFinder is deployed to Heroku. Please check it out [here](https://desolate-savannah-79407.herokuapp.com).

## Installation
To install the application follow the instructions below:

	git clone https://github.com/rtonn/FriendFinder.git FriendFinder
	cd FriendFinder
	npm install
	
## Running Locally
To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	export PORT=3000
	
After the `PORT` environment variable has been set, run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port 3000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3000`.
- Screen Shots: 

![route_home](https://user-images.githubusercontent.com/44482712/53780272-46484200-3ec9-11e9-9a61-1fb11341417b.png)

![route_about](https://user-images.githubusercontent.com/44482712/53780278-4b0cf600-3ec9-11e9-8eb6-beef16fa4305.png)

