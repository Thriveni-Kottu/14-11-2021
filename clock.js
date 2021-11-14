const hour =document.getElementById('hr');
const minute =document.getElementById('min');
const second =document.getElementById('sec');
setInterval(()=>
{
    let date=new Date();
    let hr=date.getHours()*30;
    let hr=date.getMinutes()*6;
    let hr=date.getSeconds()*6;
    hour.style.transform='rotatez(${(hr)+(min/12)deg}';
    minute.style.transform='rotatez(${min}deg)';
    second.style.transform='rotatez(${sec}deg)';
})
