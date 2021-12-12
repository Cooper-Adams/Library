let myLibrary = [];

function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {

        if (read == true)
        {
            return title + ' by ' + author + ', ' + pages + ' pages, ' + ' have read';
        }

        return title + ' by ' + author + ', ' + pages + ' pages, ' + ' have not read yet';
    }
}

function addBookToLibrary(book)
{
    myLibrary.push(book);
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 295, false);
theLastWish = new Book("The Last Wish", "Adnrzej Sapkowski", 384, true);
Hatchet = new Book("Hatchet", "Gary Paulsen", 192, true);
BriansWinter = new Book("Brian's Winter", "Gary Paulsen", 176, true);
theHungerGames = new Book("The Hunger Games", "Suzanne Collins", 384, true);

addBookToLibrary(theHobbit);
addBookToLibrary(theLastWish);
addBookToLibrary(Hatchet);
addBookToLibrary(BriansWinter);
addBookToLibrary(theHungerGames);

const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', revealForm);

const backButton = document.querySelector('.backButton');
backButton.addEventListener('click', revertForm);

const library = document.querySelector('.library');

//Instantiates the table, some styling of the table is done here rather 
//than the stylesheet for cleanliness of code
const tbl = document.createElement('table');
tbl.classList.add('table');
tbl.style.textAlign = 'center';

//Creates the header of the table
const row = tbl.insertRow();
row.style.backgroundColor = 'black';

//The title for the Title column
const h1 = row.insertCell();
h1.appendChild(document.createTextNode("Title"));
h1.style.fontWeight = 'bold';
h1.style.color = 'white';

//The title for the Author column
const h2 = row.insertCell();
h2.appendChild(document.createTextNode("Author"));
h2.style.fontWeight = 'bold';
h2.style.color = 'white';

//The title for the Pages column
const h3 = row.insertCell();
h3.appendChild(document.createTextNode("Pages"));
h3.style.fontWeight = 'bold';
h3.style.color = 'white';

//The title for the Read status column
const h4 = row.insertCell();
h4.appendChild(document.createTextNode("Read"));
h4.style.fontWeight = 'bold';
h4.style.color = 'white';

//Extra cell for header color to fill
const h5 = row.insertCell();
h5.appendChild(document.createTextNode(" "));

//Extra cell for header color to fill
const h6 = row.insertCell();
h6.appendChild(document.createTextNode(" "));

//Populates the table with data from the library
for (let i = 0; i < myLibrary.length; i++) 
{
    const tr = tbl.insertRow();
    for (let j = 0; j < 6; j++) 
    {
        const td = tr.insertCell();

        //Title in title column
        if (j == 0) { td.appendChild(document.createTextNode(myLibrary[i].title));}
        //Author in author column
        else if (j == 1) { td.appendChild(document.createTextNode(myLibrary[i].author));}
        //Pages in pages column
        else if (j == 2) { td.appendChild(document.createTextNode(myLibrary[i].pages));}
        //Read status in read column
        else if (j == 3) 
        {
            if (myLibrary[i].read == true)
            {
                td.appendChild(document.createTextNode("Yes"));
            }

            else
            {
                td.appendChild(document.createTextNode("No"));
            }
        }

        //Creates the remove button for the 'i' row in the table
        else if (j == 4)
        {
            const remButton = document.createElement('button');
            remButton.textContent = 'Remove';
            remButton.classList.add('remButton');
            remButton.setAttribute('id', i + 1);
            remButton.addEventListener('click', removeRow);
            td.appendChild(remButton);
        }

        //Creates the toggle read status button for the 'i' row in the table
        else if (j == 5)
        {
            const readButton = document.createElement('button');
            readButton.textContent = 'Update Read Status';
            readButton.classList.add('readButton');
            readButton.setAttribute('id', i + 1);
            readButton.addEventListener('click', toggleReadStatus);
            td.appendChild(readButton);
        }
    }
}

//Adds the table to the DOM
library.appendChild(tbl);

