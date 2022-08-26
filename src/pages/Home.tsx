import { InfiniteScrollCustomEvent, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonPage, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { usePosts } from '../api/usePosts';
import { FeedItem } from '../components';

const PageSize = 20;

const Home: React.FC = () => {
  const { data, isLoading } = usePosts();
  const [end, setEnd] = useState(PageSize);

  const onReachEnd = (e: InfiniteScrollCustomEvent) => {
    setEnd(c => c + PageSize);
    e.target.complete();
  }

  return (
    <IonPage>
      <IonHeader translucent collapse="fade">
        <IonToolbar>
          <IonTitle size="large">Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader translucent collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        {isLoading ?
          <div style={{ position: 'fixed', top: '50%', left: '50%' }}>
            <IonSpinner />
          </div>
          :
          <>
            <IonList>
              {data?.slice(0, end).map(postId => <FeedItem key={postId} postId={postId} />)}
            </IonList>
            <IonInfiniteScroll
              onIonInfinite={onReachEnd}
              threshold="100px"
              disabled={data && data.length <= end}
            >
              <IonInfiniteScrollContent />
            </IonInfiniteScroll>
          </>
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
