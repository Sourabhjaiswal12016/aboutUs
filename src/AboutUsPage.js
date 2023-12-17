// AboutUsPage.js

import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <header>
        <h1 className='about-head1'>Welcome to TechiEco Solutions Pvt. Ltd.</h1>
      </header>
      <section className='each-sections'>
        <h2 className='about-head2'>Who We Are</h2>
        <div className='hz-line'></div>
        <p className='about-text'>
          TechiEco Solutions Pvt. Ltd. is a firm that sells waste management robots built using IoT and AIML. The company's board of directors have patented the technology that they're offering. The technology aims to provide a wide range of modifications and applications. It also aims to build multiple other technologies that aid in improving the ecosystem.
        </p>
      </section>
      <section className='each-sections'>
        <h2 className='about-head2'>Target Customers</h2>
        <div className='hz-line'></div>
        <p className='about-text'>
          TechiEco Solutions Pvt. Ltd.’s ideal customers include housing societies, corporate offices and municipal corporations managing public places. However, several additional technology applications may be further developed by simply altering the training dataset.
        </p>
      </section>
      <section className='each-sections'>
        <h2 className='about-head2'>Market Insights</h2>
        <div className='hz-line'></div>
        <p className='about-text'>
          Considering the significance of waste management, particularly in the medical sector, and the urgent need to preserve the environment, the waste management market in India is expected to reach USD 15 billion by 2025, growing at around 7% annually.
        </p>
      </section>
      <section className='each-sections'>
        <h2 className='about-head2'>Product Pricing and Promotion</h2>
        <div className='hz-line'></div>
        <p className='about-text'>
          As a result of the inevitable requirement for monitoring and maintenance services, the product is priced at the B2B industry level, with bigger purchases qualifying for volume discounts. TechiEco Solutions Pvt. Ltd. intends to advertise its goods digitally and at industry trade events.
        </p>
      </section>
      <section className='each-sections'>
        <h2 className='about-head2'>Current Status</h2>
        <div className='hz-line'></div>
        <p className='about-text'>
          TechiEco Solutions Pvt. Ltd. is pre-launch currently, and the product is in the hardware prototype stage. This startup was founded by Aditya Milind Mate, Harshiq Gandhi and Hardik Sharma.
        </p>
      </section>
      <footer>
        <h1>Contact us at: info@techieco.com</h1>
      </footer>
    </div>
  );
};

export default AboutUsPage;
