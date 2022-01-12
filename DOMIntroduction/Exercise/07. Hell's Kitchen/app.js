function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputText = document.querySelector('#inputs textarea');
      let text = inputText.value;

      let inputArr = JSON.parse(text);

      let restorants = {};

      for (let index = 0; index < inputArr.length; index++) {
         let [restorantName, workersString] = inputArr[index].split(' - ');
         let inputWorkers = workersString.split(', ').map(w => {
            let [name, salary] = w.split(' ');
            return { name, salary: Number(salary) };
         });

         if (!restorants[restorantName]) {
            restorants[restorantName] = {
               workers: [],
               restorantName: restorantName,
               getAverageSalary: function () {
                  return this.workers.reduce((acc, el) => acc + el.salary, 0) / this.workers.length;
               }
            };
         }
         restorants[restorantName].workers = restorants[restorantName].workers.concat(inputWorkers);
      }

      let sortRestorants = Object.values(restorants)
         .sort((a, b) => b.getAverageSalary() - a.getAverageSalary());

      let bestRestorant = sortRestorants[0];
      let sortWorkers = bestRestorant.workers.sort((a, b) => b.salary - a.salary);
      let averageSalary = bestRestorant.getAverageSalary().toFixed(2);

      let bestSalary = sortWorkers[0].salary.toFixed(2);
      let topRestorantString = `Name: ${bestRestorant.restorantName} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
      let workersString = sortWorkers
         .map(x => `Name: ${x.name} With Salary: ${x.salary}`)
         .join(' ');

      let bestRestorantElement = document.querySelector("#bestRestaurant p");
      let workersElement = document.querySelector("#workers p");

      bestRestorantElement.textContent = topRestorantString;
      workersElement.textContent = workersString;
   }
}