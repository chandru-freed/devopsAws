import { FeaturedProjectCard, LocationBox, BrowserCard } from 'components';
import React from 'react';

export const FeatureHome = () => {
  return (
    <div>
      <FeaturedProjectCard
        imageSrc='https://teja10.kuikr.com//r1/20191202/ak_1024_1502823580-1575263537_300x300.jpeg'
        price='₹81.90 Lakhs To 1.17 Crore'
        title='Kolte Patil I TOWERS Exente'
        address='in Electronic City Phase I, Bangalore'
        flats='2, 2.5, 3 &amp; 4 BHK Apartment'
        developerName='Kolte Patil Developers Ltd'
      />
      <LocationBox title='Whitefield' saleTag='2400+ for Sale' rentTag='200+ for Rent' />
      <BrowserCard
        priceList={['Below ₹60 lakhs', '₹60 lakhs - ₹80 lakhs', '₹80 lakhs - ₹90 lakhs']}
        title='Buy - Apartments'
        imageSrc='https://teja8.kuikr.com/cfassets/images/buy-villas.jpg'
      />
    </div>
  );
};