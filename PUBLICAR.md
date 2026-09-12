# Publicação v0.1.29

IMPORTANTE: nesta versão substitua também o loader no painel do Forumeiros pelo loader.js incluído. A nova ordem aguarda temas.css antes de inicializar os scripts. Só atualizar o GitHub não altera o loader que já está no painel.

Mudanças v0.1.29: créditos ADM fora da moldura; borboletas inferiores maiores e rodapé de 62px; largura ampla restaurada, com trio superior sobre a imagem; posicionamento dos adornos após estilos finais, aguardando fontes/imagens por até 4s e acompanhando mudanças de tamanho. As animações intencionais dos eventos foram mantidas. O comportamento visual em carregamento frio no fórum ainda precisa de verificação após publicar.

Suba o conteúdo desta pasta na raiz de carolssuism/arcane-mini-eventos, preservando a pasta assets. Não suba a pasta release-v0.1.27 como uma subpasta do repositório.

Crie a tag/release v0.1.29 no commit enviado. O loader consulta versao.json em main e carrega os arquivos dessa tag; sem ela, a nova versão não carrega.

Correções desta versão: remoção do gradiente da narração lateral e reserva de espaço para as borboletas dentro da largura total do modelo header largo. A caixa desse modelo fica um pouco mais estreita para acomodar o adorno sem cortes. Se o CDN continuar indicando uma versão antiga, o loader.js incluído usa v0.1.28 como piso.

O loader V2 já instalado consulta esse ponteiro automaticamente. Se estiver usando um loader antigo fixo, substitua-o pelo loader.js deste pacote.

Mudanças: três modelos secundários de Falha Coletiva, subtítulo ADM de 12px, trio de borboletas no horizontal e lateral com narração rolável de até 450px no conjunto, barra de 4px sem arredondamento ou setas no Chrome/Edge. Em navegadores sem suporte aos pseudo-elementos WebKit, aplica-se scrollbar-width:thin.

As tags, os textos das postagens, os créditos, a abertura e os outros eventos foram preservados. O CSS dos novos modelos fica em temas.css, carregado pelo loader. Não substitui textos por conteúdo de demonstração.

Validação local: sintaxe JavaScript e JSON. A renderização integrada ao fórum ainda precisa ser conferida após a publicação.
