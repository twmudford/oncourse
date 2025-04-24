function getFlagColour() {
    committee_boat_flag_colour = document.querySelector('input[name="committee-flag"]:checked').value
    return committee_boat_flag_colour
}


function setCommitteeBoatDisplay(first_mark_rounding) {
    boat = document.getElementById("committee-boat")
    if (first_mark_rounding == "flag") {
        boat.style.display = "inline"
    }
    else {
        boat.style.display = "none"
    }
}

function setMarkRoundingTextColour(rounding) {
    switch (rounding) {
        case "port":
            mark_rounding_class = "port"
            break
        case "stbd":
            mark_rounding_class = "stbd"
            break
        case "flag":
            switch (getFlagColour()) {
                case "port":
                    mark_rounding_class = "port"
                    break
                case "stbd":
                    mark_rounding_class = "stbd"
                    break
                default:
                    mark_rounding_class = "None"
            }
            break
        default:

            mark_rounding_class = "None"
    }
}

function setWindAngleTextColour(wind_angle) {
    if (wind_angle < 0) {
        wind_angle_text_colour = "port"
    }
    else {
        wind_angle_text_colour = "stbd"
    }
    return wind_angle_text_colour
}


// Generate course description HTML output
function generate_course_description(club, course_num) {
    course_description_section = document.getElementById("course-description")
    course_description_heading = document.createElement("h3")
    course_description_heading.innerHTML += club.toUpperCase() + " Course " + course_num
    course_description_p = document.createElement("p")
}