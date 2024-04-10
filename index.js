magnetic_declination_akl = 20.24


//TODO maybe convert courses and markers to json
//markers
start = {name:"Start", lat:"36°49.479S", long:"174°52.451E"} //random point for start
start_rnzys = {name:"Start", lat:"36°49.976S", long:"174°45.167E"} //random point for start (same as finish_rnzys)
finish_bbyc = {name:"Finish", lat:"36°50.536S", long:"174°52.625E"} //Karaka Light
finish_rnzys = {name:"Finish", lat:"36°49.976S", long:"174°45.167E"} //westhaven-ish
mark_Westhaven = {name:"Westhaven", lat:"36°49.90S", long:"174°44.91E"}
mark_Bayswater = {name:"Bayswater", lat:"36°49.78S", long:"174°45.77E"}
mark_StanleyPoint = {name:"Stanley Point", lat:"36°49.85S", long:"174°46.59E"}
mark_Devonport = {name:"Devonport", lat:"36°50.00S", long:"174°47.40E"}
mark_TorpedoBay = {name:"Torpedo Bay", lat:"36°50.11S", long:"174°48.38E"}
mark_NorthHead = {name:"North Head", lat:"36°49.63S", long:"174°49.08E"}
mark_RoughRock = {name:"Rough Rock", lat:"36°49.07S", long:"174°49.50E"}
mark_NarrowNeck = {name:"Narrow Neck", lat:"36°47.83S", long:"174°48.51E"}
mark_Cable = {name:"Cable", lat:"36°47.61S", long:"174°47.28E"}
mark_McKenzie = {name:"McKenzie", lat:"36°46.84S", long:"174°49.05E"} 
mark_SaltWorks = {name:"Salt Works", lat:"36°47.80S", long:"174°49.36E"}
mark_FlaxPoint = {name:"Flax Point", lat:"36°48.41S", long:"174°49.95E"}
mark_Rangitoto = {name:"Rangitoto", lat:"36°48.80S", long:"174°50.84E"}
mark_NorthernLeading = {name:"Northern Leading", lat:"36°49.33S", long:"174°50.60E"}
mark_BeanRock = {name:"Bean Rock", lat:"36°50.19S", long:"174°49.63E"}
mark_Bastion = {name:"Bastion", lat:"36°50.41S", long:"174°49.36E"}
mark_Orakei = {name:"Orakei", lat:"36°50.54S", long:"174°48.72E"}
mark_Resolution = {name:"Resolution", lat:"36°50.66S ", long:"174°47.89E"}
mark_Chelsea = {name:"Chelsea", lat:"36°49.68S ", long:"174°43.80E"}
mark_Meola = {name:"Meola", lat:"36°49.81S", long:"174°42.66E"}
mark_GulfHarbour = {name:"Gulf Harbour", lat:"36°39.13S", long:"174°48.03E"}
mark_Torbay = {name:"Torbay", lat:"36°42.50S", long:"174°47.30E"}
mark_Iliomama = {name:"Iliomama", lat:"36°48.70S", long:"174°52.62E"}
mark_SergeantChannel = {name:"Sergeant Channel", lat:"36°49.30S", long:"174°57.40E"}
mark_RockyBay = {name:"Rocky Bay", lat:"36°49.98S", long:"175°03.30E"}
mark_Motukorea = {name:"Motukorea", lat:"36°49.80S", long:"174°52.00E"}
mark_Motuihegreen = {name:"Motuihe Green", lat:"36°48.171S", long:"174°55.295E"} //aprox
mark_Navybuoy = {name:"Navy Buoy", lat:"36°49.899S", long:"174°54.678E"} //approx 
mark_BrownsIslandBeacon = {name:"Browns Island Beacon", lat:"36°49.438S", long:"174°53.927E"} //approx 
 

//courses
//TODO add name and direction (cw, ccw) propertis to course object (make dictionary list), distance? (calculate?)
//TODO incorportate rounding directions (in course objects? [{mark: mark1_name, rounding: rounding}, {mark: mark2_name, rounding: rounding}, etc])
    // probably convert to json before doing this bit 
