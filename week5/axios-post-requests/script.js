


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
const debtFromHTML = $('#debt').val();


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