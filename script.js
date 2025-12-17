const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const themeToggle = document.getElementById('themeToggle');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const projectLinks = document.querySelectorAll('.project-link');
const projectItems = document.querySelectorAll('.project-item');

sidebarToggle.addEventListener('click', () => {
        sidebarToggle.classList.toggle('active');
    sidebar.classList.toggle('open');
});

document.addEventListener('click', (e) => {

    if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
sidebar.classList.remove('open');
    }
});

const themes = ['default', 'dark', 'blue', 'green', 'red'];
let currentTheme = 0;

themeToggle.addEventListener('click', () => {
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.className = `theme-${themes[currentTheme]}`;
    
    const nextTheme = themes[(currentTheme + 1) % themes.length];
    themeToggle.textContent = `${nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1)}`;
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        sidebarToggle.classList.remove('active');
e.preventDefault();
const pageId = link.getAttribute('data-page') + '-page';

pages.forEach(page => {
    page.classList.remove('active');
});

document.getElementById(pageId).classList.add('active');

sidebar.classList.remove('open');
    });
});

projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
e.preventDefault();
const projectId = link.getAttribute('data-project') + '-project';

projectLinks.forEach(l => l.classList.remove('active'));
link.classList.add('active');

projectItems.forEach(item => {
    item.classList.remove('active');
});

document.getElementById(projectId).classList.add('active');
    });
});

if (projectLinks.length > 0) {
    projectLinks[0].classList.add('active');
    projectItems[0].classList.add('active');
};
//  no network loading
{
    const loader = document.getElementById('network-loader');

  if (!navigator.onLine) {
    loader.style.display = 'flex';
  }

  window.addEventListener('offline', () => {
    loader.style.display = 'flex';
  });

  window.addEventListener('online', () => {
    loader.style.display = 'none';
  });
};
 // click effect sparking animation
    {
      let clickEffect= document.body;
      clickEffect.addEventListener('click', function(event){
        let spark = document.createElement('spark');
        spark.classList.add('spark');
        spark.style.left = (event.pageX) + 'px';
        spark.style.top = (event.pageY) + 'px';

        spark.style.setProperty('--x', getRandomPosition());
        spark.style.setProperty('--y', getRandomPosition());

        function getRandomPosition(){
          return`${Math.random() * 400- 200}px`;
        }
        clickEffect.appendChild(spark);
    
        spark.style.filter = 'hue-rotate(' + Math.random() *720 + 'deg)';
        for(var i = 0; i <=7; i++){
          let span = document.createElement('span');
          span.style.transform = 'rotate('+(i * 45) +'deg)';
          spark.appendChild(span);
        }
    
        setTimeout(function(){
          spark.remove();
        }, 1000);
      });
     }
  
{
  const phrases = ["Sakhawat Hussain.", "Web Developer.", "J5 & Canvas Developer.", "Designer."];
        const el = document.getElementById("typer");
        let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        async function typewrite() {
            while (true) {
                for (const phrase of phrases) {
                    for (let i = 0; i <= phrase.length; i++) {
                        el.textContent = phrase.slice(0, i);
                        await sleep(100 + Math.random() * 50);
                    }
                    if (Math.random() > 0.2) {
                        await sleep(300);
                        for (let i = phrase.length; i >= 0; i--) {
                            el.textContent = phrase.slice(0, i);
                            await sleep(50);
                        }
                    } else {
                        await sleep(200);
                        el.textContent += "|";
                        await sleep(200);
                        el.textContent = el.textContent.slice(0, -1);
                    }
                }
            }
        }
        typewrite();
    }
