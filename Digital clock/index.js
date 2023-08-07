
/*function show(){
    
    let todaydate=new Date();
    console.log(todaydate);
    
    let hours=todaydate.getHours()
    console.log(hours);
    
    let min=todaydate.getMinutes();
    console.log(min);
    
    let sec=todaydate.getSeconds();
    console.log(sec);
    
    let para=document.querySelector("p");
    para.innerHTML= `${hours}:${min}:${sec}`;
    
}
*/

function showme(){
setInterval(function show(){
    
    let todaydate=new Date();
   // console.log(todaydate);
    
    let hours=todaydate.getHours()
    //console.log(hours);
    
    let min=todaydate.getMinutes();
    //console.log(min);
    
    let sec=todaydate.getSeconds();
   // console.log(sec);
    
    let para=document.querySelector("p");
    para.innerHTML= `${hours}:${min}:${sec}`;
    
},1000);

}