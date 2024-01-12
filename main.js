document.write("63. to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three."+"<br>");
function test63(str){
    if(str.length>=3){
        if(str.length%2!==0){
            var m=(str.length+1)/2;
            return str.slice(m-2,m+1);
        }
        return str;
    }
}
document.write("The string :sanjeev , ans :"+test63("sanjeev")+"<br><br>");