/**
 * Created by robbeh.
 * Date: 17/11/12
 * Time: 20:49
 */
jQuery(document).ready(function(){
	$('#form1').submit(function(){
		//alert($(this).serialize());
		$.post(
			"process.php",
			$(this).serialize(),
			function(data) {
				alert(data.message);
				if (data.status == 1) {
					alert('success');
				}
			},'json'
		);
		return false;
	});
});