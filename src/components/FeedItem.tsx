import React from 'react';
import { IonItem, IonAvatar, IonLabel, IonRouterLink, useIonToast } from '@ionic/react';
import { FeedItemSkeleton } from './skeletons';
import { usePost } from '../api/usePost';
import dayjs from 'dayjs';

interface IProps {
    postId: number;
    readonly?: boolean;
}

export const FeedItem: React.FC<IProps> = ({ postId, readonly }) => {
    const { data, isLoading } = usePost(postId)
    const [present] = useIonToast();

    if (isLoading) {
        return <FeedItemSkeleton />;
    }

    const copyUrlToClipboard = () => {
        navigator.clipboard.writeText(data?.url ?? '');
        present('Copied to Clipboard', 2000);
    }

    return (
        <IonItem routerLink={readonly ? undefined : `/post/${data?.id}`}>
            <IonAvatar slot='start'>
                <img src={`https://www.google.com/s2/favicons?domain=${new URL(data?.url ?? 'https://news.ycombinator.com/').hostname}&sz=256`} alt="favicon" />
            </IonAvatar>
            <IonLabel>
                <h2>{data?.title}</h2>
                <p onClick={copyUrlToClipboard} style={{ cursor: 'pointer' }}><IonRouterLink target={data?.url ? '_blank' : undefined} href={data?.url ?? `/post/${data?.id}`}>{data?.url}</IonRouterLink>{data?.url}</p>
                <h4>{data?.by} {!!data?.time && dayjs.unix(data?.time).fromNow()} • {data?.score} • {data?.descendants} comments</h4>
            </IonLabel>
        </IonItem>
    );
}
