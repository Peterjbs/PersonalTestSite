const state = {
  subscribers: 0,
  pledges: 0,
  trust: 100,
  streak: 0,
  targetSubscribers: 15,
  targetPledges: 7500,
};

const prospects = [
  {
    id: "nico",
    name: "Nico",
    tagline: "DJ set reaction",
    avatar: "https://i.pravatar.cc/150?img=1",
    challenge: "trivia",
  },
  {
    id: "sol",
    name: "Sol",
    tagline: "Sunrise yoga collab",
    avatar: "https://i.pravatar.cc/150?img=2",
    challenge: "typing",
  },
  {
    id: "mario",
    name: "Mario",
    tagline: "Speed bake-off",
    avatar: "https://i.pravatar.cc/150?img=3",
    challenge: "memory",
  },
  {
    id: "kairo",
    name: "Kairo",
    tagline: "Late-night gossip",
    avatar: "https://i.pravatar.cc/150?img=4",
    challenge: "reaction",
  },
  {
    id: "amir",
    name: "Amir",
    tagline: "Retro trivia drop",
    avatar: "https://i.pravatar.cc/150?img=5",
    challenge: "trivia",
  },
  {
    id: "leo",
    name: "Leo",
    tagline: "Livestream duet",
    avatar: "https://i.pravatar.cc/150?img=6",
    challenge: "typing",
  },
  {
    id: "jay",
    name: "Jay",
    tagline: "Barre remix",
    avatar: "https://i.pravatar.cc/150?img=7",
    challenge: "reaction",
  },
  {
    id: "felix",
    name: "Felix",
    tagline: "Drag brunch recap",
    avatar: "https://i.pravatar.cc/150?img=8",
    challenge: "memory",
  },
  {
    id: "oak",
    name: "Oak",
    tagline: "Forest vlog crossover",
    avatar: "https://i.pravatar.cc/150?img=9",
    challenge: "trivia",
  },
  {
    id: "atlas",
    name: "Atlas",
    tagline: "Charity stream",
    avatar: "https://i.pravatar.cc/150?img=10",
    challenge: "reaction",
  },
  {
    id: "dylan",
    name: "Dylan",
    tagline: "Pole tricks 101",
    avatar: "https://i.pravatar.cc/150?img=11",
    challenge: "typing",
  },
  {
    id: "ellis",
    name: "Ellis",
    tagline: "VR gamer collab",
    avatar: "https://i.pravatar.cc/150?img=12",
    challenge: "memory",
  },
  {
    id: "remy",
    name: "Remy",
    tagline: "Podcast takeover",
    avatar: "https://i.pravatar.cc/150?img=13",
    challenge: "trivia",
  },
  {
    id: "jules",
    name: "Jules",
    tagline: "Club mix premiere",
    avatar: "https://i.pravatar.cc/150?img=14",
    challenge: "reaction",
  },
  {
    id: "asher",
    name: "Asher",
    tagline: "Makeup masterclass",
    avatar: "https://i.pravatar.cc/150?img=15",
    challenge: "typing",
  },
  {
    id: "kurt",
    name: "Kurt",
    tagline: "Queer history quiz",
    avatar: "https://i.pravatar.cc/150?img=16",
    challenge: "trivia",
  },
  {
    id: "michi",
    name: "Michi",
    tagline: "House plant swap",
    avatar: "https://i.pravatar.cc/150?img=17",
    challenge: "memory",
  },
  {
    id: "toby",
    name: "Toby",
    tagline: "Workout jam sesh",
    avatar: "https://i.pravatar.cc/150?img=18",
    challenge: "reaction",
  },
  {
    id: "kae",
    name: "Kae",
    tagline: "Flash fiction duel",
    avatar: "https://i.pravatar.cc/150?img=19",
    challenge: "typing",
  },
  {
    id: "ren",
    name: "Ren",
    tagline: "Street style stroll",
    avatar: "https://i.pravatar.cc/150?img=20",
    challenge: "memory",
  },
  {
    id: "bruno",
    name: "Bruno",
    tagline: "Kitchen karaoke",
    avatar: "https://i.pravatar.cc/150?img=21",
    challenge: "trivia",
  },
  {
    id: "isa",
    name: "Isa",
    tagline: "Queer lit night",
    avatar: "https://i.pravatar.cc/150?img=22",
    challenge: "typing",
  },
  {
    id: "liam",
    name: "Liam",
    tagline: "Beach clean IRL",
    avatar: "https://i.pravatar.cc/150?img=23",
    challenge: "reaction",
  },
  {
    id: "sacha",
    name: "Sacha",
    tagline: "Mystery grab bag",
    avatar: "https://i.pravatar.cc/150?img=24",
    challenge: "memory",
  },
];

