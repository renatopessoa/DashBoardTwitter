import React from 'react';
import { Stats } from '../types';

interface OverviewProps {
  stats: Stats;
}

export const Overview: React.FC<OverviewProps> = ({ stats }) => {
  const metrics = [
    { label: 'TWEETS', value: stats.tweets.value },
    { label: 'FOLLOWING', value: stats.following.value },
    { label: 'FOLLOWERS', value: stats.followers.value },
    { label: 'LISTED', value: stats.listed.value },
    { label: 'FAVORITES', value: stats.favorites.value }
  ];

  return (
    <div className="bg-[#1e2736] p-4 rounded-lg">
      <div className="grid grid-cols-5 gap-4">
        {metrics.map(({ label, value }) => (
          <div key={label}>
            <p className="text-gray-400 text-xs">{label}</p>
            <p className="text-white">{value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}