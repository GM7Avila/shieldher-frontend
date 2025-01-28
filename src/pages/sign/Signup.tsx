import React from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  InputAdornment,
  Checkbox,
  Modal,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { Link } from "react-router-dom";
import { FormWrapper } from "../../forms/SignFormWrapper";
import {
  signUpSchema,
  SignUpFormData,
} from "../../forms/validations/SignFormsSchemas";

// Icons
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";
import TermsModal from "@components/sign/TermsModal";

type State = {
  isShowPassword: boolean;
  isTermsModalOpen: boolean;
};

class SignUp extends React.Component<{}, State> {
  state = {
    isShowPassword: false,
    isTermsModalOpen: false,
  };

  // CHECKBOX: EXIBIR SENHA
  handleClickShowPassword = () => {
    this.setState((prevState) => ({
      isShowPassword: !prevState.isShowPassword,
    }));
  };

  // CHECKBOX: MODAL TERMOS DE USO
  handleOpenTermsModal = () => {
    this.setState({ isTermsModalOpen: true });
  };

  handleCloseTermsModal = () => {
    this.setState({ isTermsModalOpen: false });
  };

  // SUBMIT: ENVIO DO FORMULÁRIO
  handleFormSubmit = (data: any) => {
    console.log("Form Data Submitted:", data);
  };