const dmMessages = [
  "Manager Max: 'Collab calendar is packed, keep the streak alive!'",
  "Fan Marco: 'Loved your last mukbang, pls do a sequel.'",
  "Ex Blake: 'We need to talk about that livestream clip...'",
  "Agent Priya: 'Brand deal wants receipts by tomorrow.'",
  "DJ Nico: 'My crowd is ready when you are.'",
  "Sol: 'Sunrise yoga at 6am, don't ghost me.'",
  "Remy: 'Podcast takeover script is in your inbox.'",
  "Atlas: 'Charity stream donors want a warm-up challenge.'",
];

const triviaBank = [
  {
    question: "Which city hosts the world's largest Pride celebration?",
    options: ["São Paulo", "New York", "Madrid", "Sydney"],
    answer: "São Paulo",
  },
  {
    question: "The first openly gay man elected to public office in California was?",
    options: ["Harvey Milk", "Bayard Rustin", "Barney Frank", "James Baldwin"],
    answer: "Harvey Milk",
  },
  {
    question: "Which color represents harmony and healing on the Pride flag?",
    options: ["Green", "Blue", "Orange", "Violet"],
    answer: "Green",
  },
  {
    question: "What year did marriage equality become law across the United States?",
    options: ["2013", "2015", "2016", "2018"],
    answer: "2015",
  },
  {
    question: "Which streaming platform introduced the 'Creator Fund' in 2020?",
    options: ["YouTube", "TikTok", "Twitch", "Kick"],
    answer: "TikTok",
  },
];

const typingPrompts = [
  "I slay for the subscribers",
  "Booked and busy, babe",
  "Queer joy is the assignment",
  "Merch drop hits at midnight",
  "Algorithms love authenticity",
];

const emojiSequences = [
  ["🎬", "💅", "🎧"],
  ["🏳️‍🌈", "🔥", "🧊", "🎤"],
  ["🍸", "🪩", "📸", "💋"],
  ["🎮", "⚡", "💻"],
  ["📚", "🌈", "🎙️", "🕺"],
];

const modal = document.getElementById("challenge-modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");
const grid = document.getElementById("prospect-grid");
const tickerMessage = document.getElementById("ticker-message");
const eventList = document.getElementById("event-list");

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (evt) => {
  if (evt.target === modal) closeModal();
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeModal();
  }
});

renderGrid();
updateHud();
startTicker();
logEvent("New season launch — 24 prospects waiting for your pitch.");

function renderGrid() {
  prospects.forEach((prospect) => {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = prospect.id;

    const avatarWrapper = document.createElement("div");
    avatarWrapper.className = "avatar";
    const avatarImg = document.createElement("img");
    avatarImg.src = prospect.avatar;
    avatarImg.alt = `${prospect.name} avatar`;
    avatarWrapper.appendChild(avatarImg);

    const name = document.createElement("div");
    name.className = "name";
    name.textContent = prospect.name;

    const tagline = document.createElement("div");
    tagline.className = "tagline";
    tagline.textContent = prospect.tagline;

    const status = document.createElement("div");
    status.className = "status";
    status.textContent = "Tap for challenge";
    card.append(avatarWrapper, name, tagline, status);

    card.addEventListener("click", () => {
      if (prospect.subscribed) {
        logEvent(`${prospect.name} is already subscribed—book a follow-up later.`, "info");
        return;
      }
      launchChallenge(prospect);
    });

    prospect.dom = { card, status };
    grid.appendChild(card);
  });
}

