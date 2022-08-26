import { useQuery } from '@tanstack/react-query';

const postsFetcher = async () => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    return response.json();
}

export const usePosts = () => {
    return useQuery<number[]>(['posts'], postsFetcher);
}
