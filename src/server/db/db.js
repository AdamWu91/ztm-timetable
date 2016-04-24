var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/timetable');

var Todo = mongoose.model('latest', {
    test: Boolean
});

module.exports.Todo = Todo;