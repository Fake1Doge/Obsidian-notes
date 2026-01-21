# 📘 Chapter 1: Logic and Proofs

## 1. Propositional Logic

### Definition
> [!INFO] Definition: Proposition
> A **proposition** is a declarative sentence that is either true or false, but not both.

* **Propositional Variables:** Typically denoted by $p, q, r, \dots$.
* **Truth Values:** $T$ (True) and $F$ (False).

### Examples vs. Non-Examples
| Type | Example | Reason |
| :--- | :--- | :--- |
| **Proposition** | "The Moon is made of green cheese." | False sentence |
| **Proposition** | "$1+0=1$" | Mathematical fact |
| **Not a Proposition** | "Sit down!" | Command/Instruction |
| **Not a Proposition** | "What time is it?" | Question |
| **Not a Proposition** | "$x+1=2$" | Variable truth value (unknown) |

---

## 2. Logical Connectives & Truth Tables

Compound propositions are constructed using logical connectives.

### Operator Precedence
The order of operations for logical operators is:
1.  Negation ($\neg$)
2.  Conjunction ($\land$)
3.  Disjunction ($\lor$)
4.  Implication ($\to$)
5.  Biconditional ($\leftrightarrow$)


### Truth Tables
**Row Calculation:** A truth table with $n$ propositional variables has $2^n$ rows.

#### 1. Negation ($\neg$)
"It is not the case that $p$".

| $p$ | $\neg p$ |
| :---: | :---: |
| T | F |
| F | T |

#### 2. Conjunction ($\land$)
"AND". True only if **both** $p$ and $q$ are true.

| $p$ | $q$ | $p \land q$ |
| :---: | :---: | :---: |
| T | T | **T** |
| T | F | F |
| F | T | F |
| F | F | F |

#### 3. Disjunction ($\lor$)
"Inclusive OR". True if **at least one** is true (one or both).

| $p$ | $q$ | $p \lor q$ |
| :---: | :---: | :---: |
| T | T | **T** |
| T | F | **T** |
| F | T | **T** |
| F | F | F |

#### 4. Exclusive Or ($\oplus$)
"XOR". True if exactly one is true, but **not both** (e.g., "Soup or salad comes with this entrée").

| $p$ | $q$ | $p \oplus q$ |
| :---: | :---: | :---: |
| T | T | F |
| T | F | **T** |
| F | T | **T** |
| F | F | F |

#### 5. Implication ($p \to q$)
"If $p$, then $q$". $p$ is the hypothesis (antecedent); $q$ is the conclusion (consequence).

> [!WARNING] Implication Rule
> The statement $p \to q$ is **FALSE** only when $p$ is True and $q$ is False. In all other cases, it is True.

| $p$ | $q$ | $p \to q$ |
| :---: | :---: | :---: |
| T | T | **T** |
| T | F | **F** |
| F | T | **T** |
| F | F | **T** |

#### 6. Biconditional ($p \leftrightarrow q$)
"$p$ if and only if $q$". True when $p$ and $q$ have the **same truth value**.

| $p$ | $q$ | $p \leftrightarrow q$ |
| :---: | :---: | :---: |
| T | T | **T** |
| T | F | F |
| F | T | F |
| F | F | **T** |

---

## 3. Implication Variants

From the conditional statement $p \to q$, we can form related statements:

| Name | Form | Equivalent to $p \to q$? |
| :--- | :---: | :--- |
| **Conditional** | $p \to q$ | N/A |
| **Converse** | $q \to p$ | No |
| **Inverse** | $\neg p \to \neg q$ | No |
| **Contrapositive** | $\neg q \to \neg p$ | **Yes** |

> [!TIP] Equivalence Note
> An implication is logically equivalent to its **Contrapositive**, but NOT to its converse or inverse.

---

## 4. Logical Equivalences

### Terminology
* **Tautology:** A proposition that is always true (e.g., $p \lor \neg p$).
* **Contradiction:** A proposition that is always false (e.g., $p \land \neg p$).
* **Contingency:** Neither a tautology nor a contradiction.
* **Logically Equivalent ($p \equiv q$):** When $p \leftrightarrow q$ is a tautology (they share the same truth table values).

### Key Laws of Logic

> [!IMPORTANT] De Morgan's Laws
> 1. $\neg(p \land q) \equiv \neg p \lor \neg q$
> 2. $\neg(p \lor q) \equiv \neg p \land \neg q$

**Standard Equivalences Reference:**

| Law Name | Equivalence |
| :--- | :--- |
| **Identity** | $p \land T \equiv p$ <br> $p \lor F \equiv p$ |
| **Domination** | $p \lor T \equiv T$ <br> $p \land F \equiv F$ |
| **Idempotent** | $p \lor p \equiv p$ <br> $p \land p \equiv p$ |
| **Double Negation** | $\neg(\neg p) \equiv p$ |
| **Negation** | $p \lor \neg p \equiv T$ <br> $p \land \neg p \equiv F$ |
| **Commutative** | $p \lor q \equiv q \lor p$ <br> $p \land q \equiv q \land p$ |
| **Associative** | $(p \lor q) \lor r \equiv p \lor (q \lor r)$ |
| **Distributive** | $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$ <br> $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$ |
| **Absorption** | $p \lor (p \land q) \equiv p$ <br> $p \land (p \lor q) \equiv p$ |

**Conditional Equivalences:**
* $p \to q \equiv \neg p \lor q$
* $p \to q \equiv \neg q \to \neg p$
* $\neg(p \to q) \equiv p \land \neg q$

---

## 5. Equivalence Proofs

To prove $A \equiv B$, we produce a series of equivalences starting with $A$ and ending with $B$.

### Example 1: De Morgan & Distributive
**Show that:** $\neg(p \lor (\neg p \land q)) \equiv \neg p \land \neg q$.

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

### Example 2: Tautology Proof
**Show that:** $(p \land q) \to (p \lor q)$ is a tautology.

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