function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [];
  } else {
    mark.every((nextmark,index) => this.marks.push(mark[index]));
    
    //this.marks.push(mark);
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
// ваш код для остальных методов
