import React, { useState } from 'react';
import ArtGalleryPreview from '~/features/ArtGallery/organisms/ArtGalleryPreview';

import { Footer } from '~/features/Footer';
import { Header } from '~/features/Header';
import { PageTemplate } from '~/ui/templates';

export const PrevewPage: React.FC = () => {

  return <PageTemplate
    header={<Header />} 
     content={<ArtGalleryPreview />}
    footer={<Footer />}
  />;
};
