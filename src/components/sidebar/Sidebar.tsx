import React from 'react'
import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline, IoLogoReact } from 'react-icons/io5'
import SidebarMenuItem from './SidebarMenuItem'


const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={30}/>,
        title: 'Dashboard',
        subtitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={30}/>,
        title: 'Counter',
        subtitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={30}/>,
        title: 'Pokemons',
        subtitle: 'Generación Estática'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={30}/>,
        title: 'Favoritos',
        subtitle: 'Global State'
    }
]


const Sidebar = () => {
    return (
        <>
            <div id="menu" 
            style={{width: "400px"}}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 ">

                <div id="logo" className="my-4 px-6">
                    
                    <h1 className="flex items-center text-lg md:text-2xl font-bold text-white mt-10">
                    <IoLogoReact className='mr-2'/>
                       <span>Dashboard</span> </h1>
                    <p className="text-slate-500 text-sm">Manage your activities</p>
                </div>

                <div id="profile" className="px-6 pt-10 pb-4">
                    <p className="text-slate-500">Welcome back,</p>
                    <a href="#" className="inline-flex space-x-2 items-center">
                        <span>
                             <Image className="rounded-full w-8 h-8" 
                             src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
                             alt="user avatar"
                             width={50}
                             height={50}
                             />
                        </span>
                        <span className="text-sm md:text-base font-bold">
                            Emily Montalvo
                        </span>
                    </a>
                </div>

                <div id="nav" className="w-full px-5">
                {
                    menuItems.map(menuItem => (
                        <SidebarMenuItem
                        key={menuItem.path}
                        {...menuItem}
                        />
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default Sidebar
