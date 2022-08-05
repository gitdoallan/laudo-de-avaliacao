const dontNeedFormatting = (index, isMobile) => {
  if (isMobile && index !== 0 && index !== 2 && index !== 7) {
    return true;
  }
  if (isMobile === false && index !== 0 && index !== 2 && index !== 6) {
    return true;
  }
  return false;
};

const checkIndex = (index) => {
  if (index === 0 || index === 2 || index === 6 || index === 7) {
    return true;
  }
  return false;
};

const checkMobile = (numberArr) => {
  if (numberArr.length < 3) {
    return true;
  }
  if (numberArr[2] === '9') {
    return true;
  }
  return false;
};

const removeChars = (number) => {
  const split = number.split('');
  const reduce = split.reduce((acc, curr) => {
    if (curr !== '(' && curr !== ')' && curr !== ' ' && curr !== '-') {
      return acc + curr;
    }
    return acc;
  }, '');
  return reduce;
};

export const phoneFormatter = (receivedNumber) => {
  const withoutChars = removeChars(receivedNumber);
  const numberArr = withoutChars.split('');
  const formatMobile = ['(', '', ') ', '', '', '', '', '-'];
  const formatLandline = ['(', '', ') ', '', '', '', '-'];

  const formattedNumberArr = numberArr.reduce((acc, curr, index) => {
    const isMobile = checkMobile(numberArr);

    if (dontNeedFormatting(index, isMobile)) {
      return acc = [...acc, curr];
    }
    if (checkIndex(index)) {
      return acc = [...acc, isMobile? formatMobile[index] : formatLandline[index], curr];
    }
  }, []);
  const formattedNumber = formattedNumberArr.join('');
  return formattedNumber;
};
