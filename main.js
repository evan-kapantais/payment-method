var row = document.getElementsByClassName('row-method');

for (var i = 0; i < row.length; ++i) {
    row[i].addEventListener('mousedown', toggleSelected);
}

function toggleSelected() {

    for (var i = 0; i < row.length; ++i) {

        row[i].classList.remove('selected');

        if (row[i].children.length > 2) {

            row[i].lastChild.remove();
        }
        
    }

    this.classList.add('selected');

    var checker = document.createElement("img");
    checker.src = 'img/check.svg';
    checker.id = 'check';
    checker.alt = 'check';

    this.appendChild(checker);
    
    console.log(checker);
}