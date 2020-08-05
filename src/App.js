import React from 'react';
// import React, { useState } from 'react';
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
    };

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
        // If boardGenerated variable is set to false, that means the board hasn't been generated yet. 
        if (!boardGenerated) {
            // Then we switch to true and fill the board normally.
            boardGenerated = !boardGenerated;
            appendQuips();
        }

        // If boardGenerated is already true, we need to clear and then fill the board.
        else {

            // This is an array
            const allSquares = document.getElementsByTagName('td');

            // Loop through the array and clear the innerHTML of each square
            for (let i = 0; i < allSquares.length - 1; ++i) {
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
        let selectedSquare = document.getElementById(`${square}`);

        // Adding the class of 'marked' to the selected square
        selectedSquare.classList.toggle('marked');

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

        // --------------------------------------------------------------
        // --------------------------------------------------------------

        // If B1 is in there look for either I1, I2, or B2
        if (markedSquaresArray.indexOf('b1') !== -1) {
            if (markedSquaresArray.indexOf('i1') !== -1) {
                if (markedSquaresArray.indexOf('n1') !== -1) {
                    if (markedSquaresArray.indexOf('g1') !== -1) {
                        if (markedSquaresArray.indexOf('o1') !== -1) {
                            console.log('WINNER!')
                        }
                    }
                }

            }
        }
    };
    // Integrate printing to a pdf


    return (
        <div>
            <h1 className='title'>Real Friends, Fake Doctors</h1>
            <hr />
            <h2 className='title subtitle'>Scrubs Rewatch Show with Zach and Donald
            <div className='title subtitle' style={{ fontSize: '18px' }}>The BINGO Sheet!</div>
            </h2>

            <table className='table'>
                <tbody>
                    <tr id='header'>
                        <th> B </th>
                        <th> I </th>
                        <th> N </th>
                        <th> G </th>
                        <th> O </th>
                    </tr>
                    <tr id='row1'>
                        <td className='b1' id="sq0" onClick={() => selectSquare('sq0')}> </td>
                        <td className='i1' id="sq1" onClick={() => selectSquare('sq1')}> </td>
                        <td className='n1' id="sq2" onClick={() => selectSquare('sq2')}> </td>
                        <td className='g1' id="sq3" onClick={() => selectSquare('sq3')}> </td>
                        <td className='o1' id="sq4" onClick={() => selectSquare('sq4')}> </td>
                    </tr>
                    <tr id='row2'>
                        <td className='b2' id="sq5" onClick={() => selectSquare('sq5')}> </td>
                        <td className='i2' id="sq6" onClick={() => selectSquare('sq6')}> </td>
                        <td className='n2' id="sq7" onClick={() => selectSquare('sq7')}> </td>
                        <td className='g2' id="sq8" onClick={() => selectSquare('sq8')}> </td>
                        <td className='o2' id="sq9" onClick={() => selectSquare('sq9')}> </td>
                    </tr>
                    <tr id='row3'>
                        <td className='b3' id="sq10" onClick={() => selectSquare('sq10')}> </td>
                        <td className='i3' id="sq11" onClick={() => selectSquare('sq11')}> </td>
                        <td className='n3 marked' id="freeSpace">FREE SPACE</td>
                        <td className='g3' id="sq12" onClick={() => selectSquare('sq12')}> </td>
                        <td className='o3' id="sq13" onClick={() => selectSquare('sq13')}> </td>
                    </tr>
                    <tr id='row4'>
                        <td className='b4' id="sq14" onClick={() => selectSquare('sq14')}> </td>
                        <td className='i4' id="sq15" onClick={() => selectSquare('sq15')}> </td>
                        <td className='n4' id="sq16" onClick={() => selectSquare('sq16')}> </td>
                        <td className='g4' id="sq17" onClick={() => selectSquare('sq17')}> </td>
                        <td className='o4' id="sq18" onClick={() => selectSquare('sq18')}> </td>
                    </tr>
                    <tr id='row5'>
                        <td className='b5' id="sq19" onClick={() => selectSquare('sq19')}> </td>
                        <td className='i5' id="sq20" onClick={() => selectSquare('sq20')}> </td>
                        <td className='n5' id="sq21" onClick={() => selectSquare('sq21')}> </td>
                        <td className='g5' id="sq22" onClick={() => selectSquare('sq22')}> </td>
                        <td className='o5' id="sq23" onClick={() => selectSquare('sq23')}> </td>
                    </tr>

                </tbody>

            </table>

            <button id='button' onClick={() => buttonClick()}> GENERATE NEW BINGO BOARD! </button>

        </div>
    );
};

export default App;