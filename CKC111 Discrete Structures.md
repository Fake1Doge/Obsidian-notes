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
# Chapter 4: Graphs

## 4.1 Graphs and Graph Terminology

### Basic Definitions
> [!INFO] Definition: Graph
> A **graph** $G=(V,E)$ consists of a nonempty set $V$ of **vertices** (or nodes) and a set $E$ of **edges**. Each edge has either one or two vertices associated with it, called its **endpoints**.

* **Undirected Graph:** Edges are unordered pairs. An edge connects its endpoints.
* **Directed Graph (Digraph):** $G=(V,E)$ where edges are ordered pairs. The directed edge $(u,v)$ starts at $u$ and ends at $v$.

### Terminology & Classifications

> [!NOTE] Key Terms
> * **Adjacent (Neighbors):** Two vertices $u, v$ in an undirected graph are adjacent if there is an edge connecting them.
> * **Incident:** An edge is incident with the vertices it connects.
> * **Loop:** An edge that connects a vertex to itself.
> * **Multiplicity:** The number of edges connecting the same pair of vertices.

#### Types of Graphs Summary
| Type | Edges | Multiple Edges? | Loops? |
| :--- | :--- | :--- | :--- |
| **Simple graph** | Undirected | No | No |
| **Multigraph** | Undirected | Yes | No |
| **Pseudograph** | Undirected | Yes | Yes |
| **Simple directed graph** | Directed | No | No |
| **Directed multigraph** | Directed | Yes | Yes |
| **Mixed graph** | Directed & Undirected | Yes | Yes |


### Degrees and Neighborhoods
* **Neighborhood ($N(v)$):** The set of all neighbors of a vertex $v$.
* **Degree ($deg(v)$):** The number of edges incident with vertex $v$.

> [!WARNING] Important Rule for Loops
> A loop at a vertex contributes **two** to the degree of that vertex in an undirected graph.

#### In-Degree and Out-Degree (Directed Graphs)
* **In-degree ($deg^{-}(v)$):** Number of edges terminating at $v$.
* **Out-degree ($deg^{+}(v)$):** Number of edges initiating from $v$.
* *Note:* A loop contributes 1 to both in-degree and out-degree.

> [!TIP] Theorem 3: The Handshaking Theorem for Digraphs
> Let $G=(V,E)$ be a graph with directed edges.
> $$|E| = \sum_{v \in V} deg^{-}(v) = \sum_{v \in V} deg^{+}(v)$$
> This means the sum of in-degrees equals the sum of out-degrees, which equals the total number of edges.

### Special Types of Graphs
1.  **Complete Graph ($K_n$):** A simple graph with exactly one edge between each pair of distinct vertices.
2.  **Cycle ($C_n, n \ge 3$):** Contains vertices $v_1, ..., v_n$ and edges $\{v_1, v_2\}, ..., \{v_n, v_1\}$.
3.  **Wheel ($W_n$):** Obtained by adding a vertex to $C_n$ and connecting it to all vertices in $C_n$.
4.  **Bipartite Graph:** Vertex set $V$ can be partitioned into disjoint sets $V_1$ and $V_2$ such that every edge connects a vertex in $V_1$ to one in $V_2$.
    * *Coloring Test:* A graph is bipartite if vertices can be colored with two colors such that no two adjacent vertices have the same color.
5.  **Complete Bipartite Graph ($K_{m,n}$):** Every vertex in set $V_1$ (size $m$) is connected to every vertex in set $V_2$ (size $n$).

### New Graphs from Old
* **Union ($G_1 \cup G_2$):** Vertex set is $V_1 \cup V_2$ and edge set is $E_1 \cup E_2$.

---

## 4.2 Representing Graphs

### 1. Adjacency Lists
Used for graphs with no multiple edges. Specifies vertices adjacent to each vertex.
* **Best for:** Sparse graphs (few edges relative to possible edges).

### 2. Adjacency Matrices
Suppose $|V|=n$ and vertices are listed $v_1, ..., v_n$. The adjacency matrix $A_G = [a_{ij}]$ is an $n \times n$ matrix.

* **Simple Graphs:** $a_{ij} = 1$ if adjacent, $0$ otherwise.
    * Matrix is **symmetric** ($a_{ij} = a_{ji}$).
    * Diagonal entries are always 0 (no loops).
