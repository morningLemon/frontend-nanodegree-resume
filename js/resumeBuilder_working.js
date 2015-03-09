// var	name =	'Ian Summs',
// 	role =  'Web Developer',
// 	pageHeader = $('#header'),
// 	skills = [],
// 	formattedName = HTMLheaderName.replace("%data%", name),
// 	formattedRole = HTMLheaderRole.replace("%data%", role);

// Add skills to your skillset
// skills.push('programming', 'dj \& music producer', 'UX');
// console.log(skills);

// Add formatted name and role to the header
// pageHeader.prepend(formattedName, formattedRole);

// Populate your bio object
var bio = {
	"name": 'Ian Summs',
	"role": 'Web Developer',
	"contacts": {
		"emailAddress": "morningLemon@users.noreply.github.com",
		"skype": 'ian.summs',
		"twitter": '@ian.summs',
		"github": "morningLemon",
		"location": "Cape Town"
	},
	"welcomeMessage": "loren ipsoum dolor sit amet",
	"skills": {
		"skills": ['programming', 'dj \& music producer', 'UX']
	}
	"bioPic": "images/3293335.jpg"
	
}

// Work
var work = {};
work.position = "Developer";
work.employer = "Helloccomputer";
work.years = 1.3;

var education = {
	"schools": [
		{
			"name": "University of Cape Town",
			"location": "Cape Town, South Africa",
			"degree": "BA",
			"majors": ["English", "Psychology"],
			"dates": 1996,
			"url": "http://www.uct.ac.za/"

		},
		{
			"name": "WSL",
			"dates": 1999
		}
	]
},
	"onlineCourses": [
		{
			"title": "Learning How to Learn",
			"school": "Coursera",
			"date": 2015,
			"url": "https://www.coursera.org/learn/learning-how-to-learn"
		},
		{
			"title": "Javascript Syntax",
			"school": "Udacity",
			"date": 2015,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

$('#main').append(work["position"]);
$('#main').append(education.name);


// Todo formatt helper Objects to the contacts are clickable
var formattedEmailAddress = HTMLemail.replace("%data%", contactInfo.emailAddress),
	formattedTwitterHandle = HTMLtwitter.replace("%data%", contactInfo.twitter),
	formattedGitHub = HTMLgithub.replace("%data%", contactInfo.github);