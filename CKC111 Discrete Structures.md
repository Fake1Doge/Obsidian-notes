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
& $(p \wedge q) \rightarrow (p \vee q)$ \\
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

| Feature            | Breadth-First Search (BFS)                               | Depth-First Search (DFS)                                      |
| :----------------- | :------------------------------------------------------- | :------------------------------------------------------------ |
| **Data Structure** | **Queue** is used.                                       | **Stack** (or recursion) is used.                             |
| **Technique**      | Vertex-based; finds shortest path.                       | Edge-based; explores path to end.                             |
| **Traversal**      | Explores all nodes at same level before moving deep.     | Explores nodes as far as possible (deep) before backtracking. |
| **Backtracking**   | Does **not** use backtracking.                           | Uses **backtracking** to traverse unvisited nodes.            |
| **Edges**          | Finds path with minimum number of edges (shortest path). | May produce path with more edges.                             |
| **Optimality**     | Optimal for vertices closer to source.                   | Optimal for solutions away from source.                       |
| **Speed**          | Slower than DFS.                                         | Faster than BFS.                                              |
| **Decision Trees** | Not suitable (explores neighbors first).                 | Suitable (explores paths based on decisions).                 |
| **Memory**         | Less memory efficient (requires more).                   | **Memory efficient** (requires less).                         |

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
    * *Example:** $\lfloor 0.5 \rfloor = 0$, $\lfloor -1.5 \rfloor = -2$.
* **Ceiling ($\lceil x \rceil$):** Smallest integer $\ge x$.
    * *Example:** $\lceil 0.5 \rceil = 1$, $\lceil -1.5 \rceil = -1$.

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
    * *Examples:** Integers ($\mathbb{Z}$), Rationals ($\mathbb{Q}$), Odd positive integers.
    * **Cardinality:** $\aleph_0$ (Aleph-null).
* **Uncountable:** Cannot be listed in a sequence.
    * *Examples:** Real numbers ($\mathbb{R}$), Interval $[0, 1]$.
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
# 📘 Discrete Structures: Induction, Recursion & Algorithms

## 1. Mathematical & Strong Induction

### The Principle of Mathematical Induction
Mathematical induction is a proof technique used to verify statements for all positive integers. It is often visualized as climbing an infinite ladder.

![[Ladder Analogy Diagram]]

**The Analogy:**
1.  **Basis Step:** You can reach the first rung.
2.  **Inductive Step:** If you can reach rung $k$, you can reach rung $k+1$.
3.  **Conclusion:** Therefore, you can reach *any* rung on the ladder.

**Formal Logic:**
To prove a propositional function $P(n)$ is true for all positive integers $n$:
1.  **Basis Step:** Verify that $P(1)$ is true.
2.  **Inductive Step:** Show that the conditional statement $P(k) \rightarrow P(k+1)$ is true for all positive integers $k$.

$$[P(1) \wedge \forall k(P(k) \rightarrow P(k+1))] \rightarrow \forall n P(n)$$

---

### Proof Examples

#### Example 1: Summation Formula
**Prove:** $1+2+\dots+n = \frac{n(n+1)}{2}$.

> [!EXAMPLE] Proof Trace
> **1. Basis Step ($n=1$):**
> $\text{LHS} = 1, \quad \text{RHS} = \frac{1(1+1)}{2} = 1$. Since LHS = RHS, $P(1)$ is true.
>
> **2. Inductive Step:**
> * **Hypothesis ($P(k)$):** Assume $1+\dots+k = \frac{k(k+1)}{2}$.
> * **To Prove ($P(k+1)$):** $1+\dots+k+(k+1) = \frac{(k+1)(k+2)}{2}$.
>
> **Derivation:**
> $$ \begin{aligned}
> \text{LHS} &= [1+\dots+k] + (k+1) \\
> &= \frac{k(k+1)}{2} + (k+1) \quad \text{(Substitute IH)} \\
> &= \frac{k(k+1) + 2(k+1)}{2} \quad \text{(Common denominator)} \\
> &= \frac{(k+1)(k+2)}{2} \quad \text{(Factor out } k+1)
> \end{aligned} $$
> **Conclusion:** $P(n)$ is true for all positive integers $n$.

#### Example 2: Inequality
**Prove:** $n < 2^n$ for all positive integers $n$.

> [!EXAMPLE] Proof Trace
> **1. Basis Step:** $1 < 2^1$ is true.
> **2. Inductive Step:**
> * Assume $k < 2^k$.
> * To prove: $k+1 < 2^{k+1}$.
> * Derivation:
>   $$k+1 < 2^k + 1 \le 2^k + 2^k = 2^{k+1}$$
>   *(Note: $1 \le 2^k$ is true for positive integers)*.

#### Example 3: Divisibility
**Prove:** $n^3 - n$ is divisible by 3 whenever $n$ is a positive integer.
* **Basis Step:** $1^3 - 1 = 0$, which is divisible by 3.
* **Inductive Step:**
    * Expand $(k+1)^3 - (k+1)$ to get $(k^3 + 3k^2 + 3k + 1) - k - 1$.
    * Rearrange to $(k^3 - k) + 3(k^2 + k)$.
    * The first term is divisible by 3 (by Hypothesis) and the second term is a multiple of 3, so the sum is divisible by 3.

