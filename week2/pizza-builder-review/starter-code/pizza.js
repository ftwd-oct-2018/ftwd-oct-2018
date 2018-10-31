
$('.btn-sauce, .btn-crust').removeClass('active');
$('.sauce').removeClass('sauce-white')
$('.crust').removeClass('crust-gluten-free');
$('.price li:nth-child(4)').hide();
$('.price li:last').hide();

let theActualPrice = 13;
updatePrice();


function addOrSubtractFromPrice(cost, buttonPushed){
    if(buttonPushed.hasClass('active')){
    theActualPrice += cost;
   } else{
    theActualPrice -= cost;
   }
   updatePrice();
}

function updatePrice(){
    $('strong').text('$'+ theActualPrice)
}

$('.btn').click(function(){
    $(this).toggleClass('active');
})

$('.btn-pepperonni').click(function(){
   $('.pep').toggle(200);
   $('.price li:first').toggle();
 addOrSubtractFromPrice(1, $(this));
})

$('.btn-mushrooms').click(function(){
    $('.mushroom').toggle(200);
    $('.price li:nth-child(2)').toggle();
    addOrSubtractFromPrice(1, $(this));
})

$('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle(200);
    $('.price li:nth-child(3)').toggle();
    addOrSubtractFromPrice(1, $(this));
})

$('.btn-sauce').click(function(){
   $('.sauce').toggleClass('sauce-white');
   $('.price li:nth-child(4)').toggle();
   addOrSubtractFromPrice(3, $(this));
 })

 $('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.price li:last').toggle(50);
    addOrSubtractFromPrice(5, $(this));
 })