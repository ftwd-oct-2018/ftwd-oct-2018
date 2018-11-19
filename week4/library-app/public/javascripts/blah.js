


console.log('this is the blah page')


$('#thebutton').click(() => {
  axios.get('/api/books')
  .then((response)=>{
    console.log(response)

    response.data.forEach((eachBook)=>{

    
      $('#list').append(`<div> ${eachBook.title} </div>`)

    })


  })
  .catch((err)=>{
    console.log(err)
  })
})