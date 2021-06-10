var textLines = []

//Getting the text file created using image processing from Python
fetch('../python/as.txt').then(response => response.text()).then(text => {

    //Getting all the indices of new lines (text comes as one string)
    var newLineIndices = [0]
    for (let i = 0; i < text.length; i++){
        if (text[i] == '\n'){
            newLineIndices.push(i)
        }
    }

    //Creating a 2D array with each line of text broken up into characters
    var tempArr = [];
    var lines = []; //Becomes an array with arrays for each line that have each character in that line
    for (let i = 1; i < newLineIndices.length; i++){ //Looping through the line break index array (starting from 1 because first element is 0)
        for (let k = newLineIndices[i - 1]; k < newLineIndices[i]; k++){ //Looping from the previous index in line break index to next index
            tempArr.push(text[k]) //pushing the characters to the temporary array
        }

        lines.push(tempArr); //Once a line is completed, pushed to the lines array
        tempArr = [];// Re-intialize temporary array
    }


    const black = '🖤';
    const white = '🤍';

    //Changing white space and @'s to black and white hearts (could've been done earlier but wanted to break up code for simplicity)
    for (let i = 0; i < lines.length; i++){
        for (let k = 0; k < lines[i].length; k++){
            if (lines[i][k] == ' '){
                lines[i][k] = white;
            }else if (lines[i][k] == '@'){
                lines[i][k] = black;
            }
        }
    }

    //Making an array of strings with characters joined into a single string for each line
    var strings = []

    for (let i = 0; i < lines.length; i++){
        strings.push(lines[i].join(''))
    }

    
    
    

    const adult = document.getElementById('adult'); //div that will hold the text


    var tempString = '' //temp string set up so that it seems as though it is printing out
    var index = 0;

    //Function that will be called on button press
    const adultSwim = () => {
        window.scrollTo(0,document.getElementById('adult').clientHeight)
        var interval = setInterval(()=>{ //Interval so that it happens gradually
            tempString = `<p class="para">${strings[index]}</p>`
            index++
        
            adult.innerHTML += tempString; //Temporary string is added with the first line, on the next call the next line is added to the first line that is already there (repeats). each line is a paragraph
            tempString = '' //temp string re-initialized
    
            if (index == strings.length){ //Once the index reaches the strings length, stop the repeating
                clearInterval(interval)
            }
        }, 200)//200 ms between each repetition
    }

    //On button click, prints out
    const button = document.querySelector('.adult-swim');
    button.addEventListener('click', adultSwim)
    
    
    
    
});

//Just some button functionality stuff 
const displayBtn = document.querySelector('.display');
const adultBtn = document.querySelector('.adult-swim');

const headings = [document.querySelector('.head2'), document.querySelector('.head3'), document.querySelector('.head4')]
const buttonTexts = ['Cool?', 'Good for you?', 'Non-AS']
let displayIndex = 0;

const displayHeading = () =>{
    
    if (displayIndex < headings.length - 1){
        headings[displayIndex].style.display = 'block';
        displayBtn.textContent = buttonTexts[displayIndex];
        
        
    }else{
        headings[displayIndex].style.display = 'block';
        displayBtn.style.display = 'none';
        adultBtn.style.display = 'block';

    }

    displayIndex++

    console.log(displayIndex)
    
}

