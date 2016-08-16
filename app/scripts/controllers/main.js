class MainCtrl {

  constructor($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'tomi',
      'tomi',
      'tomi',
      'not tomi'
    ];

    $scope.test = 123;

    // console.log('!@#');
    // console.log($scope.test);
  }

}

MainCtrl.$inject = ['$scope'];

module.exports = MainCtrl;
