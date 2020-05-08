//const
//scoped = function scoped / block scoped
//declare = non re-declarable
//define = non re-definable

 main();
//Scope of Varible const
function main() {
    const i = 2;
    for (var a = 0; a < 5; a++) {
        console.log(i);
    }
    console.log(i);
} 
//Declaration of Varible const

const b=0;
console.log('Declaration');
for(var b2=1; b2 < 4; b2++)
{
    
    console.log(b);
}

//Definition of  Variable let

 const name = 'iGurkul';
name = 'teja';

console.log(name);