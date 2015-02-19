// $(document).ready(function(window, document, $, undefined) {
	var name = 'Ian Summs',
		role =  'Web Developer',
		pageHeader = $('#header'),
		formattedName = HTMLheaderName.replace("%data%", name),
		formattedRole = HTMLheaderName.replace("%data%", role);
	
	// Add formatted name and role to the header
	pageHeader.prepend(formattedName, formattedRole);
	
// }(window, document, jQuery));