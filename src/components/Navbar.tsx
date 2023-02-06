import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import AppBrand from "./AppBrand";
import { Close, Menu } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

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
      <Button href="/products.html" sx={{ color: "#fff" }}>
        Products
      </Button>
      <Button href="/about.html" sx={{ color: "#fff" }}>
        About Us
      </Button>
      <Button href="/careers.html" sx={{ color: "#fff" }}>
        Careers
      </Button>
      <Button href="/faqs.html" sx={{ color: "#fff" }}>
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

const Navbar = (props: Props) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const { window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return (
    <>
      <AppBar
        component="nav"
        // elevation={trigger ? 4 : 0}
        elevation={0}
        sx={{
          bgcolor: trigger ? "#28347b" : "transparent",
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
                  bgcolor: "#fff",
                }}
              >
                {openMobileNav ? (
                  <Close sx={{ color: "#000" }} />
                ) : (
                  <Menu sx={{ color: "#000" }} />
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
