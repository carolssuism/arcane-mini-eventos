# Publicação v0.1.27

Suba o conteúdo desta pasta na raiz de carolssuism/arcane-mini-eventos, preservando a pasta assets. Não suba a pasta release-v0.1.27 como uma subpasta do repositório.

Crie a tag/release v0.1.27 no commit enviado. O loader consulta versao.json em main e carrega os arquivos dessa tag; sem ela, a nova versão não carrega.

O loader V2 já instalado consulta esse ponteiro automaticamente. Se estiver usando um loader antigo fixo, substitua-o pelo loader.js deste pacote.

Mudanças: três modelos secundários de Falha Coletiva, subtítulo ADM de 12px, trio de borboletas no horizontal e lateral com narração rolável de até 450px no conjunto, barra de 4px sem arredondamento ou setas no Chrome/Edge. Em navegadores sem suporte aos pseudo-elementos WebKit, aplica-se scrollbar-width:thin.

As tags, os textos das postagens, os créditos, a abertura e os outros eventos foram preservados. O CSS dos novos modelos fica em temas.css, carregado pelo loader. Não substitui textos por conteúdo de demonstração.

Validação local: sintaxe JavaScript e JSON. A renderização integrada ao fórum ainda precisa ser conferida após a publicação.
