function showMessage(){
    let message = 'Я учу JavaScript!'
    console.log(message);
}

showMessage();




var theNum = "0";
let flowers = ["flowers1", "flowers2", "flowers3", "flowers4"];
function goRight() {
    theNum++;
    if (theNum == flowers.length) {
        theNum = "0";
    }
    change_image.src = 'assets/images/' + flowers[theNum] + '.jpg';
}

function goLeft() {
    theNum--;
    if (theNum == "-1") {
        theNum = flowers.length - 1;
    }
    change_image.src = 'assets/images/' + flowers[theNum] + '.jpg';
}





const year = +prompt('Введите год');

if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
    alert('Год является високосным');
} else {
    alert('Год не високосный');
}
