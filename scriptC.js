function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const companyName = getQueryParam("company");

if (companyName) {
    document.getElementById("company-name").innerText = `${companyName} Interview Preparation`;
}

function goToQuestions(type) {
    if (companyName) {
        window.location.href = `questions.html?company=${encodeURIComponent(companyName)}&type=${encodeURIComponent(type)}`;
    } else {
        alert("Company name is missing! Please select a company first.");
    }
}
