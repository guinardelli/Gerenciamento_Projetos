
import React from 'react';

export const ProjectHeader: React.FC = () => {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-col">
        <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight">Obra 2024-001</h1>
        <p className="text-gray-500 dark:text-gray-400 text-base font-normal">Cliente: Construtora Exemplo Ltda.</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          <span className="material-symbols-outlined text-lg">share</span>
          <span className="truncate">Compartilhar Projeto</span>
        </button>
      </div>
    </header>
  );
};
