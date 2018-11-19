


$('#all-countries-button').click(function(){


    axios.get('https://restcountries.eu/rest/v2/all')
    .then((theThingIGetBack)=>{
    
        // console.log('THIS IS THE REPONSE',theThingIGetBack.data);

        $('#list').html("<ul id='the-ul'></ul>")

        theThingIGetBack.data.forEach((eachCountry)=>{
            $('#the-ul').append(`
            <li>
            ${eachCountry.name}
            </li>
            `
                )
        })



    
    })
    .catch((err)=>{
        console.log('THIS IS AN ERROR',err);
    })




})