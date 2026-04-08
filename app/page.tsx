import React from 'react';
import { Search, Mail, Bell, ArrowUpRight, Triangle, MoreVertical, Play, Square, Pause, Video, Divide } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
const progress = 71; // Total progress (Completed + In Progress)
  const completedPart = 60; // The lighter green part
  
  const radius = 80;
  const circumference = Math.PI * radius; // Half circle circumference

  // Calculations for stroke offsets
  const totalLength = (progress / 100) * circumference;
  const completedLength = (completedPart / 100) * circumference;
  const inProgressLength = totalLength - completedLength;
  // This is where we place the "cut-out" circle in the mask
  const angleInRad = (completedPart / 100) * Math.PI;
  const cutX = 100 - radius * Math.cos(angleInRad);
  const cutY = 100 - radius * Math.sin(angleInRad);
  const projectItems = [
    { id: 1, icon: '⚡', title: 'Develop API Endpoints', date: 'Nov 26, 2024', color: 'bg-blue-100 text-blue-600' },
    { id: 2, icon: '🧩', title: 'Onboarding Flow', date: 'Nov 28, 2024', color: 'bg-emerald-100 text-emerald-600' },
    { id: 3, icon: '🎨', title: 'Build Dashboard', date: 'Nov 30, 2024', color: 'bg-orange-100 text-orange-600' },
    { id: 4, icon: '🔍', title: 'Optimize Page Load', date: 'Dec 5, 2024', color: 'bg-yellow-100 text-yellow-600' },
    { id: 5, icon: '📱', title: 'Cross-Browser Testing', date: 'Dec 6, 2024', color: 'bg-purple-100 text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-4 font-sans text-slate-900 ">
      
      {/* --- HEADER --- */}
      <header className="flex flex sm:flex-row flex-wrap md:flex-row items-center justify-between gap-1 md:gap-4 mb-2 bg-gray-50 p-4 rounded-2xl  ">
        <div className="relative w-full max-w-2xs ">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-800" />
          <input 
            type="text" 
            placeholder="Search task" 
            className="w-full pl-10 pr-12 py-2.5 bg-white  rounded-2xl   placeholder:font-medium text-gray-400 text-xs"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-700  px-1 py-0.5 rounded bg-gray-100 tracking-tighter font-semibold">⌘ F</span>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full bg-white border size-13 "><Mail className="size-5" /></Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-white border size-13 "><Bell className="size-5" /></Button>
          </div>
          <div className="flex items-center md:gap-3  ">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Totok" sizes='icon' className="size-13 rounded-full bg-orange-100" alt="avatar" />
            <div className="hidden md:block text-left">
              <p className="text-sm font-bold leading-tight">Totok Michael</p>
              <p className="text-xs text-slate-500 truncate">tmichael20@gmail.com</p>
            </div>
          </div>
        </div>
      </header>
<div className='bg-gray-50 p-4 md:p-4 rounded-2xl '>
      {/* --- DASHBOARD TITLE --- */}
      <div className="flex flex-wrap flex-col md:flex-row md:items-end justify-between gap-4 mb-8 ">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Dashboard</h1>
          <p className="text-gray-400 mt-1 text-sm">Plan, prioritize, and accomplish your tasks with ease.</p>
        </div>
        <div className="flex items-center justify-center  gap-1 md:gap-3">
          <Button className="bg-emerald-900 hover:bg-emerald-950 text-white rounded-full px-6 py-5">＋ Add Project</Button>
          <Button variant="outline" className="rounded-full px-6 py-5 border-emerald-900 text-emerald-900">Import Data</Button>
        </div>
      </div>

      {/* --- STATS ROW --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
        <StatCard title="Total Projects" value="24" trend="12" active />
        <StatCard title="Ended Projects" value="10" trend="6" />
        <StatCard title="Running Projects" value="12" trend="2" />
        <StatCard title="Pending Project" value="2" subtitle="On Discuss" />
      </div>

      {/* --- MAIN GRID (The Bento Layout) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        
        {/* Project Analytics - Spans 6/12 columns */}
       <div className="lg:col-span-6 bg-white rounded-2xl p-4 sm:p-6">
  
  <h3 className="text-[13px] sm:text-lg font-bold mb-2 sm:mb-4">
    Project Analytics
  </h3>

  <div className="flex items-end justify-between gap-2 sm:gap-3 px-1 sm:px-2 overflow-x-auto">

    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
      
      <div key={i} className={`flex flex-col items-center  min-w-[30px] sm:min-w-[40px] ${i===2 ?"gap-0":"gap-1 sm:gap-2"}`}>
        {i==2&& <div className="relative flex flex-col items-center">
  
  {/* Percentage label */}
  <div className="rounded-sm px-1 text-emerald-700 bg-emerald-50 border border-emerald-700 text-xs z-10 m-1">
    74%
  </div>

  {/* Dot (intersecting) */}
  <div className="absolute top-[22px] z-10">
    <div className="size-2 rounded-full bg-white border border-emerald-700"></div>
  </div>

</div>}
        <div
          className={`
            w-6 sm:w-10 md:w-12 rounded-full transition-all
            ${
              i === 3
                ? 'bg-emerald-900 h-24 sm:h-32 md:h-40'
                : i === 1 
                ? 'bg-emerald-700 h-16 sm:h-24 md:h-28'
                :i === 2
                ?'bg-emerald-500 h-14 sm:h-22 md:h-26'
                :i===5
                ?"rounded-full  border-slate-300 bg-[repeating-linear-gradient(45deg,_transparent,_transparent_5px,_#94a3b8_5px,_#94a3b8_7px)] border h-16 sm:h-24 md:h-28"
                : 'rounded-full  border-slate-300 bg-[repeating-linear-gradient(45deg,_transparent,_transparent_5px,_#94a3b8_5px,_#94a3b8_7px)] border h-20 sm:h-28 md:h-32'
            }
          `}
        />

        <span className="text-[10px] sm:text-xs font-medium text-slate-400">
          {day}
        </span>

      </div>
    ))}

  </div>
