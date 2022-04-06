'use strict'

//Make navbar transparent when it is on the top
//navbar를 투명하게
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight : ${navbarHeight}`);
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
    // classList.add -> 클래스 추가
  }else{
    navbar.classList.remove('navbar--dark');
    // classList.remove -> 클래스 삭제
  }
});


//Handle scrolling when tapping on the navbar menu
//메뉴 클릭시 원하는 곳으로 이동
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link==null){
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// ------
// // Navbar toggle button for small screen
// const navbarToggleBtn = document.querySelector('.navbar_toggle-btn');
// navbarToggleBtn.addEventListener('click', () => {
//   navbarMenu.classList.toggle('open');
// });
// ------

//Handle click on "contact me" button home
//contact Me 넘어가기
const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

/*
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link==null){
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView( {behavior: 'smooth'});
});

const homeContactBtn = document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', () => {
  const scrollTo = document.querySelector('#contact');
  scrollTo.scrollIntoView( {behavior: 'smooth'});
});
*/

//Make home slowly fade to transparent as the windows scrolls down
//홈이 내려갈수록 투명해지기
const home = document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity= 1 - window.scrollY / homeHeight;
});

// Show "arrow-up" button when scrolling down
// scroll에 따른 화살표 추가
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight/2) {
    arrowUp.classList.add('visible');
  }else{
    arrowUp.classList.remove('visible');
  }
});

//Handle click on the "arrow up" button
//화살표 누르면 홈으로 돌아가기
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});


// Projects
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (event) => {
  const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if(filter==null){
    return;
  }

  //Remove selection from the previous item select the new one
  const active = document.querySelector('.category_btn.selected');
  active.classList.remove('selected');
  const target = event.target.nodeName === 'BUTTON' ? event.target: event.target.parentNode;
  target.classList.add('selected');
  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if(filter==='*' || filter === project.dataset.type){
        project.classList.remove('invisible');
      } else{
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});


function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView( {behavior: 'smooth'});
}
