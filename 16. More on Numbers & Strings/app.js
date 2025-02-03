
function productDescription(stringsArr, productName, productPrice){
    console.log(stringsArr);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'cheap';
    if(productPrice > 20){
        priceCategory = 'fair';
    }
    return `${stringsArr[0]}${productName}${stringsArr[1]}${priceCategory}${stringsArr[2]}`;
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product "${prodName}" is ${prodPrice}.`;
console.log(productOutput);










