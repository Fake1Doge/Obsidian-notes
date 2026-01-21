# Chapter 1: Logic and Proofs

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
## Chapter 2 - Algorithm Examples

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


---
# Chapter 3: Relations and Their Properties

## Chapter Overview
This chapter explores the fundamental concept of **Relations** in discrete mathematics. It covers how to define relations between sets, specific properties of relations (reflexive, symmetric, antisymmetric, transitive), and how to represent them using matrices and directed graphs (digraphs). The chapter concludes with Equivalence Relations and their connection to partitions.

---

## Section 1: Relations and Their Properties

### 1. Binary Relations
> [!INFO] Definition
> A **binary relation** $R$ from a set $A$ to a set $B$ is a subset $R \subseteq A \times B$.

* **Example:**
    * Let $A=\{0,1,2\}$ and $B=\{a,b\}$.
    * $R = \{(0,a), (0, b), (1,a), (2, b)\}$ is a relation from $A$ to $B$.
* **Representation:** Relations can be represented graphically or using a table.

### 2. Relations on a Set
A binary relation $R$ on a set $A$ is a subset of $A \times A$ (a relation from $A$ to $A$).

### 3. Properties of Relations
There are four primary properties used to classify relations on a set.

#### A. Reflexive
> [!NOTE] Definition
> $R$ is **reflexive** iff $(a,a) \in R$ for every element $a \in A$.
>
> **Symbolic Logic:**
> $$\forall x [x \in U \rightarrow (x,x) \in R]$$

* **Example:** On set $X=\{a,b\}$, $R=\{(a,a), (b,b)\}$ is reflexive.

#### B. Symmetric
> [!NOTE] Definition
> $R$ is **symmetric** iff $(b,a) \in R$ whenever $(a,b) \in R$ for all $(a,b) \in A$.
>
> **Symbolic Logic:**
> $$\forall x \forall y [(x,y) \in R \rightarrow (y,x) \in R]$$

* **Example:** On set $A=\{1,2,3\}$, $R=\{(1,2), (2,1), (3,2), (2,3)\}$ is symmetric.

#### C. Antisymmetric
> [!NOTE] Definition
> $R$ is **antisymmetric** if for all $a, b \in A$, if $(a,b) \in R$ and $(b,a) \in R$, then $a=b$.
>
> **Symbolic Logic:**
> $$\forall x \forall y [(x,y) \in R \wedge (y,x) \in R \rightarrow x=y]$$

* **Logic:** It means you never have $x$ related to $y$ AND $y$ related to $x$ unless $x$ and $y$ are the same element.
* **Example:** The relation $R = \{(x,y) \rightarrow N | x \le y\}$ is antisymmetric because $x \le y$ and $y \le x$ implies $x=y$.

#### D. Transitive
> [!NOTE] Definition
> $R$ is **transitive** if whenever $(a,b) \in R$ and $(b,c) \in R$, then $(a,c) \in R$.
>
> **Symbolic Logic:**
> $$\forall x \forall y \forall z [(x,y) \in R \wedge (y,z) \in R \rightarrow (x,z) \in R]$$

* **Example:** On set $A=\{1,2,3\}$, $R = \{(1,2), (2,3), (1,3)\}$ is transitive.

---

### 4. Combining Relations
Relations are sets, so they can be combined using standard set operations:
* Union: $R_1 \cup R_2$
* Intersection: $R_1 \cap R_2$
* Difference: $R_1 - R_2$ or $R_2 - R_1$

#### Composition
> [!IMPORTANT] Definition
> If $R_1$ is a relation from $A$ to $B$, and $R_2$ is a relation from $B$ to $C$, the **composition** $R_2 \circ R_1$ is a relation from $A$ to $C$.
>
> **Rule:** If $(x,y) \in R_1$ and $(y,z) \in R_2$, then $(x,z) \in R_2 \circ R_1$.

* **Visual Example:**
    * $R_1$ maps $b \to m$ and $b \to o$.
    * $R_2$ maps $m \to x$ and $m \to z$.
    * Result: $R_2 \circ R_1 = \{(b,x), (b,z)\}$.

