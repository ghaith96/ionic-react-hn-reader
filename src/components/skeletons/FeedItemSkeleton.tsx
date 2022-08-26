import { IonItem, IonAvatar, IonLabel, IonSkeletonText } from '@ionic/react';
import React from 'react';

const FeedItemSkeleton: React.FC = () => {

    return (
        <IonItem>
            <IonAvatar slot='start'>
                <IonSkeletonText animated={true}></IonSkeletonText>
            </IonAvatar>
            <IonLabel>
                <h2>
                    <IonSkeletonText style={{ width: '50%', borderRadius: '4px' }} animated={true}></IonSkeletonText>
                </h2>
                <p>
                    <IonSkeletonText style={{ width: '80%', borderRadius: '4px' }} animated={true}></IonSkeletonText>
                </p>
                <h4>
                    <IonSkeletonText style={{ width: '30%', borderRadius: '4px' }} animated={true}></IonSkeletonText>
                </h4>
            </IonLabel>
        </IonItem>
    )
};

export default FeedItemSkeleton;
