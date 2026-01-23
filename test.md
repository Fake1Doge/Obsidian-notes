# CKC111 Discrete Structures - Comprehensive Study Notes

> [!INFO] Course Overview
> These notes cover the fundamental concepts of discrete structures, including logic, proofs, algorithms, relations, graphs, trees, counting, and probability.

---

# Chapter 1: Logic and Proofs

## 1. Propositional Logic

### Definitions
> [!INFO] Proposition
> A **proposition** is a declarative sentence that is either true ($T$) or false ($F$), but not both.
> * **Variables:** Denoted by $p, q, r, \dots$
> * **Not Propositions:** Commands, questions, or statements with variable truth values (e.g., "$x+1=2$").

### Logical Connectives
Compound propositions are formed using operators. The order of precedence is:
1.  $\neg$ (Negation)
2.  $\land$ (Conjunction)
3.  $\lor$ (Disjunction)
4.  $\to$ (Implication)
5.  $\leftrightarrow$ (Biconditional)

> [!WARNING] Implication Rule ($p \to q$)
> The statement "If $p$, then $q$" is **FALSE** only when the hypothesis $p$ is True and the conclusion $q$ is False. In all other cases, it is True.

### Truth Tables
| $p$ | $q$ | $\neg p$ | $p \land q$ (AND) | $p \lor q$ (OR) | $p \oplus q$ (XOR) | $p \to q$ (If...then) | $p \leftrightarrow q$ (If and only if) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| T | T | F | T | T | F | T | T |
| T | F | F | F | T | T | **F** | F |
| F | T | T | F | T | T | T | F |
| F | F | T | F | F | F | T | T |

## 2. Logical Equivalences

> [!INFO] Key Concepts
> * **Tautology:** A statement that is always true (e.g., $p \lor \neg p$).
> * **Contradiction:** A statement that is always false (e.g., $p \land \neg p$).
> * **Logical Equivalence ($p \equiv q$):** When $p \leftrightarrow q$ is a tautology.

### Fundamental Laws
> [!TIP] De Morgan's Laws
> Useful for negating compound statements:
> 1.  $\neg(p \land q) \equiv \neg p \lor \neg q$
> 2.  $\neg(p \lor q) \equiv \neg p \land \neg q$

**Conditional Equivalences:**
*   $p \to q \equiv \neg p \lor q$
*   $p \to q \equiv \neg q \to \neg p$ (Contrapositive)

> [!EXAMPLE] Proof: De Morgan & Distributive
> **Show:** $\neg(p \vee (\neg p \wedge q)) \equiv \neg p \wedge \neg q$
> 
> 1.  $\neg p \wedge \neg(\neg p \wedge q)$ (De Morgan)
> 2.  $\neg p \wedge (\neg(\neg p) \vee \neg q)$ (De Morgan)
> 3.  $\neg p \wedge (p \vee \neg q)$ (Double Negation)
> 4.  $(\neg p \wedge p) \vee (\neg p \wedge \neg q)$ (Distributive)
> 5.  $F \vee (\neg p \wedge \neg q)$ (Negation Law)
> 6.  $\neg p \wedge \neg q$ (Identity Law)

---

# Chapter 2: Algorithms

## 1. Properties
> [!INFO] Algorithm Definition
> A finite set of precise instructions for solving a problem.
> **Key Properties:** Input, Output, Definiteness, Correctness, Finiteness, Effectiveness, Generality.

## 2. Searching Algorithms

### Linear Search
Scans the list sequentially.
```pascal
procedure linear search(x: integer, a1...an: distinct integers)
    i := 1
    while (i <= n and x != ai)
        i := i + 1
    if i <= n then location := i
    else location := 0
    return location
```

### Binary Search
Requires a **sorted** list. Splits the list in half repeatedly.
```pascal
procedure binary search(x: integer, a1...an: increasing integers)
    i := 1; j := n
    while i < j
        m := floor((i + j)/2)
        if x > am then i := m + 1
        else j := m
    if x = ai then location := i
    else location := 0
    return location
```

## 3. Sorting Algorithms

### Bubble Sort
Swaps adjacent elements if they are in the wrong order.
```pascal
procedure bubblesort(a1...an: real numbers)
    for i := 1 to n - 1
        for j := 1 to n - i
            if aj > aj+1 then interchange aj and aj+1
```

> [!EXAMPLE] Trace: Bubble Sort
> **Input:** `{3, 2, 4, 1, 5}`
> 1.  **Pass 1:** `{2, 3, 1, 4, 5}` (Swapped 3-2, 4-1)
> 2.  **Pass 2:** `{2, 1, 3, 4, 5}` (Swapped 3-1)
> 3.  **Pass 3:** `{1, 2, 3, 4, 5}` (Swapped 2-1)
> 4.  **Pass 4:** `{1, 2, 3, 4, 5}` (Sorted)