function updateHud() {
  document.getElementById("subscriber-count").textContent = state.subscribers;
  document.getElementById("pledge-total").textContent = formatCurrency(state.pledges);
  document.getElementById("trust-fill").style.width = `${Math.max(state.trust, 0)}%`;
  document.getElementById("streak-count").textContent = `${Math.max(state.streak, 0)}x`;
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function startTicker() {
  let idx = 0;
  tickerMessage.textContent = dmMessages[idx];
  setInterval(() => {
    idx = (idx + 1) % dmMessages.length;
    tickerMessage.textContent = dmMessages[idx];
  }, 6000);
}

function launchChallenge(prospect) {
  switch (prospect.challenge) {
    case "trivia":
      renderTriviaChallenge(prospect);
      break;
    case "reaction":
      renderReactionChallenge(prospect);
      break;
    case "memory":
      renderMemoryChallenge(prospect);
      break;
    case "typing":
    default:
      renderTypingChallenge(prospect);
      break;
  }
}

function renderTriviaChallenge(prospect) {
  const question = pickRandom(triviaBank);
  const container = document.createElement("div");
  container.className = "challenge-body";
  container.innerHTML = `
    <h2>${prospect.name} — Trivia Tap-In</h2>
    <p>${question.question}</p>
  `;

  const optionsWrapper = document.createElement("div");
  optionsWrapper.className = "options";
  question.options
    .slice()
    .sort(() => Math.random() - 0.5)
    .forEach((option) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.addEventListener("click", () => {
        const success = option === question.answer;
        [...optionsWrapper.children].forEach((child) => (child.disabled = true));
        btn.classList.add(success ? "correct" : "incorrect");
        const correctBtn = [...optionsWrapper.children].find(
          (child) => child.textContent === question.answer
        );
        if (correctBtn && correctBtn !== btn) {
          correctBtn.classList.add("correct");
        }
        setTimeout(() => {
          resolveChallenge(prospect, success, success ? "Trivia ace!" : "Trivia miss.");
        }, 900);
      });
      optionsWrapper.appendChild(btn);
    });
  container.appendChild(optionsWrapper);
  openModal(container);
}

function renderReactionChallenge(prospect) {
  const container = document.createElement("div");
  container.className = "challenge-body";
  container.innerHTML = `
    <h2>${prospect.name} — Reflex Pop Quiz</h2>
    <p>Wait for the beat drop, then smash the button under 600ms.</p>
  `;
  const zone = document.createElement("div");
  zone.className = "reaction-zone";
  const timerDisplay = document.createElement("div");
  timerDisplay.className = "timer-display";
  timerDisplay.textContent = "Ready";
  const button = document.createElement("button");
  button.className = "primary";
  button.textContent = "Wait...";
  button.disabled = true;

  let startTime = 0;
  let triggered = false;
  const triggerDelay = 1000 + Math.random() * 2500;

  setTimeout(() => {
    triggered = true;
    startTime = performance.now();
    button.disabled = false;
    button.textContent = "Go!";
    timerDisplay.textContent = "Beat drop!";
  }, triggerDelay);

  button.addEventListener("click", () => {
    if (!triggered) {
      resolveChallenge(prospect, false, "Jumped the gun!");
      return;
    }
    const reaction = performance.now() - startTime;
    const success = reaction <= 600;
    timerDisplay.textContent = `${Math.round(reaction)}ms`;
    resolveChallenge(prospect, success, success ? "Insanely fast!" : "Too slow.");
  });

  zone.append(timerDisplay, button);
  container.appendChild(zone);
  openModal(container);
}

function renderMemoryChallenge(prospect) {
  const sequence = pickRandom(emojiSequences);
  const container = document.createElement("div");
  container.className = "challenge-body";
  container.innerHTML = `
    <h2>${prospect.name} — Memory Montage</h2>
    <p>Memorise the emoji sequence, then enter it in order.</p>
  `;

  const sequenceDisplay = document.createElement("div");
  sequenceDisplay.className = "sequence-display";
  sequence.forEach((emoji) => {
    const span = document.createElement("span");
    span.textContent = emoji;
    sequenceDisplay.appendChild(span);
  });

  const inputWrapper = document.createElement("div");
  inputWrapper.className = "sequence-input";
  const input = document.createElement("input");
  input.placeholder = "Enter emojis here";
  const submit = document.createElement("button");
  submit.className = "primary";
  submit.textContent = "Submit";

  inputWrapper.append(input, submit);
  container.append(sequenceDisplay, inputWrapper);
  openModal(container);

  setTimeout(() => {
    sequenceDisplay.style.visibility = "hidden";
  }, 3000);

  submit.addEventListener("click", () => {
    const success = input.value.replace(/\s/g, "") === sequence.join("");
    resolveChallenge(prospect, success, success ? "Perfect recall!" : "Sequence mismatch.");
  });
}

