let sortNumber = function(number){
    number.sort(function(a, b){
        if(a === b){
            return 0;
        }
        return a < b ? -1: 1;
    });
};

let number = [19, 3, 8, 1, 24, 21];
sortNumber(number);
console.log(number);