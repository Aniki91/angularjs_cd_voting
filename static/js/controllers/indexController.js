voteApp.controller('indexController', ['$scope', function($scope) {
	$scope.title = 'CD AJS Vote App';

	$scope.products =
	[
		{
			cdCover: 'static/img/cd_1.png',
			name: 'Metal',
			price: 12,
			publishDate: new Date('2015', '03','21'),
			upVote: 0,
			downVote: 0
		},
		{
			cdCover: 'static/img/cd_2.png',
			name: 'Electronic',
			price: 10,
			publishDate: new Date('2014', '02', '16'),
			upVote: 0,
			downVote: 0
		},
		{
			cdCover: 'static/img/cd_3.png',
			name: 'Dubstep',
			price: 14,
			publishDate: new Date('2016', '01', '08'),
			upVote: 0,
			downVote: 0
		},
		{
			cdCover: 'static/img/cd_4.png',
			name: 'Rock',
			price: 8,
			publishDate: new Date('2013', '08', '23'),
			upVote: 0,
			downVote: 0
		}
	];

	$scope.upVote = function(index) {
		$scope.products[index].upVote += 1;
	};

	$scope.downVote = function(index) {
		$scope.products[index].downVote += 1;
	};
}]);