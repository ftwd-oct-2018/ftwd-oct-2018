


window.onload = function(){


let calculateButton = document.getElementById('calc');

calculateButton.onclick = function(){
  let productPrices = document.getElementsByClassName('product-price');

    let fullTotal = 0;

    for(let i = 0; i < productPrices.length; i++){
      let singleProductPrice = productPrices[i].innerHTML.substr(1)

      let singleProductQuantity = document.getElementsByClassName('the-quantity')[i].value

      let singleProductTotal = (singleProductPrice * singleProductQuantity).toFixed(2);

      let individualProductTotalDiv = document.getElementsByClassName('product-total-price')[i]
      individualProductTotalDiv.innerHTML = '$' + singleProductTotal
      fullTotal += Number(singleProductTotal)
    }

    

    document.getElementById('actual-total').innerHTML = "$"+fullTotal.toFixed(2);


}


let deleteButtons = document.getElementsByClassName('btn-delete');
  for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick = function(e){
      e.target.parentElement.remove()
    }
  }



    document.getElementById('create').onclick = function(){

      let newProductName = document.getElementById('new-product-name').value;
      let newProductPrice = document.getElementById('new-product-price').value;

      if(!newProductPrice || !newProductName){
        return
      }


      newProductPrice = Number(newProductPrice).toFixed(2);

      console.log(newProductName, newProductPrice )
      
      let newThing = document.createElement('div')
      newThing.className = "row";

      newThing.innerHTML = `
              <span class="product-name">${newProductName}</span>
              <span class="product-price">$${newProductPrice}</span>
              <div>
                <label>QTY</label>
                <input class="the-quantity" type="number">
              </div>
              <span class="product-total-price">$0.00</span>
              <button class="btn btn-delete">Delete</button>
      `

        document.getElementById('master-div').appendChild(newThing);

        document.getElementById('new-product-name').value = "";
        document.getElementById('new-product-price').value = "";

        newThing.getElementsByClassName('btn-delete')[0].onclick = function(e){
          e.target.parentElement.remove()
        }


    }








  }// end window onload