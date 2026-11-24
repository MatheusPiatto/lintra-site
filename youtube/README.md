# Canal no YouTube · operação semanal

Pasta de trabalho do canal. O site não usa nada daqui (fica fora da branch `main`).

## Como funciona
1. **Todo domingo de manhã** uma sessão automática do Claude:
   - pesquisa o que está em alta no nicho (Google Trends, YouTube, notícias de pequenos negócios);
   - lê `estrategia.md`, `pautas.md` e os resultados da semana anterior em `semanas/`;
   - escreve roteiros, gera narração, monta os vídeos animados e as capas;
   - entrega o pacote da semana em `semanas/AAAA-MM-DD/` (vídeos, capas, títulos, descrições, tags e grade de horários) e avisa o Matheus.
2. **Matheus aprova** (ou pede ajustes) respondendo na própria sessão.
3. Com a aprovação, Matheus agenda os vídeos no YouTube Studio com os horários da grade (uns 5 minutos).
4. Na semana seguinte, Matheus cola os números do YouTube Studio (ou um print) e o Claude ajusta a estratégia.

## Arquivos
- `estrategia.md`: nicho, formatos, frequência, horários, caminho até a monetização, regras do YouTube.
- `canal.md`: kit de criação do canal (nome, @, descrição, palavras-chave, banner).
- `pautas.md`: banco de ideias priorizado.
- `semanas/`: um pacote por semana, com o que foi aprovado e o resultado.
