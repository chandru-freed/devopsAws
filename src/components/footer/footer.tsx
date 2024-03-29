import styles from './footer.module.scss';
export const Footer = () => {
  const realEstateLinks = [
    { title: 'Bangalore Real Estate', link: '/property-in-bangalore' },
    { title: 'Chennai Real Estate', link: '/property-in-chennai' },
  ];
  return (
    <>
      <footer className={styles['container']}>
        <div style={{ maxWidth: '1125px', padding: '10px 0 25px' }}>
          <div className={styles['sub-container']}>
            <div className={styles['footerlinktitle']}>Real Estate</div>
            <ul className='fltitlelink'>
              {realEstateLinks.map((item, i) => (
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href={item.link}
                    data-tracking-id='footer-links'
                    title='Real Estate in Bangalore'
                    target=''>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles['footer']}>
            <div className='col-xs-12'>
              <div className='bdtplgt mrbt30'></div>
              <div className={styles['footerlinktitle']}>Real Estate</div>
              <ul className='fltitlelink'>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/bangalore-city'
                    data-tracking-id='footer-links'
                    title='Real Estate in Bangalore'
                    target=''>
                    Bangalore Real Estate
                  </a>
                </li>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/mumbai-city'
                    data-tracking-id='footer-links'
                    title='Real Estate in Mumbai'
                    target=''>
                    Mumbai Real Estate
                  </a>
                </li>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/delhi-city'
                    data-tracking-id='footer-links'
                    title='Real Estate in Delhi'
                    target=''>
                    Delhi Real Estate
                  </a>
                </li>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/pune-city'
                    data-tracking-id='footer-links'
                    title='Real Estate in Pune'
                    target=''>
                    Pune Real Estate
                  </a>
                </li>
              </ul>
              <div className={styles['footerlinktitle']}>Buy Property</div>
              <ul className='fltitlelink'>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/bangalore-property/for-sale'
                    data-tracking-id='footer-links'
                    title='Properties for Sale in Bangalore'
                    target=''>
                    Buy Property in Bangalore
                  </a>
                </li>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/mumbai-property/for-sale'
                    data-tracking-id='footer-links'
                    title='Properties for Sale in Mumbai'
                    target=''>
                    Buy Property in Mumbai
                  </a>
                </li>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/delhi-property/for-sale'
                    data-tracking-id='footer-links'
                    title='Properties for Sale in Delhi'
                    target=''>
                    Buy Property in Delhi
                  </a>
                </li>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/pune-property/for-sale'
                    data-tracking-id='footer-links'
                    title='Properties for Sale in Pune'
                    target=''>
                    Buy Property in Pune
                  </a>
                </li>
              </ul>

              <div className={styles['footerlinktitle']}>Residential Projects</div>
              <ul className='fltitlelink'>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/bangalore-property/projects'
                    data-tracking-id='footer-links'
                    title='Residential Projects in Bangalore'
                    target=''>
                    Projects in Bangalore
                  </a>
                </li>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/mumbai-property/projects'
                    data-tracking-id='footer-links'
                    title='Residential Projects in Mumbai'
                    target=''>
                    Projects in Mumbai
                  </a>
                </li>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/delhi-property/projects'
                    data-tracking-id='footer-links'
                    title='Residential Projects in Delhi'
                    target=''>
                    Projects in Delhi
                  </a>
                </li>
                <li>
                  <a
                    className='cf-tracking-enabled anchor-class'
                    href='/pune-property/projects'
                    data-tracking-id='footer-links'
                    title='Residential Projects in Pune'
                    target=''>
                    Projects in Pune
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='bdtplgt mrtp20 mrbt20'></div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='footercontentadd'>
                <p className={styles['boldt']}>
                  Getmyprop.com is India's premium real estate portal where users can find Independent Houses / Villas, Apartments/Flats and Plots for
                  sale and rent in 400+ cities across India. Getmyprop helps the property seeker to find Resale properties, Residential Projects and
                  Owner properties in Bangalore, Gurgaon,Noida, Chennai, Hyderabad, Mumbai, Ahmedabad,Kolkata and other cities. Commonfloor provides
                  complete details of Project launches, under construction projects and ready-to-move projects with detailed description of locality,
                  builder, price trends and features.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-6 col-sm-3 col-md-2 about'>
              <div>
                <div className={styles['footerTag']}>About</div>
                <ul className='uls'>
                  <li>
                    <a
                      className='cf-tracking-enabled'
                      data-tracking-id='footer-links-static'
                      href='/about-us'
                      title='About CommonFloor'
                      target='_blank'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className='cf-tracking-enabled' href='http://www.quikr.com/html/jobs.php' rel='nofollow' title='Careers'>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className='cf-tracking-enabled' data-tracking-id='footer-links-static' href='/guide' title='CommonFloor Blogs' target='_blank'>
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      className='cf-tracking-enabled'
                      data-tracking-id='footer-links-static'
                      href='/cancellation-refund'
                      title='Cancellation and Refund Policy'
                      target='_blank'>
                      Cancellation/Refund
                    </a>
                  </li>
                  <li>
                    <a
                      className='cf-tracking-enabled'
                      data-tracking-id='footer-links-static'
                      href='/terms-conditions'
                      title='Terms &amp; Conditions'
                      target='_blank'>
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a className='cf-tracking-enabled' data-tracking-id='footer-links-static' href='/contactus' title='Contact Us' target='_blank'>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className='' href='https://www.quikr.com'>
                      Quikr
                    </a>
                  </li>
                  <li>
                    <a className='' href='https://www.indiaproperty.com'>
                      India Property
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xs-6 col-sm-3 col-md-2 products'>
              <div>
                <div className={styles['footerTag']}>Products</div>
                <ul className='uls'>
                  <li>
                    <a className='cf-tracking-enabled' href='https://www.quikr.com/coworking' title='Quikr Cowork'>
                      Quikr Cowork
                    </a>
                  </li>
                  <li>
                    <a
                      className='cf-tracking-enabled'
                      href='https://groups.commonfloor.com/'
                      data-tracking-id='footer-links-static'
                      title='Apartment Management Software'
                      target=''>
                      Groups
                    </a>
                  </li>
                  <li>
                    <a className='cf-tracking-enabled' href='/agent' data-tracking-id='footer-links-static' rel='nofollow' title='Agents' target=''>
                      Agents
                    </a>
                  </li>
                  <li>
                    <a className='cf-tracking-enabled' href='/guide' data-tracking-id='footer-links-static' title='Real Estate Guide' target=''>
                      Guide
                    </a>
                  </li>
                  <li>
                    <a className='cf-tracking-enabled' href='/news' data-tracking-id='footer-links-static' title='Real Estate News' target=''>
                      News
                    </a>
                  </li>
                  <li>
                    <a className='cf-tracking-enabled' href='/forum' data-tracking-id='footer-links-static' title='Real Estate Forum' target=''>
                      Forum
                    </a>
                  </li>
                  <li>
                    <a
                      className='cf-tracking-enabled'
                      href='https://www.commonfloor.com/retina'
                      data-tracking-id='footer-links-static'
                      title='Virtual Reality'
                      target=''>
                      Retina
                    </a>
                  </li>
                  <li>
                    <a
                      className='cf-tracking-enabled'
                      href='https://www.commonfloor.com/live-in-tour'
                      data-tracking-id='footer-links-static'
                      title='360 degree view of Property'
                      target=''>
                      Live-in-tour
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-xs-12 col-sm-12 col-md-4 cnct-wt-us'>
              <div className={styles['copy-right']}>
                <p className='cprgt'>
                  Copyright © 2007-22 Commonfloor.com.
                  <br />
                  All rights reserved.
                </p>
                <div className='kit mrtp20'>Keep in Touch</div>
                <ul>
                  <li>
                    <a
                      className='cf-tracking-enabled'
                      data-tracking-id='footer-share-facebook'
                      href='https://www.facebook.com/commonfloor.com'
                      title=''
                      rel='nofollow'>
                      <i className='icon-Facebook-01'></i>
                    </a>
                    <a
                      className='cf-tracking-enabled'
                      data-tracking-id='footer-share-twitter'
                      href='https://twitter.com/commonfloor'
                      title=''
                      rel='nofollow'>
                      <i className='icon-Twitter-01'></i>
                    </a>
                    <a
                      className='cf-tracking-enabled'
                      data-tracking-id='footer-share-youtube'
                      href='https://www.youtube.com/user/commonfloor'
                      title=''
                      rel='nofollow'>
                      <i className='icon-Youtube-01'></i>
                    </a>
                    <a
                      className='cf-tracking-enabled'
                      data-tracking-id='footer-share-slideshare'
                      href='http://www.slideshare.net/CommonFloor'
                      title=''
                      rel='nofollow'>
                      <i className='icon-Slideshare-01'></i>
                    </a>
                    <div className='clearfix'></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
