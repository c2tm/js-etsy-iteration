//#1

const allNum = items.map(obj => obj.price);
console.log(allNum.reduce((a, b) => a + b) / allNum.length);                        


console.log(`\n`);

//#2

const priceFilter = items.filter(obj => obj.price > 14.00 && obj.price < 18.00);            

console.log(`Items that cost between $14.00 and $18.00`)
console.log(priceFilter);

console.log(`\n`);

//#3

const codeFinder = items.filter(obj => obj.currency_code === `GBP`);                       

codeFinder.forEach(obj => console.log(`${obj.title} is £${obj.price}`));

console.log(`\n`);

//#4

const itemsMadeOfWood = items.filter(obj => obj.materials.includes('wood'));        

itemsMadeOfWood.forEach(obj => console.log(`${obj.title} is made of wood`));

console.log(`\n`);

//#5

const manyMaterials = items.filter(obj => obj.materials.length >= 8);              

manyMaterials.forEach(obj => {
    console.log(`${obj.title} has ${obj.materials.length} materials`)
    console.log(obj.materials.filter(str => typeof str === 'string').join(`\n`));  
})


//#6

const bySellers = items.filter(obj => obj.who_made === `i_did`);

console.log(`${bySellers.length} were made by their sellers`);