
import React from 'react';
import { StructuralPart, Status, SortableKey, SortDirection } from '../types';
import { PartsTable } from './PartsTable';

interface PartsControlProps {
  parts: StructuralPart[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: Status | 'all';
  setStatusFilter: (status: Status | 'all') => void;
  sortKey: SortableKey;
  sortDirection: SortDirection;
  onSort: (key: SortableKey) => void;
}

export const PartsControl: React.FC<PartsControlProps> = ({ 
  parts, 
  searchTerm, 
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  sortKey,
  sortDirection,
  onSort
}) => {
  const totalVolume = parts.reduce((acc, part) => acc + part.totalVolume, 0);
  const totalParts = parts.reduce((acc, part) => acc + part.quantity, 0);
  const needsRevision = parts.some(p => p.status === Status.Revisao);

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-gray-900 dark:text-white text-xl font-bold tracking-tight">Controle de Peças Estruturais</h2>
        <div className="flex flex-wrap items-center gap-4">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <span className="material-symbols-outlined text-lg">upload_file</span>
            <span className="truncate">Exportar</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <span className="material-symbols-outlined text-lg">add</span>
            <span className="truncate">Adicionar Peça</span>
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input 
            className="w-full h-10 pl-10 pr-4 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-200 focus:ring-primary focus:border-primary" 
            placeholder="Pesquisar peça..." 
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative flex-grow sm:flex-grow-0 sm:w-56">
          <select 
            className="w-full h-10 pl-3 pr-8 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-200 focus:ring-primary focus:border-primary"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as Status | 'all')}
          >
            <option value="all">Filtrar por Status</option>
            {Object.values(Status).map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 flow-root">
        <PartsTable 
            parts={parts}
            sortKey={sortKey}
            sortDirection={sortDirection}
            onSort={onSort}
            totalVolume={totalVolume}
            totalParts={totalParts}
            needsRevision={needsRevision}
        />
      </div>
    </div>
  );
};
