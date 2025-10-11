// Step 1: Declare an empty inventory array
let inventory = [];

// Step 2: Define findProductIndex function
const findProductIndex = (productName) => {
  for(let i = 0;i<inventory.length;i++){
    if(inventory[i].name.toLowerCase()==productName.toLowerCase()){
      return i
    }
   
  }
  return -1
    
};

// Step 3: Define addProduct function
const addProduct = (product) => {
  let index = findProductIndex(product.name)
  if(index >= 0){
    inventory[index].quantity += product.quantity;
    console.log(`${inventory[index].name.toLowerCase()} quantity updated`)
  }
  else{
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity})
    console.log(`${product.name.toLowerCase()} added to inventory`)
  }
};

// Step 4: Define removeProduct function
const removeProduct = (productName, quantity) => {
  let index = findProductIndex(productName);

  if (index === -1) {
    console.log(`${productName.toLowerCase()} not found`);
    return;
  }

  let product = inventory[index];
  let remaining = product.quantity - quantity;

  if (remaining > 0) {
    product.quantity = remaining;
    console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
  } else if (remaining === 0) {
    inventory.splice(index, 1);
  } else {
    console.log(`Not enough ${product.name} available, remaining pieces: ${product.quantity}`);
  }
};

