

let theButton = document.querySelector('#add-item-button');

// theButton.onclick = function(){

//     let empty = document.getElementById('empty-div');
//     let theInput = document.querySelector('.theInput');
//     let whateverITyped = theInput.value;

//     let newThing = document.createElement('h2')

//     newThing.innerHTML = whateverITyped;

//     empty.appendChild(newThing);

//     theInput.value = '';



// }


let theForm = document.getElementById('theForm');

theForm.onsubmit = function(e){
    e.preventDefault()

 let empty = document.getElementById('empty-div');

 let theInput1  = document.querySelectorAll('.theInput')[0];
 let theInput2  = document.querySelectorAll('.theInput')[1];
 let newThing = document.createElement('h2');

 let result = Number(theInput1.value) + Number(theInput2.value);

 newThing.innerHTML = `${theInput1.value} plus ${theInput2.value} equals ${result}`;

 empty.appendChild(newThing);

 theInput1.value = '';
 theInput2.value = '';


}





// theButton.onclick = function(e){
//     e.preventDefault()

//  let empty = document.getElementById('empty-div');

//  let theInput1  = document.querySelectorAll('.theInput')[0];
//  let theInput2  = document.querySelectorAll('.theInput')[1];
//  let newThing = document.createElement('h2');

//  let result = Number(theInput1.value) + Number(theInput2.value);

//  newThing.innerHTML = `${theInput1.value} plus ${theInput2.value} equals ${result}`;

//  empty.appendChild(newThing);

//  theInput1.value = '';
//  theInput2.value = '';


// }


let buttons = document.getElementsByClassName('btn');

for(let i = 0; i < buttons.length; i++){

    buttons[i].onmouseover = function(event){

        console.log(event.currentTarget)

        event.currentTarget.classList += " small-blue";
        
    }

}


for(let i = 0; i < buttons.length; i++){

    buttons[i].onmouseout = function(event){


        event.currentTarget.classList -= " small-blue";
        
    }

}