* **Multigraphs/Pseudographs:** $a_{ij}$ equals the **number of edges** connecting the vertices. Loops are represented by a 1 at $(i,i)$.
* **Best for:** Dense graphs.

### 3. Incidence Matrices
Let $G=(V,E)$ with vertices $v_1...v_n$ and edges $e_1...e_m$. The matrix $M = [m_{ij}]$ is $n \times m$.
$$m_{ij} = \begin{cases} 
1 & \text{when edge } e_j \text{ is incident with } v_i \\
0 & \text{otherwise}
\end{cases}$$
.

---

## 4.3 Connectivity

### Paths and Circuits
* **Path:** A sequence of edges traveling from vertex to vertex.
* **Circuit:** A path that begins and ends at the same vertex and has length $>0$.
* **Simple Path/Circuit:** Does not contain the same edge more than once.

### Connectedness
* **Undirected Graphs:**
    * **Connected:** There is a path between *every* pair of vertices.
    * **Connected Components:** Disjoint connected subgraphs that form the union of a disconnected graph.

* **Directed Graphs:**
    > [!NOTE] Strong vs. Weak
    > * **Strongly Connected:** There is a directed path from $a$ to $b$ **AND** from $b$ to $a$ for all vertices.
    > * **Weakly Connected:** There is a path between every two vertices in the **underlying undirected graph** (ignoring direction).

* **Strongly Connected Components:** Maximal strongly connected subgraphs.

---

## 4.4 Shortest-Path Problems

### Dijkstra's Algorithm
Calculates the minimum traveling cost from a source node to a destination node (or all other nodes) in a weighted graph.

#### Example Problem Trace
**Given:** A weighted graph with Source Vertex = **0**.
(Refer to graph visual in slides containing vertices 0-8 with weighted edges).

**Calculated Minimum Distances from Node 0:**

| Destination Vertex | Path Taken | Total Cost (Distance) |
| :--- | :--- | :--- |
| **1** | $0 \to 1$ | **4** |
| **2** | $0 \to 1 \to 2$ ($4+8$) | **12** |
| **3** | $0 \to 1 \to 2 \to 3$ ($4+8+7$) | **19** |
| **4** | $0 \to 7 \to 6 \to 5 \to 4$ ($8+1+2+10$) | **21** |
| **5** | $0 \to 7 \to 6 \to 5$ ($8+1+2$) | **11** |
| **6** | $0 \to 7 \to 6$ ($8+1$) | **9** |
| **7** | $0 \to 7$ | **8** |
| **8** | $0 \to 1 \to 2 \to 8$ ($4+8+2$) | **14** |

**Final Output:** `0 4 12 19 21 11 9 8 14`

---
# Chapter 5: Trees & Spanning Trees

## Chapter Overview
This chapter explores the properties and applications of **Trees** in discrete structures. It covers the fundamental definitions of trees and forests, the structure of rooted trees (including $m$-ary and binary trees), and methods for traversing these structures (Preorder, Inorder, Postorder). Furthermore, it examines **Spanning Trees** (Section 9.3), detailing how to convert connected graphs into trees using Depth-First Search (DFS) and Breadth-First Search (BFS).

---

## 5.1 Introduction to Trees

### Basic Definitions
> [!INFO] Definition: Tree
> A **tree** is a connected undirected graph with **no simple circuits**.

> [!INFO] Definition: Forest
> A **forest** is a graph that has **no simple circuit** but is **not connected**. Each connected component in a forest is a tree.

* **Tree Property:** A graph is a tree if and only if there is a unique simple path between any two of its vertices.

### Rooted Trees
A **rooted tree** is a tree where one vertex is designated as the **root**, and every edge is directed away from the root.

#### Terminology
Given a vertex $h$ in a tree rooted at $g$:
* **Parent:** The unique vertex $u$ such that there is a directed edge from $u$ to $v$ (e.g., $g$ is the parent of $h$).
* **Child:** If $u$ is the parent of $v$, then $v$ is the child of $u$ (e.g., $k$ is a child of $h$).
* **Siblings:** Vertices with the same parent (e.g., $i$ and $j$ are siblings of $h$).
* **Ancestors:** All vertices in the path from the root to the vertex, excluding the vertex itself (e.g., $g$ is an ancestor of $h$).
* **Descendants:** All vertices that have the vertex as an ancestor (e.g., $k$ is a descendant of $h$).
* **Leaf:** A vertex with no children (e.g., $k, i, l, m$).
* **Internal Vertex:** A vertex that has children (e.g., $h, g, j$).

