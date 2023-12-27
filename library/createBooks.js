import { itens } from "./books.js"
import { closeEditBooks, editBooks } from "./editBooks.js";

itens.addToLibrary(new itens.book("Além do bem e do mal", "https://m.media-amazon.com/images/I/712rqkUhTFL._SL1500_.jpg", "Friedrich Nietzsche", "256"))

export const createBooks = () => {

    let books = document.querySelector(".books");
    books.innerHTML = "";

    itens.library.forEach(book => {
        let bookCard = document.createElement('div');
        bookCard.classList.add('book');
        bookCard.book
        bookCard.innerHTML = `
    <h3 class="bo__title">${book.title.toUpperCase()}</h3>
        <p class="bo__read"> 
        Read
        ${!book.read ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>`: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
      </svg>`}</p>
    <img src="${book.imgUrl}" alt="book ${book.title}" class="bo__img">
    <p class="bo__description">Author:<br> ${book.author}</p>
    <p class="bo__description">Pages:<br> ${book.pages}</p>
    <div class="bo__co__button">
    <a class="bo__button--edit" role="button">edit</a>
    <a class="bo__button--remove" role="button">remove</a>
    </div>
    `;
        bookCard.setAttribute('data-index', itens.library.indexOf(book));
        books.appendChild(bookCard);
    });
}

export const bookEventRemove = () => {

    let buttons = document.querySelectorAll(".bo__button--remove");
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            itens.library.splice(e.target.parentNode.parentNode.dataset.index, 1);
            defaultSteps();
        });
    });
}

export const bookEventEdit = () => {
    closeEditBooks();
    let buttons = document.querySelectorAll(".bo__button--edit");
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            editBooks(itens.library[e.target.parentNode.parentNode.dataset.index], e.target.parentNode.parentNode.dataset.index);
        })
    })
}

export const defaultSteps = () => {
    createBooks();
    bookEventRemove();
    bookEventEdit();
}