//KilometerToMeter
function kilometerToMeter(kilometer) {
    var Meter = kilometer * 1000;
    return Meter;
}
    var result = kilometerToMeter(10);
    console.log(result);

//Budget Calculator
    function budgetCalculator(watch,mobail,laptop){
        watch = watch * 50;
        mobail = mobail * 100;
        laptop = laptop * 500;
        var result = watch + mobail + laptop;
        return result;
    }
    var sum = budgetCalculator(2, 3, 4);
    console.log(sum);

//Hotel Cost
    function hotelCost(days){
        var cost = 0;
        if(days <= 10){
            cost = days * 100;
        }
        else if(days <= 20){
            var firstCost = 10 * 100;
            var remaining = days - 10;
            var secondCost = remaining * 80;
            cost = firstCost + secondCost;
        }
        else{
            var firstCost = 10 * 100;
            var secondCost = 10 * 80;
            var remaining = days - 20;
            var lastCost = remaining * 50;
            cost = firstCost + secondCost + lastCost;
        }
        return cost;
    }
    var totalCost = hotelCost(21);
    console.log(totalCost);

//mega Friend
    var friendsName = ["kalam", "jabbar", "sifat", "shobuija"];
    function megaFriend(arr) {
        var long1 = arr[0];
        for (i = 0; i < arr.length; i++) {
          if (arr[i].length > long1.length) {
              long1 = arr[i];
          }
        }
        return long1;
    }
    console.log(megaFriend(friendsName));