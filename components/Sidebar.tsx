
import React from 'react';

const NavLink = ({ icon, label, href, isActive = false }: { icon: string; label: string; href: string; isActive?: boolean }) => {
  const activeClasses = "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300";
  const inactiveClasses = "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800";
  return (
    <a className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? activeClasses : inactiveClasses}`} href={href}>
      <span className="material-symbols-outlined text-xl">{icon}</span>
      <p className="text-sm font-medium leading-normal">{label}</p>
    </a>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-3">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://i.pravatar.cc/150?u=civilengineer")' }}></div>
          <div className="flex flex-col">
            <h1 className="text-gray-900 dark:text-gray-100 text-base font-medium leading-normal">Eng. Civil</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">engenharia@civil.com</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          <NavLink icon="dashboard" label="Dashboard" href="#" />
          <NavLink icon="folder" label="Projetos" href="#" isActive={true} />
          <NavLink icon="bar_chart" label="Relatórios" href="#" />
          <NavLink icon="settings" label="Configurações" href="#" />
        </nav>
      </div>
      <div className="mt-auto p-4">
        <NavLink icon="help" label="Ajuda" href="#" />
      </div>
    </aside>
  );
};
