import React from 'react'
import { Calculate, DirectionsCar, HomeWork, Work } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const links = [
    {
        title: 'Auto Insurance',
        shortTitle: 'Auto',
        icon: <DirectionsCar sx={{ width: "60px", height: "60px" }} />,
        link: '/autoinsurance'

    },
    {
        title: 'Home Insurance',
        shortTitle: 'Home',
        icon: <HomeWork sx={{ width: "60px", height: "60px" }} />,
        link: '/homeinsurance'
    },
    {
        title: 'Commercial Insurance',
        shortTitle: 'Commercial',
        icon: <Work sx={{ width: "60px", height: "60px" }} />,
        link: '/commercialinsurance'
    },
    {
        title: 'Get Quote',
        shortTitle: 'Quote',
        icon: <Calculate sx={{ width: "60px", height: "60px" }} />,
        link: '/quote'
    },
]

const Links = () => {
    return (
        <div className='py-4'>
            <div className='max-w-[850px] mx-auto flex overflow-x-scroll'>
                {links.map((item, key) => (
                    <Link to={item.link} key={key} className='flex-1 flex-shrink-0 text-[#123456] transition duration-300 hover:text-black hover:shadow-xl'>
                        <div className='text-center group relative'>
                            {item.icon}
                            <h3 className='hidden md:flex md:text-xl justify-center'>{item.title}</h3>
                            <h3 className='flex md:hidden justify-center'>{item.shortTitle}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Links