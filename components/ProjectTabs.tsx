
import React from 'react';

const TabLink = ({ label, href, isActive = false }: { label: string; href: string; isActive?: boolean }) => {
  const activeClasses = "border-b-primary text-primary";
  const inactiveClasses = "border-b-transparent text-gray-500 dark:text-gray-400";
  return (
    <a className={`flex items-center justify-center border-b-2 pb-3 ${isActive ? activeClasses : inactiveClasses}`} href={href}>
      <p className="text-sm font-bold tracking-wide">{label}</p>
    </a>
  );
}

export const ProjectTabs: React.FC = () => {
  return (
    <div className="mt-6 border-b border-gray-200 dark:border-gray-700">
      <div className="flex gap-8">
        <TabLink label="Informações Gerais" href="#" />
        <TabLink label="Timeline do Projeto" href="#" />
        <TabLink label="Controle de Peças" href="#" isActive={true} />
      </div>
    </div>
  );
};