courses = {
    bbyc: {
        4: [start, mark_Iliomama, mark_Motuihegreen, mark_Motukorea, finish_bbyc],
        5: [start, mark_Iliomama, mark_Motuihegreen, mark_Motukorea, mark_Iliomama, mark_Motuihegreen, mark_Motukorea, finish_bbyc],
        6: [start, mark_Motukorea, mark_Iliomama, mark_Motuihegreen, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Motukorea, finish_bbyc],
        7: [start, mark_Motukorea, mark_BrownsIslandBeacon, mark_Navybuoy, mark_Motuihegreen, mark_Iliomama, mark_Motukorea, finish_bbyc],
        8: [start, mark_Motukorea, mark_Rangitoto, mark_Iliomama, mark_NorthHead, mark_Motukorea, finish_bbyc],
        9: [start, mark_Motukorea, mark_NorthHead, mark_Iliomama, mark_Rangitoto, mark_Motukorea, finish_bbyc],
        10: [start, mark_Motukorea, mark_BrownsIslandBeacon, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Motukorea, mark_NorthernLeading, mark_Motukorea, finish_bbyc],
        11: [start, mark_NorthernLeading, mark_Rangitoto, mark_RoughRock, mark_NorthernLeading, mark_Rangitoto, mark_Motukorea, finish_bbyc],
        12: [start, mark_Motukorea, mark_RoughRock, mark_SaltWorks, mark_NarrowNeck, mark_Motukorea, finish_bbyc],
        13: [start, mark_Rangitoto, mark_BrownsIslandBeacon, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Iliomama, mark_Motukorea, finish_bbyc],
        14: [start, mark_Motukorea, mark_SaltWorks, mark_NorthernLeading, mark_Iliomama, mark_Motukorea, mark_Iliomama, mark_Motukorea, finish_bbyc],
        15: [start, mark_Motukorea, mark_Iliomama, mark_Rangitoto, mark_Motukorea, finish_bbyc],
        16: [start, mark_Motukorea, mark_Iliomama, mark_Motuihegreen, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Iliomama, mark_Motukorea, finish_bbyc],
        17: [start, mark_Motukorea, mark_Iliomama, mark_BrownsIslandBeacon, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Iliomama, mark_Motukorea, finish_bbyc],
        18: [start, mark_Motukorea, mark_Iliomama, mark_Rangitoto, mark_Motukorea, mark_Iliomama, mark_Rangitoto, mark_Motukorea, finish_bbyc],
        19: [start, mark_Motukorea, mark_Rangitoto, mark_Iliomama, mark_Motukorea, mark_Rangitoto, mark_Iliomama, mark_Motukorea, finish_bbyc],
        20: [start, mark_Motukorea, mark_Motuihegreen, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Iliomama, mark_NorthHead, mark_Rangitoto, mark_Motukorea, mark_Iliomama, mark_Motukorea, finish_bbyc],
        21: [start, mark_Motukorea, mark_McKenzie, mark_NorthHead, mark_McKenzie, mark_Motukorea, finish_bbyc],
        22: [start, mark_Motukorea, mark_Iliomama, mark_Motuihegreen, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Motukorea, mark_Iliomama, mark_Rangitoto, mark_Motukorea, finish_bbyc],
        23: [start, mark_Motukorea, mark_BrownsIslandBeacon, mark_Navybuoy, mark_Motuihegreen, mark_Iliomama, mark_Motukorea, mark_Rangitoto, mark_Iliomama, mark_Motukorea, finish_bbyc],
        24: [start, mark_Motukorea, mark_Rangitoto, mark_Iliomama, mark_NorthHead, mark_Motuihegreen, mark_Rangitoto, mark_Iliomama, mark_Motukorea, finish_bbyc],
        25: [start, mark_Motukorea, mark_NorthHead, mark_Iliomama, mark_Rangitoto, mark_Motukorea, mark_Iliomama, mark_Rangitoto, mark_Motukorea, finish_bbyc],
        // 26: [start, mark_BrownsIslandBeacon, ((round Motuihe Is.)), finish_bbyc] // TODO not sure how to map this
    },
    rnzys: {
        1: [start_rnzys, mark_StanleyPoint, mark_Westhaven, mark_Bayswater, mark_Westhaven, mark_Bayswater, finish_rnzys],
        2: [start_rnzys, mark_Bayswater, mark_Westhaven, mark_Chelsea, mark_Bayswater, finish_rnzys],
        3: [start_rnzys, mark_Resolution, mark_StanleyPoint, mark_Bayswater, finish_rnzys],
        4: [start_rnzys, mark_Bayswater, mark_StanleyPoint, mark_Resolution, finish_rnzys],
        5: [start_rnzys, mark_Resolution, mark_TorpedoBay, finish_rnzys],
        6: [start_rnzys, mark_TorpedoBay, mark_Resolution, finish_rnzys]
    }
}


