let array1 
let randomNumber1 
const chunkArrayInGroups = (array1,randomNumber1) =>{
  const newArr = []
  for (let i = 0; i<array1.length; i+=randomNumber1){
    newArr.push(array1.slice(i,i+randomNumber1))
  }
  return newArr
}