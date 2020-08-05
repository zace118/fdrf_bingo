import React from 'react';
import './App.css';

function App() {

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
        'Donald finishes the in 30 seconds exactly',
        'Donald finishes the recap in under 30 seconds',
        'Donald finishes the recap in over 30 seconds',
        'Weed talk',
        '"C\'mon buddy."',
        '"But _____ always crushes it."',
        'Bill accused of being "freaky"',
        '"Whatcha tryina get into Adeosun??',
        'Donald references hip-hop or rap',
        'Someone forgets filming a scene',
        'Donald complains about his IG following',
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
    let markedSquares = [];
    let boardGenerated = false;

    // While loop that accesses a random quip and then pushes that random quip into the newBank variable
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
    }

    // For loop that appends the quips into the HTML
    const appendQuips = () => {
        const quipsArray = bankCreator();
        console.log(quipsArray)
        for (let i = 0; i < 24; ++i) {
            const newBankQuip = quipsArray[i];
            document.getElementById(`sq${i}`).innerHTML = newBankQuip;
        }
    }

    // Function that controls the logic on the button click
    const buttonClick = () => {
        // If boardGenerated variable is set to false, that means the board hasn't been generated yet. 
        if (!boardGenerated) {
            // Then we switch to true and fill the board normally.
            boardGenerated = !boardGenerated;
            appendQuips();
        }

        // If boardGenerated is already true, we need to clear and then fill the board.
        else {
            // This is an array
            const squares = document.getElementsByTagName('td');



            // // Loop through the array and clear the innerHTML of each square
            for (let i = 0; i < squares.length - 1; ++i) {
                const square = document.getElementById(`sq${i}`);
                console.log(square);
                square.innerHTML = '';
            };

            appendQuips();

        }

    };


    // Click to check quip off board
    const selectSquare = square => {
        // Setting the markedSquare variable to the parameter given
        let markedSquare = document.getElementById(`${square}`);

        // Adding the class of 'marked' to the selected square
        markedSquare.classList.toggle('marked');

        // checkForWinner();
    }

    // Check for a win by running an if statement based on the class of 
    function checkForWinner() {

    }

    // Integrate printing to a pdf


    return (
        <div>
            <h1 className='title'>Real Friends, Fake Doctors</h1>
            <hr />
            <h2 className='title subtitle'>Scrubs Rewatch Show with Zach and Donald
            <h3 className='title subtitle'>The BINGO Sheet!</h3>
            </h2>

            <table className='table'>
                <tr id='header'>
                    <th> B </th>
                    <th> I </th>
                    <th> N </th>
                    <th> G </th>
                    <th> O </th>
                </tr>
                <tr id='row1'>
                    <td id="sq0" onClick={() => selectSquare('sq0')}> </td>
                    <td id="sq1" onClick={() => selectSquare('sq1')}> </td>
                    <td id="sq2" onClick={() => selectSquare('sq2')}> </td>
                    <td id="sq3" onClick={() => selectSquare('sq3')}> </td>
                    <td id="sq4" onClick={() => selectSquare('sq4')}> </td>
                </tr>
                <tr id='row2'>
                    <td id="sq5" onClick={() => selectSquare('sq5')}> </td>
                    <td id="sq6" onClick={() => selectSquare('sq6')}> </td>
                    <td id="sq7" onClick={() => selectSquare('sq7')}> </td>
                    <td id="sq8" onClick={() => selectSquare('sq8')}> </td>
                    <td id="sq9" onClick={() => selectSquare('sq9')}> </td>
                </tr>
                <tr id='row3'>
                    <td id="sq10" onClick={() => selectSquare('sq10')}> </td>
                    <td id="sq11" onClick={() => selectSquare('sq11')}> </td>
                    <td class='marked' id="freeSpace">FREE SPACE</td>
                    <td id="sq12" onClick={() => selectSquare('sq12')}> </td>
                    <td id="sq13" onClick={() => selectSquare('sq13')}> </td>
                </tr>
                <tr id='row4'>
                    <td id="sq14" onClick={() => selectSquare('sq14')}> </td>
                    <td id="sq15" onClick={() => selectSquare('sq15')}> </td>
                    <td id="sq16" onClick={() => selectSquare('sq16')}> </td>
                    <td id="sq17" onClick={() => selectSquare('sq17')}> </td>
                    <td id="sq18" onClick={() => selectSquare('sq18')}> </td>
                </tr>
                <tr id='row5'>
                    <td id="sq19" onClick={() => selectSquare('sq19')}> </td>
                    <td id="sq20" onClick={() => selectSquare('sq20')}> </td>
                    <td id="sq21" onClick={() => selectSquare('sq21')}> </td>
                    <td id="sq22" onClick={() => selectSquare('sq22')}> </td>
                    <td id="sq23" onClick={() => selectSquare('sq23')}> </td>
                </tr>

            </table>

            <button id='button' onClick={() => buttonClick()}> GENERATE NEW BINGO BOARD! </button>

        </div>
    );
}

export default App;
