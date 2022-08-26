import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import parse from 'html-react-parser';
import { usePost } from '../api/usePost';
import { CommentSkeleton } from './skeletons';
import dayjs from 'dayjs';

interface IProps {
    commentId: number;
}
export const CommentItem: React.FC<IProps> = ({ commentId }) => {
    const { data, isLoading } = usePost(commentId);

    if (isLoading) {
        return <CommentSkeleton />;
    }

    return (
        <IonItem key={commentId} lines='none'>
            <IonLabel style={{ borderLeft: "1px solid var(--ion-color-light-tint)", borderRadius: "4px", paddingLeft: "8px" }}>
                <p>{data?.by} • {!!data?.time && dayjs.unix(data.time).fromNow()}</p>
                {!!data?.text && <h3 style={{ 'whiteSpace': 'initial' }}>{parse(data?.text)}</h3>}
                {!!data?.kids && (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {data?.kids?.map(subCommentId => <CommentItem commentId={subCommentId} />)}
                    </div>
                )}
            </IonLabel>
        </IonItem>
    );
}
