/**
 * Created by pma on 2016-11-27.
 */
angular.module('marpApp', ['basicModule']).run(function() {
    angular.element(document).ready(function () {
        $('.navbar-collapse ul li a').click(function() {
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);

            return false;
        });
    });
});