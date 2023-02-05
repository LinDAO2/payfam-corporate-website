import React from "react";
import styles from "@/styles/Blog.module.css";
import styles2 from "@/styles/Home.module.css";
//import passport from '@/image/passport.jpeg';
import Head from "next/head";
import NearMeIcon from "@mui/icons-material/NearMe";
//@ts-ignore
import Mailchimp from "react-mailchimp-form";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About PayFam</title>
        <meta name="description" content="Learn More About PayFam And Team" />
      </Head>
      <div className={styles.blogContainer}>
        <div className={styles.blogBanner}>
          <div className={styles.blogBannerTitleContainer}>
            <h2 className={styles.blogBannerTitle}>About Us</h2>
            <ul className={styles.blogBannerSubTitle}>
              <a href="" className={styles.noneactiveSubTitleLink}>
                <li>Home</li>
              </a>
              <li className={styles.BannerDash}>-</li>
              <a href="" className={styles.activeSubTitleLink}>
                <li>About Us</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutSection}>
            <div className={styles.aboutSectionLeft}>
              <h2>Our Mission</h2>
              <div>
                <p>
                  We are a global remote team working from countries around the
                  globe.
                </p>
                <p>
                  Our mission is to provide financial inclusion worldwide,
                  regardless of location and background.
                </p>
                <p>
                  Anyone can sign up to use our services with a mobile device.
                  Our priority is to provide a high-quality product, establish
                  trust with our customers, and foster a sense of community
                  among our users.
                </p>
              </div>
            </div>
            <div className={styles.aboutSectionRight}>
              <LazyLoadImage
                src={"/assets/WomanOnPhone.svg"}
                style={{ width: "100%" }}
                alt="Playstore app link"
              />
            </div>
          </div>
          <div className={styles.valuesContainer}>
            <h2>Our Core Values</h2>
            <div className={styles.valuesSection}>
              <div className={styles.valuesCard}>
                <h4>Integrity</h4>
                <p>
                  We prioritize honesty and relationships with all our
                  customers. We work to be transparent and open in all
                  communication and decision-making processes. We strive to
                  conduct ourselves with the highest ethical standards, and to
                  ensure that all of our business practices are fair,
                  transparent, and in compliance with all standards.
                </p>
              </div>
              <div className={styles.valuesCard}>
                <h4>Innovation</h4>
                <p>
                  We are open to change, explore new ideas, and find creative
                  solutions to all challenges. We will keep being at the
                  forefront of innovation to try new things and think outside
                  the box in order to serve better. We also actively seek out
                  partnerships and collaborations that allow us to learn from
                  and work with other leading innovators in the industry.
                </p>
              </div>
              <div className={styles.valuesCard}>
                <h4>Team Work</h4>
                <p>
                  At PayFam, we value community building and teamwork. Our
                  company culture is inclusive and welcoming to people of all
                  backgrounds and we strive to create an environment where
                  everyone feels comfortable and able to reach their full
                  potential. By working together, we can deliver the best
                  product possible.
                </p>
              </div>
            </div>
          </div>
          {/* <div className={styles.ourTeamSection}>
            <h2>Executive Leadership Team</h2>
            <div className={styles.ourTeam}>
              <div className={styles.teamMemberDetails}>
                <div className={styles.teamMember}>
                  <Image
                    src={passport}
                    width="100"
                    height="100"
                    layout="responsive"
                    alt="Playstore app link"
                  />
                </div>
                <h5>Chief Executive Officer</h5>
                <p>Linda Yeboah</p>
              </div>

              <div className={styles.teamMemberDetails}>
                <div className={styles.teamMember}>
                  <Image
                    src={passport}
                    width="100"
                    height="100"
                    layout="responsive"
                    alt="Playstore app link"
                  />
                </div>
                <h5>Chief Executive Officer</h5>
                <p>Linda Yeboah</p>
              </div>
              <div className={styles.teamMemberDetails}>
                <div className={styles.teamMember}>
                  <Image
                    src={passport}
                    width="100"
                    height="100"
                    layout="responsive"
                    alt="Playstore app link"
                  />
                </div>
                <h5>Chief Executive Officer</h5>
                <p>Linda Yeboah</p>
              </div>
            </div>
          </div> */}

          <div style={{backgroundColor:'#fff'}}>
            <h2 className={styles2.blockTitle}>Subscribe For Updates</h2>
            <Mailchimp
              action="https://gmail.us21.list-manage.com/subscribe/post?u=8768bbb439ee8cde287235d18&amp;id=d9259061af&amp;f_id=00e6c3e1f0"
              fields={[
                {
                  name: "EMAIL",
                  placeholder: "Enter your email",
                  type: "email",
                  required: true,
                },
              ]}
              messages={{
                sending: "Sending...",
                success: "Thank you for subscribing!",
                error: "An unexpected internal error has occurred.",
                empty: "You must write an e-mail.",
                duplicate: "Too many subscribe attempts for this email address",
                button: <NearMeIcon className={styles2.subscribeBtn} />,
              }}
              className={styles2.subscribeForm}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
