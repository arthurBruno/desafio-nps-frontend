import { useEffect, useState } from 'react';
import { Box,Typography, Button, makeStyles } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import NpsStep from '../molecules/NpsStep';
import NpsQuestions from '../../assets/NpsQuestions.json';
import nps from '../../functions/nps.js';
import validate from '../../functions/validate.js';

const { questions } = NpsQuestions;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTypography-root': {
      textAlign: 'center',
    },
    '& .MuiTypography-h5': {
      padding: '25px 0 30px',
    },
  },
  buttons: {
    textAlign: 'center',

    '@media (max-width: 500px)': {
      display: 'flex',
      justifyContent: 'space-between',

      '& .MuiButton-root': {
        width: '45%',
      },
    },

    '@media (max-width: 270px)': {
      display: 'block',

      '& .MuiButton-root': {
        width: '100%',
      },

      '& .MuiButton-outlined': {
        marginBottom: 5,
      },
    },

    '@media (min-width: 500px)': {
      '& .MuiButton-outlined': {
        display: 'none',
      },
    },
  }
}));

const NpsSteps = ({
  step,
  setStep,
  stepData,
  setStepData,
  allSteps,
  setAllSteps,
  setIsFinished,
  handleBackClick,
}) => {
  const [error, setError] = useState(null);
  const classes = useStyles();
  
  useEffect(() => {
    if (nps.isNpsFinalized()) {
      setIsFinished(true);
    } else {
      configureSteps();
    }
  }, []);

  const configureSteps = () => {
    const stepsSetup = nps.getStepsSetup();

    if (stepsSetup) {
      setStepData(stepsSetup.steps[stepsSetup.current]);
      setStep(stepsSetup.current);
      setAllSteps(stepsSetup.steps);
    } else {
      const currentQuestion = questions[0];
      setStepData({ id: currentQuestion.id, rating: currentQuestion.rating.value, textField: currentQuestion.textField.value});
      setAllSteps(questions.map(question => ({ id: question.id, rating: question.rating.value, textField: question.textField.value })));
    }
  };

  const isStepValid = () => {
    const validation = validate.isDataValid(questions, step, stepData);

    if (validation.error) {
      setError(validation.error);
      return false
    }

    return true;
  }

  const handleNextClick = () => {
    if (isStepValid()) {
      nps.saveStep(step, stepData, true);
      allSteps[step] = { ...allSteps[step], ...stepData};
      setAllSteps(allSteps);

      if (questions.length - 1 === step) {
        setIsFinished(true);
        nps.finish();
        showInConsole();
      } else {
        setStep(step + 1);
        setStepData(allSteps[step + 1]);
      }
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h5" component="h1">
        Avaliação de satisfação
      </Typography>

      <SwipeableViews index={step} onChangeIndex={setStep}>
        {questions.map(question => (
          <NpsStep
            key={question.id}
            question={question}
            step={step}
            data={stepData}
            setData={setStepData}
            error={error}
            setError={setError}
          />
        ))}
      </SwipeableViews>

      <Box className={classes.buttons}>
        <Button variant="outlined" onClick={handleBackClick}>Voltar</Button>
        <Button variant="contained" onClick={handleNextClick}>Próxima</Button>
      </Box>
    </Box>
  );
};

export default NpsSteps;
