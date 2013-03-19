function hide_all_the_divs(except_div) {
	$("#information").hide();
	$("#packet").hide();
	$("#pictures").hide();
	$("#contact").hide();

	// Remove the active class from all links (aka from the menu links)
	$("a").removeClass("active");

	// Show the right div and add the active class to the right link
	$('#' + except_div).show();
	$('#l' + except_div).addClass("active");
};

$(document).ready(function () {
	hide_all_the_divs("information");

	$("#linformation").click(function() {
		hide_all_the_divs("information");
		return false;
	});

	$("#lpacket").click(function() {
		hide_all_the_divs("packet");
		return false;
	});

	$("#lpictures").click(function() {
		hide_all_the_divs("pictures");
		return false;
	});

	$("#lcontact").click(function() {
		hide_all_the_divs("contact");
		return false;
	});
});