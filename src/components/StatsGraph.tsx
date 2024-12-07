import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface StatsGraphProps {
  data: { value: number }[];
  color: string;
}

export const StatsGraph: React.FC<StatsGraphProps> = ({ data, color }) => {
  return (
    <div className="h-16">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color} 
            strokeWidth={2} 
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}