"use client";
import React, { useState, useContext, useEffect } from "react";

// components
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { Menu, DarkMode, LightMode } from "@mui/icons-material";
import { DarkModeContext } from "../context/DarkModeContext";
import { IsMobileContext } from "../context/IsMobileContext";
import Link from "next/link";

function Navigation() {
  // whether the drawer is open or not
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const { isDark, setIsDark } = useContext(DarkModeContext);
  const isMobile = useContext(IsMobileContext);

  useEffect(() => {
    const html = document.querySelector("html");
    isDark ? html?.classList.add("dark") : html?.classList.remove("dark");
  }, [isDark]);

  const handleDrawerOpen = () => setIsDrawerOpen(!isDrawerOpen);
  return (
    <>
      <AppBar
        variant="elevation"
        component="nav"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        className="dark:bg-slate-950"
      >
        <Container className="flex justify-between flex-row my-2 ">
          <IconButton onClick={handleDrawerOpen}>
            <Menu />
          </IconButton>

          <Box className="flex flex-row justify-start gap-1">
            <IconButton
              onClick={() => {
                setIsDark(!isDark);
              }}
            >
              {isDark ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        </Container>
      </AppBar>

      <SwipeableDrawer
        open={isDrawerOpen}
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => setIsDrawerOpen(false)}
        draggable="true"
        variant="persistent"
        className="w-72 bg-blue-50"
        PaperProps={{
          className: "bg-blue-50  dark:bg-slate-950",
        }}
        sx={{ width: "18rem", display: "block", marginTop: "64px" }}
      >
        <Box
          sx={{ width: "18rem", height: "100%", marginTop: "64px" }}
          className="flex h-full flex-col bg-blue-50 dark:bg-slate-950"
        >
          <List className="flex flex-col gap-1 px-4">
            {/* home */}
            <ListItemButton
              LinkComponent={Link}
              href="/"
              TouchRippleProps={{ className: "text-zinc-300" }}
              className="group rounded-md shadow-zinc-700 outline-transparent hover:bg-zinc-900 hover:shadow-xl dark:hover:bg-slate-700"
            >
              <ListItemText className="text-center text-zinc-900 group-hover:text-zinc-50 dark:text-slate-100">
                Home
              </ListItemText>
            </ListItemButton>

            {/* profile */}
            <ListItemButton
              LinkComponent={Link}
              href="/profile"
              TouchRippleProps={{ className: "text-zinc-300" }}
              className="group rounded-md shadow-zinc-700 outline-transparent hover:bg-zinc-900 hover:shadow-xl dark:hover:bg-slate-700"
            >
              <ListItemText className="text-center text-zinc-900 group-hover:text-zinc-50 dark:text-slate-100">
                Profile
              </ListItemText>
            </ListItemButton>

            {/* dashboard */}
            <ListItemButton
              LinkComponent={Link}
              href="/dashboard"
              TouchRippleProps={{ className: "text-zinc-300" }}
              className="group rounded-md shadow-zinc-700 outline-transparent hover:bg-zinc-900 hover:shadow-xl dark:hover:bg-slate-700"
            >
              <ListItemText className="text-center text-zinc-900 group-hover:text-zinc-50 dark:text-slate-100">
                Dashboard
              </ListItemText>
            </ListItemButton>
          </List>
          <Divider />

          {/* post, image, videos contents */}
          <List className="flex flex-col gap-1 px-4">
            {/* home */}
            <ListItemButton
              LinkComponent={Link}
              href="/"
              TouchRippleProps={{ className: "text-zinc-300" }}
              className="group rounded-md shadow-zinc-700 outline-transparent hover:bg-zinc-900 hover:shadow-xl dark:hover:bg-slate-700"
            >
              <ListItemText className="text-center text-zinc-900 group-hover:text-zinc-50 dark:text-slate-100">
                Posts
              </ListItemText>
            </ListItemButton>

            {/* profile */}
            <ListItemButton
              LinkComponent={Link}
              href="/profile"
              TouchRippleProps={{ className: "text-zinc-300" }}
              className="group rounded-md shadow-zinc-700 outline-transparent hover:bg-zinc-900 hover:shadow-xl dark:hover:bg-slate-700"
            >
              <ListItemText className="text-center text-zinc-900 group-hover:text-zinc-50 dark:text-slate-100">
                Profile
              </ListItemText>
            </ListItemButton>

            {/* dashboard */}
            <ListItemButton
              LinkComponent={Link}
              href="/dashboard"
              TouchRippleProps={{ className: "text-zinc-300" }}
              className="group rounded-md shadow-zinc-700 outline-transparent hover:bg-zinc-900 hover:shadow-xl dark:hover:bg-slate-700"
            >
              <ListItemText className="text-center text-zinc-900 group-hover:text-zinc-50 dark:text-slate-100">
                Dashboard
              </ListItemText>
            </ListItemButton>
          </List>
          <Divider />

          <List className="flex flex-col gap-1 px-4">
            <ListItemButton
              LinkComponent={Link}
              href="/courses"
              TouchRippleProps={{ className: "text-zinc-300" }}
              className="group rounded-md shadow-zinc-700 outline-transparent hover:bg-zinc-900 hover:shadow-xl dark:hover:bg-slate-700"
            >
              <ListItemText className="text-center text-zinc-900 group-hover:text-zinc-50 dark:text-slate-100">
                Courses
              </ListItemText>
            </ListItemButton>
          </List>
          <Divider />
          <List className="mb-8 px-4">
            {/* logout */}
            <ListItemButton
              LinkComponent={Link}
              href="/api/auth/signout"
              TouchRippleProps={{ className: "text-zinc-300" }}
              className="group rounded-md shadow-zinc-700 outline-transparent hover:bg-zinc-900 hover:shadow-xl dark:hover:bg-slate-700"
            >
              <ListItemText className="text-center text-zinc-900 group-hover:text-zinc-50 dark:text-slate-100">
                Logout
              </ListItemText>
            </ListItemButton>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default Navigation;
