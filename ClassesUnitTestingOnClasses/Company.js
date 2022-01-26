class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let arrInfo = [name, salary, position, department];
        if (arrInfo.some(x => x === '' || x === null || x === undefined)) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (this.departments[department] == undefined) {
            this.departments[department] = [];
        }

        let employee = {
            name: name,
            salary: (Number)(salary),
            position: position,
            department: department
        };

        this.departments[department].push(employee);
        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
    }


    bestDepartment() {
        let maxAverageSalary = -1;
        let bestDepartmentName = '';
        let printEmployees = [];


        Object.values(this.departments).forEach(x => {
            let sumSalary = 0;
            let currentAverageSalary = 0;
            let currentDep = '';
            let currentEmployees = [];

            for (let j = 0; j < x.length; j++) {
                let currentEmployee = x[j];
                sumSalary += currentEmployee.salary;
                currentDep = currentEmployee.department;
                currentEmployees.push(currentEmployee);
                currentEmployees.sort((a,b) => b.salary - a.salary);
            }

            currentAverageSalary = sumSalary / x.length;
            
            if (maxAverageSalary < currentAverageSalary) {
                maxAverageSalary = currentAverageSalary;
                bestDepartmentName = currentDep;
                printEmployees = currentEmployees;
            }
        });
       
        let formated = '';
       
       printEmployees.forEach(x=> {
          
              formated += x.name + ' ' + x.salary + ' ' + x.position + '\n';
               
           
       })
        return `Best Department is: ${bestDepartmentName}` + '\n' +
            `Average salary: ${maxAverageSalary}`  + '\n' + 
            formated;

    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
