// TODO: form-button 태그 사용방법
// TODO: module에 컨트롤러를 삽입하는 방법.

(function () {
  var app = angular.module('todo', []);

  app.controller('todoCtrl', function ($window, $scope) {
    $scope.name = 'what the hell';
    $scope.list = [{
        'id': 1,
        'content': 'hello',
        'done': false
      },
      {
        'id': 2,
        'content': 'world',
        'done': false
      },
      {
        'id': 3,
        'content': 'angularjs',
        'done': true
      },
    ]

    $scope.deleteItem = function (index) {
      // $scope.list[index].done = !$scope.list[index].done;
      $scope.list = $scope.list.filter((v, i, a) => {
        return i !== index;
      })
      // $window.console.log($scope.list.filter((v, i, a) => {
      //   // if (i !== index) return v;
      //   return i !== index;
      // }));
      $window.console.log('delete done');
    };

    $scope.doneItem = function (index) {
      $scope.list[index].done = !$scope.list[index].done;
      $window.console.log('done done');
    };

    $scope.createItem = function () {
      const newValue = $window.document.querySelector('.create-item').value;
      const newItem = {
        'id': $scope.list.length + 1,
        'content': newValue,
        'done': false
      }
      $scope.list.push(newItem);
      $window.console.log('create done', newItem);
    }

  });

  app.component('todoList', {
    template: `List Component, {{$ctrl.list}}`,
    controller: function () {
      this.list = 'hello';
    }
  });

})();
