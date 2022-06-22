import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import StyledModal from '../atoms/StyledModal';
import NpsSteps from './NpsSteps';
import NpsFinished from './NpsFinished';
import NpsQuestions from '../../assets/NpsQuestions.json';
import IconLeftArrow from '../../assets/icons/icon-left-arrow.svg';

const { questions } = NpsQuestions;

const ModalNPS = ({ open, setOpen }) => {
  const [step, setStep] = useState(0);
  const [stepData, setStepData] = useState({});
  const [allSteps, setAllSteps] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const LeftArrow = (step !== 0 && !isFinished) && <img alt="Ícone de retornar" src={IconLeftArrow} />;

  const handleBackClick = () => {
    setStep(step - 1);
    setStepData(allSteps[step - 1]);
  };

  const showInConsole = () => {
    questions.forEach((question, index) => {
      console.log(`- Pergunta ${index + 1}:`);
      console.log(question.description);
      console.log('Nota escolhida:', allSteps[index].rating);
      console.log('Resposta escrita:', allSteps[index].textField || '-');
      console.log('------------------------------------');
    });
  }

  const handleFinish = () => {
    showInConsole();
    handleClose();
  }

  return (
    <StyledModal
      open={open}
      handleClose={handleClose}
      handleLeftClick={handleBackClick}
      leftIcon={LeftArrow}
    >
      <SwipeableViews index={isFinished ? 1 : 0}>
        <div>
          {!isFinished && (
            <NpsSteps
              step={step}
              setStep={setStep}
              stepData={stepData}
              setStepData={setStepData}
              allSteps={allSteps}
              setAllSteps={setAllSteps}
              setIsFinished={setIsFinished}
              handleBackClick={handleBackClick}
            />
          )}
        </div>

        <div>
          <NpsFinished handleCloseModal={handleFinish} />
        </div>
      </SwipeableViews>
    </StyledModal>
  );
};

export default ModalNPS;
