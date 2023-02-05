import React, { useState } from "react";
import { AppBar, Box, Button, IconButton, Stack, Toolbar } from "@mui/material";
import AppBrand from "./AppBrand";
import { Close, Menu } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
const NavLinks = () => {
  return (
    <>
      <Button href="/" sx={{ color: "#fff" }}>
        Home
      </Button>
      <Button
        href="https://blog.payfam.io"
        target="_blank"
        rel="noreferrer"
        sx={{ color: "#fff" }}
      >
        Blogs
      </Button>
      <Button href="/products" sx={{ color: "#fff" }}>
        Products
      </Button>
      <Button href="/about" sx={{ color: "#fff" }}>
        About Us
      </Button>
      <Button href="/careers" sx={{ color: "#fff" }}>
        Careers
      </Button>
      <Button href="/faqs" sx={{ color: "#fff" }}>
        FAQ
      </Button>
      <Button
       href="https://app.payfam.io/session/login"
       target="_blank"
       rel="noreferrer"
        variant="contained"
        sx={{
          bgcolor: "#fff",
          color: "#000",
          borderRadius: 20,
          px: 3,
          py: 2,
        }}
      >
        Login
      </Button>
      <Button
       href="https://app.payfam.io/session/signup"
       target="_blank"
       rel="noreferrer"
        variant="contained"
        sx={{
          bgcolor: "#fff",
          color: "#000",
          borderRadius: 20,
          px: 3,
          py: 2,
          ml: 1,
        }}
      >
        Sign Up
      </Button>
    </>
  );
};

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <>
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          bgcolor: "transparent",
        }}
      >
        {/* <Toolbar>
          <AppBrand size="large" />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}>
            <Button href="/" sx={{ color: "#fff" }}>
              Home
            </Button>
            <Button
              href="https://blog.payfam.io"
              target="_blank"
              rel="noreferrer"
              sx={{ color: "#fff" }}
            >
              Blogs
            </Button>
            <Button href="/products" sx={{ color: "#fff" }}>
              Products
            </Button>
            <Button href="/about" sx={{ color: "#fff" }}>
              About Us
            </Button>
            <Button href="/careers" sx={{ color: "#fff" }}>
              Careers
            </Button>
            <Button href="/faqs" sx={{ color: "#fff" }}>
              FAQ
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }} />
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton>
              <Menu sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
        </Toolbar> */}
        <Toolbar sx={{ width: "100%", px: { xs: 0, md: 3 } }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <AppBrand size="large" />
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <NavLinks />
            </Box>

            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                  position: "relative",
                },
              }}
            >
              <IconButton
                onClick={() => {
                  setOpenMobileNav(!openMobileNav);
                }}
                sx={{
                  boxShadow: (theme) => theme.shadows[10],
                  bgcolor: "#000",
                }}
              >
                {openMobileNav ? (
                  <Close sx={{ color: "#fff" }} />
                ) : (
                  <Menu sx={{ color: "#fff" }} />
                )}
              </IconButton>
              <AnimatePresence mode="wait">
                {openMobileNav && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                      scale: 2,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                      scale: 0,
                    }}
                    style={{
                      position: "absolute",
                      top: 50,
                      right: -18,
                      background: "#000",
                      width: "100vw",
                      borderRadius: 4,
                    }}
                  >
                    <Stack
                      spacing={2}
                      sx={{ px: 1, py: 2 }}
                      alignItems="center"
                    >
                      <NavLinks />
                    </Stack>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* <nav className={scroll ? "appBarSolid" : "appBarTransparent"}>
        <div className="navLogo">
          <Link href="/">
            <LazyLoadImage
              className="logo"
              src={"/assets/newlogo.svg"}
              style={{ width: 200, height: "auto" }}
              alt="nav logo"
            />
          </Link>
        </div>
        <Box sx={{ flex: 1 }}>
          <Button href="/" sx={{ color: "#fff" }}>
            Home
          </Button>
          <Button
            href="https://blog.payfam.io"
            target="_blank"
            rel="noreferrer"
            sx={{ color: "#fff" }}
          >
            Blogs
          </Button>
        </Box>
        <div className="navLinks">
          <ul>
            <Link href="/">
              <li className="hover-underline-animation">Home</li>
            </Link>
            <Link
              href="https://blog.payfam.io"
              target="_blank"
              rel="noreferrer"
            >
              <li className="hover-underline-animation">Blogs</li>
            </Link>
            <Link href="/products">
              <li className="hover-underline-animation">Products</li>
            </Link>
            <Link href="/about">
              <li className="hover-underline-animation">About Us</li>
            </Link>
            <Link href="/careers">
              <li className="hover-underline-animation">Careers</li>
            </Link>
            <Link href="/faqs">
              <li className="hover-underline-animation">FAQ</li>
            </Link>
          </ul>
          <div className="navBttns">
            <div className="navBttn">Login</div>
            <div className="navBttn">Sign Up</div>
          </div>
        </div>
        <div className="hamburger">
          <MenuIcon
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          />
        </div>
      </nav>
      <div className="responsiveMenu">
        {isNavExpanded ? (
          <>
            {" "}
            <ul>
              <Link
                href="/"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <li className="hover-underline-animation">Home</li>
              </Link>
              <Link
                href="/blogs"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <li className="hover-underline-animation">Blogs</li>
              </Link>
              <Link
                href="/Products"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <li className="hover-underline-animation">Products</li>
              </Link>
              <Link
                href="/AboutUs"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <li className="hover-underline-animation">About Us</li>
              </Link>
              <Link
                href="/carrers"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <li className="hover-underline-animation">Careers</li>
              </Link>
              <Link
                href="/Faqs"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <li className="hover-underline-animation">FAQ</li>
              </Link>
            </ul>
            <div className="navBttns">
              <Link
                href="#"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <div className="navBttn">Login</div>
              </Link>

              <Link
                href="#"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <div className="navBttn">Sign Up</div>
              </Link>
            </div>
          </>
        ) : null}
      </div> */}
    </>
  );
};

export default Navbar;
