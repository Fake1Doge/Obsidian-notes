# 📘 Chapter 1: Logic and Proofs

## 1. Propositional Logic

### Definition
> [!INFO] Definition: Proposition
> [cite_start]A **proposition** is a declarative sentence that is either true or false, but not both[cite: 29].

* [cite_start]**Propositional Variables:** Typically denoted by $p, q, r, \dots$[cite: 59].
* [cite_start]**Truth Values:** $T$ (True) and $F$ (False)[cite: 61].

### Examples vs. Non-Examples
| Type | Example | Reason |
| :--- | :--- | :--- |
| **Proposition** | "The Moon is made of green cheese." | [cite_start]False sentence [cite: 31] |
| **Proposition** | "$1+0=1$" | [cite_start]Mathematical fact [cite: 34] |
| **Not a Proposition** | "Sit down!" | [cite_start]Command/Instruction [cite: 49, 55] |
| **Not a Proposition** | "What time is it?" | [cite_start]Question [cite: 51, 55] |
| **Not a Proposition** | "$x+1=2$" | [cite_start]Variable truth value (unknown) [cite: 52] |

---

## 2. Logical Connectives & Truth Tables

[cite_start]Compound propositions are constructed using logical connectives[cite: 64].

### Operator Precedence
The order of operations for logical operators is:
1.  Negation ($\neg$)
2.  Conjunction ($\land$)
3.  Disjunction ($\lor$)
4.  Implication ($\to$)
5.  Biconditional ($\leftrightarrow$)
[cite_start][cite: 206]

### Truth Tables
[cite_start]**Row Calculation:** A truth table with $n$ propositional variables has $2^n$ rows[cite: 203].

#### 1. Negation ($\neg$)
[cite_start]"It is not the case that $p$"[cite: 75].

| $p$ | $\neg p$ |
| :---: | :---: |
| T | F |
| F | T |
[cite_start]*[cite: 73-74]*

#### 2. Conjunction ($\land$)
"AND". [cite_start]True only if **both** $p$ and $q$ are true[cite: 79].

| $p$ | $q$ | $p \land q$ |
| :---: | :---: | :---: |
| T | T | **T** |
| T | F | F |
| F | T | F |
| F | F | F |
[cite_start]*[cite: 80]*

#### 3. Disjunction ($\lor$)
"Inclusive OR". [cite_start]True if **at least one** is true (one or both)[cite: 86, 95].

| $p$ | $q$ | $p \lor q$ |
| :---: | :---: | :---: |
| T | T | **T** |
| T | F | **T** |
| F | T | **T** |
| F | F | F |
[cite_start]*[cite: 87]*

#### 4. Exclusive Or ($\oplus$)
"XOR". [cite_start]True if exactly one is true, but **not both** (e.g., "Soup or salad comes with this entrée") [cite: 96-97].

| $p$ | $q$ | $p \oplus q$ |
| :---: | :---: | :---: |
| T | T | F |
| T | F | **T** |
| F | T | **T** |
| F | F | F |
[cite_start]*[cite: 100]*

#### 5. Implication ($p \to q$)
"If $p$, then $q$". $p$ is the hypothesis (antecedent); [cite_start]$q$ is the conclusion (consequence)[cite: 103, 107].

> [!WARNING] Implication Rule
> The statement $p \to q$ is **FALSE** only when $p$ is True and $q$ is False. In all other cases, it is True.

| $p$ | $q$ | $p \to q$ |
| :---: | :---: | :---: |
| T | T | **T** |
| T | F | **F** |
| F | T | **T** |
| F | F | **T** |
[cite_start]*[cite: 104]*

#### 6. Biconditional ($p \leftrightarrow q$)
[cite_start]"$p$ if and only if $q$"[cite: 157]. True when $p$ and $q$ have the **same truth value**.

| $p$ | $q$ | $p \leftrightarrow q$ |
| :---: | :---: | :---: |
| T | T | **T** |
| T | F | F |
| F | T | F |
| F | F | **T** |
[cite_start]*[cite: 159]*

---

## 3. Implication Variants

[cite_start]From the conditional statement $p \to q$, we can form related statements[cite: 145]:

| Name | Form | Equivalent to $p \to q$? |
| :--- | :---: | :--- |
| **Conditional** | $p \to q$ | N/A |
| **Converse** | $q \to p$ | [cite_start]No [cite: 196] |
| **Inverse** | $\neg p \to \neg q$ | [cite_start]No [cite: 196] |
| **Contrapositive** | $\neg q \to \neg p$ | [cite_start]**Yes** [cite: 189] |

