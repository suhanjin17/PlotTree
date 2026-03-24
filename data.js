const nodeTypeConfig = {
    "Phase": { width: "220px", borderStyle: "solid", color: "#fca311", textColor: "#1e1e24" },
    "Event": { width: "150px", borderStyle: "solid", color: "#e63946", textColor: "#ffffff" },
    "Quest": { width: "150px", borderStyle: "dashed", color: "#4caf50", textColor: "#ffffff" },
    "Dialogue": { width: "150px", borderStyle: "dotted", color: "#4cc9f0", textColor: "#1e1e24" },
	"Character": { width: "170px", borderStyle: "double", color: "#9c27b0", textColor: "#ffffff" },
    
    "Content": { width: "170px", borderStyle: "groove", color: "#8bc34a", textColor: "#1e1e24" },
    "Object": { width: "150px", borderStyle: "double", color: "#00bcd4", textColor: "#1e1e24" },
    "Item": { width: "150px", borderStyle: "inset", color: "#8bc34a", textColor: "#1e1e24" },
    "Battle": { width: "170px", borderStyle: "ridge", color: "#f44336", textColor: "#ffffff" },
    "Ending": { width: "170px", borderStyle: "solid", color: "#607d8b", textColor: "#ffffff" }
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
			main_flow: "탈진 직전인 힘멜이 동굴에 들어오다 용용과 마주친다.\n\
				놀란 힘멜은 놀라는데 힘을 다 써서 기절\n\
				"
		}
    },
	{
		id: "P_01_End",
		parentID: "STU_01",
		type: "Ending",
		title: "1-ED. 바이바이 기사맨",
		summary: "힘멜이 기사단에 입단 후 활약한다.",
		modalTitle: "1-ED. 바이바이 기사맨",
		modalSummary: "힘멜이 기사단에 입단 후 활약한다.\n이후 산 속의 용용 선생이 입소문을 타는데...",
		detail: {
			대상: "힘멜",
			직업: "기사",
			위치: "대도시 영주의 기사단",
			직책: "기사단장",
			입학지원서: "우편으로 3통의 입학지원서가 와 있다.",
		}
	},
	// ===== ===== ===== Phase 1 ===== ===== ===== Else
	{
		id: "DRAGON",
		parentID: "P_01",
		type: "Character",
		title: "용용",
		summary: "자칭 교수이자 교장.",
		modalTitle: "용용",
		modalSummary: "",
		detail: {
			컬러: "Aqua",
			나이: "?",
			적성: "",
			흥미: "",
			성향: "게으름",
			성향_i: "",
			설정: "",
			비밀: "용용과 동굴에서 조우할 때 흐릿한 시야로 미니 용의 형상을 보았다."
		}
	},
	{
		id: "STU_01",
		parentID: "DRAGON",
		type: "Character",
		title: "힘멜",
		summary: "전쟁에서 홀로 숲으로 피난한 소년",
		modalTitle: "힘멜",
		modalSummary: "전쟁에서 홀로 숲으로 피난한 소년. 용용을 만난 후 기사단의 꿈을 가지게 된다.",
		detail: {
			컬러: "Red",
			나이: 14,
			적성: "",
			흥미: "",
			성향: "활달, 도전적",
			성향_i: "용용과 아주 잘 맞는 성격",
			설정: "",
			비밀: "용용과 동굴에서 조우할 때 흐릿한 시야로 미니 용의 형상을 보았다."
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
		id: "SCHOOL_01",
		parentID: "DRAGON",
		type: "Content",
		title: "교장실",
		summary: "학교 관련 업무를 처리할 수 있는 곳",
		modalTitle: "교장실",
		modalSummary: "학교 관련 업무를 처리할 수 있는 곳",
		detail: {
			탁상: "용용은 탁상에 앉으며 교장 기분을 낸다.",

			우편: "퀘스트를 받을 수 있는 창구.",
		}
	},
	{
		id: "SCHOOL_02",
		parentID: "DRAGON",
		type: "Content",
		title: "생활관",
		summary: "숙식을 해결하기 위해 만들어진 건물.",
		modalTitle: "생활관",
		modalSummary: "숙식을 해결하기 위해 만들어진 건물.",
		detail: {
			초기: "용용의 방(넓음), 힘멜의 방, 거실로 이루어진 집의 형태.",
			힘멜_이후: "방을 2개 기숙사로 활용한다."
		}
	},
	{
		id: "STAGE_01",
		parentID: "EVT_01",
		type: "Content",
		title: "여관",
		summary: "여러 외부인들이 묵는다.\n2관이 침실, 1층은 주전부리를 제공한다.",
		modalTitle: "여관",
		modalSummary: "여러 외부인들이 묵는다.\n2관이 침실, 1층은 주전부리를 제공한다.",
		detail: {
			대화: "",
			마법_정찰: "마법을 사용해 교수의 정보를 즉시 조회할 수 있다",
			친분: "네임드 교수의 경우 간단한 대화 이벤트가 있을 수 있다."
		}
	},
	{
		id: "STAGE_02",
		parentID: "EVT_01",
		type: "Content",
		title: "대장간?",
		summary: "증축을 의뢰할 수 있다.",
		modalTitle: "대장간?",
		modalSummary: "증축을 의뢰할 수 있다.",
		detail: {
			증축_업그레이드: "",
		}
	},
	{
		id: "NPC_01",
		parentID: "EVT_01",
		type: "Object",
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
		parentID: "STU_02",
		type: "Ending",
		title: "2-2. 쿡쿡 푸드",
		summary: "용용 학교와 마을의 창업 지원",
		modalTitle: "2-2. 쿡쿡 푸드",
		modalSummary: "용용 학교와 마을의 창업 지원",
		detail: {
			
		}
	},
	{
		id: "P_02_End",
		parentID: "P_02_1",
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
			컬러: "Green",
			나이: 15,
			적성: "요리",
			흥미: "",
			성향: "",
			성향_i: "",
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