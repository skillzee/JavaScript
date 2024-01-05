// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();//IIFE mein semicolon lagana nahi bhoolna hai

( (name) =>{
    console.log(`DB CONNECTED TO ${name}`);
} )("Parth");


