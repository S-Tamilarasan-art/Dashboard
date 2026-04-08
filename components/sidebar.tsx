'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  LayoutGrid,
  CheckSquare2,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Medal,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '/' },
    { id: 'tasks', label: 'Tasks', icon: CheckSquare2, badge: '12+', href: '/tasks' },
    { id: 'calendar', label: 'Calendar', icon: Calendar, href: '/calendar' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '/analytics' },
    { id: 'team', label: 'Team', icon: Users, href: '/team' },
  ];

  const generalItems = [
    { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
    { id: 'help', label: 'Help', icon: HelpCircle, href: '/help' },
    { id: 'logout', label: 'Logout', icon: LogOut, href: '/logout' },
  ];

  const isActive = (href: string) => {
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
  };

  return (
    <div className=''>
      {/* Mobile Toggle (keep your existing logic) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed md:hidden top-4 left-4 z-50 p-2 rounded-lg bg-white border border-gray-200"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={cn(
          'fixed md:static w-72 bg-[#F8F9FA] flex flex-col h-screen z-40 transition-transform duration-300 border-r border-gray-100 rounded-2xl m-4 mr-0',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Logo Section */}
        <div className="p-8 pb-10 ">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
               {/* Custom Donezo Logo Shape */}
               <div className="absolute inset-0 border-[3px] border-[#1B7344] rounded-[14px] rotate-45"></div>
               <div className="w-2 h-2 bg-[#1B7344] rounded-full"></div>
            </div>
            <span className="text-2xl font-semibold text-[#111] tracking-tight">Donezo</span>
          </Link>
        </div>

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto px-4">
          {/* Menu Section */}
          <div className="mb-8">
            <h3 className="px-4 text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-4">
              Menu
            </h3>
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="relative group flex items-center gap-4 px-4 py-3"
                  >
                    {/* Active Pill Indicator */}
                    {active && (
                      <div className="absolute left-[-16px] w-3 h-10 bg-[#1B7344] rounded-r-full" />
                    )}
                    
                    <Icon className={cn(
                      "w-6 h-6 transition-colors",
                      active ? "text-emerald-800" : "text-gray-400"
                    )} />
                    
                    <span className={cn(
                      "text-[17px] transition-colors",
                      active ? "font-semibold text-[#111]" : "font-normal text-gray-400"
                    )}>
                      {item.label}
                    </span>

                    {item.badge && (
                      <span className="ml-auto bg-[#0A2619] text-white text-[10px] font-bold rounded-md px-1.5 py-0.5">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* General Section */}
          <div>
            <h3 className="px-4 text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-4">
              General
            </h3>
            <nav className="space-y-2">
              {generalItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-[17px] font-normal">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Download App Card */}
        <div className="p-4 mt-auto">
          <div className="relative overflow-hidden bg-black rounded-[32px] p-6 text-white group cursor-pointer">
            {/* Background Radial Gradient Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent opacity-70"></div>
            
            {/* Swirly Line Decorations (CSS approximate) */}
            <div className="absolute -right-4 -top-4 w-32 h-32 border border-emerald-500/20 rounded-full scale-150"></div>
            
            <div className="relative z-10">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center mb-4">
                <Medal className="text-emerald-900 w-5 h-5 " />
              </div>
              
                      <h4 className="font-bold text-lg font-thin mb-1"><span className='font-light'>Download</span> our <br></br> Mobile App</h4>
        <p className="text-xs text-gray-300 mb-3">Get easy in another way</p>
              
              <button className="w-full bg-[#1B7344] hover:bg-[#155a35] text-white font-semibold py-3.5 rounded-[20px] transition-all text-sm shadow-lg shadow-emerald-900/20">
                Download
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}