import { TurnedInNot } from "@mui/icons-material";
import {
  Drawer,
  Box,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Grid,
  ListItemText,
} from "@mui/material";
import React from "react";
const SideBar = ({ drawerWidth }) => {
  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="permanent"
          open={true}
          sx={{
            display: { xs: "block" },
            "&.MuiDrawer-paper": { boxSizing: "border-box" },
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Jhonny stiven
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary={"excelente curriculon"} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
};
export { SideBar };
