$(function() {
	addListeners();

	function addListeners() {	
		$('li').click(function (event) {
			$(this).remove();
		});
	};
	
	$('form').submit(function (event) {
		event.preventDefault();
	    var todo = $(':text').val();
	    $(':text').val('');
	    if (!todo.trim()) return;
	    $('#todolist').append('<li>' + todo + '</li>');

		addListeners();
	});
});