# Video Hub Challenge Arcade: Revised Product Plan

## 1. Narrative Premise & Player Goal
- **You are the creator**: The player is a gay video creator streaming from a neon-soaked loft. Every avatar in the grid is a single fan prospect with a personal challenge or request.
- **Single-player focus**: Sessions are solo runs. Viewers (NPCs) react through static grid avatars and DM threads, but only the player takes actions.
- **Victory condition**: Convert enough of the 24 grid prospects into paying subscribers while keeping morale and cashflow above water before the weekend showcase.
  - **Target**: Hit **15 loyal subscribers** *and* earn **$7,500** in pledges/brand tips by the end of a 5-day content sprint.
  - **Failure**: Drop below 40% “Fan Trust,” let rent ($1,200) go unpaid, or lose three prospects to drama posts.

## 2. Core UI & Grid Behaviour
- **Full-screen video canvas**: Ambient clips loop in the background with a frosted overlay to keep challenges legible. Between challenges, queued “performance mode” clips or keyboard prompts animate in the center to simulate rehearsals.
- **Static Grindr-style grid**:
  - 4×6 card layout anchored to the left side.
  - Avatars never shuffle or swap; each card is a single prospect. Completing their dare signs them as **one** subscriber and unlocks their DM thread for side quests.
  - Clicking a card reveals its latest dare in the modal. Until clicked, only avatar, username, and mood emoji are shown.
- **DM ticker**: Toast-style notifications surface when avatars send reactive messages, collab invites, or pop-up dares between videos.
- **Right-side control dock**: Tabs for Playback, Creator Studio (economy summary), Shop, Address Book, and Settings.
- **HUD**:
  - Subscriber roster (out of 24 prospects), cash-on-hand, fan trust meter.
  - Daily objectives ticker (e.g., “Secure 2 collabs today”).
  - Active modifiers (power-ups, penalties, sponsorship deals).
- **Modal router**: Dedicated overlay for mini-games, DM negotiations, live performance simulations, gambling events, and boss battles.

## 3. Economy, Progression & Power-Ups
- **Core resources**:
  - **Subscribers**: Each prospect equals one slot. Clearing their main dare adds them to the roster, unlocking passive perks and collab opportunities.
  - **Cash**: Comes from subscriber pledges, sponsorships, gambling wins, and livestream tips; spent on upgrades, power-ups, and rent.
  - **Fan Trust**: Measures authenticity. Dropping too low locks certain avatars or halves tip potential.
- **Challenge payouts** (baseline):
  - Easy = +$250 + prospect subscribes.
  - Medium = +$400 + prospect subscribes and opens a side quest thread.
  - Hard = +$650 + prospect subscribes and unlocks a collab finale with bonus $500 if cleared later.
  - Apply +/- modifiers for avatar moods, streaks, and DM promises.
- **Streaks & multipliers**:
  - Consecutive successes grant +5% cash per win (caps at +25%).
  - Failing a dare resets streak but grants a sympathy tip (+$75) if Fan Trust ≥ 70%.
- **Power-ups & purchases**:
  - **Editing Suite Upgrade** ($2,500): Adds +10% cash on performance-based games.
  - **Thirst Trap Booster** ($900): Guarantees the next unclaimed prospect becomes “Ready to Collab.”
  - **DM Blast** ($500): Immediately surfaces two new DM side quests.
  - **Insurance Policy** ($1,200): Negates the next cash loss from gambling.
  - **Livestream Overlay Pack** ($1,400): Unlocks simulated keyboard performance prompts with +Fan Trust rewards.
- **Boss/Bulk challenges**:
  - Completing three dares from the same column unlocks a “Boss Premiere” multi-stage stream granting $1,500 and 2 bonus prospects if cleared.
  - Weekly “Bulk Sponsorship” quests bundle four rapid mini-games; success yields a $2,000 jackpot or converts one lurking lurker into a subscriber instantly.

