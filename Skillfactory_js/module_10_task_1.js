const x = prompt('Введите число')
const value = +x;
if(typeof value == "number" && !isNaN(value)){
  if(value == 0) {
    console.log('Введенное число - ноль')
  } else if (value % 2 == 0){
    console.log('Введенное число - чётное')
  } else {
    console.log('Введенное число - нечётное')
  }
} else {
  console.log('Упс, кажется, вы ошиблись')
}