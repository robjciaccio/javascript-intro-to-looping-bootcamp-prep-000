function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if ((i) === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(num) {
  while (num > 0) {
    num--
    console.log(num)
  }
  return 'done'
}

function doWhileLoop(array) {
  do { array = array.slice(0, array.length - 1)
  } while (Math.random() >= 0.5)
  return array
}
