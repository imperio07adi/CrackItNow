document.addEventListener("DOMContentLoaded", function () {
    const questionButtons = document.querySelectorAll(".question-btn");

    questionButtons.forEach(button => {
        button.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            document.querySelectorAll(".answer").forEach(ans => {
                if (ans !== answer) {
                    ans.style.display = "none";
                }
            });

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const companyName = getQueryParam("company");
    const interviewType = getQueryParam("type");

    if (companyName && interviewType) {
        document.getElementById("page-title").innerText = `${companyName} - ${interviewType}`;
        document.getElementById("company-interview-title").innerText = `Previous Year ${interviewType} Questions`;
    }
});
