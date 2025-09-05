export interface RedditPost {
  data: {
    id: string;
    title: string;
    author: string;
    subreddit: string;
    permalink: string;
    selftext: string;
    url: string;
    created_utc: number;
    ups: number;
    num_comments: number;
  };
}
