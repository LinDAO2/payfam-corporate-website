import * as React from "react";
import Head from "next/head";
import styles from "@/styles/Blog.module.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { default as MuiAccordion } from "@mui/material/Accordion";
import { default as MuiAccordionSummary } from "@mui/material/AccordionSummary";
import { default as MuiAccordionDetails } from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: any) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: any) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#f8b426" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Faqs() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Head>
        <title>PayFam FAQs</title>
        <meta
          name="description"
          content="Fequently Asked Questions On How To Send To Africa"
        />
      </Head>
      <div className={styles.blogContainer}>
        <div className={styles.blogBanner}>
          <div className={styles.blogBannerTitleContainer}>
            <h2 className={styles.blogBannerTitle}>
              Frequently Asked Questions
            </h2>
            <ul className={styles.blogBannerSubTitle}>
              <a href="" className={styles.noneactiveSubTitleLink}>
                <li>Home</li>
              </a>
              <li className={styles.BannerDash}>-</li>
              <a href="" className={styles.activeSubTitleLink}>
                <li>FAQs</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={styles.faqsContainer}>
          <div className={styles.faqs}>
            <div className={styles.questionsSide}>
              <div>
                {" "}
                <h5>GENERAL QUESTIONS</h5>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>What is PayFam?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      PayFam is the safest, easiest and cheapest way to transact
                      cash and crypto across borders. Pay friends and families
                      in stablecoins or local currencies and they can redeem
                      directly to their bank account, Mobile Money accounts,
                      crypto Wallet, etc.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography>How do I get a PayFam Account?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      To open a PayFam account, have your phone number & email
                      address ready and simply visit our ‘Web App’ .
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>
                      How do I make a transaction on PayFam?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We have made transactions as easy as it can get. All you
                      need is the recipient phone number to send money to them.
                      Even if the receiver doesn’t have a PayFam account, they
                      will still be able to redeem the money sent to them.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    aria-controls="panel7d-content"
                    id="panel7d-header"
                  >
                    <Typography>Which countries do PayFam support?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Anyone in any country can use PayFam because we are
                      crypto-friendly. However, the send and withdraw local fiat
                      features are only available to Ghana and Nigeria now.
                      These features will be available in your country sooner
                      than you can imagine. Don’t miss out. Get PayFam Now!
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div>
                <h5>TECHNOLOGICAL ISSUES</h5>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel5d-content"
                    id="panel5d-header"
                  >
                    <Typography>
                      What happens if I send money to the wrong recipient by
                      mistake?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Please check your recipient details before sending. There
                      is no guarantee of refunds for transactions sent to the
                      wrong account. Please contact our support team if you have
                      sent the wrong account as soon as you realize it.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    aria-controls="panel6d-content"
                    id="panel6d-header"
                  >
                    <Typography>How do I contact PayFam?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Contact customer support @payfamsupport on Twitter or
                      email: support@payfam.io
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    aria-controls="panel7d-content"
                    id="panel7d-header"
                  >
                    <Typography>Is PayFam for business available?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We are working tirelessly to launch Payfam for businesses
                      which will enable business owners to take their business
                      global. We launch it earlier than you can imagine. Stay
                      tuned via our newsletter.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div>
                {" "}
                <h5>FINANCIAL ISSUES</h5>
                <Accordion
                  expanded={expanded === "panel8"}
                  onChange={handleChange("panel8")}
                >
                  <AccordionSummary
                    aria-controls="panel8d-content"
                    id="panel8d-header"
                  >
                    <Typography>What is USDC (Stablecoin)?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      A stablecoin is a type of cryptocurrency that is pegged to
                      a stable asset. USDC is an example of a stablecoin that is
                      pegged to the US dollar and its value is intended to
                      remain stable. This means if you hold 1 USDC, it is 1 US
                      dollar.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel9"}
                  onChange={handleChange("panel9")}
                >
                  <AccordionSummary
                    aria-controls="panel9d-content"
                    id="panel9d-header"
                  >
                    <Typography>How do I buy dollars?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Purchasing dollars on PayFam is easy! Simply add funds to
                      your wallet using your preferred payment method, enter the
                      amount of dollars you wish to buy, and confirm the
                      transaction. It’s as simple as that.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel10"}
                  onChange={handleChange("panel10")}
                >
                  <AccordionSummary
                    aria-controls="panel10d-content"
                    id="panel10d-header"
                  >
                    <Typography>
                      What do I need to send money to a friend from the PayFam
                      App?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You only need the person’s phone number to send money to
                      them. Even if they don’t have a PayFam account, they will
                      receive sms notification and then they can redeem the
                      funds after creating an account on PayFam.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    aria-controls="panel7d-content"
                    id="panel7d-header"
                  >
                    <Typography>
                      What are the means of deposit on PayFam?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      There are currently 3 means of deposit on PayFam; Bank
                      transfer, Mobile Money and Stablecoin.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    aria-controls="panel7d-content"
                    id="panel7d-header"
                  >
                    <Typography>
                      How long does it take to deliver my funds?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      It takes less than a minute to deliver your funds under
                      normal circumstances.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className={styles.supportSide}>
              <h6>SUPPORT</h6>
              <div className={styles.supportSideTitle}>
                <h5>Request support</h5>
                <p>
                  The team is always waiting to hear from you. Shoot us a
                  message on all of our social media platforms or email and we
                  will respond to you earlier than you would expect 💙💛.
                </p>
              </div>
              <div className={styles.supportSideTitle}>
                <h5>Contact details</h5>
                <div className={styles.supportSideContactInfo}>
                  <p className={styles.supportSideContactTitle}>Phone</p>
                  <p className={styles.supportSideContactDetails}>
                    +233 577 300 88
                  </p>
                </div>
                <div className={styles.supportSideContactInfo}>
                  <p className={styles.supportSideContactTitle}>Email</p>
                  <div>
                    <p className={styles.supportSideContactDetails}>
                      support@payfam.io
                    </p>
                    <p className={styles.supportSideContactDetails}>
                      info@payfam.io
                    </p>
                  </div>
                </div>
                <div className={styles.supportSideContactInfo}>
                  <p className={styles.supportSideContactTitle}>Location</p>
                  <p className={styles.supportSideContactDetails}>
                    Ghana, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