### $m$-ary Trees
* **$m$-ary Tree:** A rooted tree is called an $m$-ary tree if every internal vertex has **no more than $m$ children**.
* **Full $m$-ary Tree:** A tree where every internal vertex has **exactly $m$ children**.
* **Binary Tree:** An $m$-ary tree where $m=2$.

> [!EXAMPLE] Identifying $m$-ary Trees
> * If every internal vertex has 2 children $\rightarrow$ **Full Binary Tree**.
> * If every internal vertex has 3 children $\rightarrow$ **Full 3-ary Tree**.
> * If some vertices have 2 children and others have 3 $\rightarrow$ **Not a full $m$-ary tree** for any $m$.

### Ordered Rooted Trees
An ordered rooted tree is one where the children of each internal vertex are ordered (drawn left to right).

* **Binary Tree Structure:**
    * **Left Child:** The first child.
    * **Right Child:** The second child.
    * **Left Subtree:** The tree rooted at the left child.
    * **Right Subtree:** The tree rooted at the right child.

### Level and Height
* **Level:** The level of a vertex $v$ is the length of the unique path from the root to $v$. The root is at **Level 0**.
* **Height:** The maximum of the levels of the vertices in the tree.

---

## 5.2 Tree Traversal

Procedures for systematically visiting every vertex of an ordered tree are called traversals.

### 1. Preorder Traversal
**Logic:** Visit Root $\rightarrow$ Visit Subtrees Left to Right.
1.  Visit the root $r$.
2.  Traverse $T_1$ in preorder.
3.  Traverse $T_2$ in preorder... until $T_n$.

> [!NOTE] Algorithm
> ```
> list r
> for each child c of r from left to right
>    preorder(T(c))
> ```

### 2. Inorder Traversal
**Logic:** Visit Leftmost Subtree $\rightarrow$ Visit Root $\rightarrow$ Visit Remaining Subtrees.
*Note: Usually used for binary trees (Left Child $\rightarrow$ Root $\rightarrow$ Right Child).*
1.  Traverse $T_1$ in inorder.
2.  Visit the root $r$.
3.  Traverse $T_2$ in inorder... until $T_n$.

> [!NOTE] Algorithm
> ```
> if r is a leaf then list r
> else
>    l := first child of r
>    inorder(T(l))
>    list r
>    for each child c of r (except l)
>       inorder(T(c))
> ```

### 3. Postorder Traversal
**Logic:** Visit Subtrees Left to Right $\rightarrow$ Visit Root.
1.  Traverse $T_1$ in postorder.
2.  Traverse $T_2$ in postorder... until $T_n$.
3.  Visit the root $r$.

> [!NOTE] Algorithm
> ```
> for each child c of r from left to right
>    postorder(T(c))
> list r
> ```

---

## 9.3 Spanning Trees

### Definition & Theorem
> [!INFO] Definition: Spanning Tree
> Let $G$ be a simple graph. A **spanning tree** of $G$ is a subgraph of $G$ that is a tree containing **every vertex** of $G$.

> [!IMPORTANT] Theorem
> A simple graph is connected **if and only if** it has a spanning tree.

**Method of Construction:**
To create a spanning tree from a connected graph with circuits:
1.  Find a simple circuit.
2.  Remove an edge from that circuit (ensuring the graph stays connected).
3.  Repeat until no simple circuits remain.

### Depth-First Search (DFS)
DFS builds a spanning tree by arbitrarily choosing a root and forming a path by successively adding vertices.

**Algorithm Steps:**
1.  Start at an arbitrary root.
2.  Explore as deep as possible along each branch before backtracking.
3.  If a vertex $w$ is adjacent to $v$ and not in the tree, add edge $\{v,w\}$ and visit $w$.
4.  If stuck (no unvisited neighbors), backtrack to the previous vertex.

* **Tree Edges:** The edges selected by the DFS algorithm.
* **Back Edges:** Edges in the original graph connecting a vertex to an ancestor or descendant (not part of the spanning tree).

### Breadth-First Search (BFS)
BFS builds a spanning tree by processing vertices level by level.

**Algorithm Steps:**
1.  Choose a root ($v_1$). Add edges to all neighbors of the root (Level 1).
2.  For each vertex at Level 1, add edges to their unvisited neighbors (Level 2).
3.  Continue until all vertices are added.
4.  **Data Structure:** Uses a **Queue** (First In, First Out).

