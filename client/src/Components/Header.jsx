import React from 'react'
import { Navbar, TextInput, Button } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
function Header() {
    const navigate=useNavigate()
    const signinBtn =()=>{
navigate('/Signin')
    }
    return (
        <Navbar className='border-b-2'>
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-1 bg-gradient-to-l from-orange-300 via-orange-200
     to-yellow-100 rounded-lg dark:text-white'>
                    B
                </span>
                Blog
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />

            </form>
            <Button className='w-12 h-10 lg:hidden ' color='grey' pill >
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' pill>
                    <FaMoon />
                </Button>
                <Button gradientDuoTone='purpleToBlue' onClick={signinBtn}>
                    Sign In
                </Button>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to='/About'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to='/Projects'>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