---

### Strong Induction
Strong induction is used when proving $P(k+1)$ requires assuming the truth of **multiple** preceding steps (not just $P(k)$).

> [!INFO] Principle
> **Basis Step:** Verify $P(1)$ is true.
> **Inductive Step:** Show that $[P(1) \wedge P(2) \wedge \dots \wedge P(k)] \rightarrow P(k+1)$.
> **Hypothesis:** Assume $P(j)$ is true for all $j=1, 2, \dots, k$.

**Key Applications:**
1.  **Fundamental Theorem of Arithmetic:** Every integer $n > 1$ can be written as a product of primes.
    * *Reasoning:** If $k+1$ is composite ($a \cdot b$), both $a$ and $b$ are smaller than $k+1$. By strong induction, both $a$ and $b$ are products of primes, so $a \cdot b$ is also.
2.  **Postage Stamps:** Every postage of 12 cents or more can be formed using 4-cent and 5-cent stamps.
    * *Basis:** Verify for 12, 13, 14, 15.
    * *Recursive:** For $k+1$, rely on $P(k-3)$ and add a 4-cent stamp.

---

## 2. Recursive Definitions & Structural Induction

### Recursive Definitions
Recursion defines objects in terms of themselves.

* **Recursive Function:** Defined by a **Basis Step** (value at zero) and a **Recursive Step** (rule for finding value at $n$ from smaller integers).
* **Recursive Set:** Defined by an initial collection of elements (basis) and rules for forming new elements from existing ones.

| Concept | Basis Step Example | Recursive Step Example |
| :--- | :--- | :--- |
| **Powers of 2 ($2^n$)** | $a_0 = 1$ | $a_{n+1} = 2a_n$ |
| **Factorial ($n!$)** | $f(0) = 1$ | $f(n+1) = (n+1)f(n)$ |
| **Set $S$ (Multiples of 3)** | $3 \in S$ | If $n \in S$, then $n+3 \in S$ |

### Tree Structures
Recursion is the standard way to define tree data structures.

1.  **Rooted Trees:**
    * **Basis:** A single vertex $r$ is a rooted tree.
    * **Recursive:** A graph formed by connecting a new root $r$ to the roots of disjoint trees $T_1, \dots, T_n$.
2.  **Extended Binary Trees:**
    * **Basis:** The empty set $\emptyset$ is an extended binary tree.
    * **Recursive:** A root connecting a left subtree $T_1$ and right subtree $T_2$ is an extended binary tree.
3.  **Full Binary Trees:**
    * **Basis:** A single vertex $r$ is a full binary tree.
    * **Recursive:** A root connected to disjoint full binary trees $T_1$ and $T_2$.

### Structural Induction
A proof method specific to recursively defined sets.

> [!TIP] Procedure
> 1.  **Basis Step:** Show the result holds for elements specified in the basis definition.
> 2.  **Recursive Step:** Show that if the property holds for elements used to build new ones, it also holds for the new elements generated.

**Example: Proving divisibility for Set $S$**
* **Definition:** $3 \in S$; if $x, y \in S$, then $x+y \in S$.
* **Goal:** Prove $3|x$ for all $x \in S$.
* **Basis:** $3|3$ is true.
* **Recursive:** Assume $3|a$ and $3|b$. Then $a=3m, b=3n$.
    $a+b = 3m+3n = 3(m+n)$.
    Since $m+n$ is an integer, $3|(a+b)$.

---

## 3. Recursive Algorithms

### Concept
An algorithm is **recursive** if it solves a problem by reducing it to an instance of the same problem with smaller input.
* **Termination:** It must eventually be reduced to an **initial case** for which the solution is known.

### Standard Algorithms

#### 1. Factorial ($n!$)
```python
procedure factorial(n: nonnegative integer)
    if n = 0 then return 1
    else return n * factorial(n - 1)
```

#### 2. Exponentiation ($a^n$)
```python
procedure power(a: real, n: integer)
    if n = 0 then return 1
    else return a * power(a, n - 1)
```

#### 3. Greatest Common Divisor (GCD)
Uses the reduction $gcd(a, b) = gcd(b \mod a, a)$.
```python
procedure gcd(a, b: integers with a < b)
    if a = 0 then return b
    else return gcd(b mod a, a)
```

#### 4. Binary Search
Efficiently locates $x$ in a sorted list by comparing with the middle element.
```python
procedure binary_search(i, j, x)
    m := floor((i + j) / 2)
    if x = a_m then return m
    else if (x < a_m and i < m) then return binary_search(i, m - 1, x)
    else if (x > a_m and j > m) then return binary_search(m + 1, j, x)
    else return 0
```

### Merge Sort
A divide-and-conquer algorithm that iteratively splits a list into two sublists until each has one element, then merges them.

