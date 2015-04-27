function doTourist(e){
	Alloy.createController('tourist_choice').getView().open();
	
}

if (Ti.Geolocation.locationServicesEnabled) {
 // perform other operations with Ti.Geolocation
} else {
    alert('Please enable location services');
}


Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
 
//
//  SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES
//  THIS VALUE IS IN METERS
//
Titanium.Geolocation.distanceFilter = 10;
 
//
// GET CURRENT POSITION - THIS FIRES ONCE
//
Titanium.Geolocation.getCurrentPosition(function(e)
{
    if (e.error)
    {
        alert('HFL cannot get your current location');
        return;
    }
 
    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
    var altitude = e.coords.altitude;
    var heading = e.coords.heading;
    var accuracy = e.coords.accuracy;
    var speed = e.coords.speed;
    var timestamp = e.coords.timestamp;
    var altitudeAccuracy = e.coords.altitudeAccuracy;
 
 
	console.log(e.coords.longitude);
    console.log(e.coords.latitude);
    var latitude = e.coords.longitude;
    var longitude = e.coords.latitude;
    
    //var url = "http://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng="+latitude+","+longitude;
    //var addrReq = Titanium.Network.createHTTPClient();
    
    Number.prototype.toDeg = function() {
    	return this * 180 / Math.PI;
	};
	Number.prototype.toRad = function() {
   		return this * Math.PI / 180;
	};
 
var lat1,lon1,lat2,lon2;
lat1=latitude; // The coordinates of the current location should go here somehow.
lon1=longitude; // The coordinates of the current location should go here somehow.
lat2=9.116849;
lon2=39.221569;

 

function deg2rad(deg) {
  return deg * (Math.PI/180);
};
 
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
};


//console.log('distanza ', c);
	//addrReq.open("GET",addrUrl);
	//addrReq.send(null);
    
    //
    //CREATE MAP VIEW
    //
    /*
    var mapview = Titanium.Map.createView({
        mapType: Titanium.Map.STANDARD_TYPE,
        region: {latitude: latitude, longitude: longitude, latitudeDelta:0.01, longitudeDelta:0.01},
        animate:true,
        regionFit:true,
        userLocation:true,
        annotations:[annotation]
    });
 */
   // win.add(mapview);
 
 
});


$.index.open();