## 4. Address Book & Persona System
- **Persona sheet** per avatar: includes background, preferred challenge genres, payout multipliers, and relationship level.
- **Address book panel**:
  - Displays claimed subscribers, their unlocked perks (e.g., passive $50/day tip), and open DM requests.
  - Lets the player send gifts (cash or power-ups) to increase trust and unlock exclusive livestream or collab dares.
- **Relationship mechanics**:
  - High relationship unlocks bulk challenges or back-to-back dares for the same persona.
  - Ignoring an avatar too long triggers “Drama Posts” (negative events reducing Fan Trust or causing them to unsubscribe). Losing three subscribers ends the run.

## 5. Event Timeline & Gambling Hooks
- **Daily cycle** (approx. 25 real-time minutes):
  1. **Morning Planning**: Choose upgrades, answer sponsorship emails, set daily target.
  2. **Prime Stream**: Run challenges, trigger simulated performances (rhythm/keyboard mini-games), respond to DM pop-ups, and gamble on raids.
  3. **After Hours**: Handle drama, review analytics, pay rent/upkeep, and prep collab scripts.
- **Real-time gambling events**:
  - **Roulette Raid**: Spin a wheel after every third challenge; wager $100–$400 to gain/lose up to $1,000.
  - **Fan Auction**: Bid against AI rivals for a mega-collab; risk $500–$1,500 for a chance to convert two prospects at once.
  - **Mystery Loot Crates**: Spend $250 for random power-ups or a possible “Strike” (temporary -10% payouts).
- **Reactive events**:
  - Viral clip detection (based on high streak): triggers “Hype Train” mini-game with double cash rewards.
  - Negative comments (on fail streak): prompts “Damage Control” DM thread to repair Fan Trust.
  - **Livestream Emergencies**: Timed performance or keyboard mash challenges that interrupt between videos; success grants instant $200 tips.
  - **Collab Invitations**: Certain subscribers ping the player mid-day with co-op mini-games that temporarily borrow their persona abilities.

## 6. Media Sources & Handling
- **Local-first**: `<input type="file" webkitdirectory>` populates an IndexedDB cache. Prioritize local media to keep flow offline-capable.
- **Cloud options**:
  - **Google Cloud Storage buckets** via pasted URL lists.
  - **Dropbox shared folders** (primary cloud fallback) using short-lived tokens.
  - **YouTube iframe API** as last resort for public playlists when nothing else is available.
- **Avatar art**:
  - Primary: Oracle Cloud Object Storage base URL builder.
  - Fallback: DiceBear REST API (free, no auth).
  - Last resort: Local SVG silhouettes with initials.
- **Performance**: Pre-capture thumbnail strips and reuse across grid, since avatars are stationary.

## 7. API Strategy (Non-Gemini First)
- **General rules**:
  - Always favor public, low-friction APIs (no credit card) before invoking heavy LLMs.
  - Use Gemini or Claude only when creative generation is unavoidable, and cache their results per avatar.
- **Trivia & facts**:
  - Primary: **Open Trivia Database**.
  - Fallback: **The Trivia API** → **TriviaDB** → offline JSON packs.
- **Quotes & scripts**:
  - Primary: **Quotable.io** random quotes endpoint.
  - Fallback: **Movie-of-the-Day API** or a maintained CSV.
  - Gemini used only for bespoke prompts (e.g., improv scenarios) and only after cache miss.
- **Historical timelines**:
  - Primary: **Wikipedia REST summaries** via fetch.
  - Fallback: **History API** (if available) → static dataset.
- **Category puzzles**:
  - Primary: curated JSON packs shipped with the app.
  - Optional: PuzzleLab API or community-submitted packs.
- **Gambling odds**:
  - Deterministic RNG seeded per session; no external API required.

## 8. Challenge Flow
1. Player clicks a static avatar in the grid.
2. System fetches the persona’s queued challenge or DM request, including:
   - Challenge type, difficulty, mood modifier, and potential bonuses.
   - Relationship perks (e.g., forgiveness token, bonus loot, collab slots).
