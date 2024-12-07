import { Stats, Tweet } from '../types';
import { mockStats, mockTopTweets } from '../data/mockData';

const generateTimeSeriesData = (count: number, baseValue: number) => {
  return Array(30).fill(null).map(() => ({
    value: Math.max(0, baseValue - Math.floor(Math.random() * (baseValue * 0.2)))
  }));
};

export const getTwitterStats = async (): Promise<{ stats: Stats; topTweets: Tweet[] }> => {
  console.info('Using mock data for Twitter statistics');
  return {
    stats: mockStats,
    topTweets: mockTopTweets
  };
};