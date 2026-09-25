import React from 'react';
import Banner from './components/banner';
import LibraryPage from './library/page';
import Footer from './components/footer';

const page = () => {
  return (
    <div>
      <h2>home page</h2>
      <Banner></Banner>
      <LibraryPage></LibraryPage>
       <Footer></Footer>

    </div>
  );
};

export default page;