//change this to handle lat and long (remove code duplication, maybe break into another function)
function convert_coordinates(marker) {
    degrees = marker.lat.split("°")[0];
    minutes = marker.lat.split("°")[1].slice(0,-1);
    cardinal = marker.lat.split("°")[1].slice(-1);
    decimal_degrees = Number(degrees) + Number(minutes)/60;

    if (cardinal == "S" || cardinal == "W") {
        decimal_degrees = decimal_degrees * -1;
    }

    marker.lat = decimal_degrees

    degrees = marker.long.split("°")[0];
    minutes = marker.long.split("°")[1].slice(0,-1);
    cardinal = marker.long.split("°")[1].slice(-1);
    decimal_degrees = Number(degrees) + Number(minutes)/60;

    if (cardinal == "S" || cardinal == "W") {
        decimal_degrees = decimal_degrees * -1;
    }

    marker.long = decimal_degrees
}


//convert coordinates for unique markers for a given course
function get_unique_markers(course) {
    let unique_markers = [...new Set(course)];
    for (let i = 0; i < unique_markers.length; i++) {
        if(typeof(unique_markers[i].lat) != "number" ) {
            convert_coordinates(unique_markers[i])
        }
    }
    return unique_markers
}


function degrees_to_radians(degrees) {
    pi = Math.PI;
    radians = degrees * (pi/180);
    return radians
}


function radians_to_degrees(radians) {
    pi = Math.PI;
    degrees = radians * (180/pi);
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
    //TODO add mechanism (radio button?) for selecting true or mag north
    return angle_true
}


function course_with_angles(course) {
    course_angles = []

    for (let i = 0; i < course.length-1; i++){
        course_angles.push({mark_name: course[i].name , coursemarker: course[i], angle_next_mark: find_angle(course[i], course[i+1])});
    }
    return course_angles
}


function wind_angle(course, wind_direction) {
    course_angles = course_with_angles(course)

    for (let i = 0; i < course_angles.length; i++){
        angle_wind = wind_direction - course_angles[i].angle_next_mark
        angle_wind = (angle_wind + 360) % 180;
        course_angles[i].wind_next_mark = angle_wind
        leg = course[i].name.concat(' to ', course[i+1].name, ' ', Math.round(course_angles[i].angle_next_mark), '°T. TWA: ', Math.round(course_angles[i].wind_next_mark), '°<br>')
        document.getElementById("course-description").innerHTML += leg
    }
}

//Stuff on the webpage
function clubList() {
    select_club = document.getElementById("club")
    for (const [key, value] of Object.entries(courses)) {
        select_club.options[select_club.options.length] = new Option(key.toUpperCase(), key)
    }
    courseList()
}
window.onload = clubList

function courseList(){
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
    unique_markers = get_unique_markers(courses[club][course_num]) //gets unique markers and converts GPS coordinates to decimal degrees
    document.getElementById("course-description").innerHTML = "Course " + course_num + ":<br>"
    wind_angle(courses[club][course_num], wind_dir)

    //alert(data)
}



//not sure if will want/need this
//distance between two points

  
  function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;
  
    var dLat = degreesToRadians(lat2-lat1);
    var dLon = degreesToRadians(lon2-lon1);
  
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);
  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return earthRadiusKm * c;
  }


