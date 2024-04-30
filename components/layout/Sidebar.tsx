import React, { useRef } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { defaultNavItems, NavItem } from './defaultNavItems';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

// add NavItem prop to component prop
type Props = {
  collapsed: boolean;
  navItems?: NavItem[];
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};
const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
}: Props) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <div
      className={classNames({
        ' text-gray-500 font-medium fixed md:static md:translate-x-0 z-20': true,
        'transition-all duration-300 ease-in-out': true,
        'w-[300px]': !collapsed,
        'w-16': collapsed,
        '-translate-x-full': !shown,
      })}
    >
      <div
        className={classNames({
          'flex flex-col justify-between h-screen md:h-full sticky inset-0': true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            'flex items-center border-b border-b-green-800 transition-none': true,
            'p-4 justify-between': !collapsed,
            'py-4 justify-center': collapsed,
          })}
        >
          {!collapsed && <span className="whitespace-nowrap ml-10">Dashboard</span>}
          <button
            className="grid place-content-center hover:bg-green-800 w-10 h-10 rounded-full opacity-0 md:opacity-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-grow bg-white">
          <ul
            className={classNames({
              'my-2 flex flex-col gap-2 items-stretch': true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    ' flex items-center mx-2 text-grey-900 hover:bg-green-900  ': true, //colors
                    'transition-colors duration-300': true, //animation
                    'rounded-md p-2 mx-3 gap-4 ': !collapsed,
                    'rounded-full p-2 mx-3 w-5 h-10': collapsed,
                  })}
                >
                  <Link href={item.href} className="gap-2 ml-20 ">
                    {item.icon} <span>{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={classNames({
            'grid place-content-stretch p-4 ': true,
          })}
        >
          {/* <div className="flex gap-4 items-center h-11 overflow-hidden">
            <Image
              src={
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              }
              height={36}
              width={36}
              alt="profile image"
              className="rounded-full"
            />
            {!collapsed && (
              <div className="flex flex-col ">
                <span className="text-indigo-50 my-0">Tom Cook</span>
                <Link href="/" className="text-indigo-200 text-sm">
                  View Profile
                </Link>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
