import * as React from 'react';
import { Box, Modal, IconButton, makeStyles } from '@material-ui/core';
import IconClose from '../../assets/icons/icon-close.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 420,
    height: 580,
    backgroundColor: theme.palette.background.paper,
    padding: 13,

    '&:focus-visible': {
      outlineWidth: 0,
    },

    '@media (max-width: 500px)': {
      width: '80vw',
      height: '90vh',
      maxHeight: 580,
    },
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',

    '& .MuiButtonBase-root': {
      width: 40,
    }
  },
  content: {
    padding: 12,
  }
}));

const StyledModal = ({ leftIcon, handleLeftClick, handleClose, children, ...rest }) => {
  const classes = useStyles();

  return (
    <Modal {...rest}>
      <Box className={classes.root}>
        <Box className={classes.icons}>
          {leftIcon ? (
            <IconButton onClick={handleLeftClick}>
              {leftIcon}
            </IconButton>
          ) : (
            <Box />
          )}

          <IconButton onClick={handleClose}>
            <img alt="Ícone de fechar modal" src={IconClose} />
          </IconButton>
        </Box>

        <Box className={classes.content}>
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

export default StyledModal;
