"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef, // remove this if your container is not fixed height
        offset: ["start start", "end start"], // remove this if your container is not fixed height
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const third = Math.ceil(images.length / 4);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, third * 2);
    const thirdPart = images.slice(0, third);
    const fourthPart = images.slice(third, third * 2);

    

    return (
        <div
            className={cn("h-screen items-start overflow-y-auto w-full", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-start max-w-5xl mx-auto gap-3 md:gap-10 py-40 px-3 md:px-10"
                ref={gridRef}
            >
                <div className="grid gap-3 md:gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }} // Apply the translateY motion value here
                            key={"grid-1" + idx}
                        >
                            <img
                                src={el}
                                className="h-52 md:h-80 w-full object-cover object-left-top rounded-lg gap-3 md:gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-3 md:gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            <img
                                src={el}
                                className="h-52 md:h-80 w-full object-cover object-left-top rounded-lg gap-3 md:gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-3 md:gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            <img
                                src={el}
                                className="h-52 md:h-80 w-full object-cover object-left-top rounded-lg gap-3 md:gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-3 md:gap-10">
                    {fourthPart.map((el, idx) => (
                        <motion.div style={{ y: translateFourth }} key={"grid-4" + idx}>
                            <img
                                src={el}
                                className="h-52 md:h-80 w-full object-cover object-left-top rounded-lg gap-3 md:gap-10 !m-0 !p-0"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
