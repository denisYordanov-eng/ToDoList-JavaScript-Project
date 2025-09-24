const Task = require('../models/Task');

module.exports = {
    index: (req, res) => {
        //TODO: Implement me...
		Task.find()
			.then((tasks) => {
			res.render('task/index', {'tasks': tasks});
		})
    },
	createGet: (req, res) => {
        //TODO: Implement me...
		res.render('task/create');
	},
	createPost: (req, res) => {
        //TODO: Implement me...
		let taskArgs = req.body;

		if(!taskArgs.title || !taskArgs.comments) {
			return res.redirect("/");
		}

		Task.create(taskArgs).then((task) => {
			res.redirect("/");
		})
	},
	deleteGet: (req, res) => {
        //TODO: Implement me...
		let id = req.params.id;

		Task.findById(id).then((task) => {
			if (!task) {
				return res.redirect("/");
			}

			res.render('task/delete', task);
		});
	},
	deletePost: (req, res) => {
        //TODO: Implement me...
		let id = req.params.id;

		Task.findByIdAndRemove(id).then((task) => {
			res.redirect('/')
		});


	}
};