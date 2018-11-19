


function fetchAll(){
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
        console.log(response.data);

        $('#list-of-characters').html("<ul id='list'></ul>")
        response.data.forEach((eachCharacter)=>{

            $('#list').append(`
            <li>
           name:  ${eachCharacter.name}
           weapon:  ${eachCharacter.weapon}
            </li>
            <br>
            `)
        })

    })
    .catch((err)=>{
        console.log(err)
    })
}




$('#fetch').click(fetchAll)




$('#add-new').submit(function(event){

    event.preventDefault();

const nameFromHTML = $('#theName').val();
const occupationFromHTML = $('#theOccupation').val();
const weaponFromHTML = $('#theWeapon').val();

// $('#debt:checked').val() looks only at things with an id of 'debt' that also are checked (like a checkbox )
// so there will either be one of those things in existence when we click or, if we didn't check the box
// then there wont be any things on the page with the id of 'checked' and 'checked'=true (this is what happens when you check a checkbox)
// therefore $('#debt:checked').val() will either be the value we gave it in the html, or it will be undefined if there are no checked things with that id
const debtFromHTML = $('#debt:checked').val()? true : false
// so here, we can use a fancy ternary statement to say 'if the thing exists, equal this variable to true, else, equal it to false

console.log(debtFromHTML)


    axios.post('https://ih-crud-api.herokuapp.com/characters', {
        name: nameFromHTML,
        occupation: occupationFromHTML, 
        weapon: weaponFromHTML, 
        debt: debtFromHTML
    })

    .then((result)=>{
        console.log(result);
        fetchAll();
        // calling the other function to show the new character on the list after we add it to the api
    })
    .catch((err)=>{
        console.log(err)
    })


})