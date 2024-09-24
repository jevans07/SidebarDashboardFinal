import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Specifics',
    path: '/specifics',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'State',
        path: '/specifics/state',
        icon: <FaIcons.FaMapMarkedAlt />
      },
      {
        title: 'Animal',
        path: '/specifics/animal',
        icon: <FaIcons.FaDog />
      }
    ]
  },
  {
    title: 'AMR Pathogen Info',
    path: '/AMR-pathogen-info',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pathogen Selection',
        path: '/AMR-pathogen-info/pathogen-selection',
        icon: <RiIcons.RiVirusLine />,
        cName: 'sub-nav'
      },
      {
        title: 'Pathogen Profiles',
        path: '/AMR-pathogen-info/pathogen-profiles',
        icon: <RiIcons.RiLineChartLine />,
        cName: 'sub-nav'
      },
      {
        title: 'Pathogen Maps',
        path: '/AMR-pathogen-info/pathogen-maps',
        icon: <FaIcons.FaMap />
      }
    ]
  },

  {
    title: 'AMR Resistance',
    path: '/AMR-resistance',
    icon: <FaIcons.FaRegNewspaper />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'AMR Options',
        path: '/AMR-resistance/options',
        icon: <RiIcons.RiVirusLine />
      },
      {
        title: 'AMR Profiles',
        path: '/AMR-resistance/profiles',
        icon: <RiIcons.RiLineChartLine />
      },
      {
        title: 'AMR Maps',
        path: '/AMR-resistance/maps',
        icon: <FaIcons.FaMap />
      }
    ]
  },
  {
    title: 'Outreach and Dissemination',
    path: '/outreach-and-dissemination',
    icon: <IoIcons.IoMdHelpCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'AMR Tutorial Videos',
        path: '/outreach-and-dissemination/AMR-tutorial-videos',
        icon: <IoIcons.IoIosFilm />
      },
      {
        title: 'Monthly Reports',
        path: '/outreach-and-dissemination/monthly-reports',
        icon: <RiIcons.RiNewspaperLine />
      },
      {
        title: 'Webinars and Updates',
        path: '/outreach-and-dissemination/webinars-and-updates',
        icon: <FaIcons.FaPhotoVideo />
      },
      {
        title: 'Feedback',
        path: '/outreach-and-dissemination/feedback',
        icon: <FaIcons.FaHandshake />
      }
   
    ]
  }
];