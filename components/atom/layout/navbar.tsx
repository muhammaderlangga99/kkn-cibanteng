'use client'
import {
    IconCube,
    IconHamburger,
    IconHome1,
    IconCircleInfo,
    IconService,
    IconContacts,
    IconBrandInstagram,
    IconBrandGithub,
    IconBrandLinkedin
} from '@irsyadadl/paranoid';
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    // Link
} from "@/components/ui/navigation-menu"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ThemeSwitch from './themeSwitch';
import { Ambulance, ChevronDown, FireExtinguisher, Flame, ShieldAlert } from 'lucide-react';
const components: { title: string; href: string, icon: any }[] = [
    {
        title: "Home",
        href: "/",
        icon: () => <IconHome1 className='size-3.5' />
    },
    // {
    //     title: "Galeri",
    //     href: "/galeri",
    //     icon: () => <IconCircleInfo className='size-3.5' />
    // },
]

const darurat = [
    {
        title: "Ambulance",
        href: "081311304928",
        icon: () => <Ambulance size={18} />
    },
    {
        title: "Polisi",
        href: "112",
        icon: () => <ShieldAlert size={18} />
    },
    {
        title: "Damkar",
        href: "02518322100",
        icon: () => <Flame size={18} />
    },
]

 

export default function Nav({ className }: { className?: string }) {
    const pathname = usePathname();
    const [ scroll, setScroll ] = useState(false);
    
    // count scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll); // listen scroll event
    }, []);
    
    return (
        <nav className={cn(`w-full md:border-b border-dashed border-zinc-300 dark:border-zinc-700 fixed px-3 z-50 ${scroll ? 'bg-white dark:bg-black border-solid backdrop-filter backdrop-blur-lg bg-opacity-45 dark:bg-opacity-10 border-b dark:border-zinc-800' : 'bg-transparent dark:bg-transparent'
            }
        }`, className)}>
            <div className="sub-nav py-4 max-w-7xl m-auto flex justify-between md:justify-start items-center gap-5">
                <div className="brand flex items-center justify-center gap-x-1">
                    <IconCube />
                    <a href="#" className='text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white via-zinc-700 dark:via-zinc-400'>RT05</a>
                </div>
                <div className='flex gap-2 md:gap-0 md:justify-between md:w-full'>
                    <NavigationMenu>
                        <NavigationMenuList className='space-x-6'>
                            <div className="flex md:hidden gap-2 items-center">
                                {/* <Link href="https://www.linkedin.com/in/muhammad-erlangga-1b72801b1/" target='_blank' className='p-1.5 rounded-md mt-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'>
                                    <Ambulance size={18} />
                                </Link>
                                <Link href="https://www.instagram.com/muhammaderlangga99/" target='_blank' className='p-1.5 rounded-md mt-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'>
                                    <ShieldAlert size={18} />
                                </Link>
                                <Link href="https://github.com/muhammaderlangga99" target='_blank' className='p-1.5 rounded-md mt-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'>
                                    <Flame size={18} />
                                </Link> */}
                                
                                <DropdownMenu>
                                    <DropdownMenuTrigger className='border px-3 py-2 bg-opacity-10 rounded-lg md:hidden flex gap-x-1 items-center'>
                                        Darurat <ChevronDown size={15} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className='w-36 flex flex-col -translate-x-3'>
                                        <DropdownMenuSeparator />
                                        {
                                            darurat.map((items, key) => (
                                                <Link href={`tel:${items.href}`} className={`hover:bg-zinc-100 dark:hover:bg-zinc-800 p-1.5 rounded-md text-sm flex ${pathname === items.href ? 'bg-zinc-100 dark:bg-zinc-800' : ''
                                                    }`} key={key}>
                                                    {items.title}
                                                    <DropdownMenuShortcut className='flex items-center'>
                                                        {items.icon()}
                                                    </DropdownMenuShortcut>
                                                </Link>
                                            
                                            ))
                                        }
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                
                                <ThemeSwitch className='w-auto' />
                            </div>
                            {/* <DropdownMenu>
                                <DropdownMenuTrigger className='border p-2 dark:bg-zinc-900 bg-opacity-10 rounded-xl md:hidden'>
                                    <IconHamburger className='size-5' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='w-36 flex flex-col -translate-x-3'>
                                    <DropdownMenuLabel>Menu</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {
                                        components.map((items, key) => (
                                            <Link href={items.href} className={`hover:bg-zinc-100 dark:hover:bg-zinc-800 p-1.5 rounded-md text-sm flex ${pathname === items.href ? 'bg-zinc-100 dark:bg-zinc-800' : ''
                                                }`} key={key}>
                                                {items.title}
                                                <DropdownMenuShortcut className='flex items-center'>
                                                    {items.icon()}
                                                </DropdownMenuShortcut>
                                            </Link>
                                            
                                        ))
                                    }
                                </DropdownMenuContent>
                            </DropdownMenu> */}
                            {
                                components.map((items, key) => (
                                    <NavigationMenuItem key={key} className='hidden text-sm md:inline-block'>
                                        <Link href={items.href} className={
                                            pathname === items.href ? 'text-black dark:text-white font-medium' : 'text-zinc-500 '
                                        }>{items.title}</Link>
                                    </NavigationMenuItem>
                                ))
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                    {/* <div className="hidden md:flex gap-2 items-center">
                        <Link href="https://www.linkedin.com/in/muhammad-erlangga-1b72801b1/" target='_blank' className='p-1.5 rounded-md mt-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'>
                            <Ambulance size={18} />
                        </Link>
                        <Link href="https://www.instagram.com/muhammaderlangga99/" target='_blank' className='p-1.5 rounded-md mt-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'>
                            <ShieldAlert size={18} />
                        </Link>
                        <Link href="https://github.com/muhammaderlangga99" target='_blank' className='p-1.5 rounded-md mt-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-800'>
                            <Flame size={18} />
                        </Link>
                        <ThemeSwitch className='w-auto' />
                    </div> */}
                </div>
            </div>
        </nav>
    );
}


