import React, { useEffect, useState } from 'react';
import { TwitterLogo } from './components/TwitterLogo';
import { StatsCard } from './components/StatsCard';
import { TweetList } from './components/TweetList';
import { Overview } from './components/Overview';
import { getTwitterStats } from './services/twitter';
import { Stats, Tweet } from './types';

export const App: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [topTweets, setTopTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTwitterData = async () => {
      try {
        setLoading(true);
        const { stats: newStats, topTweets: newTweets } = await getTwitterStats();
        setStats(newStats);
        setTopTweets(newTweets);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch Twitter data:', err);
        setError('Failed to load Twitter data. Please check your API credentials.');
      } finally {
        setLoading(false);
      }
    };

    fetchTwitterData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#15202b] flex items-center justify-center">
        <div className="text-white text-lg">Loading Twitter data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#15202b] flex items-center justify-center">
        <div className="text-white text-lg bg-red-500/10 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#15202b] p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-4">
          <TwitterLogo />
          <StatsCard 
            title="TWEETS"
            stats={stats.tweets}
            color="#1da1f2"
          />
          <StatsCard 
            title="RETWEETS"
            stats={stats.retweets}
            color="#17bf63"
          />
          <StatsCard 
            title="LIKES"
            stats={stats.likes}
            color="#e0245e"
          />
        </div>
        
        <div className="lg:col-span-2 space-y-4">
          <Overview stats={stats} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TweetList 
              title="Top Tweets by Retweets"
              tweets={topTweets}
              valueLabel="RETWEETS"
            />
            <TweetList 
              title="Top Tweets by Likes"
              tweets={topTweets}
              valueLabel="LIKES"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;