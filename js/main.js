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

