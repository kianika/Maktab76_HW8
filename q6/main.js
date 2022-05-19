//part1 answer
/* let site = {
    siteName: "W3Docs",
    bookName: "Javascript",

    get fullName() {
        return(`${this.siteName} ${this.bookName}`);
    },
};
alert(site.fullName);  */




//part2 answer
/* let site = {
    siteName: "W3Docs",
    bookName: "Javascript",

    get fullName(){
        return(`${this.siteName} ${this.bookName}`);
    },

    set fullName(value){
        [this.siteName, this.bookName] = value.split(" ");
    }
};

site.fullName = "W3 CSS";
alert(site.siteName); 
alert(site.bookName); */





//part3 answer

/* let site = {
    siteName: "W3Docs",
    bookName: "Javascript"
};

Object.defineProperty(site, 'fullName', {
    get() {
        return `${this.siteName} ${this.bookName}`;
    },
      
    set(value) {
        [this.siteName, this.bookName] = value.split(" ");
    }
});
      
for(let key in site) alert(key);  */


    