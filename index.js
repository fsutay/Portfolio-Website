AOS.init();

AOS.init({
 
  offset: 120, 
  delay: 0, 
  duration: 1000,
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom',

});
window.onscroll=function(){
  if (document.body.scrollTop>0 || document.documentElement.scrollTop>0 ){
    document.getElementById("navbar").classList.add("scrolled")
  }
  else{
    document.getElementById("navbar").classList.remove("scrolled")
  }
}

