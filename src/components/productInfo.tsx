import React from 'react'

type Props = {
    title: string;
    brand: string;
    category: string;
    price: number;
    stock: number;
    rating: number;
    desc: string;
}

const ProductInfo = (props: Props) => {
    const { title, brand, category, price, stock,rating,desc } = props
  return (
    <div>
        <h1 className="text-3xl font-bold">{brand} {title}</h1>
        <p className="text-sm text-gray-500">{category}</p>
        <div className='flex mt-2'>
            {Array.from({ length: rating }).map((_, i) => (
                <div key={i} >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
            ))}
           

        </div>
        <div className='mt-4'>
            <h2 className="text-2xl font-bold">${price}</h2>
            <p className="text-sm text-gray-500">In Stock: {stock}</p>
        </div>
        <div className='mt-4'>
            <p>{desc}</p>
        </div>  
    </div>
  )
}

export default ProductInfo