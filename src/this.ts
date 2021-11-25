namespace This {
    class Invoice {
        total: number;
        constructor(total: number) {
            this.total = total;
        }
        printTotal() {
            console.log(this.total);
        }
        // 'this' is not referring to class anymore
        printLater(time: number) {
            setTimeout(function(){
                console.log(this.total);
            }, time);
        }  
        printWorkingLater(time: number) {
            setTimeout(() =>{ // arrow function will do the trick for us
                console.log(this.total);
            }, time);
        }       
    }
    var invoice = new Invoice(400);
    invoice.printTotal();
    invoice.printLater(1000);
    invoice.printWorkingLater(1500);
}