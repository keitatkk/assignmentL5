let num=0;
for(let i=1;i<51;i++){
  num=num+1
  if (num%10==0){
    str='「今' + num + '回ループしました。」';
      console.log(str);
  }
  if (num%4==0){
    str='「４で割れる数です。[' + num +']';
    console.log(str);
  }
}
alert(num + '回カウントが終わりました。')
