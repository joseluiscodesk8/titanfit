import { NextPage } from 'next'
import dynamic from 'next/dynamic';

const DynamicCartPage = dynamic(() => import('../components/CartDetails'))

const Cart: NextPage = () => {
  return <DynamicCartPage />
} 

export default Cart;