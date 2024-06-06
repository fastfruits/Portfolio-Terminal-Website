var before = getEl("before");
var liner = getEl("liner");
var command = getEl("typer"); 
var textarea = getEl("texter"); 
var terminal = getEl("terminal");

var git = 0;
var commands = [];

document.addEventListener("DOMContentLoaded", function() {
    var loadingBar = getEl("loading-bar");
    var loadingText = getEl("loading-text");
    var mainContent = getEl("main-content");
    var loadingContainer = getEl("loading-container");
    var width = 0;

    function load() {
        if (width >= 100) {

            clearInterval(interval);
            loadingText.textContent = "Complete";
            setTimeout(function() {
                document.body.classList.remove('loading');
                loadingContainer.style.display = 'none';
                getEl("webTitle").style.display = 'none';
                mainContent.style.display = 'block';
                setTimeout(function() {
                    loopLines(banner, "", 20);
                    textarea.focus();
                }, 100);
            }, 500);
        } else {
            width += 25;
            loadingBar.style.width = width + '%';
        }
    }
    var interval = setInterval(load, 500);
});

window.addEventListener("keyup", enterKey);

textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    if (e.keyCode == 181) {
        document.location.reload(true);
    }
    else {
        if (e.keyCode == 13) {
            commands.push(command.innerHTML);
            git = commands.length;
            addLine("X:\\Users\\Guest> " + command.innerHTML, "no-animation", 0);
            commander(command.innerHTML.toLowerCase());
            command.innerHTML = "";
            textarea.value = "";
        }
        if (e.keyCode == 38 && git != 0) {
            git -= 1;
            textarea.value = commands[git];
            command.innerHTML = textarea.value;
        }
        if (e.keyCode == 40 && git != commands.length) {
            git += 1;
            if (commands[git] === undefined) {
                textarea.value = "";
            } 
            else {
                textarea.value = commands[git];
            }
        command.innerHTML = textarea.value;
        }
    }
}

function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "help":
            loopLines(help, "color2 margin", 50);
        break;
        case "whois":
            loopLines(whois, "color2 margin", 50);
        break;
        case "skills":
            loopLines(skills, "color2 margin", 50)
        break;
        case "socials":
            loopLines(socials, "color2 margin", 50);
        break;
        case "projects":
            loopLines(projects, "color2 margin", 50);
        break;
        case "ai":
            loopLines(ai, "color2 margin", 50);
        break;
        case "av":
            loopLines(av, "color2 margin", 50);
        break;
        case "minesweeper":
            loopLines(minesweeper, "color2 margin", 50);
        break;
        case "webdev":
            loopLines(webdev, "color2 margin", 50);
        break;
        case "rpg":
            loopLines(rpg, "color2 margin", 50);
        break;
        case "benchmark":
            loopLines(benchmark, "color2 margin", 50);
        break;
        case "portfolio":
            loopLines(portfolio, "color2 margin", 50);
        break;
        case "history":
            addLine("<br>", "", 0);
            loopLines(commands, "color2", 50);
            addLine("<br>", "command", 80 * commands.length + 50);
        break;
        case "email":
            addLine('Emailing <a href="mailto:nichoias.henry1006@gmail.com">nichoias.henry1006@gmail.com</a>...', "color2", 50);
            newTab(email);
        break;
        case "clear":
            setTimeout(function() {
            terminal.innerHTML = '<a id="before"></a>';
            before = document.getElementById("before");
            }, 1);
        break;
        case "banner":
            loopLines(banner, "", 50);
        break;
        case "linkedin":
            addLine("Opening LinkedIn...", "color2", 0);
            newTab(linkedin);
        break;
        case "github":
            addLine("Opening GitHub...", "color2", 0);
            newTab(github);
        break;
        case "light":

        break;
        case "dark":

        break;
        default:
            addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
        break;
    }
}

function newTab(link) {
    setTimeout(function() {
        window.open(link, "_blank");
    }, 500);
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } 
        else {
            t += text.charAt(i);
        }
    }
    setTimeout(function() {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        before.parentNode.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function(item, index) {
        addLine(item, style, index * time);
    });
}

function getEl(elid) {
    return document.getElementById(elid);
}

function init() {
    cursor = getEl("cursor");
    cursor.style.left = "0px";
}

function nl2br(txt) {
    return txt.replace(/\n/g, '');
}

function typeToTyper(from, e) {
    e = e || window.event;
    var w = getEl("typer");
    var tw = from.value;
    w.innerHTML = nl2br(tw);
}

function moveCursor(count, e) {
    e = e || window.event;
    var keycode = e.keyCode || e.which;
    if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } 
    else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
}

