
import React from 'react';
import { Status } from '../types';
import { STATUS_CONFIG } from '../constants';

interface StatusBadgeProps {
  status: Status;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config = STATUS_CONFIG[status];

  if (!config) {
    return null;
  }

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${config.classes}`}>
      {config.text}
    </span>
  );
};
