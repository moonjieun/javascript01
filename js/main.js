document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function(){
    document.getElementsByClassName('list-group')[0].classList.toggle('show');
  });

document.getElementById('login-btn').addEventListener('click',function(){
  document.querySelector('.black-bg').classList.toggle('show-modal')
});

document.getElementById('close').addEventListener('click',function(){
  document.querySelector('.black-bg').classList.toggle('show-modal')
});



document.getElementById('send').addEventListener('click',function(){
  
  if(document.getElementById('email').value == ''){
  alert('아이디를 입력하시오.');
  }
  var emailValue = document.getElementById('email').value ;
 
  if (/\S+@\S+\.\S+/.test(emailValue) == false ){
    alert('이메일형식아님')
    e.preventDefault();
  }

  if(document.getElementById('pw').value == ''){
    alert('비밀번호를 입력하시오.');
  }
  if(document.getElementById('pw').value.length < 8){
    alert('비밀번호가 짧습니다.');
  }
});

$('form').on('submit',function(){
  var passward = document.getElementById('pw').value;
  if(/[A-Z]/.test(passward) == false ){
    alert('대문자를 입력하시오')
  }
});

var num = 5;

setInterval(function(){
  num -=1;
   if(num >= 0){
    document.querySelector('#timer').innerHTML = num;
   }
   if(num == 0){
$('.alert').hide();
   }
},1000);

