import { Box, TextField, Typography, makeStyles } from '@material-ui/core';

import RatingSlider from '../atoms/RatingSlider';
import nps from '../../functions/nps';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTypography-body1': {
      paddingTop: 30,
    },
    '& .MuiTextField-root': {
      padding: '25px 0 45px',
    },
  },
}));

const NpsStep = ({
  question,
  step,
  data,
  setData,
  error,
  setError
}) => {
  const classes = useStyles();
  const { textField } = question;

  const handleSaveData = (newData) => {
    nps.saveStep(step, newData);
  };

  const handleRatingChange = (value) => {
    setData({ ...data, rating: value });
    handleSaveData({ ...data, rating: value });
  };

  const handleTextFieldChange = (event) => {
    if (error) {
      setError(null);
    }

    setData({ ...data, textField: event.target.value });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="body1">{question.description}</Typography>

      <RatingSlider value={data?.rating || 0} onChange={handleRatingChange} />

      {question.hasTextField && (
        <TextField
          id={`nps-textfield-${question.id}`}
          placeholder={textField.placeholder}
          variant="outlined"
          multiline
          minRows={4}
          helperText={error}
          value={data?.textField || ''}
          onChange={handleTextFieldChange}
          onBlur={() => handleSaveData(data)}
        />
      )}
    </Box>
  );
};

export default NpsStep;
