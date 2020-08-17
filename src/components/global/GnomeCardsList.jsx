import React, {useContext} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Row, Col} from 'react-bootstrap';
import {GnomesContext} from '../../context/gnomesContext';
import GnomeCard from './GnomeCard';
import InfoMessage from './InfoMessage';
import Loader from './Loader';

const GnomeCardsList = () => {
  const {isOnline, errorOnLoad, filteredGnomes, loadMoreGnomes} = useContext(GnomesContext);

  return (
    <>
      {isOnline ? (
        !errorOnLoad ? (
          filteredGnomes ? (
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
              <InfoMessage
                emoji="&#128533;"
                message="No results, try searching something else"
                badgeLink
              />
            )
          ) : (
            <Loader />
          )
        ) : (
          <InfoMessage emoji="&#129488;" message="Error loading data" reloadButton />
        )
      ) : (
        <InfoMessage emoji="#127760" message="Internet conection problems?" reloadButton />
      )}
    </>
  );
};

export default GnomeCardsList;
