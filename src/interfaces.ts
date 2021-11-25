namespace Interfaces {

    interface User {
        email: string;
        firstName?: string; //make these arguments optional
        lastName?: string;
    }

    function profile(user:User): string {
        return `Welcome, ${user.firstName} ${user.lastName}`;
    }

    var realUser = {
        email: 'email@me.com',
        firstName: 'Javier',
        lastName: 'Ruzafa',
    }
    console.log(profile(realUser));

    function profileEmail(user:User): string {
        return `Email is: ${user.email}`;
    }
    var anotherUser = {
        email: "onlyemail@email.com"
    }

    console.log(profileEmail(anotherUser));


    console.log('\n* * * * * * * * * *\nInterface Function \n* * * * * * * * * *');
    interface InvoiceFunc {
        (name: string, total: number) : void;
    }
    let myInvoice: InvoiceFunc;
    myInvoice = function(n, t){
        console.log(n);
        console.log(t);
    }
    myInvoice('Google', 500);
}
