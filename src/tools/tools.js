export const calcVw = (num, bodyWidth=0,fractionDigits=3) => {
  if (bodyWidth) {
    return Number((100 /bodyWidth * num).toFixed(fractionDigits))
  }else {
    return Number((100 / document.body.clientWidth * num).toFixed(fractionDigits))
  }
}

