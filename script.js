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

const companies = {};

for (user of salarios){
    for (job of user.trabajos) {
        if (!companies[job.empresa]) {
            companies[job.empresa] = {};
        }

        if (!companies[job.empresa][job.year]) {
            companies[job.empresa][job.year] = [];
        }
        companies[job.empresa][job.year].push(job.salario);
    }
}
// console.log({companies});

function medianSalariesByCompany (company, year) {
    if (!companies[company]){
        return "La empresa no existe"
    } else if (!companies[company][year]){
        return "En ese año nadie trabajó en " + company;
    } else {
        return MarsMath.calcularMediana(companies[company][year]);
    }
}

//proyección salarial de la empresa

function projectedSalaryByCompany (company) {
    if (!companies[company]){
        return "La empresa no existe"
    } else {
        const companyYears = Object.keys(companies[company]);
        const medianEachYear = companyYears.map((year) => {
        return medianSalariesByCompany(company, year);
        });
    
        let increasePercentage = [];

        for (let i = 1; i < medianEachYear.length; i++) {
            const currentSalary = medianEachYear[i];
            const pastSalary = medianEachYear[i - 1];
            const salariesDiff = currentSalary - pastSalary;
            const percentageDiff = salariesDiff / pastSalary;
            increasePercentage.push(percentageDiff);
        }
        const averageIncreasePercentage = MarsMath.calcularPromedio(increasePercentage);
    
        const lastMedian = medianEachYear[medianEachYear.length - 1];
        const increase = lastMedian * averageIncreasePercentage;
        const projectedSalary = lastMedian + increase;
        
        return projectedSalary;
    
    
    }
}

