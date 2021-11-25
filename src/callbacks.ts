var dbQuery = function() : void {
    setTimeout(() => {
        console.log('Query result');
    }, 3000);
}

function loadPage(q: () => void) {
    console.log('header');
    q();
    console.log('side bar');
    console.log('footer');
}

loadPage(dbQuery);
