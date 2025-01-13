document.addEventListener("DOMContentLoaded", () => {
  // Data storage for Attendance, Leave, Payroll, Travel, Expenses
  let attendanceData = { Present: 0, Absent: 0 };
  let leaveData = { Approved: 0, Pending: 0, Denied: 0 };
  let payrollData = [];
  let travelData = [];
  let expensesData = [];

  // Initialize charts
  const ctxAttendance = document.getElementById("attendance-chart").getContext("2d");
  const ctxLeave = document.getElementById("leave-chart").getContext("2d");
  const ctxPayroll = document.getElementById("payroll-chart").getContext("2d");
  const ctxTravel = document.getElementById("travel-chart").getContext("2d");
  const ctxExpenses = document.getElementById("expenses-chart").getContext("2d");

  const attendanceGraph = new Chart(ctxAttendance, { type: 'pie', data: { labels: ["Present", "Absent"], datasets: [{ data: [attendanceData.Present, attendanceData.Absent], backgroundColor: ["#36a2eb", "#ff6384"] }] } });
  const leaveGraph = new Chart(ctxLeave, { type: 'pie', data: { labels: ["Approved", "Pending", "Denied"], datasets: [{ data: [leaveData.Approved, leaveData.Pending, leaveData.Denied], backgroundColor: ["#36a2eb", "#ffcc00", "#ff6384"] }] } });
  const payrollGraph = new Chart(ctxPayroll, { type: 'bar', data: { labels: [], datasets: [{ label: "Payroll", data: [], backgroundColor: "rgba(75, 192, 192, 0.2)", borderColor: "rgba(75, 192, 192, 1)", borderWidth: 1 }] } });
  const travelGraph = new Chart(ctxTravel, { type: 'bar', data: { labels: [], datasets: [{ label: "Travel Cost", data: [], backgroundColor: "rgba(153, 102, 255, 0.2)", borderColor: "rgba(153, 102, 255, 1)", borderWidth: 1 }] } });
  const expensesGraph = new Chart(ctxExpenses, { type: 'bar', data: { labels: [], datasets: [{ label: "Expenses", data: [], backgroundColor: "rgba(255, 159, 64, 0.2)", borderColor: "rgba(255, 159, 64, 1)", borderWidth: 1 }] } });

  // Event listener for Attendance form submission
  document.getElementById("attendance-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.getElementById("attendance-status").value;
    attendanceData[status]++;
    attendanceGraph.data.datasets[0].data = [attendanceData.Present, attendanceData.Absent];
    attendanceGraph.update();
  });

  // Event listener for Leave form submission
  document.getElementById("leave-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.getElementById("leave-status").value;
    leaveData[status]++;
    leaveGraph.data.datasets[0].data = [leaveData.Approved, leaveData.Pending, leaveData.Denied];
    leaveGraph.update();
  });

  // Event listener for Payroll form submission
  document.getElementById("payroll-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const salary = document.getElementById("salary").value;
    payrollData.push(salary);
    payrollGraph.data.labels = payrollData.map((_, i) => `Employee ${i + 1}`);
    payrollGraph.data.datasets[0].data = payrollData;
    payrollGraph.update();
  });

  // Event listener for Travel form submission
  document.getElementById("travel-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const destination = document.getElementById("destination").value;
    const cost = document.getElementById("travel-cost").value;
    travelData.push({ destination, cost });
    travelGraph.data.labels = travelData.map(item => item.destination);
    travelGraph.data.datasets[0].data = travelData.map(item => item.cost);
    travelGraph.update();
  });

  // Event listener for Expenses form submission
  document.getElementById("expenses-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const category = document.getElementById("expense-category").value;
    const amount = document.getElementById("expense-amount").value;
    expensesData.push({ category, amount });
    expensesGraph.data.labels = expensesData.map(item => item.category);
    expensesGraph.data.datasets[0].data = expensesData.map(item => item.amount);
    expensesGraph.update();
  });

  // Function to show specific section
  window.viewSection = (section) => {
    const sections = ["attendance", "leave", "payroll", "travel", "expenses"];
    sections.forEach((sec) => {
      const content = document.getElementById(`${sec}-content`);
      const button = document.querySelector(`#${sec} .view-button`);
      if (sec === section) {
        content.style.display = "block";
        button.textContent = "Hide";
      } else {
        content.style.display = "none";
        button.textContent = "View";
      }
    });
  };
});
