//important Styles
$("a").css({
    "color": "#C99A25FF",
    "text-decoration": "none",
    "margin-top": "10px",
    "display": "block",
});



//content

var bio = {

    "name": "Lukas Seyfarth",

    "role": "Web Developer",

    "contacts": {

        "email": "kontakt@lukasseyfarth.com",

        "github": "2567910",

        "twitter": "kontakt@lukasseyfarth",

        "location": "Erfurt, Germany",

        "mobile": "0176/82754848"

    },

    "biopic": "images/me.jpg",

    "welcomeMessage": "Welcome to my Onlineresume",

    "skills": ["HTML", "CSS", "Javascript", "Adobe"]

};



var work = {

    "jobs": [{

            "employer": "Joliarts.de",

            "title": "SEO",

            "location": "Weimar, Germany",

            "dates": " Juni 2014 - August 2016",

            "description": "Joliarts.de ist ein Online-Portal auf dem Regionale Handweker und kuenstler verkaufen koennen."

        },
        {

            "employer": "Horn Immobilien",

            "title": "Front-End Web Developer",

            "location": "Meiningen, Germnay",

            "dates": "September 2016 - March 2017",

            "description": "Entwicklung und Design einer Wordpress Seite. "

        },
        {

            "employer": "Leander Brandstaedt",

            "title": "Front-End Web Developer",

            "location": "Weimar, Germany",

            "dates": "Oktober 2016 - Februar 2017",

            "description": "Entwicklung und Design einer Wordpress Seite."

        }
    ]
};



var education = {

    "schools": [{

            "name": "E-Commerce Studium",

            "dates": "2017-2020",

            "location": "Jena, Germany",

            "degree": "bachelor of science",

            "majors": ["E-commerce"],

            "minor": "Math",

            "url": "http://www.eah-jena.de"

        },
        {
            "name": "Walter-Gropius-Schule",

            "dates": "2015 - 2017",

            "location": "Erfurt, Germany",

            "degree": "Fachhochschulabschluss",

            "majors": ["Design"],

            "minor": "Math",

            "url": "http://www.walter-gropius-schule.de/"

        },
        {
            "name": "Burnt-river Highscool",

            "dates": "2012 - 2013",

            "location": "New York",

            "degree": "Junior year",

            "majors": ["English"],

            "minor": "Math",

            "url": ""
        }
    ],

    "onlineCourses": [{

            "school": "Udacity",

            "title": "Front-End Web Developer Nanodegree",

            "dates": "2016 - 2017",

            "url": "https://de.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
        }
    ]
};



var projects = {

    "projects": [{

            "title": "Lukasseyfarth.com",

            "dates": "Oktober, 2016",

            "description": "My Wordpress Portfolio",

            "images": ["images/lukasw.jpg"],

            "url": "https://lukasseyfarth.com/"

        },
        {

            "title": "Html and CSS Portfolio",

            "dates": "Novermber 2016",

            "description": "Ein Portfolio welches ich bei meinem Front-End Web Developer " +

                "Nanodegree erstellt habe.",

            "images": ["images/portfolio.jpg"],

            "url": "www.1.com"
        }
    ]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedContactInfo = [];

    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));

    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));

    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));

    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));

    $("#header").prepend(formattedRole);

    $("#header").prepend(formattedName);

    $("#header").append(formattedBioPic);

    $("#header").append(formattedWelcomeMsg);


    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {

            $("#skills").append(HTMLskills.replace("%data%", skill));

        });

    }

    for (i in formattedContactInfo) {

        $("#topContacts").append(formattedContactInfo[i]);

        $("#footerContacts").append(formattedContactInfo[i]);
    }
};


work.display = function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(job) {

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);

            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);

            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);

            var formatteddates = HTMLworkDates.replace("%data%", job.dates);

            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);

            $(".work-entry:last").append(formattedWorkLocation);

            $(".work-entry:last").append(formatteddates);

            $(".work-entry:last").append(formattedWorkDescription);

        });

    }

}

projects.display = function() {

    if (projects.projects.length > 0) {

        projects.projects.forEach(function(project) {

            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);


            $(".project-entry:last").append(formattedProjectTitle);

            $(".project-entry:last").append(formattedProjectDates);

            $(".project-entry:last").append(formattedProjectDescription);

            project.images.forEach(function(image) {

                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);

                $(".project-entry:last").append(formattedProjectImage);

            });

        });

    }
};


education.display = function() {

    if (education.schools.length > 0 || education.onlineCourses.length > 0) {

        education.schools.forEach(function(school) {

            $("#education").append(HTMLschoolStart);


            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

            //var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", schools.minor);


            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

            $(".education-entry:last").append(formattedSchoolDates);

            $(".education-entry:last").append(formattedSchoolLocation);

            $(".education-entry:last").append(formattedSchoolMajor);

            //$(".education-entry:last").append(formattedSchoolMinor);

        });

        if (education.onlineCourses.length > 0) {

            $("#education").append(HTMLonlineClasses);


            education.onlineCourses.forEach(function(onlineCourse) {

                $("#education").append(HTMLschoolStart);

                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title).replace("#", onlineCourse.url);

                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);

                var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);

                var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

                $(".education-entry:last").append(formattedOnlineDates);

                $(".education-entry:last").append(formattedOnlineURL);

            });

        }
    }
};


bio.display();

work.display();

education.display();

projects.display();


$("#mapDiv").append(googleMap);