![[Merge Sort Diagram]]

**Algorithm Steps:**
1.  **Split:** If $n > 1$, split list $L$ into $L_1$ and $L_2$ at $\lfloor n/2 \rfloor$.
2.  **Sort:** Recursively call `mergesort(L1)` and `mergesort(L2)`.
3.  **Merge:** Combine the two sorted lists into one.

**The Merge Logic:**
* Compare heads of $L_1$ and $L_2$. Remove smaller element and append to result list $L$.
* Repeat until one list is empty, then append the rest.

> [!EXAMPLE] Trace: Merging $\{2,3,5,6\}$ and $\{1,4\}$
> | $L_1$ | $L_2$ | Result $L$ | Action |
> | :--- | :--- | :--- | :--- |
> | `2,3,5,6` | `1,4` | `[]` | $1 < 2$, take 1 |
> | `2,3,5,6` | `4` | `1` | $2 < 4$, take 2 |
> | `3,5,6` | `4` | `1, 2` | $3 < 4$, take 3 |
> | `5,6` | `4` | `1, 2, 3` | $4 < 5$, take 4 |
> | `5,6` | `[]` | `1, 2, 3, 4` | $L_2$ empty, append rest |

### Proving Correctness
Mathematical induction is used to prove recursive algorithms produce correct output.
* **Basis:** Show it works for the base case (e.g., $n=0$).
* **Inductive Step:** Assume the algorithm returns the correct value for input $k$ (Inductive Hypothesis), then prove it computes the correct result for $k+1$.

---
# Discrete Structures: Counting (CKC111)

> [!INFO] **Course Context**
> This note covers **Topic 4: Counting** from the CKC111 Discrete Structures course. It details basic counting principles, the Pigeonhole Principle, and permutations and combinations (with and without repetition).

---

## 1. Basic Counting Principles

### 1.1 The Product Rule
The Product Rule applies when a procedure can be broken down into a sequence of distinct tasks.

> [!INFO] Definition
> If a procedure consists of a sequence of two tasks, where the first task can be done in $n_1$ ways and the second task in $n_2$ ways, then the total number of ways to perform the procedure is $n_1 \cdot n_2$.

**In Terms of Sets:**
If $A_1, A_2, ..., A_m$ are finite sets, the number of elements in their Cartesian product is the product of the number of elements in each set:
$$|A_1 \times A_2 \times ... \times A_m| = |A_1| \cdot |A_2| \cdot ... \cdot |A_m|$$


> [!EXAMPLE] Example: Bit Strings
> **Question:** How many bit strings of length seven are there?
> **Solution:**
> 1.  Each of the 7 positions can be filled in 2 ways (0 or 1).
> 2.  Apply the product rule: $2^7$.
> 3.  **Result:** $128$ bit strings.

### 1.2 The Sum Rule
The Sum Rule applies when a task can be done in one of several mutually exclusive (disjoint) ways.

> [!INFO] Definition
> If a task can be done either in one of $n_1$ ways or in one of $n_2$ ways, where none of the $n_1$ ways is the same as any of the $n_2$ ways, then there are $n_1 + n_2$ ways to do the task.

**In Terms of Sets:**
$$|A \cup B| = |A| + |B|$$
*Condition:* $A$ and $B$ must be disjoint sets ($A \cap B = \emptyset$).

> [!EXAMPLE] Example: Committee Selection
> **Scenario:** Choose a representative from either the math faculty (37 members) or math majors (83 students). No one is both.
> **Solution:**
> * Option A (Faculty): 37 ways.
> * Option B (Student): 83 ways.
> * **Total:** $37 + 83 = 120$ possible ways.

### 1.3 The Subtraction Rule (Inclusion-Exclusion)
Used when the sets of ways are **not** disjoint (i.e., there is overlap).

> [!INFO] Definition
> If a task can be done in $n_1$ or $n_2$ ways, the total number of ways is the sum of the ways minus the number of ways common to both.
>
> **Formula:** $|A \cup B| = |A| + |B| - |A \cap B|$.

> [!EXAMPLE] Example: Bit Strings with Conditions
> **Question:** How many bit strings of length 8 start with `1` OR end with `00`?
> **Solution:**
> 1.  **Set A (Start with 1):** $2^7 = 128$.
> 2.  **Set B (End with 00):** $2^6 = 64$.
> 3.  **Intersection $A \cap B$ (Start with 1 AND End with 00):** $2^5 = 32$.
> 4.  **Calculation:** $128 + 64 - 32 = 160$.

### 1.4 The Division Rule
Used when counting items that are considered identical under certain symmetries (e.g., circular arrangements).

> [!INFO] Definition
> There are $n/d$ ways to do a task if it can be done in $n$ ways, but for every way $w$, exactly $d$ of the $n$ ways correspond to way $w$.

> [!EXAMPLE] Example: Circular Seating
> **Question:** How many ways to seat 4 people around a circular table where rotation implies the same seating?
> **Solution:**
> 1.  Linear arrangements of 4 people: $4! = 24$.
> 2.  For any circular arrangement, there are 4 rotations that result in the same relative seating ($d=4$).
> 3.  **Apply Division Rule:** $24 / 4 = 6$ arrangements.

### 1.5 Tree Diagrams
Tree diagrams are used to solve counting problems where branches represent possible choices and leaves represent outcomes.

* **Structure:** Start with a root. Each branch represents a possible choice.
* **Total Outcomes:** Count the number of leaves.

---

## 2. The Pigeonhole Principle

### 2.1 Basic Principle
> [!INFO] Definition
> If $k+1$ objects (pigeons) are placed into $k$ boxes (pigeonholes), then **at least one box** contains two or more objects.

**Corollary:** A function from a set with $k+1$ elements to a set with $k$ elements cannot be one-to-one.

> [!EXAMPLE] Example: Exam Scores
> **Question:** How many students are needed to guarantee two students get the same score (graded 0-100)?.
> **Solution:**
> * **Pigeonholes:** Possible scores (0 to 100) = 101 pigeonholes.
> * **Pigeons:** Students.
> * To guarantee a collision, we need more pigeons than holes.
> * **Result:** $101 + 1 = 102$ students.

### 2.2 Generalized Pigeonhole Principle
> [!INFO] Definition
> If $N$ objects are placed into $k$ boxes, then there is at least one box containing at least $\lceil N/k \rceil$ objects.

> [!EXAMPLE] Example: Grading
> **Question:** In a class of 52 students with 5 possible grades (A, B, C, D, F), show the distribution guarantee.
> **Solution:**
> * $N = 52$ (students).
> * $k = 5$ (grades).
> * **Calculation:** $\lceil 52/5 \rceil = \lceil 10.4 \rceil = 11$.
> * **Result:** At least 11 students will receive the same grade.

---

## 3. Permutations and Combinations (No Repetition)

> [!TIP] Key Difference
> * **Permutation:** Order matters (Arrangement).
> * **Combination:** Order does **not** matter (Selection/Subset).

### 3.1 Permutations ($P(n, r)$)
An ordered arrangement of distinct objects.

**Formula:**
The number of $r$-permutations of a set with $n$ distinct elements is:
$$P(n, r) = \frac{n!}{(n-r)!}$$


> [!EXAMPLE] Example: Selecting Winners
> **Question:** Select 1st, 2nd, and 3rd place from 100 people.
> **Solution:**
> $P(100, 3) = \frac{100!}{97!} = 100 \cdot 99 \cdot 98 = 970,200$.

### 3.2 Combinations ($C(n, r)$)
An unordered selection of $r$ elements from a set. Also known as the binomial coefficient $\binom{n}{r}$.

**Formula:**
$$C(n, r) = \frac{n!}{r!(n-r)!}$$


**Corollary:** $C(n, r) = C(n, n-r)$.

> [!EXAMPLE] Example: Poker Hands
> **Question:** How many 5-card hands can be dealt from 52 cards?.
> **Solution:** Order doesn't matter.
> $C(52, 5) = \frac{52!}{5!47!} = 2,598,960$.

---

## 4. Generalized Permutations and Combinations

### 4.1 Summary Table
| Type | Repetition Allowed? | Formula |
| :--- | :--- | :--- |
| **r-permutations** | No | $\frac{n!}{(n-r)!}$ |
| **r-combinations** | No | $\frac{n!}{r!(n-r)!}$ |
| **r-permutations** | **Yes** | $n^r$ |
| **r-combinations** | **Yes** | $\frac{(n+r-1)!}{r!(n-1)!}$ |


### 4.2 Permutations with Repetition
The number of $r$-permutations of a set of $n$ objects with repetition allowed.

**Formula:** $$n^r$$


> [!EXAMPLE] Example: Strings
> How many strings of length $r$ can be formed from uppercase English letters ($n=26$)?
> **Answer:** $26^r$.

### 4.3 Combinations with Repetition
The number of $r$-combinations from a set with $n$ elements where repetition is allowed. This corresponds to the "Stars and Bars" method (placing items into categories).

**Formula:**
$$C(n+r-1, r) = C(n+r-1, n-1)$$


> [!EXAMPLE] Example: Choosing Bills
> **Question:** Select 5 bills ($r=5$) from 7 denominations ($n=7$) where repetition is allowed.
> **Solution:**
> * $n = 7$ (types), $r = 5$ (items).
> * This corresponds to unordered selection of 5 objects from a set of 11.
> * **Calculation:** $C(7+5-1, 5) = C(11, 5) = 462$ ways.

> [!EXAMPLE] Example: Integer Solutions
> **Question:** Solutions for $x_1 + x_2 + x_3 = 11$ where $x_i \ge 0$.
> **Solution:**
> * This is selecting 11 items ($r=11$) into 3 categories ($n=3$).
> * **Calculation:** $C(3+11-1, 11) = C(13, 11) = 78$.

