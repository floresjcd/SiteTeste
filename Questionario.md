
> **Disciplina:** Sistemas Operacionais  
> **Tema:** Deadlocks: Modelagem, Estratégias para Lidar com Deadlock  
> **Professor:** José Carlos Flores  
> **Curso:** Engenharia de Software  
> 
---

### **Parte 1: Conceitos Fundamentais**
1. O que é um deadlock em sistemas operacionais?  
   a) Um erro de programação  
   b) Uma situação onde processos ficam bloqueados indefinidamente esperando por recursos  
   c) Um tipo de vírus de computador  
   d) Um problema de hardware  

2. Qual das seguintes condições **não** é necessária para a ocorrência de um deadlock?  
   a) Exclusão mútua  
   b) Posse e espera  
   c) Preempção forçada  
   d) Espera circular  

3. No exemplo clássico de transferência bancária, o que causa o deadlock?  
   a) A falta de memória  
   b) A aquisição de mutexes em ordens diferentes  
   c) A alta carga de processamento  
   d) A ausência de threads  

4. O que significa a condição de **exclusão mútua**?  
   a) Recursos podem ser compartilhados entre processos  
   b) Apenas um processo pode usar um recurso por vez  
   c) Processos podem liberar recursos automaticamente  
   d) Recursos são sempre preempcionados  

5. Qual é a condição que afirma que um processo que já detém recursos pode solicitar novos recursos?  
   a) Exclusão mútua  
   b) Posse e espera  
   c) Não-preempção  
   d) Espera circular  

6. Em qual condição os recursos não podem ser retirados à força de um processo?  
   a) Exclusão mútua  
   b) Posse e espera  
   c) Não-preempção  
   d) Espera circular  

7. O que caracteriza a **espera circular**?  
   a) Um ciclo onde cada processo espera por um recurso mantido pelo próximo  
   b) Um processo único aguardando um recurso  
   c) Vários processos competindo por CPU  
   d) Recursos sendo liberados automaticamente  

8. Para que um deadlock ocorra, quantas condições devem estar presentes simultaneamente?  
   a) Uma  
   b) Duas  
   c) Três  
   d) Quatro  

9. Se uma das quatro condições necessárias para deadlock for quebrada, o que acontece?  
   a) O sistema entra em colapso  
   b) O deadlock não pode ocorrer  
   c) O desempenho do sistema aumenta  
   d) Nada acontece  

10. Qual é o principal impacto de um deadlock em um sistema operacional?  
    a) Aumento da eficiência  
    b) Paralisação completa ou parcial do sistema  
    c) Redução do consumo de energia  
    d) Melhoria na alocação de recursos  

---

### **Parte 2: Modelagem de Deadlocks**
11. Qual é a ferramenta mais utilizada para modelar deadlocks?  
    a) Diagramas de fluxo  
    b) Grafos de alocação de recursos  
    c) Tabelas de processos  
    d) Árvores binárias  

12. No grafo de alocação de recursos, como são representados os processos?  
    a) Retângulos  
    b) Círculos  
    c) Triângulos  
    d) Linhas  

13. Como são representados os recursos no grafo de alocação de recursos?  
    a) Retângulos  
    b) Círculos  
    c) Triângulos  
    d) Linhas  

14. O que indica uma aresta de alocação no grafo?  
    a) Um processo solicitando um recurso  
    b) Um recurso alocado a um processo  
    c) Um processo liberando um recurso  
    d) Um recurso sendo compartilhado  

15. O que indica uma aresta de requisição no grafo?  
    a) Um processo solicitando um recurso  
    b) Um recurso alocado a um processo  
    c) Um processo liberando um recurso  
    d) Um recurso sendo compartilhado  

16. Quando há múltiplas instâncias de um recurso, como isso é representado no grafo?  
    a) Pontos dentro do retângulo do recurso  
    b) Setas duplas  
    c) Círculos adicionais  
    d) Linhas tracejadas  

17. A presença de um ciclo no grafo de alocação de recursos é suficiente para indicar um deadlock quando:  
    a) Há múltiplas instâncias de recursos  
    b) Há apenas uma instância de cada recurso  
    c) Todos os processos estão ativos  
    d) Não há processos esperando  

18. Em um sistema com múltiplas instâncias de recursos, a presença de um ciclo no grafo:  
    a) Sempre indica um deadlock  
    b) Pode ou não indicar um deadlock  
    c) Nunca indica um deadlock  
    d) Indica falha de hardware  

