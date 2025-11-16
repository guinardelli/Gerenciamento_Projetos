
import React from 'react';
import { StructuralPart, SortableKey, SortDirection } from '../types';
import { StatusBadge } from './StatusBadge';

interface PartsTableProps {
  parts: StructuralPart[];
  sortKey: SortableKey;
  sortDirection: SortDirection;
  onSort: (key: SortableKey) => void;
  totalVolume: number;
  totalParts: number;
  needsRevision: boolean;
}

const TableHeader: React.FC<{
  label: string;
  sortable?: boolean;
  sortKey?: SortableKey;
  currentSortKey?: SortableKey;
  sortDirection?: SortDirection;
  onSort?: (key: SortableKey) => void;
  className?: string;
}> = ({ label, sortable, sortKey, currentSortKey, sortDirection, onSort, className = "" }) => {
  const isSorting = currentSortKey === sortKey;
  
  const content = sortable && sortKey && onSort ? (
    <a className="group inline-flex items-center gap-1 cursor-pointer" onClick={() => onSort(sortKey)}>
      {label}
      <span className={`material-symbols-outlined sort-icon text-base ${isSorting ? 'opacity-100' : ''}`}>
        {isSorting ? (sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'swap_vert'}
      </span>
    </a>
  ) : (
    label
  );

  return (
    <th scope="col" className={`py-3.5 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider ${className}`}>
      {content}
    </th>
  );
};


export const PartsTable: React.FC<PartsTableProps> = ({ 
    parts, 
    sortKey, 
    sortDirection, 
    onSort, 
    totalVolume, 
    totalParts,
    needsRevision
}) => {
  return (
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800/50">
              <tr>
                <TableHeader label="Peça" sortable sortKey="name" currentSortKey={sortKey} sortDirection={sortDirection} onSort={onSort} className="pl-4 pr-3 sm:pl-6" />
                <TableHeader label="Quantidade" sortable sortKey="quantity" currentSortKey={sortKey} sortDirection={sortDirection} onSort={onSort} className="px-3" />
                <TableHeader label="Seção" className="px-3" />
                <TableHeader label="Comprimento (m)" sortable sortKey="length" currentSortKey={sortKey} sortDirection={sortDirection} onSort={onSort} className="px-3" />
                <TableHeader label="Volume Unit. (m³)" sortable sortKey="unitVolume" currentSortKey={sortKey} sortDirection={sortDirection} onSort={onSort} className="px-3" />
                <TableHeader label="Volume Total (m³)" sortable sortKey="totalVolume" currentSortKey={sortKey} sortDirection={sortDirection} onSort={onSort} className="px-3" />
                <TableHeader label="Status" sortable sortKey="status" currentSortKey={sortKey} sortDirection={sortDirection} onSort={onSort} className="px-3" />
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-background-dark">
              {parts.length > 0 ? parts.map((part) => (
                <tr key={part.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">{part.name}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{part.quantity}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{part.section}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{part.length?.toFixed(2) ?? 'N/A'}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{part.unitVolume.toFixed(3)}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">{part.totalVolume.toFixed(3)}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">
                    <StatusBadge status={part.status} />
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6">
                    <div className="flex items-center gap-4">
                      <button className="text-primary hover:text-primary/80"><span className="material-symbols-outlined text-xl">edit</span></button>
                      <button className="text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-400"><span className="material-symbols-outlined text-xl">delete</span></button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                    <td colSpan={8} className="text-center py-10 text-gray-500 dark:text-gray-400">
                        Nenhuma peça encontrada.
                    </td>
                </tr>
              )}
            </tbody>
            <tfoot className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <tr>
                    <td className="px-4 py-3 sm:px-6 text-sm font-medium text-gray-900 dark:text-white" colSpan={5}>
                    {needsRevision && (
                        <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                            <span className="material-symbols-outlined text-lg">warning</span>
                            <span>Alerta: Alguma(s) peça(s) requer(em) revisão.</span>
                        </div>
                    )}
                    </td>
                    <td className="px-3 py-3 text-right text-sm font-semibold text-gray-900 dark:text-white">{totalVolume.toFixed(3)} m³</td>
                    <td className="px-3 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white" colSpan={2}>{totalParts} peças</td>
                </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
