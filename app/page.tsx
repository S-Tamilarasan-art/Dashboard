import { Search, Mail, Bell, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3 md:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 sticky top-0 z-10 mt-12 md:mt-0">
        <div className="flex-1 max-w-md order-2 md:order-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 md:w-5 h-4 md:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search task"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm md:text-base"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs md:text-sm text-gray-500 hidden sm:block">⌘ F</span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4 ml-0 md:ml-8 order-1 md:order-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Mail className="w-4 md:w-5 h-4 md:h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-4 md:w-5 h-4 md:h-5 text-gray-600" />
          </button>
          <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Totok Michael</p>
              <p className="text-xs text-gray-500">tmichael20@gmail.com</p>
            </div>
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Totok"
              alt="Totok Michael"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="sm:hidden">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Totok"
              alt="Totok Michael"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              Plan, prioritize, and accomplish your tasks with ease.
            </p>
          </div>
          <div className="flex gap-2 md:gap-3">
             <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs md:text-sm">
              + Add Project
            </Button>
            <Button variant="outline" className="rounded-full text-xs md:text-sm">
              Import Data
            </Button>
           
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
          <div className="bg-emerald-600 text-white rounded-2xl p-4 md:p-6">
            <div className="flex items-start justify-between mb-4 md:mb-8">
              <h3 className="text-sm md:text-lg font-semibold">Total Projects</h3>
              <button className="p-1.5 hover:bg-emerald-700 rounded-lg ">
                <ArrowUpRight className="size p-1 md:size-5  md:size-5 bg-white text-black rounded-full transition-colors" />
              </button>
            </div>
            <p className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">24</p>
            <div className="flex items-center gap-2 text-emerald-100">
              <div className="w-2 h-2 bg-emerald-100 rounded-full"></div>
              <span className="text-xs md:text-sm">Increased from last month</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6">
            <div className="flex items-start justify-between mb-4 md:mb-8">
              <h3 className="text-sm md:text-lg font-semibold text-gray-900">Ended Projects</h3>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5 text-gray-600" />
              </button>
            </div>
            <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-3">10</p>
            <div className="flex items-center gap-2 text-gray-500">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-xs md:text-sm">Increased from last month</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6">
            <div className="flex items-start justify-between mb-4 md:mb-8">
              <h3 className="text-sm md:text-lg font-semibold text-gray-900">Running Projects</h3>
              <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5 text-gray-600" />
              </button>
            </div>
            <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-3">12</p>
            <div className="flex items-center gap-2 text-gray-500">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-xs md:text-sm">Increased from last month</span>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6">
            <div className="flex items-start justify-between mb-4 md:mb-8">
              <h3 className="text-sm md:text-lg font-semibold text-gray-900">Pending Project</h3>
            </div>
            <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-3">2</p>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-xs md:text-sm">On Discuss</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
          {/* Project Analytics */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6">
            <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-4 md:mb-6">Project Analytics</h3>
            <div className="h-40 md:h-48 flex items-center justify-center overflow-x-auto">
              <div className="flex items-end gap-1 md:gap-2 min-w-min md:min-w-0">
                {['M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`w-8 md:w-12 rounded-t-lg ${
                        i % 2 === 0
                          ? 'bg-gray-300 h-8 md:h-12'
                          : i === 1
                            ? 'bg-emerald-500 h-14 md:h-20'
                            : i === 3
                              ? 'bg-emerald-700 h-12 md:h-16'
                              : 'bg-emerald-400 h-10 md:h-14'
                      }`}
                    ></div>
                    <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2">{day}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reminders & Upcoming Events */}
          <div className="space-y-3 md:space-y-6">
            {/* Reminders */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6">
              <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Reminders</h3>
              <div className="space-y-3">
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-sm md:text-base font-medium text-gray-900">Meeting with Arc Company</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Time : 02.00 pm - 04.00 pm</p>
                </div>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-4 rounded-lg text-xs md:text-sm">
                Start Meeting
              </Button>
            </div>

            {/* Project Progress */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6">
              <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Project Progress</h3>
              <div className="relative w-24 md:w-32 h-24 md:h-32 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="12"
                    strokeDasharray={`${2 * Math.PI * 54 * 0.41} ${2 * Math.PI * 54}`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">41%</p>
                  <p className="text-xs text-gray-500 mt-1">Project Ended</p>
                </div>
              </div>
              <div className="flex gap-2 md:gap-4 justify-center mt-3 md:mt-4">
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Completed</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-2 md:w-3 h-2 md:h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-xs text-gray-600">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Collaboration & Time Tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 mt-6">
          {/* Team Collaboration */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 mb-4 md:mb-6">
              <h3 className="text-sm md:text-lg font-semibold text-gray-900">Team Collaboration</h3>
              <Button variant="outline" className="rounded-full text-xs md:text-sm text-green-600  border-green-600">
                + Add Member
              </Button>
            </div>
            <div className="space-y-3 md:space-y-4">
              {[
                { name: 'Alexandra Deff', task: 'Github Project Repository', status: 'Completed' },
                { name: 'Edwin Adeniko', task: 'Integrated User Authentication System', status: 'In Progress' },
                { name: 'Isaac Oluwatemilorun', task: 'Develop Search and Filter Functionality', status: 'Pending' },
                { name: 'David Oshodi', task: 'Responsive Layout for Homepage', status: 'In Progress' },
              ].map((member, i) => (
                <div key={i} className="pb-3 border-b border-gray-200 last:border-0">
                  <div className="flex items-start gap-2 md:gap-3">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                      alt={member.name}
                      className="w-7 md:w-8 h-7 md:h-8 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm font-medium text-gray-900 truncate">{member.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{member.task}</p>
                      <span
                        className={`inline-block text-xs font-medium rounded px-2 py-0.5 mt-1 ${
                          member.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-700'
                            : member.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {member.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Tracker */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-4 md:p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <svg className="w-32 md:w-48 h-32 md:h-48" viewBox="0 0 200 200" fill="currentColor">
                <path d="M100 20C56.3 20 20 56.3 20 100s36.3 80 80 80 80-36.3 80-80S143.7 20 100 20z" />
              </svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-sm md:text-lg font-semibold mb-3 md:mb-6">Time Tracker</h3>
              <p className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">01:24:08</p>
              <div className="flex gap-3 md:gap-4">
                <button className="p-1.5 md:p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                  <svg className="w-5 md:w-6 h-5 md:h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                </button>
                <button className="p-1.5 md:p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors">
                  <svg className="w-5 md:w-6 h-5 md:h-6 fill-current" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
