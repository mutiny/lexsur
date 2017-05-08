// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    if (hook.data.text.trim() === '') {
      throw new Error('Question cannot be empty')
    }
    return Promise.resolve(hook)
  }
}