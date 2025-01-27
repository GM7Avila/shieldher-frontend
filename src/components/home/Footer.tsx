import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

{
  /* Icons */
}
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import HelpIcon from "@mui/icons-material/Help";

const Footer: React.FC = () => {
  return (
    <>
      <Grid
        container
        sx={{
          padding: "4.5em 3em 3em",
          display: "flex",
          justifyContent: "center",
          height: {
            xs: "auto",
            sm: "auto",
            md: "45vh",
            lg: "45vh",
            xl: "45vh",
          },
          width: "100%",
          background:
            "linear-gradient(180deg, rgba(116,57,146,1) 0%, rgba(88,43,111,1) 44%, rgba(72,35,92,1) 81%, rgba(50,24,64,1) 100%)",

          color: "#fff",
        }}
      >
        {/* Coluna 1 */}
        <Grid
          sx={{
            height: { xs: "auto", sm: "auto", md: "100%", lg: "100%" },
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "column",
              lg: "column",
            },
            justifyContent: "space-between",
          }}
          size={{ xs: 12, sm: 12, md: 4, lg: 3, xl: 4 }}
        >
          {/* Logo */}
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box sx={{ display: "flex", gap: "0px", alignItems: "center" }}>
                {/* Imagem da logo*/}
                <Box
                  sx={{
                    marginTop: { xs: "4px", sm: "8px" },
                    width: "35px",
                    height: "35px",
                    backgroundImage: `url(src/assets/images/logo.png)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    marginRight: { xs: "12px", sm: "15px" },
                    whiteSpace: "pre-line",
                  }}
                />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "30px", sm: "25px" },
                    fontWeight: "400",
                  }}
                >
                  Shield
                </Typography>
                <Typography
                  sx={{
                    color: "#CAC6E4",
                    fontSize: { xs: "30px", sm: "25px" },
                    fontWeight: "400",
                  }}
                >
                  HER
                </Typography>
              </Box>
            </Link>
            <Typography
              sx={{
                color: "#CAC6E4",
                fontSize: "15px",
                marginTop: "30px",
                paddingRight: {
                  xs: "0px",
                  sm: "20px",
                  md: "0px",
                  lg: "0px",
                  xl: "120px",
                },
                whiteSpace: "pre-line",
                lineHeight: "30px",
              }}
            >
              {"Apoie esse movimento\nSiga nosso trabalho nas redes sociais."}
            </Typography>
          </Box>
          {/* Redes sociais */}
          <Box
            sx={{
              marginTop: { xs: "20px", sm: "0px", md: "auto", lg: "auto" },
              display: "flex",
              alignItems: {
                xs: "center ",
                sm: "flex-start",
                md: "center",
                lg: "center",
              },
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <IconButton
              sx={{
                color: "#CAC6E4",
                scale: "1.2",
                height: "36px",
                marginTop: { sm: "5px", lg: "0px" },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#CAC6E4",
                scale: "1.1",
                height: "36px",
                marginTop: { sm: "5px", lg: "0px" },
              }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "#CAC6E4",
                scale: "1.3",
                height: "36px",
                marginTop: { sm: "5px", lg: "0px" },
              }}
            >
              <TelegramIcon />
            </IconButton>
            <a
              href="https://fuzzylab.tech/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                sx={{ color: "#CAC6E4", marginLeft: { lg: "5px", md: "45px" } }}
              >
                <Box
                  sx={{
                    width: "35px",
                    height: "36px",
                    marginRight: "5px",
                    backgroundImage: `url(/src/assets/images/fuzzylab-logo.png)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "15px",
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Iniciativa Fuzzylab
                </Typography>
              </Button>
            </a>
          </Box>
        </Grid>
        {/* Coluna 2 */}
        <Grid
          sx={{
            paddingTop: "5px",
            marginTop: { xs: "40px", sm: "45px", md: "0px" },
          }}
          size={{ xs: 12, sm: 6, md: 3, lg: 3, xl: 3 }}
        >
          <Typography sx={{ mb: "20px", fontSize: "20px" }}>
            Contate-nos
          </Typography>
          <Typography
            sx={{
              color: "#CAC6E4",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <MailOutlineIcon sx={{ fontSize: "20px" }} />
            shieldher@email.com
          </Typography>
          <Typography
            sx={{
              color: "#CAC6E4",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <CallIcon sx={{ fontSize: "20px" }} />
            +55 (21) XXXX-XXXX
          </Typography>
        </Grid>
        <Divider
          orientation="horizontal"
          sx={{
            display: { xs: "block", sm: "none", md: "none", lg: "none" },
            backgroundColor: "#CAC6E4",
            marginTop: "30px",
            width: "100%",
          }}
        />
        {/* Coluna 3 */}
        <Grid
          sx={{
            paddingTop: "5px",
            marginTop: { xs: "45px", sm: "45px", md: "0px" },
          }}
          size={{ xs: 12, sm: 6, md: 2, lg: 2, xl: 2 }}
        >
          <Typography sx={{ mb: "20px", fontSize: "20px" }}>
            Links Rápidos
          </Typography>
          <Typography sx={{ color: "#CAC6E4", marginBottom: "5px" }}>
            Apoio
          </Typography>
          <Typography sx={{ color: "#CAC6E4", marginBottom: "5px" }}>
            FAQ
          </Typography>
          <Typography sx={{ color: "#CAC6E4", marginBottom: "5px" }}>
            Contato
          </Typography>
          <Typography sx={{ color: "#CAC6E4", marginBottom: "5px" }}>
            Denunciar
          </Typography>
        </Grid>
        {/* Coluna 4 */}
        <Divider
          orientation="horizontal"
          sx={{
            display: { xs: "block", sm: "none", md: "none", lg: "none" },
            backgroundColor: "#CAC6E4",
            marginTop: "30px",
            width: "100%",
          }}
        />
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingTop: { sm: "50px", md: "5px", lg: "0px" },
            height: "100%",
          }}
          size={{ xs: 12, sm: 12, md: 3, lg: 4, xl: 3 }}
        >
          <Box
            sx={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Box
              sx={{
                mb: "20px",
                display: "flex",
                alignItems: "center",
                marginTop: {
                  xs: "40px",
                  sm: "0px",
                },
              }}
            >
              <Typography sx={{ fontSize: "20px" }}>
                Boletim Informativo
              </Typography>
              <Tooltip
                placement="top"
                title={
                  <span
                    style={{
                      fontSize: "15px",
                      color: "#f1d8ff",
                    }}
                  >
                    Receba um Boletim Informativo no seu Email
                  </span>
                }
                sx={{ fontSize: "50px" }}
              >
                <HelpIcon sx={{ color: "#CAC6E4", marginLeft: "10px" }} />
              </Tooltip>
            </Box>

            <Grid container sx={{ display: "flex" }}>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
                <TextField
                  sx={{ width: "100%" }}
                  id="filled-basic"
                  label="Insira seu Email"
                  variant="filled"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#a04fcc",
                    border: "none",
                    marginLeft: { xs: "0", sm: "0", md: "0", lg: "10px" },
                    width: { xs: "100%", lg: "100px" },
                    height: "54px",
                    color: "white",
                  }}
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Typography
            sx={{
              fontSize: "15px",
              color: "#CAC6E4",
              marginTop: { xs: "30px", sm: "50px", md: "auto", lg: "auto" },
              textAlign: { xs: "center", sm: "center", md: "right" },
              marginRight: { xs: "0px", sm: "0px", md: "50px", lg: "100px" },
              marginBottom: "10px",
            }}
          >
            Copyright © 2025 ShieldHER{" "}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
