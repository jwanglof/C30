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

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
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

	$("#fForm").submit(function(e) {
		if ($('[name=name]').val() != '' && $('[name=email]').val() != '') {
			/*if (isValidEmailAddress($('[name=email]').val())) {
				return true;
			}
			else {
				alert("Felaktig e-mail.");
				return false;
			}*/
			return true;
		}
		else
		{
			alert("Du måste fylla i alla obligatoriska fält!");
			return false;			
		}
	});
});