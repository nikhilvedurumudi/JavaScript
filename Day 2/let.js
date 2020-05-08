//let
//scoped = block scoped
//declare = non re-declarable
//define = re-definable

main();
//Scope of Varible let
function main(){
    for(let a = 0; a < 4; a++){
        console.log(a);
    }
    // console.log(i);
}
// console.log(i);


//Declaration of  Variable let

let b;
console.log('Declaration');
for(let b=0; b < 4; b++)
{
    
    console.log(b);
}
// let b;


//Definition of  Variable let
console.log('Definition');
let test = 'Node';
test = 'Tedlance';

console.log(test);