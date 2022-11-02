import React, { useEffect } from 'react';

import {
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';

import { Button } from 'antd';

import { useActions } from '~/hooks/useActions';
import { useTypedSelector } from '~/hooks/useTypedSelector';

import ArtGalleryGrid from './ArtGalleryGrid';

const ArtGalleryConteiner = () => {
  const MemoizedArtGalleryGrid = React.memo(ArtGalleryGrid);

  const { items, order } = useTypedSelector(state => state.artGallery)
  const { fetchArtItems, toggleModalWindowOpen, setCurrentArtItem, sortArtItems } =  useActions();

  useEffect(() => {
    fetchArtItems();
  }, [])

  const onItemAddClick = () => {
    toggleModalWindowOpen(true);
    setCurrentArtItem(null);
  };
  const onItemSortClick = () => {
    // todo constants !
    if(order === 'asc'){
      sortArtItems('desc')
    } else sortArtItems('asc')
    
  };
  
  return (
    <div style={{ display: 'grid', backgroundColor: '#D6DBDF' }}>
      <div
        style={{
          textAlign: 'center',
          margin: 0,
          marginBottom: '0.4rem',
          marginTop: '.4rem',
          color: 'red',
          fontSize: '1.5rem',
        }}
      >
        <span>Art Items</span>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginRight: '.4rem',
          marginBottom: '.4rem',
        }}
      >
        <Button
          onClick={onItemAddClick}
          size='large'
          style={{
            backgroundColor: '#3399CC',
            color: 'white',
          }}
        >
          Create new
        </Button>
        <Button
          onClick={onItemSortClick}
          size='large'
          icon={order === 'asc' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          style={{
            backgroundColor: '#3399CC',
            color: 'white',
          }}
        >
          Sort {order === 'asc' ? "ASC" : "DESC"}
        </Button>
      </div>
      <div style={{ margin: '.4rem' }}>
        <MemoizedArtGalleryGrid data={items} />
    
      </div>
    </div>
  );
};

export default ArtGalleryConteiner;
