let hTag = document.createElement('h1');
hTag.setAttribute('class',"htag");
hTag.innerHTML="hello";
document.getElementById("root").appendChild(hTag);

//메인박스 생성
let Box = document.createElement('div');
Box.setAttribute('style','background-color:tomato;height:400px')
Box.innerHTML="Box1";
document.getElementById('root').appendChild(Box);


//하단박스 생성
Box = document.createElement('footer');
Box.setAttribute('style','background-color:grey; height:200px;');
document.getElementById('root').appendChild(Box);


//박스만들기 함수  (부모 태그 지정,색상, 넓이, 높이)
function createBox(tag,id,color,width,height){
  let createBox1 = document.createElement('div');
  createBox1.setAttribute('style',`background-color:${color};width:${width};height:${height};`);
  createBox1.setAttribute('id',`${id}`);
  document.getElementById(`${tag}`).appendChild(createBox1);
}

createBox("root","footer","lightblue","inherit","200px");//부모태그, 색상, 넓이, 높이
createBox("footer","","lightyellow","50%","100%");
createBox("footer","ABC","lightcoral","50%","100%");

//속성 변경
let set = document.getElementById("footer");
document.getElementById("footer").setAttribute('display','flex');

//속성 변경 함수
function setAttr(id,attr,value){  //id값, 속성, 값
  document.getElementById(`${id}`).setAttribute(`${attr}`,`${value}`);
}


document.getElementById("ABC").style.backgroundColor="red";

//색상 변경 함수//
function bgColor(id,color){
  document.getElementById(`${id}`).style.backgroundColor=`${color}`;
}

bgColor("ABC","lightgreen");