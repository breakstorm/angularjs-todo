// TODO: form-button 태그 사용방법
// TODO: module에 컨트롤러를 삽입하는 방법.

(function () {
  var app = angular.module('todo', []);

  app.controller('todoCtrl', function ($window, $scope, todoStorage) {
    $window.console.log(todoStorage.get());
    $scope.name = 'what the hell';
    $scope.list = todoStorage.get();

    $scope.deleteItem = function (index) {
      $scope.list = todoStorage.delete(index);
      $window.console.log('delete done');
    };

    $scope.doneItem = function (index) {
      $scope.list = todoStorage.done(index);
      $window.console.log('done done');
    };

    $scope.createItem = function () {
      const newValue = $window.document.querySelector('.create-item').value;
      $scope.list = todoStorage.create(newValue);
      $window.console.log('create done');
    }

    $scope.updateItem = function (newValue, index) {
      $scope.list = todoStorage.update(newValue, index);
      $window.console.log('update done', newValue, index);
    };
  });

  app.component('todoList', {
    template: `List Component, {{$ctrl.list}}`,
    controller: function () {
      this.list = 'hello';
    }
  });

})();
