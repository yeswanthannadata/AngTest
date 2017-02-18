(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.items_message = "";

    $scope.itemsCheck = function () {
      if ($scope.items == "") {
        $scope.items_message = 'Please enter data first';
      }
      else {
        var items_list = $scope.items.split(',');
        if (items_list.length <= 3) {
          $scope.items_message = 'Enjoy!';
        }
        else if (items_list.length >= 3) {
          $scope.items_message = 'Too much!';
        }
      }
    }
  }

})();
