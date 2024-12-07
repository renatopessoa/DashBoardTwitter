import React from 'react';
import { Tweet } from '../types';

interface TweetListProps {
  title: string;
  tweets: Tweet[];
  valueLabel: string;
}

export const TweetList: React.FC<TweetListProps> = ({ title, tweets, valueLabel }) => {
  const maxValue = Math.max(...tweets.map(t => t.value));

  return (
    <div className="bg-[#1e2736] p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-400 text-sm">{title}</h2>
        <span className="text-gray-400 text-xs">{valueLabel}</span>
      </div>
      <div className="space-y-3">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="flex justify-between items-center gap-4">
            <p className="text-white text-sm truncate flex-1">{tweet.text}</p>
            <div className="flex items-center gap-2 min-w-[100px]">
              <span className="text-gray-400 text-sm">{tweet.value}</span>
              <div 
                className="h-1 bg-[#f91880] rounded-full transition-all duration-300"
                style={{ width: `${(tweet.value / maxValue) * 80}px` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}