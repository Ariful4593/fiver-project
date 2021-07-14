
console.log('Hellow world')
var email = document.getElementById('email');
var main = document.getElementById('isdi');
var from1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 =document.getElementById('form3');
//for choise 1
var choise1 = document.getElementById('choise1');
var sb1     = document.getElementById('sb1');
//for choise 2
var choise2 =  document.getElementById('choise2');
var sb2     =  document.getElementById('sb2');
//for choise 3
var choise3 =  document.getElementById('choise3');
var sb3     =  document.getElementById('sb3');
var ok = document.getElementById('dat');
var catagorey = document.getElementById('catagorey');
var check = "";
var count = 1;
function startMe(){
  nextform();

}
function myStyle()
{
    email.style.borderTopColor="transparent";
    email.style.borderRightColor="transparent";
    email.style.borderLeftColor="transparent";
}
function nextform()
{
   switch (count) {
      
           case 1:
           main.style.visibility="hidden";
           from1.style.visibility="visible";
           form2.style.visibility="hidden";
           form3.style.visibility="hidden";
           break;
           case 2:
            main.style.visibility="hidden";
            from1.style.visibility="hidden";
            form2.style.visibility="visible";
            form3.style.visibility="hidden";
              
           break;
           case 3:
           main.style.visibility="hidden";
           from1.style.visibility="hidden";
           form2.style.visibility="hidden";
           form3.style.visibility="visible";
           break;
           case 4:
           
           break;
           case 5:
           
           break;
           case 6:
           
           break;
           case 7:
           
           break;
           case 8:
           
           break;
           case 9:
           
           break;
           case 10:
           
           break;
           
           
           default:
           break;
   }





      count++;
      console.log(count);
}
function previousform()
{
      count--;
      console.log(count);
}
//form 3 choise 1
function show()
{
    sb1.style.width="30%";
    sb1.style.marginLeft="-2em";
    sb1.innerHTML="Key  A";
    choise1.style.backgroundColor="rgba(255,255,255,.3)";
    
}
function hide()
{
  sb1.style.width="10%";
  sb1.style.marginLeft="-.1em";
  sb1.innerHTML="A";
  choise1.style.backgroundColor="rgba(255,255,255,.2)";
  ok.style.visibility="hidden";
}
//for choise2
function show1()
{
    sb2.style.width="30%";
    sb2.style.marginLeft="-2em";
    sb2.innerHTML="Key  B";
    choise2.style.backgroundColor="rgba(255,255,255,.3)";
    
}
function hide1()
{
  sb2.style.width="10%";
  sb2.style.marginLeft="-.1em";
  sb2.innerHTML="A";
  choise2.style.backgroundColor="rgba(255,255,255,.2)";
  ok.style.visibility="hidden";
}
//FOR CHOISE 3
function show2()
{
    sb3.style.width="30%";
    sb3.style.marginLeft="-2em";
    sb3.innerHTML="Key  C";
    choise3.style.backgroundColor="rgba(255,255,255,.3)";
    
}
function hide2()
{
  sb3.style.width="10%";
  sb3.style.marginLeft="-.1em";
  sb3.innerHTML="C";
  choise3.style.backgroundColor="rgba(255,255,255,.2)";
}
//.............
function selectChoise(ch){
var choise =ch;
check=ch;
ok.style.visibility="visible";
console.log(choise);
      if(ch=='O')
      {
        catagorey.style.visibility="visible";
        catagorey.style.color="white";
        catagorey.style.border.color="transparent";
        choise3.style.color="transparent";
        sb3.style.visibility="hidden";
      }

}
function getChoise()
{
  console.log(check);
  
}
