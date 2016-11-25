if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
bio.bioloop.forEach(i in (bio.skills))

        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));

    }

}