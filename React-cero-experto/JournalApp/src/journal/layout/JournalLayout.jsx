import { Box } from "@mui/system";
import { React } from "react";
import { NavBar, SideBar } from "../../ua/components";
const drawerWidth = 240;
const JournalLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar drawerWidth={drawerWidth} />
        <SideBar drawerWidth={drawerWidth} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* toolbar */}
          {children}
        </Box>
      </Box>
    </>
  );
};

export { JournalLayout };
