const input = document.querySelector(".WhatSong");
const form = document.querySelector("form");
const inputArea = document.querySelector(".input_area");
const mArea2 = document.querySelector(".m_area2 .windows");

// 1. 검색 후 API 호출
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song`);
    const data = await response.json();
    showResults(data.results);
});

// 2. 검색 결과 보여주기
function showResults(results) {
    inputArea.innerHTML = ""; // 기존 목록 초기화
    results.forEach((track) => {
    const item = document.createElement("div");
    item.className = "track-item";
    item.innerHTML = `
        <img src="${track.artworkUrl100}" alt="앨범 커버">
        <div class="track-title">${track.trackName} - ${track.artistName}</div>
    `;
    item.addEventListener("click", () => {
        document.querySelectorAll(".track-item").forEach(el => el.classList.remove("selected"));
        item.classList.add("selected");
        showInMArea2(track);
    });
    inputArea.appendChild(item);
  });
}

// 3. 선택한 곡 정보 표시 + 재생
function showInMArea2(track) {
  mArea2.innerHTML = `
    <div class="windows_h">
      <p>Now Playlist</p>
    </div>
    <div class="track-display">
        <img src="${track.artworkUrl100}" class="album-art">
        <div class="Music">
            <h1>${track.trackName}</h1>
            <p>${track.artistName}</p>
            <audio controls id="audio-player" src="${track.previewUrl}"></audio>
        </div>
        
        <div class="progress-bar-bg">
            <div class="progress-bar-fill" id="bar-fill"></div>
        </div>
    </div>
  `;

  const audio = document.getElementById("audio-player");
  const barFill = document.getElementById("bar-fill");

  audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    barFill.style.width = percent + "%";
  });
}