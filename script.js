// GLOBAL VARIABLES
const bank = [
    'Dan speaks',
    'Crew shout-out',
    'Guest star on podcast',
    '"Another One"',
    '"You know what I mean?"',
    'Donald sings',
    'Ask Bill segment',
    'Sports talk',
    'Star Wars talk',
    'Joelle speaks',
    'Donald is late',
    'John C. McGinley praise',
    'Fan gets more than 2 questions',
    '"5, 6, 7, 8!" from Bill Lawrence',
    'Garden State mention',
    'Remember the Titans mention',
    'Season 9 mention',
    '"Medical Jargon"',
    'Nurse appreciation',
    '"Ask The Todd" segment',
    '"Scrubs Wiki" segment',
    'Audition story',
    'Donald not knowing his lines',
    'Ringtone idea',
    '"That\'s so funny"',
    'Donald finishes the recap in 30 seconds exactly',
    'Donald finishes the recap in under 30 seconds',
    'Donald finishes the recap in over 30 seconds',
    'Weed talk',
    '"C\'mon buddy."',
    '"But _____ always crushes it."',
    'Bill accused of being "freaky"',
    '"Whatcha tryina get into Adeosun??',
    'Donald references hip-hop or rap',
    'Someone forgets filming a scene',
    'Donald complains about his social media following',
    'Zach sings',
    'Zach mentions musicals',
    'Praise of The Todd\'s line(s)',
    'Zach and Donald argue',
    '"Can we get (back) to the show, Donald?!"',
    'Joshua Radin shout-out',
    'Thunderous applause',
    'Donald does his Oprah voice',
    'Zach gets mad at Donald for Oprah voice or being loud',
    'Zach does his Aaron Neville impression',
    'Donald does his Aaron Neville impression',
    'Donald does his Neil Diamond impression',
    'Tennis talk',
];
let boardFilled = false;

// Loop that accesses a random quip and then pushes that random quip into the newBank variable
const bankCreator = () => {
    let newBank = [];

    while (newBank.length < 24) {
        // Create random integer between 0 and the length of the bank, minus 1
        const randomInt = Math.floor(Math.random() * (bank.length - 1));

        // Create a randomQuip by using the slice method on the bank array with the start index of the randomInt and the end of randomInt plus 1
        const quipSlice = bank.slice(randomInt, randomInt + 1);
        const randomQuip = quipSlice[0];

        // If the randomQuip is not found in the newBank array, push it to newBank
        if (newBank.indexOf(randomQuip) === -1) {
            // Push that randomQuip to the newBank array 
            newBank.push(randomQuip);
        }
    }

    return newBank;
};

// Function that can clear the board (except the Free Space)
const clearBoard = () => {
    // This is an array
    const allSquares = document.getElementsByTagName('td');

    // Loop through the array and clear the innerHTML of each square
    for (let i = 0; i < allSquares.length - 1; ++i) {
        const square = document.getElementById(`sq${i}`);
        // console.log(square);
        square.innerHTML = '';
        square.classList.remove('marked');
    };
}

// For loop that appends the quips into the HTML
const appendQuips = () => {
    const quipsArray = bankCreator();
    console.log(quipsArray)
    for (let i = 0; i < 24; ++i) {
        const newBankQuip = quipsArray[i];
        document.getElementById(`sq${i}`).innerHTML = newBankQuip;
    }
};

// Function that controls the logic on the button click
const buttonClick = () => {
    // If the board isn't filled, flip the boardFilled variable flag, run the clearBoard and appendQuips functions...
    if (!boardFilled) {
        boardFilled = !boardFilled;
        clearBoard();
        appendQuips();
    }
    // Otherwise, if the board *IS* filled, ask the user to confirm they want a new board. On confirm, run the two functions
    else {
        if (window.confirm('If you create a new board you will lose your current progress. Are you sure you want to create a new board?')) {
            clearBoard();
            appendQuips();
        };
    };
};

// Function that selects 
const selectSquare = square => {
    // Setting the markedSquare variable to the parameter given
    let selectedSquare = document.getElementById(`${square}`);

    // This is what prevents the user from being able to start selecting squares as soon as the page loads with the empty board
    if (boardFilled) {
        // Toggling the class of 'marked' to the selected square
        selectedSquare.classList.toggle('marked');
    }

    checkForWinner();
};

