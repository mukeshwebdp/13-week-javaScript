let choose=2;
console.log("Choose of any number ");
console.log("1- standard--> might take delivery 3-5 days ");
console.log("2- express--> might delivery 1-2 days");
console.log("3- Overnight--> might next day delivery");
switch(choose){
    case 1:
        console.log("-------> might take delivery 3-5 days <-------");
        break;
    case 2:
        console.log("------->might delivery 1-2 days <-------");
        break;
    case 3:
        console.log("------->might next day delivery <-------")
        break;
    default:
    console.log("------->Entry not match <-------");
    break;
}