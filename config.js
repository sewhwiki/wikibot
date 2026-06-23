// --- WIKI CONFIGURATION ---
const BOT_NAME = "Serenade"; 

const WIKIS = {
    "sewh": {
        name: "Something Evil Will Happen",
        baseUrl: "https://sewh.miraheze.org",
        apiEndpoint: "https://sewh.miraheze.org/w/api.php",
        articlePath: "https://sewh.miraheze.org/",
        prefix: "sewh",
        emoji: "1424188551771193354"
    }
};

const toggleContribScore = true;
const STATUS_INTERVAL_MS = 5 * 60 * 1000;

// --- DISCORD STATUSES ---
const STATUS_OPTIONS = [
    { type: 4, text: "just send [[a page]] or {{a page}}!" },
    { type: 4, text: "sewh.miraheze.org" },
    { type: 0, text: "Something Evil Will Happen" },
    { type: 5, text: "Something Evil Will Happen" },
    { type: 4, text: "edit your message and my embed will too!" },
    { type: 4, text: "react with :wastebasket: on my messages & i'll delete!" },
];

module.exports = {
    BOT_NAME,
    WIKIS,
    toggleContribScore,
    STATUS_INTERVAL_MS,
    STATUS_OPTIONS
};
