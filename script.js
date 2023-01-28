console.log('Hello, world');

function findUser(userToFind) {
    return salarios.find(user => user.name == userToFind);
}

function medianaUser(userName) {
    const jobs = findUser(userName).trabajos;
    const salarios = jobs.map(function (item){
        return item.salario;
    });
    const medianaSalarios = MarsMath.calcularMediana(salarios);
    return medianaSalarios;
}

function salaryProjection(userName) {
    const jobs = findUser(userName).trabajos;

    let increasePercentage = [];

    for (let i = 1; i < jobs.length; i++) {
        const currentSalary = jobs[i].salario;
        const pastSalary = jobs[i - 1].salario;
        const salariesDiff = currentSalary - pastSalary;
        const percentageDiff = salariesDiff / pastSalary;
        increasePercentage.push(percentageDiff);
    }

    const averageIncreasePercentage = MarsMath.calcularPromedio(increasePercentage);

    const lastSalary = jobs[jobs.length - 1].salario;
    const increase = lastSalary * averageIncreasePercentage;
    const projectedSalary = lastSalary + increase;
    
    return projectedSalary;

}










// Reto: proyección de salarios a partir de la info que hay