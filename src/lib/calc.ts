export const roundOff = (number: number, places: number = 0) => {
  const mutilple = Math.pow(10, places);
  return Math.round(number*mutilple)/mutilple; 
}
