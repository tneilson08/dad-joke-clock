

// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Set AM or PM
  const amPm = hour >=12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}
  ${showAmPm ? amPm : ''}`;
  setTimeout(showTime, 1000);
}

// Add Zeroes
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if(hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('img/morning.jpg')";
    greeting.textContent = 'Good Morning';
  } else if(hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('img/afternoon.gif')";
    greeting.textContent = 'Good Afternoon';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('img/night.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}

// Get name
function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set name
function setName(e) {
  if(e.type === 'keypress') {
    // Make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

// Run
showTime();
setBgGreet();
getName();

{
  const jokes = 
      ["What kind of shoes do ninjas wear? Sneakers!",
      "Why don't eggs tell jokes? They'd crack each other up.",
      "I don't trust stairs. They're always up to something.",
      "What do you call someone with no body and no nose? Nobody knows.",
      "Did you hear the rumor about butter? Well, I'm not going to spread it!",
      "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.",
      "Why can't a nose be 12 inches long? Because then it would be a foot.",
      "This graveyard looks overcrowded. People must be dying to get in.",
      "What time did the man go to the dentist? Tooth hurt-y.",
      "If a child refuses to sleep during nap time, are they guilty of resisting a rest?",
      "I'm reading a book about anti-gravity. It's impossible to put down!",
      "What is the least spoken language in the world? Sign language.",
      "Why can't you hear a pterodactyl go to the bathroom? Because the pee is silent.",
      "Spring is here! I got so excited I wet my plants!",
      "5/4 of people admit that they’re bad with fractions.",
      "What is Beethoven’s favorite fruit? A ba-na-na-na.",
      "Where did the college-aged vampire like to shop? Forever 21.",
      "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
      "What rock group has four men that don't sing? Mount Rushmore.",
      "When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.",
      "Why did the old man fall in the well? Because he couldn't see that well!",
      "Want to hear a joke about construction? I'm still working on it!",
      "What did the fisherman say to the magician? Pick a cod, any cod.",
      "Which is faster, hot or cold? Hot, because you can catch a cold.",
      "What did one ocean say to the other ocean? Nothing, they just waved.",
      "Why can't a leopard hide? Because he's always spotted.",
      "How many tickles does it take to make an octopus laugh? 10 tickles.",
      "I made a pencil with two erasers. It was pointless.",
      "What do you call an illegally parked frog? Toad.",
      "Did you hear about the circus fire? It was in tents.",
      "How can you tell it's a dogwood tree? From the bark.",
      "I could tell a joke about pizza, but it's a little cheesy."
      ];
  
  function randomJokeGen() {
      let randomJoke = jokes[Math.floor(Math.random()*jokes.length)];
      document.getElementById('joke').innerHTML = randomJoke;
  }
  
  randomJokeGen();
  }
