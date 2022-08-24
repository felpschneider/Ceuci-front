import { Grid, Box, Typography, AppBar, Button, Input } from "@mui/material";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GroupIcon from "@mui/icons-material/Group";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LoginIcon from "@mui/icons-material/Login";
import CommentBankIcon from "@mui/icons-material/CommentBank";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Footer() {
  let history = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    history("/login");
  }

  var footerComponent;

  if (token != "" || token == "") {
    footerComponent = (
      <AppBar position="static">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="footer"
        >
          <Grid className="footer-box">
            <Box>
              <Typography variant="h6" className="footer-title">
                Podemos te ajudar?
              </Typography>
              <Typography variant="body1" className="texto">
                <EmailIcon className="footer-icon" /> comunicacao@ceuci.com.br
              </Typography>
              <Typography variant="h6" className="footer-title">
                Sobre nós
              </Typography>
              <Link to="/contato" className="text-decorator-none footer">
                <Typography variant="body1" className="footer-text">
                  <GroupIcon className="footer-icon" /> Idealizadores
                </Typography>
              </Link>
              <Link to="/sobre" className="text-decorator-none footer">
                <Typography variant="body1" className="footer-text">
                  <CommentBankIcon className="footer-icon" /> Nossa História
                </Typography>
              </Link>
            </Box>
            <Box>
              <Box>
                <Typography variant="h6" className="footer-title">
                  Receba ofertas exclusivas e muita dica sobre alimentação
                  saudável. Assine nossa Newsletter!
                </Typography>
                <div className="assine">
                  <input
                    type="email"
                    placeholder="Digite seu email"
                    className="inputAssine"
                  />
                  <Button className="button-01">
                    <ArrowForwardIcon className="iconButton" />
                  </Button>
                </div>
              </Box>
              <Box className="redes">
                <Typography variant="h6" className="footer-title">
                  Siga-nos nas redes sociais:
                </Typography>
                <Box className="redes1">
                  <a
                    href="https://www.instagram.com/generationbrasil/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="instagram" />
                  </a>

                  <a
                    href="https://github.com/felpschneider/Ceuci-front"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="github" />
                  </a>

                  <a
                    href="https://www.linkedin.com/school/generationbrasil/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className="linkedin" />
                  </a>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography variant="h6" className="footer-title">
                  Ajuda
                </Typography>
                <Link to="/login" className="text-decorator-none footer">
                  <Typography variant="body1" className="footer-text">
                    <LoginIcon className="footer-icon1" /> Acessar minha conta
                  </Typography>
                </Link>
                <Link
                  to="/cadastrousuario"
                  className="text-decorator-none footer"
                >
                  <Typography variant="body1" className="footer-text">
                    <AssignmentIndIcon className="footer-icon1" /> Ser uma
                    produtora parceira
                  </Typography>
                </Link>
              </Box>
              <Box>
                <Typography variant="h6" className="footer-title">
                  Segurança
                </Typography>
                <img
                  src="https://i.imgur.com/DUCpMGd.png"
                  alt=""
                  className="sec"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
