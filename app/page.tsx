import React from 'react';
import { Search, Mail, Bell, ArrowUpRight, Triangle, MoreVertical, Play, Square, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
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
      <header className="flex flex-col flex-wrap md:flex-row items-center justify-between gap-1 md:gap-4 mb-4 bg-gray-50 p-6 rounded-md border ">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search task" 
            className="w-full pl-10 pr-12 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-emerald-500 shadow-sm text-sm"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 border px-1.5 py-0.5 rounded bg-slate-50">⌘ F</span>
        </div>
        
        <div className="flex items-center gap-1 md:gap-4">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full bg-white border border-slate-200 shadow-sm"><Mail className="size-4" /></Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-white border border-slate-200 shadow-sm"><Bell className="size-4" /></Button>
          </div>
          <div className="flex items-center md:gap-3 md:pl-4 border-l">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Totok" className="size-10 rounded-full border-2 border-white shadow-sm" alt="avatar" />
            <div className="hidden md:block text-left">
              <p className="text-sm font-bold leading-tight">Totok Michael</p>
              <p className="text-xs text-slate-500 truncate">tmichael20@gmail.com</p>
            </div>
          </div>
        </div>
      </header>
<div className='bg-gray-50 p-4 md:p-4 rounded-md border'>
      {/* --- DASHBOARD TITLE --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 ">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">Dashboard</h1>
          <p className="text-slate-500 mt-1">Plan, prioritize, and accomplish your tasks with ease.</p>
        </div>
        <div className="flex items-center justify-center sm:flex-col gap-1 md:gap-3">
          <Button className="bg-emerald-900 hover:bg-emerald-950 text-white rounded-full px-6">＋ Add Project</Button>
          <Button variant="outline" className="rounded-full px-6 border-slate-300">Import Data</Button>
        </div>
      </div>

      {/* --- STATS ROW --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
        <StatCard title="Total Projects" value="24" trend="12" active />
        <StatCard title="Ended Projects" value="10" trend="6" />
        <StatCard title="Running Projects" value="12" trend="2" />
        <StatCard title="Pending Project" value="2" subtitle="On Discuss" />
      </div>

      {/* --- MAIN GRID (The Bento Layout) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
        
        {/* Project Analytics - Spans 6/12 columns */}
       <div className="lg:col-span-6 bg-white border border-slate-200 rounded-md p-4 sm:p-6 shadow-sm">
  
  <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-8">
    Project Analytics
  </h3>

  <div className="flex items-end justify-between gap-2 sm:gap-4 px-1 sm:px-2 overflow-x-auto">

    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
      
      <div key={i} className="flex flex-col items-center gap-2 sm:gap-3 min-w-[30px] sm:min-w-[40px]">
        
        <div
          className={`
            w-6 sm:w-10 md:w-12 rounded-full transition-all
            ${
              i === 3
                ? 'bg-emerald-900 h-24 sm:h-32 md:h-40'
                : i === 1 || i === 2
                ? 'bg-emerald-500 h-16 sm:h-24 md:h-28'
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
        <div className="lg:col-span-3 flex flex-col gap-6 justify-center w-full">
          <div className="bg-white border border-slate-200 rounded-md p-6 shadow-sm flex-1">
            <h3 className="text-lg font-bold mb-4">Reminders</h3>
            <div className="space-y-1 mb-8">
              <p className="font-bold text-slate-800 leading-tight">Meeting with Arc Company</p>
              <p className="text-xs text-slate-400">Time : 02.00 pm - 04.00 pm</p>
            </div>
            <Button className="w-full bg-emerald-900/10 hover:bg-emerald-900/20 text-emerald-900 rounded-2xl py-6 font-bold flex gap-2">
              <Play className="size-4 fill-emerald-900" /> Start Meeting
            </Button>
          </div>
          
        
        </div>

        {/* Project List Sidebar - Spans 3/12 columns, and takes full height */}
        <div className="lg:col-span-3 row-span-2 flex flex-col gap-2">
          <div className=' bg-white border border-slate-200 rounded-md p-2 shadow-sm'>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Project</h3>
            <Button variant="outline" size="sm" className="rounded-full border-slate-200 text-[10px] h-7">＋ New</Button>
          </div>
          <div className="space-y-6">
            {projectItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 group cursor-pointer">
                <div className={`size-10 rounded-xl flex items-center justify-center text-lg shadow-sm ${item.color}`}>
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
  <div className="bg-emerald-950 rounded-md p-8 w-full text-white relative overflow-hidden flex flex-col self-end justify-between max-h-[200px]">
          {/* Abstract Wave Background Effect */}
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[120%] h-[120%] rounded-full border-[1px] border-white/50" />
            <div className="absolute top-[-10%] right-[-20%] w-[120%] h-[120%] rounded-full border-[1px] border-white/30" />
          </div>

          <h3 className="text-sm font-medium opacity-60">Time Tracker</h3>
          <div className="relative z-10 text-center">
            <p className="text-4xl font-bold tracking-widest my-4">01:24:08</p>
            <div className="flex justify-center gap-3">
              <button className="size-10 rounded-full bg-white flex items-center justify-center text-emerald-950 shadow-lg hover:scale-110 transition-transform">
                <Pause className="size-4 fill-emerald-950" />
              </button>
              <button className="size-10 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
                <Square className="size-3 fill-white" />
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Team Collaboration - Spans 6/12 columns */}
        <div className="lg:col-start-1 lg:col-end-6 bg-white border border-slate-200 rounded-md p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Team Collaboration</h3>
            <Button variant="outline" size="sm" className="rounded-full border-emerald-600 text-emerald-600 text-[10px] h-7 hover:bg-emerald-50">＋ Add Member</Button>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { name: 'Alexandra Deff', task: 'Github Project Repository', status: 'Completed', color: 'bg-emerald-100 text-emerald-700' },
              { name: 'Edwin Adeniko', task: 'User Auth System', status: 'In Progress', color: 'bg-blue-100 text-blue-700' },
              { name: 'Isaac Oluwa', task: 'Search Functionality', status: 'Pending', color: 'bg-orange-100 text-orange-700' },
            ].map((m, i) => (
              <div key={i} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${m.name}`} className="size-9 rounded-full" alt="member" />
                   <div>
                     <p className="text-sm font-bold leading-none">{m.name}</p>
                     <p className="text-[10px] text-slate-400 mt-1">Working on <span className="text-slate-600 font-bold">{m.task}</span></p>
                   </div>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${m.color}`}>{m.status}</span>
              </div>
            ))}
          </div>
        </div>
  <div className="lg:col-start-6 lg:col-end-10 bg-white border border-slate-200 rounded-md p-6 shadow-sm flex-1">
            <h3 className="text-sm font-bold text-slate-500 mb-4">Project Progress</h3>
            <div className="relative flex flex-col items-center">
              {/* Simplified Arc Placeholder */}
              <div className="w-full aspect-[2/1] rounded-t-full border-[16px] border-slate-100 border-b-0 relative ">
                <div className="absolute inset-0 rounded-t-full border-[16px] border-emerald-800 border-b-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              </div>
              <div className="mt-[-20px] text-center">
                <p className="text-3xl font-black">41%</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Project Ended</p>
              </div>
            </div>
          </div>
        {/* Time Tracker - Spans 3/12 columns */}
      

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
    <div className={`p-6 rounded-lg border transition-all ${
      active ? 'bg-emerald-800 text-white border-transparent' : 'bg-white text-slate-900 border-slate-200'
    }`}>
      <div className="flex justify-between items-start mb-6">
        <span className={`text-sm font-bold ${active ? 'opacity-80' : 'text-slate-500'}`}>{title}</span>
        <div className={`p-1.5 rounded-full border ${active ? 'border-white/20 bg-white/10' : 'border-slate-200'}`}>
          <ArrowUpRight className="size-4" />
        </div>
      </div>
      <div className="text-5xl font-black mb-4">{value}</div>
      <div className="flex items-center gap-2">
        {trend ? (
          <>
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${active ? 'bg-white/10 border-white/20' : 'bg-emerald-50 border-emerald-100 text-emerald-600'}`}>
              <span>{trend}</span>
              <Triangle className={`size-2 ${active ? 'fill-white' : 'fill-emerald-600'}`} />
            </div>
            <span className={`text-[10px] font-medium ${active ? 'opacity-60' : 'text-slate-400'}`}>Increased from last month</span>
          </>
        ) : (
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{subtitle}</span>
        )}
      </div>
    </div>
  );
}