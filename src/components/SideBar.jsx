import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

let list1 = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];
let list2 = [
  { text: "Profile Form", icon: <PersonOutlineOutlinedIcon />, path: "/form" },
  { text: "Calender", icon: <CalendarTodayOutlinedIcon />, path: "/calender" },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/faq",
  },
];
let list3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
  {
    text: "Line Chart",
    icon: <TimelineOutlinedIcon />,
    path: "/line",
  },
  {
    text: "Geography Chart",
    icon: <MapOutlinedIcon />,
    path: "/geography",
  },
];

export default function SideBar({ open, handleDrawerClose }) {
  const navigate = useNavigate();
  const theme = useTheme();
  let location = useLocation();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        alt="Remy Sharp"
        src="https://tse1.mm.bing.net/th/id/OIP.KX_tWq2JFPgBj-Mw_gAmHgHaE7?cb=12&w=620&h=413&rs=1&pid=ImgDetMain&o=7&rm=3"
        sx={{
          margin: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: "2px solid gray",
          transition: "0.25s",
        }}
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: "0.25s" }}
      >
        Alaa Harb
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 13 : 0,
          marginBottom: 1,
          transition: "0.25s",
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>
      <Divider />
      <List>
        {list1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : item.text}
              placement="right"
              slots={{
                transition: Zoom,
              }}
              arrow
            >
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode == "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {list2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : item.text}
              placement="right"
              slots={{
                transition: Zoom,
              }}
              arrow
            >
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode == "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {list3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip
              title={open ? null : item.text}
              placement="right"
              slots={{
                transition: Zoom,
              }}
              arrow
            >
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode == "dark"
                          ? grey[800]
                          : grey[300]
                        : null,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
