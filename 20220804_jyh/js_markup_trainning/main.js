//root 생성
const root = document.createElement('div');
document.body.appendChild(root);
root.setAttribute('id','root');
//root.setAttribute('style','width:100vw;height:100vh;overflow-x:auto');
root.style.width="100vw";
root.style.height='100vh';
root.style.overflowX='auto';

//배경,사이즈 지정 함수 (요소,배경색,넓이,높이)
function elementStyle(element,bgColor,width,height){
  element.style.backgroundColor=`${bgColor}`;
  element.style.width=`${width}`;
  element.style.height=`${height}`;
}

//flex함수 
function flexSet(element,direction,justify,align){
  element.style.display="flex";
  element.style.flexDirection=`${direction}`
  element.style.justifyContent=`${justify}`;
  element.style.alignItems=`${align}`;
}

//박스 생성하는 함수! (부모요소,태그이름,갯수)===
function createBox(parent,tag,count){
  for(let i=1;i<=count;i++){ //count 길이 만큼 반복!
    //newBox ->새로만들 태그 저장
    let newBox = document.createElement(`${tag}`);
    //parent->newBox생성
    parent.appendChild(newBox);
  }
}
//div 박스 두개 생성
createBox(root,'div','2');

//main, content로 id지정
root.childNodes[0].id='main';
root.childNodes[1].id='content';

const main = document.getElementById('main');
const content = document.getElementById('content');

//main > 스타일 지정
elementStyle(main,'#E8F1D5','100%','40%');
main.style.marginTop="10%";

//content > 스타일 지정
elementStyle(content,'white','100%','50%');
content.style.fontSize="1.5em";

//content >> div 생성
createBox(content,'div','1');

//content >> h1 태그로 title 입력
const title = document.createElement('h1');
title.innerHTML="hello";
content.appendChild(title);

//content >>>  p태그로 본문 입력
const text = document.createElement('p');
text.style.fontSize="0.7em";
text.innerHTML=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ad dolor quasi perferendis eaque nihil deserunt mollitia placeat, quibusdam numquam iure maxime accusamus nostrum, totam amet, repellat non corporis optio.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid in error dicta facilis quisquam quidem aliquam iusto repellendus, assumenda dolor fugit ratione perferendis voluptas! Mollitia omnis repudiandae tenetur corporis rem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ad dolor quasi perferendis eaque nihil deserunt mollitia placeat, quibusdam numquam iure maxime accusamus nostrum, totam amet, repellat non corporis optio.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid in error dicta facilis quisquam quidem aliquam iusto repellendus, assumenda dolor fugit ratione perferendis voluptas! Mollitia omnis repudiandae tenetur corporis rem.`;

//contentBox >> div >>> title, text
content.childNodes[0].append(title,text);

//textBox에 플렉스 지정;
let textBox = content.childNodes[0];
flexSet(textBox,`column`,`center`,`start`);


//main -->이미지 넣기
main.style.backgroundImage="url('dog.jpg')";
main.style.backgroundRepeat="no-repeat";
main.style.backgroundPosition="10% 10%";
main.style.backgroundSize="100% 100%";

if (window.matchMedia("all and (min-width: 700px)").matches) {
  /* 뷰포트 너비가 700 픽셀 이상 */
  root.style.padding="5%";
}if (window.matchMedia("all and (min-width: 1000px)").matches){
  /* 뷰포트 너비가 1000 픽셀 미만 */
  main.style.display="none";
  root.style.backgroundImage="url('dog.jpg')";
  root.style.backgroundRepeat="no-repeat";
  root.style.backgroundPosition="10% 10%";
  root.style.backgroundSize="100% 100%";
  
  //content 재설정
  elementStyle(content,'rgba(57,52,19,0.5)','50vw','min-content');
  content.style.color="white";
  content.style.padding="2%";
  
  //position 재설정
  root.style.position="relative";
  content.style.position="absolute";
  content.style.right="10%";
  content.style.top="20%";
  
  //flex설정
  flexSet(textBox,'row','center','start');

  text.style.borderLeft="1px solid white";
  title.style.padding="1%";
  text.style.padding="1%";
  }
  


//사이즈 바뀔때마다 새로고침
window.onresize = function(){
  document.location.reload();
};


let test = document.getElementById("root");
test.className='test';
console.log(test);

let test2 = document.getElementsByClassName("test");
console.log(test2);