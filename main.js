

let pro = prompt ("Welcome");
let UserName = prompt("What is your name?");
let con = confirm("Hey," + UserName + "! Wanna pick some snowberries???");
if (con == false){
    let al = alert("You sit on throne of lies");
}
else{
    console.log("Great! Let's go!");
}
if (5 != 4){
    console.log("5 is not equal to 4");
   }
   let m = 45;
   if ( m < 45 || m >= 46 ){
      console.log("will it print?");
   }
//let m = 45;
let itRainsInDC = true;
let acolor = "red";
if( m != 45 || acolor == "red" ){
  console.log("evenings are for JS");
  if(itRainsInDC)
  {
      console.log("pack a raincoat");
  }
  console.log("pack sunscreen");
  if ((3>(3-1))&&(acolor != "silver") && (acolor == "re" + "d") ){
      console.log("did we make it ?");
  }
}
let UserName1 = prompt("what is Your Name?");
let nameConfirm = ("Just Checking, is " + UserName1 + "Your Real Name ?");
if(nameConfirm){
    alert("Welcome to My Page, " + UserName1 + "!");
}else{
    UserName1 = prompt("Okey, What is Your Name?");
}
console.log("The User's Name Is " + UserName1 + ".")