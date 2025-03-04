import React, { useEffect } from 'react';
import '../style.css';
import cover from './cover9.jpg'

function CardUI() {


    var i = 0;
    var txt1 = "                                     As the cosmos applauds this beautiful journey of yours,  <<     your artistic soul continues to shine bright like the stars above. <<<         May your adventurous spirit lead you to new heights and exciting journeys ahead.                             > With every pedal on our cycling adventures,  <<          may you feel the wind in your hair and the joy in your heart. <<                           As we trek through life's beautiful landscapes and knit together precious memories,        may the stars whisper to you; igniting galaxies of inspiration within.                > Here's to a birthday filled with bliss, serenity and endless possibilities.                 <<<< Cheers to you, Sharvari, a true artist on life's canvas!";
    var speed = 160;
    function typeWriter() {
        if (i < txt1.length) {
            if (txt1.charAt(i) == '<')
                document.getElementById("text1").innerHTML += '</br>'
            else if (txt1.charAt(i) == '>')
                document.getElementById("text1").innerHTML = ''

            else
                document.getElementById("text1").innerHTML += txt1.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    useEffect(() => {
        typeWriter();
    }, []);

    return (
        <div className="bdy">

            <div className="envelope">
            </div>

            <div className="card">
                <div className="back"></div>
                <div className="front">
                    <div className="f-box">
                        <img src={cover} alt="eee" id='cover' />
                    </div>
                </div>



                <div className="container">

                    <p id="text1"></p>

                </div>
            </div>

        </div>
    );
}

export default CardUI