### Insertion Sort
Builds the sorted array one item at a time by inserting elements into their correct position.
```pascal
procedure insertion sort(a1...an: real numbers)
    for j := 2 to n
        i := 1
        while aj > ai
            i := i + 1
        m := aj
        // shift elements
        for k := 0 to j - i - 1
            aj-k := aj-k-1
        ai := m
```

## 4. Greedy Algorithms
> [!TIP] Strategy
> Make the "best" choice at each specific step (local optimum) with the hope of finding the global optimum.

**Example: Making Change**
To use the fewest coins, always select the largest denomination coin less than the remaining amount.

---

# Chapter 3: Relations

## 1. Binary Relations
> [!INFO] Definition
> A binary relation $R$ from set $A$ to set $B$ is a subset $R \subseteq A \times B$. If $A=B$, it is a relation **on** set $A$.

### Properties of Relations on a Set
| Property | Definition | Matrix Condition | Digraph Condition |
| :--- | :--- | :--- | :--- |
| **Reflexive** | $\forall a ((a,a) \in R)$ | Main diagonal is all 1s | Loop at every vertex |
| **Symmetric** | If $(a,b) \in R \to (b,a) \in R$ | $m_{ij} = m_{ji}$ | Double arrows for every edge |
| **Antisymmetric** | If $(a,b) \in R \land (b,a) \in R \to a=b$ | $m_{ij}=1 \to m_{ji}=0$ ($i \ne j$) | No double arrows |
| **Transitive** | If $(a,b) \in R \land (b,c) \in R \to (a,c) \in R$ | $M^2$ logic (boolean product) | "Shortcuts" exist for paths |

## 2. Equivalence Relations
> [!INFO] Definition
> A relation is an **Equivalence Relation** if it is:
> 1.  **Reflexive**
> 2.  **Symmetric**
> 3.  **Transitive**

*   **Equivalence Class $[a]$:** The set of all elements related to $a$.
*   **Partition:** Equivalence classes partition a set into disjoint non-empty subsets.

---

# Chapter 4: Graphs

## 1. Graph Terminology
> [!INFO] Definitions
> *   **Graph $G=(V,E)$:** A set of vertices $V$ and edges $E$.
> *   **Degree $deg(v)$:** Number of edges incident to $v$.
> *   **Handshaking Theorem:** $2|E| = \sum_{v \in V} deg(v)$. (Total degree is even).

**Types of Graphs:**
*   **Simple:** No loops, no multiple edges.
*   **Multigraph:** Multiple edges allowed.
*   **Pseudograph:** Loops and multiple edges allowed.
*   **Complete Graph ($K_n$):** Every pair of distinct vertices is connected.
*   **Bipartite:** Vertices can be divided into two disjoint sets $V_1, V_2$ with edges only between sets.

## 2. Connectivity & Paths
*   **Path:** Sequence of edges connecting vertices.
*   **Connected (Undirected):** Path exists between every pair of vertices.
*   **Strongly Connected (Directed):** Directed path exists $a \to b$ AND $b \to a$ for all pairs.

## 3. Dijkstra's Algorithm (Shortest Path)
> [!EXAMPLE] Trace Summary
> **Goal:** Find shortest path from Source (0) to all nodes.
> 1.  Initialize distances to $\infty$, source to 0.
> 2.  Visit unvisited node with smallest tentative distance.
> 3.  Update neighbors: $new\_dist = current\_dist + edge\_weight$.
> 4.  If $new\_dist < neighbor\_dist$, update neighbor.
> 5.  Repeat until all nodes visited.

---

# Chapter 5: Trees

## 1. Tree Properties
> [!INFO] Definition
> A **tree** is a connected undirected graph with **no simple circuits**.
> *   **Forest:** A collection of disjoint trees.
> *   **m-ary Tree:** Every internal vertex has at most $m$ children.
> *   **Full m-ary Tree:** Every internal vertex has exactly $m$ children.

![[Tree Terminology Diagram]]

## 2. Traversals
systematic ways to visit every vertex in an ordered rooted tree.

| Traversal | Order | Algorithm Logic |
| :--- | :--- | :--- |
| **Preorder** | Root $\to$ Left $\to$ Right | List root, then traverse children L to R. |
| **Inorder** | Left $\to$ Root $\to$ Right | Traverse Left, list Root, traverse Right. |
| **Postorder** | Left $\to$ Right $\to$ Root | Traverse children L to R, then list root. |

