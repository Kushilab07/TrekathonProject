document.getElementById("attendance-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const employeeName = document.getElementById("employee-name").value;
  const status = document.getElementById("attendance-status").value;
  const date = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

  fetch("http://localhost:3000/attendance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ employee_name: employeeName, status: status, date: date })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Attendance recorded:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
