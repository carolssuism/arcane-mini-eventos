# Publicação v0.1.33 — ciclos completos

Suba o conteúdo desta pasta na raiz de carolssuism/arcane-mini-eventos e crie a tag v0.1.33 no commit enviado. A tag deve incluir este pacote atualizado. Se v0.1.33 já foi publicada anteriormente, não reutilize a tag com arquivos diferentes: o CDN pode conservar a versão anterior.

Integração:
- Baile e Falha Coletiva participam do sorteio, respeitando evento ativo, descanso e exclusão do último tema.
- Falha usa uma abertura gerada pelo motor; dispensa copiar um post-modelo. A criação registra início e término, como nos outros eventos.
- Baile conserva o post-modelo 338 para sua abertura.
- Mural reconhece Falha Coletiva na Magia com ciano/verde (#58f5f0), Baile prateado (#c9c3b5) e fase rubra (#e22a2a), com resumo próprio.
- A fase rubra é detectada pelo marcador publicado pelo ADM, inclusive nas páginas seguintes do tópico. A consulta ignora links para outros tópicos e outras origens.
- Encerramento usa o fluxo comum de mover para Arquivos, bloquear e verificar antes de limpar o estado; depois o mural restaura seu conteúdo normal.
- Tópicos criados manualmente sem registro de início/término não viram eventos ativos automaticamente.
- Capitular da abertura e todas as correções visuais anteriores preservadas.

O loader corrigido aceita a nova versão. O loader.js deste pacote tem v0.1.33 como piso, caso o ponteiro do CDN ainda retorne uma versão anterior.

Validação: sete cenários locais passaram no arquivo ../test-ciclos-v033.cjs; sintaxe de sistema.js, temas.js e loader.js conferida. Os testes simulam dados e documentos, sem publicar ou encerrar eventos reais. Confirmar o fluxo no fórum após a publicação.
