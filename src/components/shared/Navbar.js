"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import Header from "./Header";

const pages = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Pages",
    pathName: "/pages",
  },
  {
    route: "Category",
    pathName: "/categories/news?category=all-news",
  },
  {
    route: "News",
    pathName: "/news",
  },
  {
    route: "About",
    pathName: "/about",
  },
  {
    route: "Contact",
    pathName: "/contact",
  },
];

function NavBar() {
  return (
    <>
      <Header/>
      <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={200} height={100} alt="logo/png" />
          <Box className="w-full text-center">
            {pages.map((page) => (
                <Link  key={page} href={page.pathName}>
                    <Button sx={{color: "white"}} >
                        {page.route}
                    </Button>
              </Link>
            ))}
          </Box>
          <Box>
            <IconButton>
              <FacebookIcon className="text-white"></FacebookIcon>
              <FacebookIcon className="text-white"></FacebookIcon>
              <FacebookIcon className="text-white"></FacebookIcon>
              <FacebookIcon className="text-white"></FacebookIcon>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default NavBar;