  render() {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    const { isShowPassword } = this.state;

    return (
      <FormWrapper<SignUpFormData>
        onSubmit={this.handleFormSubmit}
        schema={signUpSchema}
      >
        {({ register, formState, control }) => (
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
            <Box
              sx={{
                boxShadow:
                  "rgba(89, 48, 124, 0.4) 0px 0px 0px 2px, rgba(100, 73, 142, 0.65) 0px 4px 6px -1px, rgba(5, 1, 75, 0.08) 0px 1px 0px inset",
                borderRadius: "10px",
                padding: {
                  xs: "1em",
                  sm: "1.1em",
                  md: "1.2em",
                  lg: "1.3em",
                  xl: "1.4em",
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
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#ECC9FF",
                }}
              >
                Sign Up
              </Typography>
              <TextField
                {...register("name")}
                error={!!formState.errors.name}
                helperText={
                  typeof formState.errors.name?.message === "string"
                    ? formState.errors.name?.message
                    : ""
                }
                color="primary"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-input": {
                    color: "#ECC9FF",
                    height: { xs: "10px", lg: "23px" },
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
                label="Nome"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ fontSize: "20px" }} />
                    </InputAdornment>
                  ),
                }}
              />
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
                    height: { xs: "10px", lg: "23px" },
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
                      <EmailIcon sx={{ fontSize: "20px" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <InputMask {...field} mask="(99) 99999-9999">
                    {(inputProps: any) => (
                      <TextField
                        {...inputProps}
                        error={!!formState.errors.phone}
                        helperText={
                          typeof formState.errors.phone?.message === "string"
                            ? formState.errors.phone?.message
                            : ""
                        }
                        color="primary"
                        sx={{
                          width: "100%",
                          "& .MuiInputBase-input": {
                            color: "#ECC9FF",
                            height: { xs: "10px", lg: "23px" },
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
                          "& .Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root":
                            {
                              color: "#ECC9FF",
                            },
                        }}
                        id="outlined-basic"
                        label="Telefone"
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LocalPhoneIcon sx={{ fontSize: "20px" }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </InputMask>
                )}
              />
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <InputMask
                    mask="99999-999"
                    value={field.value || ""}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                  >
                    {(inputProps: any) => (
                      <TextField
                        {...inputProps}
                        error={!!formState.errors.address}
                        helperText={
                          typeof formState.errors.address?.message === "string"
                            ? formState.errors.address?.message
                            : ""
                        }
                        color="primary"
                        sx={{
                          width: "100%",
                          "& .MuiInputBase-input": {
                            color: "#ECC9FF",
                            height: { xs: "10px", lg: "23px" },
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
                          "& .Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root":
                            {
                              color: "#ECC9FF",
                            },
                        }}
                        id="outlined-basic"
                        label="CEP"
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MarkunreadMailboxIcon
                                sx={{ fontSize: "20px" }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  </InputMask>
                )}
              />

              <Grid
                container
                spacing={1}
                sx={{
                  marginTop: { xs: "15px", sm: "10px" },
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    {...register("password")}
                    error={!!formState.errors.password}
                    color="primary"
                    sx={{
                      width: "100%",
                      "& .MuiInputBase-input": {
                        color: "#ECC9FF",
                        height: { xs: "10px", lg: "23px" },
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
                      "& .Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root":
                        {
                          color: "#ECC9FF",
                        },
                    }}
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    type={isShowPassword ? "text" : "password"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon sx={{ fontSize: "20px" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    {...register("passwordConfirmation")}
                    error={!!formState.errors.passwordConfirmation}
                    color="primary"
                    sx={{
                      marginTop: { xs: "10px", sm: "0px" },
                      width: "100%",
                      "& .MuiInputBase-input": {
                        color: "#ECC9FF",
                        height: { xs: "10px", lg: "23px" },
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
                      "& .Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root":
                        {
                          color: "#ECC9FF",
                        },
                    }}
                    id="outlined-basic"
                    label="Confirmar Senha"
                    variant="outlined"
                    type={isShowPassword ? "text" : "password"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon sx={{ fontSize: "20px" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              {(formState.errors.password?.message ||
                formState.errors.passwordConfirmation?.message) && (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: "8px",
                    flexDirection: "column",
                    paddingLeft: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "error.main",
                      fontSize: "14px",
                      textAlign: "start",
                    }}
                  >
                    {formState.errors.password?.message && (
                      <li>{formState.errors.password?.message};</li>
                    )}
                  </Typography>
                  <Typography
                    sx={{
                      color: "error.main",
                      fontSize: "14px",
                      textAlign: "start",
                    }}
                  >
                    {formState.errors.passwordConfirmation?.message && (
                      <li>{formState.errors.passwordConfirmation?.message};</li>
                    )}
                  </Typography>
                </Box>
              )}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                  flexDirection: "row",
                }}
              >
                <Checkbox
                  onClick={() => this.handleClickShowPassword()}
                  sx={{ bottom: "0.5px", color: "#ECC9FF" }}
                  {...label}
                />
                <Typography
                  sx={{
                    color: "#ECC9FF",
                    fontSize: { xs: "14px", sm: "17px" },
                  }}
                >
                  Mostrar Senha
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                  flexDirection: "row",
                }}
              >
                <Checkbox
                  {...register("terms")}
                  sx={{
                    bottom: "0.5px",
                    color: formState.errors.terms ? "error.main" : "#ECC9FF",
                  }}
                  {...label}
                />
                <Typography
                  sx={{
                    color: "#ECC9FF",
                    fontSize: { xs: "14px", sm: "17px" },
                  }}
                >
                  Li e concordo com os{" "}
                  <span
                    onClick={() => this.handleOpenTermsModal()}
                    style={{
                      color: "#dca0ff",
                      cursor: "pointer",
                      fontWeight: "semibold",
                      textDecoration: "underline",
                      marginRight: "3px",
                    }}
                  >
                    Termos de Uso
                  </span>
                  *
                </Typography>
              </Box>
              {formState.errors.terms?.message && (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: "8px",
                    flexDirection: "column",
                    paddingLeft: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "error.main",
                      fontSize: "14px",
                      textAlign: "start",
                    }}
                  >
                    <li>{formState.errors.terms?.message}</li>
                  </Typography>
                </Box>
              )}

              <Button
                type="submit"
                sx={{
                  fontSize: "18px",
                  marginTop: "0.6em",
                  width: "100%",
                  height: "45px",
                  backgroundColor: "#ecc9ff",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                  color: "#2f173b",
                }}
              >
                Cadastrar
              </Button>
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
                  sx={{
                    color: "#D7C1FF",
                    fontSize: { xs: "14px", sm: "16px" },
                  }}
                >
                  Já tem uma conta?
                </Typography>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "underline",
                    color: "#dca0ff",
                    fontWeight: "bold",
                  }}
                >
                  Entrar
                </Link>
              </Box>
            </Box>
            <TermsModal
              open={this.state.isTermsModalOpen}
              onClose={this.handleCloseTermsModal}
            />
          </Box>
        )}
      </FormWrapper>
    );
  }
}

export default SignUp;
