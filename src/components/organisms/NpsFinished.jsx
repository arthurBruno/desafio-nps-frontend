import { Box, Typography, Button, makeStyles } from '@material-ui/core';
import IconSuccess from '../../assets/icons/icon-success.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& .MuiTypography-root': {
      textAlign: 'center',
      padding: '30px 0 0',
    },
    '& .MuiTypography-body1': {
      paddingBottom: 40,
    },
  },
}));

const NpsFinished = ({ handleCloseModal }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img alt="Ícone de sucesso" src={IconSuccess} />

      <Typography variant="h5" component="h1">
        Sua avaliação foi enviada com sucesso!
      </Typography>

      <Typography variant="body1">
        Esta avaliação ajuda a melhorarmos a sua experiência. Muito obrigado pela sua participação.
      </Typography>

      <Button variant="contained" onClick={handleCloseModal}>
        Concluir
      </Button>
    </Box>
  );
};

export default NpsFinished;
