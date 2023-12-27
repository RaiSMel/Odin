import { itens } from "./books.js";
import { defaultSteps } from "./createBooks.js";

let dialog = document.querySelector(".dialog__edit");
let positionBook;

const getBookValues = (livro) => {
    let title = document.querySelector("[data-feTitle]");
    let imgUrl = document.querySelector("[data-feimgUrl]");
    let author = document.querySelector("[data-feAuthor]");
    let pages = document.querySelector("[data-fePages]");
    let read = document.querySelector("[data-feRead]");

    title.value = livro.title;
    imgUrl.value = livro.imgUrl;
    author.value = livro.author;
    pages.value = livro.pages;
    read.checked = livro.read;

}

export const saveEditBooks = () => {
    let buttonSave = document.querySelector('[data-buttonEdit]');
    buttonSave.addEventListener("click", () => {
        let title = document.querySelector("[data-feTitle]").value;
        let imgUrl = document.querySelector("[data-feimgUrl]").value;
        let author = document.querySelector("[data-feAuthor]").value;
        let pages = document.querySelector("[data-fePages]").value;
        let read = document.querySelector("[data-feRead]").checked;
        
        let livro = new itens.book(title, imgUrl, author, pages, read);
        itens.library.splice(positionBook, 1, livro);
        defaultSteps();
        dialog.style.display = "none";
        document.body.style.overflow = "auto";
    })
}

export const closeEditBooks = () => {
    let buttonClose = document.querySelector('[data-ebuttonClose]');
    buttonClose.addEventListener('click', () => {
        dialog.style.display = "none";
        document.body.style.overflow = "";
    })
}

export const editBooks = (livro, position) => {
    getBookValues(livro);
    positionBook = position;
    dialog.style.top = `${window.scrollY}px`;
    dialog.style.display = "flex";
    document.body.style.overflow = "hidden";
}