import CartCounter from "@/shopping-cart/components/CartCounter";



export const metadata = {
 title: 'Shopping Cart',
 description: 'A simple counter',
};

const CounterPage = () => {

  

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos en el carrito</span>
      <CartCounter value={10}/>
    </div>
  )
}

export default CounterPage;