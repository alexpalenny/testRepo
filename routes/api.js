var express = require('express');
var router = express.Router();

//sopme implementation
router.route('/posts')

	//returns all posts
	.get(function(req,	res) {

		//temporary solution
		res.send({ message: 'TODO return all pasts' });
	})

	.post(function(req,	res) {

		//temporary solution
		res.send({ message: 'TODO Create a new post' });
	});


router.route('/posts/:id')

	.get(function(req,	res) {
		res.send({ message: 'TODO return get with ID ' + req.params.id })
	})
	.put(function(req,	res) {
		res.send({ message: 'TODO return put with ID ' + req.params.id })
	})
	.delete(function(req,	res) {
		res.send({ message: 'TODO return delete with ID ' + req.params.id })
	});



	module.exports = router;
