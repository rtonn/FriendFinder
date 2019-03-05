

// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	// console.log('___ENTER apiRoutes.js___');

	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend entry
	app.post('/api/friends', function(req, res) {
		// Capture the user input object
		var userInput = req.body;		
		var userResponses = userInput.scores;		

		// Compute friend match
		var matchName = '';	
		var totalDifference = 10000; 

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}

			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = friends[i].name;				
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};