import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi2';
import * as RiIcons from 'react-icons/ri';


export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <BiIcons.BiSolidHome />,
    },
    {
        title: 'About Us',
        path: '/about-us',
        icon: <BiIcons.BiSolidInfoCircle />,
    },
    {
        title: 'Services',
        icon: <FaIcons.FaHandHoldingHeart />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Android App Development',
                path: '/android-app-development',
            },
            {
                title: 'IOS App Development',
                path: '/ios-app-development',
            }, 
            {
                title: 'Python Backend Development',
                path: '/python-backend-development',
            },
            {
                title: 'Data Science And Automation',
                path: '/data-science-automation',
            },
            {
                title: 'Blockchain',
                path: '/blockchain',
            },
            {
                title: 'Digital Marketing',
                path: '/digital-marketing',
            }
        ]
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <HiIcons.HiPencilSquare />
    },
    {
        title: 'Contact Us',
        path: '/contact-us',
        icon: <BiIcons.BiSolidMessageRoundedDetail />
    }
]




