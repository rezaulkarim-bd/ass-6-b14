import React from 'react';
import Banner from './components/banner';
import LibraryPage from './library/page';

const page = () => {
  return (
    <div>
      <h2>home page</h2>
      <Banner></Banner>
      <LibraryPage></LibraryPage>

    </div>
  );
};

export default page;