> [!TIP] Equivalence Note
> [cite_start]An implication is logically equivalent to its **Contrapositive**, but NOT to its converse or inverse[cite: 146, 189, 196].

---

## 4. Logical Equivalences

### Terminology
* [cite_start]**Tautology:** A proposition that is always true (e.g., $p \lor \neg p$)[cite: 252].
* [cite_start]**Contradiction:** A proposition that is always false (e.g., $p \land \neg p$)[cite: 254].
* [cite_start]**Contingency:** Neither a tautology nor a contradiction[cite: 256].
* [cite_start]**Logically Equivalent ($p \equiv q$):** When $p \leftrightarrow q$ is a tautology (they share the same truth table values) [cite: 261-263].

### Key Laws of Logic

> [!IMPORTANT] De Morgan's Laws
> 1. $\neg(p \land q) \equiv \neg p \lor \neg q$
> 2. $\neg(p \lor q) \equiv \neg p \land \neg q$
> [cite_start][cite: 270]

**Standard Equivalences Reference:**

| Law Name | Equivalence | Source |
| :--- | :--- | :--- |
| **Identity** | [cite_start]$p \land T \equiv p$ <br> $p \lor F \equiv p$ | [cite: 278] |
| **Domination** | [cite_start]$p \lor T \equiv T$ <br> $p \land F \equiv F$ | [cite: 280] |
| **Idempotent** | [cite_start]$p \lor p \equiv p$ <br> $p \land p \equiv p$ | [cite: 282] |
| **Double Negation** | [cite_start]$\neg(\neg p) \equiv p$ | [cite: 284] |
| **Negation** | [cite_start]$p \lor \neg p \equiv T$ <br> $p \land \neg p \equiv F$ | [cite: 285] |
| **Commutative** | [cite_start]$p \lor q \equiv q \lor p$ <br> $p \land q \equiv q \land p$ | [cite: 289] |
| **Associative** | [cite_start]$(p \lor q) \lor r \equiv p \lor (q \lor r)$ | [cite: 291] |
| **Distributive** | [cite_start]$p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$ <br> $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$ | [cite: 292-293] |
| **Absorption** | [cite_start]$p \lor (p \land q) \equiv p$ <br> $p \land (p \lor q) \equiv p$ | [cite: 294] |

**Conditional Equivalences:**
* [cite_start]$p \to q \equiv \neg p \lor q$ [cite: 299]
* [cite_start]$p \to q \equiv \neg q \to \neg p$ [cite: 300]
* [cite_start]$\neg(p \to q) \equiv p \land \neg q$ [cite: 303]

---

## 5. Equivalence Proofs

[cite_start]To prove $A \equiv B$, we produce a series of equivalences starting with $A$ and ending with $B$[cite: 315].

### Example 1: De Morgan & Distributive
[cite_start]**Show that:** $\neg(p \lor (\neg p \land q)) \equiv \neg p \land \neg q$[cite: 323].

$$
\begin{aligned}
&\neg(p \lor (\neg p \land q)) \\
&\equiv \neg p \land \neg(\neg p \land q) & \text{(De Morgan's 2nd Law)} \\
&\equiv \neg p \land [\neg(\neg p) \lor \neg q] & \text{(De Morgan's 1st Law)} \\
&\equiv \neg p \land (p \lor \neg q) & \text{(Double Negation Law)} \\
&\equiv (\neg p \land p) \lor (\neg p \land \neg q) & \text{(Distributive Law)} \\
&\equiv F \lor (\neg p \land \neg q) & \text{(Negation Law: } \neg p \land p \equiv F) \\
&\equiv (\neg p \land \neg q) \lor F & \text{(Commutative Law)} \\
&\equiv (\neg p \land \neg q) & \text{(Identity Law for F)}
\end{aligned}
$$
[cite_start]*[cite: 326-334]*

### Example 2: Tautology Proof
[cite_start]**Show that:** $(p \land q) \to (p \lor q)$ is a tautology[cite: 338].

$$
\begin{aligned}
&(p \land q) \to (p \lor q) \\
&\equiv \neg(p \land q) \lor (p \lor q) & \text{(Implication Equivalence)} \\
&\equiv (\neg p \lor \neg q) \lor (p \lor q) & \text{(De Morgan's 1st Law)} \\
&\equiv (\neg p \lor p) \lor (\neg q \lor q) & \text{(Associative & Commutative Laws)} \\
&\equiv T \lor T & \text{(Negation Law)} \\
&\equiv T & \text{(Domination Law)}
\end{aligned}
$$
[cite_start]*[cite: 341-348]*