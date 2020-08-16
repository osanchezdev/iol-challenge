import React, {Suspense, useContext} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Row, Col} from 'react-bootstrap';
import {GnomesContext} from '../../context/gnomesContext';
import GnomeCard from './GnomeCard';
import Loader from './Loader';

const LazyNoResults = React.lazy(() => import('./NoResults'));

const GnomeCardsList = () => {
  const {filteredGnomes, loadMoreGnomes} = useContext(GnomesContext);

  return (
    <Suspense fallback={<Loader />}>
      {filteredGnomes ? (
        filteredGnomes.length ? (
          <InfiniteScroll
            dataLength={filteredGnomes.length}
            next={loadMoreGnomes}
            hasMore={true}
            loader={null}
            style={{overflow: 'hidden'}}
            endMessage={
              <p style={{textAlign: 'center'}}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            refreshFunction={() => {}}>
            <Row>
              {filteredGnomes.map(gnome => (
                <Col key={gnome.id} xs={6} sm={6} xl={3} md={3}>
                  <GnomeCard {...gnome} />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        ) : (
          <LazyNoResults />
        )
      ) : (
        <Loader />
      )}
    </Suspense>
  );
};

export default GnomeCardsList;
