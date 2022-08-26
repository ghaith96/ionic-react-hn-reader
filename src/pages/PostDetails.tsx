import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonButtons, IonBackButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { usePost } from '../api/usePost';
import { CommentItem, FeedItem } from '../components';
import parse from 'html-react-parser';

interface IProps extends RouteComponentProps<{ postId: string }> { }

const PostDetails: React.FC<IProps> = ({ match }) => {
    const { data, isLoading } = usePost(parseInt(match.params.postId));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Post</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {!!data && <FeedItem readonly postId={parseInt(match.params.postId)} />}
                {!!data?.text && <IonItem>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {parse(data?.text)}
                    </div>
                </IonItem>}
                <IonList>
                    <IonListHeader> Comments </IonListHeader>
                    {data?.kids?.map(commentId => <CommentItem key={commentId} commentId={commentId} />)}
                </IonList>
            </IonContent>
        </IonPage >
    );
}

export default PostDetails;
