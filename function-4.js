
//백분율

function per(total,number){
  let result;
  let percent = ((number/total)*100).toFixed(2);

  if(percent > 50) {
    result = "50% 이상입니다";
  }else if(percent > 10){
    result = "10% 이상입니다";
  }else{
    result = "10% 이하입니다"
  }
  return result + "값 :"+ percent+"%";
}  // console.log(per(15,1));



let password = "1234";
function login(input){
  
  if(input === password){
    console.log("로그인 되었습니다");
  }else{
    console.log("비밀번호가 다릅니다");
  }
}
//login("1234");



const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output: process.stdout
});

rl.question("비밀번호를 입력하세요: ",(inputPassword) => {
  if(inputPassword === password){
    console.log("비밀번호가 일치합니다");
    rl.question("[1] 비밀번호 변경, [2] 취소 :",ans=>{
      //비밀번호 변경*********
      if(ans==="1"){
        rl.question("변경할 비밀번호를 입력하세요: ",newPassword =>{
          password = newPassword;
          console.log("비밀번호가 변경되었습니다.\n변경된 비밀번호는: "+password+" 입니다");
          rl.close();
        });
        //취소*********
      }else{
        console.log("취소되었습니다");
        rl.close();
      }
    });
  }else if(inputPassword !== password){
    console.log("비밀번호가 다릅니다.");
    rl.close();
  }
 // rl.close();
})








