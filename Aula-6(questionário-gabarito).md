
> **Disciplina:** Sistemas Operacionais  
> **Tema:** Comunicação Interprocessos, Escalonamento de Processos e Problemas Clássicos de Comunicação Interprocessos  
> **Professor:** José Carlos Flores  
> **Curso:** Engenharia de Software  
> ***Gabarito do Questionário***  
> 
---

**Comunicação Interprocessos**, **Escalonamento de Processos** e **Problemas Clássicos de Comunicação Interprocessos**

---

### **Comunicação Interprocessos**

1. **O que é condição de corrida (race condition)?**  
   a) Quando dois processos competem por recursos limitados.  
   b) Quando um processo é bloqueado permanentemente.  
   c) Quando múltiplos processos acessam dados compartilhados e o resultado depende da ordem de execução.  
   d) Quando um processo termina abruptamente.  
   **Resposta: c**

2. **Qual técnica é usada para evitar condições de corrida?**  
   a) Chaveamento circular.  
   b) Exclusão mútua.  
   c) Escalonamento por prioridade.  
   d) Uso de semáforos binários.  
   **Resposta: b**

3. **O que é uma região crítica (critical section)?**  
   a) Uma área do código onde ocorre a alocação de memória.  
   b) Uma parte do programa onde ocorre acesso a recursos compartilhados.  
   c) Uma área onde o sistema operacional controla o uso da CPU.  
   d) O espaço reservado para armazenamento de threads.  
   **Resposta: b**

4. **Qual das seguintes técnicas é usada para implementar exclusão mútua?**  
   a) Variável lock.  
   b) Algoritmo de Peterson.  
   c) Instrução TSL.  
   d) Todas as anteriores.  
   **Resposta: d**

5. **O que é espera ociosa (busy waiting)?**  
   a) Quando um processo aguarda ativamente por um recurso.  
   b) Quando um processo entra em estado de espera indefinidamente.  
   c) Quando um processo é escalonado para execução.  
   d) Quando um processo é interrompido pelo sistema operacional.  
   **Resposta: a**

6. **Qual é a principal desvantagem do algoritmo de Peterson?**  
   a) Não funciona em sistemas multiprocessados.  
   b) Gera espera ociosa.  
   c) Não garante exclusão mútua.  
   d) É complexo de implementar.  
   **Resposta: b**

7. **O que é um spin lock?**  
   a) Um mecanismo de bloqueio que gera espera ociosa.  
   b) Um tipo de semáforo.  
   c) Um processo que nunca é executado.  
   d) Um recurso compartilhado entre threads.  
   **Resposta: a**

8. **Qual é a diferença entre mutex e semáforo binário?**  
   a) Mutex é usado apenas para exclusão mútua, enquanto semáforo pode ser usado para sincronização.  
   b) Mutex não permite espera ociosa, enquanto semáforo permite.  
   c) Semáforo é mais rápido que mutex.  
   d) Não há diferença.  
   **Resposta: a**

9. **O que é deadlock?**  
   a) Quando um processo é executado indefinidamente.  
   b) Quando dois ou mais processos ficam bloqueados esperando por recursos que nunca serão liberados.  
   c) Quando um processo é interrompido pelo sistema operacional.  
   d) Quando ocorre uma condição de corrida.  
   **Resposta: b**

10. **Quais são as quatro condições necessárias para ocorrer deadlock?**  
    a) Exclusão mútua, posse e espera, inexistência de preempção, espera circular.  
    b) Espera ociosa, chaveamento obrigatório, escalonamento preemptivo, variável lock.  
    c) Spin lock, semáforo, mutex, algoritmo de Peterson.  
    d) Quantum, round-robin, prioridade, FCFS.  
    **Resposta: a**

---

### **Escalonamento de Processos**

11. **O que é escalonamento preemptivo?**  
    a) Quando um processo é executado até o fim sem interrupções.  
    b) Quando um processo pode ser interrompido antes de terminar.  
    c) Quando um processo é bloqueado permanentemente.  
    d) Quando um processo é executado sem acesso à CPU.  
    **Resposta: b**

