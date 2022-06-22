import { Box, Slider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 13px',

    '& .MuiSlider-rail': {
      height: 8,
      borderRadius: 15,
    },

    '& .MuiSlider-track': {
      height: 8,
      borderRadius: 15,
      background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
    },

    '& .MuiSlider-mark, & .MuiSlider-markActive': {
      width: 1,
      height: 8,
      bottom: 6,
      color: theme.palette.grey.main,
      backgroundColor: theme.palette.grey.main,
    },

    '& .MuiSlider-thumb': {
      height: 15,
      width: 22,
      borderRadius: 10,
      marginLeft: -11,
      marginTop: -3,
      border: `1px solid ${theme.palette.grey.secondary}`,
      background: theme.palette.white.main,
    },
  },
}));

const RatingSlider = ({ step, onChange, ...props }) => {
  const classes = useStyles();

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 6,
      label: '6',
    },
    {
      value: 7,
      label: '7',
    },
    {
      value: 8,
      label: '8',
    },
    {
      value: 9,
      label: '9',
    },
    {
      value: 10,
      label: '10',
    },
  ];

  return (
    <Box className={classes.root}>
      <Slider
        aria-label="Avaliação"
        defaultValue={0}
        step={1}
        marks={marks}
        min={0}
        max={10}
        onChange={(event, value) => onChange(value)}
        {...props}
      />
    </Box>
  );
};

export default RatingSlider;
