
//import React from 'react';
import Logo from '../assets/logo.png';
import { AiFillDollarCircle } from 'react-icons/ai';

const Nav = ({ coin }: { coin: number }) => {

    //const [coin, setCoin] = useState(5000)

    return (
        <nav className="bg-green-50  border-b border-base-200 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-16 md:w-20 object-contain"
                        />
                    </div>

                    {/* Navigation */}
                    <ul className="hidden md:flex items-center gap-8 font-medium text-gray-600">
                        <li>
                            <a
                                href="#"
                                className="hover:text-green-600 transition-colors duration-200"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-green-600 transition-colors duration-200"
                            >
                                Fixture
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-green-600 transition-colors duration-200"
                            >
                                Teams
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-green-600 transition-colors duration-200"
                            >
                                Schedules
                            </a>
                        </li>
                    </ul>
                    <h2 className='flex font-bold gap-1 items-center '>Coin: {coin}<AiFillDollarCircle className='text-yellow-400 size-8' /></h2>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

