"use strict";

const taskOrder = [
  "keep_quantity_partial_changes",
  "keep_quantity_full_changes",
  "decrease",
  "increase",
];

const selectedCaseIds = [
  "case14",
  "case16",
  "case11",
  "case12",
  "case01",
  "case03",
  "case05",
  "case08",
];

const displayCaseIds = Object.fromEntries(
  selectedCaseIds.map((caseId, index) => [
    caseId,
    `case${String(index + 1).padStart(2, "0")}`,
  ]),
);

const taskMeta = {
  keep_quantity_partial_changes: {
    short: "PSub",
    label: "Partial substitution",
    detail: "Replace one local lyric span while keeping its surrounding context.",
    index: "01",
  },
  keep_quantity_full_changes: {
    short: "FSub",
    label: "Full substitution",
    detail: "Replace every lexical syllable in the selected line.",
    index: "02",
  },
  decrease: {
    short: "Del",
    label: "Deletion",
    detail: "Remove a lyric span and compress the realization naturally.",
    index: "03",
  },
  increase: {
    short: "Ins",
    label: "Insertion",
    detail: "Insert new syllables while retaining the reference performance.",
    index: "04",
  },
};

const styleNames = {
  Breathy: "Breathy",
  Vibrato: "Vibrato",
  Mixed_Voice_and_Falsetto: "Mixed / falsetto",
  Glissando: "Glissando",
  Pharyngeal: "Pharyngeal",
};

const systemNames = {
  clasvs: "CLASVS",
  vevo2: "Vevo2",
  ying: "YingMusic-Singer-Plus",
  soulx: "SoulX-Singer",
  tcsinger: "TCSinger",
};

const systemKinds = {
  clasvs: "Ours",
  vevo2: "Discrete · autoregressive",
  ying: "Continuous · non-autoregressive",
  soulx: "Additional public system",
  tcsinger: "Score-conditioned baseline",
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatMetric(value) {
  return value == null ? "—" : Number(value).toFixed(3);
}

function normalizeAssetPath(value) {
  return `.${String(value).replace(/\.wav$/i, ".flac")}`;
}

function lyricDiff(source, target) {
  const a = Array.from(source);
  const b = Array.from(target);
  const dp = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0),
  );

  for (let i = a.length - 1; i >= 0; i -= 1) {
    for (let j = b.length - 1; j >= 0; j -= 1) {
      dp[i][j] =
        a[i] === b[j]
          ? dp[i + 1][j + 1] + 1
          : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const sourceTokens = [];
  const targetTokens = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      sourceTokens.push({ char: a[i], kind: "same" });
      targetTokens.push({ char: b[j], kind: "same" });
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      sourceTokens.push({ char: a[i], kind: "removed" });
      i += 1;
    } else {
      targetTokens.push({ char: b[j], kind: "added" });
      j += 1;
    }
  }

  while (i < a.length) {
    sourceTokens.push({ char: a[i], kind: "removed" });
    i += 1;
  }
  while (j < b.length) {
    targetTokens.push({ char: b[j], kind: "added" });
    j += 1;
  }

  return { sourceTokens, targetTokens };
}

function renderTokens(tokens) {
  return tokens
    .map(
      (token) =>
        `<mark class="${token.kind}">${escapeHtml(token.char)}</mark>`,
    )
    .join("");
}

function renderMetric(label, value) {
  return `
    <span class="metric-pill">
      <small>${label}</small>
      <strong>${formatMetric(value)}</strong>
    </span>
  `;
}