## 3. Spanning Trees
> [!INFO] Definition
> A subgraph of $G$ that is a tree containing every vertex of $G$.
> *   **DFS (Depth-First Search):** Explores deep paths, uses a **Stack** (backtracking).
> *   **BFS (Breadth-First Search):** Explores neighbors level-by-level, uses a **Queue**.

---

# Week 9-10: Sets, Functions, Sequences

## 1. Sets
> [!INFO] Operations
> *   **Union ($A \cup B$):** Elements in A OR B.
> *   **Intersection ($A \cap B$):** Elements in A AND B.
> *   **Difference ($A - B$):** Elements in A but NOT B.
> *   **Power Set $P(A)$:** Set of all subsets. Size is $2^{|A|}$.

> [!TIP] Inclusion-Exclusion Principle
> $|A \cup B| = |A| + |B| - |A \cap B|$

## 2. Functions
*   **Injective (One-to-One):** Distinct inputs map to distinct outputs.
*   **Surjective (Onto):** Every element in the codomain is mapped to.
*   **Bijective:** Both injective and surjective (invertible).
*   **Floor $\lfloor x \rfloor$:** Greatest integer $\le x$.
*   **Ceiling $\lceil x \rceil$:** Least integer $\ge x$.

## 3. Sequences & Summations
*   **Arithmetic Progression:** $a_n = a_1 + (n-1)d$.
*   **Summation:** $\sum_{j=m}^{n} a_j$.

---

# Discrete Structures: Induction & Recursion

## 1. Mathematical Induction
Used to prove $P(n)$ is true for all positive integers.

> [!EXAMPLE] Proof Structure
> **Prove:** $1 + 2 + \dots + n = \frac{n(n+1)}{2}$
> 
> 1.  **Basis Step ($n=1$):**
>     $1 = \frac{1(2)}{2} = 1$. (True)
> 2.  **Inductive Step:**
>     *   **Hypothesis:** Assume $1 + \dots + k = \frac{k(k+1)}{2}$.
>     *   **Show:** $1 + \dots + k + (k+1) = \frac{(k+1)(k+2)}{2}$.
>     *   **Derivation:**
>         $\frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2}$.
> 3.  **Conclusion:** True for all $n$.

## 2. Recursion
*   **Recursive Definitions:** Define a set or function in terms of itself (Base case + Recursive step).
*   **Recursive Algorithms:** Solve a problem by reducing it to smaller instances (e.g., Factorial, Merge Sort).

**Merge Sort Logic:**
1.  Split list in half.
2.  Recursively sort halves.
3.  Merge sorted halves.

---

# Counting & Probability

## 1. Counting Principles
> [!INFO] Rules
> *   **Product Rule:** Sequence of tasks ($n_1 \times n_2$).
> *   **Sum Rule:** Mutually exclusive tasks ($n_1 + n_2$).
> *   **Pigeonhole Principle:** If $k+1$ objects are in $k$ boxes, one box has $\ge 2$ objects.

## 2. Permutations & Combinations
| Type | Order Matters? | Repetition? | Formula |
| :--- | :--- | :--- | :--- |
| **Permutation** $P(n,r)$ | Yes | No | $\frac{n!}{(n-r)!}$ |
| **Combination** $C(n,r)$ | No | No | $\frac{n!}{r!(n-r)!}$ |
| **Permutation w/ Rep** | Yes | Yes | $n^r$ |
| **Combination w/ Rep** | No | Yes | $C(n+r-1, r)$ |

## 3. Recurrence Relations
> [!EXAMPLE] Fibonacci Sequence
> Relation: $f_n = f_{n-1} + f_{n-2}$
> Initial: $f_0 = 0, f_1 = 1$.

**Solving Linear Homogeneous Relations ($a_n = c_1 a_{n-1} + c_2 a_{n-2}$):**
1.  Form Characteristic Equation: $r^2 - c_1 r - c_2 = 0$.
2.  Find roots $r_1, r_2$.
3.  General Solution: $a_n = \alpha_1 r_1^n + \alpha_2 r_2^n$.
4.  Solve for $\alpha$ using initial conditions.

## 4. Probability
> [!INFO] Definitions
> *   **Probability $p(E)$:** $\frac{|E|}{|S|}$ (for equally likely outcomes).
> *   **Complement:** $p(\overline{E}) = 1 - p(E)$.
> *   **Union:** $p(E \cup F) = p(E) + p(F) - p(E \cap F)$.
> *   **Conditional:** $p(E|F) = \frac{p(E \cap F)}{p(F)}$.
> *   **Independence:** $p(E \cap F) = p(E)p(F)$.

> [!EXAMPLE] Dice Example
> **Event:** Rolling a sum of 7 with two dice.
> *   Sample Space $|S| = 36$.
> *   Event $E = \{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\}$.
> *   $p(E) = 6/36 = 1/6$.
