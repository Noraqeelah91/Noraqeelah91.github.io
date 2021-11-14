let refreshNow = document.getElementById("refreshNowBtn")
refreshNow.addEventListener("click", function () {
    GetBooking()
})

function GetBooking() {
    let url = 'https://api.sheety.co/2e256a675636ad773edb98d656753d18/bookingKpt/bookings';
    fetch(url, {cache: "no-store"}) 
        .then((response) => response.json())
        .then(json => {
           let bookingNameList = document.getElementById("bookingNameList")

           //clear the table/list
           for(let k = bookingNameList.rows.length - 1; k > 0; k--){
               bookingNameList.deleteRow(k)
           }
           //load the new data/list
           for(let i = 0; i < json.bookings.length; i++){
               let gCheckIn = json.bookings[i].checkIn
               let gCheckOut = json.bookings[i].checkOut
               let gNoOfRooms = json.bookings[i].noOfRooms 
               let gAdults = json.bookings[i].adults
               let gChildren = json.bookings[i].children
               let gName = json.bookings[i].name


               let row = bookingNameList.insertRow(bookingNameList.rows.length)
               row.insertCell(0).innerHTML = gCheckIn
               row.insertCell(1).innerHTML = gCheckOut
               row.insertCell(2).innerHTML = gNoOfRooms
               row.insertCell(3).innerHTML = gAdults
               row.insertCell(4).innerHTML = gChildren
               row.insertCell(5).innerHTML = gName
           }
        });
}
