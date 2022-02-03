// Problem 1


    // const nums = [];
    // for(i = 1; i < 256; i++){
    //     nums.push(i);
    // }
    // console.log("Problem 1: " + nums);


// Problem 2


    // var x = 0;
    // for(i = 1; i <= 1000; i++){
    //     if((i % 2) == 0){
    //         x += i;
    //     }
    // }
    // console.log("Problem 2: " + x);


// Problem 3


    // var x = 0;
    // for(i = 1; i <= 5000; i++){
    //     if((i % 2) == 1){
    //         x += i;
    //     }
    // }
    // console.log("Problem 3: " + x);


// Problem 4


    // const array = [-5, 2, 5, 12];
    // var x = 0;
    // function arrayAdd(n){
    //     x = 0;
    //     for(i = 0; i < n.length; i++){
    //         x += n[i];
    //     }
    //     return x;
    // }
    // console.log("Problem 4: " + arrayAdd(array));


// Problem 5


    // const n = [-3, 3, 5, 7];
    // var x = 0;
    // for(i = 0; i < n.length; i++){
    //     if(n[i] > x){
    //         x = n[i];
    //     }
    // }
    // console.log("Problem 5: " + x);


// Problem 6


    // const n = [1, 3, 5, 7, 20];
    // var x = 0;
    // function findAverage(myarray){
    //     for(i = 0; i < myarray.length; i++){
    //         x += myarray[i];
    //     }
    //     x /= myarray.length;
    //     return x;
    // }
    // console.log("Problem 6: " + findAverage(n));


// Problem 7


    // const n = [];
    // for(i = 0; i <= 50; i++){
    //     if((i % 2) == 1){
    //         n.push(i);
    //     }
    // }
    // console.log("Problem 7: " + n);


// Problem 8


    // const n = [1, 3, 5, 7];
    // var x = 0;
    // function greaterThanY(myarray, y){
    //     for(i = 0; i < myarray.length; i++){
    //         if(myarray[i] > y){
    //             x += 1;
    //         }
    //     }
    //     return x;
    // }
    // console.log("Problem 8: " + greaterThanY(n, 3));


// Problem 9


    // const n = [1, 5, 10, -2];
    // function squares(myarray){
    //     for(i = 0; i < myarray.length; i++){
    //         myarray[i] *= myarray[i];
    //     }
    //     return(myarray);
    // }
    // console.log("Problem 9: " + squares(n));


// Problem 10


    // const n = [1, 5, 10, -2];
    // function negatives(myarray){
    //     for(i = 0; i < myarray.length; i++){
    //         if(myarray[i] < 0){
    //             myarray[i] = 0;
    //         }
    //     }
    //     return(myarray);
    // }
    // console.log("Problem 10: " + negatives(n));


// Problem 11


    // const n = [1, 5, 10, -2];
    // const m = [];
    // function maxMinAvg(myarray){
    //     var max = 0;
    //     var min = 100;
    //     var avg = 0;
    //     for(i = 0; i < myarray.length; i++){
    //         if(myarray[i] > max){
    //             max = myarray[i];
    //         }
    //         if(myarray[i] < min){
    //             min = myarray[i];
    //         }
    //         avg += myarray[i];
    //     }
    //     avg /= myarray.length;
    //     m.push(max);
    //     m.push(min);
    //     m.push(avg);
    //     return(m);
    // }
    // console.log("Problem 11: " + maxMinAvg(n));


// Problem 12


    // const n = [1, 5, 10, -2];
    // function swapValues(myarray){
    //     var x = myarray[0];
    //     var y = myarray[myarray.length - 1];
    //     myarray[0] = y;
    //     myarray[myarray.length - 1] = x;
    //     return myarray;
    // }
    // console.log("Problem 12: " + swapValues(n));


// Problem 13


    // const n = [-1, -3, 2];
    // function numToStr(myarray){
    //     for(i = 0; i < myarray.length; i++){
    //         if(myarray[i] < 0){
    //             myarray[i] = "Jessup";
    //         }
    //     }
    //     return myarray;
    // }
    // console.log("Problem 13: " + numToStr(n));

    function add(x, y) {
        return x + y
    }

    console.log(add(2, 3))