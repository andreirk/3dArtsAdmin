import React, { useState } from 'react';

import { Footer } from '~/features/Footer';
import { Header } from '~/features/Header';
import { ArtGallery } from '~/features/ArtGallery';
import { PageTemplate } from '~/ui/templates';

export const RootPage: React.FC = () => {

  return <PageTemplate
    footer={<Footer />}
    content={<ArtGallery />}
    header={<Header />}
  />;
};
