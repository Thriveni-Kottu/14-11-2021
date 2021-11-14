function first()
{
    document.getElementById("slideimage").src="imgs/image3.jpg";
  }
function second()
  {
      document.getElementById("slideimage").src="imgs/image4.jpg";
    } 
function third()
  {
      document.getElementById("slideimage").src="imgs/image5.png";
    }     
    setInterval(first,2000);
    setInterval(second,4000); 
    setInterval(third,6000);  
    