// Check for a win
const checkForWinner = () => {
    // An array that holds all the currently marked squares on the BINGO board.
    let markedSquaresArray = [];

    // Find all elements with the class of 'marked'
    const markedElements = document.getElementsByClassName('marked');

    // This loop is how we populate the markedSquaresArray with the current information
    for (let i = 0; i < markedElements.length; ++i) {
        // Giving each separate element a variable. We then split the class names into an array. 
        const markedSquare = markedElements[i].className.split(' ');

        // Accessing the above array, this is the letter-number coordinate of each square
        const squareCoordinates = markedSquare[0];


        markedSquaresArray.push(squareCoordinates);
    };

    // Check for row wins
    // Row1 win
    if (markedSquaresArray.indexOf('b1') !== -1) {
        if (markedSquaresArray.indexOf('i1') !== -1) {
            if (markedSquaresArray.indexOf('n1') !== -1) {
                if (markedSquaresArray.indexOf('g1') !== -1) {
                    if (markedSquaresArray.indexOf('o1') !== -1) {
                        winAlert('Win across row 1');
                    }
                }
            }
        }
    };
    // Row2 win
    if (markedSquaresArray.indexOf('b2') !== -1) {
        if (markedSquaresArray.indexOf('i2') !== -1) {
            if (markedSquaresArray.indexOf('n2') !== -1) {
                if (markedSquaresArray.indexOf('g2') !== -1) {
                    if (markedSquaresArray.indexOf('o2') !== -1) {
                        winAlert('Win across row 2');
                    }
                }
            }
        }
    };
    // Row3 win
    if (markedSquaresArray.indexOf('b3') !== -1) {
        if (markedSquaresArray.indexOf('i3') !== -1) {
            if (markedSquaresArray.indexOf('n3') !== -1) {
                if (markedSquaresArray.indexOf('g3') !== -1) {
                    if (markedSquaresArray.indexOf('o3') !== -1) {
                        winAlert('Win across row 3');
                    }
                }
            }
        }
    };
    // Row4 win
    if (markedSquaresArray.indexOf('b4') !== -1) {
        if (markedSquaresArray.indexOf('i4') !== -1) {
            if (markedSquaresArray.indexOf('n4') !== -1) {
                if (markedSquaresArray.indexOf('g4') !== -1) {
                    if (markedSquaresArray.indexOf('o4') !== -1) {
                        winAlert('Win across row 4');
                    }
                }
            }
        }
    };
    // Row5 win
    if (markedSquaresArray.indexOf('b5') !== -1) {
        if (markedSquaresArray.indexOf('i5') !== -1) {
            if (markedSquaresArray.indexOf('n5') !== -1) {
                if (markedSquaresArray.indexOf('g5') !== -1) {
                    if (markedSquaresArray.indexOf('o5') !== -1) {
                        winAlert('Win across row 5');
                    }
                }
            }
        }
    };

    // Check for column wins
    // ColB win
    if (markedSquaresArray.indexOf('b1') !== -1) {
        if (markedSquaresArray.indexOf('b2') !== -1) {
            if (markedSquaresArray.indexOf('b3') !== -1) {
                if (markedSquaresArray.indexOf('b4') !== -1) {
                    if (markedSquaresArray.indexOf('b5') !== -1) {
                        winAlert('Win down column B');
                    }
                }
            }
        }
    };
    // ColI win
    if (markedSquaresArray.indexOf('i1') !== -1) {
        if (markedSquaresArray.indexOf('i2') !== -1) {
            if (markedSquaresArray.indexOf('i3') !== -1) {
                if (markedSquaresArray.indexOf('i4') !== -1) {
                    if (markedSquaresArray.indexOf('i5') !== -1) {
                        winAlert('Win down column I');
                    }
                }
            }
        }
    };
    // ColN win
    if (markedSquaresArray.indexOf('n1') !== -1) {
        if (markedSquaresArray.indexOf('n2') !== -1) {
            if (markedSquaresArray.indexOf('n3') !== -1) {
                if (markedSquaresArray.indexOf('n4') !== -1) {
                    if (markedSquaresArray.indexOf('n5') !== -1) {
                        winAlert('Win down column N');
                    }
                }
            }
        }
    };
    // ColG win
    if (markedSquaresArray.indexOf('g1') !== -1) {
        if (markedSquaresArray.indexOf('g2') !== -1) {
            if (markedSquaresArray.indexOf('g3') !== -1) {
                if (markedSquaresArray.indexOf('g4') !== -1) {
                    if (markedSquaresArray.indexOf('g5') !== -1) {
                        winAlert('Win down column G');
                    }
                }
            }
        }
    };
    // ColO win
    if (markedSquaresArray.indexOf('o1') !== -1) {
        if (markedSquaresArray.indexOf('o2') !== -1) {
            if (markedSquaresArray.indexOf('o3') !== -1) {
                if (markedSquaresArray.indexOf('o4') !== -1) {
                    if (markedSquaresArray.indexOf('o5') !== -1) {
                        winAlert('Win down column O');
                    }
                }
            }
        }
    };

    // Check for diagonal wins
    // b1-o5 Diag win
    if (markedSquaresArray.indexOf('b1') !== -1) {
        if (markedSquaresArray.indexOf('i2') !== -1) {
            if (markedSquaresArray.indexOf('n3') !== -1) {
                if (markedSquaresArray.indexOf('g4') !== -1) {
                    if (markedSquaresArray.indexOf('o5') !== -1) {
                        winAlert('Win diagonally B1 to O5');
                    }
                }
            }
        }
    };
    // o1-b5 Diag win
    if (markedSquaresArray.indexOf('o1') !== -1) {
        if (markedSquaresArray.indexOf('g2') !== -1) {
            if (markedSquaresArray.indexOf('n3') !== -1) {
                if (markedSquaresArray.indexOf('i4') !== -1) {
                    if (markedSquaresArray.indexOf('b5') !== -1) {
                        winAlert('Win diagonally O1 to B5');
                    }
                }
            }
        }
    };
};

// Function that pops up an alert saying the user won.
const winAlert = (win) => {
    if (window.confirm(`${win}! Congratulations! Would you like to play again?`)) {
        clearBoard();
        appendQuips();
    };
};

// Function that integrates printing board onto a pdf

