// $(document).ready(function(window, document, $, undefined) {
	var name = 'Ian Summs',
		role =  'Web Developer',
		pageHeader = $('#header'),
		skills = [],
		formattedName = HTMLheaderName.replace("%data%", name),
		formattedRole = HTMLheaderRole.replace("%data%", role);

	// Add skills to your skillset
	skills.push('programming', 'dj \& music producer', 'UX');
	console.log(skills);
	
	// Add formatted name and role to the header
	pageHeader.prepend(formattedName, formattedRole);

	// Populate your cotactInfo channels
	var bio = {
		"name": name,
		"role": role,
		"contacts": {
			"emailAddress": "morningLemon@users.noreply.github.com",
			"skype": 'ian.summs',
			"twitter": '@ian.summs',
			"github": "morningLemon",
			"location": "Cape Town"
		},
		"welcomeMessage": "loren ipsoum dolor sit amet",
		"skills": "skills",
		"bioPic": "images/3293335.jpg"
		
	}

	// Work
	var work = {};
	work.position = "Developer";
	work.employer = "Helloccomputer";
	work.years = 1.3;

	// Education
	var education = {
		"schools": [
			{
				'name': "University of Cape Town",
				'years': 3,
				'degree': 'BA',
				'major': ['English', 'Film']
			},
			{
				'name': "WS\&L",
				'years': 0.4,
				'degree': 'Intro to Programmming'
			},
			{
				'name': "City Varsity",
				'years': 0.6,
				'degree': 'Intro MIDI'
			}
		] 
	};
	// education["name"] = ";
	// education["years"] = "1996 - 1999";
	// education["city"] = "Cape Town";

	$('#main').append(work["position"]);
	$('#main').append(education.name);


	// Todo formatt helper Objects to the contacts are clickable
	var formattedEmailAddress = HTMLemail.replace("%data%", contactInfo.emailAddress),
		formattedTwitterHandle = HTMLtwitter.replace("%data%", contactInfo.twitter),
		formattedGitHub = HTMLgithub.replace("%data%", contactInfo.github);

	// $('#footerContacts').prepend(formattedEmailAddress, formattedTwitterHandle, formattedGitHub);

	// Create nwe object called bio
	// var bio = {
	// 	name: name,
	// 	role: role,
	// 	contactInfo: contactInfo,
	// 	pictureUrl: "images/3293335.jpg"
	// }
	
// }(window, document, jQuery));