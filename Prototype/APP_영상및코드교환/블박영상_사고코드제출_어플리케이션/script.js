const submit_btn = document.querySelector('.real_inf_submit_btn');
//제출 버튼 dom html 선택//
const popup = document.querySelector('#popup');
//팝업 dom html 선택//
const alert = document.querySelector('.alert');
//알람 dom html 선택//
const submit_btn_submit = document.querySelector('.submit_btn_submit');
//제출안의 제출 버튼 dom html 선택//
const submit_btn_cancle = document.querySelector('.submit_btn_cancle');
//제출안의 취소 버튼 dom html 선택//

submit_btn.addEventListener('click', e => {
  popup.style.display = 'flex';
    
  const output_me = document.querySelector('.output_me');
  const output_you = document.querySelector('.output_you');
  const output_code = document.querySelector('.ouput_code'); // 'ouput_code' 로 수정했습니다.
  const output_place = document.querySelector('.output_place');

  const $input_me = document.querySelector('#input_me').value;
  const $input_you = document.querySelector('#input_you').value;
  const $input_code = document.querySelector('#input_code').value;
  const $input_place = document.querySelector('#input_place').value;

  output_me.innerHTML = $input_me;
  output_you.innerHTML = $input_you;
  output_code.innerHTML = $input_code;
  output_place.innerHTML = $input_place;
});
//제출 버튼에 이벤트가 발생했을 때 입력한 정보를 저장//

submit_btn_cancle.addEventListener('click', e => {
  popup.style.display = 'none';
  alert.style.display = 'none';
});
//만약 취소버튼을 눌렀다면 css를 변경//

submit_btn_submit.addEventListener('click', e => {
    alert.style.display = 'flex';

  });
//제출 버튼을 눌렀을 때 알림 출력//
