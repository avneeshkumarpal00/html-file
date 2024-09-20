import React from 'react'

export default function Product(props) {
 


  }
  return (
    <div className='row'>
        <div className='col-6'>
            <h2>{props.product.name}<span class="badge text-bg-secondary">{props.product.price}</span></h2>

        </div>
        <div className="coll-4">
            
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">-</button>
  
  <button type="button" class="btn btn-warning"></button>
  {props.product.quantity}
  <button type="button" class="btn btn-success" onClick={() => {props.incrementQuantity(props.i)}}>+</button>
  
</div>
        </div>
        <div className="col-4">
            {props.product.quantity*props.price}
        </div>
      
    </div>
  )
}
