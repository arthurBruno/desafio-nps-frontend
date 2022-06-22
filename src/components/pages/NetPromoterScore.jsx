import { useState } from 'react';
import { Box, Typography, Button, makeStyles } from '@material-ui/core';
import ModalNPS from '../organisms/ModalNPS';
import FireDevLogo from '../../assets/img/logo-firedev.jpg';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'grid',
    justifyItems: 'center',
    marginTop: 100,
    gap: 40,

    '& img': {
      width: 250,
      marginBottom: 30
    },

    '& > MuiButtonBase-root': {
      width: 'fit-content',
    },
  },
});

const NetPromoterScore = () => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <Box className={classes.root}>
      <img alt="Logo FireDev" src={FireDevLogo} />
      <Typography variant="h5">Pesquisa de satisfação</Typography>
      <Button variant="contained" onClick={handleOpenModal}>Iniciar</Button>

      <ModalNPS open={modalOpen} setOpen={setModalOpen} />
    </Box>
);
}

export default NetPromoterScore;
