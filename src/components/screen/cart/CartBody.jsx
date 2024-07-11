import CartItem from '@/components/cartItem/CartItem'
import OrderSummery from '@/components/orderSummery/OrderSummery'
import React from 'react'

const CartBody = () => {
  return (
    <section className='py-28'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="">
            <h3 className='text-2xl font-semibold leading-6 text-black'>Shopping Cart</h3>
            <div className="flex flex-col">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>
          <div>
            <OrderSummery />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartBody
