# Gabarito do Trabalho: Gerenciamento de Memória em Sistemas Operacionais

**Professor:** José Carlos Flores  
**Disciplina:** Sistemas Operacionais

---

## Questão 1: Alocação Estática vs. Dinâmica

### Parte A - Resposta Teórica

**Diferença entre Alocação Estática e Dinâmica:**

A alocação estática ocorre em tempo de compilação, onde o tamanho e a localização da memória são determinados antes da execução do programa. As variáveis alocadas estaticamente geralmente residem na seção de dados ou na pilha (para variáveis locais) e têm tempo de vida bem definido.

A alocação dinâmica, por outro lado, ocorre em tempo de execução, permitindo que o programa solicite memória conforme necessário. A memória é alocada no heap e o programador (ou o coletor de lixo) é responsável por gerenciar seu ciclo de vida.

**Vantagens da Alocação Estática:**

1. **Velocidade**: Mais rápida, pois não há overhead de chamadas de sistema para alocar memória
2. **Simplicidade**: Não requer gerenciamento manual de memória, reduzindo erros como vazamentos
3. **Previsibilidade**: O uso de memória é conhecido em tempo de compilação

**Desvantagens da Alocação Estática:**

1. **Inflexibilidade**: O tamanho deve ser conhecido em tempo de compilação e não pode ser alterado
2. **Desperdício de memória**: Pode alocar mais memória do que o necessário para cobrir o pior caso

**Vantagens da Alocação Dinâmica:**

1. **Flexibilidade**: Permite alocar exatamente a quantidade de memória necessária em tempo de execução
2. **Eficiência**: Memória pode ser alocada e liberada conforme necessário, otimizando o uso

**Desvantagens da Alocação Dinâmica:**

1. **Complexidade**: Requer gerenciamento cuidadoso para evitar vazamentos de memória e ponteiros pendentes
2. **Overhead**: Chamadas de alocação/desalocação têm custo computacional
3. **Fragmentação**: Pode levar à fragmentação do heap ao longo do tempo

### Parte B - Código em C

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("=== Demonstração: Alocação Estática vs. Dinâmica ===\n\n");

    // 1. Declarar e preencher array estático
    int array_estatico[5];
    printf("1. Array Estático (na pilha ou seção de dados):\n");
    for (int i = 0; i < 5; i++) {
        array_estatico[i] = i + 1;
        printf("   array_estatico[%d] = %d (Endereço: %p)\n", 
               i, array_estatico[i], (void*)&array_estatico[i]);
    }

    // 2. Alocar dinamicamente array de 10 inteiros
    printf("\n2. Array Dinâmico (no heap):\n");
    int *array_dinamico = (int *) malloc(10 * sizeof(int));

    // 3. Verificar se a alocação foi bem-sucedida
    if (array_dinamico == NULL) {
        printf("   ERRO: Falha na alocação de memória!\n");
        return 1;
    }
    printf("   Alocação dinâmica bem-sucedida!\n");

    // 4. Preencher o array dinâmico
    for (int i = 0; i < 10; i++) {
        array_dinamico[i] = i + 10;
        printf("   array_dinamico[%d] = %d (Endereço: %p)\n", 
               i, array_dinamico[i], (void*)&array_dinamico[i]);
    }

    // 5. Calcular e exibir a diferença entre os endereços
    printf("\n3. Análise de Endereços:\n");
    printf("   Endereço do array estático:  %p\n", (void*)array_estatico);
    printf("   Endereço do array dinâmico:  %p\n", (void*)array_dinamico);

    // Calcular a diferença (em bytes)
    long diferenca = labs((long)array_dinamico - (long)array_estatico);
    printf("   Diferença entre endereços:   %ld bytes\n", diferenca);
    printf("   Diferença entre endereços:   %ld KB\n", diferenca / 1024);

    printf("\n4. Interpretação:\n");
    printf("   Os arrays estão em áreas diferentes da memória:\n");
    printf("   - Array estático: pilha (stack) ou seção de dados\n");
    printf("   - Array dinâmico: heap\n");
    printf("   A grande diferença nos endereços confirma isso.\n");

    // 6. Liberar a memória alocada dinamicamente
    free(array_dinamico);
    printf("\n5. Memória dinâmica liberada com sucesso!\n");

    return 0;
}
```

**Instruções de compilação e execução:**

```bash
gcc questao1.c -o questao1
./questao1
```

---

## Questão 2: Simulação de Fragmentação de Memória

### Parte A - Resposta Teórica

**Fragmentação Externa:**

A fragmentação externa ocorre quando há espaço livre total suficiente na memória para atender uma solicitação, mas esse espaço está dividido em blocos não contíguos pequenos demais para serem utilizados. Isso acontece principalmente em sistemas de partições dinâmicas.

**Exemplo prático:** Imagine uma memória de 1000 MB com três processos: P1 (200 MB), P2 (300 MB) e P3 (200 MB), ocupando posições contíguas. Se P2 for removido, haverá um buraco de 300 MB no meio. Se um novo processo P4 precisar de 500 MB contíguos, não poderá ser alocado, mesmo que haja 600 MB livres no total (300 MB do buraco + 300 MB no final).

**Fragmentação Interna:**

A fragmentação interna ocorre quando um processo recebe um bloco de memória maior do que o necessário, e o espaço não utilizado dentro desse bloco é desperdiçado. Isso é comum em sistemas de partições fixas ou paginação.

**Exemplo prático:** Em um sistema com partições fixas de 100 MB, se um processo precisa de apenas 70 MB, ele ainda receberá uma partição inteira de 100 MB, desperdiçando 30 MB (fragmentação interna).

### Parte B - Código em Python

```python
class GerenciadorMemoria:
    def __init__(self):
        # Criar 5 partições fixas com os tamanhos especificados
        self.particoes = [
            {'tamanho': 100, 'processo': None, 'fragmentacao_interna': 0},
            {'tamanho': 150, 'processo': None, 'fragmentacao_interna': 0},
            {'tamanho': 200, 'processo': None, 'fragmentacao_interna': 0},
            {'tamanho': 250, 'processo': None, 'fragmentacao_interna': 0},
            {'tamanho': 300, 'processo': None, 'fragmentacao_interna': 0}
        ]
        self.tamanho_total = sum(p['tamanho'] for p in self.particoes)
        print(f"Gerenciador de Memória Inicializado")
        print(f"Tamanho total da memória: {self.tamanho_total} unidades")
        print(f"Partições: {[p['tamanho'] for p in self.particoes]}\n")

    def alocar_processo(self, nome, tamanho):
        """
        Aloca um processo usando o algoritmo First-Fit
        """
        print(f"Tentando alocar processo '{nome}' com {tamanho} unidades...")

        # Procurar a primeira partição livre que caiba o processo
        for i, particao in enumerate(self.particoes):
            if particao['processo'] is None and particao['tamanho'] >= tamanho:
                # Alocar o processo
                particao['processo'] = nome
                particao['fragmentacao_interna'] = particao['tamanho'] - tamanho

                print(f"  ✓ Processo '{nome}' alocado na Partição {i+1} ({particao['tamanho']} unidades)")
                print(f"  Fragmentação interna: {particao['fragmentacao_interna']} unidades")
                return True

        # Não encontrou partição disponível
        print(f"  ✗ FALHA: Não há partição disponível para o processo '{nome}'")
        return False

    def liberar_processo(self, nome):
        """
        Libera a partição ocupada por um processo
        """
        print(f"Liberando processo '{nome}'...")

        for i, particao in enumerate(self.particoes):
            if particao['processo'] == nome:
                particao['processo'] = None
                particao['fragmentacao_interna'] = 0
                print(f"  ✓ Processo '{nome}' liberado da Partição {i+1}")
                return True

        print(f"  ✗ Processo '{nome}' não encontrado")
        return False

    def exibir_memoria(self):
        """
        Exibe o estado atual da memória
        """
        print("\n" + "="*70)
        print("ESTADO ATUAL DA MEMÓRIA")
        print("="*70)
        print(f"{'Partição':<12} {'Tamanho':<10} {'Processo':<15} {'Frag. Interna':<15}")
        print("-"*70)

        for i, particao in enumerate(self.particoes):
            processo = particao['processo'] if particao['processo'] else "LIVRE"
            frag = particao['fragmentacao_interna'] if particao['processo'] else "-"
            print(f"Partição {i+1:<3} {particao['tamanho']:<10} {processo:<15} {frag:<15}")

        # Calcular estatísticas
        particoes_ocupadas = sum(1 for p in self.particoes if p['processo'] is not None)
        particoes_livres = len(self.particoes) - particoes_ocupadas
        fragmentacao_total = sum(p['fragmentacao_interna'] for p in self.particoes)
        memoria_usada = sum(p['tamanho'] - p['fragmentacao_interna'] 
                           for p in self.particoes if p['processo'] is not None)

        print("-"*70)
        print(f"Partições ocupadas: {particoes_ocupadas} | Partições livres: {particoes_livres}")
        print(f"Memória efetivamente usada: {memoria_usada} unidades")
        print(f"Fragmentação interna total: {fragmentacao_total} unidades")
        print("="*70 + "\n")


# Programa principal - Teste conforme especificado
if __name__ == "__main__":
    # Criar o gerenciador de memória
    gm = GerenciadorMemoria()

    # Sequência de testes
    print("INICIANDO TESTES\n")

    # 1. Alocar processo P1 com 90 unidades
    gm.alocar_processo("P1", 90)
    print()

    # 2. Alocar processo P2 com 140 unidades
    gm.alocar_processo("P2", 140)
    print()

    # 3. Alocar processo P3 com 180 unidades
    gm.alocar_processo("P3", 180)
    print()

    # Exibir estado da memória
    gm.exibir_memoria()

    # 4. Liberar processo P2
    gm.liberar_processo("P2")
    print()

    # 5. Alocar processo P4 com 100 unidades
    gm.alocar_processo("P4", 100)
    print()

    # 6. Tentar alocar processo P5 com 350 unidades (deve falhar)
    gm.alocar_processo("P5", 350)
    print()

    # Exibir estado final da memória
    gm.exibir_memoria()

    # Análise final
    print("ANÁLISE FINAL:")
    print("- A fragmentação interna ocorre porque os processos não ocupam")
    print("  exatamente o tamanho das partições.")
    print("- O processo P5 não pode ser alocado porque nenhuma partição")
    print("  individual tem 350 unidades, mesmo havendo espaço total suficiente.")
    print("- Este é um exemplo de como partições fixas podem ser ineficientes.\n")
```

**Instruções de execução:**

```bash
python questao2.py
```

---

## Questão 3: Algoritmo de Substituição de Página - FIFO

### Parte A - Resposta Teórica

**Funcionamento do Algoritmo FIFO:**

O algoritmo FIFO (First-In, First-Out) é um dos algoritmos mais simples de substituição de página. Ele mantém uma fila das páginas na memória na ordem em que foram carregadas. Quando ocorre uma falta de página e todos os frames estão ocupados, a página que está há mais tempo na memória (a primeira da fila) é removida para dar lugar à nova página.

**Vantagens:**

1. **Simplicidade**: Muito fácil de implementar e entender
2. **Baixo overhead**: Requer apenas uma estrutura de fila simples
3. **Previsibilidade**: O comportamento é determinístico e fácil de analisar

**Desvantagens:**

1. **Desempenho subótimo**: Pode remover páginas frequentemente usadas apenas porque são antigas
2. **Anomalia de Belady**: Em alguns casos, aumentar o número de frames pode paradoxalmente aumentar o número de faltas de página
3. **Não considera padrão de uso**: Ignora completamente a frequência ou recência de uso das páginas

### Parte B - Código em Java

```java
import java.util.*;

public class FIFOPageReplacement {

    private int numFrames;           // Número de frames disponíveis
    private Queue<Integer> fifoQueue; // Fila FIFO para controlar a ordem das páginas
    private Set<Integer> frameSet;    // Conjunto para verificação rápida de presença
    private List<Integer> framesList; // Lista para exibição ordenada
    private int pageFaults;           // Contador de faltas de página
    private int pageHits;             // Contador de acertos

    public FIFOPageReplacement(int numFrames) {
        this.numFrames = numFrames;
        this.fifoQueue = new LinkedList<>();
        this.frameSet = new HashSet<>();
        this.framesList = new ArrayList<>();
        this.pageFaults = 0;
        this.pageHits = 0;
    }

    /**
     * Processa uma referência a uma página
     */
    public void referenciarPagina(int pagina) {
        System.out.print("Referência: " + pagina + " | ");

        // Verificar se a página já está na memória (Page Hit)
        if (frameSet.contains(pagina)) {
            pageHits++;
            System.out.print("Frames: " + framesList + " | ");
            System.out.println("Page Hit | Total Faults: " + pageFaults);
            return;
        }

        // Page Fault - a página não está na memória
        pageFaults++;

        // Se ainda há espaço nos frames
        if (fifoQueue.size() < numFrames) {
            fifoQueue.add(pagina);
            frameSet.add(pagina);
            framesList.add(pagina);

            System.out.print("Frames: " + framesList + " | ");
            System.out.println("Page Fault | Total Faults: " + pageFaults);
        } else {
            // Frames cheios - substituir a página mais antiga (FIFO)
            int paginaRemovida = fifoQueue.poll(); // Remove da fila
            frameSet.remove(paginaRemovida);       // Remove do conjunto
            framesList.remove(Integer.valueOf(paginaRemovida)); // Remove da lista

            // Adicionar a nova página
            fifoQueue.add(pagina);
            frameSet.add(pagina);
            framesList.add(pagina);

            System.out.print("Frames: " + framesList + " | ");
            System.out.println("Page Fault (substituiu " + paginaRemovida + ") | Total Faults: " + pageFaults);
        }
    }

    /**
     * Exibe estatísticas finais
     */
    public void exibirEstatisticas(int totalReferencias) {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("ESTATÍSTICAS FINAIS");
        System.out.println("=".repeat(70));
        System.out.println("Total de referências:      " + totalReferencias);
        System.out.println("Número de frames:          " + numFrames);
        System.out.println("Page Faults:               " + pageFaults);
        System.out.println("Page Hits:                 " + pageHits);

        double taxaFaltas = (double) pageFaults / totalReferencias * 100;
        double taxaAcertos = (double) pageHits / totalReferencias * 100;

        System.out.printf("Taxa de Faltas:            %.2f%%\n", taxaFaltas);
        System.out.printf("Taxa de Acertos:           %.2f%%\n", taxaAcertos);
        System.out.println("=".repeat(70));
    }

    /**
     * Método principal para teste
     */
    public static void main(String[] args) {
        System.out.println("=== Simulação do Algoritmo FIFO de Substituição de Página ===\n");

        // Configuração do teste
        int numFrames = 3;
        int[] sequenciaReferencias = {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2};

        System.out.println("Número de frames: " + numFrames);
        System.out.println("Sequência de referências: " + Arrays.toString(sequenciaReferencias));
        System.out.println("\n" + "-".repeat(70) + "\n");

        // Criar o simulador FIFO
        FIFOPageReplacement fifo = new FIFOPageReplacement(numFrames);

        // Processar cada referência
        for (int pagina : sequenciaReferencias) {
            fifo.referenciarPagina(pagina);
        }

        // Exibir estatísticas
        fifo.exibirEstatisticas(sequenciaReferencias.length);

        // Análise adicional
        System.out.println("\nANÁLISE:");
        System.out.println("- O algoritmo FIFO substitui sempre a página mais antiga");
        System.out.println("- Não considera se a página é frequentemente usada");
        System.out.println("- Simples de implementar mas pode ter desempenho subótimo");
    }
}
```

**Instruções de compilação e execução:**

```bash
javac FIFOPageReplacement.java
java FIFOPageReplacement
```

---

## Questão 4: Garbage Collection em Python

### Parte A - Resposta Teórica

**Mecanismo de Coleta de Lixo em Python:**

Python utiliza dois mecanismos complementares para gerenciar a memória automaticamente:

**1. Contagem de Referências:**

- Cada objeto em Python mantém um contador de quantas referências apontam para ele
- Quando uma nova referência é criada, o contador é incrementado
- Quando uma referência é removida (ex: variável sai de escopo, `del` é usado), o contador é decrementado
- Quando o contador chega a zero, o objeto é imediatamente destruído e sua memória é liberada
- É um mecanismo determinístico e de baixa latência

**2. Coletor de Lixo Geracional:**

- Complementa a contagem de referências para lidar com **referências circulares**
- Referências circulares ocorrem quando objetos referenciam uns aos outros em ciclo (ex: A → B → A)
- Nesses casos, a contagem de referências nunca chega a zero, mesmo que não haja referências externas
- O coletor geracional divide os objetos em três gerações (0, 1, 2):
  - **Geração 0**: Objetos recém-criados
  - **Geração 1**: Objetos que sobreviveram a uma coleta da geração 0
  - **Geração 2**: Objetos que sobreviveram a múltiplas coletas
- Objetos mais antigos são coletados com menos frequência (assumindo que objetos de longa vida tendem a permanecer vivos)
- O coletor usa o algoritmo de "marcação e varredura" para detectar ciclos

### Parte B - Código em Python

```python
import sys
import gc
import time

class Objeto:
    """
    Classe para demonstrar o funcionamento do Garbage Collector
    """
    contador_objetos = 0  # Contador de objetos criados

    def __init__(self, nome, tamanho_mb=1):
        """
        Inicializa o objeto com um nome e aloca memória
        """
        self.nome = nome
        # Alocar um array de bytes para simular uso de memória
        self.dados = bytearray(tamanho_mb * 1024 * 1024)
        self.id = id(self)
        Objeto.contador_objetos += 1
        print(f"  ✓ Objeto '{self.nome}' criado (ID: {self.id}, Tamanho: {tamanho_mb} MB)")

    def __del__(self):
        """
        Destrutor - chamado quando o objeto é coletado pelo GC
        """
        print(f"  ✗ Objeto '{self.nome}' destruído (ID: {self.id})")
        Objeto.contador_objetos -= 1


def cenario1_destruicao_automatica():
    """
    Cenário 1: Destruição automática quando a referência é removida
    """
    print("\n" + "="*70)
    print("CENÁRIO 1: Destruição Automática por Contagem de Referências")
    print("="*70)

    print("\n1. Criando objeto 'A':")
    obj_a = Objeto("A", 2)

    print(f"\n2. Contagem de referências para 'A': {sys.getrefcount(obj_a) - 1}")
    print("   (subtraímos 1 porque getrefcount() cria uma referência temporária)")

    print("\n3. Criando uma segunda referência para o mesmo objeto:")
    obj_a_ref = obj_a
    print(f"   Contagem de referências para 'A': {sys.getrefcount(obj_a) - 1}")

    print("\n4. Removendo a primeira referência:")
    del obj_a
    print(f"   Contagem de referências: {sys.getrefcount(obj_a_ref) - 1}")
    print("   O objeto NÃO foi destruído porque ainda há uma referência")

    print("\n5. Removendo a última referência:")
    del obj_a_ref
    print("   O objeto foi destruído imediatamente (contagem chegou a zero)")


def cenario2_referencias_circulares():
    """
    Cenário 2: Referências circulares e o coletor geracional
    """
    print("\n" + "="*70)
    print("CENÁRIO 2: Referências Circulares")
    print("="*70)

    print("\n1. Criando dois objetos que referenciam um ao outro:")
    obj_x = Objeto("X", 1)
    obj_y = Objeto("Y", 1)

    print("\n2. Criando referências circulares:")
    obj_x.referencia = obj_y  # X aponta para Y
    obj_y.referencia = obj_x  # Y aponta para X
    print("   obj_x.referencia = obj_y")
    print("   obj_y.referencia = obj_x")

    print(f"\n3. Contagem de referências:")
    print(f"   obj_x: {sys.getrefcount(obj_x) - 1}")
    print(f"   obj_y: {sys.getrefcount(obj_y) - 1}")

    print("\n4. Removendo as referências externas:")
    del obj_x
    del obj_y
    print("   As referências externas foram removidas, mas os objetos")
    print("   ainda referenciam um ao outro (ciclo).")
    print("   A contagem de referências não chegará a zero!")

    print("\n5. Forçando a coleta de lixo geracional:")
    coletados = gc.collect()
    print(f"   Objetos coletados: {coletados}")
    print("   O coletor geracional detectou e coletou o ciclo")


def cenario3_analise_gc():
    """
    Cenário 3: Análise detalhada do Garbage Collector
    """
    print("\n" + "="*70)
    print("CENÁRIO 3: Análise Detalhada do Garbage Collector")
    print("="*70)

    # Desabilitar coleta automática para controle manual
    print("\n1. Desabilitando coleta automática:")
    gc.disable()
    print("   gc.disable() - Coleta automática desabilitada")

    print("\n2. Criando múltiplos objetos:")
    objetos = []
    for i in range(5):
        objetos.append(Objeto(f"Obj{i}", 1))

    print(f"\n3. Estatísticas do GC antes da coleta:")
    print(f"   Objetos rastreados pelo GC: {len(gc.get_objects())}")
    print(f"   Contadores de geração: {gc.get_count()}")
    print("   (Formato: (geração 0, geração 1, geração 2))")

    print("\n4. Removendo referências:")
    objetos.clear()
    print("   Lista de objetos limpa")

    print("\n5. Objetos ainda não foram coletados (GC desabilitado):")
    print(f"   Objetos ativos: {Objeto.contador_objetos}")

    print("\n6. Forçando coleta manual:")
    coletados = gc.collect()
    print(f"   Objetos coletados: {coletados}")
    print(f"   Objetos ativos: {Objeto.contador_objetos}")

    print("\n7. Estatísticas do GC após a coleta:")
    print(f"   Contadores de geração: {gc.get_count()}")

    # Reabilitar coleta automática
    print("\n8. Reabilitando coleta automática:")
    gc.enable()
    print("   gc.enable() - Coleta automática reabilitada")

    # Exibir estatísticas detalhadas
    print("\n9. Estatísticas detalhadas do GC:")
    stats = gc.get_stats()
    for i, stat in enumerate(stats):
        print(f"   Geração {i}: {stat}")


def demonstracao_completa():
    """
    Executa todos os cenários de demonstração
    """
    print("\n" + "#"*70)
    print("# DEMONSTRAÇÃO DO GARBAGE COLLECTOR EM PYTHON")
    print("#"*70)

    # Executar os três cenários
    cenario1_destruicao_automatica()
    time.sleep(1)  # Pausa para melhor visualização

    cenario2_referencias_circulares()
    time.sleep(1)

    cenario3_analise_gc()

    # Resumo final
    print("\n" + "="*70)
    print("RESUMO")
    print("="*70)
    print("""
MECANISMOS DE COLETA DE LIXO EM PYTHON:

1. CONTAGEM DE REFERÊNCIAS:
   - Mecanismo principal e imediato
   - Cada objeto mantém um contador de referências
   - Quando o contador chega a zero, o objeto é destruído imediatamente
   - Eficiente e determinístico
   - NÃO detecta referências circulares

2. COLETOR GERACIONAL:
   - Mecanismo complementar para detectar ciclos
   - Divide objetos em 3 gerações (0, 1, 2)
   - Objetos novos são coletados com mais frequência
   - Usa algoritmo de marcação e varredura
   - Detecta e coleta referências circulares

3. VANTAGENS:
   - Gerenciamento automático de memória
   - Programador não precisa se preocupar com desalocação
   - Reduz vazamentos de memória

4. CONSIDERAÇÕES:
   - Pode haver latência durante a coleta (especialmente geracional)
   - Objetos com __del__() podem atrasar a coleta
   - Referências circulares são coletadas, mas não imediatamente
    """)
    print("="*70)


# Executar a demonstração completa
if __name__ == "__main__":
    demonstracao_completa()
```

**Instruções de execução:**

```bash
python questao4.py
```

---

## Questão 5: Comparação de Desempenho de Alocação

### Parte A - Resposta Teórica

**Por que a alocação na pilha é mais rápida:**

A alocação na pilha (stack) é geralmente mais rápida que a alocação no heap por várias razões estruturais:

**1. Simplicidade da Operação:**

- **Pilha**: Alocar memória na pilha é simplesmente mover o ponteiro da pilha (stack pointer) para cima ou para baixo. É uma operação de tempo constante O(1) que envolve apenas uma instrução de máquina.
- **Heap**: Alocar no heap requer buscar um bloco livre de tamanho adequado, possivelmente fragmentado, e gerenciar estruturas de dados complexas (listas livres, árvores, etc.).

**2. Localidade de Referência:**

- **Pilha**: Os dados são alocados sequencialmente e de forma contígua, resultando em excelente localidade de cache. Acessos subsequentes tendem a estar na cache do processador.
- **Heap**: Os dados podem estar espalhados pela memória, resultando em mais cache misses e acessos à memória principal.

**3. Gerenciamento Automático:**

- **Pilha**: A desalocação é automática e instantânea quando a função retorna. Não há overhead de gerenciamento.
- **Heap**: Requer chamadas explícitas de desalocação (free, delete) ou coleta de lixo, que têm custo computacional.

**4. Ausência de Fragmentação:**

- **Pilha**: Não sofre de fragmentação porque a alocação e desalocação seguem uma ordem LIFO estrita.
- **Heap**: Pode sofrer fragmentação ao longo do tempo, exigindo compactação ou algoritmos sofisticados de alocação.

**5. Sincronização:**

- **Pilha**: Cada thread tem sua própria pilha, não requerendo sincronização.
- **Heap**: É compartilhado entre threads, podendo requerer locks e sincronização em ambientes multi-threaded.

### Parte B - Código em Python

```python
import time
import sys

def teste_alocacao_pilha(num_iteracoes):
    """
    Testa a alocação de variáveis locais (pilha)
    Variáveis locais são alocadas na pilha e automaticamente desalocadas
    """
    def criar_variaveis_locais():
        # Variáveis locais são alocadas na pilha
        a = 10
        b = 20.5
        c = "string"
        d = [1, 2, 3]
        e = {'chave': 'valor'}
        # Quando a função retorna, todas são automaticamente desalocadas
        return a + b

    inicio = time.time()

    for _ in range(num_iteracoes):
        criar_variaveis_locais()

    fim = time.time()
    tempo_decorrido = fim - inicio

    return tempo_decorrido


def teste_alocacao_heap(num_iteracoes):
    """
    Testa a alocação dinâmica de objetos (heap)
    Objetos são alocados no heap e gerenciados pelo garbage collector
    """
    inicio = time.time()

    for _ in range(num_iteracoes):
        # Criar objetos no heap
        obj1 = [1, 2, 3, 4, 5]
        obj2 = {'a': 1, 'b': 2, 'c': 3}
        obj3 = "Esta é uma string alocada no heap"
        obj4 = bytearray(100)  # Array de bytes
        obj5 = set([1, 2, 3, 4, 5])
        # Objetos serão coletados pelo GC quando não houver mais referências

    fim = time.time()
    tempo_decorrido = fim - inicio

    return tempo_decorrido


def teste_alocacao_heap_grande(num_iteracoes):
    """
    Testa a alocação de objetos maiores no heap
    """
    inicio = time.time()

    for _ in range(num_iteracoes):
        # Criar objetos maiores no heap
        lista_grande = [i for i in range(1000)]
        dicionario_grande = {i: i*2 for i in range(100)}
        # Objetos maiores têm overhead maior de alocação

    fim = time.time()
    tempo_decorrido = fim - inicio

    return tempo_decorrido


def executar_testes_comparativos():
    """
    Executa os testes e compara os resultados
    """
    print("="*70)
    print("COMPARAÇÃO DE DESEMPENHO: ALOCAÇÃO NA PILHA vs. HEAP")
    print("="*70)

    # Configuração dos testes
    num_iteracoes = 1000000
    num_execucoes = 5  # Número de vezes para executar cada teste (para média)

    print(f"\nConfiguração:")
    print(f"  Número de iterações por teste: {num_iteracoes:,}")
    print(f"  Número de execuções para média: {num_execucoes}")
    print(f"  Versão do Python: {sys.version}")

    # Arrays para armazenar os tempos
    tempos_pilha = []
    tempos_heap = []
    tempos_heap_grande = []

    print("\nExecutando testes...")
    print("-"*70)

    # Executar múltiplas vezes para obter média
    for i in range(num_execucoes):
        print(f"\nExecução {i+1}/{num_execucoes}:")

        # Teste 1: Alocação na pilha
        tempo_pilha = teste_alocacao_pilha(num_iteracoes)
        tempos_pilha.append(tempo_pilha)
        print(f"  Pilha (variáveis locais):     {tempo_pilha:.4f} segundos")

        # Teste 2: Alocação no heap (objetos pequenos)
        tempo_heap = teste_alocacao_heap(num_iteracoes)
        tempos_heap.append(tempo_heap)
        print(f"  Heap (objetos pequenos):      {tempo_heap:.4f} segundos")

        # Teste 3: Alocação no heap (objetos grandes)
        tempo_heap_grande = teste_alocacao_heap_grande(num_iteracoes)
        tempos_heap_grande.append(tempo_heap_grande)
        print(f"  Heap (objetos grandes):       {tempo_heap_grande:.4f} segundos")

    # Calcular médias
    media_pilha = sum(tempos_pilha) / len(tempos_pilha)
    media_heap = sum(tempos_heap) / len(tempos_heap)
    media_heap_grande = sum(tempos_heap_grande) / len(tempos_heap_grande)

    # Exibir resultados
    print("\n" + "="*70)
    print("RESULTADOS MÉDIOS")
    print("="*70)
    print(f"Alocação na Pilha:              {media_pilha:.4f} segundos")
    print(f"Alocação no Heap (pequenos):    {media_heap:.4f} segundos")
    print(f"Alocação no Heap (grandes):     {media_heap_grande:.4f} segundos")

    # Calcular diferenças percentuais
    print("\n" + "="*70)
    print("ANÁLISE COMPARATIVA")
    print("="*70)

    if media_pilha > 0:
        diferenca_heap_pequeno = ((media_heap - media_pilha) / media_pilha) * 100
        diferenca_heap_grande = ((media_heap_grande - media_pilha) / media_pilha) * 100

        print(f"\nHeap (pequenos) vs. Pilha:")
        print(f"  Diferença: {diferenca_heap_pequeno:+.2f}%")
        if diferenca_heap_pequeno > 0:
            print(f"  O heap é {diferenca_heap_pequeno:.2f}% MAIS LENTO que a pilha")
        else:
            print(f"  O heap é {abs(diferenca_heap_pequeno):.2f}% MAIS RÁPIDO que a pilha")

        print(f"\nHeap (grandes) vs. Pilha:")
        print(f"  Diferença: {diferenca_heap_grande:+.2f}%")
        if diferenca_heap_grande > 0:
            print(f"  O heap é {diferenca_heap_grande:.2f}% MAIS LENTO que a pilha")
        else:
            print(f"  O heap é {abs(diferenca_heap_grande):.2f}% MAIS RÁPIDO que a pilha")

    # Explicação dos resultados
    print("\n" + "="*70)
    print("EXPLICAÇÃO DOS RESULTADOS")
    print("="*70)
    print("""
1. ALOCAÇÃO NA PILHA (Stack):
   - Extremamente rápida: apenas move o stack pointer
   - Desalocação automática e instantânea ao sair da função
   - Excelente localidade de cache
   - Sem overhead de gerenciamento de memória

2. ALOCAÇÃO NO HEAP (Objetos Pequenos):
   - Mais lenta que a pilha devido ao overhead de alocação
   - Requer busca por blocos livres
   - Gerenciamento pelo Garbage Collector
   - Pode sofrer fragmentação

3. ALOCAÇÃO NO HEAP (Objetos Grandes):
   - Ainda mais lenta devido ao tamanho dos objetos
   - Maior overhead de alocação e cópia de dados
   - Maior pressão sobre o Garbage Collector
   - Possível realocação de memória

4. FATORES QUE INFLUENCIAM:
   - Tamanho dos objetos alocados
   - Frequência de alocação/desalocação
   - Padrão de acesso à memória
   - Implementação do Garbage Collector
   - Arquitetura do sistema (cache, memória)

5. OBSERVAÇÕES:
   - Os resultados podem variar entre execuções
   - Python otimiza alocações pequenas (object pooling)
   - O GC pode executar durante os testes, afetando os tempos
   - Em linguagens como C, a diferença seria ainda mais pronunciada
    """)
    print("="*70)


# Executar os testes
if __name__ == "__main__":
    executar_testes_comparativos()
```

**Instruções de execução:**

```bash
python questao5.py
```

---

## Questão Bônus: Implementação de Algoritmo LRU

### Código em Python

```python
from collections import OrderedDict

class LRUPageReplacement:
    """
    Implementação do algoritmo LRU (Least Recently Used) para substituição de página
    """

    def __init__(self, num_frames):
        self.num_frames = num_frames
        # OrderedDict mantém a ordem de inserção e permite reordenação eficiente
        self.frames = OrderedDict()
        self.page_faults = 0
        self.page_hits = 0

    def referenciar_pagina(self, pagina):
        """
        Processa uma referência a uma página usando o algoritmo LRU
        """
        print(f"Referência: {pagina} | ", end="")

        # Verificar se a página já está na memória (Page Hit)
        if pagina in self.frames:
            self.page_hits += 1
            # Mover a página para o final (mais recentemente usada)
            self.frames.move_to_end(pagina)
            print(f"Frames: {list(self.frames.keys())} | Page Hit | Total Faults: {self.page_faults}")
            return

        # Page Fault - a página não está na memória
        self.page_faults += 1

        # Se ainda há espaço nos frames
        if len(self.frames) < self.num_frames:
            self.frames[pagina] = True
            print(f"Frames: {list(self.frames.keys())} | Page Fault | Total Faults: {self.page_faults}")
        else:
            # Frames cheios - substituir a página menos recentemente usada (LRU)
            # A primeira página no OrderedDict é a menos recentemente usada
            pagina_removida = next(iter(self.frames))
            del self.frames[pagina_removida]

            # Adicionar a nova página (será a mais recentemente usada)
            self.frames[pagina] = True

            print(f"Frames: {list(self.frames.keys())} | Page Fault (substituiu {pagina_removida}) | Total Faults: {self.page_faults}")

    def exibir_estatisticas(self, total_referencias):
        """
        Exibe estatísticas finais do algoritmo LRU
        """
        print("\n" + "="*70)
        print("ESTATÍSTICAS FINAIS - ALGORITMO LRU")
        print("="*70)
        print(f"Total de referências:      {total_referencias}")
        print(f"Número de frames:          {self.num_frames}")
        print(f"Page Faults:               {self.page_faults}")
        print(f"Page Hits:                 {self.page_hits}")

        taxa_faltas = (self.page_faults / total_referencias) * 100
        taxa_acertos = (self.page_hits / total_referencias) * 100

        print(f"Taxa de Faltas:            {taxa_faltas:.2f}%")
        print(f"Taxa de Acertos:           {taxa_acertos:.2f}%")
        print("="*70)


class FIFOPageReplacement:
    """
    Implementação do algoritmo FIFO para comparação
    """

    def __init__(self, num_frames):
        self.num_frames = num_frames
        self.frames = []
        self.page_faults = 0
        self.page_hits = 0
        self.fifo_index = 0

    def referenciar_pagina(self, pagina):
        """
        Processa uma referência a uma página usando o algoritmo FIFO
        """
        # Verificar se a página já está na memória
        if pagina in self.frames:
            self.page_hits += 1
            return

        # Page Fault
        self.page_faults += 1

        if len(self.frames) < self.num_frames:
            self.frames.append(pagina)
        else:
            # Substituir a página mais antiga (FIFO)
            self.frames[self.fifo_index] = pagina
            self.fifo_index = (self.fifo_index + 1) % self.num_frames

    def exibir_estatisticas(self, total_referencias):
        """
        Exibe estatísticas finais do algoritmo FIFO
        """
        print("\n" + "="*70)
        print("ESTATÍSTICAS FINAIS - ALGORITMO FIFO")
        print("="*70)
        print(f"Total de referências:      {total_referencias}")
        print(f"Número de frames:          {self.num_frames}")
        print(f"Page Faults:               {self.page_faults}")
        print(f"Page Hits:                 {self.page_hits}")

        taxa_faltas = (self.page_faults / total_referencias) * 100
        taxa_acertos = (self.page_hits / total_referencias) * 100

        print(f"Taxa de Faltas:            {taxa_faltas:.2f}%")
        print(f"Taxa de Acertos:           {taxa_acertos:.2f}%")
        print("="*70)


