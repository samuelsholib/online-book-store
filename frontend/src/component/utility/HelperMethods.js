export function sort(products, sortType){
    switch (sortType) {
        case "title":
            return [...products].sort((a, b) => a.title.localeCompare(b.title));
            
        case "author":
            return [...products].sort((a, b) => a.authors.localeCompare(b.authors));
            
        case "genre":
            return [...products].sort((a, b) => a.genres.localeCompare(b.genres));
            
        case "date":
            return [...products].sort((a, b) => b.publishYear - a.publishYear);
            
        case "titledesc":
            return [...products].sort((a, b) => b.title.localeCompare(a.title));
            
        case "authordesc":
            return [...products].sort((a, b) => b.authors.localeCompare(a.authors));
            
        case "genredesc":
            return [...products].sort((a, b) => b.genres.localeCompare(a.genres));
            
        case "datedesc":
            return [...products].sort((a, b) => a.publishYear - b.publishYear);
            
    }
}

//flattens the author and genre objects into a string list
export function flatten(books) {
    for (let book of books) {
        //create author string instead of array of objects
        let authorStr = toLine(book.authors);
        book.authors = authorStr;

        //create genre string instead of array of objects
        let genreStr = toLine(book.genres);
        book.genres = genreStr;
    }
    return books;
}

//takes an array of objects and joins them into a comma-separated string
function toLine(arr) {
    let str = arr[0].name;
    for (let i = 1; i < arr.length; i++) {
        str += ", " + arr[i].name;
    }
    return str;
}