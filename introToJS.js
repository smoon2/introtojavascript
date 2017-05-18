function display(){
    document.write("Introduction to JavaScript");
}



function fizzBuzz(){
    for(var i = 0; i <= 100; i++ ){
        //if(i % 3 == 0){
        //    console.log("Fizz");
        //}
        //else if(i % 5){
        //    console.log("Buzz");
        //}
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
    }
    
    
}

function countBs(str){
    var bCount = 0;
    for(var i =0; i <= str.length; i++){
        if (str.charAt(i) === "B"){
            bCount++;
        }
        
    }
    return(bCount);
}

function countChar(str, ch){
    var chCount = 0;
    for(var i = 0; i<=str.length; i++){
        if(str.charAt(i) === ch){
            chCount++;
        }
    }
    return(chCount);
}