### Directed Graphs
DFS and BFS can run on directed graphs, but the result is not necessarily a spanning tree; it may be a **spanning forest** (a collection of disjoint trees).

---

## Summary Table: BFS vs DFS

| Feature | Breadth-First Search (BFS) | Depth-First Search (DFS) |
| :--- | :--- | :--- |
| **Data Structure** | **Queue** is used. | **Stack** (or recursion) is used. |
| **Technique** | Vertex-based; finds shortest path. | Edge-based; explores path to end. |
| **Traversal** | Explores all nodes at same level before moving deep. | Explores nodes as far as possible (deep) before backtracking. |
| **Backtracking** | Does **not** use backtracking. | Uses **backtracking** to traverse unvisited nodes. |
| **Edges** | Finds path with minimum number of edges (shortest path). | May produce path with more edges. |
| **Optimality** | Optimal for vertices closer to source. | Optimal for solutions away from source. |
| **Speed** | Slower than DFS. | Faster than BFS. |
| **Decision Trees** | Not suitable (explores neighbors first). | Suitable (explores paths based on decisions). |
| **Memory** | Less memory efficient (requires more). | **Memory efficient** (requires less). |

---
# Week 9 week 10

## 1. Sets and Logic
> [!INFO] Definition
> A **set** is an unordered collection of distinct objects.
> * **Notation:** $a \in A$ means element $a$ is in set $A$.
> * **Roster Method:** $V = \{a, e, i, o, u\}$
> * **Set-Builder:** $O = \{x \mid x \text{ is an odd positive integer } < 10\}$

### Key Concepts
* **Subset ($A \subseteq B$):** Every element of $A$ is also in $B$.
* **Proper Subset ($A \subset B$):** $A \subseteq B$ but $A \neq B$.
* **Power Set ($P(A)$):** The set of all subsets of $A$. If $|A| = n$, then $|P(A)| = 2^n$.
* **Cartesian Product ($A \times B$):** Set of ordered pairs $(a,b)$ where $a \in A$ and $b \in B$.
    * **Cardinality:** $|A \times B| = |A| \cdot |B|$.

### Set Operations
* **Union ($A \cup B$):** $\{x \mid x \in A \lor x \in B\}$
* **Intersection ($A \cap B$):** $\{x \mid x \in A \land x \in B\}$
* **Difference ($A - B$):** $\{x \mid x \in A \land x \notin B\}$
* **Complement ($\overline{A}$):** $\{x \in U \mid x \notin A\}$

> [!IMPORTANT] Inclusion-Exclusion Principle
> For two sets $A$ and $B$:
> $$|A \cup B| = |A| + |B| - |A \cap B|$$

### Set Identities
| Identity | Law |
| :--- | :--- |
| $A \cap U = A$ | **Identity Laws** |
| $A \cup \emptyset = A$ | **Identity Laws** |
| $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ | **Distributive Laws** |
| $\overline{A \cap B} = \overline{A} \cup \overline{B}$ | **De Morgan's Laws** |

---

## 2. Functions
> [!INFO] Definition
> A function $f: A \to B$ assigns exactly one element of $B$ to each element of $A$.
> * **Domain:** Set $A$.
> * **Codomain:** Set $B$.
> * **Range (Image):** The set of actual values mapped to in $B$.

### Types of Functions
* **Injective (One-to-One):** If $f(a) = f(b)$, then $a = b$. (Distinct elements map to distinct images).
* **Surjective (Onto):** Every element in codomain $B$ is the image of some element in $A$.
* **Bijective:** Both injective and surjective. (Invertible).

### Inverse Function Example
**Problem:** Find the inverse of $f(x) = 5x + 2$.
**Step-by-Step Solution:**
1.  Let $y = 5x + 2$.
2.  Swap $x$ and $y$ (conceptually) or solve for $x$ in terms of $y$.
3.  $y - 2 = 5x$
4.  $x = \frac{y - 2}{5}$
5.  **Result:** $f^{-1}(y) = \frac{y - 2}{5}$

### Floor and Ceiling Functions
* **Floor ($\lfloor x \rfloor$):** Largest integer $\le x$.
    * *Example:* $\lfloor 0.5 \rfloor = 0$, $\lfloor -1.5 \rfloor = -2$.
