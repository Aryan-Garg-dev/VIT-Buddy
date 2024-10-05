export const grades: {[key: string]: number} = {
  S: 10,
  A: 9,
  B: 8, 
  C: 7, 
  D: 6, 
  E: 5,
  N: 0,
  F: 0
}

export const credits = [ 1, 1.5, 2, 3, 4, 5 ];

export type GradeCreditList = {
  Grade: string,
  Credits: number
}[];

export const validateList = (list: GradeCreditList): boolean =>{
  let isValueProvided = false;
  for (const item of list){
    if (item.Credits == 0 && item.Grade == "") continue;
    else if (item.Credits == 0 || item.Grade == "") return false;
    else isValueProvided = true;
  }
  return isValueProvided;
}

export const calculateGPA = (data: GradeCreditList): number => {
  let gradePoints = 0;
  let creditScore = 0;

  for (const item of data){
    if (item.Credits == 0 || item.Grade == "") continue;
    gradePoints += grades[item.Grade] * item.Credits;
    creditScore += item.Credits;
  }

  const gpa = creditScore > 0 ? gradePoints/creditScore : 0;
  return Math.round(gpa * 100) / 100;
}
