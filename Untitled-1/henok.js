
let hello = "world";
hello=5;
hello=10;
// declare an object with an object as a proprty
const myObject = {

    a:{

    }
};

//myObject ={} not allowed
//myObject.a.b =4 is ok 

delete myObject.a;  // is ok to delete
myObject.a = null // not exixt
myObject.a = undefined // exist but not defined 

// new note variable named variable

const variableName ='a';
myObject.a=8;
Console.log(myObject[variableName]); // 

// or we can you this bellow method
if (myObject[variableName]) {
    Console.log(myObject[variableName]);
}


// creat a subclass with a key word extends
class subclass extends something {
   constructor(){
       super('asd');
   }
}
const subclass = new subclass();
subclass.hello();

// add a propery after the object has been istantiated
subclass.a = 'hello world';
console.log(subclass.a);

// static to use you called up a function on class
// add a static function
static myFunction (){
console.log('am a static'); 
}
// javascript
<script>


</script>

// promises.js do any thing you want
// finished when resolce() is called
setTimeout (() => { resolve('disdes')},3000;
});
};
peomisesExample()
.then((res) => console.log(res))

// javascript function most of the time if you see open and closed {} is a funcrion
// arrow function  

// make an arrow func. wirh no blck body
const arrowNoBody = () => 64 + 8;
consr singleArg = arg +4; // single arg doesnot need cury braces
