import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaSignInAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = ({item}) => {

    const [isOpen, setIsOpen] = useState(true)


    return (
        <div className="cont bg-slate-300">
            <div className='flex py-8 items-center container w-4/5 mx-auto'>
            <div className="brand grow">
                <h1 className="text-3xl font-bold cursor-pointer">LOGO</h1>
            </div>
            <div className="menu md:flex grow">
                <ul className={`md:flex gap-4 bg-slate-300 p-4 duration-[2000]
                ${!isOpen ? 'top-20 ' : '-top-36'}
                absolute md:static w-full`}>
                    {
                        item.map((i, idx) => <li className={`cursor-pointer ${idx === item.length -1 ? 'flex-grow' : ''}`} key={idx}>{i}</li>)
                    }
                    <li><h1 className='font-bold text-3xl'><FaSignInAlt /></h1></li>
                </ul>
                
            </div>
            <div className="login cursor-pointer text-right">
                {
                    isOpen ? <h1 onClick={() => setIsOpen(!isOpen)} className='font-bold text-3xl lg:hidden'><GiHamburgerMenu /></h1> :  <h1 onClick={() => setIsOpen(!isOpen)} className='font-bold text-3xl lg:hidden'><ImCross /></h1>
                }
                {/* <h1 className='font-bold text-3xl lg:hidden'><GiHamburgerMenu /></h1> */}
            </div>
        </div>
        </div>
    );
};

Navbar.propTypes = {
    item: PropTypes.array
};

export default Navbar;