### 4.4 Permutations with Indistinguishable Objects
Used when reordering a set of objects where some objects are identical (e.g., letters in a word like "SUCCESS").

**Theorem:**
The number of permutations of $n$ objects with $n_1$ of type 1, $n_2$ of type 2, ..., $n_k$ of type k is:
$$\frac{n!}{n_1! n_2! \cdot\cdot\cdot n_k!}$$


> [!EXAMPLE] Example: "SUCCESS"
> **Question:** Reorder letters in "SUCCESS".
> **Breakdown:**
> * Total letters ($n$): 7
> * S: 3 ($n_1$), C: 2 ($n_2$), U: 1 ($n_3$), E: 1 ($n_4$).
>
> **Calculation:**
> $$\frac{7!}{3! \cdot 2! \cdot 1! \cdot 1!} = \frac{5040}{6 \cdot 2 \cdot 1 \cdot 1} = 420$$

---
# Advanced Counting Techniques: Recurrence Relations & Generating Functions

## 1. Applications of Recurrence Relations

### Definition
> [!INFO] Recurrence Relation
> A recurrence relation for a sequence $\{a_{n}\}$ is an equation that expresses $a_{n}$ in terms of one or more of the previous terms of the sequence (e.g., $a_{0}, a_{1}, ..., a_{n-1}$) for all integers $n$ where $n \ge n_{0}$.
>
> * **Solution:** A sequence is a solution if its terms satisfy the relation.
> * **Initial Conditions:** These specify the terms preceding the first term where the relation takes effect.

### Example 1: Basic Arithmetic Sequence
**Problem:** Let $\{a_{n}\}$ satisfy $a_{n}=a_{n-1}+3$ for $n=1,2,3...$ with initial condition $a_{0}=2$.

**Solution Trace:**
1.  $a_{1} = a_{0} + 3 = 2 + 3 = 5$
2.  $a_{2} = a_{1} + 3 = 5 + 3 = 8$
3.  $a_{3} = a_{2} + 3 = 8 + 3 = 11$

---

### Example 2: Rabbits & Fibonacci Numbers
**Scenario:**
* Rabbits do not breed until they are 2 months old.
* After 2 months, each pair produces another pair every month.
* Rabbits never die.

**Deriving the Relation:**
Let $f_n$ be the number of pairs after $n$ months.
* **Month 1 ($f_1$):** 1 pair (initial).
* **Month 2 ($f_2$):** 1 pair (still too young to breed).
* **Month $n$ ($f_n$):** The total is the sum of:
    1.  Rabbits present in the previous month ($f_{n-1}$).
    2.  Newborn pairs produced by rabbits at least 2 months old ($f_{n-2}$).

> [!EXAMPLE] Resulting Relation
> $$f_{n} = f_{n-1} + f_{n-2}$$
> for $n \ge 3$ with initial conditions $f_{1}=1, f_{2}=1$.

---

### Example 3: Counting Bit Strings
**Problem:** Find a recurrence relation for the number of bit strings of length $n$ without two consecutive 0s.

**Logic:**
Let $a_n$ be the number of valid strings of length $n$.
To form a valid string of length $n$, we look at the last bit:

1.  **Ending in 1:** The prefix is a valid string of length $n-1$. Count = $a_{n-1}$.
2.  **Ending in 0:** The bit before the 0 *must* be 1 (to avoid 00). Thus, the string ends in **10**. The prefix is a valid string of length $n-2$. Count = $a_{n-2}$.

> [!EXAMPLE] Resulting Relation
> $$a_{n} = a_{n-1} + a_{n-2}$$
> **Initial Conditions:**
> * $a_1 = 2$ (Strings: 0, 1)
> * $a_2 = 3$ (Strings: 01, 10, 11)
>
> *Note:* This satisfies the Fibonacci relation where $a_n = f_{n+2}$.

---

## 2. Solving Linear Recurrence Relations

### Linear Homogeneous Recurrence Relations
> [!INFO] Definition
> A relation of the form:
> $$a_{n} = c_{1}a_{n-1} + c_{2}a_{n-2} + \dots + c_{k}a_{n-k}$$
> * **Linear:** RHS is a sum of previous terms multiplied by constants.
> * **Homogeneous:** No terms occur that are not multiples of $a_j$ (i.e., no constant constants or functions of $n$ added alone).
> * **Constant Coefficients:** $c_1, \dots, c_k$ are real numbers.
> * **Degree $k$:** Expressed in terms of previous $k$ terms.

#### Method: Characteristic Equation
We look for solutions of the form $a_n = r^n$.
This yields the **Characteristic Equation**:
$$r^k - c_1 r^{k-1} - c_2 r^{k-2} - \dots - c_k = 0$$

**Theorem (Degree 2):**
If $r^2 - c_1 r - c_2 = 0$ has two distinct roots $r_1$ and $r_2$, the general solution is:
$$a_{n}^{(h)} = c_{1} \cdot r_{1}^{n} + c_{2} \cdot r_{2}^{n}$$
where constants $c_1, c_2$ are determined by initial conditions.

