import { NavLink, Outlet } from 'react-router-dom';
import { Brand } from '../components/Brand';

const items = [['Dashboard','/admin'],['Members','/admin/members'],['Reports','/admin/reports'],['Settings','/admin/settings']];
export function AdminLayout(){return <div className="min-h-screen bg-surface"><header className="border-b border-border bg-white"><div className="page-container flex items-center justify-between py-4"><Brand/><span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">Community Admin</span></div></header><div className="page-container grid gap-8 py-8 lg:grid-cols-[220px_1fr]"><nav className="space-y-1">{items.map(([label,to])=><NavLink key={to} to={to} end={to==='/admin'} className={({isActive})=>`block rounded-xl px-3 py-2.5 text-sm font-medium ${isActive?'bg-white shadow-soft':'text-muted hover:bg-white'}`}>{label}</NavLink>)}</nav><main><Outlet/></main></div></div>}
