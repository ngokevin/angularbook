var app = angular.module('PokemonGymLeadersApp', []);


// With better dependency injection.
app.controller('PokemonGymLeadersCtrl', ['$scope', function($scope) {
    var kantoGymLeaders = {
        'Brock': ['Geodude', 'Onyx'],
        'Misty': ['Staryu', 'Starmie'],
        'Lt. Surge': ['Voltorb', 'Magnemite', 'Raichu'],
        'Erika': ['Weepinbell', 'Tangela', 'Vileplume'],
        'Sabrina': ['Kadabra', 'Mr. Mime', 'Venomoth', 'Alakazam'],
        'Koga': ['Koffing', 'Muk', 'Koffing', 'Weezing'],
        'Blaine': ['Growlithe', 'Ponyta', 'Rapidash', 'Arcanine'],
        'Giovanni': ['Rhyhorn', 'Dugtrio', 'Nidoquuen', 'Nidoking', 'Rhydon']
    };

    var johtoGymLeaders = {
        'Falkner': ['Pidgey', 'Pidgeotto'],
        'Bugsy': ['Metapod', 'Kakuna', 'Scyther'],
        'Whitney': ['Clefairy', 'Miltank'],
        'Morty': ['Gastly', 'Haunter', 'Haunter', 'Gengar'],
        'Chuck': ['Primeape', 'Polywrath'],
        'Jasmine': ['Magnemite', 'Magnemite', 'Steelix'],
        'Pryce': ['Seel', 'Dewgong', 'Piloswine'],
        'Clair': ['Dragonair', 'Dragonair', 'Dragonair', 'Kingdra']
    };

    $scope.gymLeaders = kantoGymLeaders;
    $scope.kanto = function() {
        $scope.gymLeaders = kantoGymLeaders;
    };
    $scope.johto = function() {
        $scope.gymLeaders = johtoGymLeaders;
    };
}]);
