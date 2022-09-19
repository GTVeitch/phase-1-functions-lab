// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    if(street >= 42){
        return street - 42;
    }
    else if(street < 42) {
        return 42 - street;
    }
}

function distanceFromHqInFeet(someValue) {
        return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start, destination) {
    if((start - destination) >= 0){
        return (start - destination)*264;
    }

    else if((destination - start) >= 0){
        return (destination - start)*264;
    }
}

function calculatesFarePrice(start, destination) {
    let total = distanceTravelledInFeet(start, destination) - 400;

    if(total <= 0) {
        return 0
    }

    if (total < 1600){
        return 0.02*total
    }

    if (total >= 1600 && total < 2100){
        return 25
    }

    if (total >= 2100) {
        return "cannot travel that far"
    }
}