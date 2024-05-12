"use strict";

window.onload = function() {
    const submitbtn = document.getElementById("est-tot-cost");
    submitbtn.onclick = estimateTotalCost;
};

function estimateTotalCost(){
    // Name
    let fullName = document.getElementById("full-name").value;
    let customerName = document.getElementById("customer-name");
    customerName.innerHTML=fullName;


    // Number of days
    let numberOfDays = document.getElementById("days");
    let rentalDays = Number(numberOfDays.value);

    let carRental = document.getElementById("car-rental");
    let baseRental = 29.99 * rentalDays
    carRental.innerHTML = baseRental;


    // Optional Rent
    let optionalRent = 0;

    let elecToll = document.getElementById("et");
    if (elecToll.checked) {
        optionalRent += (3.95 * rentalDays);
    }

    let gps = document.getElementById("gps");
    if (gps.checked) {
        optionalRent += (2.95 * rentalDays);
    }

    let roadAssist = document.getElementById("ra");
    if (roadAssist.checked) {
        optionalRent += (2.95 * rentalDays);
    }

    let optionalRentPayout = document.getElementById("options");
    optionalRentPayout.innerHTML = optionalRent;


    // Under 25 surcharge
    let surcharge = 0;
    let under25 = document.querySelector("input[name='under25']:checked");
    if (under25.value == 'Yes') {
        surcharge = baseRental * 0.3
    }

    let surge = document.getElementById("un25sur");
    surge.innerHTML = surcharge.toFixed(2);

    let totalRent = document.getElementById("total-due");
    totalRent.innerHTML = baseRental + optionalRent + surcharge;



}

