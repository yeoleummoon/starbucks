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