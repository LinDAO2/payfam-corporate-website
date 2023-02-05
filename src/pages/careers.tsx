import React from "react";
import Head from "next/head";
import styles from "@/styles/Blog.module.css";
import style from "@/styles/Carrers.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

export default function Careers() {
  const benefitsArr = [
    {
      id: "1",
      heading: "Full comprehensive health insurance plan",
      content:
        "Individual health care plans with access to hospitals, therapy, gym and spa sessions monthly.",
    },
    {
      id: "2",
      heading: "Annual Learning and professional development budget",
      content:
        "Full access to a budget for specialised trainings and certifications relevant to your field of work.",
    },
    {
      id: "3",
      heading: "Paid leave",
      content: "Paid time off for annual vacations.",
    },
    {
      id: "4",
      heading: "Unlimited Udemy learning access",
      content:
        "Full access to Udemy for curated trainings and learning paths related to your field.",
    },
  ];

  const jobArr = [
    {
      id: "1",
      title: "Frontend IOS & Android Engineer",
      type: "Full-time",
      location: "Remote",
    },
    {
      id: "2",
      title: "Backend IOS & Android  Engineer",
      type: "Full-time",
      location: "Remote",
    },
    {
      id: "3",
      title: "Fullstack Engineer",
      type: "Full-time",
      location: "Remote",
    },
    {
      id: "4",
      title: "Ui/Ux Designer",
      type: "Full-time",
      location: "Remote",
    },
  ];

  return (
    <>
      <Head>
        <title>PayFam Careers</title>
        <meta name="description" content="Send Money Across Africa Blogs" />
      </Head>
      <div className={styles.blogContainer}>
        <div className={styles.blogBanner}>
          <div className={styles.blogBannerTitleContainer}>
            <h2 className={styles.blogBannerTitle}>
              Join our team of superstars
            </h2>
            <ul className={styles.blogBannerSubTitle}>
              <a href="" className={styles.noneactiveSubTitleLink}>
                <li>Home</li>
              </a>
              <li className={styles.BannerDash}>-</li>
              <a href="" className={styles.activeSubTitleLink}>
                <li>Careers</li>
              </a>
            </ul>
          </div>
        </div>
        <div className={style.carrersContainer}>
          <div className={style.upperSection}>
            <h2 className={style.upperSectionTitle}>Why work with us</h2>
            <p>
              We believe in the power of collaboration and teamwork. When you
              join our team, you’ll be part of a dynamic and supportive
              community of professionals who are all dedicated to delivering the
              best products and services. If you are looking for a rewarding
              career with a company that values its team and its customers, then
              we encourage you to apply to join our team. We can’t wait to hear
              from you.
            </p>
          </div>
          <div className={style.middleSection}>
            <div className={style.middleSectionInner}>
              <h3 className={style.middleSectionTitle}>Benefits</h3>
              <div className={style.benefitCard}>
                {benefitsArr.map((benefit, i) => {
                  return (
                    <div key={benefit.id} className={style.benefitCardInner}>
                      <div className={style.benefitCardItems}>
                        <h3 className={style.benefitCardheading}>
                          {benefit.heading}
                        </h3>
                      </div>
                      <div>
                        <p className={style.benefitCardContent}>
                          {benefit.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={style.lastSection}>
          <div className={style.lastSectionHeadings}>
            <h4 className={style.lastSectionTitle}>Available positions</h4>
            <p className={style.lastSectionText}>
              Explore our current vacancies and apply below
            </p>
          </div>
          <div className={style.jobArrRows}>
            {jobArr.map((job, i) => {
              return (
                <div key={job.id} className={style.jobRow}>
                  <h3 className={style.jobTitle}>{job.title}</h3>
                  <div className={style.jobType}>
                    <WorkOutlineIcon />
                    <p>{job.type}</p>
                  </div>

                  <div className={style.jobLocation}>
                    <LocationOnIcon />
                    <p>{job.location}</p>
                  </div>

                  <div className={style.applyNow}>Apply Now</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
