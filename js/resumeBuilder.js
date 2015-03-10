// Bio  object
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
  "skills": ["programming", "dj & music producer", "UX"],
  "bioPic": "images/3293335.jpg"
};

// Work  object
var work = {
  "jobs": [
    {
      "name": "Hellocomputer",
      "location": "Cape Town, South Africa",
      "role": "Front-end Developer",
      "skills": ["Javascript", "HTML", "CSS"],
      "dates": 2013,
      "url": "http://www.hellocomputer.com/"
    },
    {
      "name": "Quirk",
      "location": "Cape Town, South Africa",
      "role": "Front-end Developer",
      "skills": ["HTML", "CSS", "Javascript"],
      "dates": 2010,
      "url": "http://www.quirk.biz/"
    },
    {
      "name": "Josdell Property",
      "location": "Cape Town, South Africa",
      "role": "Site manager",
      "skills": ["Plans Intrerpretation", "Quality control", "Site reporting", "Staff, subcontrators procurement & supervision"],
      "dates": 2008 - 2009
    },
    {
      "name": "Puremix",
      "location": "Cape Town, South Africa",
      "role": "Barman",
      "skills": ["Barman", "Set up & Stock take"],
      "dates": 2010,
      "url": "http://puremix.co.za"
    },
    {
      "name": "Timecode Records",
      "location": "Cape Town, South Africa",
      "role": ["Artist, DJ, Record label owner, Marketing & sales, product design, event organization"],
      "skills": ["Music", "Radness"],
      "dates": 2000 - 2015,
      "url": "http://www.quirk.biz/"
    }
  ]
};

// Education  object
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
  ],
  "onlineCourses": [
    {
      "title": "Learning How to Learn",
      "school": "Coursera",
      "date": 2015,
      "url": "https://www.coursera.org/learn/learning-how-to-learn"
    },
    {
      "title": "Intro to Computer Science",
      "school": "Udacity",
      "date": "2015",
      "url": "https://www.udacity.com/course/c-cs101"
    },
    {
      "title": "Javascript Syntax",
      "school": "Udacity",
      "date": 2015,
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
};

//  Projects object
var projects = {
  "projects": [
    {
      "title": "test title",
      "dates": 2015, 
      "description": "test lorem ipsum stuff",
      "images": "lkjdsfl.jpg"
    }
  ]
};


// Popluate skills on resume
if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);

  for (x = 0; x < bio.skills.length; x++ ) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[x]);

    $('#skills').append(formattedSkill);
  }
}

// Popluate jobs on resume
for (job in work) {
  for (x = 0; x < work.jobs.length; x++ ) {
    $('#workExperience').append(HTMLworkStart);
    console.log(x)
  }
}