19. No exemplo de deadlock com instância única de recurso, o que forma o ciclo no grafo?  
    a) Dois processos e dois recursos  
    b) Um processo e um recurso  
    c) Três processos e três recursos  
    d) Um processo e dois recursos  

20. No exemplo sem deadlock com múltiplas instâncias de recurso, por que não há deadlock?  
    a) Porque todos os recursos estão ocupados  
    b) Porque um recurso pode ser liberado para quebrar o ciclo  
    c) Porque não há ciclos no grafo  
    d) Porque os processos são independentes  

---

### **Parte 3: Estratégias para Lidar com Deadlock**
21. Qual é a estratégia que busca garantir que impasses nunca ocorram?  
    a) Prevenção  
    b) Impedimento  
    c) Detecção e recuperação  
    d) Ignorar o problema  

22. Quebrar a condição de **exclusão mútua** é viável para quais tipos de recursos?  
    a) Recursos que podem ser compartilhados sem causar inconsistências  
    b) Recursos críticos como arquivos  
    c) Recursos de hardware como CPUs  
    d) Recursos de rede  

23. Qual é a principal desvantagem de alocar todos os recursos de uma vez para evitar posse e espera?  
    a) Baixa utilização de recursos  
    b) Alto custo computacional  
    c) Falta de segurança  
    d) Incompatibilidade com threads  

24. O que é necessário para quebrar a condição de **não-preempção**?  
    a) Permitir que recursos sejam retirados à força  
    b) Garantir que todos os recursos sejam compartilhados  
    c) Aumentar o número de recursos  
    d) Reduzir o número de processos  

25. Qual estratégia impõe uma ordem total nos recursos para evitar espera circular?  
    a) Prevenção  
    b) Impedimento  
    c) Detecção e recuperação  
    d) Ignorar o problema  

26. O Algoritmo do Banqueiro é um exemplo de qual estratégia?  
    a) Prevenção  
    b) Impedimento  
    c) Detecção e recuperação  
    d) Ignorar o problema  

27. O que é um estado seguro no contexto do Algoritmo do Banqueiro?  
    a) Um estado onde todos os processos concluem suas execuções  
    b) Um estado onde há deadlock  
    c) Um estado onde há ciclos no grafo  
    d) Um estado onde todos os recursos estão ocupados  

28. Qual é a principal limitação do Algoritmo do Banqueiro?  
    a) Requer conhecimento prévio dos recursos necessários  
    b) É muito simples de implementar  
    c) Não funciona com múltiplas instâncias de recursos  
    d) Não detecta deadlocks  

29. Na estratégia de detecção e recuperação, o que é feito após detectar um deadlock?  
    a) O sistema é reiniciado  
    b) Processos são eliminados ou retrocedidos  
    c) Recursos são duplicados  
    d) Nada é feito  

30. Qual é o principal problema da eliminação de processos para resolver um deadlock?  
    a) Perda de trabalho realizado pelo processo  
    b) Aumento do custo computacional  
    c) Redução da segurança  
    d) Falta de compatibilidade  

---

### **Parte 4: Modelagem de Deadlocks**

31. No grafo de alocação de recursos, o que representa uma aresta direcionada de um recurso para um processo?  
    a) O processo está solicitando o recurso  
    b) O recurso está alocado ao processo  
    c) O recurso foi liberado pelo processo  
    d) O processo está em espera  

32. No exemplo de deadlock com instância única de recurso, qual é a consequência da formação de um ciclo no grafo?  
    a) O sistema entra em estado seguro  
    b) Ocorre um deadlock  
    c) Os processos são finalizados automaticamente  
    d) Os recursos são duplicados  

33. Em sistemas com múltiplas instâncias de recursos, por que a presença de um ciclo no grafo não garante um deadlock?  
    a) Porque os ciclos sempre se resolvem automaticamente  
    b) Porque outros processos podem liberar recursos para quebrar o ciclo  
    c) Porque os recursos são compartilháveis  
    d) Porque os processos são independentes  

34. No exemplo sem deadlock com múltiplas instâncias de recurso, o que permite que o sistema evite o deadlock?  
    a) A liberação de recursos por processos fora do ciclo  
    b) A exclusão mútua  
    c) A preempção forçada  
    d) A ordem de solicitação de recursos  

