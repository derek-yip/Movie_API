import React from 'react'

function HoverChangeImage() {
  
  var TargetFrom=document.getElementsByClassName("card");
  var TargetTo=document.getElementsByClassName("popular_slider");
  TargetFrom.addEventListener("mouseover", ()=>{
    TargetTo.style.backgroundImage=this.style.backgroundImage;
  });
  TargetTo=TargetFrom;
}

export default HoverChangeImage