// console.log('this is collge library website')


function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}



function Display() {

}


Display.prototype.add = function(book) {
    // console.log('this is our display function')

    tableBody = document.getElementById('tableBody')

    let uiString = `
                     <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td> 
                    </tr>`;

    tableBody.innerHTML += uiString;
}


// implement clear fuction


Display.prototype.clear = function() {
        let libraryform = document.getElementById('libraryForm');
        libraryForm.reset()

    }
    // implement validate fuction

Display.prototype.validate = function(book) {

    if ((book.name.length < 2) || (book.author.length < 2)) {
        return false;
    } else {
        return true;
    }
}

Display.prototype.show = function(type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
             <strong>message:</strong> ${displaymessage}
             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
    setTimeout(function() {
        message.innerHTML = "";
    }, 5000);
}

// add submit listener to library form
let libraryform = document.getElementById('libraryForm');
document.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    // console.log('you submit the form')
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;


    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
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