// Easter Egg: Console Message
console.log("Hey, you! Yeah, you, the one snooping around in the console. You've found the first secret. Now go find the others, you magnificent nerd.");

// Load repositories
fetch('repos.json')
    .then(response => response.json())
    .then(data => {
        const repoList = document.getElementById('repo-list');
        data.repositories.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.classList.add('repo-card'); repoCard.innerHTML = `
                <div class="repo-image">
                    <img src="${repo.image || 'https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Project+Preview'}" alt="${repo.name}"
                         loading="lazy" decoding="async">
                    <div class="repo-image-overlay"></div>
                </div>
                <div class="repo-content">
                    <h3 class="repo-name">${repo.name}</h3>
                    <p class="repo-description">${repo.description}</p>
                    <div class="repo-stats">
                        <span class="stat">⭐ ${repo.stars}</span>
                        <span class="stat">🔄 ${repo.forks}</span>
                    </div>
                </div>
            `;
            repoCard.addEventListener('click', () => window.location.href = repo.url);
            repoList.appendChild(repoCard);
        });
    })
    .catch(error => console.error('Error loading repositories:', error));

// Handle navigation highlighting
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Handle definition card
const highlights = document.querySelectorAll('.highlight');
const definitionCard = document.getElementById('definition-card');

document.addEventListener('mousemove', (e) => {
    if (definitionCard.classList.contains('show')) {
        definitionCard.style.left = `${e.clientX + 15}px`;
        definitionCard.style.top = `${e.clientY + 15}px`;
    }
});

highlights.forEach(highlight => {
    highlight.addEventListener('mouseenter', (e) => {
        const definition = e.target.getAttribute('data-definition');
        if (definition) {
            definitionCard.innerHTML = definition;
            definitionCard.classList.add('show');
        }
    });

    highlight.addEventListener('mouseleave', () => {
        definitionCard.classList.remove('show');
    });
});

// Skill card definitions
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const definition = e.currentTarget.getAttribute('data-definition');
        if (definition) {
            definitionCard.innerHTML = definition;
            definitionCard.classList.add('show');
        }
    });

    card.addEventListener('mouseleave', () => {
        definitionCard.classList.remove('show');
    });
});

// --- EASTER EGG CENTRAL ---

// Konami Code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

// Flip word
const flipWord = 'flip';
let flipIndex = 0;

// Roll word
const rollWord = 'roll';
let rollIndex = 0;

// Happy word
const happyWord = 'happy';
let happyIndex = 0;

// Bangladesh word
const bangladeshWord = 'bangladesh';
let bangladeshIndex = 0;

// Thanos word
const thanosWord = 'thanos';
let thanosIndex = 0;

// Roasts
const roasts = [
    "I'd call you a tool, but that would be an insult to useful things.",
    "You have your entire life to be a jerk. Why not take today off?",
    "Your brain is like a browser with 28 tabs open. None of them are the one you're looking for.",
    "I'm not a professional, but I can tell you're suffering from a severe case of 'I-know-everything-itis'.",
    "You're the reason the gene pool needs a lifeguard.",
    "I'd explain it to you, but I don't have any puppets on hand.",
    "You're like a broken pencil. Pointless.",
    "I've had coffee mugs with more personality.",
    "You're the human equivalent of a participation award.",
    "I'd agree with you, but then we'd both be wrong.",
    "I'm not saying you're lazy, but you make sloths look like they're on a deadline.",
    "You're the reason they put instructions on shampoo.",
    "I've seen more organized sock drawers.",
    "You're like a software update. Every time I see you, I think, 'not now'.",
    "I'd say you're a 'people person', but that would be an insult to people.",
    "You're the reason I prefer my pets to people.",
    "I'd call you a 'character', but that would be an insult to interesting people.",
    "You're the reason I need a prescription for my sense of humor.",
    "I'd say you're 'one of a kind', but that would be an insult to unique people.",
    "You're the reason I'm a 'glass half empty' kind of person.",
    "I'd call you a 'free spirit', but that would be an insult to people who don't have a parole officer.",
    "You're the reason I'm a 'cat person'.",
    "I'd say you're 'down to earth', but that would be an insult to people who don't live in a van down by the river.",
    "You're the reason I'm a 'dog person'.",
    "I'd call you a 'foodie', but that would be an insult to people who don't eat their feelings.",
    "You're the reason I'm a 'morning person'.",
    "I'd say you're a 'night owl', but that would be an insult to people who don't have a warrant out for their arrest.",
    "You're the reason I'm a 'weekend person'.",
    "I'd call you a 'gamer', but that would be an insult to people who don't live in their mom's basement.",
    "You're the reason I'm a 'bookworm'.",
    "I'd say you're a 'movie buff', but that would be an insult to people who don't have a restraining order against them from every theater in a 50-mile radius.",
    "You're the reason I'm a 'music lover'.",
    "I'd call you a 'sports fan', but that would be an insult to people who don't have a criminal record.",
    "You're the reason I'm a 'travel enthusiast'.",
    "I'd say you're a 'fashionista', but that would be an insult to people who don't have a warrant out for their arrest in three different countries.",
    "You're the reason I'm a 'foodie'.",
    "I'd call you a 'techie', but that would be an insult to people who don't have a restraining order against them from every Apple store in a 50-mile radius.",
    "You're the reason I'm a 'history buff'.",
    "I'd say you're a 'science geek', but that would be an insult to people who don't have a warrant out for their arrest in two different dimensions.",
    "You're the reason I'm a 'mathlete'.",
    "I'd call you a 'political junkie', but that would be an insult to people who don't have a restraining order against them from every polling place in a 50-mile radius.",
    "You're the reason I'm a 'news junkie'.",
    "I'd say you're a 'social media addict', but that would be an insult to people who don't have a warrant out for their arrest in the digital world.",
    "You're the reason I'm a 'reality TV addict'.",
    "I'd call you a 'celebrity gossip addict', but that would be an insult to people who don't have a restraining order against them from every celebrity in a 50-mile radius.",
    "You're the reason I'm a 'true crime addict'.",
    "I'd say you're a 'conspiracy theorist', but that would be an insult to people who don't have a warrant out for their arrest in the real world.",
    "You're the reason I'm a 'paranormal enthusiast'.",
    "I'd call you a 'UFO enthusiast', but that would be an insult to people who don't have a restraining order against them from every alien in a 50-light-year radius.",
    "You're the reason I'm a 'cryptozoology enthusiast'.",
    "I'd say you're a 'mythology enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from the gods themselves.",
    "You're the reason I'm a 'folklore enthusiast'.",
    "I'd call you a 'legend enthusiast', but that would be an insult to people who don't have a restraining order against them from every legendary creature in a 50-mile radius.",
    "You're the reason I'm a 'fairy tale enthusiast'.",
    "I'd say you're a 'fable enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from the animals themselves.",
    "You're the reason I'm a 'nursery rhyme enthusiast'.",
    "I'd call you a 'limerick enthusiast', but that would be an insult to people who don't have a restraining order against them from every poet in a 50-mile radius.",
    "You're the reason I'm a 'haiku enthusiast'.",
    "I'd say you're a 'sonnet enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from Shakespeare himself.",
    "You're the reason I'm a 'free verse enthusiast'.",
    "I'd call you a 'slam poetry enthusiast', but that would be an insult to people who don't have a restraining order against them from every open mic night in a 50-mile radius.",
    "You're the reason I'm a 'spoken word enthusiast'.",
    "I'd say you're a 'performance art enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from the Blue Man Group.",
    "You're the reason I'm a 'stand-up comedy enthusiast'.",
    "I'd call you a 'sketch comedy enthusiast', but that would be an insult to people who don't have a restraining order against them from every member of Monty Python.",
    "You're the reason I'm an 'improv comedy enthusiast'.",
    "I'd say you're a 'musical theater enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from Andrew Lloyd Webber.",
    "You're the reason I'm an 'opera enthusiast'.",
    "I'd call you a 'ballet enthusiast', but that would be an insult to people who don't have a restraining order against them from every ballerina in a 50-mile radius.",
    "You're the reason I'm a 'modern dance enthusiast'.",
    "I'd say you're a 'tap dance enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from Savion Glover.",
    "You're the reason I'm a 'ballroom dance enthusiast'.",
    "I'd call you a 'swing dance enthusiast', but that would be an insult to people who don't have a restraining order against them from every big band in a 50-mile radius.",
    "You're the reason I'm a 'salsa dance enthusiast'.",
    "I'd say you're a 'tango enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from every Argentinian in a 50-mile radius.",
    "You're the reason I'm a 'flamenco enthusiast'.",
    "I'd call you a 'belly dance enthusiast', but that would be an insult to people who don't have a restraining order against them from every snake in a 50-mile radius.",
    "You're the reason I'm a 'pole dance enthusiast'.",
    "I'd say you're a 'burlesque enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from Dita Von Teese.",
    "You're the reason I'm a 'drag enthusiast'.",
    "I'd call you a 'cosplay enthusiast', but that would be an insult to people who don't have a restraining order against them from every comic book convention in a 50-mile radius.",
    "You're the reason I'm a 'larp enthusiast'.",
    "I'd say you're a 'ren faire enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from every knight in a 50-mile radius.",
    "You're the reason I'm a 'SCA enthusiast'.",
    "I'd call you a 'historical reenactment enthusiast', but that would be an insult to people who don't have a restraining order against them from every ghost in a 50-mile radius.",
    "You're the reason I'm a 'living history enthusiast'.",
    "I'd say you're a 'museum enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from every security guard in a 50-mile radius.",
    "You're the reason I'm a 'gallery enthusiast'.",
    "I'd call you an 'art enthusiast', but that would be an insult to people who don't have a restraining order against them from every artist in a 50-mile radius.",
    "You're the reason I'm a 'theater enthusiast'.",
    "I'd say you're a 'film enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from every director in a 50-mile radius.",
    "You're the reason I'm a 'television enthusiast'.",
    "I'd call you a 'radio enthusiast', but that would be an insult to people who don't have a restraining order against them from every DJ in a 50-mile radius.",
    "You're the reason I'm a 'podcast enthusiast'.",
    "I'd say you're a 'YouTube enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from every vlogger in a 50-mile radius.",
    "You're the reason I'm a 'Twitch enthusiast'.",
    "I'd call you a 'TikTok enthusiast', but that would be an insult to people who don't have a restraining order against them from every teenager in a 50-mile radius.",
    "You're the reason I'm an 'Instagram enthusiast'.",
    "I'd say you're a 'Twitter enthusiast', but that would be an insult to people who don't have a warrant out for their arrest from every blue checkmark in a 50-mile radius.",
    "You're the reason I'm a 'Facebook enthusiast'."
];

document.addEventListener('keydown', (e) => {
    // Konami Code Logic
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            konamiIndex = 0;
            const body = document.querySelector('body');
            body.style.animation = 'spin 2s linear';
            setTimeout(() => {
                body.style.animation = '';
            }, 2000);
        }
    } else {
        konamiIndex = 0;
    }

    // Flip Word Logic
    if (e.key === flipWord[flipIndex]) {
        flipIndex++;
        if (flipIndex === flipWord.length) {
            flipIndex = 0;
            document.body.classList.toggle('flipped');
        }
    } else {
        flipIndex = 0;
    }

    // Roll Word Logic
    if (e.key === rollWord[rollIndex]) {
        rollIndex++;
        if (rollIndex === rollWord.length) {
            rollIndex = 0;
            const body = document.querySelector('body');
            body.style.animation = 'roll 1s ease-in-out';
            setTimeout(() => {
                body.style.animation = '';
            }, 1000);
        }
    } else {
        rollIndex = 0;
    }

    // Happy Word Logic
    if (e.key === happyWord[happyIndex]) {
        happyIndex++;
        if (happyIndex === happyWord.length) {
            happyIndex = 0;
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    } else {
        happyIndex = 0;
    }

    // Bangladesh Word Logic
    if (e.key === bangladeshWord[bangladeshIndex]) {
        bangladeshIndex++;
        if (bangladeshIndex === bangladeshWord.length) {
            bangladeshIndex = 0;
            const existingFlag = document.getElementById('bangladesh-flag-bg');
            if (existingFlag) {
                existingFlag.remove();
                document.body.classList.remove('flag-active');
            } else {
                const flagContainer = document.createElement('div');
                flagContainer.id = 'bangladesh-flag-bg';
                const redCircle = document.createElement('div');
                redCircle.className = 'red-circle';
                flagContainer.appendChild(redCircle);
                document.body.appendChild(flagContainer);
                document.body.classList.add('flag-active');
            }
        }
    } else {
        bangladeshIndex = 0;
    }

    // Thanos Snap Logic
    if (e.key === thanosWord[thanosIndex]) {
        thanosIndex++;
        if (thanosIndex === thanosWord.length) {
            thanosIndex = 0;
            const allElements = document.querySelectorAll('body > * > *:not(script):not(style)');
            const elementsToSnap = Array.from(allElements).sort(() => 0.5 - Math.random()).slice(0, allElements.length / 2);
            elementsToSnap.forEach(el => {
                el.classList.add('snapped');
                el.addEventListener('animationend', () => {
                    el.style.opacity = 0;
                });
            });
        }
    } else {
        thanosIndex = 0;
    }

    // Skull Emoji Logic
    if (Math.random() < 1 / 4000) {
        confetti({
            particleCount: 100,
            spread: 160,
            origin: { y: Math.random() - 0.2, x: Math.random() },
            shapes: ['text'],
            shapeOptions: {
                text: {
                    value: ['💀', '☠️'],
                    font: 'Arial'
                }
            },
            scalar: 2.5,
            gravity: 0.6,
            drift: Math.random() * 2 - 1
        });
    }

    // Boss Key / Roast Key
    if (e.ctrlKey && e.key === 'm') {
        e.preventDefault(); // Prevent browser's default action
        const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
        alert(randomRoast);
    }
});
