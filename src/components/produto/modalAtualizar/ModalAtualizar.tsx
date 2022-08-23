import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@mui/material/Modal";
import { Button, Box } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import "./ModalAtualizar.css";
import AtualizaProduto from "../atualizaProduto/AtualizaProduto";

interface MyProps {
    productId: any;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: "absolute",
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: "2px solid #528240",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    })
);

function ModalAtualizar(props: MyProps) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon onClick={handleClose} />
            </Box>

            <AtualizaProduto productId={props.productId} setOpen={handleClose}/>
        </div>
    );
    return (

        <Box>

            <Box>
                <Button
                    variant="contained"
                    className="botao btn"
                    size="large"
                    onClick={handleOpen}
                >
                    Atualizar
                </Button>
            </Box>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </Box>
    );
}
export default ModalAtualizar;