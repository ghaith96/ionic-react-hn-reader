import { useQuery } from '@tanstack/react-query';
import { Story } from '../types';

export const postFetcher = async (id: number) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return response.json();
}

export const usePost = (id: number) => {
    return useQuery<Story>(['posts', id], () => postFetcher(id));
}

