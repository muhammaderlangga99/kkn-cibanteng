"use client"
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Particles from "@/components/magicui/particles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowDown, ArrowRightIcon, Search } from "lucide-react";
import Link from "next/link";
export function Hero() {

  React.useEffect(() => {
    AOS.init();
  }, []);
    
    const theme = useTheme();

    return (
        <div className="flex flex-col justify-center items-center overflow-hidden overflow-x-hidden" data-aos='fade-up' data-aos-duration="500">
            <ContainerScroll
                titleComponent={
                    <div className="md:-translate-y-28">
                        <div className="z-10 flex items-center justify-center">
                            <div
                                className={cn(
                                    "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                                )}
                            >
                                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 text-sm hover:dark:text-neutral-400 z-50">
                                    <Link href="#cari" className="flex items-center">
                                        <span>cari alamat</span>
                                        <Search className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                                    </Link>
                                </AnimatedShinyText>
                            </div>
                        </div>
                        <div className="h-28 w-1 border-l border-dashed dark:border-zinc-500 border-zinc-700 m-auto"></div>
                        <h1 className="text-4xl font-semibold text-black dark:text-white" data-aos='fade-up' data-aos-delay='100' data-aos-duration="500">
                            Innovative Web Solutions <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Fast & Easy
                            </span>
                        </h1>
                    </div>
                }
            >
                <img
                    src="/img/peta.png"
                    alt="hero"
                    className="w-full h-full brightness-95 scale-110 object-left object-cover"
                    draggable={false}
                />
            </ContainerScroll>
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
                ease={80}
                refresh
                color={
                    theme.resolvedTheme === "dark"
                        ? "#ffffff"
                        : "#000000"
                }
            />
        </div>
    );
}
