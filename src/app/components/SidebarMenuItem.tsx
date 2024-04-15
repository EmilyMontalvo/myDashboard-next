'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import style from './SidebarItem.module.css'
import Link from 'next/link';

interface Props {
    path: string;
    icon: JSX.Element; //Es un elemento de React
    title: string;
    subtitle: string;

}

const SidebarMenuItem = ({ path, icon, title, subtitle }: Props) => {

    const pathName = usePathname();

    return (
        <>
            <Link href={path}
                className={ `${style.sidebarItem} ${(pathName === path) && style['active-sidebarItem']}`}>
                {icon}
                <div className="flex flex-col">
                    <span className="text-lg font-bold leading-5 text-white">{title}</span>
                    <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
                </div>
            </Link>

        </>
    )
}

export default SidebarMenuItem
