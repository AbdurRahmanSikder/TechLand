import React from 'react'
import { assets, categories } from '../assets/assets'
import { useAppContext } from '../context/AppCotext'

const Categories = () => {
    const { navigate } = useAppContext();

    return (
        <div className='mt-16'>
            <div className='text-2xl md:text-3xl font-medium'>Categories</div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>
                {
                    categories.map((category, index) => (
                        <div
                            key={index}
                            className='group cursor-pointer p-4 rounded-lg flex flex-col items-center justify-between h-44'
                            style={{ backgroundColor: category.bgColor }}
                            onClick={() => {
                                navigate(`/products/${category.path.toLowerCase()}`);
                                scrollTo(0, 0);
                            }}
                        >
                            <img
                                src={category.image}
                                className='group-hover:scale-110 transition max-h-20 object-contain'
                                alt={category.text}
                            />
                            <p className='text-sm font-medium text-center mt-2'>{category.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