// glitch name animation
{
    const glitchText = document.getElementById('glitch-name');
        const originalText = glitchText.textContent;

        glitchText.addEventListener('mouseenter', () => {
            let iterations = 0;
            const glitchInterval = setInterval(() => {
                glitchText.textContent = originalText.split('')
                    .map((char, index) => {
                        if (index < iterations) return originalText[index];
                        return String.fromCharCode(Math.random() * 128);
                    })
                    .join('');
                
                if (iterations >= originalText.length) clearInterval(glitchInterval);
                iterations += 1 / 3;
            }, 100);
        });

        glitchText.addEventListener('mouseleave', () => {
            glitchText.textContent = originalText;
        });
}
 //initial links function
      {
        const workContainer = document.getElementById('work-container');
        const workLinks = document.querySelectorAll('.work-links');
        const totalLinks = workLinks.length;
        const workPage = document.getElementById('workPage');

        workLinks.forEach((link, index) => {
            const angle = (index * (360 / totalLinks)) * (Math.PI / 180);
            const x = 180 + 120 * Math.cos(angle) - 40; 
            const y = 180 + 120 * Math.sin(angle) - 40;

            link.style.left = `${x}px`;
            link.style.top = `${y}px`;

            link.style.transform = `rotate(${index * -(360 / totalLinks)}deg)`;
        });

        workLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                const index = parseInt(link.getAttribute('data-index'));
                const angle = -index * (360 / totalLinks) + 270;

                workContainer.style.transform = `rotate(${angle}deg)`;

                workLinks.forEach((lnk, i) => {
                    lnk.style.transform = `rotate(${(i - index) * -45 }deg)`;
                });
                setTimeout(() => {
                    
                    workPage.style.display = 'block';
                    window.location.hash = link.getAttribute('href');
                }, 1000);
            });
        });
    }
   //raining page
{

new p5((p) => {

    const rainColors = [
        '#00ff00', 
        '#ff0000', 
        '#ff7f00', 
        '#ffff00', 
        '#0000ff', 
        '#4b0082', 
        '#9400d3'
    ];

    let drops = [];
    let ripples = [];
    let particles = [];
    let woff = 0;

    let boxRain;
    let canvas;

    p.setup = function () {
        boxRain = document.getElementById("raining");

        canvas = p.createCanvas(
            boxRain.offsetWidth,
            boxRain.offsetHeight
        );
        canvas.parent("raining");

        for (let i = 0; i < 20; i++) {
            drops.push(new Drop());
        }

        p.noiseSeed(p.random(100));

        setInterval(() => {
            if (p.width !== boxRain.offsetWidth 
             || p.height !== boxRain.offsetHeight) {
                p.resizeCanvas(
                    boxRain.offsetWidth,
                    boxRain.offsetHeight
                );
            }
        }, 300);
    };

    p.draw = function () {
        p.background(0, 0, 0, 30);
        p.push();
        p.drawingContext.shadowBlur = 30;

        woff += 0.01;
        let W = p.map(p.noise(woff), 0, 1, -1, 1);

        for (let i = drops.length - 1; i >= 0; i--) {
            drops[i].fall(W);
            drops[i].show();

            if (drops[i].y >= p.height - 50) {
                ripples.push(new Ripple(drops[i].x, drops[i].y, drops[i].color));

                for (let j = 0; j < 3; j++) {
                    particles.push(new Particle(drops[i].x, drops[i].y, drops[i].color));
                }

                drops[i].reset();
            }
        }

        for (let i = ripples.length - 1; i >= 0; i--) {
            ripples[i].update();
            ripples[i].show();
            if (ripples[i].alpha <= 0) {
                ripples.splice(i, 1);
            }
        }

        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].show();
            if (particles[i].alpha <= 0) {
                particles.splice(i, 1);
            }
        }

        p.pop();
    };

    class Drop {
        constructor() {
            this.reset();
            this.speed = 0;
            this.g = 0.4;
        }

        reset() {
            this.x = p.random(p.width);
            this.y = p.random(-200, -10);
            this.len = p.random(5, 25);
            this.w = p.map(this.len, 10, 25, 1, 2);
            this.speed = p.map(this.len, 2, 25, 4, 10);
            this.color = p.random(rainColors);
            this.woff = p.random(1000);
        }

        fall(wind) {
            this.speed += this.g;
            this.y += this.speed;

            let wx = p.map(p.noise(this.woff), 0, 1, -0.5, 0.5);
            this.x += (wind * 0.5) + wx;
            this.woff += 0.05;

            if (this.x < 0) this.x = p.width;
            if (this.x > p.width) this.x = 0;
        }

        show() {
            p.stroke(this.color);
            p.strokeWeight(this.w);
            p.drawingContext.shadowColor = this.color;
            p.line(this.x, this.y, this.x, this.y - this.len);
        }
    }

    class Ripple {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.radius = 1;
            this.alpha = 255;
            this.strokeW = 5;
            this.radius2 = 1;
        }

        update() {
            this.radius += 2.5;
            this.radius2 += 4;
            this.alpha -= 10;
            this.strokeW *= 0.95;
        }

        show() {
            let c = p.color(this.color);
            c.setAlpha(this.alpha);

            p.noFill();
            p.stroke(c);
            p.strokeWeight(this.strokeW);
            p.drawingContext.shadowColor = this.color;

            p.ellipse(
                this.x, 
                this.y, 
                this.radius * 2, 
                this.radius * 0.5
            );

            c.setAlpha(this.alpha * 0.6);
            p.stroke(c);
            p.strokeWeight(this.strokeW * 0.3);
            p.ellipse(
                this.x, 
                this.y, 
                this.radius2 * 2, 
                this.radius2 * 0.5
            );
        }
    }

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.alpha = 255;
            this.vx = p.random(-1.5, 1.5);
            this.speed = p.random(-5, -2);
            this.size = p.random(2, 4);
        }

        update() {
            this.x += this.vx;
            this.y += this.speed;
            this.speed += 0.2;
            this.alpha -= 15;
        }

        show() {
            let c = p.color(this.color);
            c.setAlpha(this.alpha);
            p.fill(c);
            p.noStroke();
            p.drawingContext.shadowColor = this.color;
            p.ellipse(this.x, this.y, this.size);
        }
    }

}, "raining");

}
  // blood bubble spread animation
    {
      let bubbleCreates = document.querySelector('.bubbleCreates');
  bubbleCreates.addEventListener('click', function(){
    for(let i = 0; i < 50; i++){
      let particles = document.createElement('div');
      particles.classList.add('sparkParticles');

      let randomX = (Math.random() - 0.5) * window.innerWidth;
      let randomY = (Math.random() - 0.5) * window.innerHeight;

      particles.style.setProperty('--u', randomX + 'px');
      particles.style.setProperty('--l', randomY + 'px');
      particles.style.backgroundColor = `cyan`;

      let randomSize = Math.random() * 40 + 10;
      particles.style.width = randomSize + 'px';
      particles.style.height = randomSize + 'px';

      let duration = Math.random() * 3 + 2;
      particles.style.animation = `boomb ${duration}s ease forwards`

      document.querySelector('.bubbleCreates').appendChild(particles);

      setTimeout(function(){
        particles.remove();
      },5000);
    }
  })
    }
 //water bubbles
  {
      let bubbleDiv = document.querySelector('#WB');
      document.addEventListener('mousemove',(event) =>{
        
    let bubble = document.createElement('bubble');
        bubble.style.left= (event.pageX) + 'px';
        bubble.style.top = (event.pageY) + 'px';
        bubble.style.scale =`${Math.random() *2 +1}`;
  
        bubble.style.boxShadow = `inset 0 0 7.5px rgb(
          ${Math.floor(Math.random() * 225)},
         ${Math.floor(Math.random() * 225)},
          ${Math.floor(Math.random() * 225)})`;
  
        bubble.style.setProperty('--x',getRandomPosition());
        bubble.style.setProperty('--y',getRandomPosition());
  
        function getRandomPosition(){
          return `${Math.random() * 400 - 200}px`;
        }
        bubbleDiv.appendChild(bubble);
  
        setTimeout(() =>{
          bubbleDiv.removeChild(bubble);
        },2010);
      });
    }
// Typing Container
{
  document.addEventListener('DOMContentLoaded', function() {
const typingText = document.getElementById('typing-text');
 const resetBtn = document.getElementById('reset-btn');
 const newTextBtn = document.getElementById('new-text-btn');
 const progressSpan = document.getElementById('progress');
 const typedSpan = document.getElementById('typed');
 const totalSpan = document.getElementById('total');
 const errorsSpan = document.getElementById('errors');
 const timerSpan = document.getElementById('timer');
 const accuracySpan = document.getElementById('accuracy');
 const resultsDiv = document.getElementById('results');
 const resultTime = document.getElementById('result-time');
 const resultAccuracy = document.getElementById('result-accuracy');
 const resultLps = document.getElementById('result-lps');
 const resultWpm = document.getElementById('result-wpm');
 const levelSelect = document.getElementById('level');

 const createSoundPool = (url, poolSize = 5) => {
const pool = [];
for (let i = 0; i < poolSize; i++) {
 const audio = new Audio(url);
 audio.preload = 'auto';
 pool.push(audio);
}
let current = 0;

return {
 play: function() {
pool[current].currentTime = 0;
pool[current].play();
current = (current + 1) % poolSize;
 }
};
 };

 const buttonSound = createSoundPool('click01.ogg');
 const keySound = createSoundPool('click03.ogg');
 const errorSound = createSoundPool('click02.ogg');

 let currentIndex = 0;
 let errorCount = 0;
 let textContent = '';
 let startTime = null;
 let timerInterval = null;
 let totalTime = 0;
 let isCompleted = false;
 let currentLevel = levelSelect ? levelSelect.value : 'normal';

const easyTexts = [
"science shows how tiny things works and helps us learn simple facts about light, air and life around us. it makes us thinks in clear ways.",
"space is wide and dark, yet full of stars. it invites us to dream and explore new worlds beyond our little home on earth."
];

const normalTexts = [
"Learning new ideas grows our mind and builds skill. When we read or test things, we see how the world works and how people create tools that shape daily life.",
"Medicine helps us stay safe. With clean habits and smart care, we avoid harm and recover fast. Good health lets us study, work, and enjoy the world fully."
];

const hardTexts = [
"Human behaviour changes with time, stress, and learning. When we understand our thoughts, we act with more care and guide others with calm energy. This slow growth builds trust and shapes strong paths in life.",
"Exploring new ideas in science or space opens fresh view of life. Each small step teachs us more about nature, motion, energy, and limits we try to cross. This steady search brings progress and inspires brave minds.",
"always try to move forward even when life feels heavy because every small step matters and slowly creates the biggest journey. kindness is free yet it has the power to heal and inspire people around us. courage is not about living without fear it is about facing fear and still taking action. knowledge is a tool but wisdom is how we use it in the right way. dreams will always stay far away unless we wake up and chase them with patience and effort."
];

function getTextsForLevel(level) {
    if (level === 'easy') return easyTexts;
    if (level === 'hard') return hardTexts;
    return normalTexts;
}

 function initText() {
const texts = getTextsForLevel(currentLevel);
if (!texts || texts.length === 0) {
 textContent = '';
 typingText.innerHTML = '';
 updateStats();
 return;
}
const randomIndex = Math.floor(Math.random() * texts.length);
textContent = texts[randomIndex];
typingText.innerHTML = '';
for (let i = 0; i < textContent.length; i++) {
 const charSpan = document.createElement('span');
 charSpan.textContent = textContent[i];
 charSpan.style.opacity = '0.3';
 typingText.appendChild(charSpan);
}
if (typingText.firstChild) {
 typingText.firstChild.classList.add('current-char');
}

currentIndex = 0;
errorCount = 0;
totalTime = 0;
isCompleted = false;
clearInterval(timerInterval);
startTime = null;
updateStats();
resultsDiv.style.display = 'none';
 }

 function resetCurrentText() {
    if (!textContent || textContent.length === 0) {
        initText();
        return;
    }
     typingText.innerHTML = '';
  for (let i = 0; i < textContent.length; i++) {
      const charSpan = document.createElement('span');
      charSpan.textContent = textContent[i];
      charSpan.style.opacity = '0.3';
      typingText.appendChild(charSpan);
  }
  if (typingText.firstChild) {
      typingText.firstChild.classList.add('current-char');
  }
   currentIndex = 0;
   errorCount = 0;
   totalTime = 0;
   isCompleted = false;
   clearInterval(timerInterval);
   startTime = null;
   timerSpan.textContent = `0s`;
   updateStats();
   resultsDiv.style.display = 'none';
}
 function startTimer() {
if (!startTime) {
 startTime = new Date();
 timerInterval = setInterval(updateTimer, 1000);
}
 }

 function updateTimer() {
if (startTime) {
 const currentTime = new Date();
 totalTime = Math.floor((currentTime - startTime) / 1000);
 timerSpan.textContent = `${totalTime}s`;
}
 }

 function stopTimer() {
clearInterval(timerInterval);
 }

 function calculateAccuracy() {
if (currentIndex === 0) return 100;
return Math.max(0, Math.floor((1 - (errorCount / currentIndex)) * 100));
 }

 function calculateLPS() {
if (totalTime === 0) return 0;
return (currentIndex / totalTime).toFixed(2);
 }

 function calculateWPM() {
if (totalTime === 0) return 0;
const words = currentIndex / 5;
const minutes = totalTime / 60;
return (words / minutes).toFixed(2);
 }

 function updateStats() {
const length = textContent.length || 0;
const progress = length === 0 ? 0 : Math.floor((currentIndex / length) * 100);
progressSpan.textContent = `${progress}%`;
typedSpan.textContent = currentIndex;
totalSpan.textContent = length;
errorsSpan.textContent = errorCount;
accuracySpan.textContent = `${calculateAccuracy()}%`;
 }

 function showResults() {
resultTime.textContent = totalTime;
resultAccuracy.textContent = `${calculateAccuracy()}%`;
resultLps.textContent = calculateLPS();
resultWpm.textContent = calculateWPM();
resultsDiv.style.display = 'block';
 }

resetBtn.addEventListener('click', function() {
buttonSound.play();
resetCurrentText();
 });

 newTextBtn.addEventListener('click', function() {
buttonSound.play();
initText();
 });

 if (levelSelect) {
     levelSelect.addEventListener('change', function() {
         buttonSound.play();
         currentLevel = levelSelect.value;
         initText();
     });
 }

 document.addEventListener('keydown', function(e) {
if (e.key.length > 1 && e.key !== ' ') return;

if (e.key.length === 1 || e.key === ' ') {
 e.preventDefault();
 keySound.play();
}

if (currentIndex >= textContent.length) return;

if (!startTime) {
 startTimer();
}

const currentChar = textContent[currentIndex];
const currentSpan = typingText.children[currentIndex];

if (e.key === currentChar) {
 currentSpan.style.opacity = '1';
 currentSpan.classList.remove('current-char');
 
 if (currentSpan.classList.contains('incorrect')) {
currentSpan.classList.remove('incorrect');
currentSpan.classList.add('corrected');
 } else {
currentSpan.classList.add('correct');
 }

 currentIndex++;

 if (currentIndex < textContent.length) {
typingText.children[currentIndex].classList.add('current-char');
 } else {
stopTimer();
isCompleted = true;
showResults();
 }
} else {
 if (currentSpan.classList.contains('correct')) {
currentSpan.classList.remove('correct');
 }
 currentSpan.classList.add('incorrect');
 errorCount++;
 errorSound.play();
}

updateStats();
 });

 initText();
});
}
//   particles network 
{ 
window.onload = function() {
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let width, height;
const particles = [];
const particleCount = 80;
const lineDistance = 150;
const particleSpeed = 1;
let mouse = {
x: null,
y: null,
radius: 150
};
const attractionSpeed = 0.03;
function resizeCanvas() {
width = window.innerWidth;
height = window.innerHeight;
canvas.width = width;
canvas.height = height;
}
class Particle {
constructor() {
this.x = Math.random() * width;
this.y = Math.random() * height;
this.baseX = this.x; 
this.baseY = this.y; 
this.vx = (Math.random() - 0.5) * particleSpeed; // Apni random movement
this.vy = (Math.random() - 0.5) * particleSpeed;
this.radius = Math.random() * 2 + 1.5;
this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

update() {
this.x += this.vx;
this.y += this.vy;

if (this.x < 0 || this.x > width) this.vx *= -1;
if (this.y < 0 || this.y > height) this.vy *= -1;

let dx = mouse.x - this.x;
let dy = mouse.y - this.y;
let distance = Math.sqrt(dx * dx + dy * dy);
let forceDirectionX = dx / distance;
let forceDirectionY = dy / distance;

if (distance < mouse.radius) {
this.x += forceDirectionX * (mouse.radius - distance) * attractionSpeed;
this.y += forceDirectionY * (mouse.radius - distance) * attractionSpeed;
}
}

draw() {
ctx.beginPath();
ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
ctx.fillStyle = this.color;
ctx.fill();
}
}

function init() {
resizeCanvas();
particles.length = 0; 
for (let i = 0; i < particleCount; i++) {
particles.push(new Particle());
}
}

function animate() {
requestAnimationFrame(animate);
ctx.clearRect(0, 0, width, height);

for (let i = 0; i < particles.length; i++) {
particles[i].update();
particles[i].draw();

for (let j = i; j < particles.length; j++) {
const dx = particles[i].x - particles[j].x;
const dy = particles[i].y - particles[j].y;
const distance = Math.sqrt(dx * dx + dy * dy);

if (distance < lineDistance) {
ctx.beginPath();
ctx.moveTo(particles[i].x, particles[i].y);
ctx.lineTo(particles[j].x, particles[j].y);
ctx.strokeStyle = `rgba(255, 255, 0, ${1 - (distance / lineDistance)})`;
ctx.stroke();
}
}
}
}

window.addEventListener('mousemove', (event) => {
mouse.x = event.x;
mouse.y = event.y;
});
window.addEventListener('mouseout', () => {
mouse.x = undefined;
mouse.y = undefined;
});

window.addEventListener('resize', init);
init();
animate();
};

}
  // hacking 01
  {
    const terminalText = document.getElementById('terminal-text');
const initializing = document.getElementById('initializing');

const messages = [
  `
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░█
█░░▄▀▀▄▄▄▄▄▄▄▄▀▀▄░░█
█░░█▒▒▀░░░░░░▀▒▒█░░█
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
`,
  "Initializing Your system...",
  "You have been HACKED!!!"
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeText() {
  const currentMessage = messages[messageIndex];

  if (isDeleting) {
    terminalText.textContent = currentMessage.substring(0, charIndex--);
  } else {
    terminalText.textContent = currentMessage.substring(0, charIndex++);
  }

  if (Math.random() < 0.1) {
    terminalText.classList.add('glitch');
    setTimeout(() => terminalText.classList.remove('glitch'), 150);
  }

  let speed = isDeleting ? 25 : 50;

  if (!isDeleting && charIndex === currentMessage.length) {
    if (messageIndex === messages.length - 1) {
      return; // Stop animation
    } else {
      isDeleting = true;
      speed = 1000;
    }
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    messageIndex++;
    speed = 500;
  }

  typingTimeout = setTimeout(typeText, speed);
}

// Start animation initially
setTimeout(typeText, 1000);

initializing.addEventListener('click', () => {
  clearTimeout(typingTimeout);
  terminalText.textContent = '';
  messageIndex = 0;
  charIndex = 0;
  isDeleting = false;
  setTimeout(typeText, 500);
});
  
  }
  // Spark animation
{
  const sparkCanvas = document.getElementById("spark-canvas");
const sparkCtx = sparkCanvas.getContext("2d");

function resizeAll() {
  sparkCanvas.width = window.innerWidth;
  sparkCanvas.height = window.innerHeight;
}
resizeAll();
window.addEventListener("resize", resizeAll);

const stars = [];
for (let i = 0; i < 500; i++) {
  stars.push({
    x: Math.random() * sparkCanvas.width,
    y: Math.random() * sparkCanvas.height,
    r: Math.random() * 2 + 0.5,
    speed: Math.random() * 0.6 + 0.2,
    color: `hsl(${Math.random() * 360}, 100%, 80%)`
  });
}

function animateStars() {
  sparkCtx.fillStyle = "#0003";
  sparkCtx.fillRect(0, 0, sparkCanvas.width, sparkCanvas.height);
  stars.forEach(star => {
    sparkCtx.beginPath();
    sparkCtx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    sparkCtx.fillStyle = star.color;
    sparkCtx.fill();
    star.x -= star.speed;
    if (star.x < 0) star.x = sparkCanvas.width;
  });
  requestAnimationFrame(animateStars);
}
animateStars();
}
// spark animations
{
const colors = [
    '#FF6347',
    '#FFD700',
    '#3CB371',
    '#1E90FF',
    '#9400D3',
    '#FF1493' 
  ];
  const clickSpark = document.getElementById('clickSpark');

clickSpark.addEventListener('click', e => {
  const { clientX: x, clientY: y } = e;
  createExplosion(x, y);
});

function createExplosion(x, y) {
  const mainParticles = [];
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    const color = colors[i % colors.length];
    p.className = 'particle01';
    p.style.background = color;
    p.style.boxShadow = '0 0 50px' + color;
    p.style.left = `${x - 5}px`;
    p.style.top = `${y - 5}px`;
    clickSpark.appendChild(p);
    mainParticles.push(p);

    const angle = (i / 12) * Math.PI * 2;
    const tx = x + Math.cos(angle) * 100;
    const ty = y + Math.sin(angle) * 100;

    p.animate([
      { transform: 'translate(0,0)', opacity: 1 },
      { transform: `translate(${tx - x}px, ${ty - y}px)`, opacity: 0.7}
    ], { duration: 1200, easing: 'ease-out', fill: 'forwards' });

    setTimeout(() => {
      createSubParticles(tx, ty, color);
      setTimeout(() => p.remove(), 80);
    }, 900);
  }
}

function createSubParticles(x, y, parentColor) {
  for (let j = 0; j < 10; j++) {
    const sp = document.createElement('div');
    sp.className = 'sub-particle01';
    sp.style.background = parentColor;
    sp.style.boxShadow = '0 0 40px' + parentColor;
    sp.style.left = `${x - 2.5}px`;
    sp.style.top = `${y - 2.5}px`;
    clickSpark.appendChild(sp);

    const angle = (j / 10) * Math.PI * 2;
    const tx = x + Math.cos(angle) * 40;
    const ty = y + Math.sin(angle) * 40;

    sp.animate([
      { transform: 'translate(0,0)', opacity: 1 },
      { transform: `translate(${tx - x}px, ${ty - y}px)`, opacity: 0, rotate: 90 + 'deg'  }
    ], { duration: 2000, easing: 'ease-out', fill: 'forwards' });

    setTimeout(() => sp.remove(), 2000);
  }
}
}
// number puzzle game
{
    document.addEventListener("DOMContentLoaded", () => {
      const gridContainer = document.getElementById("numberContainer");
      const difficultySelector = document.getElementById("levels");
  
      function createGrid(rows, cols){
        gridContainer.innerHTML = '';
        gridContainer.style.gridTemplateRows = `repeat(${rows},1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${cols},1fr)`;
  
        for (let i= 0; i < rows * cols; i++){
          const tiles = document.createElement("tile");
          tiles.classList.add('tile');
          gridContainer.appendChild(tiles);
        }
      }
  
      function updateGrid(){
        const difficulty = difficultySelector.value;
        switch (difficulty) {
          case "easy":
            createGrid(3,3);
            break;
          case "normal":
            createGrid(4,4);
            break;
          case "hard":
            createGrid(5,5);
            break;
          case "extreme":
            createGrid(6,6);
            break;
          case "extremeHard":
            createGrid(7,7);
            break;
            default:
              createGrid(4,4);
        }
      }
      difficultySelector.addEventListener("change", updateGrid);
      
      updateGrid();
    });
  }
  // next game function add
  {
  document.addEventListener('DOMContentLoaded', function() {
    let gridSize = 4;
    let totalTiles = gridSize * gridSize;
    let gridContainer = document.getElementById('numberContainer');
    let resetBtn = document.getElementById('numberReset');
    let timerDisplay = document.getElementById('numberTimer');
    let difficultySelector = document.getElementById('levels');
  
    let tiles = [''];
    let timerInterval;
    let timerSeconds = 0;
    let movesCount = 0;
    let gameStarted = false;
  
    const difficulties = {
      easy: { gridSize: 3, numberRange: 7 },
      normal: { gridSize: 4, numberRange: 15 },
      hard: { gridSize: 5, numberRange: 24 },
      extreme:{ gridSize: 6, numberRange: 35 },
      extremeHard:{ gridSize: 7, numberRange: 48 }
    };
    
    function initializeGame(difficulty) {
      gridSize = difficulties[difficulty].gridSize;
      totalTiles = gridSize * gridSize;
      tiles = Array.from(Array(totalTiles - 1).keys()).map(num => num + 1); // Numbers 1 to (totalTiles - 1)
      tiles.push(null);
      gridContainer.innerHTML = '';
      createGrid();
      resetTimer();
      resetMoves();
      updateTimerDisplay();
      gameStarted = false;
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    function createGrid() {
      shuffleArray(tiles);
  
      for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement('tile');
        tile.classList.add('tile');
        tile.style.filter = 'hue-rotate(' + Math.random() * 3600 + 'deg)';
        tile.textContent = tiles[i] !== null ? tiles[i] : ''; 
        tile.setAttribute('data-index', i);
        gridContainer.appendChild(tile);
  
        tile.addEventListener('click', function() {
          if (!gameStarted) {
            startTimer();
            gameStarted = true;
          }
          moveTile(parseInt(tile.getAttribute('data-index')));
        });
      }
    }
  
    function moveTile(index) {
      const emptyIndex = tiles.indexOf(null);
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;
  
      const emptyRow = Math.floor(emptyIndex / gridSize);
      const emptyCol = emptyIndex % gridSize;
  
      if ((Math.abs(row - emptyRow) === 1 && col === emptyCol) || 
          (Math.abs(col - emptyCol) === 1 && row === emptyRow)) {
        
        [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
        movesCount++;
        updateGrid();
        checkWin();
      }
    }
  
    function updateGrid() {
      gridContainer.innerHTML = '';
  
      for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement('div');
        // tile.style.filter = 'hue-rotate(' + Math.random() * 3600 + 'deg)';
        tile.classList.add('tile');
        tile.textContent = tiles[i] !== null ? tiles[i] : ''; 
        tile.setAttribute('data-index', i);
        gridContainer.appendChild(tile);
  
        tile.addEventListener('click', function() {
          moveTile(parseInt(tile.getAttribute('data-index')));
        });
      }
    }
  
    function checkWin() {
      const winTiles = Array.from(Array(totalTiles - 1).keys()).map(num => num + 1);
      winTiles.push(null);
  
      if (tiles.toString() === winTiles.toString()) {
        stopTimer();
        alert(`Great! You have solved puzzle in ${formatTime(timerSeconds)}. Moves: ${movesCount}`);
        resetGame();
      }
    }

    function startTimer() {
      timerInterval = setInterval(function() {
        timerSeconds++;
        updateTimerDisplay();
      }, 1000);
    }
  
    function stopTimer() {
      clearInterval(timerInterval);
    }
  
    function resetTimer() {
      clearInterval(timerInterval);
      timerSeconds = 0;
      updateTimerDisplay();
    }
  
    function updateTimerDisplay() {
      timerDisplay.textContent = `${formatTime(timerSeconds)}`;
    }
  
    function resetMoves() {
      movesCount = 0;
    }
  
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
  
    function resetGame() {
      resetTimer();
      resetMoves();
      gameStarted = false;
      initializeGame(difficultySelector.value);
    }
  

    resetBtn.addEventListener('click', resetGame);
    difficultySelector.addEventListener('change', function() {
      initializeGame(this.value);
    });
  
    initializeGame(difficultySelector.value);

  });
}