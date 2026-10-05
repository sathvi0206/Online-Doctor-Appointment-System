function selectDoctor(doctorName) {
    document.getElementById("doctor").value = doctorName;

    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });
}

function bookAppointment() {
    let patient = document.getElementById("patient").value;
    let age = document.getElementById("age").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (!patient || !age || !doctor || !date || !time) {
        alert("Please fill all appointment details.");
        return;
    }

    document.getElementById("confirmation").innerHTML = `
        <h3>Appointment Confirmed ✅</h3>
        <p><b>Patient:</b> ${patient}</p>
        <p><b>Doctor:</b> ${doctor}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p>Please arrive on time for your appointment.</p>
    `;
}