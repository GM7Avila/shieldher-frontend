import React from "react";
import { Modal, Box, Typography, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type TermsModalProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Modal com os termos de uso da aplicação.
 * @param {object} props Props do componente.
 * @param {boolean} props.open Se o modal está aberto ou não.
 * @param {function} props.onClose Função que fecha o modal.
 * @returns {ReactElement} O elemento JSX do componente.
 */
const TermsModal: React.FC<TermsModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "60%", md: "40%" },
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "1.5em",
          boxShadow: 24,
          position: "relative",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          color="primary"
          variant="h6"
          sx={{ marginBottom: "1em", fontWeight: "bold", fontSize: "1.7em" }}
        >
          Termos de Uso
        </Typography>
        <Typography
          color="black"
          variant="body1"
          sx={{ lineHeight: 1.6, whiteSpace: "pre-line" }}
        >
          Atualizado em: 28 de Janeiro de 2025.
          <br />
          <br />
          Bem-vindo à plataforma{" "}
          <span style={{ fontWeight: "bold" }}>ShieldHER!</span> Estes Termos de
          Uso regem o acesso e uso do nosso site e serviços. Ao acessar ou
          utilizar nosso site, você concorda em cumprir estes termos. Caso
          discorde de alguma cláusula, pedimos que não utilize nossos serviços.
          <br />
          <br />
          <Divider orientation="horizontal" sx={{ marginBottom: "1em" }} />
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "1.2em",
              marginBottom: "5px",
            }}
          >
            1. Aceitação dos Termos
          </Typography>
          Ao acessar nosso site, você concorda em respeitar os presentes Termos
          de Uso, bem como todas as legislações e regulamentações aplicáveis.
          <br />
          <br />
          <Divider orientation="horizontal" sx={{ marginBottom: "1em" }} />
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "1.2em",
              marginBottom: "5px",
            }}
          >
            2. Alterações nos Termos
          </Typography>
          Reservamo-nos o direito de alterar estes Termos de Uso a qualquer
          momento, sem aviso prévio. Recomendamos que revise esta página
          regularmente para estar atualizado.
          <br />
          <br />
          <Divider orientation="horizontal" sx={{ marginBottom: "1em" }} />
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "1.2em",
              marginBottom: "5px",
            }}
          >
            3. Uso Permitido
          </Typography>
          Você concorda em: <br />
          <Typography sx={{ paddingTop: "1em" }}>
            <li style={{ marginBottom: "0.5em" }}>
              Utilizar o site de forma ética e dentro dos limites legais;
            </li>
            <li style={{ marginBottom: "0.5em" }}>
              Não tentar obter acesso não autorizado a sistemas, dados ou
              informações do site;
            </li>

            <li style={{ marginBottom: "0.5em" }}>
              Não utilizar nossos serviços para distribuir conteúdo prejudicial,
              ofensivo ou ilícito.
            </li>

            <br />
          </Typography>
          <Divider orientation="horizontal" sx={{ marginBottom: "1em" }} />
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "1.2em",
              marginBottom: "5px",
            }}
          >
            4. Propriedade Intelectual
          </Typography>
          Todo o conteúdo disponível no site, incluindo textos, imagens,
          logotipos e design, é protegido por direitos autorais e não pode ser
          utilizado sem nossa permissão prévia.
        </Typography>
      </Box>
    </Modal>
  );
};

export default TermsModal;
