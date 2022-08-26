import { IonItem, IonLabel, IonSkeletonText } from '@ionic/react';
import React from 'react';

const CommentSkeleton: React.FC = () => {

    return (
        <IonItem>
            <IonLabel>
                <p><IonSkeletonText style={{ width: '50%', borderRadius: '4px' }} animated={true}></IonSkeletonText></p>
                <h3><IonSkeletonText style={{ width: '80%', borderRadius: '4px' }} animated={true}></IonSkeletonText></h3>
            </IonLabel>
        </IonItem>
    )
};

export default CommentSkeleton;
