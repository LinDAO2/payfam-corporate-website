import React from "react";
import styles from "@/styles/Home.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  return (
    <>
      <footer className={styles.payfamFooter}>
        <div className={styles.footerRowOne}>
          <div className={styles.footerRowOneColOne}>
            <Link href="/" className={styles.footerWidgetLogo}>
              <LazyLoadImage
                className={styles.footerLogo}
                src={"assets/Paylogo.svg"}
                style={{ width: "100%", height: "100%" }}
                alt="Playstore app link"
              />
            </Link>
            <p className={styles.footerWidgetText}>
              The best way to move cash and stablecoins.
            </p>
            <div className={styles.footerAppStore}>
              {/* <a href="#" className={styles.footerWidgetBtn}>
                <PlayArrowIcon />
                <span className={styles.footerWidgetBtnText}>
                  Get in Google Play
                </span>
              </a> */}
              {/* <a href="#" className={styles.footerWidgetBtn}>
                <PlayArrowIcon />
                <span className={styles.footerWidgetBtnText}>
                  Get in Play Store
                </span>
              </a> */}
              <a href="#" className={styles.footerWidgetBtn}>
                Get Started
              </a>
            </div>
          </div>
          <div className={styles.displayFlex}>
            <div className={styles.footerRowOneColTwo}>
              <h4>Company</h4>
              <ul className={styles.footerWidgetLinks}>
                <Link href="/AboutUs">
                  <li>About Us</li>
                </Link>
                <Link href="/carrers">
                  <li>Carrers</li>
                </Link>
                <Link href="/Faqs">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
            <div className={styles.footerRowOneColTwo}>
              <h4>Help</h4>
              <ul className={styles.footerWidgetLinks}>
                <Link href="/blogs">
                  <li>Blogs</li>
                </Link>
                <Link href="/Faqs">
                  <li>FAQ</li>
                </Link>
                <Link href="/AboutUs">
                  <li>Report a bug</li>
                </Link>
              </ul>
            </div>
            <div className={styles.footerRowOneColTwo}>
              <h4>Product</h4>
              <ul className={styles.footerWidgetLinks}>
                <Link href="/Products">
                  <li>Trade stablecoins</li>
                </Link>
                <Link href="/Products">
                  <li>Cash transfers</li>
                </Link>
                <Link href="/Products">
                  <li>Payment Links and Checkout</li>
                </Link>
                <Link href="/Products">
                  <li>Save to Earn</li>
                </Link>
                <Link href="/Products">
                  <li>Paper Money</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerRowTwo}>
          <p>Copyright © 2023, PayFam. </p>

          <p>Terms of Service | Privacy Policy</p>

          <div className={styles.footerSocials}>
            <a
              className={styles.footerWidgetLinks}
              target="_blank"
              href="https://www.instagram.com/payfamhq"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>

            <a
              className={styles.footerWidgetLinks}
              target="_blank"
              href="https://www.twitter.com/payfamhq"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>

            <a
              className={styles.footerWidgetLinks}
              target="_blank"
              href="https://www.t.me/Payfamhq"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </a>

            <a
              className={styles.footerWidgetLinks}
              target="_blank"
              href="https://www.linkedin.com/company/payfam"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>

            <a
              className={styles.footerWidgetLinks}
              target="_blank"
              href="https://www.youtube.com/channel/UCWtSNaoWQMhxTwZXTScInrQ"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
