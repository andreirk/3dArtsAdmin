import {
  EditOutlined
  
} from '@ant-design/icons';
import { Card, List } from 'antd';
import { useState } from 'react';
import { useActions } from '~/hooks/useActions';
import { useTypedSelector } from '~/hooks/useTypedSelector';
import ArtGalleryModal from './ArtGalleryModal';


function ArtGalleryGrid({ data }: any) {
  const [tempCurrentItem, setTempCurrentItem] = useState(null)
  const { toggleModalWindowOpen, setCurrentArtItemById, createNewItem, updateItem } =
    useActions();
  const onEditHandle = (itemId) => {
    setCurrentArtItemById(itemId);
    toggleModalWindowOpen(true);
  };

  const currentItem: any =  useTypedSelector(state => state.artGallery.currentItem)

  const onDataSumbit = () => {
    if(currentItem?.id){
      updateItem({ ...currentItem, ...tempCurrentItem });
    } else {
       createNewItem(tempCurrentItem);
    }
   
    toggleModalWindowOpen(false)
  }
  const onEditCancel = () => {
    toggleModalWindowOpen(false);
  }
  const onDataChange = (changedData) => {
    setTempCurrentItem({ ...tempCurrentItem, ...changedData })
 
  }

  return (
    <div style={{ display: 'grid', backgroundColor: '#D6DBDF' }}>
      <>
        {data && data.length && (
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 5,
              xxl: 3,
            }}
            dataSource={data}
            renderItem={(item: any) => (
              <List.Item>
                <Card
                  title={`${item.title}`}
                  cover={<img alt="example" src={item.imageUrl} />}
                  actions={[
                    <EditOutlined
                      key="edit"
                      onClick={() => onEditHandle(item.id)}
                    />,
                  ]}
                >
                  Price: {item.price}
                </Card>
              </List.Item>
            )}
          />
        )}
        <ArtGalleryModal onSubmit={onDataSumbit}  onCancel={onEditCancel} onDataChange={onDataChange}  />
      </>
    </div>
  );
}

export default ArtGalleryGrid;
