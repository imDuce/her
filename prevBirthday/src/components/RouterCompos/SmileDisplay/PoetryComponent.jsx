import React, { useEffect } from 'react';
import '../../RouterCompos/style.css'

function PoetryComponent() {

    useEffect(()=>{

        consoleText(['In her smile,', 'a world of light unfurls,', 'A beacon of joy,',
        ' where sadness swirls.', 'Each curve,', 'a tale of laughter\'s embrace,', 'In its glow,', 'troubles find no place.',
        
        'In her smile,', ' the moonlight finds its glow,', 'A soft enchantment,',
        ' casting shadows low.', 'With each gentle curve,', ' the night surrenders,', 'To the radiance ', ' that her smile engenders.',
    
        'In her smile,', 'the universe unfolds,', 'A tapestry of innocence,',
        ' forever told.', 'In the midst of chaos,', ' it gracefully blooms,', 'A tranquil oasis,', ' dispelling glooms.',' Like petals',' unfurling in spring\'s embrace,',
        'It brings solace, ',' serenity and grace...'
    ],
        'text', ['gray', 'rebeccapurple', 'black', 'gray', 'rebeccapurple', 'gray', 'rebeccapurple', 'gray', 'rebeccapurple'])


    },[]);


    
    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id);
        target.setAttribute('style', `color : ${colors[0]}`)
        window.setInterval(function () {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function () {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', `color : ${colors[0]}`)
                    // target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 800)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 90)
        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;

            } else {
                con.className = 'console-underscore'

                visible = true;
            }
        }, 200)
    }




    return (
        <>
            <div className='bodyOfPoetry'>
                <div className='console-container'><span id='text'></span>
                    <div className='console-underscore' id='console'>&#95;
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default PoetryComponent
