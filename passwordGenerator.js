const generatePassword = (length) => {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }

  return password;
};

let password = generatePassword(9);
console.log(`Generated password: ${password}`);
