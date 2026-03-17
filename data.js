// Define node types and their visual properties globally
const nodeTypeConfig = {
    "Phase": { width: "220px", borderStyle: "solid", color: "#fca311", textColor: "#1e1e24" },
    "Incident": { width: "150px", borderStyle: "solid", color: "#e63946", textColor: "#ffffff" },
    "Task": { width: "150px", borderStyle: "dashed", color: "#4caf50", textColor: "#ffffff" },
    "Dialogue": { width: "150px", borderStyle: "dotted", color: "#4cc9f0", textColor: "#1e1e24" },
    "Event": { width: "150px", borderStyle: "solid", color: "#9c27b0", textColor: "#ffffff" }
};

// Flat data structure for the sci-fi story nodes
const nodes =
[
    // --- Phase 1: Departure ---
    {
        id: 1,
        parentID: null, // Root node
        type: "Phase",
        title: "Mission Launch",
        summary: "Departing from Earth orbit.",
        modalTitle: "Phase 1: Apollo Legacy",
        detail: {
            "Location": "Earth Orbit",
            "Crew Morale": "High",
            "Description": "The spaceship Horizon departs Earth. All systems are green, but a strange signal is detected from Sector 4."
        }
    },
    {
        id: 2,
        parentID: 1, // Branching from Phase 1
        type: "Incident",
        title: "Engine Failure",
        summary: "Main thruster offline.",
        modalTitle: "Critical Incident: Thruster",
        detail: {
            "System Impact": "Speed reduced by 40%",
            "Casualties": "None",
            "Description": "Micro-meteoroid impact caused a breach in the left thruster assembly."
        }
    },
    {
        id: 3,
        parentID: 1, // Branching from Phase 1
        type: "Task",
        title: "Spacewalk Repair",
        summary: "Send engineer outside.",
        modalTitle: "Task: EVA Repair",
        detail: {
            "Assigned To": "Engineer Miller",
            "Required Tool": "Plasma Welder",
            "Outcome": "If successful, restores 100% speed. If failed, navigation becomes harder in Phase 2."
        }
    },

    // --- Phase 2: The Journey ---
    {
        id: 4,
        parentID: 1, // Main continuation from Phase 1
        type: "Phase",
        title: "Asteroid Belt",
        summary: "Navigating through danger.",
        modalTitle: "Phase 2: The Kuiper Test",
        detail: {
            "Location": "Asteroid Belt",
            "Shield Status": "85%",
            "Description": "The Horizon enters the dense asteroid field. The mysterious signal grows stronger."
        }
    },
    {
        id: 5,
        parentID: 4, // Branching from Phase 2
        type: "Dialogue",
        title: "AI Warning",
        summary: "Ship AI detects an anomaly.",
        modalTitle: "Dialogue: Mainframe M.U.T.H.E.R",
        detail: {
            "Speaker": "Ship AI",
            "Topic": "Unidentified Object",
            "Description": "The AI insists that the asteroid trajectory is not natural and suggests changing course."
        }
    },
    {
        id: 6,
        parentID: 4, // Branching from Phase 2
        type: "Task",
        title: "Decrypt Signal",
        summary: "Analyze the alien frequency.",
        modalTitle: "Task: Cryptography",
        detail: {
            "Assigned To": "Dr. Aris",
            "Time Limit": "12 Hours",
            "Reward": "Unlocks hidden dialogue options in Phase 3."
        }
    },

    // --- Phase 3: Arrival ---
    {
        id: 7,
        parentID: 4, // Main continuation from Phase 2
        type: "Phase",
        title: "Arrival at Kepler",
        summary: "Reaching the destination.",
        modalTitle: "Phase 3: New Home",
        detail: {
            "Location": "Orbit of Kepler-186f",
            "Fuel Level": "Critical",
            "Description": "The crew finally arrives at the exoplanet, only to find a massive artificial structure in orbit."
        }
    },
    {
        id: 8,
        parentID: 7, // Branching from Phase 3
        type: "Event",
        title: "First Contact",
        summary: "The structure activates.",
        modalTitle: "Event: The Awakening",
        detail: {
            "Condition": "Only triggers if signal was decrypted (Node 6).",
            "Effect": "Opens docking bay.",
            "Description": "The station recognizes the Horizon's decrypted response and powers up its docking sequence."
        }
    },
    {
        id: 9,
        parentID: 7, // Branching from Phase 3
        type: "Dialogue",
        title: "Boarding the Station",
        summary: "Meeting the caretakers.",
        modalTitle: "Dialogue: Holographic Entity",
        detail: {
            "Speaker": "Ancient Caretaker",
            "Attitude": "Neutral",
            "Description": "A holographic projection greets the crew, asking for their purpose in this sector."
        }
    }
];