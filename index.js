let currentslide=0;

function showslide()
{
  const wrapper = document.querySelector('.slider-wrapper')
  const slidewidth=document.querySelector('.slider-image').clientWidth;
  wrapper.style.transform=`translateX(${-currentslide*slidewidth}px)`;
}

function prevslide(){
    if(currentslide > 0)
    {
        currentslide--;
    }
    else{
        currentslide=1;
    }
    showslide();
}
function nextslide(){
    if(currentslide <1)
    {
        currentslide++;
    }
    else{
        currentslide=0;
    }
    showslide();
}
