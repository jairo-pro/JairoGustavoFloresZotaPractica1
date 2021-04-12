var primo = 2;
var result = true;
for( var i = 2; i<primo; i++){
    if(primo % i === 0){
        result = false;
    }
}
console.log(result);