//================= Задача 1 ===================
function parseCount(value) {
    let persresult = parseInt(value);
    if (!persresult) throw new Error("Невалидное значение");
    return persresult;
}

function validateCount(value) {
    let aaa;
    try {
        return parseCount(value); 
    }
    catch (err){
        return err;
    }
}

//================= Задача 2 ===================

class Triangle {
    constructor(sideA,sideB,sideC) {
        if ((sideA + sideB) <= sideC || (sideA + sideC) <= sideB || (sideB + sideC) <= sideA){
            console.log("ошибка");
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            console.log("норм");
        }
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    getArea() {
        let halfPerimeter = (this.sideA + this.sideB + this.sideC) * 0.5;
        return Number((Math.sqrt(halfPerimeter*(halfPerimeter - this.sideA)*(halfPerimeter - this.sideB)*(halfPerimeter - this.sideC))).toFixed(3));
    }
}

function getTriangle(sideA,sideB,sideC) {
    try {
        return new Triangle(sideA,sideB,sideC);
    }
    catch {
        const objForReturn= {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
        }
        return objForReturn;
    }
}