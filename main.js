const navbar = $('ul');
const colapse = $('.colapse');
colapse.on('click',()=>{
    var ulValue = navbar.attr('data-visible');
    if(ulValue === 'false'){
        navbar.css('transform','translateX(0%)')
        navbar.attr('data-visible','true');
        colapse.attr('aria-expanded','true');
        colapse.css('background-image','url(assets/images/icon-menu-close.svg)');
        navbar.css('box-shadow',' 0 0 0 200vmax #00000050')
    }
    else{
        navbar.css('transform','translateX(100%)')
        navbar.attr('data-visible','false'); 
        colapse.attr('aria-expanded','false');
        colapse.css('background-image','url(assets/images/icon-menu.svg)');   
        navbar.css('box-shadow','none')
    }
  
})