//On form submission, create a new book and add it to the library/table
var form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title, author, pages, read;

    for(let i = 0; i < document.getElementById('formElement').elements.length - 1; ++i)
    {
        var fieldValue = document.getElementById('formElement').elements[i].value;

        if (i == 0)
        {
            title = fieldValue;
        }

        else if (i == 1)
        {
            author = fieldValue;
        }

        else if (i == 2)
        {
            pages = fieldValue;
        }

        else if (i == 3)
        {
            //Identifies whether the checkbox is checked
            if (document.getElementById('formElement').elements[i].checked)
            {
                read = true;
            }

            else
            {
                read = false;
            }
        }
    }

    let book = new Book(title, author, pages, read);

    addBookToLibrary(book);

    const tr = tbl.insertRow();
    for (let j = 0; j < 6; j++) 
    {
        const td = tr.insertCell();

        //Title in title column
        if (j == 0) { td.appendChild(document.createTextNode(myLibrary[myLibrary.length - 1].title));}
        //Author in author column
        else if (j == 1) { td.appendChild(document.createTextNode(myLibrary[myLibrary.length - 1].author));}
        //Pages in pages column
        else if (j == 2) { td.appendChild(document.createTextNode(myLibrary[myLibrary.length - 1].pages));}
        //Read status in read column
        else if (j == 3) 
        {
            console.log(myLibrary[myLibrary.length - 1].read)

            if (myLibrary[myLibrary.length - 1].read == true)
            {
                td.appendChild(document.createTextNode("Yes"));
            }

            else
            {
                td.appendChild(document.createTextNode("No"));
            }
        }

        //Creates the remove button for the 'i' row in the table
        else if (j == 4)
        {
            const remButton = document.createElement('button');
            remButton.textContent = 'Remove';
            remButton.classList.add('remButton');
            remButton.setAttribute('id', myLibrary.length - 1 + 1);
            remButton.addEventListener('click', removeRow);
            td.appendChild(remButton);
        }

        //Creates the toggle read status button for the 'i' row in the table
        else if (j == 5)
        {
            const readButton = document.createElement('button');
            readButton.textContent = 'Update Read Status';
            readButton.classList.add('readButton');
            readButton.setAttribute('id', myLibrary.length - 1 + 1);
            readButton.addEventListener('click', toggleReadStatus);
            td.appendChild(readButton);
        }
    }

    //Clears the form after submission and hides it, then bringing back
    //the add book button and the table
    form.reset();
    form.style = 'display: none';
    backButton.style = 'display: none'
    addButton.style = 'display: flex';
    library.style = 'display: flex';
});

//Clears the form, then re-displays the table
function revertForm()
{
    //Resets the form
    form.reset();

    //Hides the back button and displays the table and the add book button
    backButton.style = 'display: none';
    addButton.style = 'display: flex';
    library.style = 'display: flex';

    //Hides the form
    form.style = 'display: none';
}

//Prompts the user with a form and takes that info and creates a new book
function revealForm()
{
    //Hides the table and the add book button to give the form full focus
    addButton.style = 'display: none';
    backButton.style = 'display: flex';
    library.style = 'display: none';

    //Reveals the form to the user
    document.getElementById('formElement').style.display = 'flex';
}

//Removes the book object from the library and its corresponding row in
//the table
function removeRow(e)
{
    //Removes the Book from the library
    myLibrary.splice(e.target.id - 1, 1);

    //Deletes the row from the table
    tbl.deleteRow(e.target.id);  
    
    //Identifies all remaining remove buttons
    const buttons = Array.from(document.querySelectorAll('.remButton'));

    //Loops through the buttons and updates their IDs to keep them inbounds
    for (let i = 1; i <= buttons.length + 1; ++i)
    {
        if (i > e.target.id)
        {
            const tempButton = document.getElementById(i);
            tempButton.id = tempButton.id - 1;
        }
    }

    //Identifies all remaining remove buttons
    const readButtons = Array.from(document.querySelectorAll('.readButton'));

    //Loops through the buttons and updates their IDs to keep them inbounds
    for (let i = 1; i <= readButtons.length + 1; ++i)
    {
        if (i > e.target.id)
        {
            const tempButton = document.getElementById(i);
            tempButton.id = tempButton.id - 1;
        }
    }
}

//Toggle the read status for the current book
function toggleReadStatus(e)
{
    //newData identifies the correct row
    var newData = tbl.rows[parseInt(e.target.id, 10)].cells;

    //Updates the status to No/false and then the table to reflect the change
    if (myLibrary[e.target.id - 1].read == true)
    {
        myLibrary[e.target.id - 1].read = false;
        newData[parseInt(3, 10)].innerHTML = 'No';
    }

    //Updates the status to Yes/true and then the table to reflect the change
    else
    {
        myLibrary[e.target.id - 1].read = true;
        newData[parseInt(3, 10)].innerHTML = 'Yes';
    }
}