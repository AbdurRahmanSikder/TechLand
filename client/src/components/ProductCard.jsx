import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppCotext';

const ProductCard = ({ product }) => {
    const [count, setCount] = React.useState(0);
    const {
        currency,
        cartItems,
        addToCart,
        removeFromCart,
        navigate
    } = useAppContext();

    return product && (
        <div
            onClick={() => {
                navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                scrollTo(0, 0);
            }}
            className="border border-gray-300  px-3 py-2 bg-white w-full max-w-[180px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[260px] flex flex-col hover:shadow-md transition"
        >
            {/* Image block */}
            <div className="group flex items-center justify-center px-2 h-[120px] sm:h-[140px] md:h-[160px]">
                <img
                    className="group-hover:scale-105 transition-transform h-full object-contain"
                    src={product.image[0]}
                    alt={product.name}
                />
            </div>

            {/* Info */}
            <div className="text-gray-600 text-sm flex flex-col justify-between flex-1 mt-2">
                <div>
            
                    <p className="text-gray-800 font-medium text-base sm:text-lg truncate w-full min-h-[48px]">
                        {product.name}
                    </p>

                    {/* Ratings */}
                    <div className="flex items-center gap-1 mt-1 flex-wrap">
                        {Array(5).fill('').map((_, i) => (
                            <img
                                key={i}
                                className="w-3 sm:w-4"
                                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                                alt="star"
                            />
                        ))}
                        <p className="text-xs text-gray-500">(4)</p>
                    </div>
                </div>

                {/* Price + Button */}
                <div className="pt-3 flex items-end justify-between gap-2 flex-wrap">
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-primary break-words leading-snug">
                        {product.offerPrice}{currency}
                    </p>

                    <div onClick={(e) => e.stopPropagation()} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button
                                className="flex items-center justify-center gap-1 border border-primary/40 text-xs sm:text-sm w-[64px] sm:w-[80px] h-[30px] sm:h-[34px] rounded font-medium"
                                onClick={() => addToCart(product._id)}
                            >
                                <img src={assets.cart_icon} className="w-3 sm:w-4 invert brightness-1" />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 w-[64px] sm:w-[80px] h-[30px] sm:h-[34px] bg-primary/25 rounded select-none">
                                <button
                                    onClick={() => setCount(() => removeFromCart(product._id))}
                                    className="cursor-pointer px-1 sm:px-2 text-sm"
                                >-</button>
                                <span className="w-5 text-center text-sm">{cartItems[product._id]}</span>
                                <button
                                    onClick={() => setCount(() => addToCart(product._id))}
                                    className="cursor-pointer px-1 sm:px-2 text-sm"
                                >+</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
