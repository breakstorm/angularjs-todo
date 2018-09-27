angular.module('todo').factory('todoStorage', function () {
  var storage = {
    list: [{
        'id': 1,
        'content': 'hello',
        'done': false
      },
      {
        'id': 2,
        'content': 'world',
        'done': false
      }, {
        'id': 3,
        'content': 'angularjs',
        'done': true
      }
    ],

    get: function () {
      return storage.list;
    }
  }

  return storage;
});
