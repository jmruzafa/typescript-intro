// Inheritance 

class Report {
    public companyProfile: string; //public is the default 

    constructor(public name: string){
        this.companyProfile = name;
    }
}
class Invoice extends Report {
    constructor(public name: string, public total: number){
        super(name);
    }
    public  printInvoice(){
        return this.name + ", " + this.total;
    }
}

class BillOfLanding extends Report {
    constructor(public name: string, public city: string, public state: string) {
        super(name);
    }
    printBol() {
        return this.name + ', ' + this.city + ', ' + this.state;
    }
}

var invoice = new Invoice('Google', 200);
console.log(invoice.printInvoice());
var invoiceTwo = new Invoice('Yahoo', 1500);
console.log(invoiceTwo.printInvoice());
var bol = new BillOfLanding('Google', 'Scottsdale', 'AZ');
console.log(bol.printBol());



/* class Invoice {
    companyProfile:string;

    constructor(public name, public city, public state){
        this.companyProfile = name + ", " + city + ", " + state;
    }
}

var googleInvoice = new Invoice('Google', 'Mountain View', 'State');
var yahooInvoice = new Invoice('Yahoo', 'New York', 'State');
var microsoftInvoice = new Invoice('Microsoft', 'Richmond', 'State');

console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile); */