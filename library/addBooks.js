import { itens } from "./books.js";
import { defaultSteps } from "./createBooks.js";

let dialog = document.querySelector(".dialog__add");

const closeDialog = () => {
    dialog.close();
    dialog.style.display = "none";
    document.body.style.overflow = "auto";
}

const openDialog = () => {
    dialog.style.display = "flex";
    document.body.style.overflow = "hidden";
} 

export const showHideDialog = () => {
    let button = document.querySelector(".li__links");
    button.addEventListener('click', openDialog);

    let buttonClose = document.querySelector("[data-abuttonClose]");
    buttonClose.addEventListener('click', closeDialog)
}

export const addBooks = () => {
    let buttonAdd = document.querySelector("[data-buttonAdd]");
    buttonAdd.addEventListener("click", (e) => {
        e.preventDefault();
        let title = document.querySelector("[data-faTitle]").value;
        let imgUrl = document.querySelector("[data-faImgUrl]").value;
        let author = document.querySelector("[data-faAuthor]").value;
        let pages = document.querySelector("[data-faPages]").value;
        let read = document.querySelector("[data-faRead]").checked;

        let book = new itens.book(title, imgUrl, author, pages, read)
        itens.library.push(book)
        defaultSteps();
    })
}
