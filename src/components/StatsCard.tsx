import React from 'react';
import { StatsGraph } from './StatsGraph';
import { StatsData } from '../types';

interface StatsCardProps {
  title: string;
  stats: StatsData;
  color: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, stats, color }) => {
  return (
    <div className="bg-[#1e2736] p-4 rounded-lg">
      <div className="mb-2">
        <h3 className="text-gray-400 uppercase text-xs">{title}</h3>
        <p className="text-white text-2xl font-semibold">{stats.value}</p>
      </div>
      <StatsGraph data={stats.data} color={color} />
    </div>
  );
}