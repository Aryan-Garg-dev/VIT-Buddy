import { roundOff } from "../calc";

export type GPACredit = {
  GPA: number,
  Credits: number
}

export const validateGPACreditList = (GPACreditList: GPACredit[]): boolean => {
  if (GPACreditList.length > 12) return false;
  let isEmpty: boolean = true;
  for (const item of GPACreditList){
    if ((item.GPA !== 0 && item.Credits === 0) || (item.GPA !== 0 && item.Credits === 0)){
      return false;
    }
    if (item.GPA > 10 || item.Credits > 50) return false;
    if (item.GPA != 0 && item.Credits != 0) isEmpty = false;
  }
  return !isEmpty;
}

export const calculateCGPA = (GPACreditList: GPACredit[])=>{
  let totalCredits = 0;
  let sum = 0;
  for (const item of GPACreditList){
    sum += (item.Credits * item.GPA);
    totalCredits += item.Credits;
  }
  return roundOff(sum / totalCredits, 2);
}

export const calculateTotalSemCredits = (GPACreditList: GPACredit[]) => {
  let totalSem = 0;
  let totalCredits = 0;
  for (const item of GPACreditList){
    if (item.GPA != 0) totalSem++;
    totalCredits += item.Credits;
  }
  return { Semesters: totalSem, Credits: totalCredits };
}