35. Qual é a principal diferença entre grafos de alocação de recursos com instâncias únicas e múltiplas?  
    a) A representação dos processos  
    b) A forma como os ciclos indicam deadlocks  
    c) A ausência de arestas de requisição  
    d) O número de processos envolvidos  

36. No exemplo de ciclo sem deadlock com múltiplas instâncias, o que impede o deadlock?  
    a) A presença de um processo que não está esperando por recursos  
    b) A exclusão mútua  
    c) A preempção forçada  
    d) A ordem de solicitação de recursos  

37. Qual é a principal utilidade dos grafos de alocação de recursos?  
    a) Visualizar a alocação de memória  
    b) Detectar ciclos que indicam deadlocks  
    c) Gerenciar threads  
    d) Monitorar o uso de CPU  

38. Em um grafo de alocação de recursos, o que significa a existência de múltiplos pontos dentro de um nó de recurso?  
    a) O recurso tem múltiplas instâncias  
    b) O recurso está bloqueado  
    c) O recurso é compartilhável  
    d) O recurso é crítico  

39. Qual é a principal vantagem de usar grafos de alocação de recursos para modelar deadlocks?  
    a) Facilita a visualização de dependências entre processos e recursos  
    b) Reduz o consumo de memória  
    c) Aumenta a velocidade de processamento  
    d) Elimina a necessidade de exclusão mútua  

40. No exemplo de deadlock com instância única de recurso, qual é a causa do ciclo no grafo?  
    a) A liberação de recursos por processos fora do ciclo  
    b) A aquisição de recursos em ordens diferentes  
    c) A presença de múltiplas instâncias de recursos  
    d) A exclusão mútua  

---

### **Parte 5: Estratégias para Lidar com Deadlocks**

41. Qual das seguintes estratégias busca garantir que impasses nunca ocorram?  
    a) Prevenção  
    b) Detecção e recuperação  
    c) Ignorar o problema  
    d) Impedimento  

42. Qual é a principal desvantagem de quebrar a condição de **exclusão mútua**?  
    a) Reduz a segurança do sistema  
    b) Não é aplicável a todos os tipos de recursos  
    c) Aumenta o custo computacional  
    d) Causa inconsistências na CPU  

43. Na estratégia de **alocação de todos os recursos de uma vez**, qual é o principal problema?  
    a) Baixa utilização de recursos  
    b) Alto custo computacional  
    c) Falta de segurança  
    d) Incompatibilidade com threads  

44. Qual é a principal dificuldade de implementar a estratégia de **liberação de recursos**?  
    a) Salvar e restaurar o estado do processo  
    b) Garantir a exclusão mútua  
    c) Aumentar o número de recursos  
    d) Reduzir o número de processos  

45. Na estratégia de **quebra da não-preempção**, quais recursos são mais adequados para preempção?  
    a) Arquivos e bancos de dados  
    b) CPU e páginas de memória  
    c) Impressoras e scanners  
    d) Recursos críticos  

46. Qual é a principal vantagem de impor uma ordem total nos recursos para evitar espera circular?  
    a) Reduz o consumo de memória  
    b) Previne a formação de ciclos de espera  
    c) Aumenta a velocidade de processamento  
    d) Elimina a necessidade de exclusão mútua  

47. No Algoritmo do Banqueiro, o que é um estado seguro?  
    a) Um estado onde há deadlock  
    b) Um estado onde todos os processos concluem suas execuções  
    c) Um estado onde há ciclos no grafo  
    d) Um estado onde todos os recursos estão ocupados  

48. Qual é a principal limitação do Algoritmo do Banqueiro?  
    a) Requer conhecimento prévio dos recursos necessários  
    b) É muito simples de implementar  
    c) Não funciona com múltiplas instâncias de recursos  
    d) Não detecta deadlocks  

49. Na estratégia de detecção e recuperação, qual é o principal problema da eliminação de processos?  
    a) Perda de trabalho realizado pelo processo  
    b) Aumento do custo computacional  
    c) Redução da segurança  
    d) Falta de compatibilidade  

50. Qual é a principal vantagem do rollback em relação à eliminação de processos?  
    a) Preserva o trabalho realizado pelo processo  
    b) Reduz o consumo de memória  
    c) Aumenta a velocidade de processamento  
    d) Elimina a necessidade de exclusão mútua  

---