12. **Qual é o algoritmo de escalonamento mais simples?**  
    a) Round-robin.  
    b) SJF (Shortest Job First).  
    c) FCFS (First Come, First Served).  
    d) Prioridade.  
    **Resposta: c**

13. **O que é quantum no escalonamento Round-Robin?**  
    a) O tempo máximo que um processo pode usar a CPU antes de ser interrompido.  
    b) O número total de processos na fila de prontos.  
    c) A prioridade de um processo.  
    d) O tempo necessário para concluir um processo.  
    **Resposta: a**

14. **Qual é a principal desvantagem do algoritmo FCFS?**  
    a) Gera espera ociosa.  
    b) Pode causar inversão de prioridade.  
    c) Pode causar starvation.  
    d) Pode causar longos tempos de espera se um processo grande for executado primeiro.  
    **Resposta: d**

15. **O que é starvation?**  
    a) Quando um processo é executado indefinidamente.  
    b) Quando um processo nunca recebe recursos suficientes para ser executado.  
    c) Quando um processo é interrompido pelo sistema operacional.  
    d) Quando ocorre deadlock.  
    **Resposta: b**

16. **Qual algoritmo de escalonamento é baseado no tamanho do próximo processo?**  
    a) FCFS.  
    b) SJF.  
    c) Round-robin.  
    d) Prioridade.  
    **Resposta: b**

17. **O que é aging no contexto de escalonamento?**  
    a) Aumentar a prioridade de processos que esperam por muito tempo.  
    b) Reduzir o tempo de execução de processos grandes.  
    c) Bloquear processos que consomem muitos recursos.  
    d) Liberar recursos de processos antigos.  
    **Resposta: a**

18. **Qual é a principal vantagem do escalonamento Round-Robin?**  
    a) Garante que todos os processos tenham tempo de CPU.  
    b) Minimiza o tempo médio de espera.  
    c) Executa processos grandes primeiro.  
    d) Evita deadlock.  
    **Resposta: a**

19. **O que é chaveamento de contexto (context switching)?**  
    a) Trocar a CPU de um processo para outro.  
    b) Alterar a prioridade de um processo.  
    c) Bloquear um processo indefinidamente.  
    d) Liberar recursos de um processo.  
    **Resposta: a**

20. **Qual é a principal função do escalonador de processos?**  
    a) Gerenciar a memória.  
    b) Decidir qual processo será executado na CPU.  
    c) Controlar dispositivos de entrada/saída.  
    d) Gerenciar arquivos.  
    **Resposta: b**

---

### **Problemas Clássicos de Comunicação Interprocessos**

21. **O que é o problema dos filósofos jantando?**  
    a) Um problema de deadlock envolvendo cinco filósofos que compartilham garfos.  
    b) Um problema de starvation envolvendo processos concorrentes.  
    c) Um problema de escalonamento de processos.  
    d) Um problema de comunicação entre threads.  
    **Resposta: a**

22. **Como resolver o problema dos filósofos jantando?**  
    a) Usar semáforos binários.  
    b) Impor uma ordem para pegar os garfos.  
    c) Usar exclusão mútua.  
    d) Todas as anteriores.  
    **Resposta: b**

23. **O que é o problema do produtor-consumidor?**  
    a) Um problema de comunicação entre processos onde um produz dados e outro consome.  
    b) Um problema de deadlock.  
    c) Um problema de escalonamento.  
    d) Um problema de alocação de memória.  
    **Resposta: a**

24. **Qual estrutura é comumente usada para resolver o problema do produtor-consumidor?**  
    a) Fila circular.  
    b) Semáforo.  
    c) Mutex.  
    d) Todas as anteriores.  
    **Resposta: d**

