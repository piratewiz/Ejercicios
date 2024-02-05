/* Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función: */
const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numbers) {
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    sum += element
  }
  return sum / numbers.length
}

average(numbers)
console.log(average(numbers))