* **Ceiling ($\lceil x \rceil$):** Smallest integer $\ge x$.
    * *Example:* $\lceil 0.5 \rceil = 1$, $\lceil -1.5 \rceil = -1$.

---

## 3. Sequences and Summations
> [!INFO] Sequence
> An ordered list of elements, often defined by a formula $a_n$ or a recurrence relation.

### Recurrence Relations
**Definition:** An equation expressing $a_n$ in terms of previous terms.

#### Example: Arithmetic Progression
**Given:** Recurrence relation $a_n = a_{n-1} + 3$ for $n = 1, 2, 3, \dots$ with initial term $a_1 = 2$.
**Task:** Find $a_{12}$ and $a_{50}$.

**Step-by-Step Solution:**
1.  **Identify the pattern:**
    * $a_1 = 2$
    * $a_2 = a_1 + 3 = 2 + 3 = 5$
    * $a_3 = a_2 + 3 = 5 + 3 = 8$
    * This is an Arithmetic Progression with common difference $d = 3$.
2.  **Find Closed Formula:**
    * Formula: $a_n = a_1 + (n-1)d$
    * Substitute values: $a_n = 2 + 3(n-1)$
3.  **Solve for $a_{12}$:**
    $$a_{12} = 2 + 3(12 - 1) = 2 + 3(11) = 2 + 33 = \mathbf{35}$$
4.  **Solve for $a_{50}$:**
    $$a_{50} = 2 + 3(50 - 1) = 2 + 3(49) = 2 + 147 = \mathbf{149}$$

### Summations
**Notation:** $\sum_{j=m}^{n} a_j$ represents the sum of terms from index $m$ to $n$.

**Example:** Evaluate $\sum_{j=1}^{5} j^2$.
* **Expansion:** $1^2 + 2^2 + 3^2 + 4^2 + 5^2$
* **Calculation:** $1 + 4 + 9 + 16 + 25$
* **Result:** **55**

---

## 4. Cardinality of Sets
* **Finite Set:** Has a specific number of elements (e.g., $n$).
* **Countably Infinite:** Can be put in one-to-one correspondence with Positive Integers ($\mathbb{Z}^+$).
    * *Examples:* Integers ($\mathbb{Z}$), Rationals ($\mathbb{Q}$), Odd positive integers.
    * **Cardinality:** $\aleph_0$ (Aleph-null).
* **Uncountable:** Cannot be listed in a sequence.
    * *Examples:* Real numbers ($\mathbb{R}$), Interval $[0, 1]$.
    * **Cardinality:** $> \aleph_0$.

> [!WARNING] Important Rule
> * Any subset of a countable set is **countable**.
> * Any superset of an uncountable set is **uncountable**.

---

## 5. Matrices
> [!INFO] Definition
> A rectangular array of numbers. A matrix with $m$ rows and $n$ columns has size **$m \times n$**.

### Matrix Equality Example
**Problem:** Determine values of $x, y, z$ if Matrix $P = Q$.
$$P = \begin{bmatrix} x & 7 \\ 5-3z & \dots \end{bmatrix}, \quad Q = \begin{bmatrix} 5 & y+1 \\ 2z & \dots \end{bmatrix}$$
*(Note: Full matrix content inferred from solved example context)*

**Condition:** Two matrices are equal if **every corresponding element** is equal.

**Step-by-Step Solution:**
1.  **Find $x$:**
    * Position (1,1): $x = 5$.
2.  **Find $y$:**
    * Position (1,2): $7 = y + 1$
    * $y = 7 - 1$
    * $y = \mathbf{6}$
3.  **Find $z$:**
    * Position (2,1): $5 - 3z = 2z$
    * Move $z$ terms to one side: $5 = 2z + 3z$
    * $5 = 5z$
    * $z = \mathbf{1}$

### Matrix Types
* **Square Matrix:** Rows = Columns ($n \times n$).
* **Row Matrix:** Only one row ($1 \times n$).
* **Column Matrix:** Only one column ($m \times 1$).
* **Identity Matrix ($I_n$):** Square matrix with 1s on the diagonal and 0s elsewhere.
    $$I_3 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

### Matrix Operations
* **Addition:** Add corresponding elements. (Matrices must be same size).
* **Multiplication ($A \times B$):**
    * Valid only if columns of $A$ = rows of $B$.
    * Element $c_{ij}$ is the dot product of Row $i$ of $A$ and Column $j$ of $B$.

---
# Mathematical & Strong Induction

## 🪜 The Principle of Mathematical Induction

