//javascript.js
//set map options
var myLatLng = { lat: 12.9092  , lng: 77.5666 };
var c1={ lat:  12.903936075306595  ,  lng: 77.57334423075413 };
var c2={ lat:  12.906267430155693  ,  lng: 77.58448893218283 };


var c3={ lat:   12.921964959678385  ,  lng: 77.58479742025614 };

var c4={ lat:   12.934966217212586  ,  lng: 77.57435164085942 };




var x=navigator.geolocation;


x.getCurrentPosition(success  , failure);

function success(position){

    var myLat=position.coords.latitude;
    var myLong=position.coords.longitude;

    var coords= new google.maps.LatLng(myLat,myLong);

    var marker=new google.maps.Marker({
        map:  map ,
        position: coords
    });
}
function failure(){


}
var mapOptions = {
    center: myLatLng,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};

//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);


//define calcRoute function
function calcRoute() {
    //create request
    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.METRIC
    }

    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time
           
           
             // min and max included 
                const rndInt= Math.floor(Math.random() * (6 - 3 + 1) + 3);
              const rnd2=Math.floor(Math.random() * 7);
              
              
           
           
           
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Driving time  : " + result.routes[0].legs[0].duration.text +  ".<br />Total number of Ports available  : " +  rndInt +   ".<br />Number of spare ports  : " + Math.floor(Math.random() * 3) + ".<br />Number of vehicles in queue  : " + rnd2 +  ".<br />Estimated waiting time  : " + (0.5*rnd2)+" Hours" + ".</div>";



            // new addition
            
            

            const book = document.querySelector('#book');
            book.innerHTML = "<h1>Book a  Slot for Charging your vehicle</h1>";

            const schdule = document.querySelector('#schdule');
            schdule.innerHTML = "<div class='alert-info'> Booking Slot At: " + document.getElementById("to").value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Driving time  : " + result.routes[0].legs[0].duration.text +    ".</div>";

             
            const date = document.querySelector('#date');
            date.style.display = "block";


              const time = document.querySelector('#time');
            time.innerHTML = "<h2>Select time of booking:</h2> <br /><input type='time' id='time'> " + ".</div>";

            const yes = document.querySelector('#yes');
            yes.innerHTML = "<button type='button' class='btn btn-primary btn-lg' id='yes' onclick='myFunction()'>Schdule now </button> " + ".</div>";
           
            
            //display route 
            directionsDisplay.setDirections(result);
            
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //show error message
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Select a valid location.</div>";


           



            

           
            
        }
    });

}
function myFunction() {
    alert("Your slot has been booked successfully!");

    directionsDisplay.setDirections({ routes: [] });
    //center map in London
    map.setCenter(myLatLng);
  }

const defaultBounds = {
    north:  myLatLng.lat + 3.0,
    south:  myLatLng.lat - 3.0,
    east:  myLatLng.lng + 3.0,
    west: myLatLng.lng - 3.0,
  };

//create autocomplete objects for all inputs
var options = {
    bounds: defaultBounds,
    componentRestrictions: { country: "ind" },
    strictBounds: false,
    types: ["establishment"]
}

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);




const image ={
url :"https://cdn-icons-png.flaticon.com/128/2214/2214024.png",
scaledSize: new google.maps.Size(50, 52),
};







var mark=new google.maps.Marker({
    position: c1,
    map,
    title: "Tata Power Charging Station, No 71/1A & 71/7, Jaraganahalli Village, Kanakapura Rd, opp. BLOCK-F, Bengaluru, Karnataka 560078",
    icon:image,
  });


  mark.addListener('click', () =>{
    input2.value="Tata Power Charging Station, No 71/1A & 71/7, Jaraganahalli Village, Kanakapura Rd, opp. BLOCK-F, Bengaluru, Karnataka 560078";
  })



  var mark2=new google.maps.Marker({
    position: c2,
    map,
    title: "6th Phase, 742, Outer Ring Rd, JP Nagar, KR Layout, JP Nagar Phase 6, J. P. Nagar, Bengaluru, Karnataka 560078",
    icon:image,
  });


  mark2.addListener('click', () =>{
    input2.value="6th Phase, 742, Outer Ring Rd, JP Nagar, KR Layout, JP Nagar Phase 6, J. P. Nagar, Bengaluru, Karnataka 560078";
  })

  var mark3=new google.maps.Marker({
    position: c3,
    map,
    title: "#64, 10th Main Rd, 4th Block, 5th Block, Jayanagar, Bengaluru, Karnataka 560041",
    icon:image,
  });


  mark3.addListener('click', () =>{
    input2.value="#64, 10th Main Rd, 4th Block, 5th Block, Jayanagar, Bengaluru, Karnataka 560041";
  })

  var mark4=new google.maps.Marker({
    position: c4,
    map,
    title: "WHMF+XP, Tata Silk Farm, Jayanagar, Bengaluru, Karnataka 560070",
    icon:image,
  });


  mark4.addListener('click', () =>{
    input2.value="WHMF+XP, Tata Silk Farm, Jayanagar, Bengaluru, Karnataka 560070";
  })



 
 
  