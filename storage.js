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
    },

    create: function (newValue) {
      const newItem = {
        'id': storage.list.length + 1,
        'content': newValue,
        'done': false
      };
      storage.list.push(newItem);
      // return storage.list;
    },

    delete: function (index) {
      storage.list = storage.list.filter((v, i, a) => {
        return i !== index;
      });
      // return storage.list;
    },

    done: function (index) {
      storage.list[index].done = !storage.list[index].done;
      // return storage.list;
    }
  }

  return storage;
});
