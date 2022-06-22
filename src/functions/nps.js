export default {
  isNpsFinalized: () => JSON.parse(localStorage.getItem('isNpsFinalized')),

  getStepsSetup: () => {
    const current = JSON.parse(localStorage.getItem('currentStep'));
    const steps = JSON.parse(localStorage.getItem('steps'));

    if (current == null || !steps) {
      return false;
    }
    
    return { current, steps };
  },

  saveStep: (step, data, isNextStep) => {
    const currentStep = JSON.parse(localStorage.getItem('currentStep'))
    const steps = JSON.parse(localStorage.getItem('steps')) || [];
    steps[step] = data;

    localStorage.setItem('steps', JSON.stringify(steps));

    if (step >= currentStep || !currentStep) {
      localStorage.setItem('currentStep', JSON.stringify(isNextStep ? step + 1 : step));
    }

    return true;
  },

  finish: () => {
    localStorage.setItem('isNpsFinalized', true);

    return true;
  }
};