> [!EXAMPLE] Solving $a_{n} = a_{n-1} + 2a_{n-2}$
> **Given:** $a_0 = 2, a_1 = 7$.
>
> **Step 1: Characteristic Equation**
> $r^2 - r - 2 = 0 \Rightarrow (r-2)(r+1) = 0$.
> Roots: $r_1 = 2, r_2 = -1$.
>
> **Step 2: General Form**
> $a_n = c_1(2)^n + c_2(-1)^n$.
>
> **Step 3: Solve for Constants**
> * For $n=0$: $c_1 + c_2 = 2$.
> * For $n=1$: $2c_1 - c_2 = 7$.
>
> Solving the system: $c_1 = 3, c_2 = -1$.
>
> **Final Solution:**
> $$a_{n} = 3 \cdot 2^{n} - (-1)^{n}$$

---

### Linear Non-homogeneous Recurrence Relations
> [!INFO] Definition
> $$a_{n} = c_{1}a_{n-1} + \dots + c_{k}a_{n-k} + F(n)$$
> Where $F(n)$ is not identically zero.
>
> **Total Solution Structure:**
> $$a_{n} = a_{n}^{(h)} + a_{n}^{(p)}$$
> * $a_{n}^{(h)}$: Solution to the associated homogeneous relation.
> * $a_{n}^{(p)}$: A particular solution specific to $F(n)$.

> [!EXAMPLE] Solving $a_{n} = 3a_{n-1} + 2n$
> **Given:** $a_1 = 3$.
>
> **Step 1: Homogeneous Part ($a_n - 3a_{n-1} = 0$)**
> Char Eq: $r - 3 = 0 \Rightarrow r = 3$.
> $a_{n}^{(h)} = \alpha \cdot 3^n$.
>
> **Step 2: Particular Solution ($F(n) = 2n$)**
> Since $F(n)$ is linear, guess $p_n = cn + d$.
> Substitute back into original equation:
> $cn + d = 3(c(n-1) + d) + 2n$.
>
> Simplify and group terms:
> $-2cn - 2n - 2d + 3c = 0$
> $-2n(c+1) + (-2d + 3c) = 0$.
>
> Solve coefficients:
> 1.  $c+1 = 0 \Rightarrow c = -1$.
> 2.  $-2d + 3c = 0 \Rightarrow -2d - 3 = 0 \Rightarrow d = -3/2$.
>
> $a_{n}^{(p)} = -n - 3/2$.
>
> **Step 3: Total Solution & Constants**
> $a_n = \alpha \cdot 3^n - n - 3/2$.
> Using $a_1 = 3$:
> $3 = \alpha(3)^1 - 1 - 3/2 \Rightarrow \alpha = 11/6$.
>
> **Final Solution:**
> $$a_{n} = \frac{11}{6}3^{n} - n - \frac{3}{2}$$.

---

## 3. Generating Functions

### Definition
The generating function for a sequence $a_0, a_1, \dots, a_k, \dots$ is the infinite series:
$$G(x) = \sum_{k=0}^{\infty} a_{k}x^{k}$$

### Examples
| Sequence $\{a_k\}$ | Generating Function $G(x)$ | Note |
| :--- | :--- | :--- |
| $1, 1, 1, 1, 1, 1$ | $1 + x + x^2 + x^3 + x^4 + x^5$ | Finite sequence |
| $a_k = 3$ | $\sum_{k=0}^{\infty} 3x^k$ | Infinite constant sequence |
| $a_k = k+1$ | $\sum_{k=0}^{\infty} (k+1)x^k$ | Linear growth |
| $a_k = 2^k$ | $\sum_{k=0}^{\infty} 2^k x^k = \sum (2x)^k$ | Geometric |

> [!EXAMPLE] Combinatorial Application (Shirts)
> **Problem:** How many ways to pick $n$ shirts from 4 distinct shirts?
> * Pick 0: 1 way
> * Pick 1: 4 ways
> * Pick 2: 6 ways
> * Pick 3: 4 ways
> * Pick 4: 1 way
>
> **Generating Function:** $1 + 4x + 6x^2 + 4x^3 + 1x^4$.

---

## 4. Principle of Inclusion-Exclusion

### Formulas
> [!INFO] Two Sets
> $$|A \cup B| = |A| + |B| - |A \cap B|$$
> Subtract the intersection because it is counted twice.

> [!INFO] Three Sets
> $$|A \cup B \cup C| = |A| + |B| + |C| - (|A \cap B| + |A \cap C| + |B \cap C|) + |A \cap B \cap C|$$
> Add singles, subtract pairs, add back the triple intersection.

### Example: Language Classes
**Data:**
* **Total students taking at least one:** $|S \cup F \cup R| = 2092$.
* **Singles:** Spanish ($S$) = 1232, French ($F$) = 879, Russian ($R$) = 114.
* **Pairs:** $S \cap F = 103$, $S \cap R = 23$, $F \cap R = 14$.
* **Goal:** Find $|S \cap F \cap R|$.

