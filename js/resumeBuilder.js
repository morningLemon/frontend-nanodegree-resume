// $(document).ready(function(window, document, $, undefined) {
	var name = 'Ian Summs',
		role =  'Web Developer',
		pageHeader = $('#header'),
		skills = [],
		formattedName = HTMLheaderName.replace("%data%", name),
		formattedRole = HTMLheaderRole.replace("%data%", role);
	
	// Add formatted name and role to the header
	pageHeader.prepend(formattedName, formattedRole);

	// Populate your cotactInfo channels
	var contactInfo = {
		emailAddress: "morningLemon@users.noreply.github.com",
		skype: 'ian.summs',
		twitter: 'ian.summs',
		github: "https://github.com/morningLemon"
	}

	// Todo formatt helper Objects to the contacts are clickable
	var formattedEmailAddress = HTMLemail.replace("%data%", contactInfo.emailAddress),
		formattedTwitterHandle = HTMLtwitter.replace("%data%", contactInfo.twitter),
		formattedGitHub = HTMLgithub.replace("%data%", contactInfo.github);

	$('#footerContacts').prepend(formattedEmailAddress, formattedTwitterHandle, formattedGitHub);

	// Add skills to your skillset
	skills.push('programming', 'dj \& music producer', 'UX');
	console.log(skills);





	// Create nwe object called bio
	var bio = {
		name: name,
		role: role,
		contactInfo: contactInfo,
		pictureUrl: "images/3293335.jpg"
	}
	
// }(window, document, jQuery));