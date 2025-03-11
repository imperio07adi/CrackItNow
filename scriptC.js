// Function to get query parameters from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the selected company name from URL
const companyName = getQueryParam("company");

// Set the company name in the header dynamically
if (companyName) {
    document.getElementById("company-name").innerText = `${companyName} Interview Preparation`;
}

// Function to navigate to the questions page with parameters
function goToQuestions(type) {
    if (companyName) {
        window.location.href = `questions.html?company=${encodeURIComponent(companyName)}&type=${encodeURIComponent(type)}`;
    } else {
        alert("Company name is missing! Please select a company first.");
    }
}
