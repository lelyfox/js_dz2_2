var time = +prompt('Введите время');

switch (true) {
    case (time == 0):
        alert(time + 12 + ' часов ночи');
        break;
    case (time >= 1 && time <= 6):
        alert(time + ' час/часа ночи');
        break;
    case (time >= 7 && time <= 10):
        alert(time + ' часов утра');
        break;
    case (time == 11 || time == 12):
        alert(time + ' часов дня');
        break;
    case (time >= 13 && time <= 17):        
        alert(time - 12 + ' час/часа/часов дня');
        break;
    case (time >= 18 && time <= 23):
        alert(time - 12 + ' часов вечера')
        break;
    default:
        alert('Вы ввели неверное число');
        break;
}


// Второй длинный вариант
// var time = +prompt('Введите время');

// switch(time){
//     case 0:
//     alert(time + ' часов ночи')
//     break
//     case 1:
//     alert(time + ' час ночи')
//     break
//     case 2:
//     alert(time + ' часа ночи')
//     break
//     case 3:
//     alert(time + ' часа ночи')
//     break
//     case 4:
//     alert(time + ' часа ночи')
//     break
//     case 5:
//     alert(time + ' часов ночи')
//     break
//     case 6:
//     alert(time + ' часов ночи')
//     break
//     case 7:
//     alert(time + ' часов утра')
//     break
//     case 8:
//     alert(time + ' часов утра')
//     break
//     case 9:
//     alert(time + ' часов утра')
//     break
//     case 10:
//     alert(time + ' часов утра')
//     break
//     case 11:
//     alert(time + ' часов дня')
//     break
//     case 12:
//     alert(time + ' часов дня')
//     break
//     case 13:
//     alert('1 час дня')
//     break
//     case 14:
//     alert('2 часа дня')
//     break
//     case 15:
//     alert('3 часа дня')
//     break
//     case 16:
//     alert('4 часа дня')
//     break
//     case 17:
//     alert('5 часов дня')
//     break
//     case 18:
//     alert('6 часов вечера')
//     break
//     case 19:
//     alert('7 часов вечера')
//     break
//     case 20:
//     alert('8 часов вечера')
//     break
//     case 21:
//     alert('9 часов вечера')
//     break
//     case 22:
//     alert('10 часов вечера')
//     break
//     case 23:
//     alert('11 часов вечера')
//     break
//     default:
//     alert('Вы ввели неверное число')
//     break
// }
