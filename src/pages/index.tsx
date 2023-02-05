import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "animate.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { Box, Grid, Stack, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import NearMeIcon from "@mui/icons-material/NearMe";
//@ts-ignore
import Mailchimp from "react-mailchimp-form";

const useStyles = makeStyles((theme: Theme) => ({
  textBold: {
    fontWeight: "700",
    fontSize: "16px",
    // [theme.breakpoints.up('md')]: {
    //   fontSize: "20px",
    // },
  },
}));

export default function Home() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const unsubscribe = () => {
      setInterval(() => {
        setActiveStep((prev) => {
          if (prev === 2) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 6000);
    };

    return unsubscribe();
  }, []);

  const imageListOne = [
    "/assets/shot1.png",
    "/assets/shot2.png",
    "/assets/shot3.png",
  ];
  const imageListTwo = [
    "/assets/shot2.png",
    "/assets/shot3.png",
    "/assets/shot1.png",
  ];
  const imageListThree = [
    "/assets/shot3.png",
    "/assets/shot1.png",
    "/assets/shot2.png",
  ];

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="PayFam, banking the unbanked" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ backgroundColor: "#fff" }}>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.heroContainer}>
              <div className={styles.bannerImage}>
                <LazyLoadImage
                  src={"/assets/pastorngirl.svg"}
                  style={{ width: "100%" }}
                  alt="Playstore app link"
                />
              </div>
              <div className={styles.bannerContent}>
                <h3 className={styles.bannerTitle}>
                  The best way
                  <br />
                  to move cash
                  <br />
                  and stablecoins
                </h3>
                <button className={styles.heroBtn}>Get Started</button>
              </div>
            </div>
          </main>
        </div>
        <Box component="section" sx={{ px: 3 }}>
          <h2 className={styles.blockTitle}>Do more with your Money</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <Stack
                alignItems="center"
                sx={{
                  boxShadow: (theme) => theme.shadows[24],
                  borderRadius: 10,
                  py: 4,
                  minHeight: 470,
                }}
                spacing={2}
              >
                <TelegramIcon style={{ fontSize: "200", color: "#28347b" }} />
                <Typography
                  variant="h6"
                  color="#000"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "1.8em",
                    textAlign: "center",
                  }}
                >
                  Built for You
                </Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  sx={{ fontSize: "1em", textAlign: "center" }}
                >
                  {" "}
                  Easily protect your assets from inflation by inflation by
                  swapping to a stablecoin on PayFam. The safest and smoothest
                  experience
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Stack
                alignItems="center"
                sx={{
                  boxShadow: (theme) => theme.shadows[24],
                  borderRadius: 10,
                  py: 4,
                  mt: { md: 0, xs: 3 },
                  minHeight: 470,
                }}
                spacing={2}
              >
                <LazyLoadImage
                  src={"/assets/Image2.svg"}
                  style={{ width: 200, height: 200 }}
                  alt="Post-Image"
                />
                <Typography
                  variant="h6"
                  color="#000"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "1.8em",
                    textAlign: "center",
                  }}
                >
                  We Bank the unbanked
                </Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  sx={{ fontSize: "1em", textAlign: "center" }}
                >
                  Global financial inclusion through accessible products and
                  services. Web3 practitioners can connect to MetaMask and
                  transact directly.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Stack
                alignItems="center"
                sx={{
                  boxShadow: (theme) => theme.shadows[24],
                  borderRadius: 10,
                  py: 4,
                  mt: { md: 0, xs: 3 },
                  minHeight: 470,
                }}
                spacing={2}
              >
                <LazyLoadImage
                  src="/assets/ManAndPhone.svg"
                  style={{ width: 200, height: 200 }}
                  alt="Post-Image"
                />
                <Typography
                  variant="h6"
                  color="#000"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "1.8em",
                    textAlign: "center",
                  }}
                >
                  Pay Families Across Borders
                </Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  sx={{ fontSize: "1em", textAlign: "center" }}
                >
                  Multiple payment methods including stablecoins, MoMo, and bank
                  transfers. Quick cross-border transfers with just a phone
                  number.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        {/* <div className={styles.appfeaturesContainer}>
          <h2 className={styles.blockTitle}>Do more with your Money</h2>
          <div className={styles.flexCards}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <TelegramIcon style={{ fontSize: "100", color: "#28347b" }} />
              </div>
              <h3 className={styles.cardTitle}>Built for You</h3>
              <p className={styles.cardText}>
                Easily protect your assets from inflation by
                <br />
                inflation by swapping to a stablecoin
                <br />
                on PayFam. The safest and smoothest
                <br />
                experience
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <LazyLoadImage
                  className={styles.appFeatureImage}
                  src="/assets/ManAndPhone.svg"
                  style={{ width: 100, height: 100 }}
                  alt="Post-Image"
                />
              </div>
              <h3 className={styles.cardTitle}>Pay Families Across Borders</h3>
              <p className={styles.cardText}>
                Multiple payment methods including
                <br />
                stablecoins, MoMo, and bank transfers.
                <br />
                Quick cross-border transfers
                <br />
                with just a phone number.
              </p>
            </div>{" "}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <LazyLoadImage
                  className={styles.appFeatureImage}
                  src={"/assets/Image2.svg"}
                  style={{ width: 100, height: 100 }}
                  alt="Post-Image"
                />
              </div>
              <h3 className={styles.cardTitle}>We Bank the unbanked</h3>
              <p className={styles.cardText}>
                Global financial inclusion through
                <br />
                accessible products and services.
                <br />
                Web3 practitioners can connect to
                <br />
                MetaMask and transact directly.
              </p>
            </div>{" "}
          </div>
        </div> */}
        <div style={{ marginTop: 100 }}>
          <h2 className={styles.blockTitle}>
            Banking the unbanked- Get PayFam Now!
          </h2>
          <div className={styles.ScreenshotContainer}>
            <div className="animate__animated animate__fadeInLeft">
              <LazyLoadImage
                src={imageListOne[activeStep]}
                alt="shots"
                style={{ width: 300, height: 450, objectFit: "cover" }}
              />
            </div>

            <LazyLoadImage
              src={imageListTwo[activeStep]}
              alt="shots"
              style={{ width: 300, height: 450, objectFit: "cover" }}
            />
            <LazyLoadImage
              src={imageListThree[activeStep]}
              alt="shots"
              style={{ width: 300, height: 450, objectFit: "cover" }}
            />
          </div>
          {/* <Appfeatures />
          <Screenshot />

          <Reviews />
          <Blog />
          <FaqSection /> */}
          {/* <div
            className="qrCodeBar"
            style={{
              position: 'fixed',
              height: '150px',
              background: 'white',
              bottom: '3%',
              left: '90%',
              width: '120px',
              color: 'black',
              textAlign: 'center',
              borderRadius: '10px',
              padding: '0',
              zIndex: '1',
            }}
          >
            <h6
              style={{
                margin: '0',
                padding: '0',
              }}
            >
              Download PayFam
            </h6>
            <Image
              className="playStoreImage"
              src={qrCode}
              layout="responsive"
              alt="Qrcode  scan"
              width="100px"
              height="80px"
            />
          </div> */}
          {/* <Newsletter /> */}
        </div>
        <>
          <h2 className={styles.blockTitle}>See reviews from our customers</h2>
          <Carousel autoPlay interval={9000} transitionTime={5000} infiniteLoop>
            <div className={styles.reviewsContainer}>
              <div className={styles.reviewCards}>
                <div className={styles.reviewContent}>
                  <div className={styles.reviewColOne}>
                    <LazyLoadImage
                      className={styles.reviewImg}
                      src={"/assets/passport.jpeg"}
                      alt="Couples on phone"
                    />
                  </div>
                  <div className={styles.reviewColTwo}>
                    <div>
                      <p className={styles.reviewerName}>Linda Yeboah</p>
                      <p className={styles.reviewerTitle}>Ceo</p>
                    </div>
                    <p className={styles.reviewerComment}>
                      I recommend this enormous oppourtunity for everyone.
                    </p>
                  </div>
                </div>
                <div className={styles.reviewContent}>
                  <div className={styles.reviewColOne}>
                    <LazyLoadImage
                      className={styles.reviewImg}
                      src={"/assets/passport.jpeg"}
                      alt="Couples on phone"
                    />
                  </div>
                  <div className={styles.reviewColTwo}>
                    <div>
                      <p className={styles.reviewerName}>Eric Addo</p>
                      <p className={styles.reviewerTitle}>Co-Founder</p>
                    </div>
                    <p className={styles.reviewerComment}>
                      I recommend this enormous oppourtunity for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.reviewsContainer}>
              <div className={styles.reviewCards}>
                <div className={styles.reviewContent}>
                  <div className={styles.reviewColOne}>
                    <LazyLoadImage
                      className={styles.reviewImg}
                      src={"/assets/passport.jpeg"}
                      alt="Couples on phone"
                    />
                  </div>
                  <div className={styles.reviewColTwo}>
                    <div>
                      <p className={styles.reviewerName}>Mattosha Kayode</p>
                      <p className={styles.reviewerTitle}>Customer</p>
                    </div>
                    <p className={styles.reviewerComment}>
                      I recommend this enormous oppourtunity for everyone.
                    </p>
                  </div>
                </div>
                <div className={styles.reviewContent}>
                  <div className={styles.reviewColOne}>
                    <LazyLoadImage
                      className={styles.reviewImg}
                      src={"/assets/passport.jpeg"}
                      alt="Couples on phone"
                    />
                  </div>
                  <div className={styles.reviewColTwo}>
                    <div>
                      <p className={styles.reviewerName}>Barbara Barbara</p>
                      <p className={styles.reviewerTitle}>Customer</p>
                    </div>
                    <p className={styles.reviewerComment}>
                      I recommend this enormous oppourtunity for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </>

        <div className={styles.faqContainer}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

          <div className={styles.faq}>
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#FFF5D6",
                borderTop: "0.1px solid #B2BEB5",
                padding: "0.6rem",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ArrowDropDownCircleIcon
                    style={{ fill: "#FCB41C", cursor: "pointer" }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.textBold}>
                  What is PayFam?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  PayFam is the safest, easiest and cheapest way to transact
                  cash and crypto across borders. Pay friends and families in
                  stablecoins or local currencies and they can redeem directly
                  to their bank account, Mobile Money accounts, crypto Wallet,
                  etc.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#FFF5D6",
                borderTop: "0.1px solid #B2BEB5",
                padding: "0.6rem",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ArrowDropDownCircleIcon
                    style={{ fill: "#FCB41C", cursor: "pointer" }}
                  />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.textBold}>
                  How do I get a PayFam Account?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To open a PayFam account, have your phone number & email
                  address ready and simply visit our ‘Web App’ .
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#FFF5D6",
                borderTop: "0.1px solid #B2BEB5",
                padding: "0.6rem",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ArrowDropDownCircleIcon
                    style={{ fill: "#FCB41C", cursor: "pointer" }}
                  />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.textBold}>
                  How do I make a transaction on PayFam?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We have made transactions as easy as it can get. All you need
                  is the recipient phone number to send money to them. Even if
                  the receiver doesn’t have a PayFam account, they will still be
                  able to redeem the money sent to them.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#FFF5D6",
                borderTop: "0.1px solid #B2BEB5",
                padding: "0.6rem",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ArrowDropDownCircleIcon
                    style={{ fill: "#FCB41C", cursor: "pointer" }}
                  />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.textBold}>
                  What is USDC (Stablecoin)?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A stablecoin is a type of cryptocurrency that is pegged to a
                  stable asset. USDC is an example of a stablecoin that is
                  pegged to the US dollar and its value is intended to remain
                  stable. This means if you hold 1 USDC, it is 1 US dollar.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#FFF5D6",
                borderTop: "0.1px solid #B2BEB5",
                padding: "0.6rem",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ArrowDropDownCircleIcon
                    style={{ fill: "#FCB41C", cursor: "pointer" }}
                  />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.textBold}>
                  How do I buy dollars?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Purchasing dollars on PayFam is easy! Simply add funds to your
                  wallet using your preferred payment method, enter the amount
                  of dollars you wish to buy, and confirm the transaction. It’s
                  as simple as that.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              sx={{
                backgroundColor: "#FFF5D6",
                borderTop: "0.1px solid #B2BEB5",
                padding: "0.6rem",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ArrowDropDownCircleIcon
                    style={{ fill: "#FCB41C", cursor: "pointer" }}
                  />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.textBold}>
                  Which countries can use PayFam?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Anyone in any country can use PayFam because we are
                  crypto-friendly. However, the send and withdraw local fiat
                  features are only available to Ghana and Nigeria now. These
                  features will be available in your country sooner than you can
                  imagine. Don’t miss out. Get PayFam Now!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <Link href="/Faqs">
            <p className={styles.readMoreLink}>Learn More...</p>
          </Link>
        </div>
      </div>
      <div>
        <h2 className={styles.blockTitle}>Subscribe For Updates</h2>
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
            button: <NearMeIcon className={styles.subscribeBtn} />,
          }}
          className={styles.subscribeForm}
        />
      </div>
    </>
  );
}
