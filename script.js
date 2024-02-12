var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}


const googlePlayButton = document.querySelector('.google-play');
    const appleStoreButton = document.querySelector('.apple-store');

    // Add event listeners for mouse enter and leave events
    googlePlayButton.addEventListener('mouseenter', function() {
        this.classList.add('hovered'); // Add a class to apply hover effect
    });
    googlePlayButton.addEventListener('mouseleave', function() {
        this.classList.remove('hovered'); // Remove the class to revert hover effect
    });

    appleStoreButton.addEventListener('mouseenter', function() {
        this.classList.add('hovered'); // Add a class to apply hover effect
    });
    appleStoreButton.addEventListener('mouseleave', function() {
        this.classList.remove('hovered'); // Remove the class to revert hover effect
    });




// Select the navbar element
const navbar = document.getElementById('navbar');

// Create an image element for the logo
const logo = document.createElement('img');
logo.src = 'images/malmath.png';
logo.alt = 'Your Logo';
logo.classList.add('logo');

// Create an h1 element for the title
const title = document.createElement('h1');
title.textContent = 'Math Calculator';
title.classList.add('title');

// Append the logo and title to the navbar
navbar.appendChild(logo);
navbar.appendChild(title);
