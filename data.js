const nodeTypeConfig = {
    "Phase": { width: "220px", borderStyle: "solid", color: "#fca311", textColor: "#1e1e24" },
    "Event": { width: "150px", borderStyle: "solid", color: "#e63946", textColor: "#ffffff" },
    "Quest": { width: "150px", borderStyle: "dashed", color: "#4caf50", textColor: "#ffffff" },
    "Dialogue": { width: "150px", borderStyle: "dotted", color: "#4cc9f0", textColor: "#1e1e24" },
	"Object": { width: "200px", borderStyle: "double", color: "#9c27b0", textColor: "#ffffff" },
    
    "Result": { width: "220px", borderStyle: "groove", color: "#ff9800", textColor: "#1e1e24" },
    "Ending": { width: "200px", borderStyle: "solid", color: "#00bcd4", textColor: "#1e1e24" },
    "Item": { width: "140px", borderStyle: "inset", color: "#8bc34a", textColor: "#1e1e24" },
    "Battle": { width: "170px", borderStyle: "ridge", color: "#f44336", textColor: "#ffffff" },
    "Note": { width: "150px", borderStyle: "outset", color: "#607d8b", textColor: "#ffffff" }
};

// Flat data structure
const nodes =
[
	// ===== ===== ===== Phase 1 ===== ===== =====
	{
        id: "P_01",
        parentID: null, // Root phase
        type: "Phase",
        title: "1. 동굴",
        summary: "동굴에서 칩거하던 용용은 지친 힘멜을 발견한다.",
        modalTitle: "Phase 1: 동굴",
		modalSummary: "동굴에서 칩거하던 용용은 지친 힘멜을 발견한다.\n그리고 어느 제안을 수락하게 되는데...",
		detail: {
			배경: "마법사가 존재하지 않는 흔한 옛날 세계",
			마법: "용용은 골드를 먹으면 마법을 사용할 수 있다.\
				단, 내용과 골드의 양에 따라 충분한 숙면을 취해야한다.",
			힘멜: "전쟁에서 홀로 숲으로 피난한 소년. 용용을 만난 후 기사단의 꿈을 가지게 된다.",
			비밀: "",
			main_flow: ""
		}
    },
	{
		id: "P_01_End",
		parentID: "P_01",
		type: "Phase",
		title: "1-ED. 바이바이 기사맨",
		summary: "힘멜이 기사단에 입단 후 활약한다.",
		modalTitle: "1-ED. 바이바이 기사맨",
		modalSummary: "힘멜이 기사단에 입단 후 활약한다.\n이후 산 속의 용용 선생이 입소문을 타는데...",
		detail: {
			입학지원서: "우편으로 입학 지원서를 받아볼 수 있다.",
		}
	},
	// ===== ===== ===== Phase 1 ===== ===== ===== Else
	{
		id: "STU_01",
		parentID: "P_01",
		type: "Character",
		title: "힘멜",
		summary: "전쟁에서 홀로 숲으로 피난한 소년.",
		modalTitle: "힘멜",
		modalSummary: "전쟁에서 홀로 숲으로 피난한 소년. 용용을 만난 후 기사단의 꿈을 가지게 된다.",
		detail: {
			퍼스널_컬러: "Red",
		}
	},
	{
		id: "EVT_01",
		parentID: "P_01",
		type: "Event",
		title: "마을 첫 방문",
		summary: "용용은 마을에 방문해 촌장과 인사한다.",
		modalTitle: "마을 첫 방문",
		modalSummary: "용용은 마을에 방문해 촌장과 인사한다.",
		detail: {
		}
	},
	{
		id: "NPC_01",
		parentID: "EVT_01",
		type: "Character",
		title: "촌장",
		summary: "비중 없는 촌장.\n대부분 우편으로 등장한다.",
		modalTitle: "촌장",
		modalSummary: "",
		detail: {
		}
	},

	// ===== ===== ===== Phase 2 ===== ===== =====
	{
		id: "P_02",
		parentID: "P_01_End",
		type: "Phase",
		title: "2. 숲 속의 용용 학교",
		summary: "용용 학교를 찾아온 3명의 학생",
		modalTitle: "2. 숲 속의 용용 학교",
		modalSummary: "",
		detail: {
			
		}
	},
	{
		id: "P_02_1",
		parentID: "P_02",
		type: "Phase",
		title: "2-1. 상생",
		summary: "마을에서 온 제안",
		modalTitle: "2-1. 상생",
		modalSummary: "우편함에 마을로부터의 제안이 날라왔다",
		detail: {
			
		}
	},
	{
		id: "P_02_2",
		parentID: "P_02_1",
		type: "Phase",
		title: "2-2. 쿡쿡 푸드",
		summary: "용용 학교와 마을의 창업 지원",
		modalTitle: "2-2. 쿡쿡 푸드",
		modalSummary: "용용 학교와 마을의 창업 지원",
		detail: {
			
		}
	},
	{
		id: "P_02_End",
		parentID: "P_02_2",
		type: "Phase",
		title: "2-ED. 환원",
		summary: "",
		modalTitle: "2-ED. 환원",
		modalSummary: "",
		detail: {
			
		}
	},
	// ===== ===== ===== Phase 2 ===== ===== ===== Else
	{
		id: "STU_02",
		parentID: "P_02",
		type: "Character",
		title: "쿡쿡",
		summary: "자기 재능을 잘못 알고 있는 아이",
		modalTitle: "쿡쿡",
		modalSummary: "자기 재능을 잘못 알고 있는 아이",
		detail: {
			
		}
	},
	{
		id: "STU_03",
		parentID: "P_02",
		type: "Character",
		title: "힘힘",
		summary: "",
		modalTitle: "힘힘",
		modalSummary: "",
		detail: {
			
		}
	},

	// ===== ===== ===== Phase 3 ===== ===== =====
	{
		id: "P_03",
		parentID: "P_02_End",
		type: "Phase",
		title: "3. 마을의 대표 학교",
		summary: "",
		modalTitle: "3. 마을의 대표 학교",
		modalSummary: "",
		detail: {
			
		}
	},
	{
		id: "P_03_End",
		parentID: "P_03",
		type: "Phase",
		title: "3-ED. 대도시",
		summary: "마을 외부로 진출하는 학생들이 늘어난다",
		modalTitle: "3-ED. 대도시",
		modalSummary: "",
		detail: {
			
		}
	},
];