25. **O que é o problema dos leitores-escritores?**  
    a) Um problema de deadlock envolvendo leitura e escrita de dados.  
    b) Um problema de sincronização onde leitores e escritores acessam dados compartilhados.  
    c) Um problema de escalonamento de processos.  
    d) Um problema de alocação de memória.  
    **Resposta: b**

---

### **Comunicação Interprocessos**

26. **O que é uma condição de disputa (race condition)?**  
    a) Quando dois processos competem por recursos limitados.  
    b) Quando múltiplos processos acessam dados compartilhados e o resultado depende da ordem de execução.  
    c) Quando um processo é bloqueado permanentemente.  
    d) Quando ocorre deadlock.  
    **Resposta: b**

27. **Qual técnica é usada para evitar condições de disputa?**  
    a) Chaveamento circular.  
    b) Exclusão mútua.  
    c) Escalonamento por prioridade.  
    d) Uso de semáforos binários.  
    **Resposta: b**

28. **O que é uma região crítica (critical section)?**  
    a) Uma área do código onde ocorre a alocação de memória.  
    b) Uma parte do programa onde ocorre acesso a recursos compartilhados.  
    c) Uma área onde o sistema operacional controla o uso da CPU.  
    d) O espaço reservado para armazenamento de threads.  
    **Resposta: b**

29. **Qual das seguintes técnicas é usada para implementar exclusão mútua?**  
    a) Variável lock.  
    b) Algoritmo de Peterson.  
    c) Instrução TSL.  
    d) Todas as anteriores.  
    **Resposta: d**

30. **O que é espera ociosa (busy waiting)?**  
    a) Quando um processo aguarda ativamente por um recurso.  
    b) Quando um processo entra em estado de espera indefinidamente.  
    c) Quando um processo é escalonado para execução.  
    d) Quando um processo é interrompido pelo sistema operacional.  
    **Resposta: a**

31. **Qual é a principal desvantagem do algoritmo de Peterson?**  
    a) Não funciona em sistemas multiprocessados.  
    b) Gera espera ociosa.  
    c) Não garante exclusão mútua.  
    d) É complexo de implementar.  
    **Resposta: b**

32. **O que é um spin lock?**  
    a) Um mecanismo de bloqueio que gera espera ociosa.  
    b) Um tipo de semáforo.  
    c) Um processo que nunca é executado.  
    d) Um recurso compartilhado entre threads.  
    **Resposta: a**

33. **Qual é a diferença entre mutex e semáforo binário?**  
    a) Mutex é usado apenas para exclusão mútua, enquanto semáforo pode ser usado para sincronização.  
    b) Mutex não permite espera ociosa, enquanto semáforo permite.  
    c) Semáforo é mais rápido que mutex.  
    d) Não há diferença.  
    **Resposta: a**

34. **O que é deadlock?**  
    a) Quando um processo é executado indefinidamente.  
    b) Quando dois ou mais processos ficam bloqueados esperando por recursos que nunca serão liberados.  
    c) Quando um processo é interrompido pelo sistema operacional.  
    d) Quando ocorre uma condição de corrida.  
    **Resposta: b**

35. **Quais são as quatro condições necessárias para ocorrer deadlock?**  
    a) Exclusão mútua, posse e espera, inexistência de preempção, espera circular.  
    b) Espera ociosa, chaveamento obrigatório, escalonamento preemptivo, variável lock.  
    c) Spin lock, semáforo, mutex, algoritmo de Peterson.  
    d) Quantum, round-robin, prioridade, FCFS.  
    **Resposta: a**

---

### **Escalonamento de Processos**

36. **O que é escalonamento preemptivo?**  
    a) Quando um processo é executado até o fim sem interrupções.  
    b) Quando um processo pode ser interrompido antes de terminar.  
    c) Quando um processo é bloqueado permanentemente.  
    d) Quando um processo é executado sem acesso à CPU.  
    **Resposta: b**

