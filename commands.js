var linkedin = "https://www.linkedin.com/in/nicholas-henry-57b325283/";
var github = "https://github.com/fastfruits";
var email = 'mailto:nichoias.henry1006@gmail.com';

whois = [
  "<br>",
  "Hi I'm Nicholas Henry",
  "<br>",
  " I am currently a rising senior high school student with a hobby of programming which I hope to pursue in college at a higher level!",
  " I started programming after picking up AP Computer Science A at my school in which I learned a lot about Java and OOP and had a",
  " great teacher who instilled good programming practices and skills through creativity driven projects.",
  "<br>",
  " After passing my class with flying colors I continued to program and strived to learn new skills which I did through AICamp.org",
  " In their summer camp I programmed and trained an AI model with python, tensorflow, and Google's API which taught me a lot.",
  "<br>",
  " After the camp they called me back after seeing my work and asked me to intern for them which I did and this taught me a lot of",
  " web development like HTML/CSS, Javascript, and libraries like React and Vite to connect frontend to backend.",
  " After the internship I started learning C# and have won my school coding club's Hack-A-Thon and GameJam and made this website.",
  "<br>",
  "Thanks for visiting my site!",
  "                           -Nicholas Henry",
  "<br>"
];

skills = [
  "<br>",
  '<span class="command">Programming Languages</span>',
  "<br>",
  "   -Java: ",
  "         *Learned through my AP Computer Science class and the projects assigned by my teacher",
  "         which were very beneficial as they were structured in a way that allowed creativity and freedom.",
  "         *Experienced in developing computer applications, games, and other types of programs.",
  "         *Have a lot of work with Java GUI like swing and JOP libraries.",
  "   -Python: ",
  "         *Learned through self teaching, videos, and projects.",
  "         *Skilled in machine learning, web scraping, automation, and working with robotics and microcontrollers.",
  "         *Mainly used for my school club's Ten80 AV car which used a microcontroller and sensors like an odometer, IR, and ultrasonic.",
  "   -C#: ",
  "         *Learned through the freecodecamp.org C# certification course and self-driven projects.",
  "         *This is the language I'm least expierenced in but have created applications and small games in the Unity Engine.",
  "<br>",
  '<span class="command">Web Development</span>',
  "<br>",
  "   -HTML & CSS: ",
  "         *Learned through self teaching, videos and creating websites like this and my internship for AICamp.org.",
  "         *Strong understanding of web design principles and responsive design techniques.",
  "   -JavaScript: ",
  "         *Learned through self teaching, videos and creating websites like this and my internship for AICamp.org.",
  "         *Adept at creating dynamic and interactive web applications using vanilla JavaScript.",
  "         *Able to also work with frameworks and libraries like React and Vite",
  "<br>",
  '<span class="command">Certifications</span>',
  "   -CAD and 3D Printing",
  "         *Learned these skills in my school's engineering classes and employed these skills throughout on projects like the AV car.",
  "         *Have certifications for programs like Fusion360, OnShape, and MakerBot 3D printers.",
  "   -Engineering",
  "         *Learned engineering skills and practices also through my engineering classes at school and through projects.",
  "         *Certified by the RECF(Robotics Education & Competition Foundation) for Robotics and Pre-Engineering.",
  "<br>",
  '<span class="command">Future Skills To Learn</span>',
  "<br>",
  "   -More work with machine learning and Tensorflow",
  "   -Use of APIs",
  "   -C++",
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
  '<span class="command">Portfolio Website</span>',
  '<a href="https://github.com/fastfruits/Website" target="_blank">Repository</a>',
  "<br>"
];

ai = [
  "<br>",
  '<span class="command">AI Text-Transcriber</span>',
  '<a href="https://github.com/fastfruits/Website" target="_blank">Repository</a>',
  "<br>"
];

rpg = [
  "<br>",
  '<span class="command">Medieval RPG</span>',
  '<a href="https://github.com/fastfruits/MedievalRPG1 target="_blank"">Repository</a>',
  "<br>"
];

av = [
  "<br>",
  '<span class="command">Ten80 AV Car</span>',
  "<br>"
];

benchmark = [
  "<br>",
  '<span class="command">Human Benchmark Test</span>',
  "<br>"
];

webdev = [
  "<br>",
  '<span class="command">Web Dev Internship</span>',
  "<br>"
];

minesweeper = [
  "<br>",
  '<span class="command">Minesweeper</span>',
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