/* ARCANE · MINI-EVENTOS · REGISTRO DE TEMAS · V1
   Espelho da configuração funcional do Motor V68. Na compatibilidade V1 o
   motor ainda usa sua cópia interna; este registro será a fonte única na V2. */
(function (window) {
  'use strict';
  window.ArcaneMiniEventosTemas = {
    versao: '0.1.26',
    eventos: {
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
      nome: 'Baile de Máscaras',
      classe: 'baile',
      topico: '66',
      cor: '#c9c3b5', cor2: '#eee9df', cor3: '#8f897d',
      fundo: '#080908', corpo: '#101110', linha: '#5e5a52', texto: '#dedbd3',
      cores: ['#777269', '#c9c3b5', '#eee9df', '#8f897d', '#dedbd3'],
      etiqueta: 'Os sinos ainda não tocaram',
      padraoTitulo: 'A ÚLTIMA DANÇA',
      padraoSubtitulo: 'Toda máscara guarda uma verdade.',
      atualizacao: {
        etiqueta: 'Atualização da narração',
        imagem: 'https://i.pinimg.com/1200x/aa/f1/77/aaf177566f87a33c76660484844f707c.jpg',
        posicao: 'center 48%'
      },
      visuais: [
        { valor: 'header', nome: 'Visual · Header' },
        { valor: 'lateral', nome: 'Visual · Lateral' }
      ],
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
      atualizacao: { etiqueta: 'Atualização da narração', imagem: 'https://cdn.jsdelivr.net/gh/carolssuism/arcane-mini-eventos@v0.1.23/falha-alucinogena-header.png', posicao: 'center 50%' },
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
  },
    decoracoesPagina: {
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
  }
  };
})(window);
