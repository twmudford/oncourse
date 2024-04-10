magnetic_declination_akl = 20.24

//markers
start = {name:"Start", lat:"36°49.479S", long:"174°52.451E"} //random point for start
finish = {name:"Finish", lat:"36°50.536S", long:"174°52.625E"} //Karaka Light
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
courses = {
    4: [start, mark_Iliomama, mark_Motuihegreen, mark_Motukorea, finish],
    5: [start, mark_Iliomama, mark_Motuihegreen, mark_Motukorea, mark_Iliomama, mark_Motuihegreen, mark_Motukorea, finish],
    6: [start, mark_Motukorea, mark_Iliomama, mark_Motuihegreen, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Motukorea, finish],
    7: [start, mark_Motukorea, mark_BrownsIslandBeacon, mark_Navybuoy, mark_Motuihegreen, mark_Iliomama, mark_Motukorea, finish],
    8: [start, mark_Motukorea, mark_Rangitoto, mark_Iliomama, mark_NorthHead, mark_Motukorea, finish],
    9: [start, mark_Motukorea, mark_NorthHead, mark_Iliomama, mark_Rangitoto, mark_Motukorea, finish],
    10: [start, mark_Motukorea, mark_BrownsIslandBeacon, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Motukorea, mark_NorthernLeading, mark_Motukorea, finish],
    11: [start, mark_NorthernLeading, mark_Rangitoto, mark_RoughRock, mark_NorthernLeading, mark_Rangitoto, mark_Motukorea, finish],
    12: [start, mark_Motukorea, mark_RoughRock, mark_SaltWorks, mark_NarrowNeck, mark_Motukorea, finish],
    13: [start, mark_Rangitoto, mark_BrownsIslandBeacon, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Iliomama, mark_Motukorea, finish],
    14: [start, mark_Motukorea, mark_SaltWorks, mark_NorthernLeading, mark_Iliomama, mark_Motukorea, mark_Iliomama, mark_Motukorea, finish],
    15: [start, mark_Motukorea, mark_Iliomama, mark_Rangitoto, mark_Motukorea, finish],
    16: [start, mark_Motukorea, mark_Iliomama, mark_Motuihegreen, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Iliomama, mark_Motukorea, finish],
    17: [start, mark_Motukorea, mark_Iliomama, mark_BrownsIslandBeacon, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Iliomama, mark_Motukorea, finish],
    18: [start, mark_Motukorea, mark_Iliomama, mark_Rangitoto, mark_Motukorea, mark_Iliomama, mark_Rangitoto, mark_Motukorea, finish],
    19: [start, mark_Motukorea, mark_Rangitoto, mark_Iliomama, mark_Motukorea, mark_Rangitoto, mark_Iliomama, mark_Motukorea, finish],
    20: [start, mark_Motukorea, mark_Motuihegreen, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Iliomama, mark_NorthHead, mark_Rangitoto, mark_Motukorea, mark_Iliomama, mark_Motukorea, finish],
    21: [start, mark_Motukorea, mark_McKenzie, mark_NorthHead, mark_McKenzie, mark_Motukorea, finish],
    22: [start, mark_Motukorea, mark_Iliomama, mark_Motuihegreen, mark_Navybuoy, mark_BrownsIslandBeacon, mark_Motukorea, mark_Iliomama, mark_Rangitoto, mark_Motukorea, finish],
    23: [start, mark_Motukorea, mark_BrownsIslandBeacon, mark_Navybuoy, mark_Motuihegreen, mark_Iliomama, mark_Motukorea, mark_Rangitoto, mark_Iliomama, mark_Motukorea, finish],
    24: [start, mark_Motukorea, mark_Rangitoto, mark_Iliomama, mark_NorthHead, mark_Motuihegreen, mark_Rangitoto, mark_Iliomama, mark_Motukorea, finish],
    25: [start, mark_Motukorea, mark_NorthHead, mark_Iliomama, mark_Rangitoto, mark_Motukorea, mark_Iliomama, mark_Rangitoto, mark_Motukorea, finish],
    // 26: [start, mark_BrownsIslandBeacon, ((round Motuihe Is.)), finish] // TODO not sure how to map this
}