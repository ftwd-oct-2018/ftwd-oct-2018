$(document).ready(function(){


    $('#new-task-btn').click(function(){
        let theNewTask = $('.task-input').val()

        $('#the-list').append(`
        <li>
        <div> ${theNewTask} </div>
        <button class="delete"> Delete Task</button>
        <button class="complete"> Mark As Complete Task</button>
        </li>
        `)

        $('.task-input').val('')


        $('.delete').click(function(){
           $(this).parent().remove() 
     })//end delete button click function


     $('.complete').click(function(){
        $(this).parent().find('div').addClass('strikethrough');
  })



    })//end task button click function





}) // end document ready