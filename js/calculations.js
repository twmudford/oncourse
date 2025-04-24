// TODO change this to handle lat and long (remove code duplication, maybe break into another function)
function convert_coordinates(marker) {
    degrees = marker.lat.split("°")[0];
    minutes = marker.lat.split("°")[1].slice(0, -1);
    cardinal = marker.lat.split("°")[1].slice(-1);
    decimal_degrees = Number(degrees) + Number(minutes) / 60;

    if (cardinal == "S" || cardinal == "W") {
        decimal_degrees = decimal_degrees * -1;
    }

    marker.lat = decimal_degrees

    degrees = marker.long.split("°")[0];
    minutes = marker.long.split("°")[1].slice(0, -1);
    cardinal = marker.long.split("°")[1].slice(-1);
    decimal_degrees = Number(degrees) + Number(minutes) / 60;

    if (cardinal == "S" || cardinal == "W") {
        decimal_degrees = decimal_degrees * -1;
    }

    marker.long = decimal_degrees
}


//convert coordinates for unique markers for a given course
function get_unique_markers(course) {
    course_full = []
    for (let i = 0; i < course.length; i++) {
        course_full.push(course[i].mark)
    }
    let unique_markers = [...new Set(course_full)];

    for (let i = 0; i < unique_markers.length; i++) {
        if (typeof (markers[unique_markers[i]].lat) != "number") {
            convert_coordinates(markers[unique_markers[i]])
        }
    }
}


function degrees_to_radians(degrees) {
    pi = Math.PI;
    radians = degrees * (pi / 180);
    return radians
}


function radians_to_degrees(radians) {
    pi = Math.PI;
    degrees = radians * (180 / pi);
    return degrees
}


function find_angle(markA, markB) {
    alon = markA.long
    blon = markB.long
    alat = markA.lat
    blat = markB.lat

    alon = degrees_to_radians(alon)
    blon = degrees_to_radians(blon)
    alat = degrees_to_radians(alat)
    blat = degrees_to_radians(blat)

    Dlon = blon - alon

    varX = Math.cos(blat) * Math.sin(Dlon);
    varY = Math.cos(alat) * Math.sin(blat) - Math.sin(alat) * Math.cos(blat) * Math.cos(Dlon);

    angle_true = Math.atan2(varX, varY);
    angle_true = radians_to_degrees(angle_true);
    angle_true = (angle_true + 360) % 360;

    angle_magnetic = angle_true - magnetic_declination_akl
    if (get_north_direction() == "magnetic") {
        angle = angle_magnetic
    }
    else {
        angle = angle_true
    }
    return angle
}


function get_north_direction() {
    north_direction = document.querySelector('input[name="north-direction"]:checked').value
    return north_direction
}


function course_with_angles(course) {
    course_angles = []
    for (let i = 0; i < course.length - 1; i++) {
        course_angles.push({ mark: markers[course[i].mark], coursemarker: course[i].mark, angle_next_mark: find_angle(markers[course[i].mark], markers[course[i + 1].mark]) });
    }
    return course_angles
}


// TODO break this monster function into smaller useful functions
function wind_angle(course, wind_direction) {
    course_angles = course_with_angles(course.course_route)
    
    // Add Start to html
    course_leg = document.createElement("strong")
    course_leg.innerHTML = markers[course.start].name + '<br>'
    course_description_p.replaceChildren(course_leg)

    // TODO find a way to ping start or start area to then get heading to first mark

    // Add first leg to html
    first_leg = document.createElement("p")
    first_leg.innerHTML = "Variable"
    course_description_p.appendChild(first_leg)

    first_mark_rounding = course.course_route[0].rounding
    setCommitteeBoatDisplay(first_mark_rounding)

    // Add course info to html
    for (let i = 0; i < course_angles.length; i++) {
        angle_wind = wind_direction - course_angles[i].angle_next_mark

        if (angle_wind > 180) {
            angle_wind -= 360
        }
        else if (angle_wind < -180) {
            angle_wind += 360
        }
        course_angles[i].wind_next_mark = Math.abs(angle_wind)
        wind_angle_colour = document.createElement("span")
        wind_angle_colour.setAttribute("class", setWindAngleTextColour(angle_wind))
        wind_angle_colour.innerHTML = Math.round(course_angles[i].wind_next_mark) + '°'


        mark_name = markers[course.course_route[i].mark].name
        next_mark_name = markers[course.course_route[i + 1].mark].name
        rounding = course.course_route[i].rounding
        setMarkRoundingTextColour(rounding)

        course_leg = document.createElement("p")
        course_leg.setAttribute("class", mark_rounding_class)
        course_leg.innerHTML = mark_name + '<br>'
        course_description_p.appendChild(course_leg)
        course_leg_angles = document.createElement("p")
        if (get_north_direction() == "magnetic") {
            course_leg_angles.innerHTML = Math.round(course_angles[i].angle_next_mark) + '°M. TWA: '
        }
        else {
            course_leg_angles.innerHTML = Math.round(course_angles[i].angle_next_mark) + '°T. TWA: '
        }
        course_leg_angles.appendChild(wind_angle_colour)
        course_description_p.appendChild(course_leg_angles)
    }

    // Add final mark to html 
    setMarkRoundingTextColour(course.course_route[course.course_route.length - 1].rounding)
    course_leg = document.createElement("p")
    course_leg.innerHTML = next_mark_name + '<br>'
    course_leg.setAttribute("class", mark_rounding_class)
    course_description_p.appendChild(course_leg)

    // Add finish leg to html
    if (typeof (markers[course.finish].lat) != "number") {
        convert_coordinates(markers[course.finish])
    }
    last_leg_angle = find_angle(markers[course.course_route[course.course_route.length - 1].mark], markers[course.finish])
    last_leg_angle_wind = wind_direction - last_leg_angle
    last_leg = document.createElement("p")


    // fix wind angles -- can't remember why this is here
    if (last_leg_angle_wind > 180) {
        last_leg_angle_wind -= 360
    }
    else if (last_leg_angle_wind < -180) {
        last_leg_angle_wind += 360
    }
    wind_to_finish = Math.abs(last_leg_angle_wind)

    wind_angle_colour = document.createElement("span")
    wind_angle_colour.setAttribute("class", setWindAngleTextColour(last_leg_angle_wind))
    wind_angle_colour.innerHTML = Math.round(wind_to_finish) + '°'


    if (get_north_direction() == "magnetic") {
        last_leg.innerHTML = Math.round(last_leg_angle) + '°M. TWA: '
    }
    else {
        last_leg.innerHTML = Math.round(last_leg_angle) + '°T. TWA: '
    }
    last_leg.appendChild(wind_angle_colour)
    course_description_p.appendChild(last_leg)

    course_leg = document.createElement("strong")
    course_leg.innerHTML = markers[course.finish].name, '<br>'
    course_description_p.appendChild(course_leg)

    course_description_section.replaceChildren(course_description_heading, course_description_p)
}