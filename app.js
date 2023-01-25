// alert("hi") // 경고 표시
// const a = 6;  // 변수생성 const는 변수값 안바뀜
// let b = 2; // 변수생성 let은 새로운 것을 생성할때만 사용 바뀔수도 있는 변수

// let my_name = "Hyeon" //변수에 공백이 필요하다면 대문자로 표시

// console.log(a + b); // 콘솔에 이값 출력
// console.log(a * b);
// console.log(a / b);
// console.log("hello" + my_name);


// my_name = "Hyeon Dong" // let안사용해도 업데이트 가능

// console.log("your name is" + my_name);

//불린 
// const amifat = true;
// const amifat = null; //널값
// let something; //정의되지않음
// console.log(something);
// console.log(amifat);

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

//array
//const daysofweek = ["mon", "tue", "wed", "thu", "fri", "sat"]
// get item from array
//add one more day to the array
//daysofweek.push("sun")
//console.log(daysofweek);

// const nonsense = [1, 2, "hello", null, true, false, undefined]
//console.log(daysofweek[4]);

// const playerName = "Hyeon";
// const playerpoints = 121212;
// const playerHandsome = true;
// const playerFat = "little bit";

// const player = ["Hyeon", 121212, true, "little bit"];


// const player = {
//     name: "Hyeon",
//     points: 10,
//     fat: true,
// }
//player.fat = false;

//player.lastname = "potato";
// console.log(player);
// player.points = player.points + 20;
// console.log(player);

//괄호 안 값이 반복
// function sayhello(nameofperson, age) {
//     console.log("hello my name is " +nameofperson + " i am "+age + "years old");
// }
// //console.log("hello");
// sayhello("Hyeon",25);



// function plus(a, b){
//     console.log(a+b);
// }
// plus(8, 60);
// function divide(a,b){
//     console.log(a /b)
// }
// divide(20, 5);


// const player = {
//     name: "hyeon",
//     sayhello: function(othername){
//         console.log("hello " + othername);
//     }
// }
// console.log(player.name); // player안에 있는 name값 출력
// player.sayhello("lynn"); // player안의 sayhello실행시 콘솔로 hello출력

// const calculator = {
//     plus: function(a, b) {
//         alert(a + b);
//     },
//     minus: function(a,b) {
//         alert(a-b);

//     },
//     divide: function(a,b) {
//         alert(a/b);
//     },
//     depowered: function(a,b){
//         alert(a**b);
//     }
// }
// console.log(calculator.plus(3,2));


// const age = 96;
// function calculateKrage(ageofforeign){ // 2단계 에이지오브 포린에 96할당
//     return ageofforeign + 2; // 3단계 값 실행후 결과값 98리턴
// }
// const krage = calculateKrage(age); //1단계 칼큘레이트 실행시 age값이 96임을 할당받음 // 4단계 등호기준 오른쪽 문장이 98이라는 값 저장
// console.log(krage); // 5단계 값 98출력

//const age = parseInt(prompt("how old are you"));// 입력 받는 장치 항상 문자열
//isNaN(age);
//console.log(isNaN(age));
// if(isNaN(age)="true"){
//     if(age >= 19){
//         console.log(age + "살이면 술을 마실수 있는 나이네요!");
//     }else{
//         console.log(age + "살이면 아직 술을 마시면 안됩니다!");
//     }
// }else{
//     console.log("숫자로 입력해주세요!");
//     prompt("숫자를 다시 입력해주세요")
// }

// if(isNaN(age)){
//     console.log("숫자로 입력해주세요");

// }else if(age<18){
//     console.log("너무 어리세요!");
// }else if(age>=18 && age <=50){ // && and ||or를 뜻하는 문자
//     console.log("술 드실수 있는 나이시네요")

// }else if(age === 100){
//     console.log("아무거나 다하세용"); 
// }
// else{
//     console.log("술드실수 없습니다!");
// }
//parseInt("15") //문자열을 숫자형으로

//document =우리의 웹사이트


// const title = document.getElementById("something");
// title.innerText = "got you!"


// console.log(title.id);
// console.log(title.className);


//const hellos = document.getElementsByClassName("hello"); //정보 가져오기
//console.log(hellos);

// const title = document.getElementsByTagName("h1"); //tag = anchor, div section, button
// console.log(title);

//const title = document.querySelector(".hello h1"); //css selector 일때 .쓰고 해결
//조건에 맞는것이 여러개라면 첫번째것만 가져옴
//console.log(title);
// const title = document.querySelectorAll(".hello h1"); //조건에 맞는 모든것 가져오기
// console.log(title);
//const title = document.querySelector("div.hello:first-child h1");
// console.dir(title);
// title.style.color = "blue"; //색상변경

//event listener

// const title = document.querySelector("div.hello:first-child h1");
// function handletitleclick() {//클릭이벤트
//     //title.style.color = "blue";
//     console.log("title was clicked");
// }
// function handlemouseenter(){
//     title.innerText="mouse is here";
//     console.log("mouse is here");
// }
// function mouseleave(){
//     title.innerText=("mouse left here");
//     console.log("mouse left here");
// }

// function Resize(){
//     document.body.style.backgroundColor = "tomato";
//     console.log("resized");
// }

// function copying(){
//     alert("copying!");
//     console.log("복사중입니다!");
// }
// function windowoffline(){
//     alert("sos no wifi");

// }
// function windowonline(){
//     alert("all good");
// }
// title.addEventListener("click",handletitleclick) //클릭이벤트를 받고 만약 받으면 handle이 발동되길 원함
// title.addEventListener("mouseenter",handlemouseenter) //마우스가 그위에 올라가면
// //title.onmouseenter = handlemouseenter; 위랑 똑같음
// title.addEventListener("mouseleave",mouseleave) //따옴표안은 존재하는 이벤트 변수로 생성
// window.addEventListener("Resize", Resize);
// window.addEventListener("copy", copying);

// window.addEventListener("offline", windowoffline)
// window.addEventListener("online", windowonline)

const h1 = document.querySelector("div.hello:first-child h1");

function handletitleclick() {
    const currentcolor = h1.style.color;
    let newcolor; //빈변수
    if(currentcolor === "blue") {
        newcolor = "tomato";
    }else{
        newcolor = "blue";
    }
    console.log(h1.style.color);
    h1.style.color = newcolor;
}
h1.addEventListener("click", handletitleclick);
