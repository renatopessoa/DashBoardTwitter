import { Stats, Tweet } from '../types';

export const mockStats: Stats = {
  tweets: { 
    value: 167, 
    data: Array(30).fill(null).map(() => ({ value: 150 + Math.random() * 30 })) 
  },
  following: { 
    value: 185, 
    data: Array(30).fill(null).map(() => ({ value: 170 + Math.random() * 30 })) 
  },
  followers: { 
    value: 95, 
    data: Array(30).fill(null).map(() => ({ value: 80 + Math.random() * 30 })) 
  },
  listed: { 
    value: 0, 
    data: Array(30).fill(null).map(() => ({ value: Math.random() * 5 })) 
  },
  favorites: { 
    value: 196, 
    data: Array(30).fill(null).map(() => ({ value: 180 + Math.random() * 30 })) 
  },
  retweets: {
    value: 45,
    data: Array(30).fill(null).map(() => ({ value: 40 + Math.random() * 10 }))
  },
  likes: {
    value: 320,
    data: Array(30).fill(null).map(() => ({ value: 300 + Math.random() * 40 }))
  }
};

export const mockTopTweets: Tweet[] = [
  { id: 1, text: "Did you miss the last Local S...", value: 7 },
  { id: 2, text: "If you want to use the Mobil...", value: 4 },
  { id: 3, text: "#LocalSEO expert @keyserh...", value: 4 },
  { id: 4, text: "Use @Suzicks's tips to mon...", value: 4 },
  { id: 5, text: "🔥 Happening tomorrow! ...", value: 3 },
  { id: 6, text: "As CEO of TopRank Marketin...", value: 2 },
  { id: 7, text: "As businesses try to be nimb...", value: 2 },
  { id: 8, text: "https://t.co/pEiJAjKWZG", value: 2 },
  { id: 9, text: "1. Create a plan of operation...", value: 2 },
  { id: 10, text: "@philrozek of Local Visibilit...", value: 1 }
];