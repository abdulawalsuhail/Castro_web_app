import React from 'react';

const Navbar = () => {
    return (
        <div>
            {/* <div class="navbar pt-7 bg-slate-400">
                <div class="flex-1 pl-40">
                    <a class="btn btn-ghost normal-case text-3xl">daisyUI</a>
                </div>
                <div class="flex-none pr-40">
                    <div className='pr-5'>
                        <h1 className='text-3xl'>Phone</h1>
                        <p>98 9875 5968 54</p>
                    </div>
                    <div className='pl-5'>
                        <h1 className='text-3xl'>Address</h1>
                        <p>your address goes here</p>
                    </div>
                </div>
            </div> */}
            {/* upper nav access */}

            <div class="navbar bg-orange-100">
                <div class="navbar-start">
                    <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li tabindex="0">
                        <a>
                        Service
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li tabindex="0">
                        <a>
                        Project
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li tabindex="0">
                        <a>
                        Blog
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Contact</a></li>
                    </ul>
                    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    
                </div>
                <div class="navbar-center hidden  lg:flex">
                    <ul class="menu menu-horizontal pr-96">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li tabindex="0">
                        <a>
                        Service
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li tabindex="0">
                        <a>
                        Project
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li tabindex="0">
                        <a>
                        Blog
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Contact</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;