function renderCase(item) {
  const displayCaseId = displayCaseIds[item.caseId] || item.caseId;
  const diff = lyricDiff(item.lyricsSource, item.lyricsTarget);
  const task = taskMeta[item.taskType];
  const systems = item.models
    .map((model) => {
      const ours = model.system === "clasvs";
      const protocol =
        model.system === "tcsinger"
          ? '<p class="protocol-note">Automatic score extraction; no manual MIDI or alignment.</p>'
          : model.system === "soulx"
            ? '<p class="protocol-note">Original-song prompt; excluded from the paper’s common-input objective table.</p>'
            : "";

      return `
        <section class="system-card ${ours ? "system-card-ours" : ""}">
          <div class="system-heading">
            <div>
              <p>${escapeHtml(systemKinds[model.system] || "Comparison system")}</p>
              <h4>${escapeHtml(systemNames[model.system] || model.system)}</h4>
            </div>
            ${ours ? '<span class="ours-badge">OURS</span>' : ""}
          </div>
          <audio
            controls
            preload="none"
            aria-label="${escapeHtml(displayCaseId)} ${escapeHtml(systemNames[model.system] || model.system)}"
            src="${escapeHtml(normalizeAssetPath(model.audio))}"
          ></audio>
          <div class="clip-metrics">
            ${renderMetric("PER↓", model.metrics?.per)}
            ${renderMetric("FPC↑", model.metrics?.fpc)}
            ${renderMetric("SIM↑", model.metrics?.sim)}
          </div>
          ${protocol}
        </section>
      `;
    })
    .join("");

  return `
    <article class="demo-case" id="${escapeHtml(displayCaseId)}">
      <header class="case-header">
        <div>
          <span class="case-number">${escapeHtml(displayCaseId.replace("case", ""))}</span>
          <div>
            <p class="case-kicker">${task.short} · ${task.label}</p>
            <h3>${escapeHtml(item.song)}</h3>
          </div>
        </div>
        <div class="case-tags">
          <span>${item.singer.includes("Alto") ? "Alto" : "Tenor"}</span>
          <span>${escapeHtml(styleNames[item.style] || item.style)}</span>
        </div>
      </header>
      <div class="case-context">
        <div class="reference-block">
          <div class="reference-heading">
            <span>Reference singing</span>
            <small>melody, timing, singer &amp; expression to preserve</small>
          </div>
          <audio
            controls
            preload="none"
            aria-label="${escapeHtml(displayCaseId)} reference singing"
            src="${escapeHtml(normalizeAssetPath(item.referenceMelody))}"
          ></audio>
        </div>
        <div class="lyric-pair">
          <div class="lyric-line">
            <span>SOURCE</span>
            <p lang="zh-CN">${renderTokens(diff.sourceTokens)}</p>
          </div>
          <div class="lyric-line">
            <span>TARGET</span>
            <p lang="zh-CN">${renderTokens(diff.targetTokens)}</p>
          </div>
        </div>
      </div>
      <div class="systems-grid">${systems}</div>
    </article>
  `;
}

function renderCases(task = "keep_quantity_partial_changes") {
  const target = document.getElementById("case-list");
  const data = window.CLA_SVS_DEMO_DATA;

  if (!data || !Array.isArray(data.cases)) {
    target.innerHTML =
      '<p class="load-error">Offline audio manifest failed to load. Keep demo-data.js beside index.html.</p>';
    return;
  }

  const casesById = new Map(data.cases.map((item) => [item.caseId, item]));
  const visibleCases = selectedCaseIds
    .map((caseId) => casesById.get(caseId))
    .filter(Boolean);

  if (task !== "all") {
    target.innerHTML = visibleCases
      .filter((item) => item.taskType === task)
      .map(renderCase)
      .join("");
    return;
  }

  target.innerHTML = taskOrder
    .map((taskId) => {
      const meta = taskMeta[taskId];
      const cases = visibleCases
        .filter((item) => item.taskType === taskId)
        .map(renderCase)
        .join("");
      return `
        <section class="task-group">
          <header>
            <span>${meta.index}</span>
            <div>
              <p>${meta.short}</p>
              <h3>${meta.label}</h3>
            </div>
            <p>${meta.detail}</p>
          </header>
          ${cases}
        </section>
      `;
    })
    .join("");
}

function setupFilters() {
  const buttons = Array.from(document.querySelectorAll("[data-task]"));
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderCases(button.dataset.task);
    });
  });
}

function setupAudioExclusivity() {
  document.addEventListener(
    "play",
    (event) => {
      if (!(event.target instanceof HTMLAudioElement)) return;
      document.querySelectorAll("audio").forEach((audio) => {
        if (audio !== event.target && !audio.paused) audio.pause();
      });
    },
    true,
  );
}

function setupFigures() {
  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  const close = document.getElementById("lightbox-close");

  document.querySelectorAll("[data-lightbox]").forEach((button) => {
    button.addEventListener("click", () => {
      image.src = button.dataset.lightbox;
      image.alt = button.dataset.alt || "";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  const closeLightbox = () => {
    lightbox.hidden = true;
    image.removeAttribute("src");
    document.body.style.overflow = "";
  };

  close.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

function setupHeroSignal() {
  const target = document.getElementById("hero-signal");
  target.innerHTML = Array.from({ length: 46 }, (_, index) => {
    const height = 18 + ((index * 29) % 72);
    return `<i style="--bar:${height}%;--delay:${index * -0.04}s"></i>`;
  }).join("");
}

function prioritizeShowcases() {
  const hero = document.getElementById("top");
  const showcase = document.getElementById("real-world");
  if (!hero) return;
  if (showcase) {
    hero.insertAdjacentElement("afterend", showcase);
  }
}

prioritizeShowcases();

document.addEventListener("DOMContentLoaded", () => {
  setupHeroSignal();
  setupFilters();
  setupAudioExclusivity();
  setupFigures();
  renderCases();
});

document.querySelectorAll('[data-song]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('#real-world audio').forEach(audio => audio.pause());
    document.querySelectorAll('[data-song]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('.real-world-case').forEach(item => { item.hidden = item.id !== `song-${button.dataset.song}`; });
  });
});
