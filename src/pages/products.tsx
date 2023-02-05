import React from "react";
import Head from "next/head";
import styles from "@/styles/Blog.module.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Products() {
  return (
    <>
      <Head>
        <title>PayFam Products</title>
        <meta name="description" content="PayFam Products" />
      </Head>
      <div className={styles.blogContainer}>
        <div className={styles.blogBanner}>
          <div className={styles.blogBannerTitleContainer}>
            <h2 className={styles.blogBannerTitle}>Our Products</h2>
            <ul className={styles.blogBannerSubTitle}>
              <a href="" className={styles.noneactiveSubTitleLink}>
                <li>Home</li>
              </a>
              <li className={styles.BannerDash}>-</li>
              <a href="" className={styles.activeSubTitleLink}>
                <li>Products</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.productsPost}>
            <div className={styles.product}>
              <div className={styles.productsImage}>
                <LazyLoadImage
                  src={"/assets/BuySellProduct.jpeg"}
                  style={{ width: 500, height: 300 }}
                  alt="Playstore app link"
                />
              </div>
              <div className={styles.productsHeading}>
                <h3>Trade stablecoins</h3>
              </div>
              <div className={styles.productsDetails}>
                <p>
                  Buy, sell and swap stablecoins on PayFam with your local
                  currency. Protect yourself from local currency inflation by
                  simply swapping to a stablecoin pegged to the currency of your
                  choice.
                </p>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.productsImage}>
                <LazyLoadImage
                  src={"/assets/CashTransfers.svg"}
                  style={{ width: 500, height: 300 }}
                  alt="Playstore app link"
                />
              </div>
              <div className={styles.productsHeading}>
                <h3> Cash transfers </h3>
              </div>
              <div className={styles.productsDetails}>
                <p>
                  Send, receive and request money from your friends and families
                  instantly. No wallet addresses needed and just a phone number!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.productsPost}>
            <div className={styles.product}>
              <div className={styles.productsImage}>
                <LazyLoadImage
                  src={"/assets/paymentLink.jpg"}
                  style={{ width: 500, height: 300 }}
                  alt="Playstore app link"
                />
              </div>
              <div className={styles.productsHeading}>
                <h3>Payment Links and Checkout - Coming soon</h3>
              </div>
              <div className={styles.productsDetails}>
                <p>
                  Experience the freedom of being borderless. Let us take your
                  business global!. Our payment gateway will enable you to make
                  payments anywhere anytime.
                </p>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.productsImage}>
                <LazyLoadImage
                  src={"/assets/SaveToEarn.svg"}
                  style={{ width: 500, height: 300 }}
                  alt="Playstore app link"
                />
              </div>
              <div className={styles.productsHeading}>
                <h3>Save to Earn - Coming soon</h3>
              </div>
              <div className={styles.productsDetails}>
                <p>
                  Earn up to 20% interest on your PayFam balance. No investing
                  knowledge required- setup only takes minutes and you can begin
                  investing as you please
                </p>
              </div>
            </div>
          </div>
          <div className={styles.productsPost}>
            <div className={styles.product}>
              <div className={styles.productsImage}>
                <LazyLoadImage
                  src={"/assets/paperMoney.jpg"}
                  style={{ width: 500, height: 300 }}
                  alt="Playstore app link"
                />
              </div>
              <div className={styles.productsHeading}>
                <h3> Paper Money - Coming soon</h3>
              </div>
              <div className={styles.productsDetails}>
                <p>
                  You can deposit and withdraw paper money in and out of your
                  PayFam account at participating retailers near you.
                </p>
              </div>
            </div>
            <div className={styles.product}>
              <div className={styles.productsImage}>
                <LazyLoadImage
                  src={"/assets/businessLoans.jpg"}
                  style={{ width: 500, height: 300 }}
                  alt="Playstore app link"
                />
              </div>
              <div className={styles.productsHeading}>
                <h3> Business Loans. - Coming soon</h3>
              </div>
              <div className={styles.productsDetails}>
                <p>
                  Our mission for ‘PayFam for Business’ is to help you take your
                  business global. If it means we need to help you get instant
                  loans to stock up your business and support you on rainy days,
                  we will.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
