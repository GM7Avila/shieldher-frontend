import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import Grid from "@mui/material/Grid2";

type State = {};

const connector = connect((state: State) => {
  return {};
});

type HomeProps = ConnectedProps<typeof connector>;

class Home extends React.Component<HomeProps, State> {
  render() {
    const logoUrl = "/src/assets/images/logo.png";

    return (
      <Box>
        <Grid
          container
          minHeight="85vh"
          sx={{
            paddingX: {
              xs: "2em",
              sm: "2em",
              md: "2em",
              lg: "4em",
              xl: "12em",
            },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "flex-start",
                xl: "flex-start",
              },
            }}
            size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: {
                  xs: "left",
                  sm: "left",
                  md: "center",
                  lg: "left",
                  xl: "left",
                },

                fontWeight: "bold",
                fontSize: { xs: "2em", sm: "3em", md: "3.3em", lg: "4em" },
                width: { xs: "96%", sm: "90%", md: "75%", lg: "90%" },
              }}
            >
              Proteção Digital e Apoio para uma Vida Livre de Violência
            </Typography>
            <Typography
              sx={{
                width: { xs: "95%", sm: "90%", md: "65%", lg: "70%" },
                marginTop: "2.5em",
                fontSize: {
                  xs: "1.15em",
                  sm: "1.2em",
                  md: "1.5em",
                  lg: "1.3em",
                },
                textAlign: "justify",
              }}
            >
              Com o uso da Inteligência Artificial, identificamos e analisamos
              comentários misóginos em redes sociais, ajudando a combater a
              violência contra a mulher online. Faça sua denúncia no{" "}
              <span style={{ fontWeight: "bold", fontSize: "1.01em" }}>
                ShieldHer
              </span>{" "}
              e ajude na luta contra a misoginia em ambientes digitais de forma
              eficaz.
            </Typography>
            <Button
              sx={{
                fontSize: "1.1em",
                marginTop: "5em",
                color: "white",
                background:
                  "linear-gradient(140deg, rgba(116,57,146,1) 0%, rgba(140,95,162,1) 21%, rgba(155,125,179,1) 73%, rgba(165,146,191,1) 87%, rgba(179,174,206,1) 99%)",
                width: { xs: "100%", sm: "95%", md: "60%", lg: "250px" },
                height: "50px",
                border: "none",
                borderRadius: "5px",
                transition: "all 0.5s ease-in-out",
                "&:hover": {
                  background:
                    "linear-gradient(140deg, rgba(116,57,146,1) 0%, rgba(140,95,162,1) 21%, rgba(155,125,179,1) 73%, rgba(165,146,191,1) 87%, rgba(179,174,206,1) 99%)",
                  boxShadow: "0 4px 16px rgba(179,174,206,0.8)",
                },
              }}
            >
              Começar
            </Button>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              display={{
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              }}
              sx={{
                marginBottom: { lg: "50px", xl: "10px" },
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "430px",
                  xl: "460px",
                },
                height: { lg: "450px", xl: "460px" },
                backgroundImage: `url(${logoUrl})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default connector(Home);
