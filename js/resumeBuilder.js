//important Styles
$("a").css({"color": "#C99A25FF", "text-decoration": "none", "margin-top": "10px", "display": "block",});

//content
var bio = {
	"name": "Lukas Seyfarth",
	"role": "Web Developer",
	"contacts": {
		"email": "kontakt@lukasseyfarth.com",
		"github": "2567910",
		"twitter": "kontakt@lukasseyfarth",
		"location": "Erfurt, Germany"
	},
	"picture": "images/me.jpg",
	"welcomeMessage": "Welcome to my Onlineresume",
	"skills": ["HTML", "CSS", "Javascript", "Adobe"]
};

var work = {
	"jobs": [
		{
			"employer": "Joliarts.de",
			"title": "SEO",
			"location": "Weimar, Germany",
			"datesWorked": " Juni 2014 - August 2016",
			"description": "Joliarts.de ist ein Online-Portal auf dem Regionale Handweker und kuenstler verkaufen koennen."
		},
		{
			"employer": "Horn Immobilien",
			"title": "Front-End Web Developer",
			"location": "Meiningen, Germnay",
			"datesWorked": "September 2016 - March 2017",
			"description": "Entwicklung und Design einer Wordpress Seite. "
		},
		{
			"employer": "Leander Brandstaedt",
			"title": "Front-End Web Developer",
			"location": "Weimar, Germany",
			"datesWorked": "Oktober 2016 - Februar 2017",
			"description": "Entwicklung und Design einer Wordpress Seite."
		}
	]
};

var education = {
	"schools": [
		{ "name": "E-Commerce Studium",
			"datesAttended": "2017-2020",
			"location": "Jena, Germany",
			"degree": "bachelor of science",
			"major": "E-commerce",
			"minor": "Math",
			"url": "http://www.eah-jena.de"
		},
		{ "name": "Walter-Gropius-Schule",
			"datesAttended": "2015 - 2017",
			"location": "Erfurt, Germany",
			"degree": "Fachhochschulabschluss",
			"major": "Design",
			"minor": "Math",
			"url": "http://www.walter-gropius-schule.de/"
		}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Front-End Web Developer Nanodegree",
			"completed": "2016 - 2017",
			"url": "https://de.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Lukasseyfarth.com",
			"datesWorked": "Oktober, 2016",
			"description": "My Wordpress Portfolio",
			"images": ["images/lukasw.jpg"],
			"url": "https://lukasseyfarth.com/"
		},
		{
			"title": "Html and CSS Portfolio",
			"datesWorked": "Novermber 2016",
			"description": "Ein Portfolio welches ich bei meinem Front-End Web Developer " +
			"Nanodegree erstellt habe.",
			"images": ["images/portfolio.jpg"],
			"url": "#"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
//das folgende sagt nur das wenn etwas in skills ist dann soll es angezeig werde wenn nicht dann nicht
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}


		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
}


education.display();

$("#mapDiv").append(googleMap);