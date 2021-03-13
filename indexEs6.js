console.log('this is Es6 class implementation')

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}


class Display {
    add(book) {
        // console.log('this is our display function')

        let tableBody = document.getElementById('tableBody')

        let uiString = `
                     <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td> 
                    </tr>`;

        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryform = document.getElementById('libraryForm');
        libraryForm.reset()
    }
    validate(book) {

        if ((book.name.length < 2) || (book.author.length < 2)) {
            return false;
        } else {
            return true;
        }
    }
    show(type, displaymessage) {
        let message = document.getElementById('message');
        let boldText;
        if (boldText === "success") {
            boldText = 'Success';
        } else {
            boldText = 'Error';
        }

        message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                 <strong>${boldText}:</strong> ${displaymessage}
                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
        setTimeout(function() {
            message.innerHTML = "";
        }, 5000);
    }

}

let libraryform = document.getElementById('libraryForm');
document.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('you submit the form')
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;


    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type)

    let display = new Display();


    if (display.validate(book)) {

        // console.log(book)
        display.add(book);
        display.clear();
        display.show('success', 'your book has been succesfully added')
    } else {
        display.show('danger', 'sorry you can not add this book.please give a proper book name or author.')
    }
}