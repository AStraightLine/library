function Book(title, author, pages, date, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.date = date,
    this.read = read
}

function addBookToLibrary() {
    const titleInput = document.getElementById('titleInput').value;
    const authorInput = document.getElementById('authorInput').value;
    const pagesInput = document.getElementById('pagesInput').value;
    const dateInput = document.getElementById('dateInput').value;
    const readInput = document.getElementById('readInput').value;
    const newBook = new Book(titleInput, authorInput, pagesInput, dateInput, readInput);
    library.push(newBook);
    displayNewlyAddedBook();
    closeForm();
    return false;
}

function displayBooks() {
    for (let i = 0; i < library.length; i++) {
        const bookCard = document.createElement("div");
        const bookTitle = document.createElement("span");
        const bookAuthor = document.createElement("span");
        const bookPages = document.createElement("span");
        const bookDate = document.createElement("span");
        const bookRead = document.createElement("input");
        bookCard.setAttribute('id', 'bookCard'+i);
        bookCard.classList.add('bookCard');
        bookCardContainer.appendChild(bookCard);
        bookTitle.setAttribute('id', 'bookTitle'+i);
        bookTitle.classList.add('bookTitle.info');
        bookAuthor.setAttribute('id', 'bookAuthor'+i);
        bookAuthor.classList.add('bookAuthorInfo');
        bookPages.setAttribute('id', 'bookPages'+i);
        bookPages.classList.add('bookPagesInfo');
        bookDate.setAttribute('id', 'bookDate'+i);
        bookDate.classList.add('bookDateInfo');
        bookRead.setAttribute('id', 'bookRead'+i);
        bookRead.classList.add('bookReadInfo');
        bookRead.setAttribute('type', 'checkbox');
        if(library[i].read == true) {
            bookRead.setAttribute('checked', 'checked');
        }
        bookTitle.textContent = library[i].title;
        bookAuthor.textContent = library[i].author;
        bookPages.textContent = library[i].pages + " pages";
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookDate);
        bookCard.appendChild(bookRead);
    }
}

function displayNewlyAddedBook() {
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("span");
    const bookAuthor = document.createElement("span");
    const bookPages = document.createElement("span");
    const bookDate = document.createElement("span");
    const bookRead = document.createElement("input");
    bookCard.setAttribute('id', 'bookCard'+(library.length)-1);
    bookCard.classList.add('bookCard');
    bookCardContainer.appendChild(bookCard);
    bookTitle.setAttribute('id', 'bookTitle'+(library.length)-1);
    bookTitle.classList.add('bookTitle.info');
    bookAuthor.setAttribute('id', 'bookAuthor'+(library.length)-1);
    bookAuthor.classList.add('bookAuthorInfo');
    bookPages.setAttribute('id', 'bookPages'+(library.length)-1);
    bookPages.classList.add('bookPagesInfo');
    bookDate.setAttribute('id', 'bookDate'+(library.length)-1);
    bookDate.classList.add('bookDateInfo');
    bookRead.setAttribute('id', 'bookRead'+(library.length)-1);
    bookRead.classList.add('bookReadInfo');
    bookRead.setAttribute('type', 'checkbox');
    console.log(library[(library.length)-1].read);
    if(library[(library.length)-1].read == "true") {
        bookRead.setAttribute('checked', 'checked');
    }
    bookTitle.textContent = library[(library.length)-1].title;
    bookAuthor.textContent = library[(library.length)-1].author;
    bookPages.textContent = library[(library.length)-1].pages + " pages";
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookDate);
    bookCard.appendChild(bookRead);
}

function openForm() {
    newBookForm.style.display = "flex";
    newBookForm.style.justifyContent = "center";
    newBookForm.style.alignItems = "center";
}

function closeForm() {
    newBookForm.style.display = "none";
}

const newBookFormButton = document.getElementById('newBookFormButton')
const newBookForm = document.getElementById('formModal');
const closeFormButton = document.getElementById('closeFormButton')
const bookCardContainer = document.getElementById('bookCardContainer');

let library = [];

const beyondGoodAndEvil = new Book("Beyond Good and Evil", "Friedrich Nietzsche", 224, 1886, true);
const theSilmarillion = new Book("The Silmarillion", "J.R.R. Tolkien", 443, 1977, true);
const idyllsOfTheKing = new Book("Idylls of the King", "Alfred Tennyson", 384, 1859, true); 
const ivanhoe = new Book("Ivanhoe", "Walter Scott", 496, 1819, true);

library.push(beyondGoodAndEvil);
library.push(theSilmarillion);
library.push(idyllsOfTheKing);
library.push(ivanhoe);

displayBooks();

newBookFormButton.addEventListener('click', () => {
    openForm();
});

closeFormButton.addEventListener('click', () => {
    closeForm();
});






