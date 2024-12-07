export interface Tweet {
  id: string | number;
  text: string;
  value: number;
}

export interface StatsData {
  value: number;
  data: { value: number }[];
}

export interface Stats {
  tweets: StatsData;
  retweets: StatsData;
  likes: StatsData;
  following: StatsData;
  followers: StatsData;
  listed: StatsData;
  favorites: StatsData;
}