37. **Qual é o algoritmo de escalonamento mais simples?**  
    a) Round-robin.  
    b) SJF (Shortest Job First).  
    c) FCFS (First Come, First Served).  
    d) Prioridade.  
    **Resposta: c**

38. **O que é quantum no escalonamento Round-Robin?**  
    a) O tempo máximo que um processo pode usar a CPU antes de ser interrompido.  
    b) O número total de processos na fila de prontos.  
    c) A prioridade de um processo.  
    d) O tempo necessário para concluir um processo.  
    **Resposta: a**

39. **Qual é a principal desvantagem do algoritmo FCFS?**  
    a) Gera espera ociosa.  
    b) Pode causar inversão de prioridade.  
    c) Pode causar starvation.  
    d) Pode causar longos tempos de espera se um processo grande for executado primeiro.  
    **Resposta: d**

40. **O que é starvation?**  
    a) Quando um processo é executado indefinidamente.  
    b) Quando um processo nunca recebe recursos suficientes para ser executado.  
    c) Quando um processo é interrompido pelo sistema operacional.  
    d) Quando ocorre deadlock.  
    **Resposta: b**

41. **Qual algoritmo de escalonamento é baseado no tamanho do próximo processo?**  
    a) FCFS.  
    b) SJF.  
    c) Round-robin.  
    d) Prioridade.  
    **Resposta: b**

42. **O que é aging no contexto de escalonamento?**  
    a) Aumentar a prioridade de processos que esperam por muito tempo.  
    b) Reduzir o tempo de execução de processos grandes.  
    c) Bloquear processos que consomem muitos recursos.  
    d) Liberar recursos de processos antigos.  
    **Resposta: a**

43. **Qual é a principal vantagem do escalonamento Round-Robin?**  
    a) Garante que todos os processos tenham tempo de CPU.  
    b) Minimiza o tempo médio de espera.  
    c) Executa processos grandes primeiro.  
    d) Evita deadlock.  
    **Resposta: a**

44. **O que é chaveamento de contexto (context switching)?**  
    a) Trocar a CPU de um processo para outro.  
    b) Alterar a prioridade de um processo.  
    c) Bloquear um processo indefinidamente.  
    d) Liberar recursos de um processo.  
    **Resposta: a**

45. **Qual é a principal função do escalonador de processos?**  
    a) Gerenciar a memória.  
    b) Decidir qual processo será executado na CPU.  
    c) Controlar dispositivos de entrada/saída.  
    d) Gerenciar arquivos.  
    **Resposta: b**

---

### **Problemas Clássicos de Comunicação Interprocessos**

46. **O que é o problema dos filósofos jantando?**  
    a) Um problema de deadlock envolvendo cinco filósofos que compartilham garfos.  
    b) Um problema de starvation envolvendo processos concorrentes.  
    c) Um problema de escalonamento de processos.  
    d) Um problema de comunicação entre threads.  
    **Resposta: a**

47. **Como resolver o problema dos filósofos jantando?**  
    a) Usar semáforos binários.  
    b) Impor uma ordem para pegar os garfos.  
    c) Usar exclusão mútua.  
    d) Todas as anteriores.  
    **Resposta: b**

48. **O que é o problema do produtor-consumidor?**  
    a) Um problema de comunicação entre processos onde um produz dados e outro consome.  
    b) Um problema de deadlock.  
    c) Um problema de escalonamento de processos.  
    d) Um problema de alocação de memória.  
    **Resposta: a**

49. **Qual estrutura é comumente usada para resolver o problema do produtor-consumidor?**  
    a) Fila circular.  
    b) Semáforo.  
    c) Mutex.  
    d) Todas as anteriores.  
    **Resposta: d**

50. **O que é o problema dos leitores-escritores?**  
    a) Um problema de deadlock envolvendo leitura e escrita de dados.  
    b) Um problema de sincronização onde leitores e escritores acessam dados compartilhados.  
    c) Um problema de escalonamento de processos.  
    d) Um problema de alocação de memória.  
    **Resposta: b**

---
