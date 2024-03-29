
var screen = document.querySelector('#screen');
var historyList = document.getElementById('history-list'); // Reference to the history list
var currentExpression = '';

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

// Evaluate the expression and update history
function calculateResult() {
    const expression = screen.value;
    try {
        const result = math.evaluate(expression); // Safer than eval()
        updateHistory(expression, result);
        screen.value = result;
    } catch (error) {
        screen.value = 'Error';
    }
}

// Event listener for the "=" button (ID: eval)
document.getElementById('eval').addEventListener('click', calculateResult);

// Function to update the history sidebar
function updateHistory(expression, result) {
    const evaluatedExpression = `${expression} = ${result}`;
    const para = document.createElement('p');
    para.textContent = evaluatedExpression;
    historyList.appendChild(para);
}


function toggleHistory() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

function calculation(v) {
    para = document.createElement('p');
    para.innerText = v;
    historyList.appendChild(para);
    return eval(v.split('=')[0].trim()); // Evaluate the expression part
}








    // Toggle sidebar visibility

    // Change button text based on sidebar visibility
    if (sidebar.classList.contains('collapsed')) {
        toggleButton.textContent = 'Open History';
    } else {
        toggleButton.textContent = 'Close History';
    }


function sin() {
  const expression = screen.value;
  const result = Math.sin(expression);
  screen.value = result;
  updateHistory(`sin(${expression})`, result);
}

function cos() {
  const expression = screen.value;
  const result = Math.cos(expression);
  screen.value = result;
  updateHistory(`cos(${expression})`, result);
}

function tan() {
  const expression = screen.value;
  const result = Math.tan(expression);
  screen.value = result;
  updateHistory(`tan(${expression})`, result);
}

function pow() {
  const expression = screen.value;
  const result = Math.pow(expression, 2);
  screen.value = result;
  updateHistory(`${expression}^2`, result);
}

function sqrt() {
  const expression = screen.value;
  const result = Math.sqrt(expression);
  screen.value = result;
  updateHistory(`sqrt(${expression})`, result);
}

function log() {
  const expression = screen.value;
  const result = Math.log(expression);
  screen.value = result;
  updateHistory(`log(${expression})`, result);
}

function pi() {
  const result = 3.14159265359;
  screen.value = result;
  updateHistory('π', result);
}

function e() {
  const result = 2.71828182846;
  screen.value = result;
  updateHistory('e', result);
}

function fact() {
  var i, num, f;
  f = 1;
  num = screen.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;

  screen.value = f;
  updateHistory(`fact(${num})`, f);
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
  // You might want to add logic here to update history accordingly
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

















































































































































