### The Analogy: Climbing an Infinite Ladder
Mathematical induction is often visualized as climbing a ladder:
1.  **Basis:** You can reach the first rung (Step 1).
2.  **Inductive Step:** If you can reach rung $k$, you can reach rung $k+1$.
3.  **Conclusion:** Therefore, you can reach *any* rung on the ladder.

### Formal Logic
To prove that a propositional function $P(n)$ is true for all positive integers $n$:

> [!IMPORTANT] The Two-Step Method
> 1.  **Basis Step:** Verify that $P(1)$ is true.
> 2.  **Inductive Step:** Show that the conditional statement $P(k) \rightarrow P(k+1)$ is true for all positive integers $k$.

**Rule of Inference:**
$$[P(1) \wedge \forall k(P(k) \rightarrow P(k+1))] \rightarrow \forall n P(n)$$

---

## 📝 Proof Guidelines & Examples

### General Structure of a Proof
1.  **Define $P(n)$**: Clearly state the proposition.
2.  **Basis Step**: Show $P(b)$ is true (usually $b=1$).
3.  **Inductive Step**:
    * **State Hypothesis (IH)**: "Assume $P(k)$ is true for an arbitrary integer $k$."
    * **Goal**: "We must show that $P(k+1)$ is true."
    * **Derivation**: Use algebra and the IH to prove the goal.
4.  **Conclusion**: State that $P(n)$ is true for all $n$.

### Example 1: Summation Formula
**Prove:** $1+2+\dots+n = \frac{n(n+1)}{2}$ for all positive integers $n$.

> [!EXAMPLE] Solution
> **Let $P(n)$ be:** $1+2+\dots+n = \frac{n(n+1)}{2}$
>
> **1. Basis Step ($n=1$):**
> $$\text{LHS} = 1, \quad \text{RHS} = \frac{1(1+1)}{2} = 1$$
> Since LHS = RHS, $P(1)$ is true.
>
> **2. Inductive Step:**
> * **Hypothesis:** Assume $1+2+\dots+k = \frac{k(k+1)}{2}$.
> * **To Prove ($P(k+1)$):** $1+2+\dots+k+(k+1) = \frac{(k+1)(k+2)}{2}$.
>
> **Derivation:**
> $$ \begin{aligned}
> \text{LHS} &= [1+2+\dots+k] + (k+1) \\
> &= \frac{k(k+1)}{2} + (k+1) \quad \text{(Substitute IH)} \\
> &= \frac{k(k+1) + 2(k+1)}{2} \quad \text{(Common denominator)} \\
> &= \frac{(k+1)(k+2)}{2} \quad \text{(Factor out } k+1)
> \end{aligned} $$
> **Conclusion:** Since LHS matches the target formula, $P(n)$ is true for all positive integers.

### Example 2: Sum of Odd Integers
**Prove:** $1+3+5+\dots+(2n-1) = n^2$.

> [!EXAMPLE] Solution
> **1. Basis Step:** $1 = 1^2$. True.
>
> **2. Inductive Step:**
> * **IH:** Assume $1+3+\dots+(2k-1) = k^2$.
> * **To Prove:** $[1+3+\dots+(2k-1)] + (2k+1) = (k+1)^2$.
>
> **Derivation:**
> $$ \begin{aligned}
> \text{LHS} &= k^2 + (2k+1) \quad \text{(Using IH)} \\
> &= (k+1)^2 \quad \text{(Factoring)}
> \end{aligned} $$
> **Conclusion:** Proven.

### Example 3: Inequality
**Prove:** $2^n < n!$ for every integer $n \ge 4$.

> [!WARNING] Watch the Base Case
> Here, $n$ starts at 4, not 1.
>
> **1. Basis Step ($n=4$):**
> $2^4 = 16$ and $4! = 24$. Since $16 < 24$, $P(4)$ is true.
>
> **2. Inductive Step:**
> * **IH:** Assume $2^k < k!$ for $k \ge 4$.
> * **To Prove:** $2^{k+1} < (k+1)!$.
>
> **Derivation:**
> $$ \begin{aligned}
> 2^{k+1} &= 2 \cdot 2^k \\
> &< 2 \cdot k! \quad \text{(Using IH)} \\
> &< (k+1) \cdot k! \quad \text{(Since } 2 < k+1 \text{ for } k \ge 4) \\
> &= (k+1)!
> \end{aligned} $$
> **Conclusion:** $P(n)$ is true for $n \ge 4$.

