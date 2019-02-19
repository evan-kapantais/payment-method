var row = document.getElementsByClassName('row-method');
var rowNext = document.getElementById('row-next');

function addListeners() {

    for (var i = 0; i < row.length; ++i) {
    row[i].addEventListener('mousedown', toggleSelected);
    }

    rowNext.addEventListener('mousedown', slideMainCard);
}


function toggleSelected() {

    // check if a row is selected; if yes, remove selection and select the one clicked
    for (var i = 0; i < row.length; ++i) {

        row[i].classList.remove('selected');

        if (row[i].children.length > 2) {

            row[i].lastChild.remove();
        }
    }

    this.classList.add('selected');

    // create checker element and add it to row
    var checker = document.createElement("img");
    checker.src = 'img/check.svg';
    checker.id = 'check';
    checker.alt = 'check';
    this.appendChild(checker);

    var rowNext =  document.getElementById('row-next');
    rowNext.style.backgroundColor = '#598BDB';
    // rowNext.setAttribute('href', 'thanks.html');
}

function slideMainCard() {
    var main = document.getElementById('main-payment');
    main.classList.add('slideOut');

    var thanks = document.getElementById('main-thanks');
    thanks.classList.add('SlideIn');
}