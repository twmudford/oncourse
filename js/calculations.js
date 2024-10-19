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