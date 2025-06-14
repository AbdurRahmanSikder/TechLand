import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppCotext'
import toast from 'react-hot-toast'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const { axios, user, setUser, navigate, setShowUserLogin, searchQuery, setSearchQuery, getCartCount } = useAppContext();
    const Logout = async () => {
        try {
            const { data } = await axios.get('/api/user/logout');

            if (data.success) {
                setUser(null);
                navigate('/');
                toast.success(data.message);
            }
            else {
                toast.error(data.message);
            }
        }
        catch (error) {
            toast.error(error.message);
        }
    }
    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate("/products");
            console.log(searchQuery);
        }
    }, [searchQuery])
    return (
        <nav className="flex flex-wrap items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-primary relative">

            {/* Logo + Search Bar */}
            <div className="flex items-center gap-2 sm:gap-4 w-full lg:w-auto flex-1">
                {/* Logo */}
                <NavLink to="/" onClick={() => setOpen(false)} className="shrink-0">
                    <img
                        className=" h-6 md:h-8 w-auto object-contain"
                        src={assets.logo}
                        alt="Logo"
                    />
                </NavLink>

                {/* Search bar */}
                <div className="flex items-center text-sm gap-2 border rounded-sm px-3 bg-white w-full max-w-md flex-grow mr-4">
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        placeholder="Search products"
                    />
                    <img src={assets.search_icon} alt="search" className="w-4 h-4" />
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 text-white ml-8">
                <NavLink to="/seller" className="border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-300">Seller Dashboard</NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">All products</NavLink>
                <NavLink to="/" className="hidden xl:flex">Contact</NavLink>

                <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} className='w-6 invert brightness-0' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>

                {!user ? (
                    <button
                        onClick={() => setShowUserLogin(true)}
                        className="cursor-pointer px-8 py-2 bg-primary-dull hover:bg-gray-800 transition text-white rounded-full"
                    >
                        Login
                    </button>
                ) : (
                    <div className='relative group'>
                        <img src={assets.profile_icon} className='w-10' />
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-primary shadow border border-primary-dull py-2.5 w-28 rounded-md text-sm z-40'>
                            <li onClick={() => navigate("my-orders")} className='p-1.5 pl-3 hover:bg-primary-dull cursor-pointer'>My Orders</li>
                            <li onClick={Logout} className='p-1.5 pl-3 hover:bg-primary-dull cursor-pointer'>Logout</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Mobile Icons */}
            <div className='flex items-center gap-6 lg:hidden sm:mt-0'>
                <div onClick={() => navigate('/cart')} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} className='w-6 invert brightness-0' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>
                <button onClick={() => setOpen(!open)} aria-label="Menu">
                    <img src={assets.menu_icon} className='w-6 invert brightness-0' alt='menu' />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-40 flex">
                    <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/products" onClick={() => setOpen(false)}>All products</NavLink>
                    <NavLink to="/seller-panel" onClick={() => setOpen(false)}>Seller Panel</NavLink>
                    {user && <NavLink to="/my-orders" onClick={() => setOpen(false)}>My orders</NavLink>}
                    <NavLink to="/" onClick={() => setOpen(false)}>Contact</NavLink>

                    {!user ? (
                        <button
                            onClick={() => {
                                setOpen(false);
                                setShowUserLogin(true);
                            }}
                            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={Logout}
                            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar