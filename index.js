const genres = [
    "퍼즐",
    "액션 어드벤처",
    "아케이드",
    "슈터",
    "플랫포머",
    "비주얼 노벨",
    "샌드박스",
    "로그라이크",
    "액션 RPG",
    "포인트 앤 클릭",
    "액션 로그라이크",
    "턴제 전략",
    "테이블탑",
    "교육",
    "연애 시뮬레이션",
    "JRPG",
    "걷기 시뮬레이션 ",
    "카드",
    "전략 RPG",
    "RTS",
    "보드",
    "타워 디펜스",
    "도시 건설",
    "자동차 시뮬레이션",
    "2D 격투",
    "3D 격투",
    "리듬",
    "농사 시뮬레이션",
    "E스포츠",
    "대전략",
    "우주 시뮬레이션",
    "배틀로얄",
    "오토배틀러",
    "4X",
    "MOBA",
    "상식 퀴즈",
]

function getRandomGenre() {
    const genre = genres[Math.floor(Math.random() * genres.length)]
    return genre
}

function fuseGenres() {
    const genre1 = getRandomGenre()
    const genre2 = getRandomGenre()
    return `${genre1} + ${genre2} 게임`
}

function buttonOnClick() {
    const genre = fuseGenres()
    document.getElementById("genre").innerText = genre
}