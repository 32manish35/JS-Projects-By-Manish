const getAverage = (array_testScores) => {
    let sum = 0;
    if (array_testScores.length === 0) {
        return 0;
    }
    for (let i = 0; i < array_testScores.length; i++){
        sum += array_testScores[i];
    }
    return sum / array_testScores.length;
}

const getGrade = (score) => {
    if (score === 100) {
      return "A+";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else if (score >= 0) {
      return "F";
    } else {
      return "Invalid Score";
    }
}

const hasPassingGrade = (score) => {
    return getGrade(score) !== "F";
}

const studentMsg = (totalScores, studentScore) => {
    const classAvg = getAverage(totalScores);
    const studentGrade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);
    return `Class average: ${classAvg}. Your grade: ${studentGrade}. You ${passed ? "passed" : "failed"} the course.`;
}

console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));