</div>

        {/* Reminders & Progress Column - Spans 3/12 columns */}
        <div className="lg:col-span-3  w-full">
          <div className="bg-white  rounded-2xl p-6  flex-1 flex flex-col gap-6 justify-around">
            <h3 className="text-lg font-bold mb-4">Reminders</h3>
            <div className="space-y-1 mb-8">
              <p className="font-semibold  text-lg text-emerald-800 leading-tight">Meeting with Arc <br></br> Company</p>
              <p className="text-sm text-slate-400">Time : 02.00 pm - 04.00 pm</p>
            </div>
             <Button className=" bg-gradient-to-r from-[#1f5f3f] via-[#2e7d56] to-[#1f5f3f] w-full  hover:bg-emerald-800 text-white rounded-3xl py-6 font-bold flex gap-2">
              <Video className="size-6 fill-white" /> Start Meeting
            </Button>
          </div>
         
        
        </div>

        {/* Project List Sidebar - Spans 3/12 columns, and takes full height */}
        <div className="lg:col-span-3 row-span-2 flex flex-col gap-3">
          <div className=' bg-white  rounded-2xl p-2 '>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Project</h3>
            <Button variant="outline" size="sm" className="rounded-full border-emerald-800 text-emerald-800 font-bold text-[13px] h-7">＋ New</Button>
          </div>
          <div className="space-y-6">
            {projectItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 group cursor-pointer">
                <div className={`size-10 rounded-full flex items-center justify-center text-lg shadow-sm ${item.color}`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 truncate">{item.title}</p>
                  <p className="text-[10px] text-slate-400 font-medium">Due date: {item.date}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
  <div className="bg-emerald-950 rounded-md  w-full p-4 text-white relative overflow-hidden flex flex-col self-end justify-around h-full">
          {/* Abstract Wave Background Effect */}
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[120%] rounded-full border-[1px] border-white/50" />
            <div className="absolute top-[-10%] right-[-20%] w-[120%] h-[120%] rounded-full border-[1px] border-white/30" />
             <div className="absolute top-[-5%] right-[-30%] w-[120%] h-[120%] rounded-full border-[1px] border-white/30" />
             
          </div>

          <h3 className="text-md font-medium ">Time Tracker</h3>
          <div className="relative z-10 text-center flex flex-col items-center justify-center">
            <p className="text-4xl font-semibold tracking-widest my-4">01:24:08</p>
            <div className="flex justify-center gap-3">
              <button className="size-10 rounded-full bg-white flex items-center justify-center text-emerald-950 shadow-lg hover:scale-110 transition-transform">
                <Pause className="size-6 fill-emerald-950" />
              </button>
              <button className="size-10 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                <Square className="size-6 fill-white" />
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Team Collaboration - Spans 6/12 columns */}
        <div className="lg:col-start-1 lg:col-end-6 bg-white  rounded-2xl p-8 ">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Team Collaboration</h3>
            <Button variant="outline" size="sm" className="rounded-full border-emerald-800 text-emerald-800 text-[10px] h-7 hover:bg-emerald-50">＋ Add Member</Button>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { name: 'Alexandra Deff', task: 'Github Project Repository', status: 'Completed', color: 'bg-emerald-50 text-emerald-700' },
              { name: 'Edwin Adenike', task: 'Integrate user authentication system', status: 'In Progress', color: 'bg-yellow-50 text-yellow-700' },
              { name: 'Isaac Oluwatemilorun', task: 'Develop Search and Filter Functionality', status: 'Pending', color: 'bg-orange-50 text-orange-700' },
             { name: 'David Oshodi', task: 'Responsive layout for Home page',status: 'In Progress', color: 'bg-yellow-50 text-yellow-700' },
            ].map((m, i) => (
              <div key={i} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${m.name}`} className="size-9 rounded-full" alt="member" />
                   <div>
                     <p className="text-md font-medium leading-none">{m.name}</p>
                     <p className="text-[10px] text-slate-400 mt-1">Working on <span className="text-slate-600 font-bold">{m.task}</span></p>
                   </div>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${m.color}`}>{m.status}</span>
              </div>
            ))}
          </div>
        </div>
 <div className="lg:col-start-6 lg:col-end-10 bg-white rounded-2xl p-6 flex-1">
      <h2 className="text-lg font-bold text-gray-900 mb-8">Project Progress</h2>
      
      <div className="relative flex flex-col items-center">
        <svg viewBox="0 0 200 120" className="w-full">
          <defs>
            {/* 1. Striped Pattern for Pending */}
            <pattern 
              id="stripes" 
              patternUnits="userSpaceOnUse" 
              width="4" 
              height="4" 
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="4" stroke="#94a3b8" strokeWidth="2" />
            </pattern>

            {/* 2. The Mask for the "Inner Round" effect */}
            <mask id="round-inner-cut">
              {/* White shows the path */}
              <rect x="0" y="0" width="200" height="120" fill="white" />
              {/* Black circle "bites" a hole out of the dark green path */}
              <circle cx={cutX} cy={cutY} r="11" fill="black" />
            </mask>
          </defs>

          {/* Layer 1: Pending (Full arc with stripes) */}
          <path
            d="M 20,100 A 80,80 0 0 1 180,100"
            fill="none"
            stroke="url(#stripes)"
            strokeWidth="22"
            strokeLinecap="round"
          />

          {/* Layer 2: Completed (Light Green) */}
          <path
            d="M 20,100 A 80,80 0 0 1 180,100"
            fill="none"
            stroke="#2D8453"
            strokeWidth="22"
            strokeLinecap="round"
            style={{
              strokeDasharray: `${circumference}`,
              strokeDashoffset: circumference - completedLength,
              transition: 'all 1s ease-out'
            }}
          />

          {/* Layer 3: In Progress (Dark Green) */}
          <path
            d="M 20,100 A 80,80 0 0 1 180,100"
            fill="none"
            stroke="#164D33"
            strokeWidth="22"
            strokeLinecap="round" 
            mask="url(#round-inner-cut)" // Applies the concave cut at the top
            style={{
              strokeDasharray: `${inProgressLength} ${circumference}`,
              strokeDashoffset: -completedLength, 
              transition: 'all 1s ease-out'
            }}
          />
        </svg>

        {/* Center Text */}
        <div className="absolute top-[55%] flex flex-col items-center">
          <span className="text-5xl font-bold text-gray-900 leading-none">
            {41}%
          </span>
          <span className="text-sm font-medium text-[#2D8453] mt-2">
            Project Ended
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-between items-center mt-8 px-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#2D8453]"></div>
          <span className="text-sm font-medium text-emerald-900">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#164D33]"></div>
          <span className="text-sm font-medium text-emerald-900">In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div 
            className="w-4 h-4 rounded-full border border-gray-200" 
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #94a3b8 2px, #94a3b8 4px)' }}
          ></div>
          <span className="text-sm font-medium text-emerald-900">Pending</span>
        </div>
      </div>
    </div>

    </div>
        
      

      </div>
      </div>
 
  );
}

