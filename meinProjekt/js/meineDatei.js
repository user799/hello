"use strict";
if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function (event) {
        document.getElementById("xBeschl").innerHTML = 'x ' + event.acceleration.x.toFixed(2);
        document.getElementById("yBeschl").innerHTML = 'y ' + event.acceleration.y.toFixed(2);
        document.getElementById("zBeschl").innerHTML = 'z ' + event.acceleration.z.toFixed(2);
    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}
document.getElementById('meinButton').addEventListener('click', holePosition);
function holePosition() {
    if (navigator.geolocation) {
        document.getElementById("geoSupported").innerText = "OK - Geolocation wird unterstützt!";
        let options = {
            enableHighAccuracy: true
        };
        navigator.geolocation.getCurrentPosition(showPosition, showError, options);
    } else {
        document.getElementById("geoSupported").innerText = "Geolocation nicht unterstützt!";
    }
}
function showPosition(position) {
    document.getElementById("breite").innerHTML = 'Breitengrad: ' + position.coords.latitude;
    document.getElementById("laenge").innerHTML = 'Längengrad: ' + position.coords.longitude;
    document.getElementById("Genauigkeit").innerHTML = 'Genauigkeit: ' + position.coords.accuracy;
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Abfrage der Geoposition untersagt.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Es sind keine Geopositionsdaten verfügbar.');
            break;
        case error.TIMEOUT:
            alert('Timeout überschritten.');
            break;
        default:
            alert('Unbekannter Fehler');
            break;
    }
}
