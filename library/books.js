const library = [
    {
        title: "A arte da guerra",
        imgUrl: "https://m.media-amazon.com/images/I/71FMCr5Z9rL._SL1360_.jpg",
        author: "Sun Tzu",
        pages: "160",
        read: true
    },
    {
        title: "O poder do hábito",
        imgUrl: "https://m.media-amazon.com/images/I/815iPX0SgkL._SL1500_.jpg",
        author: "Charles Duhigg",
        pages: "408",
        read: true
    },
    {
        title: "A revolução dos bichos",
        imgUrl: "https://m.media-amazon.com/images/I/91BsZhxCRjL._SL1500_.jpg",
        author: "George Orwell",
        pages: "152",
        read: true
    },
    {
        title: "Neuromancer: 1",
        imgUrl: "https://m.media-amazon.com/images/I/91Bx5ilP+EL._SL1500_.jpg",
        author: " William Gibson",
        pages: "320",
        read: true
    }
];

function Books(title, imgUrl, author, pages, read) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.author = author;
    this.pages = pages;
    this.read = read
}

const addBookToLibrary = (book) => {
    library.push(book)
}

export const itens = {
    library: library,
    book: Books,
    addToLibrary: addBookToLibrary
}