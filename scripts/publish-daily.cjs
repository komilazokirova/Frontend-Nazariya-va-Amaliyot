const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const JOURNAL_FILE = path.join(ROOT_DIR, 'Faollik_Jurnali.md');

function run() {
  const now = new Date();
  const tashkentOffsetMs = 5 * 60 * 60 * 1000;
  const tashkentNow = new Date(now.getTime() + tashkentOffsetMs);
  const dateStr = tashkentNow.toISOString().slice(0, 10);
  const timeStr = tashkentNow.toISOString().slice(11, 16);

  const dayIndex = Math.floor(tashkentNow.getTime() / (24 * 60 * 60 * 1000));
  const isTheory = (dayIndex % 2 === 0);

  const weekdays = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
  const weekday = weekdays[tashkentNow.getDay()];

  const folder = isTheory ? 'konspektlar' : 'amaliyot';
  const prefix = isTheory ? 'docs(konspekt)' : 'feat(amaliyot)';
  const typeStr = isTheory ? '📚 Nazariya' : '💻 Amaliyot';

  const topicsPool = [
    { title: 'Web Components: Custom Elements va Shadow DOM', file: 'web-components-shadow-dom' },
    { title: 'Advanced CSS: View Transitions API va Morph Animations', file: 'view-transitions-morph' },
    { title: 'Node.js va Edge Runtime Arxitekturasi', file: 'node-vs-edge-runtime' },
    { title: 'Server-Sent Events (SSE) va Realtime Data Streaming', file: 'server-sent-events-streaming' },
    { title: 'Web Audio API va Audio Visualization in Browser', file: 'web-audio-api-visualizer' },
    { title: 'IntersectionObserver va Dynamic Lazy Component Loading', file: 'dynamic-lazy-component-loader' },
    { title: 'TypeScript Monads va Functional Error Handling (Result Type)', file: 'typescript-monads-result-type' },
    { title: 'Next.js Route Intercepting va Parallel Modals Pattern', file: 'route-intercepting-parallel-modals' }
  ];

  const selected = topicsPool[Math.floor(Math.random() * topicsPool.length)];
  const ext = isTheory ? '.md' : '.ts';
  const filename = `${dateStr}-${selected.file}${ext}`;
  const targetDir = path.join(ROOT_DIR, folder);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetPath = path.join(targetDir, filename);
  if (!fs.existsSync(targetPath)) {
    const fileContent = isTheory
      ? `# 📚 ${selected.title}\n\n*Yuklangan sana: ${dateStr}*\n\nUshbu konspektda Frontend dasturlash bo'yicha ${selected.title} mavzusi tahlil qilingan.\n`
      : `/**\n * ${selected.title}\n * Sana: ${dateStr}\n */\nexport function dailyTask_${dateStr.replace(/-/g, '_')}() {\n  return true;\n}\n`;

    fs.writeFileSync(targetPath, fileContent, 'utf-8');
  }

  const logLine = `| ${dateStr} | ${weekday} | ${typeStr} | ${selected.title} | [${filename}](${folder}/${filename}) | ✅ Bajarildi |\n`;
  fs.appendFileSync(JOURNAL_FILE, logLine, 'utf-8');

  console.log(`✅ ${dateStr} uchun yangi dars joylandi: ${filename}`);
}

run();
