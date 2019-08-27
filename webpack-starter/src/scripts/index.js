

console.log('this stuff is working now');


const cookieId = 34; //needs to be initialize, its declared as a constant

console.log(cookieId);

//let has block scoping and var doesnt't
if(true){
    let cookie = 'chocolate chip';
}
//console.log(cookie); - error will appear

//var doesnt't have block scoping, could lead you to errors
if(true){
    var cookies = 'yummm';//
}
console.log(cookies);