---

## Section 2: Representing Relations

### 1. Using Matrices (Zero-One Matrix)
A relation between finite sets can be represented by a matrix $M_R = [m_{ij}]$.
* Assume $A = \{a_1, a_2, ..., a_m\}$ and $B = \{b_1, b_2, ..., b_n\}$.
* **Logic:**
    $$m_{ij} = \begin{cases} 1 & \text{if } (a_i, b_j) \in R \\ 0 & \text{if } (a_i, b_j) \notin R \end{cases}$$

#### Properties in Matrices
| Property | Matrix Condition |
| :--- | :--- |
| **Reflexive** | All elements on the main diagonal are **1**. |
| **Symmetric** | $m_{ij} = 1$ whenever $m_{ji} = 1$ (The matrix is symmetric across the diagonal). |
| **Antisymmetric** | If $i \neq j$, then $m_{ij}=0$ or $m_{ji}=0$ (You cannot have 1s in symmetric positions off the diagonal). |

### 2. Using Digraphs (Directed Graphs)
> [!INFO] Definition
> A **digraph** consists of a set $V$ of vertices (nodes) and a set $E$ of ordered pairs called edges (arcs).
> * Edge $(a,b)$: Arrow from $a$ (initial) to $b$ (terminal).
> * Edge $(a,a)$: A **loop**.

#### Properties in Digraphs
| Property | Visual Check |
| :--- | :--- |
| **Reflexive** | A **loop** must be present at **every** vertex in the graph. |
| **Symmetric** | If there is an arrow from $x \to y$, there must be an arrow from $y \to x$ (double arrows everywhere). |
| **Antisymmetric** | If there is an arrow from $x \to y$ ($x \neq y$), there is **no** arrow back from $y \to x$. |
| **Transitive** | If there are arrows $x \to y$ and $y \to z$, there must be a direct arrow $x \to z$ ("shortcuts" exist). |

---

## Section 3: Equivalence Relations

### 1. Definition
> [!IMPORTANT] Equivalence Relation
> A relation on a set $A$ is an **equivalence relation** if it satisfies three properties:
> 1.  **Reflexive** ($(a,a) \in R$)
> 2.  **Symmetric** (If $(a,b) \in R$, then $(b,a) \in R$)
> 3.  **Transitive** (If $(a,b) \in R$ and $(b,c) \in R$, then $(a,c) \in R$).

* **Terminology:** Two elements $a$ and $b$ related by an equivalence relation are called **equivalent**, denoted as $a \sim b$.

### 2. Equivalence Classes
Let $A$ be a set with an equivalence relation $\sim$.
* **Notation:** $[a]$ is the equivalence class of $a$.
* **Definition:** $[a] = \{x | x \sim a\}$.
* **Key Law:** For any $a, b \in A$, either $[a] = [b]$ (they are identical) or $[a] \cap [b] = \emptyset$ (they are disjoint).

### 3. Partitions
> [!INFO] Definition
> A **partition** of a set $S$ is a collection of disjoint nonempty subsets of $S$ that have $S$ as their union.

**Conditions for Partition $\{A_i\}$:**
1.  $A_i \neq \emptyset$ (Subsets are not empty).
2.  $A_i \cap A_j = \emptyset$ when $i \neq j$ (Subsets do not overlap).
3.  $\bigcup_{i \in I} A_i = S$ (Ideally covers the whole set).

---

## Summary
* **Binary Relations** relate elements between sets or within a set.
* **Key Properties:**
    * **Reflexive:** Every element relates to itself.
    * **Symmetric:** Relations are bidirectional.
    * **Antisymmetric:** No bidirectional relations (except loops).
    * **Transitive:** Relation "chains" imply direct links.
* **Representations:**
    * **Matrices:** Good for computational checks (diagonal checks, symmetry).
    * **Digraphs:** Good for visual checks (loops, arrows).
* **Equivalence Relations:** Must be Reflexive, Symmetric, and Transitive. These relations partition a set into disjoint Equivalence Classes.

---
