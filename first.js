let input = document.getelementybyId('inputbox');
let buttons = document.querySelectorAll('button') ;

let string = "";
let arr= array.from(buttons);
arr.array.forEach(buttons => {
    button.addeventlistener('click', (e) =>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value= string;
        }
else if(e.target.innerHTML == 'AC'){
    string="";
    input.value= String;
}
else if (e.target.innerHTML=='DEL') {
    string= string.substring(0, string.length-1);
    input.value= string;
    
}
else{
    string+=e,target.innerHTML;
    input.value= string;
}
        
    })
});