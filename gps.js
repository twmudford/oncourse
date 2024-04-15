
function testFunc() {
    myel = document.getElementById("timtest")
    getLocation()

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        } else {
            myel.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        console.log(position)
        myel.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude + "<br>Accuracy: " + position.coords.accuracy + "<br>Heading: " + position.coords.heading + "<br>Speed: " + position.coords.speed + "<br>Timestamp: " + Date(position.timestamp)

}
    

}