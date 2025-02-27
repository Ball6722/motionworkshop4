import { motion } from "framer-motion"
import Link from "next/link"
import { ImHeadphones } from "react-icons/im"
import { IoMdMenu } from "react-icons/io"
import { UpdateFollower } from "react-mouse-follower"


const Navbar = () => {
  const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 2,
        title: 'About',
        link: '/'
    },
    {
        id: 3,
        title: 'Contact',
        link: '/'
    },
    {
        id: 4,
        title: 'Blog',
        link: '/'
    },
    {
        id: 5,
        title: 'Infomation',
        link: '/'
    }
  ]
  return (
    <>
        <div 
      
        className="bg-brandDark text-white p-8">
            <motion.nav
              initial={{ opacity:0 }}
              animate={{  opacity: 1 }}
              transition={{
                duration: 0.3
              }}  
            className="flex items-center justify-between container">
                {/* logo section */}
                <UpdateFollower
                mouseOptions={{
                    backgroundColor: "white", //สีของตัวติดตามเมาส์จะเป็นสีขาว
                    zIndex: 999, //ทำให้ตัวติดตามอยู่เหนือ elements อื่นๆ
                    followSpeed: 1.5, //ความเร็วการติดตาม
                    scale: 5, //ขนาดของตัวติดตาม
                    mixBlendMode: "difference"
                }}
                >
                <div>
                    <Link href={""} className="text-2xl font-bold uppercase tracking-wider">Motion / <span className="font-extralight text-gray-400">MARKET</span></Link>
                </div>
                </UpdateFollower>
                {/* menu section */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-4">
                        {
                            NavbarMenu.map((item, index)=>(
                                <li key={index}>
                                    <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "white", //สีของตัวติดตามเมาส์จะเป็นสีขาว
                                        zIndex: 999, //ทำให้ตัวติดตามอยู่เหนือ elements อื่นๆ
                                        followSpeed: 1.5, //ความเร็วการติดตาม
                                        scale: 5, //ขนาดของตัวติดตาม
                                        mixBlendMode: "difference"
                                    }}
                                    >
                                        <Link href={item.link} className="inline-block text-sm py-2 px-3 hover:text-gray-300 uppercase">{item.title}</Link>
                                    </UpdateFollower>
                                </li>
                            ))
                        }
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white", //สีของตัวติดตามเมาส์จะเป็นสีขาว
                                zIndex: 999, //ทำให้ตัวติดตามอยู่เหนือ elements อื่นๆ
                                followSpeed: 1.5, //ความเร็วการติดตาม
                                scale: 5, //ขนาดของตัวติดตาม
                                mixBlendMode: "difference"
                            }}
                        >
                        <li className="text-xl ps-14"><ImHeadphones /></li>
                        </UpdateFollower>
                    </ul>
                </div>
                {/* ham section */}
                <div className="block md:hidden">
                    <IoMdMenu className="text-3xl" />
                </div>
            </motion.nav>
        </div>
    </>
  )
}
export default Navbar