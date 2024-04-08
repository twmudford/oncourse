alert("Hello World!")

// Course 16, clockwise, 9.8nm. start to mark 1 variable, mark 1 to 2 004°m mark 2 to 3 056°m mark 3 to 4 177°m mark 4 to 5 290°m mark 5 to 6 285°m mark 6 to 7 186°m to finish.

magnetic_declination_akl = 20.24

//markers
start = {name:"Start", lat:"36°49.479S", long:"174°52.451E"}; //random point for start
finish = {name:"Finish", lat:"36°50.536S", long:"174°52.625E"}; //barber pole
mark_Westhaven = [{name:"Westhaven", lat:"36°49.90S", long:"174°44.91E"}];
mark_Bayswater = [{name:"Bayswater", lat:"36°49.90S", long:"174°44.91E"}];//36°49.78S 174°45.77E
mark_StanleyPoint = [{name:"Stanley Point", lat:"36°49.90S", long:"174°44.91E"}];//36°49.85S 174°46.59E
mark_Devonport = [{name:"Devonport", lat:"36°49.90S", long:"174°44.91E"}];//36°50.00S 174°47.40E
mark_TorpedoBay = [{name:"Torpedo Bay", lat:"36°49.90S", long:"174°44.91E"}];//36°50.11S 174°48.38E
mark_NorthHead = [{name:"North Head", lat:"36°49.90S", long:"174°44.91E"}];//36°49.63S 174°49.08E
mark_RoughRock = [{name:"Rough Rock", lat:"36°49.90S", long:"174°44.91E"}];//36°49.07S 174°49.50E
mark_NarrowNeck = [{name:"Narrow Neck", lat:"36°49.90S", long:"174°44.91E"}];//36°47.83S 174°48.51E
mark_Cable = [{name:"Cable", lat:"36°49.90S", long:"174°44.91E"}];//36°47.61S 174°47.28E
mark_McKenzie = [{name:"McKenzie", lat:"36°49.90S", long:"174°44.91E"}];//36°46.84S 174°49.05E
mark_SaltWorks = [{name:"Salt Works", lat:"36°49.90S", long:"174°44.91E"}];//36°47.80S 174°49.36E
mark_FlaxPoint = [{name:"Flax Point", lat:"36°49.90S", long:"174°44.91E"}];//36°48.41S 174°49.95E
mark_Rangitoto = [{name:"Rangitoto", lat:"36°49.90S", long:"174°44.91E"}];//36°48.80S 174°50.84E
mark_NorthernLeading = [{name:"Northern Leading", lat:"36°49.90S", long:"174°44.91E"}];//36°49.33S 174°50.60E
mark_BeanRock = [{name:"Bean Rock", lat:"36°49.90S", long:"174°44.91E"}];//36°50.19S 174°49.63E
mark_Bastion = [{name:"Bastion", lat:"36°49.90S", long:"174°44.91E"}];//36°50.41S 174°49.36E
mark_Orakei = [{name:"Orakei", lat:"36°49.90S", long:"174°44.91E"}];//36°50.54S 174°48.72E
mark_Resolution = [{name:"Resolution", lat:"36°49.90S", long:"174°44.91E"}];//36°50.66S 174°47.89E
mark_Chelsea = [{name:"Chelsea", lat:"36°49.90S", long:"174°44.91E"}];//36°49.68S 174°43.80E
mark_Meola = [{name:"Meola", lat:"36°49.90S", long:"174°44.91E"}];//36°49.81S 174°42.66E
mark_GulfHarbour = [{name:"Gulf Harbour", lat:"36°49.90S", long:"174°44.91E"}];//36°39.13S 174°48.03E
mark_Torbay = [{name:"Torbay", lat:"36°49.90S", long:"174°44.91E"}];//36°42.50S 174°47.30E
mark_Illomama = {name:"Illomama", lat:"36°48.70S", long:"174°52.62E"}; 
mark_SergeantChannel = [{name:"Sergeant Channel", lat:"36°49.90S", long:"174°44.91E"}];//36°49.30S 174°57.40E
mark_RockyBay = [{name:"Rocky Bay", lat:"36°49.90S", long:"174°44.91E"}];//36°49.98S 175°03.30E
mark_Motukorea = {name:"Motukorea", lat:"36°49.80S", long:"174°52.00E"}; 
mark_Motuhigreen = {name:"Motuhi Green", lat:"36°48.171S", long:"174°55.295E"}; //aprox
mark_Navybuoy = {name:"Navy Buoy", lat:"36°49.899S", long:"174°54.678E"}; //approx 
mark_BrownsIslandBeacon = {name:"Browns Island Beacon", lat:"36°49.438S", long:"174°53.927E"}; //approx 
 

//courses
//add name and direction (cw, ccw) propertis to course object (make dictionary list), distance? (calculate?)
course16 = [start, mark_Motukorea, mark_Illomama, mark_Motuhigreen, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Illomama, mark_Motukorea, finish]

let unique_markers = [...new Set(course16)];


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
for (let i = 0; i < unique_markers.length; i++) {
    convert_coordinates(unique_markers[i])
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

    //console.log("true: ", angle_true)
    //console.log("magnetic: ", angle_magnetic)
    return angle_magnetic
}


function course_with_angles(course) {
    course_angles = []
    for (let i = 0; i < course.length-1; i++){
        course_angles.push({mark_name: course[i].name , coursemarker: course[i], angle_next_mark: find_angle(course16[i], course16[i+1])});
    }
    return course_angles
}


function wind_angle(course, wind_direction) {
    course_angles = course_with_angles(course)
    for (let i = 0; i < course_angles.length; i++){
        angle_wind = course_angles[i].angle_next_mark - wind_direction
        angle_wind = (angle_wind + 360) % 360;
        course_angles[i].wind_next_mark = angle_wind
    }
}

wind_angle(course16, 270)
course = course16
console.log('Course 16')

for (let i = 0; i < course_angles.length; i++){
    console.log(course[i].name, 'to', course[i+1].name, Math.round(course_angles[i].angle_next_mark), '°m. TWA:', Math.round(course_angles[i].wind_next_mark));
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




