import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/footer';
import Sidebar from './Sidebar';

function Terms() {
  return (
    <div>
      <Header />
      <div className="global-body">
        <Sidebar />
        <h1>Terms and Conditions</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
          consectetur libero. Suspendisse potenti. Nulla nec mi
          ullamcorper, lacinia sapien nec, commodo libero. Donec ac
          tincidunt sem. Nullam nec lacus sit amet elit dictum
          consectetur. Nullam nec lacus sit amet elit dictum
          consectetur. Nullam nec lacus sit amet elit dictum
        </p>
        <Footer />
      </div>
    </div>
  );
};

export default Terms