3. Player accepts or declines. Decline costs Fan Trust and may spawn drama events or cause the prospect to ghost.
4. Mini-game runs within modal, reporting `GameResult { success, cashDelta, fanTrustDelta, unlockedThreads, metadata }`.
5. Success signs the prospect as a subscriber, updates the roster, and unlocks their DM thread. Failures leave them unclaimed but available for a retry after cooldown.
6. Result updates HUD, triggers streak logic, pushes DM notifications, and queues cooldown for that avatar.

## 9. Mini-Game & Event Catalog
All mini-games respect the solo creator framing and feed the subscriber/cash economy.

### Core Challenge Games
Every successful core challenge converts the targeted prospect into a subscribed fan (if they were unclaimed) in addition to the listed cash/Fan Trust rewards.
1. **Trivia (Multiple Choice)**
    - UI: Question + 4 options.
    - API: OpenTDB → Trivia API → Offline pack; Gemini only for themed sets requested by certain personas.
    - Rewards: Medium difficulty baseline; +$75 tip for <5 sec answer.

2. **Trivia (Select All)**
    - UI: Grid of 8 options + submit.
    - API: OpenTDB multi-response packs (custom curated) → fallback to sequential multiple choice.
    - Rewards: Hard baseline; partial cash ($200) for 75% correct.

3. **Trivia (Type-In)**
    - UI: Text prompt + input field.
    - API: OpenTDB short-answer categories → fallback to offline curated list.
    - Rewards: Easy baseline; +$120 tip for exact spelling without hints.

4. **Match Pairs (Fan Gifts)**
    - UI: 4×4 card grid featuring fan-made emojis.
    - API: None.
    - Rewards: Easy baseline, +8 Fan Trust for perfect clear.

5. **Memory Test (Clip Recall)**
    - UI: Sequence of 10 short clips, then pick the intruder.
    - API: None (local media).
    - Rewards: Hard baseline, +Power-up drop chance.

6. **AI Challenge (Content Pitch)**
    - UI: Persona proposes a wild content idea; player submits outline.
    - API: Gemini *only if* cached prompts exhausted; otherwise use pre-written deck.
    - Rewards: Medium baseline, +10 Fan Trust for thoughtful response.

7. **Clip Sequencer (Edit Bay)**
    - UI: Drag-and-drop reorder.
    - API: None.
    - Rewards: Medium baseline, +$200 if no mistakes.

8. **Reflex Test (Jump Cut)**
    - UI: Click at the right moment.
    - API: None.
    - Rewards: Easy baseline, +5% streak multiplier increase.

9. **Whose Line Is It Anyway? (Quote Guess)**
    - UI: Listen to spoken quote.
    - API: Quotable.io → cached local quotes.
    - Rewards: Medium baseline, +6 Fan Trust for first-try success.

10. **Video Tile Shuffler**
    - UI: Sliding puzzle from captured frame.
    - API: None.
    - Rewards: Hard baseline, unlocks avatar-exclusive collab.

11. **Audio Simon Says (Beat Drop)**
    - UI: Tone pads.
    - API: Tone.js only.
    - Rewards: Medium baseline, +$220 tip for flawless run.

12. **Video Match Reflex**
    - UI: Identify the target clip among nine players.
    - API: None.
    - Rewards: Hard baseline, +10 Fan Trust if cleared under 4 sec.

13. **3×3 Video Flipper**
    - UI: Cycle clips to align rows.
    - API: None.
    - Rewards: Hard baseline, unlocks “Bulk Sponsorship.”

14. **Category Connect (Community Brainstorm)**
    - UI: 4×4 word grid.
    - API: Local packs → PuzzleLab → Gemini.
    - Rewards: Medium baseline, +$400 bonus for finishing with zero mistakes.

15. **Timeline Sort (History of Pride)**
    - UI: Drag historical events into order.
    - API: Wikipedia REST.
    - Rewards: Medium baseline, +7 Fan Trust for perfect order.

16. **Guess Who? (Fan Spotlight)**
    - UI: Clues with text input.
    - API: Local dataset → OpenTDB.
    - Rewards: Hard baseline, +9 Fan Trust for early guesses.

