// Initializes the `questions` service on path `/questions`
const createService = require('feathers-rethinkdb');
const hooks = require('./questions.hooks');
const filters = require('./questions.filters');

module.exports = function () {
  const app = this;
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');

  const options = {
    name: 'questions',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/questions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('questions');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
