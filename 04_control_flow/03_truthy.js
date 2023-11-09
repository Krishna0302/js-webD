const userEmail = "k@gmail.com"
if(userEmail){
    console.log("Got user Email")
} else {
    console.log("don't have user Email")
}

// falsy values => false, 0, -0, BigInt 0n, null, NaN, "", undefined
// Truthy values => true, 1, "0", " ", 'false', [], {}, function(){}

const emptyObject = {}
if(Object.keys(emptyObject).length==0){
    console.log("Object is empty")
}