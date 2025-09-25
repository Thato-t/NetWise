import { NavLink } from 'react-router-dom';
// Using plain <img> so you can swap assets under /public/icons/gray/

const itemBase = 'flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px]';
const active = 'text-[#1677ff]';
const inactive = 'text-slate-500 dark:text-slate-400';

export default function BottomNav() {
  const linkClass = ({ isActive }) => `${itemBase} ${isActive ? active : inactive}`;
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-4xl">
        <NavLink to="/" className={linkClass}>
          <img src="/icons/gray/home.png" alt="Home" className="h-5 w-5" />
          Home
        </NavLink>
        <NavLink to="/compare" className={linkClass}>
          <img src="/icons/gray/wifi.png" alt="Compare" className="h-5 w-5" />
          Compare
        </NavLink>
        <NavLink to="/speed" className={linkClass}>
          <img src="/icons/gray/stopwatch.png" alt="Speed Test" className="h-5 w-5" />
          Speed Test
        </NavLink>
        <NavLink to="/calculator" className={linkClass}>
          <img src="/icons/gray/calculator.png" alt="Calculator" className="h-5 w-5" />
          Calculator
        </NavLink>
        <NavLink to="/coverage" className={linkClass}>
          <img src="/icons/gray/location.png" alt="Coverage" className="h-5 w-5" />
          Coverage
        </NavLink>
      </div>
    </nav>
  );
}


