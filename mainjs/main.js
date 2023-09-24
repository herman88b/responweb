function scrollHeader (){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

var swiperPopular = new Swiper(".popular_container", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  
  

//value accordion
  const accordionItems = document.querySelectorAll('.value_accordion-item')

  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value_accordion-header')

    accordionHeader.addEventListener ('click', ()=>{
const openItem = document.querySelector('accordion-open')

      toggleItem(item)

      if(openItem && openItem!== item){
        toggleItem(openItem)
      }
    })
  })

  const toggleItem = (item)=>{
    const accordionContent = item.querySelector('.value_accordion-content')

    if(item.classList.contains('accordion-open')){
      accordionContent.removeAttribute('style')
      item.classList.remove('accordion-open')
    }else{
      accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
    }

    
  };

  const sections = document.querySelectorAll('section[id]')

  function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
    })
  }

  window.addEventListener('scroll', scrollActive)



function scrollUp (){

  const scrollUp = document.getElementById('scroll-up');
  
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
  window.addEventListener('scroll', scrollUp)




  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconTheme = 'bx-sun'

  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  const getCurrentTheme =() => document.body.classList.contains(darkTheme) ?  'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

  if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ?  'add' : 'remove'](iconTheme)
  }

  themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-Icon', getCurrentIcon())
  })

  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,

  })
  sr.reveal('.home__title, .popular_container, .subcribe_container, .footer_container') 
  sr.reveal('.home__description, .footer_info', {delay: 500})
  sr.reveal('.home__search', {delay: 600})
  sr.reveal('.home__value', {delay: 700})
  sr.reveal('.home__images', {delay: 800, origin:'bottom'})
  sr.reveal('.logos__img', {interval: 100})
  sr.reveal('.value_images, .contact_content', {origin:'left'})
  sr.reveal('.value_content', {origin: 'right'})