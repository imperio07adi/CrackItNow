function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;

    if (!name || !email || !phone || !skills || !experience || !education) {
        alert("Please fill in all fields.");
        return;
    }

    const resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
    `;

    document.getElementById("resumePreview").innerHTML = resumeHTML;
}
