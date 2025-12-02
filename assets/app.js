// /assets/app.js (ESM Router with default-export support + common.js usage)
import Common, { bus } from '/assets/common.js';

const appEl = document.querySelector('#app');
const BASE = location.origin;

const routes = {
  '/':        { id: 'home',          file: '/pages/home.html' },
  '/magazine':   { id: 'magazine',         file: '/pages/magazine.html' },
  '/my':     { id: 'my',           file: '/pages/my.html' },
  '/login': { id: 'login', file: '/pages/login.html' },
  '/signup': { id: 'signup',       file: '/pages/signup.html' },
  '/class':     { id: 'class',           file: '/pages/class.html' },
  '/detail':     { id: 'detail',           file: '/pages/detail.html' },
  '/event':     { id: 'event',           file: '/pages/event.html' },
  '/reserve':     { id: 'reserve',           file: '/pages/reserve.html' },
  '/payment':     { id: 'payment',           file: '/pages/payment.html' },
  '/check':     { id: 'check',           file: '/pages/check.html' },
  '/community':     { id: 'community',           file: '/pages/community.html' },
  '/cart':     { id: 'cart',           file: '/pages/cart.html' },
  '/cooking':     { id: 'cooking',           file: '/pages/cooking.html' },
  '/music':     { id: 'music',           file: '/pages/music.html' },
  '/handmade':     { id: 'handmade',           file: '/pages/handmade.html' },
  '/tarot':     { id: 'tarot',           file: '/pages/tarot.html' },
  '/activity':     { id: 'activity',           file: '/pages/activity.html' },

};

let current = { id: null, api: null };

function normalizePath(path) {
  if (!path || path === '' || path === '/index.html') return '/';
  return path;
}
function looksLikeFullHTML(text) {
  const t = text.slice(0, 256).toLowerCase();
  return t.includes('<!doctype') || (t.includes('<html') && t.includes('<body'));
}

function removePerPageAssets() {
  document.querySelectorAll('[data-page-asset]').forEach(el => el.remove());
}
function loadCSS(id) {
  return new Promise(resolve => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/assets/src/${id}.css`;
    link.setAttribute('data-page-asset', '');
    link.onload = () => resolve();
    link.onerror = () => resolve();
    document.head.appendChild(link);
  });
}
function getAPI(mod) {
  // default 객체(또는 클래스 인스턴스) 우선, 없으면 named API 사용
  return mod?.default ?? mod;
}

async function render() {
  const path = normalizePath(location.pathname);
  const route = routes[path] || routes['/404'];
  const url = BASE + route.file;

  try {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const html = await res.text();
    if (looksLikeFullHTML(html)) throw new Error('Got full HTML instead of fragment');

    // 이전 페이지 정리
    if (current.api && typeof current.api.dispose === 'function') {
      try { current.api.dispose(appEl, { Common, bus }); } catch (e) { console.warn('dispose error:', e); }
    }
    removePerPageAssets();

    // 새 조각 주입
    appEl.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 페이지 CSS 로드 후 JS 모듈 import
    await loadCSS(route.id);
    try {
      const mod = await import(`/assets/src/${route.id}.js?ts=${Date.now()}`);
      const api = getAPI(mod);
      current = { id: route.id, api };
      if (typeof api.init === 'function') api.init(appEl, { Common, bus });
    } catch (e) {
      current = { id: route.id, api: null };
      console.info(`No module for ${route.id} or failed to load.`, e?.message || e);
    }
  } catch (err) {
    console.error('[render error]', err);
    appEl.innerHTML = '<section class="page"><h1>연결 실패</h1><p class="notice">조각 또는 페이지 모듈을 불러오지 못했습니다. vercel.json 리라이트와 /pages, /assets/pages 폴더를 확인하세요.</p></section>';
  }
}

function onLinkClick(e) {
  const a = e.target.closest('a[data-link]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;
  e.preventDefault();
  history.pushState({}, '', href);
  render();
}

let booted = false;
function boot() {
  if (booted) return;
  booted = true;
  document.addEventListener('click', onLinkClick);
  window.addEventListener('popstate', render);
  render();
}
document.addEventListener('DOMContentLoaded', boot);