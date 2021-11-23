namespace Interfaces {

    interface User {
        email: string;
        firstName: string;
        lastName: string;
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
}
