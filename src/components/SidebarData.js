import React from 'react';
import { BiPhone } from "react-icons/bi";
import { IoSpeedometer } from "react-icons/io5";
import { FaChartBar, FaLightbulb } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
      

export const SidebarData = [
  {
    title: 'Callscreen',
    path: '/',
    icon: < BiPhone />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon : < IoSpeedometer />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: < FaChartBar />,
    cName: 'nav-text'
  },
  {
    title: 'Use LightBox',
    path: '/team',
    icon: <FaLightbulb />,
    cName: 'nav-text'
  },
  {
    title: 'Use Smart Form',
    path: '/messages',
    icon: <BsPencilSquare />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/messages',
    icon: <FiSettings />,
    cName: 'nav-text'
  }
];
