import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppCotext'
import ProductCard from '../components/ProductCard';
import { assets } from '../assets/assets';
const AllProduct = () => {

    const { products, searchQuery, setSearchQuery } = useAppContext();
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [sortType, setSortType] = useState([]);


    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else setCategory(prev => [...prev, e.target.value])
    }
    const applyFilter = () => {
        let productsCopy = products.slice();
        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) => {
                return category.includes(item.category);
            });
        }
        setFilterProducts(productsCopy);
    }

    const sortProduct = () => {
        let fpCopy = filterProducts.slice();

        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;

        }
    }
    useEffect(() => {
        setFilterProducts(products);
    }, [])
    useEffect(() => {
        applyFilter();
    }, [category, sortType])
    useEffect(() => {
        sortProduct();
    }, [sortType])

    useEffect(() => {
        if (searchQuery.length > 0) {
            const searchProduct = (products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))
            setFilterProducts(searchProduct);
        }
        else {
            setFilterProducts(products);
        }
    }, [products, searchQuery])
    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t '>
            {/* Category */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
                </p>

                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'mouse'} onChange={toggleCategory} />Mouse
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'monitor'} onChange={toggleCategory} />Monitor
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'keyboard'} onChange={toggleCategory} />Keyboard
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'laptop'} onChange={toggleCategory} />Laptop
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Graphics card'} onChange={toggleCategory} />Graphics Card
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'speaker'} onChange={toggleCategory} />Speaker
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'ram'} onChange={toggleCategory} />Ram
                        </p>
                    </div>
                </div>

            </div>

            {/* Right side */}
            <div className='flex flex-col'>
                <div>
                    <div className='min-w-full flex justify-between text-base sm:text-2xl mb-4'>
                        <p className='text-2xl font-medium uppercase'>All Products</p>
                        <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-black text-sm px-2'>
                            <option value='relevent'>Sort by: Relevent</option>
                            <option value='low-high'>Sort by: Low to High</option>
                            <option value='high-low'>Sort by: High to Low</option>
                        </select>
                    </div>
                </div>
                <div className='grid auto-rows-fr grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-4'>
                    {

                        filterProducts.filter((product) => product.inStock).map((product, index) => (<ProductCard key={index} product={product} />
                        ))}
                </div>
            </div>
        </div >
    )
}

export default AllProduct