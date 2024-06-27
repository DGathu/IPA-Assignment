/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
console.log('callback - particles.js config loaded');
});

function processUserInfo() {
    const username = document.getElementById('username').value;
    const age = parseInt(document.getElementById('age').value);
    const dob = new Date(document.getElementById('dob').value);
    let response = '';

    if (!username) {
        response = 'Please enter a username. <br>';
    }
    if (!age) {
        response += 'Please enter your age. <br>';
    }
    if (!dob) {
        response += 'Please enter your date of birth. <br>';
    }

    if (response) {
        document.getElementById('response').innerHTML = response;
        return;
    }

    const ageInt = parseInt(age);
    const dobDate = new Date(dob);
    const now = new Date();
    const millisecondsPerMinute = 1000 * 60;
    const minutesSinceBirth = Math.floor((now - dob) / millisecondsPerMinute);



    if (ageInt < 27) {
        response += "You are a Gen Z.<br>";
    }
    else if (ageInt >= 27 && ageInt < 43) {
        response += "You are a Millenial.<br>";
    }
    else if (ageInt >= 43 && ageInt < 59) {
        response += "You are a Gen X.<br>";
    }
    else if (ageInt >= 59 && ageInt < 69) {
        response += "You are a Boomers II.<br>";
    }
    else if (ageInt >= 69 && ageInt < 78) {
        response += "You are a Boomers II.<br>";
    }
    else {
        response += "You are from an Older Generation.<br>";
    }

    response += `Your date of birth is ${dobDate.toDateString()}.<br>`;
    response += `You have been alive for approximately ${minutesSinceBirth.toLocaleString()} minutes.<br>`

    document.getElementById('response').innerHTML = response;
}
