/*
	Developed by Desire Sobouti
	desobouti.com | @desobouti
*/

//Controller that maintains the application behaviour
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	//Declaration of the popover content	    
	$('[data-toggle="popover"]').popover({
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at risus facilisis, vehicula sem eget, volutpat mi. Pellentesque sit amet diam vitae urna vulputate fermentum. In vel magna ut sem eleifend scelerisque. Etiam vulputate ipsum ut mi tincidunt accumsan. Fusce id nunc sit amet risus aliquet laoreet. Mauris pretium nisl ante, at condimentum turpis varius eget. In hac habitasse platea dictumst. Vivamus ipsum dolor, rutrum eu dui et, mollis blandit arcu.'
	});

	//Do actions when the buttons are clicked
	$(document).on('click', function (e) {
	    var $popover;
	    var $target = $(e.target);

	    //Do nothing if there is a click on popover content
	    if ($target.hasClass('popover') || $target.closest('.popover').length) {
	        return;
	    }

	    //Hide if there is a click outside
	    $('[data-toggle="popover"]').each(function () {
	        $popover = $(this);

	        if (!$popover.is(e.target) && $popover.has(e.target).length === 0 && $('.popover').has(e.target).length === 0){
	            $popover.popover('hide');
	        }
	    });
	});

	//When ESC key is clicked, close the popover
	$scope.ESCKeyPress = function(keyEvent) { 
	    if(keyEvent.keyCode == 27) {
	    	$('[data-toggle="popover"]').popover('hide');
	    }
	}
});