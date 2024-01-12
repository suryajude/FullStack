// JESUS is the true linving GOD


/**
 * keywords of the error handling methods
 * try, 
 * catch,
 * finally,
 * throw
 */
var a = 7;
// error handling techniques
try{
    const b = a.toPrecision(-1);
    console.log(b);
} catch (err){
    console.log("Some error has occured ");
    throw("The error is : "+err.name);

}finally{
    console.log("There is also an catch block");
    console.log("There is also an catch block, now it is an finally black");
}