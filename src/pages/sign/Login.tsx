import React from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  InputAdornment,
  Divider,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FormWrapper } from "../../forms/SignFormWrapper";
import {
  loginSchema,
  LoginFormData,
} from "../../forms/validations/SignFormsSchemas";

// Icons
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";

type State = {
  showPassword: boolean;
};

class Login extends React.Component<{}, State> {
  state = {
    showPassword: false,
  };

  handleClickShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleFormSubmit = (data: any) => {
    console.log("Form Data Submitted:", data);
  };

  render() {
    const { showPassword } = this.state;

    return (
      <FormWrapper<LoginFormData>
        onSubmit={this.handleFormSubmit}
        schema={loginSchema}
      >
        {({ register, formState }) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              width: "100vw",
              backgroundColor: "#1e0f26",
            }}
          >
            {/* Botão de Voltar */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  position: "absolute",
                  top: "20px",
                  left: "30px",
                  color: "#ECC9FF",
                  gap: "5px",
                  scale: {
                    xs: "1.2",
                    sm: "1.1",
                    md: "1.2",
                    lg: "1.3",
                    xl: "1.3",
                  },
                  minWidth: "auto",
                }}
              >
                <ArrowBackSharpIcon /> home
              </Button>
            </Link>

            <Box
              sx={{
                boxShadow:
                  "rgba(89, 48, 124, 0.4) 0px 0px 0px 2px, rgba(100, 73, 142, 0.65) 0px 4px 6px -1px, rgba(5, 1, 75, 0.08) 0px 1px 0px inset",
                borderRadius: "10px",
                padding: {
                  xs: "1.5em",
                  sm: "2em",
                  md: "2em",
                  lg: "2.4em",
                  xl: "2.5em",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center ",
                background:
                  "linear-gradient(0deg, rgba(65,41,79,1) 0%, rgba(88,56,107,1) 100%)",
                gap: "1em",
                width: {
                  xs: "82%",
                  sm: "60%",
                  md: "42%",
                  lg: "32%",
                  xl: "26%",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "0px",
                  alignItems: "center",
                  paddingRight: "1.1em",
                  marginBottom: "1.6em",
                }}
              >
                {/* Imagem da logo*/}
                <Box
                  sx={{
                    marginTop: { xs: "4px", sm: "8px" },
                    width: { xs: "38px", sm: "45px" },
                    height: { xs: "38px", sm: "45px" },
                    backgroundImage: `url(/src/assets/images/logo.png)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    marginRight: { xs: "4px", sm: "8px" },
                  }}
                />
                <Typography
                  sx={{
                    color: "#e3e0f9",
                    fontSize: { xs: "26px", sm: "32px" },
                    fontWeight: "400",
                  }}
                >
                  ShieldHER
                </Typography>
              </Box>
              <TextField
                {...register("email")}
                error={!!formState.errors.email}
                helperText={
                  typeof formState.errors.email?.message === "string"
                    ? formState.errors.email?.message
                    : ""
                }
                color="primary"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    color: "#ECC9FF",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#b690ce",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ECC9FF",
                  },
                  "& .MuiInputAdornment-root .MuiSvgIcon-root": {
                    color: "#835d99",
                  },
                  "& .Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
                    color: "#ECC9FF",
                  },
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                {...register("password")}
                error={!!formState.errors.password}
                helperText={
                  typeof formState.errors.password?.message === "string"
                    ? formState.errors.password?.message
                    : ""
                }
                color="primary"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    color: "#ECC9FF",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#b690ce",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#ECC9FF",
                  },
                  "& .MuiInputAdornment-root .MuiSvgIcon-root": {
                    color: "#835d99",
                  },
                  "& .Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
                    color: "#ECC9FF",
                  },
                }}
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon sx={{ color: "#835d99" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={this.handleClickShowPassword}
                        sx={{
                          color: "#835d99",
                          height: "100%",
                          padding: 0,
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon
                            sx={{
                              color: "#ECC9FF",
                            }}
                          />
                        ) : (
                          <VisibilityIcon
                            sx={{
                              color: "#ECC9FF",
                            }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                sx={{
                  fontSize: "18px",
                  marginTop: "0.5em",
                  marginBottom: "0.5em",
                  width: "100%",
                  height: "45px",
                  backgroundColor: "#ecc9ff",
                  color: "#2f173b",
                }}
              >
                Log In
              </Button>
              <Typography
                variant="caption"
                sx={{
                  color: "#dca0ff",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontSize: "15.5px",
                }}
              >
                Esqueceu sua senha?
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  backgroundColor: "#8658a3",
                  marginTop: "0.5em",
                  marginBottom: "1em",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#ecc9ff", fontSize: "17px" }}
                >
                  {" "}
                  Ainda não possui uma conta?{" "}
                </Typography>
                <Link to="/signup">
                  <Typography
                    sx={{
                      color: "#dca0ff",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Cadastre-se
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        )}
      </FormWrapper>
    );
  }
}

export default Login;