### Example 4: Divisibility
**Prove:** $n^3 - n$ is divisible by 3.

> [!EXAMPLE] Solution
> **1. Basis Step:** $1^3 - 1 = 0$, which is divisible by 3. True.
>
> **2. Inductive Step:**
> * **IH:** Assume $k^3 - k$ is divisible by 3.
> * **To Prove:** $(k+1)^3 - (k+1)$ is divisible by 3.
>
> **Derivation:**
> Expand $(k+1)^3 - (k+1)$:
> $$ \begin{aligned}
> &= (k^3 + 3k^2 + 3k + 1) - k - 1 \\
> &= k^3 + 3k^2 + 3k - k \\
> &= (k^3 - k) + 3(k^2 + k) \quad \text{(Rearranging)}
> \end{aligned} $$
> * Term 1: $(k^3 - k)$ is divisible by 3 (by **IH**).
> * Term 2: $3(k^2 + k)$ is clearly a multiple of 3.
> * Therefore, the sum is divisible by 3.

---

## 💪 Strong Induction

Strong induction is used when proving $P(k+1)$ requires assuming the truth of **multiple** preceding steps, not just $P(k)$.

### Principle
* **Basis Step:** Verify $P(1)$ is true.
* **Inductive Step:** Show that $[P(1) \wedge P(2) \wedge \dots \wedge P(k)] \rightarrow P(k+1)$.
* **Hypothesis:** Assume $P(j)$ is true for all $1 \le j \le k$.

### Example 5: Fundamental Theorem of Arithmetic
**Theorem:** Every integer $n > 1$ can be written as a product of primes.

> [!NOTE] Logic
> * **Basis ($n=2$):** 2 is prime. True.
> * **Inductive Step:** Assume $P(j)$ is true for $2 \le j \le k$.
> * **Consider $k+1$:**
>     * Case 1: $k+1$ is prime. Done.
>     * Case 2: $k+1$ is composite. It implies $k+1 = a \cdot b$ where $2 \le a, b < k+1$. By the **Strong IH**, $a$ and $b$ are products of primes. Thus, their product $a \cdot b$ is also a product of primes.

### Example 6: Postage Stamps
**Theorem:** Every postage of 12 cents or more can be formed using 4-cent and 5-cent stamps.

> [!EXAMPLE] Strong Induction Proof
> **1. Basis Step:**
> We check 4 consecutive cases (since the smallest stamp is 4):
> * $P(12): 4+4+4$
> * $P(13): 4+4+5$
> * $P(14): 4+5+5$
> * $P(15): 5+5+5$
>
> **2. Inductive Step:**
> * **IH:** Assume $P(j)$ is true for $12 \le j \le k$ (where $k \ge 15$).
> * **To Prove:** $P(k+1)$.
> * **Strategy:**
>     * We want to form $k+1$.
>     * Look back at $k-3$. Since we verified up to 15, and $k \ge 15$, $k-3 \ge 12$.
>     * By IH, $P(k-3)$ is true.
>     * Add one **4-cent stamp** to the solution for $k-3$.
>     * $(k-3) + 4 = k+1$.
> * **Conclusion:** $P(n)$ is true for all $n \ge 12$.

---

## 🧠 Review Question: Sum of Squares
**Formula:** $1^2 + 2^2 + \dots + n^2 = \frac{n(n+1)(2n+1)}{6}$

> [!TIP] Proof of Inductive Step
> **Goal:** Show LHS becomes $\frac{(k+1)(k+2)(2k+3)}{6}$.
>
> $$ \begin{aligned}
> \text{LHS} &= \sum_{i=1}^{k} i^2 + (k+1)^2 \\
> &= \frac{k(k+1)(2k+1)}{6} + (k+1)^2 \quad \text{(IH)} \\
> &= \frac{k(k+1)(2k+1) + 6(k+1)^2}{6} \\
> &= \frac{(k+1)[k(2k+1) + 6(k+1)]}{6} \quad \text{(Factor out } k+1) \\
> &= \frac{(k+1)(2k^2 + k + 6k + 6)}{6} \\
> &= \frac{(k+1)(2k^2 + 7k + 6)}{6} \\
> &= \frac{(k+1)(k+2)(2k+3)}{6} \quad \text{(Factor quadratic)}
> \end{aligned} $$
> Matches RHS. Proven.