def comparar_algoritmos():
    """
    Compara os algoritmos LRU e FIFO
    """
    print("\n" + "#"*70)
    print("# COMPARAÇÃO: ALGORITMO LRU vs. FIFO")
    print("#"*70)

    # Configuração do teste
    num_frames = 3
    sequencia_referencias = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1]

    print(f"\nNúmero de frames: {num_frames}")
    print(f"Sequência de referências: {sequencia_referencias}")
    print(f"Total de referências: {len(sequencia_referencias)}")

    # Testar algoritmo LRU
    print("\n" + "="*70)
    print("EXECUTANDO ALGORITMO LRU")
    print("="*70 + "\n")

    lru = LRUPageReplacement(num_frames)
    for pagina in sequencia_referencias:
        lru.referenciar_pagina(pagina)

    lru.exibir_estatisticas(len(sequencia_referencias))

    # Testar algoritmo FIFO (sem saída detalhada para comparação)
    print("\n" + "="*70)
    print("EXECUTANDO ALGORITMO FIFO (para comparação)")
    print("="*70)

    fifo = FIFOPageReplacement(num_frames)
    for pagina in sequencia_referencias:
        fifo.referenciar_pagina(pagina)

    fifo.exibir_estatisticas(len(sequencia_referencias))

    # Análise comparativa
    print("\n" + "="*70)
    print("ANÁLISE COMPARATIVA")
    print("="*70)

    diferenca_faltas = fifo.page_faults - lru.page_faults
    melhoria_percentual = (diferenca_faltas / fifo.page_faults) * 100 if fifo.page_faults > 0 else 0

    print(f"\nPage Faults:")
    print(f"  FIFO: {fifo.page_faults}")
    print(f"  LRU:  {lru.page_faults}")
    print(f"  Diferença: {diferenca_faltas} faltas")

    if diferenca_faltas > 0:
        print(f"  LRU teve {diferenca_faltas} MENOS faltas que FIFO")
        print(f"  Melhoria de {melhoria_percentual:.2f}%")
    elif diferenca_faltas < 0:
        print(f"  FIFO teve {abs(diferenca_faltas)} MENOS faltas que LRU")
        print(f"  (Caso raro, depende da sequência de referências)")
    else:
        print(f"  Ambos tiveram o mesmo número de faltas")

    print(f"\nPage Hits:")
    print(f"  FIFO: {fifo.page_hits}")
    print(f"  LRU:  {lru.page_hits}")

    print("\n" + "="*70)
    print("CONCLUSÕES")
    print("="*70)
    print("""
1. ALGORITMO LRU (Least Recently Used):
   - Substitui a página que NÃO foi usada há mais tempo
   - Considera o histórico de uso recente das páginas
   - Geralmente tem MELHOR desempenho que FIFO
   - Mais complexo de implementar (requer rastreamento de uso)
   - Aproxima-se do algoritmo ótimo em muitos casos

2. ALGORITMO FIFO (First-In, First-Out):
   - Substitui a página que está há MAIS tempo na memória
   - NÃO considera o padrão de uso das páginas
   - Mais simples de implementar
   - Pode ter desempenho subótimo
   - Sujeito à Anomalia de Belady

3. QUANDO LRU É MELHOR:
   - Quando há localidade temporal (páginas usadas recentemente
     tendem a ser usadas novamente)
   - Em sistemas com padrões de acesso previsíveis
   - Quando o overhead de rastreamento é aceitável

4. IMPLEMENTAÇÃO:
   - LRU pode ser implementado com OrderedDict (Python),
     LinkedHashMap (Java), ou estruturas customizadas
   - Versões aproximadas de LRU (como Clock/Second Chance)
     são usadas na prática por serem mais eficientes
    """)
    print("="*70)


# Executar a comparação
if __name__ == "__main__":
    comparar_algoritmos()
```

**Instruções de execução:**

```bash
python questao_bonus.py
```

---

## Critérios de Correção

### Distribuição de Pontos por Questão

| Questão   | Teórica | Prática | Total    |
| --------- | ------- | ------- | -------- |
| 1         | 0,5     | 1,5     | 2,0      |
| 2         | 0,5     | 2,0     | 2,5      |
| 3         | 0,5     | 2,0     | 2,5      |
| 4         | 0,5     | 1,0     | 1,5      |
| 5         | 0,5     | 1,0     | 1,5      |
| **Total** | **2,5** | **7,5** | **10,0** |
| Bônus     | -       | 1,0     | 1,0      |

### Observações para Correção

1. **Respostas Teóricas**: Devem demonstrar compreensão conceitual, não apenas reprodução de definições
2. **Códigos**: Devem compilar/executar sem erros e produzir resultados corretos
3. **Comentários**: Devem explicar a lógica, não apenas descrever o código linha por linha
4. **Tratamento de Erros**: Verificação de alocações, entradas inválidas, etc.
5. **Análise de Resultados**: Interpretação crítica dos resultados obtidos

---

**Fim do Gabarito**
