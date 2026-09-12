/* ARCANE · MINI-EVENTOS · SISTEMA EXTERNO · V0.1.5
   Motor V68 + Painel V14 + Mural V7. */
(function (window) {
  'use strict';
  if (window.__ARCANE_MINI_EVENTOS_SISTEMA_V1__) return;
  window.__ARCANE_MINI_EVENTOS_SISTEMA_V1__ = true;

/* ARCANE · MINI-EVENTOS · MOTOR UNIFICADO V68 · IDENTIDADE ATÔMICA DO NARRADOR · CSS FRACIONADO
   Eventos: Blecaute + Chuva de Estrelas + Tempestade Mágica + Baile de Máscaras
   Aplicação: em todas as páginas.
*/
(function () {
  'use strict';

  var EVENTOS = {
    'blecaute': {
      nome: 'Blecaute em Hogwarts',
      classe: 'blecaute',
      topico: '55',
      cor: '#79a9cc', cor2: '#9bc9e8', cor3: '#91a5b3',
      fundo: '#080c10', corpo: '#15181b', linha: '#315c7d', texto: '#d9dde0',
      cores: ['#527b9b', '#79a9cc', '#9bc9e8', '#a5adb3', '#e2e8eb'],
      etiqueta: 'Atualização da narração',
      padraoTitulo: 'A ESCURIDÃO SE MOVE',
      padraoSubtitulo: 'Uma nova mudança atravessa o castelo.',
      atualizacao: {
        etiqueta: 'Atualização da narração',
        imagem: 'https://i.pinimg.com/736x/bd/9b/81/bd9b810d14f523a857b8a456549e1042.jpg',
        posicao: 'center 48%'
      },
      visuais: [
        { valor: 'header', nome: 'Visual · Header' },
        { valor: 'lateral', nome: 'Visual · Lateral' }
      ],
      decoracoes: {
        superior: { imagem: 'https://i.imgur.com/UDF1ipN.png', largura: '380px', x: '-76px', y: '-116px', rotacao: '-90deg', opacidade: '.66', filtro: 'saturate(.76) brightness(.80)' },
        inferior: { imagem: 'https://i.imgur.com/UDF1ipN.png', largura: '340px', x: '-64px', y: '-112px', rotacao: '-90deg', opacidade: '.55', filtro: 'saturate(.76) brightness(.82)' }
      },
      imersao: { ativo: true, deslocamentoInicio: 10 }
    },
    'chuva-estrelas': {
      nome: 'Chuva de Estrelas Cadentes',
      classe: 'chuva',
      cor: '#c0a3ef', cor2: '#ddcdf7', cor3: '#e6c77a',
      fundo: '#0d0913', corpo: '#17141b', linha: '#685084', texto: '#ded9e5',
      cores: ['#685084', '#c0a3ef', '#ddcdf7', '#c9ae76', '#ded9e5'],
      etiqueta: 'Sob o céu encantado',
      padraoTitulo: 'O CÉU COMEÇOU A CAIR',
      padraoSubtitulo: 'Uma nova mudança atravessa a noite.',
      atualizacao: {
        etiqueta: 'Atualização da narração',
        imagem: 'https://i.pinimg.com/1200x/4c/2f/a1/4c2fa156ce3277d353a8ebf6c6c5af70.jpg',
        posicao: 'center 48%'
        /* detalhe opcional: { imagem/gif/icone, largura, altura, topo, direita, opacidade } */
      },
      visuais: [
        { valor: 'header', nome: 'Visual · Header' },
        { valor: 'celeste', nome: 'Visual · Estrelinhas' }
      ],
      /* Troque somente as URLs abaixo para mudar os PNGs deste tema. */
      decoracoes: {
        superior: { imagem: 'https://i.imgur.com/UDF1ipN.png', largura: '380px', x: '-76px', y: '-116px', rotacao: '-90deg', opacidade: '.72', filtro: 'hue-rotate(55deg) saturate(.92) brightness(1.14)' },
        inferior: { imagem: 'https://i.imgur.com/UDF1ipN.png', largura: '340px', x: '-64px', y: '-112px', rotacao: '-90deg', opacidade: '.60', filtro: 'hue-rotate(55deg) saturate(.88) brightness(1.12)' }
      },
      imersao: { ativo: true, deslocamentoInicio: 10 }
    },
    'baile-mascaras': {
      nome: 'Baile de Máscaras', classe: 'baile', topico: '66',
      cor: '#c9c3b5', cor2: '#eee9df', cor3: '#8f897d',
      fundo: '#080908', corpo: '#101110', linha: '#5e5a52', texto: '#dedbd3',
      cores: ['#777269', '#c9c3b5', '#eee9df', '#8f897d', '#dedbd3'],
      etiqueta: 'Os sinos ainda não tocaram', padraoTitulo: 'A ÚLTIMA DANÇA',
      padraoSubtitulo: 'Toda máscara guarda uma verdade.',
      atualizacao: { etiqueta: 'Atualização da narração', imagem: 'https://i.pinimg.com/1200x/aa/f1/77/aaf177566f87a33c76660484844f707c.jpg', posicao: 'center 48%' },
      visuais: [{ valor: 'header', nome: 'Visual · Header' }, { valor: 'lateral', nome: 'Visual · Lateral' }],
      decoracoes: {
        superior: { imagem: 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.9/corvos-romas.png', largura: '350px', x: '-94px', y: '-94px', rotacao: '0deg', opacidade: '.62', filtro: 'grayscale(1) saturate(.12) brightness(.76) contrast(1.12)' },
        inferior: { imagem: 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.9/corvos-romas.png', largura: '350px', x: '-88px', y: '-82px', rotacao: '0deg', opacidade: '.58', filtro: 'grayscale(1) saturate(.12) brightness(.72) contrast(1.12)' }
      },
      imersao: { ativo: true, deslocamentoInicio: 10 }
    },
    'falha-coletiva': {
      nome: 'Falha Coletiva de Magia', classe: 'falha', topico: '67',
      cor: '#58f5f0', cor2: '#9dffc8', cor3: '#d6bc7a',
      fundo: '#06090a', corpo: '#080c0b', linha: '#27483f', texto: '#d6dfdd',
      cores: ['#3b8f86', '#58f5f0', '#9dffc8', '#d6bc7a', '#eefcfb'],
      etiqueta: 'A magia deixou de responder', padraoTitulo: 'A RUPTURA SE ESPALHA',
      padraoSubtitulo: 'O impossível perdeu a forma.',
      atualizacao: {
        etiqueta: 'Atualização da narração',
        imagem: 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.23/falha-alucinogena-header.png',
        posicao: 'center 50%'
      },
      visuais: [{ valor: 'header', nome: 'Visual · Header' }, { valor: 'lateral', nome: 'Visual · Lateral' }],
      decoracoes: {
        superior: { imagem: 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.23/poeira-magica.png', largura: '285px', x: '-124px', y: '-17px', rotacao: '67deg', opacidade: '.59', filtro: 'hue-rotate(76deg) saturate(1.58) brightness(1.04) drop-shadow(0 0 6px rgba(121,255,215,.58)) drop-shadow(0 0 14px rgba(74,208,174,.3))' },
        inferior: { imagem: 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.23/poeira-magica.png', largura: '285px', x: '-111px', y: '-23px', rotacao: '61deg', opacidade: '.59', filtro: 'hue-rotate(76deg) saturate(1.58) brightness(1.04) drop-shadow(0 0 6px rgba(121,255,215,.58)) drop-shadow(0 0 14px rgba(74,208,174,.3))' }
      },
      imersao: { ativo: true, deslocamentoInicio: 10 }
    },
    'tempestade-magica': {
      nome: 'Tempestade Mágica',
      classe: 'tempestade',
      cor: '#9d63ff', cor2: '#c9a7ff', cor3: '#d8d7e2',
      fundo: '#07070d', corpo: '#14151a', linha: '#6c4d9e', texto: '#dddde3',
      cores: ['#7043a8', '#9d63ff', '#c9a7ff', '#aaa6b5', '#f0eef5'],
      etiqueta: 'Instabilidade em andamento',
      padraoTitulo: 'A MAGIA TROVEJA',
      padraoSubtitulo: 'O próximo clarão não veio do céu.',
      atualizacao: {
        etiqueta: 'Atualização da narração',
        imagem: 'https://i.pinimg.com/736x/c6/bf/46/c6bf46cf522fdbf26329bd0895bbadc0.jpg',
        posicao: 'center 48%'
      },
      visuais: [
        { valor: 'header', nome: 'Visual · Header' },
        { valor: 'lateral', nome: 'Visual · Lateral' }
      ],
      /* PNG provisório: pode ser substituído sem alterar nenhuma função. */
      decoracoes: {
        superior: { imagem: 'https://i.imgur.com/UDF1ipN.png', largura: '380px', x: '-76px', y: '-116px', rotacao: '-90deg', opacidade: '.66', filtro: 'hue-rotate(55deg) saturate(.95) brightness(1.15)' },
        inferior: { imagem: 'https://i.imgur.com/UDF1ipN.png', largura: '340px', x: '-64px', y: '-112px', rotacao: '-90deg', opacidade: '.55', filtro: 'hue-rotate(55deg) saturate(.95) brightness(1.12)' }
      },
      imersao: { ativo: true, deslocamentoInicio: 10 }
    }
  };

  /*
     ADORNOS EXTERNOS DOS EVENTOS
     As posições são calculadas em relação à área das postagens. Para trocar
     a arte futuramente, basta alterar imagem, largura, opacidade ou filtro.
  */
  var DECORACOES_PAGINA = {
    'chuva-estrelas': {
      superior: {
        imagem: 'https://i.imgur.com/QfInJtj.png', largura: 360, opacidade: .72,
        filtro: 'hue-rotate(55deg) saturate(.9) brightness(.86)',
        deslocamentoX: -330, deslocamentoY: 18, transformacao: 'translate(30%,-19%)'
      },
      lateral: {
        imagem: 'https://i.imgur.com/UqTfoT5.png', largura: 172, opacidade: .88,
        filtro: 'hue-rotate(55deg) saturate(.9) brightness(.9)',
        deslocamentoX: -4, deslocamentoRankY: 42, proporcaoY: .72, limiteY: 650,
        transformacao: 'translate(-36%,-50%) rotate(-7deg)'
      }
    },
    'baile-mascaras': {
      superior: {
        imagem: 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.9/borboleta-joia-negra.png', largura: 300, opacidade: .76,
        filtro: 'grayscale(1) saturate(.12) brightness(.78) contrast(1.12)',
        deslocamentoX: -270, deslocamentoY: 10, transformacao: 'translate(30%,-16%) rotate(-4deg)'
      },
      lateral: {
        imagem: 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.9/mariposa-caveira.png', largura: 215, opacidade: .67,
        filtro: 'grayscale(1) saturate(.12) brightness(.84) contrast(1.1)',
        deslocamentoX: 20, deslocamentoRankY: 24, proporcaoY: .72, limiteY: 650,
        transformacao: 'translate(-32%,-50%) rotate(-8deg)'
      }
    },
    'falha-coletiva': {
      superior: {
        imagem: 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.23/borboletas-luminosas-trio-verde.png', largura: 345, opacidade: .92,
        filtro: 'brightness(.94) contrast(1.04) drop-shadow(-1px 0 rgba(57,246,238,.25)) drop-shadow(1px 0 rgba(157,255,200,.18)) drop-shadow(0 0 5px rgba(74,208,174,.24))',
        deslocamentoX: -175, deslocamentoY: 21, transformacao: 'scaleX(-1) rotate(4deg)'
      },
      lateral: {
        imagem: 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.23/borboletas-luminosas-trio-verde.png', largura: 210, opacidade: .92,
        filtro: 'brightness(.94) contrast(1.04) drop-shadow(-1px 0 rgba(57,246,238,.25)) drop-shadow(1px 0 rgba(157,255,200,.18)) drop-shadow(0 0 5px rgba(74,208,174,.24))',
        deslocamentoX: -71, deslocamentoRankY: -88, proporcaoY: .72, limiteY: 650,
        transformacao: 'rotate(-8deg)'
      }
    },
    'tempestade-magica': {
      superior: {
        imagem: 'https://i.imgur.com/QfInJtj.png', largura: 360, opacidade: .7,
        filtro: 'hue-rotate(58deg) saturate(.92) brightness(.78)',
        deslocamentoX: -330, deslocamentoY: 18, transformacao: 'translate(30%,-19%)'
      },
      lateral: {
        imagem: 'https://i.imgur.com/UqTfoT5.png', largura: 172, opacidade: .86,
        filtro: 'hue-rotate(58deg) saturate(.92) brightness(.84)',
        deslocamentoX: -4, deslocamentoRankY: 42, proporcaoY: .72, limiteY: 650,
        transformacao: 'translate(-36%,-50%) rotate(-7deg)'
      }
    },
    blecaute: {
      superior: {
        imagem: 'https://i.imgur.com/QfInJtj.png',
        largura: 360,
        opacidade: .72,
        filtro: 'saturate(.76) brightness(.72)',
        deslocamentoX: -330,
        deslocamentoY: 18,
        transformacao: 'translate(30%,-19%)'
      },
      lateral: {
        imagem: 'https://i.imgur.com/UqTfoT5.png',
        largura: 172,
        opacidade: .9,
        filtro: 'saturate(.76) brightness(.82)',
        deslocamentoX: -4,
        deslocamentoRankY: 42,
        proporcaoY: .72,
        limiteY: 650,
        transformacao: 'translate(-36%,-50%) rotate(-7deg)'
      }
    }
  };

  var U1 = !!(window._userdata && String(window._userdata.user_id) === '1');
  var CHAVE_LARGURA = 'arcaneMiniEventoLargura';
  var CHAVE_VISUAL = 'arcaneMiniEventoVisual';
  var CLASSE_IMERSAO = 'arcane-me-imersao-ativo';
  var CLASSE_IMERSAO_OCULTO = 'arcane-me-imersao-oculto';
  var CLASSE_IMERSAO_RODAPE = 'arcane-me-imersao-rodape';
  var CLASSE_IMERSAO_ABERTURA = 'arcane-me-imersao-abertura';
  var ID_IMERSAO_CSS = 'arcane-me-imersao-css';
  var imersaoPosicionada = false;

  function dividirCSS(conteudo, limite) {
    var regras = [], inicio = 0, nivel = 0, aspas = '', escape = false;
    conteudo = String(conteudo || '');
    for (var i = 0; i < conteudo.length; i++) {
      var caractere = conteudo.charAt(i);
      if (escape) { escape = false; continue; }
      if (caractere === '\\') { escape = true; continue; }
      if (aspas) { if (caractere === aspas) aspas = ''; continue; }
      if (caractere === '"' || caractere === "'") { aspas = caractere; continue; }
      if (caractere === '{') nivel++;
      if (caractere === '}') {
        nivel--;
        if (nivel === 0) { regras.push(conteudo.slice(inicio, i + 1)); inicio = i + 1; }
      }
    }
    if (inicio < conteudo.length) regras.push(conteudo.slice(inicio));
    var partes = [], atual = '';
    regras.forEach(function (regra) {
      if (atual && atual.length + regra.length > limite) { partes.push(atual); atual = ''; }
      atual += regra;
    });
    if (atual) partes.push(atual);
    return partes;
  }

  function instalarCSSSeguro(id, conteudo) {
    var cabeca = document.head || document.documentElement;
    Array.prototype.forEach.call(
      document.querySelectorAll('#' + id + ',[id^="' + id + '-parte-"]'),
      function (item) { if (item.parentNode) item.parentNode.removeChild(item); }
    );
    var marcador = document.createElement('meta');
    marcador.id = id;
    marcador.setAttribute('data-arcane-css-partes', 'true');
    cabeca.appendChild(marcador);
    dividirCSS(conteudo, 2400).forEach(function (parte, indice) {
      var folha = document.createElement('style');
      folha.id = id + '-parte-' + indice;
      folha.textContent = parte;
      cabeca.appendChild(folha);
    });
  }

  function filhoDiretoDe(ancestral, elemento) {
    var atual = elemento;
    while (atual && atual.parentElement !== ancestral) atual = atual.parentElement;
    return atual && atual.parentElement === ancestral ? atual : null;
  }

  function ocultarBlocoImersao(elemento) {
    if (elemento && elemento.classList) elemento.classList.add(CLASSE_IMERSAO_OCULTO);
  }

  function esconderBlocosAntesDaAbertura(main, postagem) {
    if (!main || !postagem) return;
    var ponto = filhoDiretoDe(main, postagem);
    if (!ponto) return;
    var encontrou = false;
    Array.prototype.forEach.call(main.children, function (item) {
      if (item === ponto) { encontrou = true; return; }
      if (encontrou) return;
      /* Scripts não ocupam espaço, mas podem permanecer intactos para o fórum. */
      if (item.tagName && item.tagName.toLowerCase() === 'script') return;
      /* A barra superior faz parte da moldura desejada; as setas nativas ficam ocultas. */
      if (item.classList && item.classList.contains('topic-actions')) return;
      ocultarBlocoImersao(item);
    });
  }

  function esconderBlocosDepoisDoRodape(main, postagem) {
    if (!main || !postagem) return;
    var acoes = Array.prototype.filter.call(main.querySelectorAll('.topic-actions'), function (item) {
      return item.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || 0) >
        postagem.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || 0);
    });
    if (!acoes.length) return;
    var rodape = acoes[acoes.length - 1];
    var ponto = filhoDiretoDe(main, rodape);
    if (!ponto) return;
    rodape.classList.add(CLASSE_IMERSAO_RODAPE);
    var encontrou = false;
    Array.prototype.forEach.call(main.children, function (item) {
      if (item === ponto) { encontrou = true; return; }
      if (!encontrou || (item.tagName && item.tagName.toLowerCase() === 'script')) return;
      ocultarBlocoImersao(item);
    });
  }

  function instalarCSSImersao(e) {
    if (document.getElementById(ID_IMERSAO_CSS)) return;
    instalarCSSSeguro(ID_IMERSAO_CSS, [
      'html.' + CLASSE_IMERSAO + ' body{overflow-x:hidden!important}',
      'html.' + CLASSE_IMERSAO + ' .' + CLASSE_IMERSAO_OCULTO + '{display:none!important}',
      'html.' + CLASSE_IMERSAO + ' #rheader,html.' + CLASSE_IMERSAO + ' #rmural,html.' + CLASSE_IMERSAO + ' .arcane-links-rodape,html.' + CLASSE_IMERSAO + ' #page-footer>.navbar,html.' + CLASSE_IMERSAO + ' #page-footer>.copyright,html.' + CLASSE_IMERSAO + ' #arcane-chatbox-event-trigger,html.' + CLASSE_IMERSAO + ' #arcane-evento-banner,html.' + CLASSE_IMERSAO + ' #page-header{display:none!important}',
      'html.' + CLASSE_IMERSAO + ' #main-content .left-box{display:none!important}',
      'html.' + CLASSE_IMERSAO + ' #wrap{border:0!important;background:transparent!important}',
      'html.' + CLASSE_IMERSAO + ' #container{box-sizing:border-box!important;border:1px solid #313131!important;background:rgba(0,0,0,.44)!important}',
      /* Repõe no cabeçalho da abertura a mesma borda fina usada na base do cabeçalho nativo. */
      'html.' + CLASSE_IMERSAO + ' .' + CLASSE_IMERSAO_ABERTURA + ' #rpost-header{border-top:1px solid #313131!important}',
      'html.' + CLASSE_IMERSAO + ' .' + CLASSE_IMERSAO_ABERTURA + '{margin-top:10px!important}',
      /* O footer inferior permanece com as cores nativas do fórum. */
      'html.' + CLASSE_IMERSAO + ' .' + CLASSE_IMERSAO_RODAPE + '{box-sizing:border-box!important}'
    ].join(''));
  }

  function encontrarAlvoInicioImersao(main, postagem) {
    if (!main || !postagem) return postagem;
    var topoPostagem = postagem.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || 0);
    var acoes = Array.prototype.filter.call(main.querySelectorAll('.topic-actions'), function (item) {
      var topoAcao = item.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || 0);
      return topoAcao < topoPostagem;
    });
    return acoes.length ? acoes[0] : postagem;
  }

  function posicionarInicioImersao(postagem, e) {
    if (imersaoPosicionada || !postagem || !e || !e.config.imersao) return;
    imersaoPosicionada = true;
    var deslocamento = Number(e.config.imersao.deslocamentoInicio) || 0;
    function posicionar() {
      var caixa = postagem.getBoundingClientRect();
      var rolagem = window.pageYOffset || document.documentElement.scrollTop || 0;
      window.scrollTo(0, Math.max(0, Math.round(caixa.top + rolagem - deslocamento)));
    }
    posicionar();
    window.requestAnimationFrame(posicionar);
    window.setTimeout(posicionar, 80);
    window.setTimeout(posicionar, 450);
    window.setTimeout(posicionar, 1000);
    window.addEventListener('load', posicionar, { once: true });
  }

  function aplicarModoImersivo(e) {
    if (!e || !e.config || !e.config.imersao || !e.config.imersao.ativo) return;
    var marcador = e.marcador || document.querySelector('.arcane-mini-evento[data-evento="' + e.id + '"]');
    var postagem = marcador && marcador.closest('.post');
    var main = postagem && (postagem.closest('#main-content') || document.querySelector('#main-content'));
    if (!postagem || !main) return;

    document.documentElement.classList.add(CLASSE_IMERSAO, CLASSE_IMERSAO + '-' + e.id);
    postagem.classList.add(CLASSE_IMERSAO_ABERTURA);
    instalarCSSImersao(e);
    esconderBlocosAntesDaAbertura(main, postagem);
    esconderBlocosDepoisDoRodape(main, postagem);
    posicionarInicioImersao(encontrarAlvoInicioImersao(main, postagem), e);
  }

  function encontrarDecoracaoPagina() {
    var marcadorMotor = document.querySelector('.arcane-mini-evento[data-evento],#arcane-baile-preview,.arcane-evento-estrelas,.arcane-evento-tempestade');
    var idMotor = marcadorMotor && marcadorMotor.getAttribute('data-evento');
    if (!idMotor && marcadorMotor) {
      if (marcadorMotor.classList.contains('arcane-evento-estrelas')) idMotor = 'chuva-estrelas';
      if (marcadorMotor.classList.contains('arcane-evento-tempestade')) idMotor = 'tempestade-magica';
      if (marcadorMotor.id === 'arcane-baile-preview') idMotor = 'baile-mascaras';
    }
    if (DECORACOES_PAGINA[idMotor]) return { id: idMotor, config: DECORACOES_PAGINA[idMotor], marcador: marcadorMotor };
    var ehBlecaute = /(?:^|\/)t55(?:-|$)/i.test(location.pathname) ||
      !!document.querySelector('.arcane-mini-evento[data-evento="blecaute"],.arcane-evento-blecaute,#arcane-blecaute-abertura,.arcane-evento-chave');
    if (!ehBlecaute) return null;
    return {
      id: 'blecaute',
      config: DECORACOES_PAGINA.blecaute,
      marcador: document.querySelector('.arcane-mini-evento[data-evento="blecaute"],.arcane-evento-blecaute,#arcane-blecaute-abertura,.arcane-evento-chave')
    };
  }

  function aplicarDecoracoesPagina() {
    var encontrado = encontrarDecoracaoPagina();
    if (!encontrado || document.getElementById('arcane-me-decoracao-pagina')) return;
    var config = encontrado.config;

    /* O motor unificado substitui integralmente o antigo módulo do Blecaute. */
    Array.prototype.forEach.call(
      document.querySelectorAll('#arcane-blecaute-decoracao,#arcane-blecaute-decoracao-css'),
      function (item) { if (item.parentNode) item.parentNode.removeChild(item); }
    );

    var marcador = encontrado.marcador;
    var primeiraPostagem = marcador && marcador.closest('.post');
    if (!primeiraPostagem) primeiraPostagem = document.querySelector('.post');
    if (!primeiraPostagem) return;

    var camada = document.createElement('div');
    camada.id = 'arcane-me-decoracao-pagina';
    camada.setAttribute('aria-hidden', 'true');
    camada.innerHTML = '<img class="arcane-me-adorno arcane-me-adorno-superior" alt=""><img class="arcane-me-adorno arcane-me-adorno-lateral" alt="">';

    var superior = camada.querySelector('.arcane-me-adorno-superior');
    var lateral = camada.querySelector('.arcane-me-adorno-lateral');
    superior.src = config.superior.imagem;
    lateral.src = config.lateral.imagem;

    var estilo = document.createElement('style');
    estilo.id = 'arcane-me-decoracao-pagina-css';
    estilo.textContent = [
      '#arcane-blecaute-decoracao{display:none!important}',
      '#arcane-me-decoracao-pagina{position:absolute!important;inset:0 auto auto 0!important;width:100%!important;z-index:90!important;overflow:hidden!important;pointer-events:none!important}',
      '#arcane-me-decoracao-pagina .arcane-me-adorno{position:absolute!important;display:block!important;height:auto!important;max-width:none!important;visibility:visible!important;pointer-events:none!important;user-select:none!important}',
      '#arcane-me-decoracao-pagina .arcane-me-adorno-superior{width:' + config.superior.largura + 'px!important;opacity:' + config.superior.opacidade + '!important;filter:' + config.superior.filtro + '!important;transform:' + config.superior.transformacao + '!important}',
      '#arcane-me-decoracao-pagina .arcane-me-adorno-lateral{width:' + config.lateral.largura + 'px!important;opacity:' + config.lateral.opacidade + '!important;filter:' + config.lateral.filtro + '!important;transform:' + config.lateral.transformacao + '!important}',
      '@media(max-width:1050px){#arcane-me-decoracao-pagina .arcane-me-adorno-superior{width:270px!important;opacity:.48!important}#arcane-me-decoracao-pagina .arcane-me-adorno-lateral{display:none!important}}',
      '@media(max-width:700px){#arcane-me-decoracao-pagina{display:none!important}}'
    ].join('');

    (document.head || document.documentElement).appendChild(estilo);
    document.body.appendChild(camada);

    function posicionarDecoracoes() {
      var rolagemX = window.pageXOffset || document.documentElement.scrollLeft || 0;
      var rolagemY = window.pageYOffset || document.documentElement.scrollTop || 0;
      var inicio = primeiraPostagem.getBoundingClientRect();
      var rank = primeiraPostagem.querySelector('.rrank');
      var caixaRank = rank && rank.getBoundingClientRect();
      camada.style.height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) + 'px';
      superior.style.left = Math.round(inicio.right + rolagemX + config.superior.deslocamentoX) + 'px';
      superior.style.top = Math.round(inicio.top + rolagemY + config.superior.deslocamentoY) + 'px';
      lateral.style.left = Math.round(inicio.left + rolagemX + config.lateral.deslocamentoX) + 'px';
      /*
         O rank “Narração” é a âncora visual estável. A altura do conteúdo pode
         variar muito entre os eventos e não deve mais empurrar o morcego.
      */
      lateral.style.top = Math.round(
        caixaRank
          ? caixaRank.top + rolagemY + (config.lateral.deslocamentoRankY || 0)
          : inicio.top + rolagemY + Math.min(inicio.height * config.lateral.proporcaoY, config.lateral.limiteY)
      ) + 'px';
    }

    var quadroPendente = 0;
    function agendarPosicao() {
      if (quadroPendente) cancelAnimationFrame(quadroPendente);
      quadroPendente = requestAnimationFrame(posicionarDecoracoes);
    }
    posicionarDecoracoes();
    window.addEventListener('resize', agendarPosicao, { passive: true });
    window.addEventListener('load', agendarPosicao, { once: true });
    window.setTimeout(agendarPosicao, 900);
  }

  function encontrarEvento() {
    var parametros = new URLSearchParams(location.search || '');
    var criandoTopico = parametros.get('mode') === 'newtopic' || !!document.querySelector('form[name="post"] input[name="mode"][value="newtopic"]');
    if (criandoTopico) {
      try { sessionStorage.removeItem('arcaneMiniEventoAtual'); } catch (erro) {}
      return null;
    }
    var marcador = document.querySelector('.arcane-mini-evento[data-evento],#arcane-baile-preview,.arcane-evento-estrelas,.arcane-evento-tempestade,.arcane-evento-blecaute,#arcane-blecaute-abertura');
    var idMarcador = marcador && marcador.getAttribute('data-evento');
    if (!idMarcador && marcador) {
      if (marcador.classList.contains('arcane-evento-estrelas')) idMarcador = 'chuva-estrelas';
      if (marcador.classList.contains('arcane-evento-tempestade')) idMarcador = 'tempestade-magica';
      if (marcador.classList.contains('arcane-evento-blecaute') || marcador.id === 'arcane-blecaute-abertura') idMarcador = 'blecaute';
      if (marcador.id === 'arcane-baile-preview') idMarcador = 'baile-mascaras';
    }
    if (marcador && EVENTOS[idMarcador]) {
      try { sessionStorage.setItem('arcaneMiniEventoAtual', idMarcador); } catch (erro) {}
      return { id: idMarcador, config: EVENTOS[idMarcador], marcador: marcador };
    }
    var mensagem = document.querySelector('textarea[name="message"]');
    var valor = mensagem ? mensagem.value : '';
    var achado = valor.match(/data-evento=["'](blecaute|chuva-estrelas|tempestade-magica|baile-mascaras|falha-coletiva)["']/i);
    if (achado) return { id: achado[1].toLowerCase(), config: EVENTOS[achado[1].toLowerCase()], marcador: null };
    if (/arcane-blecaute-(?:rp|atualizacao)|<texto-(?:blecaute|atualizacao)>/i.test(valor)) return { id: 'blecaute', config: EVENTOS.blecaute, marcador: null };
    if (/arcane-baile-preview|arcane-me-(?:rp|update)[^>]*\bbaile\b/i.test(valor)) return { id: 'baile-mascaras', config: EVENTOS['baile-mascaras'], marcador: null };
    var campoTopico = document.querySelector('form#quick_reply input[name="t"],form[name="post"] input[name="t"]');
    if ((campoTopico && campoTopico.value === '55') || /(?:^|\/)t55(?:-|$)/i.test(location.pathname)) return { id: 'blecaute', config: EVENTOS.blecaute, marcador: marcador || null };
    if ((campoTopico && campoTopico.value === '66') || /(?:^|\/)t66(?:-|$)/i.test(location.pathname)) return { id: 'baile-mascaras', config: EVENTOS['baile-mascaras'], marcador: marcador || null };
    if ((campoTopico && campoTopico.value === '67') || /(?:^|\/)t67(?:-|$)/i.test(location.pathname)) return { id: 'falha-coletiva', config: EVENTOS['falha-coletiva'], marcador: marcador || null };
    if (/\/post(?:$|[?#])/i.test(location.pathname)) {
      try {
        var lembrado = sessionStorage.getItem('arcaneMiniEventoAtual');
        if (EVENTOS[lembrado]) return { id: lembrado, config: EVENTOS[lembrado], marcador: null };
      } catch (erro) {}
    }
    if (/(?:^|\/)t\d+(?:-|$)/i.test(location.pathname)) {
      try { sessionStorage.removeItem('arcaneMiniEventoAtual'); } catch (erro) {}
    }
    return null;
  }

  function aplicarNarracao(e) {
    var posts = document.querySelectorAll('.post');
    Array.prototype.forEach.call(posts, function (post) {
      var autor = post.querySelector('#rpost-header .poster-name>a[href="/u1"],.postprofile .avatar-container>a[href="/u1"]');
      if (!autor) return;
      post.classList.add('arcane-me-post-narracao', 'arcane-me-narracao-' + e.config.classe);
      var nome = post.querySelector('#rpost-header .poster-name>a');
      if (nome) {
        nome.textContent = 'Narração';
        nome.removeAttribute('href');
        nome.removeAttribute('target');
        nome.removeAttribute('onclick');
        nome.setAttribute('aria-label', 'Narração');
        nome.setAttribute('tabindex', '-1');
      }
      var rank = post.querySelector('.rrank>div'); if (rank) rank.textContent = 'Narração';
      var linkAvatar = post.querySelector('.postprofile>.avatar-container>a');
      if (linkAvatar) {
        linkAvatar.removeAttribute('href');
        linkAvatar.removeAttribute('target');
        linkAvatar.removeAttribute('onclick');
        linkAvatar.setAttribute('aria-label', 'Avatar da Narração');
        linkAvatar.setAttribute('tabindex', '-1');
        linkAvatar.style.cursor = 'default';
      }
      var avatar = post.querySelector('.postprofile>.avatar-container>a>img,.postprofile>.avatar-container>img');
      if (avatar) {
        avatar.removeAttribute('srcset');
        avatar.alt = 'Narração';
        avatar.src = 'https://i.imgur.com/0PrYcPi.png';
        avatar.style.setProperty('display', 'block', 'important');
        avatar.style.setProperty('width', '250px', 'important');
        avatar.style.setProperty('height', '400px', 'important');
        avatar.style.setProperty('max-width', 'none', 'important');
        avatar.style.setProperty('max-height', 'none', 'important');
        avatar.style.setProperty('object-fit', 'cover', 'important');
        avatar.style.setProperty('object-position', 'center', 'important');
      }
      if (linkAvatar) {
        linkAvatar.style.setProperty('display', 'block', 'important');
        linkAvatar.style.setProperty('width', '250px', 'important');
        linkAvatar.style.setProperty('height', '400px', 'important');
        linkAvatar.style.setProperty('margin', '20px auto 0', 'important');
        linkAvatar.style.setProperty('overflow', 'hidden', 'important');
      }
      if (e.id === 'chuva-estrelas') {
        var alvosEstrelas = [post.querySelector('#rpost-header'), post.querySelector('.rrank')];
        alvosEstrelas.forEach(function (alvo) {
          if (!alvo || alvo.querySelector('.arcane-me-narracao-estrelas')) return;
          var estrelas = document.createElement('span');
          estrelas.className = 'arcane-me-narracao-estrelas';
          estrelas.setAttribute('aria-hidden', 'true');
          estrelas.innerHTML = '<i></i>'.repeat(20);
          alvo.appendChild(estrelas);
        });
      }
    });
    instalarCSSSeguro('arcane-me-narrador-css', '.arcane-me-post-narracao .avatar-container #miniprofile{display:none!important}.arcane-me-post-narracao #rpost-header .poster-name>a{cursor:default!important}.arcane-me-narracao-chuva #rpost-header .poster-name>a{position:relative;z-index:21;color:#c0a3ef!important;text-shadow:0 0 10px rgba(192,163,239,.16)!important}.arcane-me-narracao-chuva #rpost-header:before,.arcane-me-narracao-chuva>.inner>.postprofile>.rrank:before{background-color:#685084!important}.arcane-me-narracao-chuva>.inner>.postprofile>.rrank>div{position:relative;z-index:21;color:#ddcdf7!important}.arcane-me-narracao-chuva #rpost-header,.arcane-me-narracao-chuva .rrank{position:relative!important;overflow:hidden!important}.arcane-me-narracao-estrelas{position:absolute!important;inset:0!important;z-index:20!important;display:block!important;overflow:hidden!important;pointer-events:none!important;mix-blend-mode:screen!important;opacity:1!important}.arcane-me-narracao-estrelas i{position:absolute!important;display:block!important;width:8px!important;height:8px!important;background:#ddcdf7!important;clip-path:polygon(50% 0,61% 38%,100% 50%,61% 62%,50% 100%,39% 62%,0 50%,39% 38%)!important;filter:drop-shadow(0 0 4px rgba(255,255,255,1)) drop-shadow(0 0 10px rgba(192,163,239,.85))!important;opacity:.94!important}.arcane-me-narracao-estrelas i:nth-child(1){left:5%;top:24%;width:5px!important;height:5px!important}.arcane-me-narracao-estrelas i:nth-child(2){left:14%;top:65%;width:9px!important;height:9px!important;background:#e6c77a!important}.arcane-me-narracao-estrelas i:nth-child(3){left:25%;top:31%;width:7px!important;height:7px!important}.arcane-me-narracao-estrelas i:nth-child(4){left:36%;top:73%;width:5px!important;height:5px!important}.arcane-me-narracao-estrelas i:nth-child(5){left:47%;top:18%;width:11px!important;height:11px!important;background:#fff0b7!important}.arcane-me-narracao-estrelas i:nth-child(6){left:57%;top:59%;width:12px!important;height:12px!important;background:#eee3ff!important}.arcane-me-narracao-estrelas i:nth-child(7){left:66%;top:28%;width:5px!important;height:5px!important}.arcane-me-narracao-estrelas i:nth-child(8){left:75%;top:72%;width:9px!important;height:9px!important;background:#e6c77a!important}.arcane-me-narracao-estrelas i:nth-child(9){left:84%;top:22%;width:7px!important;height:7px!important}.arcane-me-narracao-estrelas i:nth-child(10){left:92%;top:61%;width:12px!important;height:12px!important}.arcane-me-narracao-estrelas i:nth-child(11){left:31%;top:48%;width:5px!important;height:5px!important;background:#fff!important}.arcane-me-narracao-estrelas i:nth-child(12){left:70%;top:49%;width:5px!important;height:5px!important;background:#fff!important}.arcane-me-narracao-estrelas i:nth-child(13){left:10%;top:43%;width:4px!important;height:4px!important;background:#fff!important}.arcane-me-narracao-estrelas i:nth-child(14){left:20%;top:13%;width:7px!important;height:7px!important;background:#e6c77a!important}.arcane-me-narracao-estrelas i:nth-child(15){left:40%;top:35%;width:5px!important;height:5px!important;background:#fff!important}.arcane-me-narracao-estrelas i:nth-child(16){left:53%;top:82%;width:7px!important;height:7px!important}.arcane-me-narracao-estrelas i:nth-child(17){left:62%;top:10%;width:4px!important;height:4px!important;background:#fff!important}.arcane-me-narracao-estrelas i:nth-child(18){left:80%;top:46%;width:5px!important;height:5px!important;background:#e6c77a!important}.arcane-me-narracao-estrelas i:nth-child(19){left:89%;top:84%;width:7px!important;height:7px!important;background:#fff0b7!important}.arcane-me-narracao-estrelas i:nth-child(20){left:3%;top:86%;width:4px!important;height:4px!important}.arcane-me-narracao-chuva .rrank .arcane-me-narracao-estrelas{opacity:.72!important}.arcane-me-narracao-tempestade #rpost-header .poster-name>a{color:#a982dc!important}.arcane-me-narracao-tempestade #rpost-header:before,.arcane-me-narracao-tempestade>.inner>.postprofile>.rrank:before{background-color:#604683!important}');
  }

  instalarCSSSeguro('arcane-me-narrador-temas-css', '.arcane-me-narracao-tempestade #rpost-header .poster-name,.arcane-me-narracao-tempestade #rpost-header .poster-name>*{color:#9d63ff!important}.arcane-me-narracao-tempestade #rpost-header:before,.arcane-me-narracao-tempestade>.inner>.postprofile>.rrank:before{background-color:#6c4d9e!important}.arcane-me-narracao-blecaute #rpost-header .poster-name,.arcane-me-narracao-blecaute #rpost-header .poster-name>*{color:#5f88a2!important;text-shadow:0 0 12px rgba(121,169,204,.16)!important}.arcane-me-narracao-blecaute #rpost-header:before,.arcane-me-narracao-blecaute>.inner>.postprofile>.rrank:before{background-color:#47728d!important}.arcane-me-narracao-blecaute>.inner>.postprofile>.rrank,.arcane-me-narracao-blecaute>.inner>.postprofile>.rrank>*{color:#9bc9e8!important}');
  instalarCSSSeguro('arcane-me-baile-tema-css', 'html.arcane-evento-baile-mascaras .arcane-me-narracao-baile #rpost-header .poster-name,html.arcane-evento-baile-mascaras .arcane-me-narracao-baile #rpost-header .poster-name>*{color:#c9c3b5!important;text-shadow:0 0 12px rgba(238,233,223,.14)!important}html.arcane-evento-baile-mascaras .arcane-me-narracao-baile #rpost-header:before,html.arcane-evento-baile-mascaras .arcane-me-narracao-baile>.inner>.postprofile>.rrank:before{background-color:#5e5a52!important}html.arcane-evento-baile-mascaras .arcane-me-narracao-baile>.inner>.postprofile>.rrank,html.arcane-evento-baile-mascaras .arcane-me-narracao-baile>.inner>.postprofile>.rrank>*{color:#eee9df!important}html.arcane-baile-rubra .arcane-me-narracao-baile #rpost-header .poster-name,html.arcane-baile-rubra .arcane-me-narracao-baile #rpost-header .poster-name>*,html.arcane-baile-rubra .arcane-me-narracao-baile>.inner>.postprofile>.rrank,html.arcane-baile-rubra .arcane-me-narracao-baile>.inner>.postprofile>.rrank>*{color:#e22a2a!important;text-shadow:0 0 12px rgba(190,0,0,.28)!important}html.arcane-baile-rubra .arcane-me-narracao-baile #rpost-header:before,html.arcane-baile-rubra .arcane-me-narracao-baile>.inner>.postprofile>.rrank:before{background-color:#731818!important}html.arcane-baile-rubra .arcane-me-form,html.arcane-baile-rubra .arcane-me-pagina{--arcane-cor:#e22a2a!important;--arcane-cor2:#f0d9d4!important;--arcane-cor3:#8f2424!important;--arcane-linha:#731818!important;--arcane-fundo:#100404!important;--arcane-corpo:#160707!important}html.arcane-baile-rubra #arcane-me-decoracao-pagina .arcane-me-adorno{filter:sepia(1) saturate(4) hue-rotate(320deg) brightness(.58) contrast(1.18)!important}html.arcane-baile-rubra .arcane-me-rp.baile,html.arcane-baile-rubra .arcane-me-update.baile{--me-cor:#e22a2a!important;--me-cor2:#f0d9d4!important;--me-cor3:#8f2424!important;--me-linha:#731818!important;--me-fundo:#100404!important;--me-corpo:#160707!important;--mu-cor:#e22a2a!important;--mu-cor2:#f0d9d4!important;--mu-cor3:#8f2424!important;--mu-linha:#731818!important;--mu-fundo:#100404!important;--mu-corpo:#160707!important}');
  instalarCSSSeguro('arcane-me-tempestade-imagens-css', '#arcane-tempestade-abertura .at-header{background-color:#07070d!important;background-image:linear-gradient(90deg,rgba(5,5,11,.82) 0%,rgba(8,8,20,.60) 32%,rgba(16,12,35,.30) 62%,rgba(32,17,52,.12) 100%),linear-gradient(0deg,rgba(5,5,10,.38) 0%,rgba(8,8,17,.06) 54%,transparent 100%),radial-gradient(ellipse at 64% 47%,rgba(157,99,255,.20) 0%,rgba(96,72,189,.07) 29%,transparent 57%),url("https://i.pinimg.com/736x/c6/bf/46/c6bf46cf522fdbf26329bd0895bbadc0.jpg")!important;background-position:center,center,center,center 50%!important;background-size:cover,cover,cover,cover!important;background-repeat:no-repeat!important}#arcane-tempestade-abertura .at-header:before{background:radial-gradient(ellipse at 62% 48%,rgba(225,213,255,.20) 0%,rgba(157,99,255,.075) 22%,transparent 49%),radial-gradient(ellipse at 78% 61%,rgba(210,92,255,.055) 0%,transparent 38%)!important;mix-blend-mode:screen!important}.arcane-me-rp.tempestade.visual-header .me-topo{background-image:linear-gradient(90deg,rgba(5,5,11,.80) 0%,rgba(8,8,19,.55) 27%,rgba(13,10,27,.25) 58%,rgba(31,14,48,.08) 100%),linear-gradient(0deg,rgba(5,5,10,.30) 0%,rgba(8,8,17,.04) 58%,transparent 100%),url("https://i.pinimg.com/736x/c6/bf/46/c6bf46cf522fdbf26329bd0895bbadc0.jpg")!important}.arcane-me-rp.tempestade.visual-header .me-topo:before{background:radial-gradient(ellipse at 66% 48%,rgba(224,213,255,.18) 0%,rgba(157,99,255,.065) 24%,transparent 51%),radial-gradient(ellipse at 82% 46%,rgba(210,92,255,.05) 0%,transparent 42%)!important}.arcane-me-update.tempestade .mu-header:before{background:linear-gradient(90deg,rgba(7,3,13,.78) 0%,rgba(31,17,55,.38) 53%,rgba(8,4,15,.66) 100%)!important}.arcane-me-update.tempestade .mu-header:after{opacity:.09!important}');
  instalarCSSSeguro('arcane-me-tempestade-tipografia-css', 'html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-texto p{font-family:Poppins,Arial,sans-serif!important;font-size:13.2px!important;font-weight:400!important;line-height:1.4!important}');
  instalarCSSSeguro('arcane-me-tempestade-carga-css', 'html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-caixa{animation:arcane-borda-abertura 9.7s ease-in-out -2.1s infinite!important}html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade .me-caixa{animation:arcane-borda-post 11.3s ease-in-out -6.4s infinite!important}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade{animation:arcane-borda-update 13.1s ease-in-out -8.8s infinite!important}@keyframes arcane-borda-abertura{0%,38%,43%,100%{box-shadow:0 0 0 rgba(157,99,255,0)}39%{box-shadow:0 0 4px rgba(240,238,245,.42),0 0 13px rgba(157,99,255,.36)}40%{box-shadow:0 0 1px rgba(157,99,255,.10)}41%{box-shadow:0 0 6px rgba(240,238,245,.52),0 0 18px rgba(157,99,255,.42)}}@keyframes arcane-borda-post{0%,57%,61%,100%{box-shadow:0 0 0 rgba(157,99,255,0)}58%{box-shadow:0 0 4px rgba(240,238,245,.38),0 0 11px rgba(157,99,255,.32)}59%{box-shadow:0 0 1px rgba(157,99,255,.08)}60%{box-shadow:0 0 5px rgba(201,167,255,.44),0 0 15px rgba(157,99,255,.35)}}@keyframes arcane-borda-update{0%,71%,75%,100%{filter:none}72%{filter:drop-shadow(0 0 4px rgba(240,238,245,.34)) drop-shadow(0 0 10px rgba(157,99,255,.28))}73%{filter:none}74%{filter:drop-shadow(0 0 5px rgba(201,167,255,.38)) drop-shadow(0 0 14px rgba(157,99,255,.30))}}html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-header:before{animation:arcane-raio-foto 8.9s ease-in-out -3.2s infinite!important}html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade.visual-header .me-topo:before{animation:arcane-raio-foto 10.7s ease-in-out -7.1s infinite!important}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade .mu-header:after{animation:arcane-raio-adm 12.4s ease-in-out -9.6s infinite!important}@keyframes arcane-raio-foto{0%,44%,48%,100%{opacity:.55}45%{opacity:1}46%{opacity:.42}47%{opacity:.9}}@keyframes arcane-raio-adm{0%,62%,66%,100%{opacity:.05;background:radial-gradient(ellipse at 68% 49%,rgba(240,238,245,.08),transparent 40%)}63%{opacity:.38;background:radial-gradient(ellipse at 68% 49%,rgba(240,238,245,.42),rgba(157,99,255,.16) 20%,transparent 44%)}64%{opacity:.04}65%{opacity:.28;background:radial-gradient(ellipse at 68% 49%,rgba(240,238,245,.34),rgba(157,99,255,.12) 22%,transparent 45%)}}html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-texto:before,html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-texto:after,html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade .me-corpo:before,html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade .me-corpo:after,html.arcane-evento-tempestade-magica .arcane-me-update.tempestade texto-update:before,html.arcane-evento-tempestade-magica .arcane-me-update.tempestade texto-update:after{content:"ᚦ\\A ᛉ\\A ᚱ\\A ᛇ\\A ᛟ";position:absolute;z-index:1;top:25px;width:20px;color:rgba(201,167,255,.22);font:400 11px/2.65 Georgia,serif;white-space:pre;text-align:center;text-shadow:0 0 6px rgba(157,99,255,.28);pointer-events:none}html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-texto:before,html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade .me-corpo:before,html.arcane-evento-tempestade-magica .arcane-me-update.tempestade texto-update:before{left:3px}html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-texto:after,html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade .me-corpo:after,html.arcane-evento-tempestade-magica .arcane-me-update.tempestade texto-update:after{right:3px;transform:scaleX(-1)}html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-texto p,html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade .me-corpo texto-evento,html.arcane-evento-tempestade-magica .arcane-me-update.tempestade texto-update{position:relative;z-index:2}html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-status{font-size:0!important}html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-status:after{content:"CARGA INSTÁVEL";font-size:8px;letter-spacing:1.4px}html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade texto-evento:after,html.arcane-evento-tempestade-magica .arcane-me-update.tempestade .mu-transition:after{content:"⚡  CARGA INSTÁVEL   ▰ ▰ ▰ ▰ ▰";display:block;margin-top:27px;padding-top:13px;border-top:1px solid rgba(157,99,255,.18);color:#c9a7ff;font:600 8px/1 Montserrat,Arial,sans-serif;letter-spacing:1.25px;text-align:right}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade .mu-transition:after{position:absolute;top:auto;right:43px;bottom:-704px;width:250px}@media(prefers-reduced-motion:reduce){html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-caixa,html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade .me-caixa,html.arcane-evento-tempestade-magica .arcane-me-update.tempestade,html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-header:before,html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade.visual-header .me-topo:before,html.arcane-evento-tempestade-magica .arcane-me-update.tempestade .mu-header:after{animation:none!important}}');
  instalarCSSSeguro('arcane-me-tempestade-carga-update-css', 'html.arcane-evento-tempestade-magica .arcane-me-update.tempestade{position:relative!important}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade .mu-transition:after{content:none!important;display:none!important}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade:before{content:"⚡  CARGA INSTÁVEL   ▰ ▰ ▰ ▰ ▰";position:absolute;z-index:5;right:43px;bottom:30px;color:#c9a7ff;font:600 8px/1 Montserrat,Arial,sans-serif;letter-spacing:1.25px;pointer-events:none}');
  instalarCSSSeguro('arcane-me-tempestade-carga-abertura-css', 'html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-status:before{content:none!important;display:none!important}html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-status:after{content:"CARGA INSTÁVEL   ▰ ▰ ▰ ▰ ▰"!important;font-size:8px!important;letter-spacing:1.25px!important;white-space:pre!important}');
  instalarCSSSeguro('arcane-me-tempestade-desempenho-css', 'html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade .me-caixa{animation:none!important;box-shadow:none!important}html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade.visual-header .me-topo:before{animation:none!important;opacity:.72!important}html.arcane-evento-tempestade-magica .arcane-me-rp.tempestade texto-evento:after{content:none!important;display:none!important}');
  instalarCSSSeguro('arcane-me-tempestade-trilho-adm-css', '@property --arcane-trilho-adm{syntax:"<angle>";inherits:false;initial-value:0deg}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade{--arcane-trilho-adm:0deg;animation:arcane-trilho-adm-giro 7.5s linear infinite!important;border:1px solid transparent!important;background:linear-gradient(#14151a,#14151a) padding-box,conic-gradient(from var(--arcane-trilho-adm),#6c4d9e 0deg,#6c4d9e 278deg,#9d63ff 302deg,#f0eef5 316deg,#c9a7ff 329deg,#6c4d9e 346deg,#6c4d9e 360deg) border-box!important;box-shadow:0 0 5px rgba(157,99,255,.10)!important}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade .mu-header{border-color:transparent!important}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade .mu-body{border-left:0!important;border-right:0!important;border-image:none!important}@keyframes arcane-trilho-adm-giro{to{--arcane-trilho-adm:360deg}}@media(prefers-reduced-motion:reduce){html.arcane-evento-tempestade-magica .arcane-me-update.tempestade{animation:none!important}}');
  instalarCSSSeguro('arcane-me-tempestade-trilho-abertura-css', '@property --arcane-trilho-abertura{syntax:"<angle>";inherits:false;initial-value:0deg}html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-caixa{--arcane-trilho-abertura:0deg;animation:arcane-trilho-abertura-giro 9.2s linear infinite!important;border:1px solid transparent!important;background:linear-gradient(transparent,transparent) padding-box,conic-gradient(from var(--arcane-trilho-abertura),#6c4d9e 0deg,#6c4d9e 278deg,#9d63ff 302deg,#f0eef5 316deg,#c9a7ff 329deg,#6c4d9e 346deg,#6c4d9e 360deg) border-box!important;box-shadow:0 0 5px rgba(157,99,255,.10)!important}@keyframes arcane-trilho-abertura-giro{to{--arcane-trilho-abertura:360deg}}@media(prefers-reduced-motion:reduce){html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-caixa{animation:none!important}}');
  instalarCSSSeguro('arcane-me-update-credito-externo-css', 'html.arcane-evento-tempestade-magica .arcane-me-update.tempestade{margin-bottom:45px!important}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade:after{position:absolute!important;left:0!important;right:0!important;bottom:-21px!important;margin:0!important;pointer-events:none!important}');
  instalarCSSSeguro('arcane-me-tempestade-runas-abertura-css', 'html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-texto:before,html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-texto:after{content:"ᚦ\\A ᛉ\\A ᚱ\\A ᛇ\\A ᛟ\\A ᚨ\\A ᚲ\\A ᛏ\\A ᛒ\\A ᛖ\\A ᛗ\\A ᛚ\\A ᛞ\\A ᛜ\\A ᛝ\\A ᛃ\\A ᚢ\\A ᛋ"!important;top:23px!important;bottom:25px!important;height:auto!important;overflow:hidden!important;width:22px!important;font-size:12px!important;line-height:2.65!important;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 7%,#000 82%,transparent 100%)!important;mask-image:linear-gradient(180deg,transparent 0,#000 7%,#000 82%,transparent 100%)!important}html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-texto:before{left:4.5px!important}html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-texto:after{right:4.5px!important}');
  instalarCSSSeguro('arcane-me-tempestade-runas-adm-css', 'html.arcane-evento-tempestade-magica .arcane-me-update.tempestade texto-update:before,html.arcane-evento-tempestade-magica .arcane-me-update.tempestade texto-update:after{content:none!important;display:none!important}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade .mu-body:before,html.arcane-evento-tempestade-magica .arcane-me-update.tempestade .mu-body:after{content:"ᚦ\\A ᛉ\\A ᚱ\\A ᛇ\\A ᛟ\\A ᚨ\\A ᚲ\\A ᛏ\\A ᛒ\\A ᛖ\\A ᛗ\\A ᛚ\\A ᛞ\\A ᛜ\\A ᛝ\\A ᛃ\\A ᚢ\\A ᛋ\\A ᚾ\\A ᛁ\\A ᛒ\\A ᚷ\\A ᛈ\\A ᛦ\\A ᛣ\\A ᛤ\\A ᛥ\\A ᛧ\\A ᛨ\\A ᛩ"!important;display:block!important;position:absolute!important;z-index:1!important;top:20px!important;bottom:37px!important;width:22px!important;height:auto!important;overflow:hidden!important;background:none!important;box-shadow:none!important;border:0!important;color:rgba(201,167,255,.24)!important;font:400 12px/2.65 Georgia,serif!important;white-space:pre!important;text-align:center!important;text-shadow:0 0 6px rgba(157,99,255,.30)!important;pointer-events:none!important;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 7%,#000 80%,transparent 100%)!important;mask-image:linear-gradient(180deg,transparent 0,#000 7%,#000 80%,transparent 100%)!important}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade .mu-body:before{left:4.5px!important}html.arcane-evento-tempestade-magica .arcane-me-update.tempestade .mu-body:after{left:auto!important;right:4.5px!important;transform:scaleX(-1)!important}');
  instalarCSSSeguro('arcane-me-tempestade-runas-confinadas-css', 'html.arcane-evento-tempestade-magica #arcane-tempestade-abertura .at-texto{position:relative!important;isolation:isolate!important}');
  instalarCSSSeguro('arcane-me-tempestade-posts-sem-runas-css', '.arcane-me-rp.tempestade .me-corpo:before,.arcane-me-rp.tempestade .me-corpo:after{content:none!important;display:none!important}.arcane-me-rp.tempestade.largo.visual-lateral .me-caixa{grid-template-columns:minmax(0,1fr)!important}.arcane-me-rp.tempestade.largo.visual-lateral .me-lateral{display:none!important}.arcane-me-rp.tempestade.largo.visual-lateral .me-corpo{position:relative!important;padding:58px 82px 60px!important;background:linear-gradient(90deg,rgba(92,53,143,.055),#14151a 13%)!important;font-size:12.4px!important;line-height:1.82!important}.arcane-me-rp.tempestade.largo.visual-lateral .me-corpo:before,.arcane-me-rp.tempestade.largo.visual-lateral .me-corpo:after{content:"ᚦ ᛉ ᚱ ᛇ ᛟ ᚨ ᚲ ᛏ ᛒ ᛖ ᛗ ᛚ ᛞ ᛜ ᛝ"!important;display:block!important;position:absolute!important;left:56px!important;right:56px!important;width:auto!important;height:auto!important;color:rgba(201,167,255,.22)!important;font:400 10px/1 Georgia,serif!important;letter-spacing:5px!important;word-spacing:10px!important;white-space:nowrap!important;text-align:center!important;text-shadow:0 0 6px rgba(157,99,255,.26)!important;pointer-events:none!important;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 10%,#000 90%,transparent 100%)!important;mask-image:linear-gradient(90deg,transparent 0,#000 10%,#000 90%,transparent 100%)!important}.arcane-me-rp.tempestade.largo.visual-lateral .me-corpo:before{top:23px!important}.arcane-me-rp.tempestade.largo.visual-lateral .me-corpo:after{bottom:24px!important;transform:scaleX(-1)!important}.arcane-me-rp.tempestade.largo.visual-lateral .me-corpo::first-letter{float:left!important;margin:5px 9px 0 0!important;color:#9d63ff!important;font:normal 36px/.78 "Modern Aesthetic",Georgia,serif!important;text-shadow:0 0 10px rgba(157,99,255,.28)!important}');
  instalarCSSSeguro('arcane-me-tempestade-sigilos-reais-v48-css', 'html.arcane-evento-tempestade-magica .arcane-me-narracao-tempestade #rpost-header .poster-name:before,html.arcane-evento-tempestade-magica .arcane-me-narracao-tempestade #rpost-header .poster-name:after{content:none!important;display:none!important;background:none!important;animation:none!important}html.arcane-evento-tempestade-magica .arcane-me-narracao-tempestade #rpost-header .poster-name>.arcane-me-sigilos-narrador{position:absolute;z-index:22;left:50%;display:flex;width:250px;align-items:center;justify-content:space-between;transform:translateX(-50%);pointer-events:none;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 13%,#000 87%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 13%,#000 87%,transparent 100%)}html.arcane-evento-tempestade-magica .arcane-me-narracao-tempestade #rpost-header .poster-name>.arcane-me-sigilos-topo{top:-11px}html.arcane-evento-tempestade-magica .arcane-me-narracao-tempestade #rpost-header .poster-name>.arcane-me-sigilos-base{top:77px;bottom:auto;transform:translateX(-50%) scaleX(-1)}html.arcane-evento-tempestade-magica .arcane-me-sigilos-narrador>i{display:block;color:rgba(201,167,255,.34);font:400 10px/1 Georgia,serif;font-style:normal;opacity:.38;text-shadow:0 0 2px rgba(157,99,255,.20);animation:arcane-sigilo-individual 7s ease-in-out infinite}html.arcane-evento-tempestade-magica .arcane-me-sigilos-narrador>i:nth-child(1){animation-delay:0s}html.arcane-evento-tempestade-magica .arcane-me-sigilos-narrador>i:nth-child(2){animation-delay:-1s}html.arcane-evento-tempestade-magica .arcane-me-sigilos-narrador>i:nth-child(3){animation-delay:-2s}html.arcane-evento-tempestade-magica .arcane-me-sigilos-narrador>i:nth-child(4){animation-delay:-3s}html.arcane-evento-tempestade-magica .arcane-me-sigilos-narrador>i:nth-child(5){animation-delay:-4s}html.arcane-evento-tempestade-magica .arcane-me-sigilos-narrador>i:nth-child(6){animation-delay:-5s}html.arcane-evento-tempestade-magica .arcane-me-sigilos-narrador>i:nth-child(7){animation-delay:-6s}html.arcane-evento-tempestade-magica .arcane-me-sigilos-base>i{animation-direction:reverse}@keyframes arcane-sigilo-individual{0%,20%,100%{color:rgba(201,167,255,.30);opacity:.34;text-shadow:0 0 2px rgba(157,99,255,.16)}7%,11%{color:#f0eef5;opacity:1;text-shadow:0 0 4px rgba(240,238,245,.86),0 0 11px rgba(157,99,255,.88)}}@media(prefers-reduced-motion:reduce){html.arcane-evento-tempestade-magica .arcane-me-sigilos-narrador>i{animation:none!important;opacity:.52!important}}');
  /* Exclusivo do update subsequente do ADM em Chuva de Estrelas. Não alcança a abertura nem posts comuns. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-update-adm-v56-css', 'html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before,html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:after{width:22px!important;background-color:transparent!important;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2722%27 height=%27184%27 viewBox=%270 0 22 184%27%3E%3Cg%3E%3Cpath fill=%27%23ddcdf7%27 d=%27M11 5l1.25 4.75L17 11l-4.75 1.25L11 17l-1.25-4.75L5 11l4.75-1.25z%27/%3E%3Cpath fill=%27%23e6c77a%27 d=%27M7 35l.7 2.3L10 38l-2.3.7L7 41l-.7-2.3L4 38l2.3-.7z%27/%3E%3Cpath fill=%27%23ffffff%27 d=%27M15 59l.9 3.1L19 63l-3.1.9L15 67l-.9-3.1L11 63l3.1-.9z%27/%3E%3Cpath fill=%27%23c0a3ef%27 d=%27M8 87l1.1 3.9L13 92l-3.9 1.1L8 97l-1.1-3.9L3 92l3.9-1.1z%27/%3E%3Cpath fill=%27%23e6c77a%27 d=%27M15 120l.65 2.35L18 123l-2.35.65L15 126l-.65-2.35L12 123l2.35-.65z%27/%3E%3Cpath fill=%27%23ddcdf7%27 d=%27M7 147l.9 3.1L11 151l-3.1.9L7 155l-.9-3.1L3 151l3.1-.9z%27/%3E%3Cpath fill=%27%23ffffff%27 d=%27M16 174l.55 1.95L18.5 176.5l-1.95.55L16 179l-.55-1.95-1.95-.55 1.95-.55z%27/%3E%3C/g%3E%3C/svg%3E")!important;background-position:center top!important;background-size:22px 184px!important;background-repeat:repeat-y!important;box-shadow:none!important;opacity:.86!important;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 8%,#000 82%,transparent 100%)!important;mask-image:linear-gradient(180deg,transparent 0,#000 8%,#000 82%,transparent 100%)!important;animation:none!important}html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:after{transform:scaleX(-1)!important}');
  /* Devolve a base escura com fade sob as estrelas estáticas do update do ADM. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-update-gradiente-v57-css', 'html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before,html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:after{background-color:var(--mu-fundo)!important;-webkit-mask-image:linear-gradient(180deg,#000 0%,#000 68%,rgba(0,0,0,.78) 79%,rgba(0,0,0,.30) 92%,transparent 100%)!important;mask-image:linear-gradient(180deg,#000 0%,#000 68%,rgba(0,0,0,.78) 79%,rgba(0,0,0,.30) 92%,transparent 100%)!important}');
  /* Suaviza horizontal e verticalmente somente os trilhos laterais da abertura de Chuva de Estrelas. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-abertura-trilhos-v57-css', 'html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho{background-color:transparent!important;background-image:linear-gradient(180deg,rgba(13,9,19,.90) 0%,rgba(18,12,25,.76) 17%,rgba(23,20,27,.54) 46%,rgba(23,20,27,.22) 76%,transparent 100%)!important;-webkit-mask-image:linear-gradient(180deg,#000 0%,#000 66%,rgba(0,0,0,.72) 79%,rgba(0,0,0,.25) 93%,transparent 100%)!important;mask-image:linear-gradient(180deg,#000 0%,#000 66%,rgba(0,0,0,.72) 79%,rgba(0,0,0,.25) 93%,transparent 100%)!important}html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho-esquerdo{background-image:linear-gradient(90deg,rgba(13,9,19,.88) 0%,rgba(18,12,25,.60) 46%,rgba(23,20,27,0) 100%),linear-gradient(180deg,rgba(13,9,19,.86) 0%,rgba(18,12,25,.68) 23%,rgba(23,20,27,.28) 70%,transparent 100%)!important}html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho-direito{background-image:linear-gradient(270deg,rgba(13,9,19,.88) 0%,rgba(18,12,25,.60) 46%,rgba(23,20,27,0) 100%),linear-gradient(180deg,rgba(13,9,19,.86) 0%,rgba(18,12,25,.68) 23%,rgba(23,20,27,.28) 70%,transparent 100%)!important}');
  /* V58: elimina as chapas sólidas que ainda marcavam o limite interno das laterais. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-laterais-sem-blocos-v58-css', 'html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho{width:16px!important;background-color:transparent!important;box-shadow:none!important;-webkit-mask-image:linear-gradient(180deg,#000 0%,#000 64%,rgba(0,0,0,.65) 80%,rgba(0,0,0,.18) 94%,transparent 100%)!important;mask-image:linear-gradient(180deg,#000 0%,#000 64%,rgba(0,0,0,.65) 80%,rgba(0,0,0,.18) 94%,transparent 100%)!important}html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho-esquerdo{background-image:linear-gradient(90deg,rgba(13,9,19,.66) 0%,rgba(18,12,25,.32) 34%,rgba(23,20,27,.08) 62%,transparent 82%)!important}html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho-direito{background-image:linear-gradient(270deg,rgba(13,9,19,.66) 0%,rgba(18,12,25,.32) 34%,rgba(23,20,27,.08) 62%,transparent 82%)!important}html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before,html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:after{width:20px!important;background-color:transparent!important;background-size:18px 184px!important}html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before{box-shadow:inset 13px 0 17px -14px rgba(13,9,19,.96)!important}html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:after{box-shadow:inset -13px 0 17px -14px rgba(13,9,19,.96)!important}');
  /* V59: as faixas voltam visíveis; somente a aresta voltada ao texto se dissolve. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-bordas-restauradas-v59-css', 'html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho{width:22px!important;background-color:transparent!important;background-image:none!important;-webkit-mask-image:linear-gradient(180deg,#000 0%,#000 68%,rgba(0,0,0,.78) 82%,rgba(0,0,0,.30) 94%,transparent 100%)!important;mask-image:linear-gradient(180deg,#000 0%,#000 68%,rgba(0,0,0,.78) 82%,rgba(0,0,0,.30) 94%,transparent 100%)!important}html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho-esquerdo{box-shadow:inset 25px 0 18px -11px rgba(10,6,15,.98)!important}html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho-direito{box-shadow:inset -25px 0 18px -11px rgba(10,6,15,.98)!important}html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before,html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:after{width:22px!important;background-color:transparent!important;background-size:18px 184px!important}html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before{box-shadow:inset 25px 0 18px -11px rgba(10,6,15,.98)!important}html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:after{box-shadow:inset -25px 0 18px -11px rgba(10,6,15,.98)!important}');
  /* V60: corrige o eixo certo — a emenda horizontal entre a foto do header e as faixas laterais. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-header-para-laterais-v60-css', 'html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho{top:244px!important;bottom:10px!important;width:20px!important;background:linear-gradient(180deg,#0d0913 0%,#120c19 26%,#21152c 54%,rgba(33,21,44,.72) 74%,rgba(33,21,44,0) 100%)!important;box-shadow:none!important;-webkit-mask-image:linear-gradient(180deg,transparent 0%,rgba(0,0,0,.18) 5px,rgba(0,0,0,.68) 12px,#000 20px,#000 72%,rgba(0,0,0,.68) 84%,rgba(0,0,0,.22) 95%,transparent 100%)!important;mask-image:linear-gradient(180deg,transparent 0%,rgba(0,0,0,.18) 5px,rgba(0,0,0,.68) 12px,#000 20px,#000 72%,rgba(0,0,0,.68) 84%,rgba(0,0,0,.22) 95%,transparent 100%)!important}html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before,html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:after{top:-18px!important;bottom:0!important;width:22px!important;background-color:var(--mu-fundo)!important;background-size:18px 184px!important;box-shadow:none!important;-webkit-mask-image:linear-gradient(180deg,transparent 0%,rgba(0,0,0,.20) 5px,rgba(0,0,0,.70) 13px,#000 22px,#000 70%,rgba(0,0,0,.72) 83%,rgba(0,0,0,.25) 95%,transparent 100%)!important;mask-image:linear-gradient(180deg,transparent 0%,rgba(0,0,0,.20) 5px,rgba(0,0,0,.70) 13px,#000 22px,#000 70%,rgba(0,0,0,.72) 83%,rgba(0,0,0,.25) 95%,transparent 100%)!important}');
  /* V61: o recorte esquerdo da foto é quase preto; sua faixa recebe uma curva própria de cor e opacidade. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-transicao-esquerda-v61-css', 'html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho-esquerdo{background:linear-gradient(180deg,#020105 0%,#040208 22px,#09050e 58px,#120c19 31%,#21152c 55%,rgba(33,21,44,.70) 74%,transparent 100%)!important;-webkit-mask-image:linear-gradient(180deg,transparent 0%,rgba(0,0,0,.10) 8px,rgba(0,0,0,.34) 17px,rgba(0,0,0,.68) 29px,#000 44px,#000 72%,rgba(0,0,0,.68) 84%,rgba(0,0,0,.22) 95%,transparent 100%)!important;mask-image:linear-gradient(180deg,transparent 0%,rgba(0,0,0,.10) 8px,rgba(0,0,0,.34) 17px,rgba(0,0,0,.68) 29px,#000 44px,#000 72%,rgba(0,0,0,.68) 84%,rgba(0,0,0,.22) 95%,transparent 100%)!important}html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before{box-shadow:inset 0 58px 44px -31px rgba(2,1,5,.98)!important;-webkit-mask-image:linear-gradient(180deg,transparent 0%,rgba(0,0,0,.10) 9px,rgba(0,0,0,.34) 20px,rgba(0,0,0,.70) 33px,#000 48px,#000 70%,rgba(0,0,0,.72) 83%,rgba(0,0,0,.25) 95%,transparent 100%)!important;mask-image:linear-gradient(180deg,transparent 0%,rgba(0,0,0,.10) 9px,rgba(0,0,0,.34) 20px,rgba(0,0,0,.70) 33px,#000 48px,#000 70%,rgba(0,0,0,.72) 83%,rgba(0,0,0,.25) 95%,transparent 100%)!important}');
  /* V62: no ponto da emenda a lateral esquerda é invisível; o adorno nasce somente abaixo dela. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-esquerda-transparente-v62-css', 'html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho-esquerdo{top:260px!important;bottom:10px!important;background:linear-gradient(180deg,#0d0913 0%,#120c19 26%,#21152c 54%,rgba(33,21,44,.72) 74%,transparent 100%)!important;box-shadow:none!important;-webkit-mask-image:linear-gradient(180deg,transparent 0%,transparent 18px,rgba(0,0,0,.12) 30px,rgba(0,0,0,.38) 48px,rgba(0,0,0,.72) 66px,#000 84px,#000 74%,rgba(0,0,0,.65) 86%,rgba(0,0,0,.20) 96%,transparent 100%)!important;mask-image:linear-gradient(180deg,transparent 0%,transparent 18px,rgba(0,0,0,.12) 30px,rgba(0,0,0,.38) 48px,rgba(0,0,0,.72) 66px,#000 84px,#000 74%,rgba(0,0,0,.65) 86%,rgba(0,0,0,.20) 96%,transparent 100%)!important}html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before{top:0!important;bottom:0!important;background-color:var(--mu-fundo)!important;box-shadow:none!important;-webkit-mask-image:linear-gradient(180deg,transparent 0%,transparent 18px,rgba(0,0,0,.12) 30px,rgba(0,0,0,.38) 48px,rgba(0,0,0,.72) 66px,#000 84px,#000 72%,rgba(0,0,0,.68) 85%,rgba(0,0,0,.22) 96%,transparent 100%)!important;mask-image:linear-gradient(180deg,transparent 0%,transparent 18px,rgba(0,0,0,.12) 30px,rgba(0,0,0,.38) 48px,rgba(0,0,0,.72) 66px,#000 84px,#000 72%,rgba(0,0,0,.68) 85%,rgba(0,0,0,.22) 96%,transparent 100%)!important}');
  /* V63: começa opaca na cor medida no último pixel esquerdo do header e muda apenas de cor. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-esquerda-opaca-v63-css', 'html.arcane-evento-chuva-estrelas #arcane-estrelas-abertura .ce-trilho-esquerdo{top:260px!important;bottom:10px!important;background:linear-gradient(180deg,#010103 0px,#010103 7px,#040207 22px,#08050c 42px,#0d0913 68px,#120c19 31%,#21152c 56%,rgba(33,21,44,.70) 75%,transparent 100%)!important;box-shadow:none!important;-webkit-mask-image:linear-gradient(180deg,#000 0%,#000 74%,rgba(0,0,0,.68) 86%,rgba(0,0,0,.20) 96%,transparent 100%)!important;mask-image:linear-gradient(180deg,#000 0%,#000 74%,rgba(0,0,0,.68) 86%,rgba(0,0,0,.20) 96%,transparent 100%)!important}html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before{top:0!important;bottom:0!important;background-color:var(--mu-fundo)!important;box-shadow:inset 0 58px 48px -28px rgba(1,1,3,.98)!important;-webkit-mask-image:linear-gradient(180deg,#000 0%,#000 72%,rgba(0,0,0,.68) 85%,rgba(0,0,0,.22) 96%,transparent 100%)!important;mask-image:linear-gradient(180deg,#000 0%,#000 72%,rgba(0,0,0,.68) 85%,rgba(0,0,0,.22) 96%,transparent 100%)!important}');
  /* V64: iguala literalmente os primeiros pixels da faixa ao último pixel esquerdo do header. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-emenda-horizontal-update-v64-css', 'html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before{box-shadow:inset 0 9px 0 #010103,inset 0 62px 46px -24px rgba(1,1,3,.98)!important}');
  /* V65: a esquerda recebe exatamente o tratamento vertical que já funciona à direita. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-update-lados-espelhados-v65-css', 'html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before{top:-18px!important;bottom:0!important;background-color:var(--mu-fundo)!important;box-shadow:none!important;-webkit-mask-image:linear-gradient(180deg,transparent 0%,rgba(0,0,0,.20) 5px,rgba(0,0,0,.70) 13px,#000 22px,#000 70%,rgba(0,0,0,.72) 83%,rgba(0,0,0,.25) 95%,transparent 100%)!important;mask-image:linear-gradient(180deg,transparent 0%,rgba(0,0,0,.20) 5px,rgba(0,0,0,.70) 13px,#000 22px,#000 70%,rgba(0,0,0,.72) 83%,rgba(0,0,0,.25) 95%,transparent 100%)!important}');
  /* V66: gradiente real sob o SVG, sem transparência ou sombra tentando imitar a emenda. */
  instalarCSSSeguro('arcane-me-chuva-estrelas-update-gradiente-real-v66-css', 'html.arcane-evento-chuva-estrelas .arcane-me-update.chuva .mu-body:before{top:0!important;bottom:0!important;background-color:transparent!important;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2722%27 height=%27184%27 viewBox=%270 0 22 184%27%3E%3Cg%3E%3Cpath fill=%27%23ddcdf7%27 d=%27M11 5l1.25 4.75L17 11l-4.75 1.25L11 17l-1.25-4.75L5 11l4.75-1.25z%27/%3E%3Cpath fill=%27%23e6c77a%27 d=%27M7 35l.7 2.3L10 38l-2.3.7L7 41l-.7-2.3L4 38l2.3-.7z%27/%3E%3Cpath fill=%27%23ffffff%27 d=%27M15 59l.9 3.1L19 63l-3.1.9L15 67l-.9-3.1L11 63l3.1-.9z%27/%3E%3Cpath fill=%27%23c0a3ef%27 d=%27M8 87l1.1 3.9L13 92l-3.9 1.1L8 97l-1.1-3.9L3 92l3.9-1.1z%27/%3E%3Cpath fill=%27%23e6c77a%27 d=%27M15 120l.65 2.35L18 123l-2.35.65L15 126l-.65-2.35L12 123l2.35-.65z%27/%3E%3Cpath fill=%27%23ddcdf7%27 d=%27M7 147l.9 3.1L11 151l-3.1.9L7 155l-.9-3.1L3 151l3.1-.9z%27/%3E%3Cpath fill=%27%23ffffff%27 d=%27M16 174l.55 1.95L18.5 176.5l-1.95.55L16 179l-.55-1.95-1.95-.55 1.95-.55z%27/%3E%3C/g%3E%3C/svg%3E"),linear-gradient(180deg,#020104 0px,#020104 8px,#050309 26px,#09060f 48px,#0d0913 74px,#0d0913 100%)!important;background-position:center top,left top!important;background-size:18px 184px,100% 100%!important;background-repeat:repeat-y,no-repeat!important;box-shadow:none!important;-webkit-mask-image:linear-gradient(180deg,#000 0%,#000 72%,rgba(0,0,0,.68) 85%,rgba(0,0,0,.22) 96%,transparent 100%)!important;mask-image:linear-gradient(180deg,#000 0%,#000 72%,rgba(0,0,0,.68) 85%,rgba(0,0,0,.22) 96%,transparent 100%)!important}');

  instalarCSSSeguro('arcane-me-baile-rubra-complemento-css', 'html.arcane-baile-rubra .arcane-me-form:before,html.arcane-baile-rubra .arcane-me-form:after{filter:sepia(1) saturate(4) hue-rotate(320deg) brightness(.58) contrast(1.18)!important}html.arcane-baile-rubra .arcane-me-rp.baile .me-topo:after,html.arcane-baile-rubra .arcane-me-rp.baile .me-lateral:after,html.arcane-baile-rubra .arcane-me-update.baile .mu-header:after{content:""!important;position:absolute!important;inset:0!important;display:block!important;background:rgba(82,0,0,.52)!important;mix-blend-mode:multiply!important;pointer-events:none!important}');
  instalarCSSSeguro('arcane-me-baile-codigos-css', 'html.arcane-evento-baile-mascaras .arcane-me-rp.baile .me-caixa{border-color:#5e5a52!important;background:#080908!important;box-shadow:0 18px 38px rgba(0,0,0,.34)!important}html.arcane-evento-baile-mascaras .arcane-me-rp.baile .me-topo{height:118px!important;background:#080908 url("https://i.pinimg.com/1200x/aa/f1/77/aaf177566f87a33c76660484844f707c.jpg") center 43%/cover no-repeat!important;filter:grayscale(1) brightness(.58) contrast(1.12)!important}html.arcane-evento-baile-mascaras .arcane-me-rp.baile .me-topo:before{content:""!important;position:absolute!important;inset:0!important;display:block!important;border:5px double rgba(201,195,181,.42)!important;background:linear-gradient(90deg,rgba(5,6,6,.82),transparent 56%,rgba(5,6,6,.34))!important;box-shadow:inset 0 0 30px #050606!important;pointer-events:none!important}html.arcane-evento-baile-mascaras .arcane-me-rp.baile .me-lateral{background:#080908 url("https://i.pinimg.com/736x/df/4b/3a/df4b3ace82a78bba315c8d41bc6922d2.jpg") 72% center/cover no-repeat!important;filter:grayscale(1) brightness(.55) contrast(1.12)!important}html.arcane-evento-baile-mascaras .arcane-me-rp.baile .me-corpo{background:linear-gradient(135deg,rgba(201,195,181,.035),transparent 42%),#101110!important}html.arcane-evento-baile-mascaras .arcane-me-rp.baile cor-1{color:#777269!important}html.arcane-evento-baile-mascaras .arcane-me-rp.baile cor-2{color:#c9c3b5!important}html.arcane-evento-baile-mascaras .arcane-me-rp.baile cor-3{color:#eee9df!important}html.arcane-evento-baile-mascaras .arcane-me-rp.baile cor-4{color:#8f897d!important}html.arcane-evento-baile-mascaras .arcane-me-rp.baile cor-5{color:#dedbd3!important}html.arcane-evento-baile-mascaras .arcane-me-update.baile{margin-bottom:42px!important}html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-header{min-height:176px!important;background-color:#080908!important;background-image:url("https://i.pinimg.com/1200x/aa/f1/77/aaf177566f87a33c76660484844f707c.jpg")!important;background-position:center 43%!important;filter:grayscale(1) brightness(.62) contrast(1.12)!important}html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-header:before{background:linear-gradient(90deg,rgba(4,5,5,.96) 0%,rgba(8,9,9,.78) 48%,rgba(8,9,9,.28) 100%)!important;mix-blend-mode:normal!important}html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-header:after{display:block!important;inset:7px!important;border:3px double rgba(201,195,181,.34)!important;background:none!important;opacity:1!important;mix-blend-mode:normal!important}html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-body{border-image:linear-gradient(180deg,#5e5a52,rgba(94,90,82,.52) 68%,transparent) 1!important;background:linear-gradient(180deg,#101110 0%,#101110 70%,transparent 100%)!important}html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-body:before,html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-body:after{background:linear-gradient(180deg,#080908,rgba(8,9,8,.72) 68%,transparent)!important}html.arcane-baile-rubra .arcane-me-rp.baile .me-caixa{border-color:#731818!important}html.arcane-baile-rubra .arcane-me-rp.baile .me-topo,html.arcane-baile-rubra .arcane-me-rp.baile .me-lateral,html.arcane-baile-rubra .arcane-me-update.baile .mu-header{filter:sepia(1) saturate(3.2) hue-rotate(320deg) brightness(.44) contrast(1.2)!important}html.arcane-baile-rubra .arcane-me-rp.baile .me-topo:before{border-color:rgba(226,42,42,.42)!important;background:linear-gradient(90deg,rgba(24,0,0,.88),transparent 56%,rgba(34,0,0,.42))!important;box-shadow:inset 0 0 30px #100000!important}html.arcane-baile-rubra .arcane-me-rp.baile .me-corpo{background:linear-gradient(135deg,rgba(226,42,42,.045),transparent 42%),#160707!important}html.arcane-baile-rubra .arcane-me-rp.baile cor-1{color:#731818!important}html.arcane-baile-rubra .arcane-me-rp.baile cor-2{color:#b51f26!important}html.arcane-baile-rubra .arcane-me-rp.baile cor-3{color:#e22a2a!important}html.arcane-baile-rubra .arcane-me-rp.baile cor-4{color:#f0d9d4!important}html.arcane-baile-rubra .arcane-me-rp.baile cor-5{color:#c8aaa5!important}html.arcane-baile-rubra .arcane-me-update.baile .mu-header:before{background:linear-gradient(90deg,rgba(22,0,0,.96),rgba(45,4,4,.76) 52%,rgba(65,4,4,.30))!important}html.arcane-baile-rubra .arcane-me-update.baile .mu-header:after{inset:7px!important;border:3px double rgba(226,42,42,.38)!important;background:none!important;mix-blend-mode:normal!important}html.arcane-baile-rubra .arcane-me-update.baile .mu-body{border-image:linear-gradient(180deg,#731818,rgba(115,24,24,.54) 68%,transparent) 1!important;background:linear-gradient(180deg,#160707 0%,#160707 70%,transparent 100%)!important}html.arcane-baile-rubra .arcane-me-update.baile .mu-body:before,html.arcane-baile-rubra .arcane-me-update.baile .mu-body:after{background:linear-gradient(180deg,#100404,rgba(16,4,4,.72) 68%,transparent)!important}@media(max-width:600px){html.arcane-evento-baile-mascaras .arcane-me-rp.baile .me-topo{height:92px!important}html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-header{min-height:150px!important}}');

  instalarCSSSeguro('arcane-me-baile-update-imagem-css', 'html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-header{filter:none!important;background-image:linear-gradient(90deg,rgba(4,5,5,.82),rgba(8,9,9,.30)),url("https://i.pinimg.com/1200x/aa/f1/77/aaf177566f87a33c76660484844f707c.jpg")!important;background-position:center,center 43%!important;background-size:cover,cover!important;background-blend-mode:normal,luminosity!important}html.arcane-baile-rubra .arcane-me-update.baile .mu-header{filter:none!important;background-image:linear-gradient(90deg,rgba(35,0,0,.86),rgba(64,3,3,.46)),url("https://i.pinimg.com/1200x/aa/f1/77/aaf177566f87a33c76660484844f707c.jpg")!important;background-position:center,center 43%!important;background-size:cover,cover!important;background-blend-mode:multiply,luminosity!important}');

  /* Baile rubro: nas postagens dos usuários, o vermelho fica restrito aos acentos. */
  instalarCSSSeguro('arcane-me-baile-rubra-post-preto-css', 'html.arcane-baile-rubra .arcane-me-rp.baile{--me-fundo:#060606!important;--me-corpo:#0a0909!important}html.arcane-baile-rubra .arcane-me-rp.baile .me-caixa{background:#060606!important}html.arcane-baile-rubra .arcane-me-rp.baile .me-corpo{background:linear-gradient(135deg,rgba(226,42,42,.018),transparent 40%),#0a0909!important}html.arcane-baile-rubra .arcane-me-rp.baile.visual-lateral .arcane-baile-scroll{background:#151010!important}');

  /* Atualização da administração: fotografia tratada por multiply uniforme, sem gradiente. */
  instalarCSSSeguro('arcane-me-baile-update-multiply-css', 'html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-header{filter:none!important;background-color:#aaa79f!important;background-image:url("https://i.pinimg.com/1200x/aa/f1/77/aaf177566f87a33c76660484844f707c.jpg")!important;background-position:center 43%!important;background-size:cover!important;background-repeat:no-repeat!important;background-blend-mode:multiply!important}html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-header:before{background:rgba(8,8,8,.22)!important;mix-blend-mode:multiply!important}html.arcane-baile-rubra .arcane-me-update.baile .mu-header{filter:none!important;background-color:#741414!important;background-image:url("https://i.pinimg.com/1200x/aa/f1/77/aaf177566f87a33c76660484844f707c.jpg")!important;background-position:center 43%!important;background-size:cover!important;background-repeat:no-repeat!important;background-blend-mode:multiply!important}html.arcane-baile-rubra .arcane-me-update.baile .mu-header:before{background:rgba(35,0,0,.28)!important;mix-blend-mode:multiply!important}');

  instalarCSSSeguro('arcane-me-baile-v018-fase-publicada-css', '#arcane-baile-preview .ab-controles label{cursor:default!important}html.arcane-evento-baile-mascaras:not(.arcane-baile-rubra) .arcane-me-update.baile .mu-header{filter:none!important;background-color:#777a7c!important;background-blend-mode:luminosity!important}html.arcane-evento-baile-mascaras:not(.arcane-baile-rubra) .arcane-me-update.baile .mu-header:before{background:rgba(5,6,6,.48)!important;mix-blend-mode:multiply!important}html.arcane-evento-baile-mascaras:not(.arcane-baile-rubra) .arcane-me-update.baile .mu-label{color:#dedbd3!important}html.arcane-evento-baile-mascaras:not(.arcane-baile-rubra) .arcane-me-update.baile .mu-title{color:#f3f0e9!important;text-shadow:0 2px 12px rgba(0,0,0,.72)!important}html.arcane-evento-baile-mascaras:not(.arcane-baile-rubra) .arcane-me-update.baile .mu-subtitle{color:#d0cec8!important;text-shadow:0 1px 8px rgba(0,0,0,.68)!important}');

  instalarCSSSeguro('arcane-me-baile-v018-ocultar-seletor-css', '#arcane-baile-preview .ab-controles{display:none!important}');

  /* V0.1.20: a abertura rubra recebe o mesmo vinho quase preto dos cards, sem
     o gradiente legado. Depois da publicação do marcador permanente, o gatilho
     não volta a ser oferecido no formulário da administração. */
  instalarCSSSeguro('arcane-me-baile-v022-fase-rubra-css', 'html.arcane-baile-rubra #arcane-baile-preview #ab-rubra:checked~.ab-caixa .ab-header{filter:none!important;background-color:#741414!important;background-image:url("https://i.pinimg.com/1200x/aa/f1/77/aaf177566f87a33c76660484844f707c.jpg")!important;background-position:center 43%!important;background-size:cover!important;background-repeat:no-repeat!important;background-blend-mode:multiply!important}html.arcane-baile-rubra #arcane-baile-preview #ab-rubra:checked~.ab-caixa .ab-header:before{display:none!important;content:none!important}html.arcane-baile-rubra .arcane-me-meta .arcane-me-fase-rubra{display:none!important}');

  /* Os corvos enquadram o formulário pelos dois lados; o lado direito é espelhado. */
  instalarCSSSeguro('arcane-me-baile-update-prata-fix-css', 'html.arcane-evento-baile-mascaras:not(.arcane-baile-rubra) .arcane-me-update.baile .mu-header{filter:grayscale(1) brightness(.68) contrast(1.14)!important;background-color:#bfc1c3!important;background-blend-mode:multiply!important}html.arcane-evento-baile-mascaras:not(.arcane-baile-rubra) .arcane-me-update.baile .mu-header:before{background:rgba(12,13,14,.18)!important;mix-blend-mode:multiply!important}');

  /* V0.1.16: a troca de fase preserva a geometria interna do header. O card da
     administração centraliza seu conjunto tipográfico e prolonga a moldura do
     cabeçalho pelas laterais do corpo. */
  instalarCSSSeguro('arcane-me-baile-v016-acabamento-css', 'html.arcane-baile-rubra #arcane-baile-preview .ab-titulo>.ab-depois{display:block!important;margin:10px 0 0!important}html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-header{display:flex!important;flex-direction:column!important;justify-content:center!important;padding:30px 40px!important;border-left-color:#777269!important;border-right-color:#777269!important}html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-body{border-image:linear-gradient(180deg,#777269 0%,rgba(119,114,105,.58) 48%,rgba(94,90,82,.25) 78%,transparent 100%) 1!important}html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-transition{background:linear-gradient(180deg,rgba(8,9,8,.92) 0%,rgba(8,9,8,.40) 48%,transparent 100%)!important}html.arcane-baile-rubra .arcane-me-update.baile .mu-header{border-left-color:#8f2424!important;border-right-color:#8f2424!important}html.arcane-baile-rubra .arcane-me-update.baile .mu-body{border-image:linear-gradient(180deg,#8f2424 0%,rgba(143,36,36,.60) 48%,rgba(115,24,24,.26) 78%,transparent 100%) 1!important}html.arcane-baile-rubra .arcane-me-update.baile .mu-transition{background:linear-gradient(180deg,rgba(16,4,4,.94) 0%,rgba(16,4,4,.42) 48%,transparent 100%)!important}@media(max-width:600px){html.arcane-evento-baile-mascaras .arcane-me-update.baile .mu-header{padding:25px 24px!important}}');

  instalarCSSSeguro('arcane-me-baile-form-corvos-css', 'html.arcane-evento-baile-mascaras .arcane-me-form:after{transform:scaleX(-1) rotate(var(--arcane-decor-baixo-rotacao))!important;transform-origin:center!important}');

  /* Baile: o visual lateral mantém a fotografia fixa e rola somente o texto. A barra
     é desenhada pelo próprio motor para não herdar a scrollbar global do fórum. */
  instalarCSSSeguro('arcane-me-baile-lateral-scroll-css', '.arcane-me-rp.baile.visual-lateral .me-caixa{grid-template-columns:210px minmax(0,1fr)!important;height:440px!important}.arcane-me-rp.baile.visual-lateral .me-lateral{display:block!important;height:440px!important;min-height:0!important}.arcane-me-rp.baile.visual-lateral .me-corpo{position:relative!important;height:440px!important;min-height:0!important;overflow:hidden!important;padding-right:36px!important}.arcane-me-rp.baile.visual-lateral .me-corpo>texto-evento{display:block!important;width:100%!important;height:100%!important;overflow-x:hidden!important;overflow-y:auto!important;overscroll-behavior:contain!important;padding-right:14px!important;scrollbar-width:none!important;-ms-overflow-style:none!important}.arcane-me-rp.baile.visual-lateral .me-corpo>texto-evento::-webkit-scrollbar{display:none!important;width:0!important;height:0!important}.arcane-me-rp.baile.visual-lateral .arcane-baile-scroll{position:absolute!important;z-index:4!important;top:18px!important;right:12px!important;bottom:18px!important;display:block!important;width:4px!important;min-width:4px!important;max-width:4px!important;height:auto!important;margin:0!important;padding:0!important;overflow:hidden!important;border:0!important;border-radius:0!important;background:color-mix(in srgb,var(--me-cor) 14%,#080908)!important;box-shadow:none!important;pointer-events:none!important}.arcane-me-rp.baile.visual-lateral .arcane-baile-scroll-thumb{position:absolute!important;top:0!important;left:0!important;display:block!important;width:4px!important;min-width:4px!important;max-width:4px!important;height:40px;margin:0!important;padding:0!important;border:0!important;border-radius:0!important;background:var(--me-cor)!important;box-shadow:none!important;transform:translateY(0)}@media(max-width:600px){.arcane-me-rp.baile.visual-lateral .me-caixa{display:block!important;height:auto!important}.arcane-me-rp.baile.visual-lateral .me-lateral{height:190px!important;min-height:190px!important;border-right:0!important;border-bottom:1px solid color-mix(in srgb,var(--me-cor) 55%,transparent)!important}.arcane-me-rp.baile.visual-lateral .me-corpo{height:320px!important;padding-right:22px!important}.arcane-me-rp.baile.visual-lateral .me-corpo>texto-evento{padding-right:12px!important}.arcane-me-rp.baile.visual-lateral .arcane-baile-scroll{right:8px!important}}');

  function prepararScrollBaile() {
    Array.prototype.forEach.call(document.querySelectorAll('.arcane-me-rp.baile.visual-lateral .me-corpo'), function (corpo) {
      var texto = corpo.querySelector(':scope > texto-evento');
      if (!texto) return;
      var trilho = corpo.querySelector(':scope > .arcane-baile-scroll');
      if (!trilho) {
        trilho = document.createElement('span');
        trilho.className = 'arcane-baile-scroll';
        trilho.setAttribute('aria-hidden', 'true');
        trilho.innerHTML = '<span class="arcane-baile-scroll-thumb"></span>';
        corpo.appendChild(trilho);
      }
      if (texto.getAttribute('data-arcane-baile-scroll') === '1') return;
      texto.setAttribute('data-arcane-baile-scroll', '1');
      var polegar = trilho.querySelector('.arcane-baile-scroll-thumb');
      var sincronizar = function () {
        var alturaTrilho = trilho.clientHeight;
        var maximo = texto.scrollHeight - texto.clientHeight;
        if (maximo <= 1 || alturaTrilho <= 0) {
          trilho.style.visibility = 'hidden';
          return;
        }
        trilho.style.visibility = 'visible';
        var alturaPolegar = Math.max(28, alturaTrilho * (texto.clientHeight / texto.scrollHeight));
        var percurso = alturaTrilho - alturaPolegar;
        polegar.style.height = alturaPolegar + 'px';
        polegar.style.transform = 'translateY(' + (percurso * texto.scrollTop / maximo) + 'px)';
      };
      texto.addEventListener('scroll', sincronizar, { passive: true });
      if (window.ResizeObserver) new ResizeObserver(sincronizar).observe(texto);
      window.setTimeout(sincronizar, 0);
    });
  }

  function ativarCSSAbertura(e) {
    if (!e || !e.marcador) return;
    var postagem = e.marcador.closest('.post');
    if (!postagem) return;
    var ehNarracao = postagem.querySelector('#rpost-header .poster-name>a[href="/u1"],.postprofile .avatar-container>a[href="/u1"],#rpost-header .poster-name>a:not([href])');
    if (!ehNarracao) return;
    var estilos = e.marcador.querySelectorAll('style');
    Array.prototype.forEach.call(estilos, function (origem, indice) {
      var id = 'arcane-me-abertura-css-' + e.id + '-' + indice;
      instalarCSSSeguro(id, origem.textContent || origem.innerHTML || '');
    });
  }

  function escapar(valor) {
    return String(valor || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    }).replace(/\s+/g, ' ').trim();
  }

  function cssPost(e) {
    var c = e.config;
    var base = '.arcane-me-rp{--me-cor:' + c.cor + ';--me-cor2:' + c.cor2 + ';--me-cor3:' + c.cor3 + ';--me-fundo:' + c.fundo + ';--me-corpo:' + c.corpo + ';--me-linha:' + c.linha + ';--me-texto:' + c.texto + ';--me-largura:640px;width:min(var(--me-largura),calc(100% - 20px));margin:24px auto;color:var(--me-texto)}' +
      '.arcane-me-rp.estreito{--me-largura:520px}.arcane-me-rp.medio{--me-largura:640px}.arcane-me-rp.largo{--me-largura:760px}.arcane-me-rp *{box-sizing:border-box}' +
      '.arcane-me-rp .me-caixa{overflow:hidden;border:1px solid color-mix(in srgb,var(--me-linha) 80%,transparent);background:var(--me-fundo)}' +
      '.arcane-me-rp.visual-lateral .me-caixa{display:grid;grid-template-columns:54px minmax(0,1fr)}.arcane-me-rp.visual-lateral .me-topo{display:none}.arcane-me-rp.visual-header .me-lateral{display:none}' +
      '.arcane-me-rp.visual-celeste .me-caixa{display:block}.arcane-me-rp.visual-celeste .me-lateral{display:none}.arcane-me-rp.visual-celeste .me-topo{display:block;height:100px}' +
      '.arcane-me-rp .me-topo,.arcane-me-rp .me-lateral{position:relative;overflow:hidden;background-color:var(--me-fundo)}' +
      '.arcane-me-rp .me-topo{height:76px}.arcane-me-rp .me-lateral{min-height:100%;border-right:1px solid color-mix(in srgb,var(--me-cor) 55%,transparent)}' +
      '.arcane-me-rp.chuva .me-topo,.arcane-me-rp.chuva .me-lateral{background-image:radial-gradient(circle at 12% 30%,var(--me-cor2) 0 1px,transparent 2px),radial-gradient(circle at 27% 72%,var(--me-cor3) 0 1.2px,transparent 2px),radial-gradient(circle at 43% 22%,var(--me-cor) 0 1px,transparent 2px),radial-gradient(circle at 58% 61%,#fff 0 1px,transparent 2px),radial-gradient(circle at 73% 28%,var(--me-cor3) 0 1.3px,transparent 2px),radial-gradient(circle at 89% 69%,var(--me-cor2) 0 1px,transparent 2px),linear-gradient(115deg,#0d0913,#24172f 55%,#17141b)}' +
      '.arcane-me-rp.tempestade .me-topo,.arcane-me-rp.tempestade .me-lateral{background-image:linear-gradient(118deg,transparent 0 47%,rgba(216,192,244,.72) 48%,transparent 49% 100%),linear-gradient(64deg,transparent 0 69%,rgba(118,158,232,.4) 70%,transparent 71%),radial-gradient(circle at 20% 35%,var(--me-cor2) 0 1px,transparent 2px),radial-gradient(circle at 78% 62%,var(--me-cor) 0 1px,transparent 2px),linear-gradient(110deg,#08040f,#281541 52%,#0d0816)}' +
      '.arcane-me-rp.blecaute .me-topo,.arcane-me-rp.blecaute .me-lateral{background-image:radial-gradient(circle at 7% 31%,#b7def8 0 1px,transparent 1.5px),radial-gradient(circle at 24% 43%,#d3ebfb 0 1.4px,transparent 2px),radial-gradient(circle at 42% 68%,#a6d0ec 0 1px,transparent 1.7px),radial-gradient(circle at 70% 24%,#a9d3ef 0 1px,transparent 1.7px),radial-gradient(circle at 89% 60%,#dceffe 0 1.2px,transparent 2px),linear-gradient(100deg,#030609 0%,#07131d 48%,#03070b 100%)}' +
      '.arcane-me-rp .me-corpo{min-width:0;padding:32px 38px;background:var(--me-corpo)!important;color:var(--me-texto);font:400 12px/1.78 Poppins,Arial,sans-serif;text-align:justify}' +
      '.arcane-me-rp .me-corpo p{margin:0 0 15px!important;padding:0!important;background:none!important;color:inherit}.arcane-me-rp .me-corpo p:last-child{margin-bottom:0!important}' +
      '.arcane-me-rp b{font-weight:700}.arcane-me-rp i{font-style:italic}.arcane-me-rp cor-1{color:' + c.cores[0] + '}.arcane-me-rp cor-2{color:' + c.cores[1] + '}.arcane-me-rp cor-3{color:' + c.cores[2] + '}.arcane-me-rp cor-4{color:' + c.cores[3] + '}.arcane-me-rp cor-5{color:' + c.cores[4] + '}.arcane-me-rp texto-evento{display:contents}' +
      '.arcane-me-rp:after{content:"[ARCANE]"!important;display:block;margin:6px 0 0;color:#969696;font:700 8.5px/1 Consolas,monospace;text-align:center}' +
      '@media(max-width:600px){.arcane-me-rp{width:calc(100% - 12px)}.arcane-me-rp.visual-lateral .me-caixa{grid-template-columns:38px minmax(0,1fr)}.arcane-me-rp .me-topo{height:62px}.arcane-me-rp .me-corpo{padding:26px 24px;text-align:left}}';
    if (e.id === 'tempestade-magica') return base +
      '.arcane-me-rp.tempestade .me-caixa{border:1px solid transparent;background:linear-gradient(#14151a,#14151a) padding-box,linear-gradient(125deg,rgba(112,67,168,.88),rgba(154,104,222,.76) 20%,rgba(199,188,220,.82) 39%,rgba(239,237,244,.94) 51%,rgba(204,192,224,.82) 64%,rgba(154,104,222,.76) 81%,rgba(102,59,158,.82)) border-box}' +
      '.arcane-me-rp.tempestade.visual-header .me-topo{height:82px;background:linear-gradient(90deg,rgba(5,5,11,.96),rgba(8,8,19,.80) 27%,rgba(13,10,27,.48) 58%,rgba(31,14,48,.20)),linear-gradient(0deg,rgba(5,5,10,.53),rgba(8,8,17,.08) 58%,transparent),url(https://i.pinimg.com/736x/c6/bf/46/c6bf46cf522fdbf26329bd0895bbadc0.jpg) center 48%/cover no-repeat}' +
      '.arcane-me-rp.tempestade.visual-header .me-topo:before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 66% 48%,rgba(224,213,255,.10),rgba(157,99,255,.045) 24%,transparent 51%),radial-gradient(ellipse at 82% 46%,rgba(210,92,255,.035),transparent 42%)}' +
      '.arcane-me-rp.tempestade.visual-header .me-topo:after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:linear-gradient(90deg,rgba(101,61,157,.42),rgba(164,112,226,.68) 29%,rgba(240,237,245,.98) 50%,rgba(164,112,226,.68) 71%,rgba(101,61,157,.42));box-shadow:0 0 2px rgba(240,237,245,.72),0 0 5px rgba(157,99,255,.42),0 0 11px rgba(157,99,255,.15)}' +
      '.arcane-me-rp.tempestade.visual-lateral .me-caixa{grid-template-columns:92px minmax(0,1fr)}.arcane-me-rp.tempestade.visual-lateral .me-lateral{border-right:0;background:radial-gradient(ellipse at 52% 49%,rgba(211,183,255,.24),rgba(157,99,255,.20) 14%,rgba(106,66,168,.12) 31%,transparent 56%),linear-gradient(180deg,#08070e,#101020 18%,#25163d 37%,#42235f 50%,#25163d 63%,#101020 82%,#08070e)}' +
      '.arcane-me-rp.tempestade.visual-lateral .me-lateral:before{content:"";position:absolute;left:50%;top:50%;width:34px;height:1px;transform:translate(-50%,-50%);background:linear-gradient(90deg,transparent,rgba(183,144,239,.42) 31%,rgba(242,239,247,.96) 50%,rgba(183,144,239,.42) 69%,transparent);box-shadow:0 0 3px rgba(239,233,248,.46),0 0 8px rgba(157,99,255,.30)}' +
      '.arcane-me-rp.tempestade.visual-lateral .me-lateral:after{content:"";position:absolute;top:0;right:0;bottom:0;width:1px;background:linear-gradient(180deg,rgba(111,65,166,.34),rgba(194,159,239,.74) 38%,rgba(242,239,247,.98) 50%,rgba(194,159,239,.74) 62%,rgba(111,65,166,.34));box-shadow:0 0 3px rgba(231,219,247,.50),0 0 7px rgba(157,99,255,.34),0 0 14px rgba(157,99,255,.11)}' +
      '@media(max-width:600px){.arcane-me-rp.tempestade.visual-lateral .me-caixa{display:block}.arcane-me-rp.tempestade.visual-lateral .me-lateral{display:block;height:54px;min-height:54px}.arcane-me-rp.tempestade.visual-lateral .me-lateral:after{left:0;right:0;top:auto;bottom:0;width:100%;height:1px;background:linear-gradient(90deg,rgba(111,65,166,.34),rgba(194,159,239,.74) 38%,rgba(242,239,247,.98) 50%,rgba(194,159,239,.74) 62%,rgba(111,65,166,.34))}.arcane-me-rp.tempestade.visual-header .me-topo{height:66px}}';
    if (e.id !== 'chuva-estrelas') return base;
    return base +
      '.arcane-estrelas-rp,.arcane-estrelas-celeste{--er-fala:#d8c5f4;--er-pensamento:#c9ae76;--er-corpo:#17141b;--er-texto:#ded9e5;--er-largura:640px;width:min(var(--er-largura),calc(100% - 20px));margin:24px auto;color:var(--er-texto)}.arcane-estrelas-rp.estreito,.arcane-estrelas-celeste.estreito{--er-largura:520px}.arcane-estrelas-rp.medio,.arcane-estrelas-celeste.medio{--er-largura:640px}.arcane-estrelas-rp.largo,.arcane-estrelas-celeste.largo{--er-largura:760px}.arcane-estrelas-rp *,.arcane-estrelas-celeste *{box-sizing:border-box}' +
      '.arcane-estrelas-rp .er-caixa{overflow:hidden;border:1px solid rgba(104,80,132,.72);background:#0d0913}.arcane-estrelas-rp .er-header{position:relative;height:124px;overflow:hidden;background:#0d0913 url(https://i.pinimg.com/1200x/4c/2f/a1/4c2fa156ce3277d353a8ebf6c6c5af70.jpg) center 34%/cover no-repeat;isolation:isolate}.arcane-estrelas-rp .er-header:before{content:"";position:absolute;inset:0;z-index:0;background:linear-gradient(90deg,rgba(10,6,15,.91),rgba(32,17,47,.62) 46%,rgba(57,35,79,.38)),rgba(73,45,105,.15)}.arcane-estrelas-rp .er-header:after{content:"";position:absolute;left:0;right:0;bottom:0;height:58px;background:linear-gradient(180deg,transparent,rgba(23,20,27,.15) 40%,rgba(23,20,27,.64) 79%,#17141b)}' +
      '.arcane-estrelas-rp .er-stars,.arcane-estrelas-celeste .ec-stars{position:absolute;inset:0;z-index:3;pointer-events:none}.arcane-estrelas-rp .er-stars i,.arcane-estrelas-celeste .ec-stars i{position:absolute;display:block;width:4px;height:4px;background:#fff0b7;clip-path:polygon(50% 0,61% 38%,100% 50%,61% 62%,50% 100%,39% 62%,0 50%,39% 38%);filter:drop-shadow(0 0 2px #fff) drop-shadow(0 0 6px rgba(192,163,239,.65))}.arcane-estrelas-rp .er-stars i:nth-child(1){left:8%;top:25%;width:3px;height:3px;background:#fff}.arcane-estrelas-rp .er-stars i:nth-child(2){left:24%;top:54%;width:5px;height:5px;background:#ddcdf7}.arcane-estrelas-rp .er-stars i:nth-child(3){left:43%;top:24%;width:3px;height:3px}.arcane-estrelas-rp .er-stars i:nth-child(4){right:38%;top:50%;width:6px;height:6px;background:#f5edff}.arcane-estrelas-rp .er-stars i:nth-child(5){right:19%;top:20%}.arcane-estrelas-rp .er-stars i:nth-child(6){right:7%;top:58%;width:3px;height:3px;background:#ddcdf7}' +
      '.arcane-estrelas-rp .er-corpo,.arcane-estrelas-celeste .ec-corpo{padding:31px 37px 29px;background:#17141b!important;color:#ded9e5;font:400 11px/1.78 Poppins,Arial,sans-serif;text-align:justify}.arcane-estrelas-rp .er-corpo p,.arcane-estrelas-celeste .ec-corpo p{margin:0 0 15px!important;padding:0!important;background:none!important;color:inherit}.arcane-estrelas-rp .er-corpo p:last-child,.arcane-estrelas-celeste .ec-corpo p:last-child{margin-bottom:0!important}' +
      '.arcane-estrelas-celeste .ec-caixa{position:relative;overflow:hidden;border:1px solid transparent;background:linear-gradient(#17141b,#17141b) padding-box,linear-gradient(125deg,rgba(230,199,122,.82),rgba(192,163,239,.58) 31%,rgba(104,80,132,.82) 55%,rgba(192,163,239,.72) 76%,rgba(230,199,122,.62)) border-box}.arcane-estrelas-celeste .ec-topo{position:relative;height:100px;overflow:visible;z-index:2;background:linear-gradient(180deg,rgba(105,72,143,.065),rgba(87,57,119,.035) 42%,rgba(192,163,239,.018) 70%,transparent)}.arcane-estrelas-celeste .ec-topo:after{content:"";position:absolute;left:0;right:0;bottom:-44px;height:72px;background:linear-gradient(180deg,rgba(104,80,132,.035),rgba(192,163,239,.012) 56%,transparent)}.arcane-estrelas-celeste .ec-corpo{position:relative;z-index:1;padding:18px 38px 32px;background:transparent!important}' +
      '.arcane-estrelas-celeste .ec-stars i:nth-child(1){left:6%;top:18%;width:2px;height:2px}.arcane-estrelas-celeste .ec-stars i:nth-child(2){left:15%;top:51%;width:5px;height:5px;background:#ddcdf7}.arcane-estrelas-celeste .ec-stars i:nth-child(3){left:28%;top:20%;width:9px;height:9px;background:#fff7d4}.arcane-estrelas-celeste .ec-stars i:nth-child(4){left:39%;top:57%;width:2px;height:2px;background:#fff}.arcane-estrelas-celeste .ec-stars i:nth-child(5){left:47%;top:16%;width:7px;height:7px;background:#ddcdf7}.arcane-estrelas-celeste .ec-stars i:nth-child(6){left:58%;top:48%;width:6px;height:6px}.arcane-estrelas-celeste .ec-stars i:nth-child(7){left:68%;top:17%;width:2px;height:2px;background:#ddcdf7}.arcane-estrelas-celeste .ec-stars i:nth-child(8){right:20%;top:43%;width:9px;height:9px;background:#eee3ff}.arcane-estrelas-celeste .ec-stars i:nth-child(9){right:11%;top:17%}.arcane-estrelas-celeste .ec-stars i:nth-child(10){right:4%;top:59%;width:7px;height:7px;background:#fff5c8}.arcane-estrelas-celeste .ec-stars i:nth-child(11){left:22%;top:72%;width:3px;height:3px;background:#fff}.arcane-estrelas-celeste .ec-stars i:nth-child(12){right:31%;top:72%}.arcane-estrelas-celeste .ec-stars i:nth-child(13){left:9%;top:86%;width:5px;height:5px;background:#ddcdf7}.arcane-estrelas-celeste .ec-stars i:nth-child(14){left:35%;top:91%}.arcane-estrelas-celeste .ec-stars i:nth-child(15){right:39%;top:88%;width:6px;height:6px;background:#fff9df}.arcane-estrelas-celeste .ec-stars i:nth-child(16){right:12%;top:94%;width:3px;height:3px;background:#ddcdf7}.arcane-estrelas-celeste .ec-stars i:nth-child(17){left:18%;top:108%}.arcane-estrelas-celeste .ec-stars i:nth-child(18){left:52%;top:113%;width:3px;height:3px;background:#ddcdf7}.arcane-estrelas-celeste .ec-stars i:nth-child(19){right:23%;top:106%;width:5px;height:5px;background:#eee3ff}.arcane-estrelas-celeste .ec-stars i:nth-child(20){right:6%;top:119%;width:2px;height:2px}.arcane-estrelas-celeste .ec-stars i:nth-child(21){left:7%;top:131%;width:2px;height:2px;background:#ddcdf7}.arcane-estrelas-celeste .ec-stars i:nth-child(22){left:41%;top:126%;width:3px;height:3px}.arcane-estrelas-celeste .ec-stars i:nth-child(23){right:34%;top:134%;width:2px;height:2px;background:#fff}.arcane-estrelas-celeste .ec-stars i:nth-child(24){right:9%;top:128%;width:3px;height:3px;background:#ddcdf7}' +
      '.arcane-estrelas-rp b,.arcane-estrelas-celeste b{font-weight:700}.arcane-estrelas-rp i:not(.er-stars i),.arcane-estrelas-celeste i:not(.ec-stars i){font-style:italic}.arcane-estrelas-rp cor-1,.arcane-estrelas-celeste cor-1{color:' + c.cores[0] + '}.arcane-estrelas-rp cor-2,.arcane-estrelas-celeste cor-2{color:' + c.cores[1] + '}.arcane-estrelas-rp cor-3,.arcane-estrelas-celeste cor-3{color:' + c.cores[2] + '}.arcane-estrelas-rp cor-4,.arcane-estrelas-celeste cor-4{color:' + c.cores[3] + '}.arcane-estrelas-rp cor-5,.arcane-estrelas-celeste cor-5{color:' + c.cores[4] + '}.arcane-estrelas-rp texto-evento,.arcane-estrelas-celeste texto-evento{display:contents}.arcane-estrelas-rp:after,.arcane-estrelas-celeste:after{content:"[ARCANE]"!important;display:block;margin:6px 0 0;color:#969696;font:700 8.5px/1 Consolas,monospace;text-align:center}' +
      '@media(max-width:600px){.arcane-estrelas-rp,.arcane-estrelas-celeste{width:calc(100% - 12px)}.arcane-estrelas-rp .er-header{height:96px}.arcane-estrelas-rp .er-corpo,.arcane-estrelas-celeste .ec-corpo{padding:25px 24px;text-align:left}.arcane-estrelas-celeste .ec-topo{height:82px}.arcane-estrelas-celeste .ec-stars i:nth-child(n+21){display:none}}';
  }

  function cssAtualizacao(e) {
    var c = e.config;
    var a = c.atualizacao || {};
    var fundoCabecalho = a.imagem
      ? 'url("' + a.imagem + '")'
      : 'linear-gradient(110deg,#020407,' + c.fundo + ' 58%,#020407)';
    var posicaoCabecalho = a.posicao || 'center';
    return '.arcane-me-update{--mu-cor:' + c.cor + ';--mu-cor2:' + c.cor2 + ';--mu-cor3:' + c.cor3 + ';--mu-fundo:' + c.fundo + ';--mu-corpo:' + c.corpo + ';--mu-linha:' + c.linha + ';--mu-texto:' + c.texto + ';width:min(760px,calc(100% - 20px));margin:26px auto;color:var(--mu-texto)}.arcane-me-update *{box-sizing:border-box}' +
      /* Molde compartilhado com o card de atualização do Blecaute. */
      '.arcane-me-update .mu-header{position:relative;min-height:148px;padding:31px 40px 27px;overflow:hidden;border:1px solid var(--mu-linha);border-bottom:0;background:#080c10 ' + fundoCabecalho + ' ' + posicaoCabecalho + '/cover no-repeat;isolation:isolate}' +
      '.arcane-me-update .mu-header:before{content:"";position:absolute;inset:0;z-index:0;background:linear-gradient(90deg,rgba(3,9,15,.98) 0%,rgba(7,23,35,.77) 55%,rgba(3,10,16,.91) 100%),linear-gradient(0deg,rgba(3,8,13,.9),transparent 76%),rgba(22,59,88,.42);mix-blend-mode:multiply;pointer-events:none}' +
      '.arcane-me-update .mu-header:after{content:"";position:absolute;inset:0;z-index:0;opacity:.14;background:repeating-radial-gradient(circle at 20% 30%,transparent 0 2px,rgba(255,255,255,.12) 3px 4px);background-size:13px 11px;mix-blend-mode:soft-light;pointer-events:none}' +
      /* A Chuva conserva o molde, mas troca a camada azul por lilás, ouro e estrelas. */
      /* Mantém o filtro cromático e a textura; remove somente o fade inferior da foto. */
      '.arcane-me-update.chuva .mu-header{background-color:#0d0913;background-image:radial-gradient(ellipse at 100% 100%,#0d0913 0%,rgba(13,9,19,.92) 18px,rgba(13,9,19,.48) 43px,transparent 74px),' + fundoCabecalho + ';background-position:right bottom,' + posicaoCabecalho + ';background-size:92px 92px,cover;background-repeat:no-repeat,no-repeat;background-blend-mode:normal,normal;filter:none!important}' +
      '.arcane-me-update.chuva .mu-header:before{background:linear-gradient(90deg,rgba(13,7,22,.92) 0%,rgba(38,18,60,.70) 45%,rgba(88,52,120,.35) 100%),rgba(87,55,125,.18);mix-blend-mode:multiply}' +
      '.arcane-me-update.chuva .mu-header:after{display:block!important;top:0;right:0;bottom:auto;left:0;height:100%;opacity:.14;background:repeating-radial-gradient(circle at 20% 30%,transparent 0 2px,rgba(255,255,255,.12) 3px 4px);background-size:13px 11px;mix-blend-mode:soft-light}' +
      '.arcane-me-update.tempestade .mu-header:before{background:linear-gradient(90deg,rgba(7,3,13,.96),rgba(31,17,55,.70) 53%,rgba(8,4,15,.90));mix-blend-mode:normal}' +
      '.arcane-me-update .mu-label,.arcane-me-update .mu-title,.arcane-me-update .mu-subtitle{position:relative;z-index:1}' +
      '.arcane-me-update .mu-label{color:var(--mu-cor);font:600 9px/1 Montserrat,Arial,sans-serif;letter-spacing:1.65px;text-transform:uppercase}.arcane-me-update .mu-title{margin:13px 0 6px;color:#e7ebed;font:normal 36px/.94 "Modern Aesthetic",serif;letter-spacing:.1px;text-align:left;text-transform:uppercase}.arcane-me-update .mu-subtitle{color:#b2bdc4;font:500 11px/1.5 Poppins,Arial,sans-serif;letter-spacing:.15px;text-align:left}' +
      '.arcane-me-update .mu-detail{position:absolute;top:var(--mu-detalhe-topo,12px);right:var(--mu-detalhe-direita,18px);z-index:1;width:var(--mu-detalhe-largura,96px);height:var(--mu-detalhe-altura,96px);background:var(--mu-detalhe-imagem) center/contain no-repeat;opacity:var(--mu-detalhe-opacidade,.48);pointer-events:none}' +
      '.arcane-me-update .mu-body{position:relative;isolation:isolate;overflow:hidden;padding:34px 63px 78px;border-style:solid;border-width:0 1px;border-color:transparent;border-image:linear-gradient(180deg,var(--mu-linha) 0%,rgba(104,80,132,.76) 30%,rgba(104,80,132,.3) 72%,transparent 100%) 1;background:linear-gradient(180deg,var(--mu-corpo) 0%,var(--mu-corpo) 68%,transparent 100%)!important;color:var(--mu-texto);font:400 13px/1.75 Poppins,Arial,sans-serif;text-align:justify}' +
      /* Fade inferior do corpo preservado como no card original do Blecaute. */
      '.arcane-me-update.chuva .mu-body{border-image:linear-gradient(180deg,#685084 0%,rgba(104,80,132,.76) 30%,rgba(104,80,132,.3) 72%,transparent 100%) 1!important;background:linear-gradient(180deg,#17141b 0%,#17141b 68%,rgba(23,20,27,.62) 84%,rgba(23,20,27,0) 100%)!important}' +
      '.arcane-me-update .mu-transition{position:absolute;z-index:0;top:0;left:0;right:0;height:34px;background:linear-gradient(180deg,rgba(8,12,16,.78) 0%,rgba(8,12,16,.34) 48%,transparent 100%);pointer-events:none}' +
      '.arcane-me-update.chuva .mu-transition{background:linear-gradient(180deg,rgba(13,9,19,.78) 0%,rgba(23,20,27,.34) 48%,transparent 100%)}' +
      /* Faixas laterais herdadas do Blecaute, com o mesmo acabamento nos dois lados. */
      '.arcane-me-update .mu-body:before,.arcane-me-update .mu-body:after{content:"";position:absolute;z-index:0;top:0;bottom:0;width:20px;height:auto;border:0;pointer-events:none;box-shadow:inset 0 44px 42px -24px rgba(0,1,3,.72)!important}' +
      '.arcane-me-update .mu-body:before{left:0;background:radial-gradient(circle at 38% 7%,var(--mu-cor2) 0 1px,transparent 1.8px),radial-gradient(circle at 68% 18%,var(--mu-cor) 0 .8px,transparent 1.5px),radial-gradient(circle at 25% 31%,var(--mu-cor2) 0 1.2px,transparent 2px),radial-gradient(circle at 72% 46%,var(--mu-cor) 0 .8px,transparent 1.5px),radial-gradient(circle at 36% 61%,var(--mu-cor2) 0 1px,transparent 1.8px),radial-gradient(circle at 70% 76%,var(--mu-cor3) 0 .9px,transparent 1.6px),linear-gradient(180deg,var(--mu-fundo) 0%,var(--mu-fundo) 58%,transparent 100%)}' +
      '.arcane-me-update .mu-body:after{left:auto;right:0;background:radial-gradient(circle at 62% 10%,var(--mu-cor2) 0 1px,transparent 1.8px),radial-gradient(circle at 28% 23%,var(--mu-cor) 0 .8px,transparent 1.5px),radial-gradient(circle at 70% 38%,var(--mu-cor2) 0 1.15px,transparent 2px),radial-gradient(circle at 31% 53%,var(--mu-cor) 0 .8px,transparent 1.5px),radial-gradient(circle at 66% 68%,var(--mu-cor2) 0 1px,transparent 1.8px),radial-gradient(circle at 29% 82%,var(--mu-cor3) 0 .9px,transparent 1.6px),linear-gradient(180deg,var(--mu-fundo) 0%,var(--mu-fundo) 58%,transparent 100%)}' +
      '.arcane-me-update texto-update{display:contents}.arcane-me-update meta-titulo,.arcane-me-update meta-subtitulo{display:none}.arcane-me-update:after{content:"[ARCANE]";display:block;margin:4px 0;color:#969696;font:700 9px/1 Consolas,monospace;text-align:center}' +
      '@media(max-width:600px){.arcane-me-update{width:calc(100% - 12px)}.arcane-me-update .mu-header{min-height:132px;padding:26px 24px 23px}.arcane-me-update .mu-title{font-size:30px}.arcane-me-update .mu-body{padding:28px 44px 66px;font-size:12px;text-align:left}.arcane-me-update .mu-body:before,.arcane-me-update .mu-body:after{width:14px}.arcane-me-update .mu-detail{width:68px;height:68px;opacity:.30}}';
  }

  var TAGS_EDITOR = ['b', 'i', 'cor-1', 'cor-2', 'cor-3', 'cor-4', 'cor-5'];

  function extrairCorpo(codigo) {
    var r = String(codigo || '').match(/<texto-(?:evento|update|blecaute|atualizacao)>([\s\S]*?)<\/texto-(?:evento|update|blecaute|atualizacao)>/i);
    return r ? r[1] : null;
  }

  function extrairMeta(codigo, nome) {
    var r = String(codigo || '').match(new RegExp('<' + nome + '>([\\s\\S]*?)<\\/' + nome + '>', 'i'));
    if (!r && nome === 'meta-titulo') r = String(codigo || '').match(/<titulo-atualizacao>([\s\S]*?)<\/titulo-atualizacao>/i);
    if (!r && nome === 'meta-subtitulo') r = String(codigo || '').match(/<subtitulo-atualizacao>([\s\S]*?)<\/subtitulo-atualizacao>/i);
    if (!r) return '';
    var area = document.createElement('textarea'); area.innerHTML = r[1].replace(/<[^>]*>/g, '');
    return area.value.trim();
  }

  function limpar(texto) {
    var corpo = extrairCorpo(texto); if (corpo !== null) texto = corpo;
    texto = String(texto || '').replace(/\r\n?/g, '\n');
    texto = texto.replace(/<\s*(script|style|iframe|object|embed|svg|math)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, '').replace(/<!--[\s\S]*?-->/g, '');
    TAGS_EDITOR.forEach(function (tag, i) {
      texto = texto.replace(new RegExp('<\\s*' + tag + '\\s*>', 'gi'), '%%ARCANE_ABRE_' + i + '%%');
      texto = texto.replace(new RegExp('<\\s*\\/\\s*' + tag + '\\s*>', 'gi'), '%%ARCANE_FECHA_' + i + '%%');
    });
    texto = texto.replace(/<[^>]*>/g, '').replace(/&lt;[\s\S]*?&gt;/gi, '').replace(/\[\/?[a-z][^\]\n]*\]/gi, '');
    TAGS_EDITOR.forEach(function (tag, i) {
      texto = texto.replace(new RegExp('%%ARCANE_ABRE_' + i + '%%', 'g'), '<' + tag + '>');
      texto = texto.replace(new RegExp('%%ARCANE_FECHA_' + i + '%%', 'g'), '</' + tag + '>');
    });
    return texto.replace(/[ \t]+$/gm, '').replace(/\n{4,}/g, '\n\n\n').trim();
  }

  function escaparEditor(texto) {
    return texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function textoParaVisual(texto) {
    var html = escaparEditor(limpar(texto));
    html = html.replace(/&lt;b&gt;/gi, '<span data-arcane-formato="b">').replace(/&lt;\/b&gt;/gi, '</span>');
    html = html.replace(/&lt;i&gt;/gi, '<span data-arcane-formato="i">').replace(/&lt;\/i&gt;/gi, '</span>');
    [1, 2, 3, 4, 5].forEach(function (cor) {
      html = html.replace(new RegExp('&lt;cor-' + cor + '&gt;', 'gi'), '<span data-arcane-cor="' + cor + '">');
      html = html.replace(new RegExp('&lt;\\/cor-' + cor + '&gt;', 'gi'), '</span>');
    });
    return html.replace(/\n/g, '<br>');
  }

  function visualParaTexto(editor) {
    function bloco(no) { return no && no.nodeType === 1 && (no.tagName === 'DIV' || no.tagName === 'P'); }
    function ler(no) {
      if (no.nodeType === 3) return no.nodeValue.replace(/\u200b/g, '');
      if (no.nodeType !== 1) return '';
      if (no.tagName === 'BR') return '\n';
      var conteudo = '', filhos = Array.prototype.slice.call(no.childNodes);
      filhos.forEach(function (filho, i) {
        var ehBloco = bloco(filho);
        if (ehBloco && conteudo && !/\n$/.test(conteudo)) conteudo += '\n';
        conteudo += ler(filho);
        if (ehBloco && i < filhos.length - 1 && !/\n$/.test(conteudo)) conteudo += '\n';
      });
      var formato = no.getAttribute && no.getAttribute('data-arcane-formato');
      var cor = no.getAttribute && no.getAttribute('data-arcane-cor');
      if (cor) conteudo = '<cor-' + cor + '>' + conteudo + '</cor-' + cor + '>';
      if (formato === 'b' || formato === 'i') conteudo = '<' + formato + '>' + conteudo + '</' + formato + '>';
      return conteudo;
    }
    return limpar(ler(editor));
  }

  function sincronizar(editor, campo, original) {
    var texto = visualParaTexto(editor); campo.value = texto; original.value = texto;
    campo.dispatchEvent(new Event('input', { bubbles: true })); return texto;
  }

  function alternarEstilo(texto, tipo, valor) {
    var INICIO = '%%ARCANE_SELECAO_INICIO%%', FIM = '%%ARCANE_SELECAO_FIM%%';
    var regex = /<\/?(?:b|i|cor-[1-5])>/i;
    var partes = texto.split(/(%%ARCANE_SELECAO_INICIO%%|%%ARCANE_SELECAO_FIM%%|<\/?(?:b|i|cor-[1-5])>)/gi);
    var ativos = { b: false, i: false, cor: '' }, selecionando = false, segmentos = [];
    partes.forEach(function (parte) {
      if (!parte) return;
      if (parte === INICIO) { selecionando = true; return; }
      if (parte === FIM) { selecionando = false; return; }
      if (regex.test(parte)) {
        var fecha = /^<\//.test(parte), nome = parte.replace(/[<>\/]/g, '').toLowerCase();
        if (nome === 'b' || nome === 'i') ativos[nome] = !fecha; else ativos.cor = fecha ? '' : nome.replace('cor-', '');
        return;
      }
      segmentos.push({ texto: parte, selecionado: selecionando, b: ativos.b, i: ativos.i, cor: ativos.cor });
    });
    var escolhidos = segmentos.filter(function (s) { return s.selecionado && s.texto.length; });
    var remover = escolhidos.length && escolhidos.every(function (s) { return tipo === 'cor' ? s.cor === valor : s[tipo]; });
    segmentos.forEach(function (s) { if (!s.selecionado) return; if (tipo === 'cor') s.cor = remover ? '' : valor; else s[tipo] = !remover; });
    var unidos = [];
    segmentos.forEach(function (s) { var a = unidos[unidos.length - 1]; if (a && a.b === s.b && a.i === s.i && a.cor === s.cor) a.texto += s.texto; else unidos.push({ texto: s.texto, b: s.b, i: s.i, cor: s.cor }); });
    return unidos.map(function (s) { var r = s.texto; if (s.cor) r = '<cor-' + s.cor + '>' + r + '</cor-' + s.cor + '>'; if (s.i) r = '<i>' + r + '</i>'; if (s.b) r = '<b>' + r + '</b>'; return r; }).join('');
  }

  function aplicarEstilo(editor, tipo, valor, campo, original) {
    var selecao = window.getSelection();
    var intervalo = selecao && selecao.rangeCount ? selecao.getRangeAt(0) : null;
    var origem = intervalo && (intervalo.commonAncestorContainer.nodeType === 1 ? intervalo.commonAncestorContainer : intervalo.commonAncestorContainer.parentNode);
    if (!intervalo || !editor.contains(origem)) {
      intervalo = editor._arcaneUltimoIntervalo ? editor._arcaneUltimoIntervalo.cloneRange() : null;
      if (!intervalo) { editor.focus(); return; }
      selecao = window.getSelection();
      selecao.removeAllRanges();
      selecao.addRange(intervalo);
    }
    if (intervalo.collapsed) {
      var span = document.createElement('span');
      if (tipo === 'cor') span.setAttribute('data-arcane-cor', valor); else span.setAttribute('data-arcane-formato', tipo);
      span.appendChild(document.createTextNode('\u200b')); intervalo.insertNode(span); intervalo.selectNodeContents(span); intervalo.collapse(false);
      selecao.removeAllRanges(); selecao.addRange(intervalo); editor._arcaneUltimoIntervalo = intervalo.cloneRange(); editor.focus(); sincronizar(editor, campo, original); return;
    }
    var fim = document.createTextNode('%%ARCANE_SELECAO_FIM%%'), inicio = document.createTextNode('%%ARCANE_SELECAO_INICIO%%');
    var rf = intervalo.cloneRange(); rf.collapse(false); rf.insertNode(fim);
    var ri = intervalo.cloneRange(); ri.collapse(true); ri.insertNode(inicio);
    var marcado = visualParaTexto(editor), alternado = alternarEstilo(marcado, tipo, valor);
    editor.innerHTML = textoParaVisual(alternado); editor.focus();
    var novoIntervalo = document.createRange(); novoIntervalo.selectNodeContents(editor); novoIntervalo.collapse(false);
    selecao.removeAllRanges(); selecao.addRange(novoIntervalo); editor._arcaneUltimoIntervalo = novoIntervalo.cloneRange();
    sincronizar(editor, campo, original);
  }

  function guardarSelecaoEditor(editor) {
    var selecao = window.getSelection();
    if (!selecao || !selecao.rangeCount) return;
    var intervalo = selecao.getRangeAt(0);
    var origem = intervalo.commonAncestorContainer.nodeType === 1 ? intervalo.commonAncestorContainer : intervalo.commonAncestorContainer.parentNode;
    if (editor.contains(origem)) editor._arcaneUltimoIntervalo = intervalo.cloneRange();
  }

  function colarComoTexto(editor, evento) {
    evento.preventDefault();
    var texto = (evento.clipboardData || window.clipboardData).getData('text/plain').replace(/\r\n?/g, '\n');
    document.execCommand('insertText', false, texto);
  }

  function criarPost(e, texto, largura, visual) {
    if (e.id === 'chuva-estrelas') {
      if (visual === 'celeste') {
        return '<div class="arcane-estrelas-celeste ' + largura + '" data-evento="' + e.id + '"><div class="ec-caixa"><div class="ec-topo"><span class="ec-stars" aria-hidden="true">' + '<i></i>'.repeat(24) + '</span></div><div class="ec-corpo"><texto-evento>' + texto + '</texto-evento></div></div></div>';
      }
      return '<div class="arcane-estrelas-rp ' + largura + '" data-evento="' + e.id + '"><div class="er-caixa"><div class="er-header"><span class="er-stars" aria-hidden="true">' + '<i></i>'.repeat(6) + '</span></div><div class="er-corpo"><texto-evento>' + texto + '</texto-evento></div></div></div>';
    }
    return '<div class="arcane-me-rp ' + e.config.classe + ' ' + largura + ' visual-' + visual + '" data-evento="' + e.id + '"><div class="me-caixa"><div class="me-topo"></div><div class="me-lateral"></div><div class="me-corpo"><texto-evento>' + texto + '</texto-evento></div></div></div>';
  }

  function criarUpdate(e, texto, titulo, subtitulo, ativarFaseRubra) {
    var a = e.config.atualizacao || {};
    var detalhe = a.detalhe || {};
    if (typeof detalhe === 'string') detalhe = { imagem: detalhe };
    var detalheImagem = detalhe.imagem || detalhe.gif || detalhe.icone || '';
    var detalheHtml = detalheImagem
      ? '<span class="mu-detail" aria-hidden="true" style="--mu-detalhe-imagem:url(&quot;' + escapar(detalheImagem) + '&quot;);--mu-detalhe-largura:' + (detalhe.largura || '96px') + ';--mu-detalhe-altura:' + (detalhe.altura || '96px') + ';--mu-detalhe-topo:' + (detalhe.topo || '12px') + ';--mu-detalhe-direita:' + (detalhe.direita || '18px') + ';--mu-detalhe-opacidade:' + (detalhe.opacidade || '.48') + '"></span>'
      : '';
    var etiqueta = escapar(a.etiqueta || 'Atualização da narração') || 'ATUALIZAÇÃO DA NARRAÇÃO';
    titulo = escapar(titulo) || e.config.padraoTitulo;
    subtitulo = escapar(subtitulo) || e.config.padraoSubtitulo;
    var marcadorFase = e.id === 'baile-mascaras' && ativarFaseRubra
      ? '<span class="arcane-baile-fase-rubra" aria-hidden="true" style="display:none!important">MORTE RUBRA</span>'
      : '';
    return '<div class="arcane-me-update ' + e.config.classe + '" data-evento="' + e.id + '">' + marcadorFase + '<meta-titulo>' + titulo + '</meta-titulo><meta-subtitulo>' + subtitulo + '</meta-subtitulo><div class="mu-header">' + detalheHtml + '<div class="mu-label">' + etiqueta + '</div><div class="mu-title">' + titulo + '</div><div class="mu-subtitle">' + subtitulo + '</div></div><div class="mu-body"><span class="mu-transition" aria-hidden="true"></span><texto-update>' + texto + '</texto-update></div></div>';
  }

  function instalarCSSPostagens(e) {
    var id = 'arcane-me-post-css-' + e.id;
    var fontes = document.createElement('link');
    fontes.rel = 'stylesheet';
    fontes.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap';
    (document.head || document.documentElement).appendChild(fontes);
    var moderna = document.createElement('link');
    moderna.rel = 'stylesheet';
    moderna.href = 'https://cdn.jsdelivr.net/gh/danielaaaa1/arcanerpg-assets/fonts/ModernAesthetic.css';
    (document.head || document.documentElement).appendChild(moderna);
    instalarCSSSeguro(id, cssPost(e) + cssAtualizacao(e));
  }

  function instalarCSS(e) {
    Array.prototype.forEach.call(
      document.querySelectorAll('#arcane-me-editor-css'),
      function (item) { if (item.parentNode) item.parentNode.removeChild(item); }
    );
    var s = document.createElement('style'); s.id = 'arcane-me-editor-css';
    s.textContent = [
      '.arcane-me-native-hidden{display:none!important}',
      '.arcane-me-form{box-sizing:border-box!important;position:relative!important;isolation:isolate!important;overflow:visible!important;width:100%!important;max-width:800px!important;margin:18px auto 52px!important}',
      '.arcane-me-form:before,.arcane-me-form:after{content:"";position:absolute;z-index:-1;display:block;aspect-ratio:1/1;background-repeat:no-repeat;background-position:center;background-size:contain;pointer-events:none}',
      '.arcane-me-form:before{top:var(--arcane-decor-topo-y);left:var(--arcane-decor-topo-x);width:var(--arcane-decor-topo-largura);background-image:var(--arcane-decor-topo-imagem);opacity:var(--arcane-decor-topo-opacidade);filter:var(--arcane-decor-topo-filtro);transform:rotate(var(--arcane-decor-topo-rotacao))}',
      '.arcane-me-form:after{right:var(--arcane-decor-baixo-x);bottom:var(--arcane-decor-baixo-y);width:var(--arcane-decor-baixo-largura);background-image:var(--arcane-decor-baixo-imagem);opacity:var(--arcane-decor-baixo-opacidade);filter:var(--arcane-decor-baixo-filtro);transform:rotate(var(--arcane-decor-baixo-rotacao))}',
      '.arcane-me-form #textarea_content{box-sizing:border-box!important;position:relative!important;z-index:1!important;width:100%!important;max-width:none!important;margin:0!important;padding:0!important}',
      '.arcane-me-form .sceditor-container{display:none!important}',
      '.arcane-me-toolbar,.arcane-me-meta,.arcane-me-editor{box-sizing:border-box!important;width:100%!important;max-width:none!important;margin-left:0!important;margin-right:0!important}',
      '.arcane-me-toolbar{display:flex;align-items:center;justify-content:flex-start!important;gap:9px;min-height:55px;padding:10px 13px;border:1px solid #29342d;border-bottom:0;background:rgba(8,13,9,.97)}',
      '.arcane-me-toolbar-title{flex:1 1 auto;margin-right:8px;color:#eef1ef;font:600 15px/1 Montserrat,Arial,sans-serif!important;letter-spacing:.8px;text-align:left!important;text-transform:uppercase;white-space:nowrap}',
      '.arcane-me-toolbar-title:before{content:"✦";margin-right:9px;color:' + e.config.cor + '}',
      '.arcane-me-toolbar button,.arcane-me-toolbar select{height:34px;border:1px solid #354238!important;border-radius:0!important;background:#101611!important;color:#c2c5c1!important;font:600 8px/1 Montserrat,Arial,sans-serif!important;letter-spacing:1px;text-transform:uppercase}',
      '.arcane-me-toolbar button,.arcane-me-toolbar select{cursor:pointer!important;transition:border-color .18s ease,color .18s ease,filter .18s ease,transform .18s ease}',
      '.arcane-me-toolbar button:hover,.arcane-me-toolbar select:hover{border-color:' + e.config.cor + '!important;color:#f4effa!important}',
      '.arcane-me-toolbar button:active{transform:translateY(1px)}',
      '.arcane-me-toolbar button{min-width:34px;padding:0 12px}',
      '.arcane-me-colors{display:flex;gap:6px;margin:0 5px}',
      '.arcane-me-colors button{width:21px;min-width:21px;height:21px;padding:0}',
      '.arcane-me-colors button:hover{filter:brightness(1.22) saturate(1.08);transform:scale(1.12)}',
      '.arcane-me-editor{height:210px;padding:25px 28px;overflow:auto;border:1px solid #29342d;border-bottom:0;outline:0;background:#101411;color:#dfe2e0;font:400 12px/1.75 Poppins,Arial,sans-serif;text-align:left!important;white-space:pre-wrap}',
      '.arcane-me-editor::-webkit-scrollbar{width:4px!important;height:4px!important}',
      '.arcane-me-editor::-webkit-scrollbar-track{background:#050806!important;border:0!important;border-radius:0!important}',
      '.arcane-me-editor::-webkit-scrollbar-track-piece{background:#050806!important;border:0!important;border-radius:0!important}',
      '.arcane-me-editor::-webkit-scrollbar-thumb{background:#8f793b!important;border:0!important;border-radius:0!important;box-shadow:none!important}',
      '.arcane-me-editor::-webkit-scrollbar-button,.arcane-me-editor::-webkit-scrollbar-button:single-button,.arcane-me-editor::-webkit-scrollbar-button:vertical:decrement,.arcane-me-editor::-webkit-scrollbar-button:vertical:increment,.arcane-me-editor::-webkit-scrollbar-button:horizontal:decrement,.arcane-me-editor::-webkit-scrollbar-button:horizontal:increment{-webkit-appearance:none!important;appearance:none!important;display:none!important;width:0!important;height:0!important;min-width:0!important;min-height:0!important;background:transparent!important;border:0!important}',
      '.arcane-me-editor::-webkit-scrollbar-corner{background:#050806!important}',
      '.arcane-me-editor [data-arcane-formato="b"]{font-weight:700}',
      '.arcane-me-editor [data-arcane-formato="i"]{font-style:italic}',
      e.config.cores.map(function (cor, i) { return '.arcane-me-editor [data-arcane-cor="' + (i + 1) + '"]{color:' + cor + '}'; }).join(''),
      '.arcane-me-meta{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;padding:13px;border:1px solid #29342d;border-bottom:0;background:rgba(8,13,9,.94)}',
      '.arcane-me-meta label{display:grid;gap:6px;min-width:0}',
      '.arcane-me-meta span{color:' + e.config.cor + ';font:600 8px/1 Montserrat,Arial,sans-serif;letter-spacing:1px;text-transform:uppercase}',
      '.arcane-me-meta input{box-sizing:border-box;width:100%;min-width:0;height:34px;padding:0 11px;border:1px solid #354238!important;border-radius:0!important;background:#101611!important;color:#e5e7e7!important}',
      '.arcane-baile-fase-rubra{display:none!important}',
      '.arcane-me-meta .arcane-me-fase-rubra{grid-column:1/-1;display:flex;align-items:center;gap:11px;margin-top:2px;padding:11px 13px;border:1px solid rgba(143,36,36,.58);background:rgba(27,5,5,.58);cursor:pointer}',
      '.arcane-me-meta .arcane-me-fase-rubra input{appearance:none;-webkit-appearance:none;flex:0 0 16px;width:16px!important;min-width:16px!important;height:16px!important;margin:0;padding:0!important;border:1px solid #8f2424!important;background:#0a0808!important;cursor:pointer}',
      '.arcane-me-meta .arcane-me-fase-rubra input:checked{background:#b51f26!important;box-shadow:inset 0 0 0 3px #0a0808,0 0 10px rgba(181,31,38,.28)}',
      '.arcane-me-meta .arcane-me-fase-rubra>span{display:grid;gap:4px;color:#c8aaa5!important;letter-spacing:1px}',
      '.arcane-me-meta .arcane-me-fase-rubra b{color:#e22a2a;font:600 9px/1 Montserrat,Arial,sans-serif;letter-spacing:1.15px;text-transform:uppercase}',
      '.arcane-me-meta .arcane-me-fase-rubra small{color:#9d8c89;font:500 8px/1.35 Poppins,Arial,sans-serif;letter-spacing:.2px;text-transform:none}',
      '.arcane-me-form>div:nth-of-type(2){box-sizing:border-box!important;position:relative!important;z-index:1!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:10px!important;min-height:58px!important;margin:0!important;border:1px solid #29342d!important;background:rgba(8,13,9,.94)!important}',
      '.arcane-me-narrador .arcane-me-visual,.arcane-me-narrador .arcane-me-largura{display:none!important}',
      '@media(max-width:760px){.arcane-me-form{max-width:calc(100% - 12px)!important}.arcane-me-toolbar{flex-wrap:wrap;align-items:flex-start}.arcane-me-toolbar-title{flex-basis:100%;margin:3px 0 5px}.arcane-me-toolbar select{flex:1 1 135px;min-width:0}.arcane-me-meta{grid-template-columns:1fr}.arcane-me-form:before,.arcane-me-form:after{opacity:.22}}'
    ].join('');
    /*
     * Na resposta rápida, o próprio formulário é a caixa compacta de 840px.
     * Na página /post, o layout nativo precisa permanecer inteiro: título e
     * smileys ficam fora da coluna de texto. A largura abaixo reserva a coluna
     * dos smileys e impede que ela empurre o editor para centenas de pixels
     * mais abaixo.
     */
    s.textContent += '.arcane-me-pagina #textarea_content{box-sizing:border-box!important;width:calc(100% - 205px)!important;max-width:none!important;margin:12px 0 28px!important;padding:0!important}.arcane-me-pagina .sceditor-container{display:none!important}.arcane-me-pagina .arcane-me-meta,.arcane-me-pagina .arcane-me-toolbar,.arcane-me-pagina .arcane-me-editor{width:100%!important;max-width:none!important}.arcane-me-pagina .arcane-me-editor{height:240px!important;min-height:240px!important;padding-bottom:32px!important;border-bottom:1px solid #29342d!important}.arcane-me-pagina #message-box{height:auto!important;min-height:0!important}.arcane-me-pagina #postingbox .fields1{height:auto!important;min-height:0!important}@media(max-width:800px){.arcane-me-pagina #textarea_content{width:100%!important;margin-right:0!important}}';
    instalarCSSSeguro(s.id, s.textContent);
    instalarCSSPostagens(e);
  }

  function configurarDecoracoes(form, e) {
    var d = e.config.decoracoes || {};
    var cima = d.superior || {};
    var baixo = d.inferior || {};
    var imagemCima = cima.imagem || '';
    var imagemBaixo = baixo.imagem || imagemCima;
    form.style.setProperty('--arcane-decor-topo-imagem', imagemCima ? 'url("' + imagemCima + '")' : 'none');
    form.style.setProperty('--arcane-decor-topo-largura', cima.largura || '340px');
    form.style.setProperty('--arcane-decor-topo-x', cima.x || '-90px');
    form.style.setProperty('--arcane-decor-topo-y', cima.y || '-130px');
    form.style.setProperty('--arcane-decor-topo-rotacao', cima.rotacao || '-90deg');
    form.style.setProperty('--arcane-decor-topo-opacidade', cima.opacidade || '.45');
    form.style.setProperty('--arcane-decor-topo-filtro', cima.filtro || 'none');
    /* O segundo PNG pode ser completamente diferente ou reutilizar o superior. */
    form.style.setProperty('--arcane-decor-baixo-imagem', imagemBaixo ? 'url("' + imagemBaixo + '")' : 'none');
    form.style.setProperty('--arcane-decor-baixo-largura', baixo.largura || '320px');
    form.style.setProperty('--arcane-decor-baixo-x', baixo.x || '-80px');
    form.style.setProperty('--arcane-decor-baixo-y', baixo.y || '-135px');
    form.style.setProperty('--arcane-decor-baixo-rotacao', baixo.rotacao || '-90deg');
    form.style.setProperty('--arcane-decor-baixo-opacidade', baixo.opacidade || '.38');
    form.style.setProperty('--arcane-decor-baixo-filtro', baixo.filtro || cima.filtro || 'none');
  }

  function limparCabecalhoNativo(form) {
    var anterior = form.previousElementSibling;
    var limite = 0;
    while (anterior && limite < 10) {
      var texto = (anterior.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
      if ((anterior.classList && anterior.classList.contains('h3') && texto.indexOf('resposta rápida') !== -1) ||
          (anterior.classList && anterior.classList.contains('noprint') && anterior.querySelector('a[href*="watch=topic"],a[href*="unwatch=topic"]'))) {
        anterior.classList.add('arcane-me-native-hidden');
      }
      anterior = anterior.previousElementSibling;
      limite++;
    }
  }

  function aplicarSigilosNarrador() {
    var runas = ['ᚦ', 'ᛉ', 'ᚱ', 'ᛇ', 'ᛟ', 'ᚨ', 'ᚲ'];
    Array.prototype.forEach.call(document.querySelectorAll('.arcane-me-narracao-tempestade #rpost-header .poster-name'), function (nome) {
      if (nome.querySelector('.arcane-me-sigilos-narrador')) return;
      ['topo', 'base'].forEach(function (lado) {
        var faixa = document.createElement('span');
        faixa.className = 'arcane-me-sigilos-narrador arcane-me-sigilos-' + lado;
        faixa.setAttribute('aria-hidden', 'true');
        runas.forEach(function (runa) {
          var sigilo = document.createElement('i');
          sigilo.textContent = runa;
          faixa.appendChild(sigilo);
        });
        nome.appendChild(faixa);
      });
    });
  }

  function liberarIdentidadeNarrador(e) {
    if (e) {
      Array.prototype.forEach.call(document.querySelectorAll('.arcane-me-post-narracao'), function (post) {
        post.classList.add('arcane-me-narracao-pronta');
      });
    }
    document.documentElement.classList.add('arcane-me-identidade-verificada');
  }

  function sincronizarFaseBaile(e) {
    if (!e || e.id !== 'baile-mascaras') return;
    var marcador = e.marcador || document.getElementById('arcane-baile-preview');
    var controle = marcador && marcador.querySelector('#ab-rubra');
    var narrativaAntes = [
      'Ninguém soube dizer onde ficava o salão. As carruagens atravessaram caminhos sem nome e, quando as portas se abriram, havia apenas mármore escuro, lustres acesos e música derramando-se por galerias que pareciam maiores do que o edifício poderia comportar.',
      'Sob cortinas de veludo e fileiras de espelhos antigos, figuras mascaradas dançavam sem anunciar títulos ou procedências. Nenhum anfitrião veio recebê-las. Ainda assim, as taças permaneciam cheias, a orquestra não errava uma nota e, a cada volta da dança, novos convidados surgiam entre os reflexos.'
    ];
    var narrativaRubra = [
      'À meia-noite, o último acorde morreu sem eco. No alto da escadaria surgiu uma figura envolta em vermelho, alta e imóvel, com uma máscara que não imitava rosto algum. Ninguém a vira entrar; ainda assim, todos os espelhos já guardavam o seu reflexo.',
      'As portas se fecharam ao mesmo tempo. Mãos apressadas buscaram laços, fivelas e fitas, mas as máscaras não deixavam mais os rostos: porcelana, metal e renda haviam se tornado quentes como pele. Quando a figura rubra desceu o primeiro degrau, a música recomeçou sozinha — e o salão exigiu outra dança.'
    ];
    function atualizar() {
      var rubraPublicada = !!document.querySelector('.arcane-baile-fase-rubra');
      var rubra = rubraPublicada;
      /* O controle legado da abertura agora é somente um indicador visual. A
         fase nasce prateada e só muda quando uma atualização do ADM publica o
         marcador persistente da Morte Rubra. */
      if (controle) {
        controle.checked = rubra;
        controle.disabled = true;
        controle.setAttribute('aria-disabled', 'true');
      }
      document.documentElement.classList.toggle('arcane-baile-rubra', rubra);
      document.documentElement.classList.toggle('arcane-baile-prata', !rubra);
      var caixaNarrativa = marcador && marcador.querySelector('.ab-texto');
      if (caixaNarrativa) {
        var paragrafos = Array.prototype.filter.call(caixaNarrativa.children, function (item) { return item.tagName === 'P'; });
        while (paragrafos.length < 2) {
          var novoParagrafo = document.createElement('p');
          caixaNarrativa.insertBefore(novoParagrafo, caixaNarrativa.querySelector('.ab-citacao'));
          paragrafos.push(novoParagrafo);
        }
        var narrativa = rubra ? narrativaRubra : narrativaAntes;
        paragrafos[0].textContent = narrativa[0];
        paragrafos[1].textContent = narrativa[1];
        for (var p = 2; p < paragrafos.length; p += 1) paragrafos[p].remove();
      }
      var paleta = rubra
        ? ['#731818', '#b51f26', '#e22a2a', '#f0d9d4', '#c8aaa5']
        : ['#777269', '#c9c3b5', '#eee9df', '#8f897d', '#dedbd3'];
      Array.prototype.forEach.call(document.querySelectorAll('.arcane-me-colors button[data-arcane-cor]'), function (botao, indice) {
        botao.style.setProperty('background', paleta[indice] || paleta[0], 'important');
        botao.title = (rubra ? 'Morte Rubra · cor ' : 'Antes da meia-noite · cor ') + (indice + 1);
      });
    }
    atualizar();
  }

  function prepararFalhaColetiva(e) {
    if (!e || e.id !== 'falha-coletiva') return;
    var urlHeader = 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.23/falha-alucinogena-header.png';
    var css = [
      '#arcane-falha-abertura{box-sizing:border-box;width:min(760px,100%);margin:25px auto;color:#d6dfdd}',
      '#arcane-falha-abertura *{box-sizing:border-box}',
      '#arcane-falha-abertura .fc-box{position:relative;border:1px solid rgba(126,244,231,.42);background:#06090a;box-shadow:0 24px 55px rgba(0,0,0,.6)}',
      '#arcane-falha-abertura .fc-header{position:relative;min-height:260px;overflow:hidden;isolation:isolate;border-bottom:1px solid rgba(88,245,240,.52);background:#061311 url("' + urlHeader + '") center/cover no-repeat}',
      '#arcane-falha-abertura .fc-header:before{content:"";position:absolute;z-index:1;inset:0;background:linear-gradient(90deg,rgba(0,5,6,.96) 0%,rgba(0,6,7,.72) 31%,rgba(0,7,7,.16) 57%,rgba(0,7,7,.02) 72%),linear-gradient(0deg,rgba(1,7,7,.58),transparent 42%);pointer-events:none}',
      '#arcane-falha-abertura .fc-header:after{content:"";position:absolute;z-index:2;inset:-12px;opacity:.44;mix-blend-mode:screen;background:repeating-linear-gradient(174deg,transparent 0 34px,rgba(88,245,240,.16) 35px,transparent 37px 74px),radial-gradient(circle at 13% 19%,rgba(88,245,240,.72) 0 1px,transparent 3px),radial-gradient(circle at 77% 35%,rgba(157,255,200,.7) 0 1px,transparent 4px);animation:fc-prisma 6s ease-in-out infinite;pointer-events:none}',
      '#arcane-falha-abertura .fc-title{position:absolute;z-index:3;left:32px;bottom:31px;max-width:590px;text-shadow:0 4px 22px #000}',
      '#arcane-falha-abertura .fc-label,#arcane-falha-abertura .fc-time small{display:block;color:#9dffc8;font:600 8px/1 Montserrat,Arial,sans-serif;letter-spacing:1.5px;text-transform:uppercase}',
      '#arcane-falha-abertura .fc-title h1{position:relative;margin:10px 0 12px;color:#eefcfb;font:normal 52px/.86 "Modern Aesthetic",serif;letter-spacing:-.5px;white-space:nowrap;text-transform:uppercase;animation:fc-title-fail 8s steps(1,end) infinite}',
      '#arcane-falha-abertura .fc-title h1:before,#arcane-falha-abertura .fc-title h1:after{content:attr(data-title);position:absolute;inset:0;opacity:0;pointer-events:none}',
      '#arcane-falha-abertura .fc-title h1:before{color:#39f6ee;transform:translateX(-3px);clip-path:inset(10% 0 58% 0)}#arcane-falha-abertura .fc-title h1:after{color:#baff83;transform:translateX(3px);clip-path:inset(57% 0 12% 0)}',
      '#arcane-falha-abertura .fc-time{position:absolute;z-index:3;top:26px;right:28px;display:flex;align-items:center;gap:10px;padding-left:13px;border-left:1px solid #58f5f0;text-align:left}#arcane-falha-abertura .fc-time small{max-width:none;white-space:nowrap;color:#d7e5e2;font-size:8px;line-height:1.4;text-shadow:0 1px 5px rgba(0,0,0,.95)}#arcane-falha-abertura .fc-time strong{display:block;margin:0;color:#9dffc8;font:normal 29px/1 "Modern Aesthetic",serif;text-shadow:0 0 5px rgba(157,255,200,.55),0 0 13px rgba(88,245,240,.32)}',
      '#arcane-falha-abertura .fc-body{position:relative;isolation:isolate;padding:38px 46px 34px;border:1px solid rgba(62,114,105,.48);border-top:0;background:linear-gradient(135deg,rgba(18,43,39,.25),transparent 40%),#080c0b}',
      '#arcane-falha-abertura .fc-body:before{content:"";position:absolute;z-index:0;inset:10px;border:1px solid rgba(93,151,140,.22);pointer-events:none}',
      '#arcane-falha-abertura .fc-body:after{content:"";position:absolute;z-index:2;inset:9px;padding:1px;background:conic-gradient(from var(--fc-angle),transparent 0 72%,rgba(88,245,240,.08) 77%,#58f5f0 82%,#efffff 84%,#9dffc8 87%,rgba(88,245,240,.08) 92%,transparent 97%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;filter:drop-shadow(0 0 4px rgba(88,245,240,.9)) drop-shadow(0 0 9px rgba(157,255,200,.45));animation:fc-border-run 1.45s linear infinite,fc-border-glitch 3.7s steps(1,end) infinite;pointer-events:none}',
      '#arcane-falha-abertura .fc-copy{position:relative;z-index:1;padding:3px 5px 0;color:#c7d1ce;font:400 13.2px/1.4 Poppins,Arial,sans-serif;text-align:justify}#arcane-falha-abertura .fc-copy p{margin:0 0 16px}#arcane-falha-abertura .fc-copy p:last-child{margin-bottom:0}',
      '#arcane-falha-abertura .fc-quote{position:relative;z-index:1;margin:25px 5px 0;padding:13px 19px;border-top:1px solid rgba(88,245,240,.25);border-bottom:1px solid rgba(157,255,200,.13);background:rgba(4,12,11,.62);color:#a9e9dc;font:normal 15px/1.5 "Modern Aesthetic",serif;text-align:left}#arcane-falha-abertura:after{content:"[ARCANE]"!important;display:block;margin:6px 0 0;color:#969696;font:700 8.5px/normal Consolas,monospace;text-align:center;text-transform:uppercase!important}',
      'html.arcane-evento-falha-coletiva .arcane-me-narracao-falha #rpost-header .poster-name,html.arcane-evento-falha-coletiva .arcane-me-narracao-falha #rpost-header .poster-name>*{color:#eefcfb!important;text-shadow:-2px 0 rgba(88,245,240,.4),2px 0 rgba(157,255,200,.24)!important}html.arcane-evento-falha-coletiva .arcane-me-narracao-falha #rpost-header:before,html.arcane-evento-falha-coletiva .arcane-me-narracao-falha>.inner>.postprofile>.rrank:before{background-color:#173e36!important}html.arcane-evento-falha-coletiva .arcane-me-narracao-falha>.inner>.postprofile>.rrank,html.arcane-evento-falha-coletiva .arcane-me-narracao-falha>.inner>.postprofile>.rrank>*{color:#dffbf6!important}',
      'html.arcane-evento-falha-coletiva .arcane-me-rp.falha .me-topo,html.arcane-evento-falha-coletiva .arcane-me-rp.falha .me-lateral{background-image:linear-gradient(90deg,rgba(0,8,7,.72),rgba(0,3,3,.26)),url("' + urlHeader + '")!important;background-size:cover!important;background-position:center!important}html.arcane-evento-falha-coletiva .arcane-me-update.falha .mu-header{background-image:linear-gradient(90deg,rgba(0,8,7,.82),rgba(0,3,3,.28)),url("' + urlHeader + '")!important;background-size:cover!important;background-position:center!important}',
      'html.arcane-evento-falha-coletiva .arcane-me-form:before,html.arcane-evento-falha-coletiva .arcane-me-form:after{height:205px!important;aspect-ratio:auto!important;mix-blend-mode:screen!important}html.arcane-evento-falha-coletiva .arcane-me-form:after{transform:scaleX(-1) rotate(61deg)!important}',
      '@property --fc-angle{syntax:"<angle>";initial-value:0deg;inherits:false}@keyframes fc-prisma{0%,100%{opacity:.28;transform:translate(0)}50%{opacity:.56;filter:brightness(1.22)}83%{transform:translate(0)}84%{transform:translate(3px,-1px)}86%{transform:translate(-2px,1px)}88%{transform:translate(0)}}@keyframes fc-border-run{to{--fc-angle:360deg}}@keyframes fc-border-glitch{0%,77%,82%,100%{opacity:1;transform:translate(0)}78%{opacity:.25;transform:translate(2px,-1px)}79%{opacity:1;transform:translate(-2px,1px)}80%{opacity:.48;transform:translate(1px,0)}}@keyframes fc-title-fail{0%,89%,94%,100%{transform:none;text-shadow:0 4px 22px #000}90%{transform:translateX(2px);text-shadow:-4px 0 rgba(88,245,240,.55),4px 0 rgba(157,255,200,.42);filter:brightness(1.18)}91%{transform:translateX(-1px);filter:brightness(1.18)}92%{transform:none}}',
      '@media(max-width:760px){#arcane-falha-abertura .fc-header{min-height:280px}#arcane-falha-abertura .fc-title{left:22px;bottom:48px}#arcane-falha-abertura .fc-title h1{font-size:39px}#arcane-falha-abertura .fc-time{top:21px;right:19px}#arcane-falha-abertura .fc-body{padding:29px 24px 25px}#arcane-falha-abertura .fc-copy{font-size:12px;text-align:left}}@media(prefers-reduced-motion:reduce){#arcane-falha-abertura .fc-header:after,#arcane-falha-abertura .fc-title h1,#arcane-falha-abertura .fc-body:after{animation:none!important}}'
    ].join('');
    instalarCSSSeguro('arcane-me-falha-coletiva-css', css);

    var marcador = document.querySelector('.arcane-mini-evento[data-evento="falha-coletiva"],#arcane-falha-abertura');
    if (marcador && !marcador.querySelector('.fc-box')) {
      marcador.id = 'arcane-falha-abertura';
      marcador.classList.add('arcane-mini-evento');
      marcador.setAttribute('data-evento', 'falha-coletiva');
      marcador.innerHTML = '<div class="fc-box"><div class="fc-header"><div class="fc-time"><small>A ruptura começou às</small><strong>19:07</strong></div><div class="fc-title"><span class="fc-label">Mini-evento</span><h1 data-title="FALHA COLETIVA DE MAGIA">Falha Coletiva<br>de Magia</h1><span class="fc-label">O impossível perdeu a forma</span></div></div><div class="fc-body"><div class="fc-copy"><p>O primeiro sinal não foi um estrondo, mas uma ausência.</p><p>Em Londres, uma bruxa ergueu a varinha para acender os lampiões de uma rua e nenhuma luz surgiu. Em Paris, uma lareira conectada à Rede de Flu lançou uma família no endereço errado. Nos corredores do Ministério da Magia britânico, memorandos encantados perderam as palavras e continuaram voando como folhas em branco.</p><p>Durante alguns minutos, tudo pareceu uma coleção de incidentes isolados: uma varinha defeituosa, um ingrediente contaminado, uma sílaba mal pronunciada. Então os relatos começaram a chegar de todos os lugares.</p><p>Feitiços simples produziam efeitos imprevisíveis. Encantamentos antigos se desfaziam sem aviso. Objetos protegidos por magia despertavam, desapareciam ou assumiam formas que jamais haviam possuído. Retratos abandonavam suas molduras, vassouras recusavam-se a levantar voo e criaturas mantidas ocultas surgiam diante de comunidades trouxas sem que barreira alguma conseguisse detê-las.</p><p>Não havia um padrão evidente. Em certas regiões, a magia simplesmente deixara de funcionar. Em outras, tornara-se intensa demais: um feitiço de iluminação incendiava uma sala; uma tentativa de cura multiplicava ferimentos; proteções domésticas cresciam até aprisionar aqueles que deveriam guardar.</p><p>E havia lugares onde a magia parecia ter adquirido regras inteiramente novas.</p><p>Pouco depois das dezenove horas, os meios de transporte mágico começaram a falhar. A Rede de Flu se fragmentou em destinos desconhecidos. Chaves de portal passaram a desaparecer levando consigo apenas parte daquilo que tocavam. Aparatações terminaram a quilômetros do destino pretendido — quando terminavam.</p><p>As autoridades mágicas tentaram conter os acidentes, mas descobriram rapidamente que suas próprias defesas também estavam comprometidas. Barreiras internacionais oscilaram. Prisões perderam selos de contenção. Arquivos protegidos se abriram ao mesmo tempo, revelando documentos que deveriam permanecer inacessíveis por séculos.</p><p>Quando as luzes voltaram, vieram erradas: verdes demais, brancas demais, multiplicadas nos vidros e nas poças como imagens quebradas. As varinhas continuavam quentes nas mãos de seus donos. Nenhuma, porém, tornou a obedecer.</p><p>Alguns feitiços desapareceram por completo. Outros permaneceram suspensos, deformados, à espera de uma ordem que já não compreendiam. Havia magia por toda parte — acumulada em objetos, construções e encantamentos que agora se comportavam de maneira imprevisível.</p><p>Desde então, todo feitiço representa uma possibilidade e um risco. O mundo bruxo permanece em alerta, incapaz de prever qual será a próxima manifestação da falha.</p></div><blockquote class="fc-quote">A magia não desapareceu. Apenas deixou de obedecer.</blockquote></div></div>';
    }
    if (marcador) e.marcador = marcador;
  }

  function preparar() {
    var e = encontrarEvento();
    prepararFalhaColetiva(e);
    sincronizarFaseBaile(e);
    /* O layout precisa ser reduzido antes de calcular a posição dos adornos. */
    aplicarModoImersivo(e);
    aplicarDecoracoesPagina();
    if (!e) {
      liberarIdentidadeNarrador(null);
      return;
    }
    document.documentElement.classList.add('arcane-mini-evento-ativo', 'arcane-evento-' + e.id);
    ativarCSSAbertura(e);
    instalarCSSPostagens(e);
    aplicarNarracao(e);
    aplicarSigilosNarrador();
    liberarIdentidadeNarrador(e);
    var form = document.querySelector('form#quick_reply,form[name="post"]');
    if (!form || form.classList.contains('arcane-me-form') || form.classList.contains('arcane-me-pagina')) return;
    var original = form.querySelector('textarea[name="message"]');
    var sc = form.querySelector('.sceditor-container');
    var campo = sc && sc.querySelector('textarea:not([name="message"])');
    if (!original || !sc || !campo) return setTimeout(preparar, 250);
    var codigo = campo.value || original.value || '';
    if (/arcane-mini-evento[^>]+data-evento|arcane-evento-chave/i.test(codigo)) return;
    instalarCSS(e);
    if (form.id === 'quick_reply') {
      form.classList.add('arcane-me-form');
      limparCabecalhoNativo(form);
      configurarDecoracoes(form, e);
    }
    else form.classList.add('arcane-me-pagina');
    if (U1) form.classList.add('arcane-me-narrador');
    var meta = null;
    if (U1) {
      meta = document.createElement('div'); meta.className = 'arcane-me-meta';
      meta.innerHTML = '<label><span>Título da atualização</span><input class="arcane-me-title" maxlength="70" placeholder="' + e.config.padraoTitulo + '"></label><label><span>Subtítulo</span><input class="arcane-me-subtitle" maxlength="120" placeholder="' + e.config.padraoSubtitulo + '"></label>';
      meta.querySelector('.arcane-me-title').value = extrairMeta(codigo, 'meta-titulo');
      meta.querySelector('.arcane-me-subtitle').value = extrairMeta(codigo, 'meta-subtitulo');
      sc.parentNode.insertBefore(meta, sc);
      if (e.id === 'baile-mascaras') {
        var fase = document.createElement('label');
        fase.className = 'arcane-me-fase-rubra';
        fase.innerHTML = '<input type="checkbox" class="arcane-me-fase-rubra-check"><span><b>Iniciar Morte Rubra</b><small>Esta atualização fará a virada permanente do tema.</small></span>';
        meta.appendChild(fase);
        fase.querySelector('input').checked = /arcane-baile-fase-rubra/i.test(codigo);
      }
    }
    var toolbar = document.createElement('div'); toolbar.className = 'arcane-me-toolbar';
    var opcoesVisuais = (e.config.visuais || [{ valor: 'header', nome: 'Visual · Header' }]).map(function (item) { return '<option value="' + item.valor + '">' + item.nome + '</option>'; }).join('');
    toolbar.innerHTML = (form.id === 'quick_reply' ? '<strong class="arcane-me-toolbar-title">Resposta rápida</strong>' : '') + '<button type="button" data-arcane-formato="b">B</button><button type="button" data-arcane-formato="i"><i>I</i></button><span class="arcane-me-colors">' + e.config.cores.map(function (cor, i) { return '<button type="button" data-arcane-cor="' + (i + 1) + '" style="background:' + cor + '!important" title="Cor ' + (i + 1) + '"></button>'; }).join('') + '</span><select class="arcane-me-visual">' + opcoesVisuais + '</select><select class="arcane-me-largura"><option value="estreito">Estreito · 520px</option><option value="medio">Médio · 640px</option><option value="largo">Largo · 760px</option></select>';
    var editor = document.createElement('div'); editor.className = 'arcane-me-editor'; editor.contentEditable = 'true'; editor.spellcheck = true; editor.innerHTML = textoParaVisual(codigo);
    if (meta) sc.parentNode.insertBefore(toolbar, meta); else sc.parentNode.insertBefore(toolbar, sc);
    sc.parentNode.insertBefore(editor, sc);
    sincronizarFaseBaile(e);
    var visual = toolbar.querySelector('.arcane-me-visual'), largura = toolbar.querySelector('.arcane-me-largura');
    var visualSalvo = (codigo.match(/visual-(header|lateral|celeste)/i) || [])[1];
    var larguraSalva = (codigo.match(/(?:arcane-me-rp|arcane-blecaute-rp)[^"']*\b(estreito|medio|largo)\b/i) || [])[1];
    try { visual.value = visualSalvo || localStorage.getItem(CHAVE_VISUAL + '-' + e.id) || e.config.visuais[0].valor; largura.value = larguraSalva || localStorage.getItem(CHAVE_LARGURA) || 'medio'; } catch (erro) { visual.value = visualSalvo || e.config.visuais[0].valor; largura.value = larguraSalva || 'medio'; }
    if (!visual.value) visual.value = e.config.visuais[0].valor;
    toolbar.addEventListener('mousedown', function (ev) { if (ev.target.closest('button')) ev.preventDefault(); });
    toolbar.addEventListener('click', function (ev) {
      var b = ev.target.closest('button[data-arcane-formato],button[data-arcane-cor]'); if (!b) return;
      if (b.hasAttribute('data-arcane-cor')) aplicarEstilo(editor, 'cor', b.getAttribute('data-arcane-cor'), campo, original);
      else aplicarEstilo(editor, b.getAttribute('data-arcane-formato'), '', campo, original);
    });
    editor.addEventListener('mouseup', function () { guardarSelecaoEditor(editor); });
    editor.addEventListener('keyup', function () { guardarSelecaoEditor(editor); });
    editor.addEventListener('focus', function () { guardarSelecaoEditor(editor); });
    editor.addEventListener('input', function () { guardarSelecaoEditor(editor); sincronizar(editor, campo, original); });
    editor.addEventListener('paste', function (ev) { colarComoTexto(editor, ev); });
    visual.addEventListener('change', function () { try { localStorage.setItem(CHAVE_VISUAL + '-' + e.id, visual.value); } catch (erro) {} });
    largura.addEventListener('change', function () { try { localStorage.setItem(CHAVE_LARGURA, largura.value); } catch (erro) {} });
    form.addEventListener('submit', function (ev) {
      var texto = sincronizar(editor, campo, original); if (!texto) { ev.preventDefault(); editor.focus(); return; }
      var faseRubra = meta && meta.querySelector('.arcane-me-fase-rubra-check');
      var pronto = U1 ? criarUpdate(e, texto, meta.querySelector('.arcane-me-title').value, meta.querySelector('.arcane-me-subtitle').value, !!(faseRubra && faseRubra.checked)) : criarPost(e, texto, largura.value, visual.value);
      campo.value = pronto; original.value = pronto; campo.dispatchEvent(new Event('input', { bubbles: true }));
    }, true);
  }

  function iniciarMotor() {
    /* Remove a interface e as folhas injetadas por versões anteriores. */
    imersaoPosicionada = false;
    Array.prototype.slice.call(document.documentElement.classList).forEach(function (classe) {
      if (classe.indexOf('arcane-me-imersao-') === 0) document.documentElement.classList.remove(classe);
    });
    Array.prototype.forEach.call(
      document.querySelectorAll('.' + CLASSE_IMERSAO_OCULTO + ',.' + CLASSE_IMERSAO_RODAPE + ',.' + CLASSE_IMERSAO_ABERTURA),
      function (item) {
        item.classList.remove(CLASSE_IMERSAO_OCULTO, CLASSE_IMERSAO_RODAPE, CLASSE_IMERSAO_ABERTURA);
      }
    );
    Array.prototype.forEach.call(
      document.querySelectorAll('#' + ID_IMERSAO_CSS + ',[id^="' + ID_IMERSAO_CSS + '-parte-"]'),
      function (item) { if (item.parentNode) item.parentNode.removeChild(item); }
    );
    Array.prototype.forEach.call(
      document.querySelectorAll('.arcane-me-toolbar,.arcane-me-meta,.arcane-me-editor,.arcane-me-narracao-estrelas,#arcane-me-decoracao-pagina,#arcane-me-decoracao-pagina-css'),
      function (item) { if (item.parentNode) item.parentNode.removeChild(item); }
    );
    Array.prototype.forEach.call(
      document.querySelectorAll('[id^="arcane-me-editor-css"],[id^="arcane-me-narrador-css"],[id^="arcane-me-post-css-"]'),
      function (item) { if (item.parentNode) item.parentNode.removeChild(item); }
    );
    Array.prototype.forEach.call(document.querySelectorAll('form.arcane-me-form,form.arcane-me-pagina'), function (form) {
      form.classList.remove('arcane-me-form', 'arcane-me-pagina', 'arcane-me-narrador');
      var sc = form.querySelector('.sceditor-container');
      if (sc) sc.style.removeProperty('display');
    });
    preparar();
    prepararScrollBaile();
    /* Forumeiros pode reconstruir postagens/editor alguns instantes depois. */
    window.setTimeout(function () { preparar(); prepararScrollBaile(); }, 700);
    window.setTimeout(function () { preparar(); prepararScrollBaile(); }, 1600);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciarMotor, { once: true }); else iniciarMotor();
})();


/* ARCANE · PAINEL ADMINISTRATIVO DOS MINI-EVENTOS · V14
   Ciclo administrativo: 30 dias de evento, encerramento e 15 dias de descanso.
   Publica em Libertatem (f3) e arquiva em Arquivos (f4).
*/
(function () {
  'use strict';

  var usuario = window._userdata || {};
  if (String(usuario.user_id || '') !== '1') return;

  var CHAVE = 'arcaneMiniEventosAdminV1';
  var CHAVE_AVISO = 'arcaneMiniEventosUltimoAvisoV12';
  var FORUM_ATIVO = '3';
  var FORUM_ARQUIVO = '4';
  var DURACAO_EVENTO = 30 * 24 * 60 * 60 * 1000;
  var DURACAO_DESCANSO = 15 * 24 * 60 * 60 * 1000;
  var JANELA_ENCERRAMENTO = 48 * 60 * 60 * 1000;
  var DURACAO_SILENCIO = 24 * 60 * 60 * 1000;
  var EVENTOS = [
    { id: 'blecaute', nome: 'Blecaute em Hogwarts', titulo: 'Blecaute em Hogwarts', modeloPost: '309' },
    { id: 'chuva-estrelas', nome: 'Chuva de Estrelas Cadentes', titulo: 'Chuva de Estrelas Cadentes', modeloPost: '314' },
    { id: 'tempestade-magica', nome: 'Tempestade Mágica', titulo: 'Tempestade Mágica', modeloPost: '322' },
    { id: 'baile-mascaras', nome: 'Baile de Máscaras', titulo: 'Baile de Máscaras', modeloPost: '338' }
  ];
  var estadoServidorSincronizado = false;

  function lerEstado() {
    try { return JSON.parse(localStorage.getItem(CHAVE) || '{}') || {}; }
    catch (erro) { return {}; }
  }

  function salvarEstado(estado) {
    localStorage.setItem(CHAVE, JSON.stringify(estado));
    renderizar();
    window.dispatchEvent(new CustomEvent('arcane:minieventos:sincronizar', {
      detail: { ativo: estado.ativo || null }
    }));
  }

  function eventoPorId(id) {
    return EVENTOS.filter(function (evento) { return evento.id === id; })[0] || null;
  }

  function plural(valor, singular, pluralTexto) {
    return valor === 1 ? singular : pluralTexto;
  }

  function duracaoHumana(ms) {
    var absoluto = Math.max(0, Math.abs(ms));
    var dias = Math.floor(absoluto / 86400000);
    var horas = Math.floor((absoluto % 86400000) / 3600000);
    var minutos = Math.max(1, Math.ceil((absoluto % 3600000) / 60000));
    if (dias) return dias + ' ' + plural(dias, 'dia', 'dias') + (horas ? ' e ' + horas + ' ' + plural(horas, 'hora', 'horas') : '');
    if (horas) return horas + ' ' + plural(horas, 'hora', 'horas') + (minutos ? ' e ' + minutos + ' min' : '');
    return minutos + ' min';
  }

  function formatarData(data) {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
      timeZone: 'America/Sao_Paulo'
    }).format(data);
  }

  function situacaoAtual(estado) {
    var agora = Date.now();
    var silenciado = Number(estado.lembreteSilenciadoAte || 0) > agora;
    if (estado.ativo) {
      var termina = Date.parse(estado.ativo.terminaEm || '');
      if (Number.isFinite(termina)) {
        var restante = termina - agora;
        if (restante <= 0) return { tipo: 'encerrar-atrasado', exigeAcao: true, silenciado: silenciado, data: termina, restante: restante };
        if (restante <= JANELA_ENCERRAMENTO) return { tipo: 'encerrar-breve', exigeAcao: true, silenciado: silenciado, data: termina, restante: restante };
        return { tipo: 'ativo', exigeAcao: false, silenciado: false, data: termina, restante: restante };
      }
      return { tipo: 'ativo', exigeAcao: false, silenciado: false };
    }
    var encerrado = estado.ultimoEncerrado && Date.parse(estado.ultimoEncerrado.encerradoEm || '');
    if (Number.isFinite(encerrado)) {
      var disponivel = encerrado + DURACAO_DESCANSO;
      var falta = disponivel - agora;
      if (falta > 0) return { tipo: 'descanso', exigeAcao: false, silenciado: false, data: disponivel, restante: falta };
      return { tipo: 'abrir', exigeAcao: true, silenciado: silenciado, data: disponivel, restante: falta };
    }
    return { tipo: 'abrir', exigeAcao: true, silenciado: silenciado };
  }

  function descansoEmAndamento(estado) {
    return situacaoAtual(estado).tipo === 'descanso';
  }

  function documento(html) {
    return new DOMParser().parseFromString(html, 'text/html');
  }

  async function obterDocumento(url) {
    var resposta = await fetch(url, { credentials: 'same-origin', cache: 'no-store' });
    if (!resposta.ok) throw new Error('O Forumeiros respondeu com o erro ' + resposta.status + '.');
    return { resposta: resposta, doc: documento(await resposta.text()) };
  }

  function verificarLogin(doc) {
    if (doc.querySelector('form[action*="login"],input[name="username"]')) {
      throw new Error('A sessão administrativa expirou. Entre novamente na conta do administrador.');
    }
  }

  async function obterAbertura(evento) {
    var pagina = await obterDocumento('/post?p=' + evento.modeloPost + '&mode=editpost');
    verificarLogin(pagina.doc);
    var campo = pagina.doc.querySelector('textarea[name="message"]');
    if (!campo || !campo.value.trim()) throw new Error('Não foi possível ler a abertura-modelo de ' + evento.nome + '.');
    var abertura = campo.value;
    if (evento.id === 'chuva-estrelas' && abertura.indexOf('arcane-ce-inline-sem-glitch-v10') === -1) {
      var cssInline = '<style id="arcane-ce-inline-sem-glitch-v10">#arcane-estrelas-abertura .ce-trilho-esquerdo{top:260px!important;bottom:10px!important;background:linear-gradient(180deg,#010103 0px,#010103 7px,#040207 22px,#08050c 42px,#0d0913 68px,#120c19 31%,#21152c 56%,rgba(33,21,44,.70) 75%,transparent 100%)!important;box-shadow:none!important;-webkit-mask-image:linear-gradient(180deg,#000 0%,#000 74%,rgba(0,0,0,.68) 86%,rgba(0,0,0,.20) 96%,transparent 100%)!important;mask-image:linear-gradient(180deg,#000 0%,#000 74%,rgba(0,0,0,.68) 86%,rgba(0,0,0,.20) 96%,transparent 100%)!important}</style>';
      abertura = abertura.replace(/(<div[^>]+id=["']arcane-estrelas-abertura["'][^>]*>)/i, '$1' + cssInline);
    }
    return abertura;
  }

  async function listarTopicos(forumId, titulo) {
    var pagina = await obterDocumento('/f' + forumId + '-');
    /* Considera apenas o título real da listagem. O link de "última postagem"
       pode continuar apontando para um tópico já movido ao arquivo. */
    return Array.prototype.map.call(pagina.doc.querySelectorAll('a.topictitle[href^="/t"]'), function (link) {
      var achado = (link.getAttribute('href') || '').match(/^\/t(\d+)(?:-|$)/i);
      return achado && link.textContent.trim() === titulo ? { id: achado[1], url: link.getAttribute('href') } : null;
    }).filter(Boolean).filter(function (topico, indice, todos) {
      return todos.findIndex(function (item) { return item.id === topico.id; }) === indice;
    }).sort(function (a, b) { return Number(b.id) - Number(a.id); });
  }

  async function localizarEventoNoForum(forumId) {
    var candidatos = [];
    for (var i = 0; i < EVENTOS.length; i += 1) {
      var topicos = await listarTopicos(forumId, EVENTOS[i].titulo);
      for (var j = 0; j < topicos.length; j += 1) {
        candidatos.push({ evento: EVENTOS[i], topico: topicos[j] });
      }
    }
    candidatos.sort(function (a, b) { return Number(b.topico.id) - Number(a.topico.id); });

    for (var c = 0; c < candidatos.length; c += 1) {
      try {
        var pagina = await obterDocumento('/t' + candidatos[c].topico.id + '-');
        var marcador = pagina.doc.querySelector(
          '.arcane-mini-evento-estado[data-evento-id="' + candidatos[c].evento.id + '"], ' +
          '[data-evento-id="' + candidatos[c].evento.id + '"][data-evento-fim]'
        );
        if (!marcador) continue;
        var inicio = marcador.getAttribute('data-evento-inicio') || '';
        var fim = marcador.getAttribute('data-evento-fim') || '';
        if (!Number.isFinite(Date.parse(fim))) continue;
        return {
          evento: candidatos[c].evento.id,
          topico: candidatos[c].topico.id,
          url: candidatos[c].topico.url,
          criadoEm: inicio,
          terminaEm: fim
        };
      } catch (erro) {}
    }
    return null;
  }

  async function sincronizarEstadoDoForum() {
    try {
      var estado = lerEstado();
      var ativoNoForum = await localizarEventoNoForum(FORUM_ATIVO);
      if (ativoNoForum) {
        estado.ativo = ativoNoForum;
        estado.ultimoEvento = ativoNoForum.evento;
      } else {
        estado.ativo = null;
        var ultimoArquivado = await localizarEventoNoForum(FORUM_ARQUIVO);
        if (ultimoArquivado) {
          estado.ultimoEvento = ultimoArquivado.evento;
          if (!estado.ultimoEncerrado ||
              String(estado.ultimoEncerrado.topico) !== String(ultimoArquivado.topico) ||
              Date.parse(estado.ultimoEncerrado.encerradoEm || '') > Date.now()) {
            estado.ultimoEncerrado = {
              evento: ultimoArquivado.evento,
              topico: ultimoArquivado.topico,
              /* Um evento pode ser encerrado antes da previsão. Nesse caso,
                 uma data futura criaria um descanso maior que 15 dias. */
              encerradoEm: new Date(Math.min(Date.parse(ultimoArquivado.terminaEm), Date.now())).toISOString()
            };
          }
        }
      }
      localStorage.setItem(CHAVE, JSON.stringify(estado));
    } catch (erro) {
      /* Se a consulta falhar, preserva o estado local e mantém as ações bloqueadas. */
      return false;
    }
    return true;
  }

  async function criarTopico(evento) {
    var anteriores = await listarTopicos(FORUM_ATIVO, evento.titulo);
    var idsAnteriores = anteriores.map(function (topico) { return topico.id; });
    var inicioEm = new Date();
    var fimEm = new Date(inicioEm.getTime() + DURACAO_EVENTO);
    var abertura = await obterAbertura(evento);
    abertura = abertura.replace(/<span[^>]*class=["']arcane-mini-evento-estado["'][^>]*><\/span>/i, '');
    abertura = '<span class="arcane-mini-evento-estado" data-evento-id="' + evento.id + '" data-evento-inicio="' + inicioEm.toISOString() + '" data-evento-fim="' + fimEm.toISOString() + '" style="display:none!important"></span>' + abertura;
    var pagina = await obterDocumento('/post?f=' + FORUM_ATIVO + '&mode=newtopic');
    verificarLogin(pagina.doc);
    var form = pagina.doc.querySelector('form[name="post"]');
    if (!form) throw new Error('O formulário de criação não foi encontrado.');

    var dados = new FormData(form);
    dados.set('subject', evento.titulo);
    dados.set('message', abertura);
    dados.set('mode', 'newtopic');
    dados.set('f', FORUM_ATIVO);
    dados.set('post', 'Enviar');
    dados.set('topictype', '0');
    dados.delete('preview');
    dados.delete('disable_html');
    dados.delete('disable_bbcode');
    dados.delete('disable_smilies');

    var resposta = await fetch(form.action || '/post', {
      method: 'POST', body: dados, credentials: 'same-origin', redirect: 'follow'
    });
    var html = await resposta.text();
    var atuais = await listarTopicos(FORUM_ATIVO, evento.titulo);
    var criado = atuais.filter(function (topico) { return idsAnteriores.indexOf(topico.id) < 0; })[0];
    if (!criado) {
      var finalUrl = new URL(resposta.url, location.origin);
      var correspondencia = finalUrl.pathname.match(/^\/t(\d+)(?:-|$)/i);
      if (correspondencia) criado = { id: correspondencia[1], url: finalUrl.pathname };
    }
    if (!criado) {
      var erro = documento(html).querySelector('.error,.messagebox,.panel .error');
      throw new Error(erro ? erro.textContent.trim() : 'O tópico não foi criado ou o ID não pôde ser confirmado.');
    }
    criado.inicioEm = inicioEm.toISOString();
    criado.fimEm = fimEm.toISOString();
    return criado;
  }

  async function reconciliarEstado() {
    var estado = lerEstado();
    if (!estado.ativo || !estado.ativo.topico) return;
    var evento = eventoPorId(estado.ativo.evento);
    if (!evento) return;
    try {
      var atual = await obterDocumento('/t' + estado.ativo.topico + '-');
      if (atual.doc.querySelector('[data-evento="' + evento.id + '"]')) return;
    } catch (erro) {}
    try {
      var candidatos = (await listarTopicos(FORUM_ATIVO, evento.titulo)).concat(await listarTopicos(FORUM_ARQUIVO, evento.titulo));
      candidatos.sort(function (a, b) { return Number(b.id) - Number(a.id); });
      if (!candidatos[0]) return;
      estado.ativo.topico = candidatos[0].id;
      estado.ativo.url = candidatos[0].url;
      salvarEstado(estado);
    } catch (erro) {}
  }

  function acharLink(doc, modo) {
    return doc.querySelector('a[href*="/modcp?mode=' + modo + '"],a[href*="mode=' + modo + '&"]');
  }

  async function moverParaArquivos(topicoId) {
    var topico = await obterDocumento('/t' + topicoId + '-');
    verificarLogin(topico.doc);
    var linkMover = acharLink(topico.doc, 'move');
    if (!linkMover) throw new Error('O controle para mover o tópico não foi encontrado.');

    var paginaMover = await obterDocumento(linkMover.getAttribute('href'));
    var form = paginaMover.doc.querySelector('form[action*="modcp"] select[name="new_forum"]');
    form = form && form.closest('form');
    if (!form) throw new Error('O formulário de movimentação não foi encontrado.');
    var dados = new FormData(form);
    dados.set('new_forum', 'f' + FORUM_ARQUIVO);
    dados.set('confirm', 'Sim');
    dados.delete('cancel');
    dados.delete('move_leave_shadow');
    var resposta = await fetch(form.action, { method: 'POST', body: dados, credentials: 'same-origin', redirect: 'follow' });
    if (!resposta.ok) throw new Error('Falha ao mover o tópico para Arquivos.');
  }

  async function bloquearTopico(topicoId) {
    var topico = await obterDocumento('/t' + topicoId + '-');
    verificarLogin(topico.doc);
    if (acharLink(topico.doc, 'unlock')) return;
    var linkBloquear = acharLink(topico.doc, 'lock');
    if (!linkBloquear) throw new Error('O controle para bloquear o tópico não foi encontrado.');
    var resposta = await fetch(linkBloquear.getAttribute('href'), { credentials: 'same-origin', redirect: 'follow' });
    if (!resposta.ok) throw new Error('Falha ao bloquear o tópico.');
  }

  async function verificarEncerramento(topicoId) {
    var pagina = await obterDocumento('/t' + topicoId + '-');
    var bloqueado = !!acharLink(pagina.doc, 'unlock');
    var emArquivos = !!pagina.doc.querySelector('a[href^="/f' + FORUM_ARQUIVO + '-"],a[href="/f' + FORUM_ARQUIVO + '"]');
    if (!bloqueado || !emArquivos) throw new Error('A verificação final falhou: bloqueado=' + bloqueado + ', em Arquivos=' + emArquivos + '.');
  }

  function sortear() {
    var estado = lerEstado();
    if (estado.ativo) return alert('Encerre o evento ativo antes de fazer outro sorteio.');
    if (descansoEmAndamento(estado)) return alert('O intervalo de 15 dias entre os mini-eventos ainda não terminou.');
    var candidatos = EVENTOS.filter(function (evento) { return evento.id !== estado.ultimoEvento; });
    if (!candidatos.length) candidatos = EVENTOS.slice();
    var escolhido = candidatos[Math.floor(Math.random() * candidatos.length)];
    estado.sorteado = escolhido.id;
    salvarEstado(estado);
  }

  async function confirmarCriacao() {
    var estado = lerEstado();
    var evento = eventoPorId(estado.sorteado);
    if (!evento) return alert('Sorteie um tema primeiro.');
    if (estado.ativo) return alert('Já existe um evento ativo neste navegador administrativo.');
    if (descansoEmAndamento(estado)) return alert('O intervalo de 15 dias entre os mini-eventos ainda não terminou.');
    if (!confirm('Criar uma nova edição de "' + evento.nome + '" em Libertatem?\n\nA abertura será publicada imediatamente.')) return;
    ocupar('Criando tópico e publicando a abertura...');
    try {
      var topico = await criarTopico(evento);
      estado.ativo = { evento: evento.id, topico: topico.id, url: topico.url, criadoEm: topico.inicioEm, terminaEm: topico.fimEm };
      estado.ultimoEvento = evento.id;
      estado.sorteado = '';
      delete estado.lembreteSilenciadoAte;
      salvarEstado(estado);
      alert('Evento criado com sucesso no tópico t' + topico.id + '.');
    } catch (erro) {
      liberar();
      alert('Não foi possível criar o evento:\n\n' + erro.message);
    }
  }

  async function confirmarEncerramento() {
    var estado = lerEstado();
    if (!estado.ativo || !estado.ativo.topico) return alert('Nenhum evento ativo foi registrado neste navegador.');
    var evento = eventoPorId(estado.ativo.evento);
    if (!confirm('Encerrar "' + (evento ? evento.nome : estado.ativo.evento) + '"?\n\nO tópico t' + estado.ativo.topico + ' será movido para Arquivos e bloqueado.')) return;
    ocupar('Movendo para Arquivos e bloqueando...');
    try {
      await moverParaArquivos(estado.ativo.topico);
      await bloquearTopico(estado.ativo.topico);
      await verificarEncerramento(estado.ativo.topico);
      estado.ultimoEncerrado = { evento: estado.ativo.evento, topico: estado.ativo.topico, encerradoEm: new Date().toISOString() };
      estado.ativo = null;
      delete estado.lembreteSilenciadoAte;
      salvarEstado(estado);
      alert('Evento encerrado, bloqueado e arquivado com sucesso.');
    } catch (erro) {
      liberar();
      alert('O encerramento não foi concluído:\n\n' + erro.message);
    }
  }

  var painel;
  var acionador;
  var lembrete;

  function silenciarLembrete() {
    var estado = lerEstado();
    estado.lembreteSilenciadoAte = Date.now() + DURACAO_SILENCIO;
    salvarEstado(estado);
    esconderLembrete();
  }

  function liberarDescansoAgora() {
    var estado = lerEstado();
    if (estado.ativo) return alert('Encerre o evento ativo antes de alterar o descanso.');
    if (situacaoAtual(estado).tipo !== 'descanso') return alert('Não existe um descanso em andamento.');
    if (!confirm('Zerar o descanso atual e liberar um novo mini-evento agora?')) return;
    estado.ultimoEncerrado.encerradoEm = new Date(Date.now() - DURACAO_DESCANSO).toISOString();
    estado.descansoLiberadoManualmente = true;
    delete estado.lembreteSilenciadoAte;
    salvarEstado(estado);
  }

  function esconderLembrete() {
    if (lembrete) lembrete.remove();
    lembrete = null;
  }

  function textoLembrete(situacao) {
    if (situacao.tipo === 'abrir') return 'O descanso terminou. Já é possível sortear e abrir um novo mini-evento.';
    if (situacao.tipo === 'encerrar-atrasado') return 'O mini-evento passou da data prevista e aguarda encerramento.';
    if (situacao.tipo === 'encerrar-breve') return 'O mini-evento encerra em ' + duracaoHumana(situacao.restante) + '.';
    return '';
  }

  function mostrarLembreteDiario() {
    if (!acionador || lembrete) return;
    var estado = lerEstado();
    var situacao = situacaoAtual(estado);
    if (!situacao.exigeAcao || situacao.silenciado) return;
    var hoje = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(new Date());
    if (localStorage.getItem(CHAVE_AVISO) === hoje) return;
    localStorage.setItem(CHAVE_AVISO, hoje);
    lembrete = document.createElement('div');
    lembrete.id = 'arcane-eventos-lembrete';
    lembrete.innerHTML = '<b>Mini-eventos</b><span>' + textoLembrete(situacao) + '</span><div><button type="button" data-lembrete="abrir">Abrir painel</button><button type="button" data-lembrete="depois">Lembrar em 24h</button></div>';
    lembrete.addEventListener('click', function (evento) {
      var botao = evento.target.closest('button[data-lembrete]');
      if (!botao) return;
      if (botao.dataset.lembrete === 'abrir') {
        esconderLembrete();
        definirPainelAberto(true);
      } else silenciarLembrete();
    });
    acionador.parentNode.appendChild(lembrete);
  }

  function atualizarIndicador(situacao) {
    if (!acionador) return;
    acionador.classList.remove('arcane-lembrete-abrir', 'arcane-lembrete-breve', 'arcane-lembrete-atrasado', 'arcane-lembrete-silenciado');
    if (!situacao.exigeAcao) return;
    if (situacao.tipo === 'abrir') acionador.classList.add('arcane-lembrete-abrir');
    if (situacao.tipo === 'encerrar-breve') acionador.classList.add('arcane-lembrete-breve');
    if (situacao.tipo === 'encerrar-atrasado') acionador.classList.add('arcane-lembrete-atrasado');
    if (situacao.silenciado) acionador.classList.add('arcane-lembrete-silenciado');
  }

  function definirPainelAberto(aberto) {
    if (!painel || !acionador) return;
    painel.classList.toggle('arcane-admin-aberto', aberto);
    acionador.classList.toggle('arcane-eventos-acionador-ativo', aberto);
    acionador.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    if (aberto) ajustarPainelAoCelular();
  }

  function ajustarPainelAoCelular() {
    if (!painel) return;
    var visual = window.visualViewport;
    var largura = visual ? visual.width : window.innerWidth;
    var celular = largura < 700 || (window.matchMedia && window.matchMedia('(hover:none) and (pointer:coarse)').matches);
    if (!celular) {
      ['position', 'left', 'right', 'top', 'bottom', 'width', 'max-height', 'overflow-y'].forEach(function (propriedade) {
        painel.style.removeProperty(propriedade);
      });
      return;
    }
    var margem = 10;
    painel.style.setProperty('position', 'fixed', 'important');
    painel.style.setProperty('left', ((visual ? visual.offsetLeft : 0) + margem) + 'px', 'important');
    painel.style.setProperty('right', 'auto', 'important');
    painel.style.setProperty('top', ((visual ? visual.offsetTop : 0) + 72) + 'px', 'important');
    painel.style.setProperty('bottom', 'auto', 'important');
    painel.style.setProperty('width', Math.max(280, largura - margem * 2) + 'px', 'important');
    painel.style.setProperty('max-height', Math.max(260, (visual ? visual.height : window.innerHeight) - 92) + 'px', 'important');
    painel.style.setProperty('overflow-y', 'auto', 'important');
  }

  function ocupar(texto) {
    if (!painel) return;
    painel.classList.add('arcane-admin-ocupado');
    painel.querySelector('.arcane-admin-status').textContent = texto;
    Array.prototype.forEach.call(painel.querySelectorAll('button'), function (botao) { botao.disabled = true; });
  }

  function liberar() {
    if (!painel) return;
    painel.classList.remove('arcane-admin-ocupado');
    renderizar();
  }

  function htmlSituacao(estado, ativo, sorteado, situacao) {
    if (ativo) {
      var prazo = situacao.data ? '<span class="arcane-admin-prazo ' + situacao.tipo + '">' +
        (situacao.tipo === 'encerrar-atrasado' ? 'Encerramento atrasado há ' + duracaoHumana(situacao.restante) :
        situacao.tipo === 'encerrar-breve' ? 'Encerra em ' + duracaoHumana(situacao.restante) :
        'Previsão de encerramento: ' + formatarData(new Date(situacao.data))) + '</span>' : '';
      return '<b>Ativo:</b> ' + ativo.nome + prazo + '<a href="' + estado.ativo.url + '">Abrir tópico t' + estado.ativo.topico + '</a>';
    }
    if (situacao.tipo === 'descanso') {
      return '<b>Descanso entre eventos</b><span class="arcane-admin-prazo">Próximo evento disponível em ' + duracaoHumana(situacao.restante) + '.</span><small>A partir de ' + formatarData(new Date(situacao.data)) + '.</small>';
    }
    if (sorteado) return '<b>Sorteado:</b> ' + sorteado.nome + '<span class="arcane-admin-prazo abrir">Pronto para criar.</span>';
    return '<b>Novo evento disponível</b><span class="arcane-admin-prazo abrir">O descanso terminou. Sorteie o próximo tema.</span>';
  }

  function renderizar() {
    if (!painel) return;
    var estado = lerEstado();
    var sorteado = eventoPorId(estado.sorteado);
    var ativo = estado.ativo && eventoPorId(estado.ativo.evento);
    var situacao = situacaoAtual(estado);
    var emDescanso = situacao.tipo === 'descanso';
    var sincronizando = !estadoServidorSincronizado;
    painel.innerHTML =
      '<div class="arcane-admin-titulo"><span>✦</span> Mini-eventos<button type="button" class="arcane-admin-fechar" aria-label="Fechar painel">×</button></div>' +
      '<div class="arcane-admin-acoes">' +
        '<button type="button" class="primario" data-acao="sortear"' + (sincronizando || ativo || emDescanso ? ' disabled' : '') + '>Sortear tema</button>' +
        '<button type="button" data-acao="criar"' + (sincronizando || !sorteado || ativo || emDescanso ? ' disabled' : '') + '>Criar evento</button>' +
      '</div>' +
      '<div class="arcane-admin-status">' +
        (sincronizando ? '<b>Sincronizando eventos</b><span class="arcane-admin-prazo">Consultando o estado atual do fórum…</span>' : htmlSituacao(estado, ativo, sorteado, situacao)) +
      '</div>' +
      '<div class="arcane-admin-rodape">' +
        (situacao.exigeAcao && !situacao.silenciado ? '<button type="button" data-acao="lembrar">Lembrar em 24h</button>' : '') +
        (!sincronizando && !ativo && emDescanso ? '<button type="button" data-acao="liberar-descanso">Liberar agora</button>' : '') +
        '<button type="button" class="perigo" data-acao="encerrar"' + (sincronizando || !ativo ? ' disabled' : '') + '>Encerrar evento</button>' +
      '</div>';
    atualizarIndicador(situacao);
    if (painel.classList.contains('arcane-admin-aberto')) ajustarPainelAoCelular();
  }

  function instalar() {
    if (document.getElementById('arcane-mini-eventos-admin')) return;
    var estilo = document.createElement('style');
    estilo.textContent = '#arcane-mini-eventos-admin{position:absolute;z-index:99999;left:calc(100% + 4px);top:calc(100% + 10px);width:360px;padding:0;border:1px solid #29302b;border-top:2px solid #8e7a36;background:rgba(5,8,7,.97);box-shadow:0 14px 32px rgba(0,0,0,.58);color:#c9cbc9;font:11px/1.45 Poppins,Arial,sans-serif;backdrop-filter:blur(8px);opacity:0;visibility:hidden;pointer-events:none;transform:translateX(-8px);transition:opacity .18s ease,transform .18s ease,visibility .18s}#arcane-mini-eventos-admin:before{content:"";position:absolute;left:-7px;top:13px;width:12px;height:12px;border-left:1px solid #29302b;border-bottom:1px solid #29302b;background:#070a08;transform:rotate(45deg)}#arcane-mini-eventos-admin.arcane-admin-aberto{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(0)}#arcane-mini-eventos-admin *{box-sizing:border-box}.arcane-admin-titulo{position:relative;padding:14px 44px 12px 14px;border-bottom:1px solid #1d231f;color:#b79d4d;font-size:13px;font-weight:700;letter-spacing:.8px;text-transform:uppercase}.arcane-admin-titulo span{margin-right:6px}.arcane-admin-fechar{position:absolute;top:9px;right:12px;width:27px;height:27px;padding:0;border:1px solid #36382b;background:#0d100e;color:#a8914c;font:700 13px/1 Arial,sans-serif;cursor:pointer}.arcane-admin-fechar:hover{border-color:#8e7a36;color:#ddc56d}.arcane-admin-status{min-height:78px;padding:17px 14px;color:#a7aaa7}.arcane-admin-status b{display:block;margin-bottom:5px;color:#e0e1df}.arcane-admin-status a{display:block;margin-top:7px;color:#6d9d65!important;font-size:9px;font-weight:700;letter-spacing:.7px;text-transform:uppercase}.arcane-admin-acoes{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:11px 12px;border-top:1px solid #1d231f}.arcane-admin-acoes button{min-height:32px;border:1px solid #514a2d;background:#111410;color:#b79d4d;font:700 9px Poppins,Arial,sans-serif;letter-spacing:.65px;text-transform:uppercase;cursor:pointer}.arcane-admin-acoes button:hover{border-color:#a68e40;background:#9a843a;color:#090a09}.arcane-admin-acoes button.perigo{grid-column:1/-1;border-color:#554039;color:#b98978}.arcane-admin-acoes button.perigo:hover{border-color:#9a6250;background:#6e4033;color:#fff}.arcane-admin-acoes button:disabled{cursor:not-allowed;opacity:.32}#arcane-eventos-acionador{position:absolute;left:50%;top:calc(100% + 10px);display:flex;align-items:center;justify-content:center;width:34px;height:34px;padding:0;transform:translateX(-50%);border:0!important;outline:0;background:transparent!important;box-shadow:none!important;color:#e2e3e1;font-size:20px;cursor:pointer;transition:color .16s ease,transform .16s ease}#arcane-eventos-acionador:hover,#arcane-eventos-acionador.arcane-eventos-acionador-ativo{color:#c2a84e;transform:translateX(-50%) scale(1.08)}#arcane-eventos-acionador:after{content:"MINI-EVENTOS";position:absolute;left:38px;top:50%;padding:5px 7px;transform:translate(4px,-50%);background:#080b09;border:1px solid #29302b;color:#b7b9b6;font:600 8px/1 Poppins,Arial,sans-serif;letter-spacing:.8px;white-space:nowrap;opacity:0;visibility:hidden;pointer-events:none;transition:.16s}#arcane-eventos-acionador:hover:after{opacity:1;visibility:visible;transform:translate(0,-50%)}';
    estilo.textContent += '#arcane-mini-eventos-admin{left:calc(100% + 15px);top:auto;bottom:-44px;border:1px solid rgba(49,49,49,.86);border-top:2px solid #7B6E3D;border-radius:0!important;background:rgba(0,4,3,.86);box-shadow:0 18px 45px rgba(0,0,0,.68),inset 0 0 0 1px rgba(185,158,89,.05)}#arcane-mini-eventos-admin:before{top:auto;bottom:14px;border-color:rgba(49,49,49,.86);background:rgba(0,4,3,.86)}#arcane-mini-eventos-admin button{border-radius:0!important}.arcane-admin-titulo{padding:12px 44px 10px 14px;border-bottom:1px solid rgba(49,49,49,.82);background:rgba(0,0,0,.46);color:#b99e59;font-size:15px}.arcane-admin-acoes{padding:10px 12px;border-top:0;border-bottom:1px solid rgba(49,49,49,.72);background:rgba(0,0,0,.2)}.arcane-admin-acoes button{min-height:30px;border-color:#313131;background:#101010;color:#b99e59;font:700 10px/1 Montserrat,Arial,sans-serif;letter-spacing:.08em}.arcane-admin-acoes button.primario:not(:disabled){border-color:#b99e59;background:#7B6E3D;color:#101010}.arcane-admin-acoes button.primario:not(:disabled):hover,.arcane-admin-acoes button:not(:disabled):hover{border-color:#538353;background:#244028;color:#d1d1d1}.arcane-admin-status{min-height:76px;padding:18px 14px;font-size:12px;background:rgba(0,0,0,.28)}.arcane-admin-status b{font-size:12px}.arcane-admin-rodape{display:flex;justify-content:flex-end;padding:10px 12px;border-top:1px solid rgba(49,49,49,.78);background:rgba(0,0,0,.38)}.arcane-admin-rodape button{min-width:164px;min-height:30px;border:1px solid #313131;background:#101010;color:#b99e59;font:700 10px/1 Montserrat,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;cursor:pointer}.arcane-admin-rodape button:not(:disabled):hover{border-color:#538353;background:#244028;color:#d1d1d1}.arcane-admin-rodape button:disabled{opacity:.45;cursor:not-allowed}.arcane-admin-fechar{display:flex;align-items:center;justify-content:center;width:26px;height:26px;padding:0;border-color:#313131;background:#101010;color:#b99e59;font-size:14px;line-height:1}.arcane-admin-fechar:hover{border-color:#7B6E3D;background:#7B6E3D;color:#101010}#arcane-eventos-acionador{border-radius:0!important}#arcane-eventos-acionador i{font-size:17px!important;line-height:1!important}';
    estilo.textContent += '.arcane-admin-prazo{display:block;margin-top:6px;color:#aaa;font-size:10px}.arcane-admin-prazo.abrir{color:#c4a957}.arcane-admin-prazo.encerrar-breve{color:#d5b86c}.arcane-admin-prazo.encerrar-atrasado{color:#d27868;font-weight:700}.arcane-admin-status small{display:block;margin-top:3px;color:#777;font-size:9px}.arcane-admin-rodape{gap:8px}.arcane-admin-rodape button{min-width:0;flex:1}#arcane-eventos-acionador:before{content:"";position:absolute;right:2px;top:2px;width:7px;height:7px;background:transparent;box-shadow:none;pointer-events:none}#arcane-eventos-acionador.arcane-lembrete-abrir:before{background:#c6a94f;box-shadow:0 0 7px rgba(198,169,79,.75);animation:arcane-lembrete-pulso 1.8s ease-in-out infinite}#arcane-eventos-acionador.arcane-lembrete-breve:before{background:#d5b86c;box-shadow:0 0 6px rgba(213,184,108,.65);animation:arcane-lembrete-pulso 2.4s ease-in-out infinite}#arcane-eventos-acionador.arcane-lembrete-atrasado:before{background:#c75d4e;box-shadow:0 0 8px rgba(199,93,78,.85);animation:arcane-lembrete-pulso 1.15s ease-in-out infinite}#arcane-eventos-acionador.arcane-lembrete-silenciado:before{width:5px;height:5px;opacity:.38;animation:none;box-shadow:none}@keyframes arcane-lembrete-pulso{0%,100%{opacity:.45;transform:scale(.72)}50%{opacity:1;transform:scale(1.12)}}#arcane-eventos-lembrete{position:absolute;z-index:99998;left:calc(100% + 15px);bottom:-34px;width:300px;padding:13px;border:1px solid rgba(49,49,49,.9);border-top:2px solid #7B6E3D;background:rgba(0,4,3,.94);box-shadow:0 16px 38px rgba(0,0,0,.68);color:#aaa;font:11px/1.5 Poppins,Arial,sans-serif}#arcane-eventos-lembrete b{display:block;margin-bottom:5px;color:#b99e59;font-size:12px;text-transform:uppercase}#arcane-eventos-lembrete span{display:block}#arcane-eventos-lembrete div{display:flex;gap:7px;margin-top:11px}#arcane-eventos-lembrete button{flex:1;min-height:28px;border:1px solid #313131;border-radius:0;background:#101010;color:#b99e59;font:700 8px/1 Montserrat,Arial,sans-serif;text-transform:uppercase;cursor:pointer}#arcane-eventos-lembrete button:hover{border-color:#7B6E3D;background:#7B6E3D;color:#101010}';
    estilo.textContent += '@media (hover:none) and (pointer:coarse){#arcane-mini-eventos-admin:before{display:none!important}.arcane-admin-rodape{flex-wrap:wrap}.arcane-admin-rodape button{min-width:calc(50% - 4px)}#arcane-eventos-acionador:after{display:none}#arcane-eventos-acionador{left:calc(100% + 10px)!important;top:50%!important;transform:translateY(-50%)!important}#arcane-eventos-acionador:hover,#arcane-eventos-acionador.arcane-eventos-acionador-ativo{transform:translateY(-50%) scale(1.08)!important}}@media(max-width:700px){#arcane-eventos-acionador{left:calc(100% + 10px)!important;top:50%!important;transform:translateY(-50%)!important}#arcane-eventos-acionador:hover,#arcane-eventos-acionador.arcane-eventos-acionador-ativo{transform:translateY(-50%) scale(1.08)!important}}';
    document.head.appendChild(estilo);
    painel = document.createElement('aside');
    painel.id = 'arcane-mini-eventos-admin';
    painel.addEventListener('click', function (evento) {
      evento.stopPropagation();
      if (evento.target.closest('.arcane-admin-fechar')) return definirPainelAberto(false);
      var botao = evento.target.closest('button[data-acao]');
      if (!botao || botao.disabled) return;
      if (botao.dataset.acao === 'sortear') sortear();
      if (botao.dataset.acao === 'criar') confirmarCriacao();
      if (botao.dataset.acao === 'encerrar') confirmarEncerramento();
      if (botao.dataset.acao === 'lembrar') silenciarLembrete();
      if (botao.dataset.acao === 'liberar-descanso') liberarDescansoAgora();
    });
    var avatar = document.querySelector('#rsidebar .ravatar');
    if (avatar) {
      avatar.style.position = 'relative';
      acionador = document.createElement('button');
      acionador.id = 'arcane-eventos-acionador';
      acionador.type = 'button';
      acionador.setAttribute('aria-label', 'Abrir administração dos mini-eventos');
      acionador.setAttribute('aria-controls', 'arcane-mini-eventos-admin');
      acionador.setAttribute('aria-expanded', 'false');
      acionador.innerHTML = '<i class="fa fas fa-calendar" aria-hidden="true"></i>';
      acionador.addEventListener('click', function () {
        definirPainelAberto(!painel.classList.contains('arcane-admin-aberto'));
      });
      avatar.appendChild(acionador);
      avatar.appendChild(painel);
      document.addEventListener('click', function (evento) {
        if (!painel.classList.contains('arcane-admin-aberto')) return;
        if (!painel.contains(evento.target) && !acionador.contains(evento.target)) definirPainelAberto(false);
      });
      document.addEventListener('keydown', function (evento) {
        if (evento.key === 'Escape') definirPainelAberto(false);
      });
    } else {
      document.body.appendChild(painel);
    }
    renderizar();
    sincronizarEstadoDoForum().then(function (sincronizado) {
      estadoServidorSincronizado = sincronizado;
      renderizar();
      if (sincronizado) mostrarLembreteDiario();
    });
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', ajustarPainelAoCelular);
      window.visualViewport.addEventListener('scroll', ajustarPainelAoCelular);
    }
    window.addEventListener('orientationchange', function () {
      window.setTimeout(ajustarPainelAoCelular, 120);
    });
    window.setInterval(function () {
      renderizar();
      if (estadoServidorSincronizado) mostrarLembreteDiario();
    }, 60000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', instalar);
  else instalar();
})();


/* ARCANE · MINI-EVENTOS · ATUALIZAÇÃO AUTOMÁTICA DO MURAL · V7
   Instalação: Gestão dos códigos JavaScript > Em todas as páginas.
   Não cria estilos: reutiliza integralmente o card de Feitiços Avançados.
*/
(function () {
  'use strict';

  var FORUM_ATIVO = '3';
  var INTERVALO = 5 * 60 * 1000;
  var CHAVE_CACHE = 'arcane:mural-mini-evento:v4';
  var CLASSE_PRONTO = 'arcane-mural-mini-evento-pronto';
  var EVENTOS = [
    {
      id: 'blecaute',
      titulo: 'Blecaute em Hogwarts',
      cor: '#79a9cc', rgb: '121,169,204',
      resumo: 'Hogwarts mergulhou na escuridão e toda fonte de luz deixou de responder. Descubra o que se move pelo castelo enquanto o blecaute permanece.'
    },
    {
      id: 'chuva-estrelas',
      titulo: 'Chuva de Estrelas Cadentes',
      cor: '#c0a3ef', rgb: '192,163,239',
      resumo: 'Estrelas começaram a riscar o céu de Hogwarts, trazendo fenômenos luminosos e mudanças inesperadas para quem acompanha a noite.'
    },
    {
      id: 'tempestade-magica',
      titulo: 'Tempestade Mágica',
      cor: '#9d63ff', rgb: '157,99,255',
      resumo: 'Uma tempestade carregada de magia alcançou Hogwarts. Relâmpagos encantados alteram o castelo e tornam cada novo clarão imprevisível.'
    },
    {
      id: 'baile-mascaras',
      titulo: 'Baile de Máscaras',
      cor: '#c9c3b5', rgb: '201,195,181',
      resumo: 'As portas do salão se abriram. Entre máscaras, música e promessas veladas, cada convidado escolhe o rosto que deseja mostrar.'
    }
  ];

  var card;
  var original;
  var sincronizando = false;
  var versaoSincronizacao = 0;
  var tentativasInicio = 0;

  function liberarPrimeiraPintura() {
    document.documentElement.classList.add(CLASSE_PRONTO);
  }

  function lerCache() {
    try {
      var cache = JSON.parse(window.localStorage.getItem(CHAVE_CACHE) || 'null');
      if (!cache || cache.versao !== 1) return null;
      return cache;
    } catch (erro) {
      return null;
    }
  }

  function salvarCache(ativo) {
    try {
      window.localStorage.setItem(CHAVE_CACHE, JSON.stringify({
        versao: 1,
        salvoEm: Date.now(),
        ativo: ativo ? {
          eventoId: ativo.evento.id,
          topico: ativo.topico,
          url: ativo.url,
          inicioEm: ativo.inicioEm,
          fimEm: ativo.fimEm
        } : null
      }));
    } catch (erro) {}
  }

  function aplicarCache() {
    var cache = lerCache();
    if (!cache) return false;
    if (!cache.ativo) {
      restaurarCard();
      liberarPrimeiraPintura();
      return true;
    }
    var dados = cache.ativo;
    var evento = eventoPorId(dados.eventoId);
    if (!evento || !dados.fimEm || Date.now() >= Date.parse(dados.fimEm)) return false;
    aplicarEvento({
      evento: evento,
      topico: dados.topico,
      url: dados.url,
      inicioEm: dados.inicioEm,
      fimEm: dados.fimEm
    });
    liberarPrimeiraPintura();
    return true;
  }

  function aplicarCacheInativo() {
    var cache = lerCache();
    if (!cache || cache.ativo !== null) return false;
    restaurarCard();
    liberarPrimeiraPintura();
    return true;
  }

  function encontrarCard() {
    if (card && document.documentElement.contains(card)) return card;
    card = document.getElementById('arcane-card-mini-evento');
    if (card) return card;
    var mural = document.querySelector('#rmural');
    if (!mural) return null;
    var titulo = Array.prototype.find.call(mural.querySelectorAll('.mini-info strong'), function (elemento) {
      return elemento.textContent.trim() === 'Feitiços Avançados';
    });
    card = titulo ? titulo.closest('.mini-info') : null;
    if (card) card.id = 'arcane-card-mini-evento';
    return card;
  }

  function guardarOriginal() {
    if (original || !encontrarCard()) return;
    var titulo = card.querySelector('strong');
    var descricao = card.querySelector('span');
    var link = card.querySelector('a');
    if (!titulo || !descricao) return;
    original = {
      titulo: titulo.textContent,
      descricao: descricao.textContent,
      link: link ? link.getAttribute('href') : null,
      botao: link ? link.textContent : null
    };
  }

  function restaurarCard() {
    guardarOriginal();
    if (!original || !card) return;
    card.querySelector('strong').textContent = original.titulo;
    card.querySelector('span').textContent = original.descricao;
    var link = card.querySelector('a');
    if (original.link) {
      if (!link) link = card.appendChild(document.createElement('a'));
      link.setAttribute('href', original.link);
      link.textContent = original.botao;
    } else if (link && link.getAttribute('data-arcane-mini-evento-link') === '1') {
      link.remove();
    }
    card.removeAttribute('data-mini-evento-ativo');
    card.style.removeProperty('--arcane-mini-cor');
    card.style.removeProperty('--arcane-mini-rgb');
  }

  function eventoPorId(id) {
    return EVENTOS.filter(function (evento) { return evento.id === id; })[0] || null;
  }

  function formatarData(data, longa) {
    return new Intl.DateTimeFormat('pt-BR', longa ? {
      day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Sao_Paulo'
    } : {
      day: '2-digit', month: '2-digit', timeZone: 'America/Sao_Paulo'
    }).format(data);
  }

  function aplicarEvento(ativo) {
    guardarOriginal();
    if (!original || !card) return;
    var termino = new Date(ativo.fimEm);
    card.querySelector('strong').textContent = ativo.evento.titulo;
    card.querySelector('span').textContent = ativo.evento.resumo + ' O evento ficará disponível até ' + formatarData(termino, true) + '.';
    var link = card.querySelector('a');
    if (!link) {
      link = document.createElement('a');
      link.setAttribute('data-arcane-mini-evento-link', '1');
      card.appendChild(link);
    }
    link.setAttribute('href', ativo.url);
    link.textContent = 'Ler evento';
    card.setAttribute('data-mini-evento-ativo', ativo.evento.id);
    card.style.setProperty('--arcane-mini-cor', ativo.evento.cor);
    card.style.setProperty('--arcane-mini-rgb', ativo.evento.rgb);
  }

  function instalarEstilo() {
    if (document.getElementById('arcane-mural-mini-eventos-css')) return;
    var estilo = document.createElement('style');
    estilo.id = 'arcane-mural-mini-eventos-css';
    estilo.textContent =
      '#arcane-card-mini-evento[data-mini-evento-ativo]{position:relative!important;z-index:2!important;border-color:rgba(var(--arcane-mini-rgb),.38)!important;background-image:radial-gradient(circle at 82% 16%,rgba(var(--arcane-mini-rgb),.10),transparent 58%)!important;box-shadow:inset 0 0 24px rgba(var(--arcane-mini-rgb),.045),0 0 12px rgba(var(--arcane-mini-rgb),.08)!important;animation:arcane-mini-card-brilho 4.8s ease-in-out infinite!important}' +
      '#arcane-card-mini-evento[data-mini-evento-ativo]>strong{color:var(--arcane-mini-cor)!important;text-shadow:0 0 9px rgba(var(--arcane-mini-rgb),.18)!important}' +
      '#arcane-card-mini-evento[data-mini-evento-ativo]>a[data-arcane-mini-evento-link]{position:relative!important;z-index:3!important;display:inline-block!important;align-self:flex-start!important;width:auto!important;margin:8px 0 0!important;padding:4px 6px!important;border:1px solid rgba(var(--arcane-mini-rgb),.25)!important;background:rgba(0,0,0,.44)!important;color:var(--arcane-mini-cor)!important;font:400 10px/19.5px Poppins,sans-serif!important;letter-spacing:.8px!important;text-transform:uppercase!important;text-decoration:none!important;cursor:pointer!important}' +
      '#arcane-card-mini-evento[data-mini-evento-ativo]>a[data-arcane-mini-evento-link]:hover{border-color:rgba(var(--arcane-mini-rgb),.55)!important;background:rgba(var(--arcane-mini-rgb),.10)!important;box-shadow:0 0 10px rgba(var(--arcane-mini-rgb),.14)!important}' +
      '@keyframes arcane-mini-card-brilho{0%,100%{box-shadow:inset 0 0 24px rgba(var(--arcane-mini-rgb),.04),0 0 10px rgba(var(--arcane-mini-rgb),.06)}50%{box-shadow:inset 0 0 30px rgba(var(--arcane-mini-rgb),.075),0 0 17px rgba(var(--arcane-mini-rgb),.14)}}' +
      '@media(prefers-reduced-motion:reduce){#arcane-card-mini-evento[data-mini-evento-ativo]{animation:none!important}}';
    document.head.appendChild(estilo);
  }

  function obterDocumento(url) {
    return window.fetch(url, { credentials: 'same-origin', cache: 'no-store' })
      .then(function (resposta) {
        if (!resposta.ok) throw new Error('Falha ao consultar ' + url + '.');
        return resposta.text();
      })
      .then(function (html) {
        return new DOMParser().parseFromString(html, 'text/html');
      });
  }

  function listarCandidatos(documento) {
    var candidatos = [];
    /* Somente títulos realmente presentes na listagem do fórum.
       Links de "última postagem" podem continuar apontando para um tópico
       depois que ele foi movido e não devem contar como evento ativo. */
    Array.prototype.forEach.call(documento.querySelectorAll('a.topictitle[href^="/t"]'), function (link) {
      var evento = EVENTOS.filter(function (item) {
        return link.textContent.trim() === item.titulo;
      })[0];
      var id = (link.getAttribute('href') || '').match(/^\/t(\d+)(?:-|$)/i);
      if (!evento || !id) return;
      if (candidatos.some(function (item) { return item.topico === id[1]; })) return;
      candidatos.push({ evento: evento, topico: id[1], url: link.getAttribute('href') });
    });
    return candidatos.sort(function (a, b) { return Number(b.topico) - Number(a.topico); });
  }

  function verificarCandidato(candidato) {
    return obterDocumento(candidato.url).then(function (documento) {
      var marcador = documento.querySelector('.arcane-mini-evento-estado[data-evento-id="' + candidato.evento.id + '"]');
      if (!marcador) return null;
      var fimEm = marcador.getAttribute('data-evento-fim');
      var inicioEm = marcador.getAttribute('data-evento-inicio');
      if (!fimEm || !inicioEm || !Number.isFinite(Date.parse(fimEm))) return null;
      if (Date.now() >= Date.parse(fimEm)) return null;
      return {
        evento: candidato.evento,
        topico: candidato.topico,
        url: candidato.url,
        inicioEm: inicioEm,
        fimEm: fimEm
      };
    }).catch(function () { return null; });
  }

  function sincronizar() {
    if (sincronizando || !encontrarCard()) return;
    guardarOriginal();
    sincronizando = true;
    var versaoAtual = ++versaoSincronizacao;
    obterDocumento('/f' + FORUM_ATIVO + '-')
      .then(listarCandidatos)
      .then(function (candidatos) {
        return Promise.all(candidatos.slice(0, EVENTOS.length * 2).map(verificarCandidato));
      })
      .then(function (resultados) {
        if (versaoAtual !== versaoSincronizacao) return;
        var ativos = resultados.filter(Boolean).sort(function (a, b) {
          return Date.parse(b.inicioEm) - Date.parse(a.inicioEm);
        });
        if (ativos[0]) aplicarEvento(ativos[0]);
        else restaurarCard();
        salvarCache(ativos[0] || null);
        liberarPrimeiraPintura();
      })
      .catch(function () {
        if (versaoAtual !== versaoSincronizacao) return;
        // Em falhas temporárias, mantém o último estado conhecido para evitar piscar o card.
        liberarPrimeiraPintura();
      })
      .then(function () {
        if (versaoAtual === versaoSincronizacao) sincronizando = false;
      });
  }

  function receberSincronizacao(evento) {
    var detalhe = evento && evento.detail;
    if (detalhe && detalhe.ativo === null) {
      versaoSincronizacao++;
      sincronizando = false;
      restaurarCard();
      salvarCache(null);
      liberarPrimeiraPintura();
    } else if (detalhe && detalhe.ativo) {
      document.documentElement.classList.remove(CLASSE_PRONTO);
    }
    sincronizar();
  }

  function iniciar() {
    if (!document.getElementById('rmural') || !encontrarCard()) {
      if (tentativasInicio++ < 40) window.setTimeout(iniciar, 250);
      return;
    }
    guardarOriginal();
    instalarEstilo();
    aplicarCacheInativo();
    sincronizar();
    window.addEventListener('arcane:minieventos:sincronizar', receberSincronizacao);
    window.setInterval(sincronizar, INTERVALO);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();


})(window);
