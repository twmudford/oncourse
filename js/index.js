//Stuff on the webpage
function clubList() {
    select_club = document.getElementById("club")
    for (const [key, value] of Object.entries(courses)) {
        select_club.options[select_club.options.length] = new Option(key.toUpperCase(), key)
    }
    courseList()
}
window.onload = clubList

function courseList() {
    club = document.getElementById("club")
    course_number = document.getElementById("course-number")
    club_courses = courses[club.value]
    course_number.length = 0

    for (const [key, value] of Object.entries(club_courses)) {
        course_number.options[course_number.length] = new Option(key, key)
    }
}


function get_course() {
    club = document.getElementById("club").value
    course_num = document.getElementById("course-number").value
    wind_dir = document.getElementById("wind-direction").value
    if (get_north_direction() == "magnetic") {
        wind_dir -= magnetic_declination_akl
    }
    get_unique_markers(courses[club][course_num].course_route) //gets unique markers and converts GPS coordinates to decimal degrees
    generate_course_description(club, course_num)
    wind_angle(courses[club][course_num], wind_dir)
}
