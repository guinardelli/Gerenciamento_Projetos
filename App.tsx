
import React, { useState, useMemo, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProjectHeader } from './components/ProjectHeader';
import { ProjectTabs } from './components/ProjectTabs';
import { PartsControl } from './components/PartsControl';
import { INITIAL_PARTS } from './constants';
import { StructuralPart, Status, SortableKey, SortDirection } from './types';

function App() {
  const [parts, setParts] = useState<StructuralPart[]>(INITIAL_PARTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all');
  const [sortKey, setSortKey] = useState<SortableKey>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = useCallback((key: SortableKey) => {
    if (sortKey === key) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  }, [sortKey]);

  const filteredAndSortedParts = useMemo(() => {
    let filtered = parts.filter(part => {
      const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            part.section.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || part.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    return filtered.sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      
      if (aValue === null || bValue === null) return 0;
      
      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [parts, searchTerm, statusFilter, sortKey, sortDirection]);

  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar />
      <main className="flex-1">
        <div className="p-6 md:p-8 lg:p-10">
          <ProjectHeader />
          <ProjectTabs />
          <PartsControl 
            parts={filteredAndSortedParts}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sortKey={sortKey}
            sortDirection={sortDirection}
            onSort={handleSort}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
