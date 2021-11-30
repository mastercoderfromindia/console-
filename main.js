console.log("hi i am a console screen")

var first_name="GARVIT";
var last_name="joshi";
var name_1="I am garvit joshi";
var square_root=Math.sqrt(16);
var fruits=["apple","orange","mango","kivi","watermelon"];
var animals=["lion","elephant","tiger"]
var array_value="";
document.getElementById("decleration_of_arrys").innerHTML=fruits;
document.getElementById("lenghtarray").innerHTML=fruits.length;
document.getElementById("firstarray").innerHTML=fruits[0];
document.getElementById("kiwiarray").innerHTML=fruits[3];
document.getElementById("tigerarray").innerHTML=animals[2];
for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    array_value=array_value+fruits[i]+"<br>";
}
document.getElementById("looparray").innerHTML=array_value;

/*console.log(fruits);
console.log(square_root); 
console.log(first_name.toUpperCase());
console.log(name_1.replace("garvit","piyush"));
console.log(first_name.concat(last_name));
console.log(first_name.concat(last_name).length);*/
