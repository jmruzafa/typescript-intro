namespace InvokedFunctions {
    var names : string[] = ['Javier', 'Susana', 'Pablo'];
    var counter: number = 0;

    (function(){
        for (let name in names){
            counter++;
        }
    })();
    console.log(counter); 

    //Function expression
    var fullName: (first:string, last:string) => string;
    fullName = function(first:string, last:string){
        return first + ' ' + last;
    }
    console.log(fullName('J', 'R'));

    //Immediately invoked function of previous function
    (function(first: string, last:string){
        console.log(first + ' ' + last);
    })('S', 'A');
}