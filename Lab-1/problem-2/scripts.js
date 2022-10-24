const addbutton = document.querySelector(".add-button"),
delbutton = document.querySelector(".exit-button"),
notearea = document.querySelector(".note-area");

addbutton.addEventListener("click", () => {
    let notetemplate = `<div class="note">
                            <div class="buttons">
                                <button class="exit-button" onclick="deleteNote(this)"> X </button>
                                <button class="color-button" onclick="colorWhite(this)"> White </button>
                                <button class="color-button" onclick="colorRed(this)"> Red </button>
                                <button class="color-button" onclick="colorGreen(this)"> Green </button>
                                <button class="color-button" onclick="colorBlue(this)"> Blue  </button>
                            </div>
                            <form class="note-form">
                                <label for="title">Title:</label><br>
                                <input type="text" id="title" name="title"><br>
                                <label for="content">Note Content:</label><br>
                                <textarea name="content" rows="5" cols="27"></textarea>
                            </form>
                        </div>`
    notearea.insertAdjacentHTML("beforeend", notetemplate)
})

function deleteNote(elem) {
    elem.parentElement.parentElement.remove();
}

function colorWhite(elem) {
    elem.parentElement.parentElement.style.background = "White";
}

function colorRed(elem) {
    elem.parentElement.parentElement.style.background = "Red";
}

function colorGreen(elem) {
    elem.parentElement.parentElement.style.background = "green";
}

function colorBlue(elem) {
    elem.parentElement.parentElement.style.background = "Blue";
}