**Calculation:**
$$2092 = 1232 + 879 + 114 - 103 - 23 - 14 + |S \cap F \cap R|$$
$$2092 = 2085 + |S \cap F \cap R|$$
$$|S \cap F \cap R| = 7$$.

---

## 5. Exercises for Practice
* **Exercise 1:** How many bit strings of length 7 contain no two consecutive 0s?
* **Exercise 2:** Solve $a_n = 5a_{n-1} - 6a_{n-2}$ for $n \ge 2$, with $a_0=1, a_1=0$.
* **Exercise 3:** Find the solution for $a_n = 2a_{n-1} + n + 5$ with $a_0=4$.
* **Exercise 4:** What is the number of ways to pick either $n$ shirts or $n$ identical socks? (Given 4 shirts, 5 socks).
* **Exercise 5:** Inclusion-Exclusion problem regarding Computer Science students taking Java, Linux, and C.

---
# Discrete Probability

## 1. Basic Concepts & Finite Probability
### Key Definitions
This section introduces the classical theory of probability, initiated by Pierre-Simon Laplace in the 18th century while analyzing games of chance.

> [!INFO] Fundamental Terms
> * **Experiment:** A procedure that yields one of a given set of possible outcomes.
> * **Sample Space ($S$):** The set of all possible outcomes of an experiment.
> * **Event ($E$):** A subset of the sample space ($E \subseteq S$).

### Laplace's Classical Definition
If $S$ is a finite sample space of **equally likely outcomes**, the probability of an event $E$ is defined as:

$$p(E) = \frac{|E|}{|S|}$$

**Properties:**
* The probability is between 0 and 1 because $0 \le |E| \le |S|$.
* **Impossible Event:** Probability = 0.
* **Certain Event:** Probability = 1.

---

### Standard Examples

> [!EXAMPLE] Dice & Coins
> **Rolling a Die:**
> * Sample Space $S = \{1, 2, 3, 4, 5, 6\}$.
> * Event $E$ (rolling a 2) = $\{2\}$.
> * $p(E) = \frac{1}{6}$.
>
> **Tossing a Coin:**
> * Sample Space $S = \{H, T\}$.
> * Event $E$ (Heads) = $\{H\}$.
> * $p(E) = \frac{1}{2}$.

> [!EXAMPLE] Rolling Two Dice (Sum = 7)
> * **Experiment:** Rolling two dice.
> * **Sample Space Size:** By product rule, $|S| = 6^2 = 36$.
> * **Event $E$ (Sum is 7):** $E = \{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\}$ so $|E|=6$.
> * **Calculation:**
>   $$p(E) = \frac{6}{36} = \frac{1}{6}$$.

> [!EXAMPLE] Sampling with vs. Without Replacement
> **Scenario:** Drawing 5 specific numbers (11, 4, 17, 39, 23) in order from a bin of 50 balls.
>
> **1. Without Replacement:**
> * The number of ways to choose 5 balls is a permutation: $50 \times 49 \times 48 \times 47 \times 46 = 254,251,200$.
> * Probability: $1/254,251,200$.
>
> **2. With Replacement:**
> * The number of outcomes is $50^5 = 312,500,000$.
> * Probability: $1/312,500,000$.

---

## 2. Complements and Unions



### Probability of Complements
The probability of the event $\overline{E}$ (the complementary event of $E$, where $\overline{E} = S - E$) is:

$$p(\overline{E}) = 1 - p(E)$$

> [!TIP] Derivation
> Since $|\overline{E}| = |S| - |E|$, we can derive:
> $p(\overline{E}) = \frac{|S|-|E|}{|S|} = 1 - \frac{|E|}{|S|} = 1 - p(E)$.

> [!EXAMPLE] Bit String Probability
> **Question:** In a random 10-bit sequence, what is the probability of at least one '0'?
> * Let $E$ be the event "at least one 0".
> * $\overline{E}$ is the event "all bits are 1s".
> * $|S| = 2^{10} = 1024$. Only 1 outcome has all 1s.
> * $p(E) = 1 - p(\overline{E}) = 1 - \frac{1}{1024} = \frac{1023}{1024}$.

### Probability of Unions
Using the inclusion-exclusion principle:

$$p(E_1 \cup E_2) = p(E_1) + p(E_2) - p(E_1 \cap E_2)$$

> [!EXAMPLE] Divisibility
> **Question:** Probability that a positive integer $\le 100$ is divisible by 2 or 5?
> * $E_1$ (divisible by 2): $|E_1| = \lfloor \frac{100}{2} \rfloor = 50$.
> * $E_2$ (divisible by 5): $|E_2| = \lfloor \frac{100}{5} \rfloor = 20$.
> * $E_1 \cap E_2$ (divisible by 10): $|E_1 \cap E_2| = \lfloor \frac{100}{2.5} \rfloor = 10$.
> * **Calculation:**
>   $$p(E_1 \cup E_2) = \frac{50}{100} + \frac{20}{100} - \frac{10}{100} = \frac{60}{100} = \frac{3}{5}$$.

