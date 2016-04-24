var timetableRoutes = require('server/timetable/routes');

module.exports = function routes(app) {
    app.use('/timetable', timetableRoutes);
};