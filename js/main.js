const searchEl = document.querySelector('.search');
//document = HTML자체를 의미
//HTML안에있는 .search를 찾아서 변수 searchEl로 할당 
const searchInputEl = searchEl.querySelector('input');
//searchEl(=search)에 할당된 input요소를 변수 searchInputEl로 할당 

searchEl.addEventListener('click', function () {
    //logic
    searchInputEl.focus();
});
    //searchEl(.search)를 클릭하면 searchInputEl(input요소)를 포커스시켜줌 

searchInputEl.addEventListener('focus', function () {
    //searchInputEl(input요소)가 포커스되면 
    searchEl.classList.add('focused');
    //searchEl(.search)에 'focused'라는 class명을 추가시킨다 
    searchInputEl.setAttribute('placeholder','통합검색');
    //setAttribute > HTML속성을지정
    //searchInputEl(input요소)에 placeholder 속성을 지정
});

searchInputEl.addEventListener('blur', function () {
    //searchInputEl(input요소)가 포커스가 해제 됐을때,
    searchEl.classList.remove('focused');
    //searchEl(.search)에 'focused'라는 class명을 제거한다 
    searchInputEl.setAttribute('placeholder','');
    //setAttribute > HTML속성을지정
    //searchInputEl(input요소)에 placeholder에 빈문자를 할당함
});


const badgeEl = document.querySelector('header .badges');
//요소를 찾음

window.addEventListener('scroll', _.throttle(function (){
    //lodash에서 제공하는 기능 > throttle
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        //배지 숨기기
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //opacity 속성처럼 값을 숫자로 입력하는 속성들은,
        //전환효과(transition 속성이나 GSAP 라이브러리 등)을 통해
        //요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 남들어 낼 수 있지만,
        //display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에,
        //자연스러운 전환 효과를 적용할 수 없다.

    } else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));
// _.throttle(함수, 시간)

