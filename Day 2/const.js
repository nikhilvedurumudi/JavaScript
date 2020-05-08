//const
//scoped = function scoped / block scoped
//declare = non re-declarable
//define = non re-definable

 main();
//Scope of Varible const
function main() {
    const i = 2;
    for (const i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
} 
//Declaration of Varible const

const b=0;
console.log('Declaration');
for(const b=1; b < 4; b++)
{
    
    console.log(b);
}

//Definition of  Variable let

 const name = 'iGurkul';
name = 'teja';

console.log(name);