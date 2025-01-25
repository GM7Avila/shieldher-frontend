import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  SwipeableDrawer,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import Grid from "@mui/material/Grid2";
import React from "react";

// icons
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";

type State = {
  selectedNavValue: string;
  isModalOpen: boolean;
};

const connector = connect((state: State) => {
  return {};
});

type HomeHomeNavbarProps = ConnectedProps<typeof connector>;

class HomeNavbar extends React.Component<HomeHomeNavbarProps, State> {
  constructor(props: HomeHomeNavbarProps) {
    super(props);

    this.state = {
      selectedNavValue: "home",
      isModalOpen: false,
    };
  }

  componentDidMount(): void {}

  handleChangeToggleButton = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    this.setState({ selectedNavValue: newAlignment });
  };

  handleToggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      this.setState({
        isModalOpen: open,
      });
    };

  render() {
    const logoUrl = "/src/assets/images/logo.png";

    const list = () => (
      <>
        <List>
          {["Home", "Sobre", "Contato", "Denunciar"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    color: "#ecc9ff",
                    gap: "20px",
                  }}
                >
                  <Typography sx={{ fontSize: "22px" }}>{text}</Typography>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider
          sx={{
            backgroundColor: "#ae71ce",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  color: "#ecc9ff",
                  gap: "20px",
                }}
              >
                <LoginIcon />
                <Typography sx={{ fontSize: "22px" }}>Login</Typography>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </>
    );

    return (
      <>
        <SwipeableDrawer
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#743992",
              color: "white",
              width: "240px",
              display: "flex",
            },
          }}
          anchor={"right"}
          open={this.state.isModalOpen}
          onClose={this.handleToggleDrawer(false)}
          onOpen={this.handleToggleDrawer(true)}
        >
          <Box sx={{ paddingTop: "4vh" }}>{list()}</Box>
        </SwipeableDrawer>
        <Grid
          container
          sx={{
            zIndex: 100,
            position: { xs: "fixed", sm: "fixed", md: "relative" },
            height: { xs: "10vh", sm: "10vh", md: "15vh" },
            width: "100%",
            background: {
              xs: "linear-gradient(0deg, rgba(116,57,146,0.7464585932029062) 0%, rgba(116,57,146,1) 100%)",
              md: "transparent",
            },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: { xs: "2em", sm: "2em", md: "2em", lg: "4em" },
          }}
        >
          {/* Logo ShieldHer*/}
          <Grid
            sx={{
              display: "flex",
              gap: "0px",
              padding: {
                xs: "10px",
                sm: "10px",
              },
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box sx={{ display: "flex", gap: "0px", alignItems: "center" }}>
                {/* Imagem da logo*/}
                <Box
                  sx={{
                    marginTop: { xs: "4px", sm: "8px" },
                    width: { xs: "32px", sm: "50px" },
                    height: { xs: "32px", sm: "50px" },
                    backgroundImage: `url(${logoUrl})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    marginRight: { xs: "10px", sm: "15px" },
                  }}
                />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "25px", sm: "30px" },
                    fontWeight: "400",
                  }}
                >
                  Shield
                </Typography>
                <Typography
                  sx={{
                    color: "#CAC6E4",
                    fontSize: { xs: "25px", sm: "30px" },
                    fontWeight: "400",
                  }}
                >
                  HER
                </Typography>
              </Box>
            </Link>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              gap: {
                xs: "5px",
                sm: "30px",
                md: "40px",
                lg: "50px",
                xl: "80px",
              },
            }}
          >
            {/* Botão de navegação */}
            <ToggleButtonGroup
              value={this.state.selectedNavValue}
              exclusive
              onChange={this.handleChangeToggleButton}
              aria-label="toggleButtonGroup"
              sx={{
                display: { xs: "none", md: "flex" },
                backgroundColor: "#CEF9FE21",
                border: "none",
                borderRadius: "25px",
              }}
            >
              <ToggleButton
                sx={{
                  color: "#fff",
                  borderRadius: "25px",
                  minWidth: "100px",
                  backgroundColor:
                    this.state.selectedNavValue === "home"
                      ? "#fff"
                      : "transparent",
                }}
                value={"home"}
              >
                HOME
              </ToggleButton>
              <ToggleButton
                sx={{
                  color: "#fff",
                  borderRadius: "25px",
                  minWidth: "90px",
                  backgroundColor:
                    this.state.selectedNavValue === "sobre"
                      ? "#fff"
                      : "transparent",
                }}
                value="sobre"
              >
                SOBRE
              </ToggleButton>
              <ToggleButton
                sx={{
                  color: "#fff",
                  borderRadius: "25px",
                  minWidth: "90px",
                  backgroundColor:
                    this.state.selectedNavValue === "contato"
                      ? "#fff"
                      : "transparent",
                }}
                value="contato"
              >
                CONTATO
              </ToggleButton>
              <ToggleButton
                sx={{
                  color: "#fff",
                  borderRadius: "25px",
                  minWidth: "100px",
                  backgroundColor:
                    this.state.selectedNavValue === "denunciar"
                      ? "#fff"
                      : "transparent",
                }}
                value="denunciar"
              >
                DENUNCIAR
              </ToggleButton>
            </ToggleButtonGroup>
            {/* Botão de login */}
            <Button
              sx={{
                display: { xs: "none", md: "flex" },
                paddingX: "10px",
                borderRadius: "25px",
                gap: "10px",
                backgroundColor: "transparent",
                color: "#CAC6E4",
              }}
            >
              <LoginIcon
                sx={{
                  width: { xs: "35px", sm: "25px" },
                  height: { xs: "35px", sm: "25px" },
                }}
              />
              <Typography>Acessar</Typography>
            </Button>
            <IconButton
              onClick={this.handleToggleDrawer(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                padding: "10px",
                borderRadius: "25px",
                gap: "10px",
                backgroundColor: "transparent",
                color: "#CAC6E4",
                width: "40px",
                height: "40px",
              }}
            >
              <MenuIcon sx={{ width: "35px", height: "35px" }} />
            </IconButton>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default connector(HomeNavbar);
