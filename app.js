let btn = document.getElementById('btn');

function Calc() {
    let math = document.getElementById('math').value;
    let computer = document.getElementById('computer').value;
    let physics = document.getElementById('physics').value;
    let chemistry = document.getElementById('chemistry').value;

    let total = Number(math) + Number(computer) + Number(physics) + Number(chemistry);
    let per = (Number(total) * 100) / 400;

    let result = document.getElementById('showData');
    result.innerText = `Your marks is ${total} out of 400 and your percentage is ${per}%.`
}
btn.addEventListener('click', Calc);