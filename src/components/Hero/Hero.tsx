'use client'
import {AnimatePresence, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import {  UpdateFollower } from "react-mouse-follower";

const Hero = () => {
  const HeadPhone1 = '/assets/headphone.png';
  const HeadPhone2 = '/assets/headphone2.png';
  const HeadPhone3 = '/assets/headphone3.png';

  const MotionImage = motion(Image)

  const fadeUp = (delay: number) => (
    {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5
        },
        show: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration:0.5,
                delay : delay,
                ease: easeInOut
            },

        },
        exit:{
            opacity: 0,
            y: 50,
            transition: {
                duration: 0.2,
                ease: easeInOut
            }
        }
    }
  )

  const HeadphoneData  = [
    {
        id:1,
        img: HeadPhone1,
        title: "Headphones Wireless",
        sub: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aliquam neque libero.",
        price: "$100",
        modal: "modal brown",
        bgColor: "#8b5958"
    },
    {
        id:2,
        img: HeadPhone2,
        title: "Headphones Wireless Pro",
        sub: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aliquam neque libero.",
        price: "$100",
        modal: "modal green",
        bgColor: "#638153"
    },
    {
        id:3,
        img: HeadPhone3,
        title: "Headphones Wireless",
        sub: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aliquam neque libero.",
        price: "$100",
        modal: "modal brue",
        bgColor: "#5d818c"
    }
  ]

  const [headphone, setHeadphone] = useState(HeadphoneData[0])

  type Headphones = {
    id: number;
    img: string;
    title: string;
    sub: string;
    price: string;
    modal: string;
    bgColor: string;
  }
  const handleActiveData = (data: Headphones) => {
    setHeadphone(data);
  }


  return (
    <>
        <section className="bg-brandDark">
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
                {/* Headphone Info */}
                <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
                    <div className="space-y-5 text-center md:text-left">
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor: "white",
                            zIndex:999,
                            followSpeed:0.5,
                            mixBlendMode:"difference",
                            scale: 10
                        }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.h1
                                key={headphone.id}
                                variants={fadeUp(0.2)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-600 bg-clip-text tracking-tight text-transparent">{headphone.title}</motion.h1>
                            </AnimatePresence>
                        </UpdateFollower>
                        <AnimatePresence mode="wait">
                            <motion.p
                            key={headphone.id}
                            variants={fadeUp(0.3)}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            className="text-sm leading-loose text-white/80">{headphone.sub}</motion.p>
                        </AnimatePresence>
                        
                        <AnimatePresence mode="wait">
                            <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                mixBlendMode: "difference",
                                zIndex:999,
                                followSpeed: 1.5,
                                scale: 6
                            }}
                            >
                                <motion.button
                                    key={headphone.id}
                                    variants={fadeUp(0.4)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    style={{
                                        backgroundColor: headphone.bgColor
                                    }}
                                className="px-4 py-2 inline-block font-normal rounded-sm"
                                >Buy and Listen</motion.button>
                            </UpdateFollower>
                        </AnimatePresence>

                        {/* Ch Headphone List */}
                        <motion.div 
                            initial={{ opacity: 0, x:-100 }}
                            animate={{ opacity: 1, x:0 }}
                            transition={{ duration: 0.4 }}  className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                            <div className="w-20 h-[1px] bg-white" />
                            <p>Top Headphone for you!</p>
                            <div className="w-20 h-[1px] bg-white" />
                        </motion.div>

                        {/* Ch Head List Switcher*/}
                        <div className="grid grid-cols-3 gap-10">
                            {
                                HeadphoneData.map((item,index)=>(
                                    <AnimatePresence mode="wait">
                                        <motion.div key={index}
                                        initial={{ opacity: 0, x:100 }}
                                        animate={{ opacity: 1, x:0 }}
                                        transition={{ duration: 0.5 }} 
                                        onClick={()=>handleActiveData(item)}
                                        className="grid grid-cols-2 place-items-center cursor-pointer mt-4">
                                            <div>
                                                <Image 
                                                src={item.img}
                                                alt="img"
                                                width={100}
                                                height={100}
                                                />
                                            </div>

                                            <div className="space-y-2 ml-3">
                                                <p className="text-base font-bold">{item.price}</p>
                                                <p className="text-xs font-normal text-nowrap">{item.modal}</p>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                ))
                            }
                        </div>

                    </div>
                </div>
                {/* Hero Img */}
                <div className="flex flex-col justify-end items-center">
                    <AnimatePresence mode="wait">
                        <MotionImage
                        key={headphone.id}
                        initial={{ opacity: 0, scale: 0.5, y:100 }}
                        animate={{ opacity: 1, scale: 1, y:0 }}
                        transition={{
                            duration: 0.4,
                            delay:0.2,
                            ease: "easeInOut"
                        }}
                        className="w-[300px] md:w-[400px] xl:w-[550px]"
                        src={headphone.img}
                        alt="heroImg"
                        width={300}
                        height={300}
                        />
                    </AnimatePresence>
                </div>
                {/* Social Icon */}
                <div>
                    <FaFacebookMessenger className="text-3xl fixed bottom-10 right-10 z-[9999] hover:rotate-[360deg] hover:scale-150 duration-500 mix-blend-difference" />
                </div>
            </div>
        </section>
    </>
  )
}
export default Hero