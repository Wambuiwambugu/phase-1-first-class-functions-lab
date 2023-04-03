// Code your solution in this file!
 let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
 const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
 }
 const returnLastTwoDrivers = function(){
    return drivers.slice(2,4);
 }
 let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
 for (i = 0; i < selectingDrivers.length; i++) {
    selectingDrivers[i]();
 }
 function createFareMultiplier(int){
    return (fare) => fare * int;
 }
 function fareDoubler(){
    const fareDoubler = createFareMultiplier(2)(10);
        return fareDoubler;
 }
 function fareTripler() {
    const fareTripler = createFareMultiplier(3)(12);
    return fareTripler;
 }
 function selectDifferentDrivers(drivers,fn){
    
    if (fn = returnFirstTwoDrivers()) {
      drivers;
        return returnFirstTwoDrivers();
    }
    else if (fn = returnLastTwoDrivers()) {
        return drivers.slice(2,4);
    }
 }