// Sub-component for Stats to keep code clean
function StatCard(
  { title, value, trend, subtitle, active = false }: {
    title: string;
    value: string;
    trend?: string;
    subtitle?: string;
    active?: boolean;
  }
) {
  return (
    <div className={`p-6 rounded-2xl transition-all ${
      active ? 'bg-gradient-to-l from-[#1f5f3f] via-[#477d2e] to-[#1f5f3f] text-white border-transparent' : 'bg-white text-slate-900 border-slate-200'
    }`}>
      <div className="flex justify-between items-start mb-6">
        <span className={`text-lg font-semibold ${active ? 'opacity-80' : 'text-black'}`}>{title}</span>
        <div className={`p-1 rounded-full border ${active ? 'border-white bg-white text-emerald-700' : 'border-black'}`}>
          <ArrowUpRight className="size-6" />
        </div>
      </div>
      <div className={`text-6xl font-semibold mb-4 `}>{value}</div>
      <div className="flex items-center gap-2">
        {trend ? (
          <>
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${active ? 'bg-white/10 border-white/20' : 'bg-lime-50/50 border-emerald-700 text-emerald-600'}`}>
              <span>{trend}</span>
              <Triangle className={`size-2 ${active ? 'fill-lime-50' : 'fill-emerald-700'}`} />
            </div>
            <span className={`text-[13px] font-medium ${active ? ' text-lime-50/50' : 'text-emerald-700'}`}>Increased from last month</span>
          </>
        ) : (
          <span className="text-[13px] font-medium text-emerald-600  px-2 py-0.5 rounded-md">{subtitle}</span>
        )}
      </div>
    </div>
  );
}