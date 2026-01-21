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
**Show that:** $\neg(p \vee (\neg p \wedge q)) \equiv \neg p \wedge \neg q$

$$
\begin{aligned}
& \neg(p \vee (\neg p \wedge q)) \\
& \equiv \neg p \wedge \neg(\neg p \wedge q) & \text{(De Morgan's 2nd Law)} \\
& \equiv \neg p \wedge [\neg(\neg p) \vee \neg q] & \text{(De Morgan's 1st Law)} \\
& \equiv \neg p \wedge (p \vee \neg q) & \text{(Double Negation Law)} \\
& \equiv (\neg p \wedge p) \vee (\neg p \wedge \neg q) & \text{(Distributive Law)} \\
& \equiv F \vee (\neg p \wedge \neg q) & \text{(Negation Law: } \neg p \wedge p \equiv F \text{)} \\
& \equiv (\neg p \wedge \neg q) \vee F & \text{(Commutative Law)} \\
& \equiv \neg p \wedge \neg q & \text{(Identity Law for F)}
\end{aligned}
$$

### Example 2: Tautology Proof
**Show that:** $(p \wedge q) \rightarrow (p \vee q)$ is a tautology (always True).

$$
\begin{aligned}
& (p \wedge q) \rightarrow (p \vee q) \\
& \equiv \neg(p \wedge q) \vee (p \vee q) & \text{(Implication Law / Truth Table)} \\
& \equiv (\neg p \vee \neg q) \vee (p \vee q) & \text{(De Morgan's 1st Law)} \\
& \equiv (\neg p \vee p) \vee (\neg q \vee q) & \text{(Associative \& Commutative Laws)} \\
& \equiv T \vee T & \text{(Negation Law)} \\
& \equiv T & \text{(Domination Law)}
\end{aligned}
$$

---
## CKC111: Chapter 2 - Algorithm Examples

### 1. Properties of Algorithms
An algorithm is defined as a finite set of precise instructions for performing a computation or for solving a problem.

> [!INFO] Key Properties of Algorithms
> A valid algorithm must possess the following properties:
> * **Input:** Values from a specified set are supplied to the algorithm.
> * **Output:** The algorithm produces solution values from a specified set.
> * **Definiteness:** Each step of the algorithm must be precisely defined (e.g., specific assignments or comparisons).
> * **Correctness:** The algorithm produces the correct output values for each set of input values.
> * **Finiteness:** The algorithm produces the output after a finite number of steps for any input.
> * **Effectiveness:** It must be possible to perform each step correctly and in a finite amount of time.
> * **Generality:** The algorithm should work for all problems of the desired form (e.g., finding the max of *any* finite sequence of integers).

---

### 2. Searching Algorithms

The general searching problem is to locate an element $x$ in a list of distinct elements $a_1, a_2, ..., a_n$, or determine that it is not in the list.

#### Linear Search
**Concept:** Locates an item by examining elements in the sequence one at a time, starting at the beginning.
* Compare $x$ with $a_1$, then $a_2$, etc.
* If a match is found, return the position. If the list is exhausted, return 0.

```pascal
procedure linear search(x: integer, a1, a2, ..., an: distinct integers)
    i := 1
    while (i <= n and x != ai)
        i := i + 1
    if i <= n then location := i
    else location := 0
    return location 
    {location is the subscript of the term that equals x, or is 0 if x is not found}
```

#### Binary Search
**Concept:** This algorithm requires the input list to be in **increasing order**. It works by repeatedly splitting the list into smaller sub-lists.
* It compares $x$ to the middle term $a_m$.
* The midpoint is calculated as: $m := \lfloor (i+j)/2 \rfloor$.
* If $x > a_m$, the search continues in the upper half; otherwise, it continues in the lower half.

```pascal
procedure binary search(x: integer, a1, a2, ..., an: increasing integers)
    i := 1 {i is the left endpoint of interval}
    j := n {j is right endpoint of interval}
    while i < j
        m := floor((i + j)/2)
        if x > am then i := m + 1
        else j := m
    if x = ai then location := i
    else location := 0
    return location
    {location is the subscript i of the term ai equal to x, or 0 if x is not found}
```

---

### 3. Sorting Algorithms

Sorting puts elements of a list into increasing order.

#### Bubble Sort
**Concept:** Makes multiple passes through a list. Every pair of elements found to be out of order ($a_j > a_{j+1}$) are interchanged.

```pascal
procedure bubblesort(a1, ..., an: real numbers with n >= 2)
    for i := 1 to n - 1
        for j := 1 to n - i
            if aj > aj+1 then interchange aj and aj+1
    {a1, ..., an is now in increasing order}
```

> [!EXAMPLE] Trace: Bubble Sort
> **Input List:** `{3, 2, 4, 1, 5}`.
> The trace below shows the state of the list after the completion of each pass.
>
> | Pass | List State | Changes Made |
> | :--- | :--- | :--- |
> | **Start** | `3, 2, 4, 1, 5` | Initial State |
> | **Pass 1** | `2, 3, 1, 4, 5` | 3 swapped with 2; 4 swapped with 1. 5 is now locked in place. |
> | **Pass 2** | `2, 1, 3, 4, 5` | 3 swapped with 1. 4 and 5 are locked. |
> | **Pass 3** | `1, 2, 3, 4, 5` | 2 swapped with 1. 3, 4, 5 are locked. |
> | **Pass 4** | `1, 2, 3, 4, 5` | No interchanges needed. Sorted. |

#### Insertion Sort
**Concept:** Begins with the 2nd element. It compares the 2nd element with the 1st and places it before if smaller. In each subsequent pass, the $j$-th element is put into its correct position among the first $j$ elements.

```pascal
procedure insertion sort(a1, ..., an: real numbers with n >= 2)
    for j := 2 to n
        i := 1
        while aj > ai
            i := i + 1
        m := aj
        for k := 0 to j - i - 1
            aj-k := aj-k-1
        ai := m
    {Now a1, ..., an is in increasing order}
```

> [!EXAMPLE] Trace: Insertion Sort
> **Input List:** `{3, 2, 4, 1, 5}`.
>
> | Step | List State | Explanation |
> | :--- | :--- | :--- |
> | **Start** | `3, 2, 4, 1, 5` | Initial State |
> | **i** | `2, 3, 4, 1, 5` | element `2` compared to `3`. $3>2$, so they swap. |
> | **ii** | `2, 3, 4, 1, 5` | element `4` compared to `2` and `3`. $4>3$, so it stays. |
> | **iii** | `1, 2, 3, 4, 5` | element `1` compared to `2, 3, 4`. $1<2$, so it moves to front. |
> | **iv** | `1, 2, 3, 4, 5` | element `5` compared to others. $5>4$, so it stays. |

---

### 4. Greedy Algorithms

**Concept:** Optimization problems (maximizing or minimizing a parameter) can often be solved using a greedy algorithm. This approach makes the **"best" choice at each step**.

#### Making Change Algorithm
This algorithm designs a solution for making change of $n$ cents using the least total number of coins.
* **Strategy:** At each step, choose the coin with the largest possible value that does not exceed the amount of change left.
* **Coins:** Quarters ($25\cent$), Dimes ($10\cent$), Nickels ($5\cent$), Pennies ($1\cent$).

> [!TIP] Example: 67 Cents
> Calculating change for $n=67$:
> 1.  $67 - 25 = 42$ (Use 1 Quarter)
> 2.  $42 - 25 = 17$ (Use 1 Quarter)
> 3.  $17 - 10 = 7$ (Use 1 Dime)
> 4.  $7 - 5 = 2$ (Use 1 Nickel)
> 5.  $2 - 1 = 1$ (Use 1 Penny)
> 6.  $1 - 1 = 0$ (Use 1 Penny)
> **Total:** 2 Quarters, 1 Dime, 1 Nickel, 2 Pennies.

```pascal
procedure change(c1, c2, ..., cr: values of coins, where c1 > c2 > ... > cr; n: positive integer)
    for i := 1 to r
        di := 0 [di counts the coins of denomination ci]
        while n >= ci
            di := di + 1 [add a coin of denomination ci]
            n := n - ci
    [di counts the coins ci]
```