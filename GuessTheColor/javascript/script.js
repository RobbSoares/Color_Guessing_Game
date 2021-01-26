
const buttons = document.querySelectorAll('.colour_button')
const heading = document.querySelector('#colour_value')
const answerMessage = document.querySelector('#answer')
const resetButton = document.querySelector('#reset')
const bodyTag = document.querySelector('body')

function setButtonColour(buttons, red, green, blue){
    buttons.setAttribute('style', 'background-color: rgb('+ red + ', '+ green +', '+ blue +')')
}

function makeColourValue(){
    return Math.round(Math.random()*255);
}

function startGame(){
    var answerButton = Math.round(Math.random() * (buttons.length - 1))

    for(let i = 0; i <= 5; i++){
        let red = makeColourValue();
        let green = makeColourValue();
        let blue = makeColourValue();

        setButtonColour(buttons[i], red, green, blue);

        if(i === answerButton){
            heading.innerHTML = `${red}, ${green}, ${blue}`
        }

        buttons[i].addEventListener('click', function() {
            if(buttons[i] === buttons[answerButton]){
                answerMessage.innerHTML = 'You are correct!'
                bodyTag.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
            } else {
                answer.innerHTML = `Wrong answer! Guess again!`
            }
        })
    }

}

resetButton.addEventListener('click', () => {
    window.location.reload()
})

answer.innerHTML = ''
startGame()

