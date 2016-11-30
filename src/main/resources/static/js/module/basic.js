/**
 * Created by pma on 2016-11-27.
 */
angular.module('basicModule', [])
    .directive('marpPreloader', function() {
        return {
            templateUrl: 'templates/preloader.html',

            link: function() {
                $(window).load(function () {
                    $(".preloader").delay(1500).fadeOut(100);
                });
            }
        }
    })
    .directive('marpCarousel', ['$window', function ($window) {
        return {
            templateUrl: 'templates/carousel.html',
            controller: function ($scope) {
                $scope.sliders = [{
                    image: '../images/slider/slide0.jpg',
                    title: 'Sonoterapia',
                    description: 'Terapia ultradźwiękowa w miejscu bólu',
                    active: true
                },{
                    image: '../images/slider/slide1.jpg',
                    title: 'Magnetoterapia',
                    description: 'Terapia elektomagnesem w miejscu bólu',
                    active: false
                },{
                    image: '../images/slider/slide2.jpg',
                    title: 'Elektroterapia',
                    description: 'Terapia prądem w miejscu bólu',
                    active: false
                },{
                    image: '../images/slider/slide3.jpg',
                    title: 'Laseroterapia',
                    description: 'Terapia laserem w miejscu bólu',
                    active: false
                }];
            },
            link: function() {
                angular.element($window).load(function () {
                    $('#home .carousel-inner .item').css('height', $window.innerHeight);
                });
                angular.element($window).bind('resize', function () {
                    $('#home .carousel-inner .item').css('height', $window.innerHeight);
                });
            }
        }
    }]);