function renderTypingChallenge(prospect) {
  const phrase = pickRandom(typingPrompts);
  const container = document.createElement("div");
  container.className = "challenge-body typing-challenge";
  container.innerHTML = `
    <h2>${prospect.name} — Livestream Hype</h2>
    <p>Type the prompt with fewer than 1 typo within 18 seconds.</p>
    <blockquote>${phrase}</blockquote>
  `;
  const input = document.createElement("input");
  input.placeholder = "Type it here";
  const submit = document.createElement("button");
  submit.className = "primary";
  submit.textContent = "Send";
  container.append(input, submit);

  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    submit.disabled = true;
    resolveChallenge(prospect, false, "Ran out of time.");
  }, 18000);

  submit.addEventListener("click", () => {
    if (timedOut) return;
    clearTimeout(timer);
    const typed = input.value.trim();
    const distance = levenshtein(typed.toLowerCase(), phrase.toLowerCase());
    const success = typed.length > 0 && distance <= 1;
    resolveChallenge(prospect, success, success ? "Chat is screaming!" : "Too many typos.");
  });

  openModal(container);
  input.focus();
}

function resolveChallenge(prospect, success, message) {
  closeModal();
  if (success) {
    prospect.subscribed = true;
    prospect.dom.card.classList.add("subscribed");
    prospect.dom.status.textContent = "Subscribed";
    const base = 350 + Math.floor(Math.random() * 250);
    const streakBoost = Math.max(state.streak, 0) * 75;
    state.subscribers += 1;
    state.pledges += base + streakBoost;
    state.trust = clamp(state.trust + 4, 0, 100);
    state.streak += 1;
    logEvent(`${prospect.name} subbed — +${formatCurrency(base + streakBoost)} pledges.`, "success");
    logEvent(`Streak now ${state.streak}×. ${message}`, "info");
    maybeTriggerEvent(true);
  } else {
    state.trust = clamp(state.trust - 9, 0, 100);
    state.streak = 0;
    logEvent(`${prospect.name} passed for now. ${message}`, "warning");
    maybeTriggerEvent(false);
  }
  updateHud();
  checkGoals();
}

function maybeTriggerEvent(positive) {
  const chance = Math.random();
  if (chance > 0.65) {
    const eventFactory = pickRandom(positive ? positiveEvents : neutralOrRiskEvents);
    const event = eventFactory();
    logEvent(event.text, event.type);
    updateHud();
  }
}

const positiveEvents = [
  () => {
    const boost = 200 + Math.floor(Math.random() * 200);
    state.pledges += boost;
    return {
      type: "success",
      text: `Merch ping! Spontaneous orders add ${formatCurrency(boost)}.`,
    };
  },
  () => {
    state.trust = clamp(state.trust + 6, 0, 100);
    return {
      type: "success",
      text: "Fan Discord throws glitter — Fan Trust surges!",
    };
  },
  () => {
    state.pledges += 500;
    return {
      type: "success",
      text: "VIP patron tips $500 during an afterparty spin.",
    };
  },
];

const neutralOrRiskEvents = [
  () => {
    state.pledges = Math.max(0, state.pledges - 300);
    return {
      type: "warning",
      text: "Gambling mini pot flops — you lose $300 in pledges.",
    };
  },
  () => {
    state.trust = clamp(state.trust - 12, 0, 100);
    return {
      type: "warning",
      text: "Leaked DM screenshot drops Fan Trust by 12%.",
    };
  },
  () => {
    const swing = Math.random() > 0.5 ? 250 : -250;
    state.pledges = Math.max(0, state.pledges + swing);
    return {
      type: swing > 0 ? "success" : "warning",
      text:
        swing > 0
          ? "Roulette collab night pays off — +$250 pledges."
          : "Roulette collab night backfires — -$250 pledges.",
    };
  },
];

function logEvent(text, type = "info") {
  const entry = document.createElement("li");
  entry.textContent = text;
  if (type !== "info") entry.classList.add(type);
  eventList.prepend(entry);
  while (eventList.children.length > 12) {
    eventList.removeChild(eventList.lastChild);
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function pickRandom(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

function closeModal() {
  modal.classList.add("hidden");
  modalContent.innerHTML = "";
}

function openModal(content) {
  modalContent.innerHTML = "";
  modalContent.appendChild(content);
  modal.classList.remove("hidden");
}

function checkGoals() {
  if (state.subscribers >= state.targetSubscribers && state.pledges >= state.targetPledges) {
    const banner = document.createElement("div");
    banner.className = "result-banner success";
    banner.textContent = "Goal hit! You've secured the season finale sponsorship.";
    modalContent.appendChild(banner);
    openModal(banner);
  } else if (state.trust <= 0) {
    const banner = document.createElement("div");
    banner.className = "result-banner fail";
    banner.textContent = "Fan Trust collapsed. Take a breather and regroup.";
    modalContent.appendChild(banner);
    openModal(banner);
  }
}

function levenshtein(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
