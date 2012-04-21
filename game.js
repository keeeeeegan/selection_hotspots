var points = 0;
var found = 0;
var max_points = 50;

$(document).ready(function() {

	$(".node").click( function() {
		console.log($(this).attr("data-node"));
		console.log($(this).children("p").html());

		$(this).addClass("discovered");

		if ($(this).attr("data-discovered") == "no") {
			$(this).attr("data-discovered", "yes");
			found++;
			points += parseInt($(this).attr("data-points"));
		}

		$(".found span").html(found);
		$(".points span").html(points);

		$(".feedback p").html($(this).attr("data-feedback"));

		if (points == max_points) {
			$(".message").fadeIn("fast");
		}

	});
});