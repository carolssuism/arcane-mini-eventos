/* ARCANE · MINI-EVENTOS · LOADER EXTERNO V1
   Este é o único JavaScript que permanecerá no painel do Forumeiros.
   Antes da publicação, substitua a URL abaixo pela URL versionada do jsDelivr. */
(function (window, document) {
  'use strict';

  if (window.__ARCANE_MINI_EVENTOS_LOADER__) return;
  window.__ARCANE_MINI_EVENTOS_LOADER__ = true;

  var BASE = 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.1/';
  var TIMEOUT = 12000;

  function url(arquivo) {
    return BASE + arquivo;
  }

  function carregarCSS(arquivo) {
    return new Promise(function (resolve, reject) {
      var link = document.createElement('link');
      var timer = window.setTimeout(function () {
        link.onload = link.onerror = null;
        reject(new Error('Tempo excedido ao carregar ' + arquivo));
      }, TIMEOUT);
      link.rel = 'stylesheet';
      link.href = url(arquivo);
      link.setAttribute('data-arcane-mini-eventos', arquivo);
      link.onload = function () { window.clearTimeout(timer); resolve(); };
      link.onerror = function () { window.clearTimeout(timer); reject(new Error('Falha ao carregar ' + arquivo)); };
      (document.head || document.documentElement).appendChild(link);
    });
  }

  function carregarJS(arquivo) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      var timer = window.setTimeout(function () {
        script.onload = script.onerror = null;
        reject(new Error('Tempo excedido ao carregar ' + arquivo));
      }, TIMEOUT);
      script.src = url(arquivo);
      script.async = false;
      script.setAttribute('data-arcane-mini-eventos', arquivo);
      script.onload = function () { window.clearTimeout(timer); resolve(); };
      script.onerror = function () { window.clearTimeout(timer); reject(new Error('Falha ao carregar ' + arquivo)); };
      (document.head || document.documentElement).appendChild(script);
    });
  }

  var css = carregarCSS('temas.css');
  carregarJS('temas.js')
    .then(function () { return carregarJS('sistema.js'); })
    .then(function () { return css; })
    .then(function () {
      document.documentElement.classList.add('arcane-mini-eventos-externo-pronto');
      window.dispatchEvent(new CustomEvent('arcane:minieventos:externo-pronto'));
    })
    .catch(function (erro) {
      document.documentElement.classList.add('arcane-mini-eventos-externo-falhou');
      /* Falha segura: o fórum nativo permanece utilizável. */
      if (window.console && console.error) console.error('[ARCANE Mini-eventos]', erro);
    });
})(window, document);
