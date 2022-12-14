import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../Image/profile7.jpg'
import AIK from '../../File/ASIFIBNEKAMAL.pdf'

const Nav = () => {
    return (
        <div>
            <div className="navbar py-5 bg-base-200">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-3xl text-white">Asif Ibne Kamal</Link>
                </div>
                <div className="hidden lg:flex gap-2">
                    <div className="form-control">
                        <Link to='/' className='btn btn-primary mr-5'>Home</Link>
                    </div>
                    <div className="form-control">
                        <Link to='/about' className='btn btn-primary mr-5'>About Me</Link>
                    </div>
                    <div className="form-control">
                        <Link to='/blog' className='btn btn-primary mr-5'>Blog</Link>
                    </div>
                    <div className="form-control">
                        <button className='btn btn-primary mr-5'><a href={AIK} download={AIK}>Download My Resume</a></button>
                    </div>
                    <div className="form-control">
                        <button className='btn btn-primary mr-5'><a href="https://form.jotform.com/223433927920457" target="_blank" rel="noopener noreferrer">Contact</a></button>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li> <Link to='/' className='btn btn-primary mr-5'>Home</Link></li>
                        <li> <button className='btn btn-primary mr-5'><a href={AIK} download={AIK}>Download My Resume</a></button></li>
                        <li> <Link to='/blog' className='btn btn-primary mr-5'>Blog</Link></li>
                        <li> <Link to='/about' className='btn btn-primary mr-5'>About Me</Link></li>
                        <li> <button className='btn btn-primary mr-5'><a href="https://form.jotform.com/223433927920457" target="_blank" rel="noopener noreferrer">Contact</a></button>
                        </li>
                    </ul>
                </div>
                <div className="mr-5">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={image} alt='' />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Nav;