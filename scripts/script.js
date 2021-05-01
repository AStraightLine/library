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

    // Remove all book cards and repopulate to update id's with correct array positions after removal of a card.
    let child = bookCardContainer.lastElementChild;
    while(child) {
        bookCardContainer.removeChild(child);
        child = bookCardContainer.lastElementChild;
    }

    for (let i = 0; i < library.length; i++) {
        const bookCard = document.createElement('div');
        const cardContentContainer = document.createElement('div');
        const bookTitle = document.createElement('span');
        const bookAuthor = document.createElement('span');
        const bookDate = document.createElement('span');
        const bookCardButtonsContainer = document.createElement('div');
        const bookReadButton = document.createElement("button");
        const deleteCardButton = document.createElement("button");
        bookCard.setAttribute('id', 'bookCard'+i);
        bookCard.classList.add('bookCard');
        bookCardContainer.appendChild(bookCard);
        cardContentContainer.classList.add('cardContentContainer');
        cardContentContainer.setAttribute('id', 'cardContentContainer'+i);
        bookCard.appendChild(cardContentContainer);
        bookTitle.setAttribute('id', 'bookTitle'+i);
        bookTitle.classList.add('bookTitleInfo');
        bookAuthor.setAttribute('id', 'bookAuthor'+i);
        bookAuthor.classList.add('bookAuthorInfo');
        bookDate.setAttribute('id', 'bookDate'+i);
        bookDate.classList.add('bookDateInfo');
        bookCardButtonsContainer.setAttribute('id', 'bookCardButtonContainer'+i);
        bookCardButtonsContainer.classList.add('bookCardButtonsContainer');
        bookReadButton.setAttribute('id', 'bookReadButton'+i);
        bookReadButton.classList.add('bookReadButton');
        bookReadButton.setAttribute('type', 'checkbox');
        deleteCardButton.setAttribute('id', 'deleteCardButton'+i)
        deleteCardButton.classList.add('deleteCardButton');
        if(library[i].read == true || library[i].read == "true") {
            bookReadButton.textContent = "Read";
        } else {
            bookReadButton.textContent = "Not Read";
        }
        bookTitle.textContent = library[i].title;
        bookAuthor.textContent = "By: " + library[i].author;
        bookDate.textContent = "Published: " + library[i].date;
        deleteCardButton.textContent = 'Remove';
        cardContentContainer.appendChild(bookTitle);
        cardContentContainer.appendChild(bookAuthor);
        cardContentContainer.appendChild(bookDate);
        cardContentContainer.appendChild(bookCardButtonsContainer);
        bookCardButtonsContainer.appendChild(bookReadButton);
        bookCardButtonsContainer.appendChild(deleteCardButton);
    }

    updateRemoveListeners();
    updateReadListeners();
}

function displayNewlyAddedBook() {
    const bookCard = document.createElement("div");
    const cardContentContainer = document.createElement("div");
    const bookTitle = document.createElement("span");
    const bookAuthor = document.createElement("span");
    const bookDate = document.createElement("span");
    const bookCardButtonsContainer = document.createElement('div');
    const bookReadButton = document.createElement("button");
    const deleteCardButton = document.createElement("button");
    bookCard.setAttribute('id', 'bookCard'+((library.length)-1));
    bookCard.classList.add('bookCard');
    bookCardContainer.appendChild(bookCard);
    cardContentContainer.classList.add('cardContentContainer');
    cardContentContainer.setAttribute('id', 'cardContentContainer'+((library.length)-1));
    bookCard.appendChild(cardContentContainer);
    bookTitle.setAttribute('id', 'bookTitle'+((library.length)-1));
    bookTitle.classList.add('bookTitleInfo');
    bookAuthor.setAttribute('id', 'bookAuthor'+((library.length)-1));
    bookAuthor.classList.add('bookAuthorInfo');
    bookDate.setAttribute('id', 'bookDate'+((library.length)-1));
    bookDate.classList.add('bookDateInfo');
    bookCardButtonsContainer.setAttribute('id', 'bookCardButtonContainer'+((library.length)-1));
    bookCardButtonsContainer.classList.add('bookCardButtonsContainer');
    bookReadButton.setAttribute('id', 'bookReadButton'+((library.length)-1));
    bookReadButton.classList.add('bookReadButton');
    bookReadButton.setAttribute('type', 'checkbox');
    deleteCardButton.setAttribute('id', 'deleteCardButton'+ ((library.length)-1));
    deleteCardButton.classList.add('deleteCardButton');
    if(library[(library.length)-1].read == "true" || library[((library.length)-1)].read == true) {
        bookReadButton.textContent = "Read";
    } else {
        bookReadButton.textContent = "Not Read";
    }
    bookTitle.textContent = library[((library.length)-1)].title;
    bookAuthor.textContent = "By: " + library[((library.length)-1)].author;

    // Date formatting, input default format is 'yyyy-mm-dd'
    const dateComponentsArray = (library[((library.length)-1)].date).split('-');
    let year = dateComponentsArray[0].toString();
    let month = dateComponentsArray[1].toString();
    let day = dateComponentsArray[2].toString();
    switch (month) {
        case '01':
            month = 'January';
            break;
        case '02':
            month = 'February';
            break;
        case '03':
            month = 'March';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'June';
            break;
        case '07':
            month = 'July';
            break;
        case '08':
            month = 'August';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'October';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'December';
            break;
    }
    bookDate.textContent = "Published: " + month + " " + day + "th " + year;
    deleteCardButton.textContent = 'Remove';
    cardContentContainer.appendChild(bookTitle);
    cardContentContainer.appendChild(bookAuthor);
    cardContentContainer.appendChild(bookDate);
    cardContentContainer.appendChild(bookCardButtonsContainer);
    bookCardButtonsContainer.appendChild(bookReadButton);
    bookCardButtonsContainer.appendChild(deleteCardButton);

    updateRemoveListeners();
    updateReadListeners();
}

