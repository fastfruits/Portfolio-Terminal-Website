var linkedin = "https://www.linkedin.com/in/nicholas-henry-57b325283/";
var github = "https://github.com/fastfruits";
var email = 'mailto:nichoias.henry1006@gmail.com';

whois = [
  "<br>",
  '',
  "<br>"
];

skills = [
  "<br>",
  '',
  "<br>"
]

socials = [
  "<br>",
  '<span class="command">github</span>         <a href="' + github + '" target="_blank">github.com' + "</a>",
  '<span class="command">linkedin</span>       <a href="' + linkedin + '" target="_blank">linkedin.com' + "</a>",
  "<br>"
];

projects = [
  "<br>",
  '<a class="command" id="portfolio" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); loopLines(portfolio, \'\', 80)">Portfolio Website</a>           This website which I coded using HTML/CSS and JavaScript',
  '<a class="command" id="ai" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); loopLines(ai, \'\', 80)">AI Text-Transcriber</a>         First machine learning project using python, tensorflow, and google APIs',
  '<a class="command" id="rpg" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); loopLines(rpg, \'\', 80)">Medieval RPG</a>                Submission for my school club\'s GameJam coded in Java',
  '<a class="command" id="av" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); loopLines(av, \'\', 80)">Ten80 AV Car</a>                Wrote scripts in python for my school\'s Ten80 AV Car',
  '<a class="command" id="benchmark" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); loopLines(benchmark, \'\', 80)">Human Benchmark Test</a>        Submission for my school club\'s Hack-A-Thon coded in Java',
  '<a class="command" id="webdev" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); loopLines(webdev, \'\', 80)">Web Dev Internship</a>          Wrote a portion of AICamp.org\'s website in HTML/CSS and JavaScript(React)',
  '<a class="command" id="minesweeper" onclick="addLine(\'X:\\Users\\Guest> \' + command.innerHTML, \'no-animation\', 0); loopLines(minesweeper, \'\', 80)">MineSweeper</a>                 Project for my AP Computer Science A class coded in Java',
  '<a class="command"></a>',
  '<a class="command"></a>',
  "<br>",
  '<span class="command">Commands:</span>                   portfolio, ai, rpg, av, benchmark, webdev, minesweeper',
  "<br>"
];

help = [
  "<br>",
  '<span class="command">whois</span>          Who Is Nicholas Henry?',
  '<span class="command">skills</span>         My Capabilities',
  '<span class="command">projects</span>       View My Projects',
  '<span class="command">socials</span>        Display Social Links',
  '<span class="command">email</span>          Contact Me',
  '<span class="command">clear</span>          Clear The Terminal',
  '<span class="command">history</span>        View Command History',
  '<span class="command">banner</span>         Display The Header Again',
  "<br>",
];

portfolio = [
  "<br>",
  '',
  "<br>"
];

ai = [
  "<br>",
  '',
  "<br>"
];

rpg = [
  "<br>",
  '',
  "<br>"
];

av = [
  "<br>",
  '',
  "<br>"
];

benchmark = [
  "<br>",
  '',
  "<br>"
];

webdev = [
  "<br>",
  '',
  "<br>"
];

minesweeper = [
  "<br>",
  '',
  "<br>"
];

banner = [
  '<span class="index">NHenry.dev [Version 1.0.1]<span>',
  ,'<span class="index">Nicholas Henry (NH) Not A Corporation. All rights reserved.</span>',
  ,"                              =",
  ,"                              ==",
  ,"                             ===",
  ,"                            ===",
  ,"                          ====",
  ,"                        =====    ==",
  ,"                      ======  ===",
  ,"                    =====  ====",
  ,"                  =====   ===",
  ,"                 =====   ====",
  ,"                 ====    =====",
  ,"                  ====    =====",
  ,"                    ===    ====",
  ,"                      ==   ====       ***",
  ,"            ****#         ===           ***#",
  ,"           **************************    ***",
  ,"               ******************       ***#",
  ,"              ***                      ***",
  ,"              ******************** ****#",
  ,"                   **********",
  ,"                ****                                " + '<span class="color2">__                                     _            ',
  ,"        ******  ****************                 " + '<span class="color2">/\\ \\ \\/\\  /\\___ _ __  _ __ _   _       __| | _____   __</span>',
  ,"      *****          #***#*           ***       " + '<span class="color2">/  \\/ / /_/ / _ \\ \'_ \\| \'__| | | |     / _` |/ _ \\ \\ / /',
  ,"       *************###***************** **    " + '<span class="color2">/ /\\  / __  /  __/ | | | |  | |_| |  _ | (_| |  __/\\ V / ',
  ,"            *********************** #*****     " + '<span class="color2">\\_\\ \\/\\/ /_/ \\___|_| |_|_|   \\__, | (_) \\__,_|\\___| \\_/  ',
  ,"             ************************                                       " + '<span class="color2">|___/                   ',
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  "<span class=\"color2\">For a list of available commands, type</span> <span class=\"command\">'help'</span><span class=\"color2\">.</span>",
];

webtitle = [
           '<span class="color2">__                                     _            ',
   '<span class="color2">/\\ \\ \\/\\  /\\___ _ __  _ __ _   _       __| | _____   __</span>',
  '<span class="color2">/  \\/ / /_/ / _ \\ \'_ \\| \'__| | | |     / _` |/ _ \\ \\ / /',
     '<span class="color2">/ /\\  / __  /  __/ | | | |  | |_| |  _ | (_| |  __/\\ V / ',
'<span class="color2">\\_\\ \\/\\/ /_/ \\___|_| |_|_|   \\__, | (_) \\__,_|\\___| \\_/  ',
                                    '<span class="color2">|___/                   ',
]