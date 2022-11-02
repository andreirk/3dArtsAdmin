
import { Card, List } from 'antd';
import { useTypedSelector } from '~/hooks/useTypedSelector';


function ArtGalleryPreview({ data }: any) {
  const items = useTypedSelector(state => state.artGallery.items)
  return (
    <div style={{ display: 'grid', backgroundColor: '#D6DBDF', }}>
      <>
        {items && items.length && (
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={items}
            renderItem={(item: any) => (
              <List.Item>
                <Card
                  title={`${item.title} price: ${item.price}`}
                  cover={<img alt="example" src={item.imageUrl} />}
     
                >
                  Price: {item.price}
                </Card>
              </List.Item>
            )}
          />
        )}
      </>
    </div>
  );
}

export default ArtGalleryPreview;
