/* ARCANE · MINI-EVENTOS · LOADER EXTERNO V2
   Consulta versao.json sem cache e carrega uma release imutável do jsDelivr. */
(function (window, document) {
  'use strict';
  if (window.__ARCANE_MINI_EVENTOS_LOADER__) return;
  window.__ARCANE_MINI_EVENTOS_LOADER__ = true;

  var REPOSITORIO = 'carolssuism/arcane-mini-eventos';
  var VERSAO_RESERVA = 'v0.1.22';
  var TIMEOUT = 12000;
  var base = '';

  function descobrirVersao() {
    var ponteiro = 'https://raw.githubusercontent.com/' + REPOSITORIO + '/main/versao.json?t=' + Date.now();
    return fetch(ponteiro, { cache: 'no-store', credentials: 'omit' })
      .then(function (resposta) {
        if (!resposta.ok) throw new Error('Falha ao consultar versao.json: ' + resposta.status);
        return resposta.json();
      })
      .then(function (configuracao) {
        var versao = String(configuracao && configuracao.versao || '');
        return /^v\d+\.\d+\.\d+$/.test(versao) ? versao : VERSAO_RESERVA;
      })
      .catch(function () { return VERSAO_RESERVA; });
  }

  function url(arquivo) { return base + arquivo; }

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

  descobrirVersao()
    .then(function (versao) {
      base = 'https://cdn.jsdelivr.net/gh/' + REPOSITORIO + '@' + versao + '/';
      var css = carregarCSS('temas.css');
      return carregarJS('temas.js')
        .then(function () { return carregarJS('sistema.js'); })
        .then(function () { return css; });
    })
    .then(function () {
      document.documentElement.classList.add('arcane-mini-eventos-externo-pronto');
      window.dispatchEvent(new CustomEvent('arcane:minieventos:externo-pronto'));
    })
    .catch(function (erro) {
      document.documentElement.classList.add('arcane-mini-eventos-externo-falhou');
      if (window.console && console.error) console.error('[ARCANE Mini-eventos]', erro);
    });
})(window, document);
