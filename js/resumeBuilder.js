// Variables
var x,
    formattedBioPic,
    formattedSkill,
    job,
    fomattedEmployer,
    formattedTitle,
    formattedEmployerTitle;

// _________________________________________________

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

// Work  object
var work = {
  "jobs": [
    {
      "employer": "Hellocomputer",
      "location": "Cape Town, South Africa",
      "title": "Front-end Developer",
      "description": "Mad as a lippy how gutful of chook. Grab us a gobful piece of piss as stands out like ridgy-didge. Mad as a chuck a sickie flamin he hasn't got a bunyip. Shazza got us some booze no worries grab us a yakka. As dry as a ripper heaps shazza got us some flick.",
      "dates": 2013,
      "url": "http://www.hellocomputer.com/"
    },
    {
      "employer": "Quirk",
      "location": "Cape Town, South Africa",
      "title": "Front-end Developer",
      "description": "Get a dog up ya ugg no dramas lets get some no-hoper. We're going bazza no dramas gutful of crook. He hasn't got a slab mate come a fremantle doctor. grog how she'll be right roo. Come a smokes bloody grab us a ropeable.",
      "dates": 2010,
      "url": "http://www.quirk.biz/"
    },
    {
      "employer": "Josdell Property",
      "location": "Cape Town, South Africa",
      "title": "Site manager",
      "description": ["Plans Intrerpretation", "Quality control", "Site reporting", "Staff, subcontrators procurement & supervision"],
      "dates": "2008 - 2009"
    },
    {
      "employer": "Puremix",
      "location": "Cape Town, South Africa",
      "title": "Barman",
      "description": ["Remember, a Jedi can feel the Force flowing through him. Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. I need your help, Luke. She needs your help. I'm getting too old for this sort of thing."],
      "dates": 2010,
      "url": "http://puremix.co.za"
    },
    {
      "employer": "Timecode Records",
      "location": "Cape Town, South Africa",
      "title": ["co-owner", "Artist", "DJ", "Marketing & sales", "Product design", "Event organization"],
      "description": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit tellus, tempor a pellentesque fermentum, hendrerit sit amet risus. Integer pellentesque a lectus non imperdiet. Aenean ac turpis at libero suscipit gravida. Vestibulum a ipsum urna. Nunc pellentesque tempor orci id suscipit. In hac habitasse platea dictumst. Etiam ipsum purus, Music & Radness for 10 years."],
      "dates": "2000 - 2015",
      "url": "http://www.timecode.co.za"
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
  // Add biopic to page
  formattedBioPic =  HTMLbioPic.replace("%data%", bio.bioPic);
  $('#header').append(formattedBioPic);

  // Add name & role to page
  formattedHeaderName =  HTMLheaderName.replace("%data%", bio.name);
  $('#header').append(formattedHeaderName);

  formattedHeaderRole =  HTMLheaderRole.replace("%data%", bio.role);
  $('#header').append(formattedHeaderRole);
  
  //  add skills to page
  $('#header').append(HTMLskillsStart);

  for (x = 0; x < bio.skills.length; x++) {
    formattedSkill = HTMLskills.replace("%data%", bio.skills[x]);

    $('#skills').append(formattedSkill);
  }
}

// Popluate jobs on resume
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  // Employer Name & my position
  formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  formattedEmployerTitle = formattedEmployer + formattedTitle;

  // Location
  formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

  // Dates worked
  formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);

  // Brief description of your responsibilities
  formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

  // Append to page
  $(".work-entry:last").append([formattedEmployerTitle,formattedLocation,formattedDate,formattedJobDescription]);
};
// if (work.jobs.length > 0) {
//   for (job in work.jobs) {
//     for (x = 0; x < work.jobs.length; x++) {
//       $('#workExperience').append(HTMLworkStart);

//       if (work.jobs[job].employer > 0) {
//         fomattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//         fomattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

//         var formattedEmployerTitle = fomattedEmployer + fomattedTitle;
//         console.log(formattedEmployerTitle);
//         $('.work-entry:last').append(formattedEmployerTitle);
//       }
//     }
//   }
// }

