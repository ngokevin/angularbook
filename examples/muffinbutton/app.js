var app = angular.module('MuffinButtonApp', []);


app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total, 10);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});
