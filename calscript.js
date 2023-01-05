const head = document.createElement("h1");
head.setAttribute("id","title");
head.textContent = "Calculator";
document.body.append(head);

const para = document.createElement("p");
para.setAttribute("id","description");
para.textContent = "Hi There✋.....You can use this calculator for calculation process";
document.body.append(para);

const div = document.createElement("div");
div.setAttribute("class","position-relative top-0 start-25");
div.setAttribute("id","mdiv");

const div1 = document.createElement("div");
div1.setAttribute("class","row justify-content-center");
div1.setAttribute("id","mdiv1");
div.appendChild(div1);


const userInput = document.createElement("input");
userInput.setAttribute("type","text");
userInput.setAttribute("placeholder","0");
userInput.setAttribute("id","result");
div1.appendChild(userInput);

const div6 = document.createElement("div");
div6.setAttribute("class","row justify-content-around");
div6.setAttribute("id","mdiv6");
div.appendChild(div6);

const btnNumclr = document.createElement("button");
btnNumclr.setAttribute("onClick","display('C')");
btnNumclr.setAttribute("onClick","clear1()");
btnNumclr.setAttribute("class","actnum");
btnNumclr.setAttribute("id","clear");
btnNumclr.textContent = 'C';
div6.appendChild(btnNumclr);

const btnbsp = document.createElement("button");
btnbsp.setAttribute("onClick","display('<-')");
btnbsp.setAttribute("onClick","oneBack()");
btnbsp.setAttribute("class","actnum");
btnbsp.textContent = '<-';
div6.appendChild(btnbsp);

const btnNumdot = document.createElement("button");
btnNumdot.setAttribute("onClick","display('.')");
btnNumdot.setAttribute("class","actnum");
btnNumdot.setAttribute("id","dot");
btnNumdot.textContent = '.';
div6.appendChild(btnNumdot);

const btnNummulti = document.createElement("button");
btnNummulti.setAttribute("onClick","display('*')");
btnNummulti.setAttribute("class","actnum rt")
btnNummulti.textContent = '*';
div6.appendChild(btnNummulti);

const div2 = document.createElement("div");
div2.setAttribute("class","row justify-content-around")
div2.setAttribute("id","mdiv2");
div.appendChild(div2);

const btnNum7 = document.createElement("button");
btnNum7.setAttribute("onClick","display('7')");
btnNum7.setAttribute("class","actnum")
btnNum7.textContent = 7;
div2.appendChild(btnNum7);

const btnNum8 = document.createElement("button");
btnNum8.setAttribute("onClick","display('8')");
btnNum8.setAttribute("class","actnum")
btnNum8.textContent = 8;
div2.appendChild(btnNum8);

const btnNum9 = document.createElement("button");
btnNum9.setAttribute("onClick","display('9')");
btnNum9.setAttribute("class","actnum")
btnNum9.textContent = 9;
div2.appendChild(btnNum9);

const btnNumdivs = document.createElement("button");
btnNumdivs.setAttribute("onClick","display('/')");
btnNumdivs.setAttribute("class","actnum rt")
btnNumdivs.textContent = '/';
div2.appendChild(btnNumdivs);

const div3 = document.createElement("div");
div3.setAttribute("class","row justify-content-around")
div3.setAttribute("id","mdiv3");
div.appendChild(div3);

const btnNum4 = document.createElement("button");
btnNum4.setAttribute("onClick","display('4')");
btnNum4.setAttribute("class","actnum")
btnNum4.textContent = 4;
div3.appendChild(btnNum4);

const btnNum5 = document.createElement("button");
btnNum5.setAttribute("onClick","display('5')");
btnNum5.setAttribute("class","actnum")
btnNum5.textContent = 5;
div3.appendChild(btnNum5);

const btnNum6 = document.createElement("button");
btnNum6.setAttribute("onClick","display('6')");
btnNum6.setAttribute("class","actnum")
btnNum6.textContent = 6;
div3.appendChild(btnNum6);

const btnsubtract = document.createElement("button");
btnsubtract.setAttribute("onClick","display('-')");
btnsubtract.setAttribute("id","subtract")
btnsubtract.setAttribute("class","actnum rt")
btnsubtract.textContent = "-";
div3.appendChild(btnsubtract);

const div4 = document.createElement("div");
div4.setAttribute("class","row justify-content-around")
div4.setAttribute("id","mdiv4");
div.appendChild(div4);

const btnNum1 = document.createElement("button");
btnNum1.setAttribute("onClick","display('1')");
btnNum1.setAttribute("class","actnum")
btnNum1.textContent = 1;
div4.appendChild(btnNum1);

const btnNum2 = document.createElement("button");
btnNum2.setAttribute("onClick","display('2')");
btnNum2.setAttribute("class","actnum")
btnNum2.textContent = 2;
div4.appendChild(btnNum2);

const btnNum3 = document.createElement("button");
btnNum3.setAttribute("onClick","display('3')");
btnNum3.setAttribute("class","actnum")
btnNum3.textContent = 3;
div4.appendChild(btnNum3);

const btnNumadd = document.createElement("button");
btnNumadd.setAttribute("onClick","display('+')");
btnNumadd.setAttribute("id","add");
btnNumadd.setAttribute("class","actnum rt");
btnNumadd.textContent = "+";
div4.appendChild(btnNumadd);

const div5 = document.createElement("div");
div5.setAttribute("class","row justify-content-around")
div5.setAttribute("id","mdiv5");
div.appendChild(div5);

const btnNum0 = document.createElement("button");
btnNum0.setAttribute("onClick","display('0')");
btnNum0.setAttribute("class","actnum")
btnNum0.textContent = 0;
div5.appendChild(btnNum0);

const btnNum00 = document.createElement("button");
btnNum00.setAttribute("onClick","display('00')");
btnNum00.setAttribute("class","actnum")
btnNum00.textContent = "00";
div5.appendChild(btnNum00);

const btnNumeq = document.createElement("button");
btnNumeq.setAttribute("onClick","calculate()");
btnNumeq.setAttribute("class","actnum")
btnNumeq.setAttribute("id","equal")
btnNumeq.textContent = "=";
div5.appendChild(btnNumeq);

document.body.append(div);

let outputscreen = document.getElementById("result");

function display(value) {
    outputscreen.value +=value;
}
function calculate() {
    outputscreen.value = eval(outputscreen.value);
}
function clear1(){
    outputscreen.value="";
}
function oneBack(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}