//var
//scoped = function scoped
//declare = re-declarable
//define = re-definable

main();
//Scope of Varible var
function main(){
    for(var i = 0; i < 4; i++){
        console.log(i);
    }
    console.log(i);
}
// console.log(i);


//Declaration of  Variable var

var j;
console.log('Declaration');
for(var j=0; j < 4; j++)
{
    
    console.log(j);
}

//Definition of  Variable var

var test = 'Node';
test = 'Tedlance';

console.log(test);