function openForm() {
    newBookForm.style.display = "flex";
    newBookForm.style.justifyContent = "center";
    newBookForm.style.alignItems = "center";
}

function closeForm() {
    newBookForm.style.display = "none";
}

function bookCardRemoveButtonHandler(e) {
    let button = e.target;
    let currentCard = (button.getAttribute('id')).split('');
    currentCard = currentCard[(currentCard.length) - 1];
    library.splice(currentCard, 1);
    currentCard = document.getElementById('bookCard' + currentCard);
    currentCard.remove();
    bookCardRemoveButtons = document.querySelectorAll('.deleteCardButton');
    displayBooks();
}

function bookCardReadButtonsHandler(e) {
    let button = e.target;
    let currentCard = (button.getAttribute('id')).split('');
    currentCard = currentCard[(currentCard.length) - 1];
    let currentCardReadButton = document.getElementById('bookReadButton' + currentCard);
    if(library[currentCard].read == true || library[currentCard].read == "true") {
        library[currentCard].read = false;
        currentCardReadButton.textContent = "Not Read";
    } else {
        library[currentCard].read = true;
        currentCardReadButton.textContent = "Read";
    }
}

function updateRemoveListeners() {
    bookCardRemoveButtons = document.querySelectorAll('.deleteCardButton');

    // Remove old event listeners first
    bookCardRemoveButtons.forEach((button) => {
        button.removeEventListener('click', bookCardRemoveButtonHandler);
    });

    // Add new event listeners
    bookCardRemoveButtons.forEach((button) => {
        button.addEventListener('click', bookCardRemoveButtonHandler);
    });
}

function updateReadListeners() {
    bookCardReadButtons = document.querySelectorAll('.bookReadButton');

    // Remove old event listeners first
    bookCardRemoveButtons.forEach((button) => {
        button.removeEventListener('click', bookCardReadButtonsHandler);
    });

    // Add new event listeners
    bookCardReadButtons.forEach((button) => {
        button.addEventListener('click', bookCardReadButtonsHandler);
    });
}

const newBookFormButton = document.getElementById('newBookFormButton')
const newBookForm = document.getElementById('formModal');
const closeFormButton = document.getElementById('closeFormButton');
const bookCardContainer = document.getElementById('bookCardContainer');
let bookCardRemoveButtons = document.querySelectorAll('.deleteCardButton');
let bookCardReadButtons = document.querySelectorAll('.bookReadButton');

let library = [];

const beyondGoodAndEvil = new Book("Beyond Good and Evil", "Friedrich Nietzsche", 224, 1886, true);
const theSilmarillion = new Book("The Silmarillion", "J.R.R. Tolkien", 443, 'September 15th 1977', true);
const idyllsOfTheKing = new Book("Idylls of the King", "Alfred Tennyson", 384, 1859, true); 
const ivanhoe = new Book("Ivanhoe", "Walter Scott", 496, 'December 1819', true);

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

bookCardRemoveButtons.forEach((button) => {
    button.addEventListener('click', bookCardRemoveButtonHandler);
});

bookCardReadButtons.forEach((button) => {
    button.addEventListener('click', bookCardReadButtonsHandler);
});






