'use client'

import { NextPage } from 'next'
import dynamic from 'next/dynamic';

const DynamicProductos = dynamic(() => import('../components/ProductosPage'));
const DynamicButton = dynamic(() => import('../components/FloatingCartButton'));

const Womanline: NextPage = () => {
  return <>
    <DynamicProductos />
  <DynamicButton /></>
}

export default Womanline;