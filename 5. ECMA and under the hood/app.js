function getName(){
  return prompt("Your name: ", "");
}

function greet(){
  const username = getName();
  console.log('Hello aa' + username);
}

greet();
