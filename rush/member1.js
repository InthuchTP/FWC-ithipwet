$(document).ready(function () {

    $(".speech-box").hide().fadeIn(800);

    const welcomeText = "WELCOME TO MY PORTFOLIO.";
    const nameText = "THANAWIT WANTHONG";

    function startTyping() {
        let i = 0;
        let j = 0;
        $("#welcome").text("");
        $("#name").text("");
        function typeWelcome() {

            if (i < welcomeText.length) {
                $("#welcome").append(welcomeText.charAt(i));
                i++;
                setTimeout(typeWelcome, 70);
            } else {
                setTimeout(typeName, 300);
            }
        }
        function typeName() {
            if (j < nameText.length) {
                $("#name").append(nameText.charAt(j));
                j++;
                setTimeout(typeName, 70);
            } else {
                setTimeout(startTyping, 2000);
            }
        }
        typeWelcome();
    }
    startTyping();

});