17. **Trivia Speed Run (Lightning Round)**
    - UI: 90-second timed streak.
    - API: OpenTDB primary.
    - Rewards: Medium baseline per question; complete all 10 for extra $350.

18. **Video Clue Guesser (Theme Hunt)**
    - UI: Track five clips matching a secret theme.
    - API: Persona-supplied lists (cached JSON) → Gemini only if persona demands fresh theme.
    - Rewards: Hard baseline, +$650 brand deal if guessed in ≤3 clips.

19. **Number Reflex (Whack-a-Stan)**
    - UI: 3×3 grid with sequential numbers.
    - API: None.
    - Rewards: Easy baseline, +5 Fan Trust.

### Performance & Livestream Challenges
20. **Livestream Keyboard Smash**
    - UI: Falling-note rhythm prompt played on the PC keyboard.
    - API: None (Tone.js for sound).
    - Rewards: Medium baseline; perfect combo grants +$180 in live tips and +12 Fan Trust.

21. **Impromptu Drag Number**
    - UI: Quick-time prompts for outfit swaps, emotes, and lip-sync timing while a clip plays.
    - API: None (local media).
    - Rewards: Hard baseline; unlocks a collab invite and +$300 if no prompts missed.

22. **Collab Duet Stream**
    - UI: Split-screen mini-game where the player mirrors button combos from a subscriber partner.
    - API: None (uses stored sequences from persona data).
    - Rewards: Hard baseline; converts a tagged lurker into a subscriber and shares a $400 payout if synced ≥90%.

### Gambling & High-Stakes Events
23. **Roulette Raid**
    - UI: Spinning wheel with cash modifiers.
    - API: None (deterministic RNG).
    - Result: Risk $100–$400; potential gain/loss up to $1,000 and ±5 Fan Trust.

24. **Fan Auction Showdown**
    - UI: Live bidding meter vs AI rivals.
    - API: None.
    - Result: Spend $300–$1,500 to secure collab slots; overbidding without delivering costs 8 Fan Trust.

25. **Mystery Loot Crate Unboxing**
    - UI: Pack opening animation.
    - API: None.
    - Result: Random power-up, direct $200–$600, or temporary -5% payout penalty.

### Boss & Bulk Content
26. **Boss Premiere**
    - UI: Multi-phase challenge (trivia + reflex + memory) representing a massive content drop.
    - API: Mix of existing modules.
    - Result: Guarantees $1,200 bonus and converts an additional prospect watching the stream; failure inflicts -15 Fan Trust.

27. **Bulk Sponsorship Sprint**
    - UI: Four rapid mini-games chained with minimal downtime.
    - API: Follows each individual game’s rules.
    - Result: Choose between a $1,000 cash bonus or unlocking two DM side quests.

28. **Damage Control Live**
    - UI: PR mini-game triggered by drama events.
    - API: Pulls recent failed challenges to craft prompts; may request Gemini for apology script suggestions.
    - Result: Restore up to 12 Fan Trust and prevent subscriber churn for the next day.

## 10. Technical Architecture
- **State management**: Zustand or Redux Toolkit to manage economy stats, persona states, and cooldowns.
- **Persistence**: IndexedDB for local media/cache; cloud sync (optional) for persona relationships.
- **Offline mode**: When APIs fail, rely on cached challenge packs and offline mini-games.
- **Telemetry**: Track API success rates and gambling outcomes to tune balance.
- **Extensibility**: `personaManifest.json` describes avatars, challenge pools, and unlock conditions.

## 11. Roadmap Milestones
1. **Prototype**: Static grid, local media, 5 core mini-games, basic economy loop (subs/cash/fan trust).
2. **Alpha**: Add address book, power-ups, gambling events, and OpenTDB integration.
3. **Beta**: Introduce boss/bulk challenges, persona relationship arcs, and drama event system.
4. **Launch**: Layer in optional Gemini prompts, cloud sync, analytics, and live tuning tools.

---
**Outcome**: A single-player, Grindr-inspired challenge arcade where a queer creator hustles to win over 24 specific prospects, balancing creative dares, risky gambles, and persona relationships without over-relying on heavyweight APIs.