---

## 3. General Probability Theory
Laplace's definition relies on "equally likely" outcomes. A more general definition assigns probabilities to specific outcomes to handle biased scenarios.

### Assigning Probabilities
Let $S$ be a sample space. We assign a probability $p(s)$ to each outcome $s$ such that:
1.  **Range:** $0 \le p(s) \le 1$ for each $s \in S$.
2.  **Sum:** $\sum_{s \in S} p(s) = 1$.

The function $p$ is called a **probability distribution**. The probability of an event $E$ is the sum of the probabilities of the outcomes in $E$:
$$p(E) = \sum_{s \in E} p(s)$$

### Uniform Distribution
This assigns the probability $1/n$ to each element of a set with $n$ elements. This effectively replicates Laplace's definition.

> [!EXAMPLE] Biased Coin
> **Scenario:** A coin is biased so Heads ($H$) comes up twice as often as Tails ($T$).
> * Relation: $p(H) = 2p(T)$.
> * Constraint: $p(H) + p(T) = 1$.
> * Substitution: $2p(T) + p(T) = 3p(T) = 1$.
> * **Result:** $p(T) = 1/3$ and $p(H) = 2/3$.

> [!EXAMPLE] Biased Die
> **Scenario:** The number 3 appears twice as often as any other number; the other five are equally likely.
> * Let $p(1)=p(2)=p(4)=p(5)=p(6)=x$.
> * Then $p(3) = 2x$.
> * Sum: $5x + 2x = 7x = 1 \Rightarrow x = 1/7$.
> * Therefore: $p(3) = 2/7$, others = $1/7$.
> * **Probability of Odd Number ($E=\{1,3,5\}$):**
>   $$p(E) = p(1) + p(3) + p(5) = \frac{1}{7} + \frac{2}{7} + \frac{1}{7} = \frac{4}{7}$$.

---

## 4. Conditional Probability
The conditional probability of event $E$ given event $F$ (where $p(F) > 0$) is defined as:

$$p(E|F) = \frac{p(E \cap F)}{p(F)}$$

> [!EXAMPLE] Conditional Bit Strings
> **Question:** Given a random bit string of length 4 starts with a 0 ($F$), what is the probability it contains at least two consecutive 0s ($E$)?
> * $F$ (starts with 0): 8 strings (0000 to 0111). $p(F) = 8/16 = 1/2$.
> * $E \cap F$ (starts with 0 AND has consecutive 0s): $\{0000, 0001, 0010, 0011, 0100\}$.
> * $|E \cap F| = 5$, so $p(E \cap F) = 5/16$.
> * **Result:**
>   $$p(E|F) = \frac{5/16}{1/2} = \frac{5}{8}$$.

> [!EXAMPLE] Family Composition
> **Question:** Given a family with two children has at least one boy ($F$), what is the probability they have two boys ($E$)?
> * Sample Space: $\{BB, BG, GB, GG\}$ (Equally likely).
> * $F$ (At least one boy): $\{BB, BG, GB\}$. $p(F) = 3/4$.
> * $E$ (Two boys): $\{BB\}$.
> * $E \cap F$: $\{BB\}$. $p(E \cap F) = 1/4$.
> * **Result:**
>   $$p(E|F) = \frac{1/4}{3/4} = \frac{1}{3}$$.

---

## 5. Independence
Two events $E$ and $F$ are independent if and only if:

$$p(E \cap F) = p(E)p(F)$$

> [!WARNING] Checking Independence
> To determine independence, calculate $p(E)$, $p(F)$, and $p(E \cap F)$ separately and check if the equality holds.

> [!EXAMPLE] Independent vs. Not Independent
> **Case 1: Bit Strings (Length 4)**
> * $E$: Starts with 1 ($8/16 = 1/2$).
> * $F$: Even number of 1s ($8/16 = 1/2$).
> * $E \cap F$: Starts with 1 AND even number of 1s (e.g., 1111, 1100, 1010, 1001). Count is 4.
> * $p(E \cap F) = 4/16 = 1/4$.
> * **Check:** $p(E)p(F) = (1/2)(1/2) = 1/4$.
> * **Conclusion:** **Independent**.
>
> **Case 2: Family (Two Children)**
> * $E$: Two boys ($1/4$).
> * $F$: At least one boy ($3/4$).
> * $E \cap F$: Two boys ($1/4$).
> * **Check:** $p(E)p(F) = (1/4)(3/4) = 3/16$.
> * **Observation:** $3/16 \ne 1/4$.
> * **Conclusion:** **Not Independent**.

---

### Practice Exercises Summary
* **Rain:** If $p(\text{rain}) = 0.3$, then $p(\text{no rain}) = 1 - 0.3 = 0.7$.
* **Odd Integer:** Probability an integer in first 100 is odd = $50/100 = 1/2$.
* **Even Sum (Dice):** Probability sum of two dice is even = $18/36 = 1/2$.
* **Divisible by 3:** Probability integer $\le 100$ is divisible by 3 = $33/100$.
