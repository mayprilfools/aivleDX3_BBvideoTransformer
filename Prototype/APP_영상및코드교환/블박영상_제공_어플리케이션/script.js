const check = document.querySelector('#check_box')
//체크박스 dom을 html에서 선택//
const popup = document.querySelector('#popup')
//팝업 dom을 html에서 선택//
const submit_btn = document.querySelector('.submit_btn')
//제출버튼 dom을 html에서 선택//
const alert = document.querySelector('.alert')
//선택시 알람 dom을 html에서 선택//

check.addEventListener('change', e => {
    if(check.checked==true){
        popup.style.transform = 'translateY(0)'
    }
    else {
        popup.style.transform = 'translateY(100%)'
    }
})
//만약 체크 이벤트가 발생했을 때, 팝업 애니메이션 작동//

submit_btn.addEventListener('click', e => {
    alert.style.display = 'flex'
  });
//만약 제출 이벤트가 발생했을 때, 알람 dom css 변경//
  