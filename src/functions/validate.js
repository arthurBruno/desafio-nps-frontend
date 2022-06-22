export default {
  isDataValid: (questions, step, data) => {

    const question = questions[step];

    if (data?.rating === null) {
      return { error: 'Ocorreu um erro inesperado.' };
    }

    if (question.textField && question.textField.required && !data?.textField) {
      return { error: '*Obrigatório' };
    }

    return true;
  }
};