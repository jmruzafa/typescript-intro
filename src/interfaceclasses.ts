// Loosely connected Interface with Class

interface User {
    email:string;
    firstName?: string;
    lastName?: string;
}

class Admin {
    role: string;
    constructor(public email: string){
        this.role = 'Admin';
    }
}

function profile(user: User) : string {
    return `Welcome ${user.email}`;
}

var admin = new Admin('admin@email.com');
console.log(admin.role);


namespace Blog {
    // Direct Implementation
    export interface IPost { //export will leave the function available outside
        title: string;
        body: string;
    }

    export class Post implements IPost { //explicit connection 
        title: string;
        body: string;
        constructor(post: IPost){
            this.title = post.title;
            this.body = post.body;
        }
        printPost(){
            console.log(this.title);
            console.log(this.body);
        }
    }
}

namespace Content {
    // Direct Implementation
    export interface IPost { //export will leave the function available outside
        title: string;
        body: string;
        slug: string;
        seoKeywords: string;
    }

    export class Post implements IPost { //explicit connection 
        title: string;
        body: string;
        slug: string;
        seoKeywords: string;

        constructor(post: IPost){
            this.title = post.title;
            this.body = post.body;
            this.slug =  post.slug;
            this.seoKeywords = post.seoKeywords;
        }
        
        printPost(){
            console.log(this.title);
            console.log(this.body);
        }
    }
}
var blogPost = new Blog.Post({
    title: "Great title", 
    body: "Some body will goes here"
});
blogPost.printPost();


var contentPost = new Content.Post({
    title: "Great content title", 
    body: "Some content body will goes here",
    slug: "my-blog-page",
    seoKeywords: "blog,ts,typescript"
});
contentPost.printPost();