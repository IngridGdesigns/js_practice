//Rest Parameter examples

function sendCookies(...allCookieIds) {
    allCookieIds.forEach( id =>  console.log(id));
}

sendCookies(24, 32, 12, 4);
//expected output: 24, 32, 12, 4

//Rest parameter must be the last parameter on the list
function sendPies(flavor, ...allPieIds){
    allPieIds.forEach((id) => {
        if(id === 10){
            console.log(`${id} - ${flavor} mini pies`);
        } else{
            console.log(id); 
        }
    });
}
sendPies('Blueberry', 10, 24, 99);
//expected Output: 10-Blueberry mini pies, 24, 99