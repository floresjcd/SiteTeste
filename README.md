Vamos traduzir cada sentença para a linguagem simbólica usando \( p \), \( q \) e \( r \) conforme definido.

---

**a)** *Carlos fala francês ou inglês, mas não fala alemão.*

- "Carlos fala francês ou inglês" = \( p \lor q \)  
- "mas não fala alemão" = \( \lnot r \)  
- "mas" geralmente indica conjunção ("e").

Portanto:  
\[
(p \lor q) \land \lnot r
\]

---

**b)** *Carlos fala francês e inglês, ou então não fala francês e alemão.*

- "Carlos fala francês e inglês" = \( p \land q \)  
- "não fala francês e alemão" = \( \lnot (p \land r) \)  
  Mas cuidado: "não fala francês e alemão" pode ser lido como "não fala francês e fala alemão"? Não, porque a frase original é "não fala francês e alemão", que pode ser ambígua, mas aqui parece ser: "não fala francês, mas fala alemão" = \( \lnot p \land r \).  
  "ou então" sugere "ou".

Portanto:  
\[
(p \land q) \lor (\lnot p \land r)
\]

---

**c)** *É falso que Carlos fale francês e, ao mesmo tempo, não fale alemão.*

- "Carlos fale francês e não fale alemão" = \( p \land \lnot r \)  
- "É falso que" = negação.

Portanto:  
\[
\lnot (p \land \lnot r)
\]

---

**d)** *É falso que Carlos fale inglês ou alemão e que, ainda assim, não fale francês.*

- "Carlos fale inglês ou alemão" = \( q \lor r \)  
- "e que, ainda assim, não fale francês" = \( \land \; \lnot p \)  
- A sentença inteira antes de "É falso" é: \( (q \lor r) \land \lnot p \)  
- "É falso que" = negação.

Portanto:  
\[
\lnot \big( (q \lor r) \land \lnot p \big)
\]

---

**e)** *Se Carlos fala alemão, então ele fala francês se, e somente se, também falar inglês.*

- "Se Carlos fala alemão" = \( r \)  
- "ele fala francês se e somente se também falar inglês" = \( p \leftrightarrow q \)  
- A estrutura: \( r \to (p \leftrightarrow q) \)

Portanto:  
\[
r \to (p \leftrightarrow q)
\]

---

**Respostas finais:**

\[
\boxed{
\begin{aligned}
&\text{a) } (p \lor q) \land \lnot r \\
&\text{b) } (p \land q) \lor (\lnot p \land r) \\
&\text{c) } \lnot (p \land \lnot r) \\
&\text{d) } \lnot ((q \lor r) \land \lnot p) \\
&\text{e) } r \to (p \leftrightarrow q)
\end{aligned}
}
\]
