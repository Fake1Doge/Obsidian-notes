# 📚 CKC111 Discrete Structures: Comprehensive Course Notes

## 📖 Chapter 1: Logic and Proofs

### 1.1 Propositional Logic
**Logic** serves as the foundation for mathematical reasoning and automated reasoning. It provides the rules for determining the truth of statements.

> [!INFO] Definition: Proposition
> A **proposition** is a declarative sentence that is either true ($T$) or false ($F$), but not both.
> * **Notation:** Variables $p, q, r, s, \dots$ are used to represent propositions.

**Examples of Propositions:**
* "The Moon is made of green cheese." ($F$)
* "Toronto is the capital of Canada." ($F$)
* "1 + 0 = 1" ($T$)
* "The piano is a multi-stringed instrument." ($T$)

**NOT Propositions (Cannot be determined as T/F):**
* "Sit down!" (Command)
* "What time is it?" (Question)
* "$x + 1 = 2$" (Variable/Function - depends on $x$)

### 1.2 Logical Connectives
Compound propositions are constructed by combining existing propositions using logical operators.

| Connective | Name | Notation | Meaning | Condition for Truth |
| :--- | :--- | :---: | :--- | :--- |
| **Negation** | NOT | $\neg p$ | It is not the case that $p$ | True when $p$ is False. |
| **Conjunction** | AND | $p \land q$ | $p$ and $q$ | True **only if both** $p$ and $q$ are True. |
| **Disjunction** | OR | $p \lor q$ | $p$ or $q$ (Inclusive) | True if **at least one** is True. |
| **Exclusive OR** | XOR | $p \oplus q$ | $p$ or $q$, but not both | True if exactly one is True. |
| **Implication** | IF-THEN | $p \to q$ | If $p$, then $q$ | False **only if** $p$ is True and $q$ is False. |
| **Biconditional** | IFF | $p \leftrightarrow q$ | $p$ if and only if $q$ | True if $p$ and $q$ have the **same** truth value. |

#### Notes on Disjunction (OR)
* **Inclusive Or ($p \lor q$):** "Students who have taken CS202 **or** Math120 may take this class." (Taking both is allowed).
* **Exclusive Or ($p \oplus q$):** "Soup **or** salad comes with this entrée." (You cannot have both).

### 1.3 Implication and its Forms
The conditional statement $p \to q$ is crucial in proofs.
* **$p$:** Hypothesis / Antecedent / Premise
* **$q$:** Conclusion / Consequence

**Common Ways to Express $p \to q$:**
* "If $p$, then $q$"
* "$p$ implies $q$"
* "$q$ unless $\neg p$"
* "$p$ is sufficient for $q$"
* "$q$ is necessary for $p$"

**Related Conditionals:**
1.  **Converse:** $q \to p$
2.  **Inverse:** $\neg p \to \neg q$
3.  **Contrapositive:** $\neg q \to \neg p$

> [!TIP] Equivalence Rule
> The **Contrapositive** is logically equivalent to the original implication ($p \to q \equiv \neg q \to \neg p$).
> The Converse and Inverse are **not** equivalent to the original.

### 1.4 Truth Tables & Proposition Types
We can classify compound propositions based on their truth values across all possible cases.

*   **Tautology:** A proposition that is always **True**.
    *   *Example:* $p \lor \neg p$
*   **Contradiction:** A proposition that is always **False**.
    *   *Example:* $p \land \neg p$
*   **Contingency:** A proposition that is neither a tautology nor a contradiction (values vary).

### 1.5 Logical Equivalences
Two compound propositions are **logically equivalent** ($p \equiv q$) if they have the same truth values in all possible cases.

#### Key Laws of Logic
1.  **Identity Laws:** $p \land T \equiv p$; $p \lor F \equiv p$
2.  **Domination Laws:** $p \lor T \equiv T$; $p \land F \equiv F$
3.  **Idempotent Laws:** $p \lor p \equiv p$; $p \land p \equiv p$
4.  **Double Negation:** $\neg(\neg p) \equiv p$
5.  **Distributive Laws:**
    * $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$
    * $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$
6.  **De Morgan's Laws:**
    * $\neg(p \land q) \equiv \neg p \lor \neg q$
    * $\neg(p \lor q) \equiv \neg p \land \neg q$
7.  **Absorption Laws:**
    * $p \lor (p \land q) \equiv p$
    * $p \land (p \lor q) \equiv p$

#### Example: Step-by-Step Equivalence Proof
**Show that** $\neg(p \lor (\neg p \land q)) \equiv \neg p \land \neg q$

1.  $\neg p \land \neg(\neg p \land q)$ (By De Morgan's Law on the outer $\lor$)
2.  $\neg p \land (\neg(\neg p) \lor \neg q)$ (By De Morgan's Law on the inner $\land$)
3.  $\neg p \land (p \lor \neg q)$ (By Double Negation)
4.  $(\neg p \land p) \lor (\neg p \land \neg q)$ (By Distributive Law)
5.  $F \lor (\neg p \land \neg q)$ (By Negation Law: $\neg p \land p \equiv F$)
6.  $\neg p \land \neg q$ (By Identity Law: $F \lor X \equiv X$)

### 1.6 Translating English to Logic
To analyze arguments, we often translate English sentences into logical expressions.

**Example:**
"If I go to Harry's or to the country, I will not go shopping."
*   $p$: I go to Harry's.
*   $q$: I go to the country.
*   $r$: I will go shopping.
*   **Translation:** $(p \lor q) \to \neg r$

---

## 💻 Chapter 2: Algorithm Examples

### 2.1 Properties of Algorithms
An **algorithm** is a finite set of precise instructions for performing a computation or solving a problem.

> [!NOTE] 7 Essential Properties
> 1.  **Input:** An algorithm has input values from a specified set.
> 2.  **Output:** From the input values, the algorithm produces the output values from a specified set.
> 3.  **Definiteness:** Each step of the algorithm must be precisely defined.
> 4.  **Correctness:** An algorithm should produce the correct output values for each set of input values.
> 5.  **Finiteness:** An algorithm should produce the output after a finite number of steps for any input.
> 6.  **Effectiveness:** It must be possible to perform each step of the algorithm correctly and in a finite amount of time.
> 7.  **Generality:** The algorithm should work for all problems of the desired form, not just a single specific instance.

### 2.2 Searching Algorithms
The general searching problem is to locate an element $x$ in a list of distinct elements $a_1, a_2, \dots, a_n$, or determine that it is not in the list.

#### Linear Search
The linear search algorithm locates an item in a list by examining elements in the sequence one at a time, starting at the beginning.

```pascal
procedure linear_search(x: integer, a1, a2, ..., an: distinct integers)
   i := 1
   while (i <= n and x != ai)
      i := i + 1
   if i <= n then location := i
   else location := 0
   return location {location is the subscript of the term that equals x, or 0 if x is not found}
```

#### Binary Search
The binary search algorithm locates an item in a list by repeatedly splitting the list in half.
*   **Requirement:** The input list **must be sorted** in increasing order.

```pascal
procedure binary_search(x: integer, a1, a2, ..., an: increasing integers)
   i := 1 {i is left endpoint of search interval}
   j := n {j is right endpoint of search interval}
   while i < j
      m := floor((i + j)/2)
      if x > am then i := m + 1
      else j := m
   if x = ai then location := i
   else location := 0
   return location {location is the subscript i of the term ai equal to x, or 0 if x is not found}
```

### 2.3 Sorting Algorithms
Sorting is the process of putting elements of a list into increasing order (numerical, alphabetic, etc.).

#### Bubble Sort
Bubble sort makes multiple passes through a list. Every pair of adjacent elements that are found to be out of order are interchanged.
*   The largest element "bubbles" to the end (correct position) after the first pass.

```pascal
procedure bubblesort(a1, ..., an: real numbers with n >= 2)
   for i := 1 to n - 1
      for j := 1 to n - i
         if aj > aj+1 then interchange aj and aj+1
   {a1, ..., an is now in increasing order}
```

#### Insertion Sort
Insertion sort begins with the 2nd element. It compares the 2nd element with the 1st and puts it before the first if it is not larger. It proceeds to insert the 3rd element into its correct position among the first 3, and so on.

```pascal
procedure insertion_sort(a1, ..., an: real numbers with n >= 2)
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

### 2.4 Greedy Algorithms
Algorithms that solve optimization problems (minimizing or maximizing a parameter) by making the "best" choice at each step.
*   **Strategy:** At each step, choose the locally optimal choice in the hope that it will lead to a globally optimal solution.

#### Example: Making Change
Design a greedy algorithm for making change for $n$ cents using the following coins: quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent), using the **least total number of coins**.

```pascal
procedure change(c1, c2, ..., cr: values of coins, where c1 > c2 > ... > cr; n: a positive integer)
   for i := 1 to r
      di := 0 {di counts the coins of denomination ci}
      while n >= ci
         di := di + 1 {add a coin of denomination ci}
         n := n - ci
   {di counts the coins ci}
```

#### Greedy Failure
The greedy approach does not always yield the optimal solution for all coin systems.
*   **Scenario:** Coins = {25, 10, 1} (Standard US coins). Greedy works.
*   **Scenario:** Coins = {4, 3, 1}. Target = 6 cents.
    *   **Greedy Approach:** Selects 4 (largest < 6), then 1, then 1. Total = **3 coins** (4, 1, 1).
    *   **Optimal Solution:** Select 3, then 3. Total = **2 coins** (3, 3).
    *   *Result:* Greedy algorithm failed to find the global optimum.

---

## 🔗 Chapter 3: Relations

### 3.1 Binary Relations
A **binary relation** $R$ from a set $A$ to a set $B$ is a subset of the Cartesian product $A \times B$.
*   **Notation:** If $(a,b) \in R$, we write $a R b$ (a is related to b).
*   **Relation on a Set:** A relation from set $A$ to itself ($A \times A$).

> [!EXAMPLE] Divisibility Relation
> Let $A = \{1, 2, 3, 4\}$.
> Let $R = \{(a,b) \mid a \text{ divides } b\}$.
> $R = \{(1,1), (1,2), (1,3), (1,4), (2,2), (2,4), (3,3), (4,4)\}$.

### 3.2 Properties of Relations
Let $R$ be a relation on set $A$.

1.  **Reflexive:** $\forall a \in A, (a,a) \in R$.
    *   *Visually:* Every element relates to itself.
    *   *Example:* $R = \{(1,1), (2,2), (3,3)\}$ on $\{1,2,3\}$.
2.  **Symmetric:** $\forall a,b \in A, (a,b) \in R \to (b,a) \in R$.
    *   *Visually:* If $a$ goes to $b$, $b$ goes back to $a$.
3.  **Antisymmetric:** $\forall a,b \in A, [(a,b) \in R \land (b,a) \in R] \to a=b$.
    *   *Meaning:* Mutual relationship is impossible unless elements are identical.
    *   *Example:* "Less than or equal to" ($\leq$). If $x \leq y$ and $y \leq x$, then $x = y$.
4.  **Transitive:** $\forall a,b,c \in A, [(a,b) \in R \land (b,c) \in R] \to (a,c) \in R$.
    *   *Visually:* The "shortcut" path must exist.

### 3.3 Combining Relations
Since relations are sets, we can use set operations.
*   **Union ($R_1 \cup R_2$):** Elements in $R_1$ OR $R_2$.
*   **Intersection ($R_1 \cap R_2$):** Elements in BOTH $R_1$ AND $R_2$.
*   **Difference ($R_1 - R_2$):** Elements in $R_1$ but NOT in $R_2$.

#### Composition of Relations
Let $R$ be a relation from $A$ to $B$, and $S$ be a relation from $B$ to $C$. The **composition** $S \circ R$ is a relation from $A$ to $C$:
*   If $(a,b) \in R$ and $(b,c) \in S$, then $(a,c) \in S \circ R$.

### 3.4 Representing Relations

#### Using Matrices (Zero-One Matrix)
Relation $R$ can be represented by a matrix $M_R = [m_{ij}]$:
*   $m_{ij} = 1$ if $(a_i, b_j) \in R$.
*   $m_{ij} = 0$ if $(a_i, b_j) \notin R$.

**Properties in Matrix Form:**
*   **Reflexive:** Main diagonal is all 1s ($m_{ii} = 1$).
*   **Symmetric:** Matrix is symmetric ($M = M^T$). $m_{ij} = m_{ji}$.
*   **Antisymmetric:** If $i \neq j$, then $m_{ij} = 0$ or $m_{ji} = 0$.

#### Using Digraphs (Directed Graphs)
*   **Vertices:** Elements of set $A$.
*   **Edges:** An arrow from $a$ to $b$ exists if $(a,b) \in R$.
*   **Reflexive:** Every vertex has a loop.
*   **Symmetric:** Edges are bidirectional (or represented as single undirected lines).

### 3.5 Equivalence Relations
A relation on a set $A$ is an **Equivalence Relation** if it is:
1.  **Reflexive**
2.  **Symmetric**
3.  **Transitive**

*   *Notation:* $a \sim b$ (a is equivalent to b).

#### Equivalence Classes
Let $R$ be an equivalence relation on $A$. The **equivalence class** of an element $a$, denoted by $[a]$, is the set of all elements related to $a$:
$$[a] = \{s \in A \mid (a,s) \in R\}$$

#### Partitions
The set of equivalence classes forms a **partition** of $A$:
1.  **Disjoint:** Classes are either identical or share no elements ($[a] \cap [b] = \emptyset$ if $[a] \neq [b]$).
2.  **Union:** The union of all classes covers the entire set $A$ ($\bigcup [a]_i = A$).

---

## 🕸️ Chapter 4: Graphs

### 4.1 Graph Terminology
A **Graph** $G = (V, E)$ consists of a nonempty set $V$ of **vertices** (or nodes) and a set $E$ of **edges** that connect the vertices.

#### Types of Graphs
1.  **Simple Graph:** Undirected, no loops, and no multiple edges between the same pair of vertices.
2.  **Multigraph:** Undirected, allows **multiple edges** between the same vertices.
3.  **Pseudograph:** Undirected, allows **loops** and multiple edges.
4.  **Directed Graph (Digraph):** Edges have a direction (ordered pairs $(u, v)$).
    *   *Simple Directed Graph:* No loops, no multiple directed edges.
    *   *Directed Multigraph:* Allows multiple directed edges.

#### Special Graphs
*   **Complete Graph ($K_n$):** A simple graph with exactly one edge between each pair of distinct vertices.
*   **Cycle ($C_n$):** $n$ vertices $v_1, \dots, v_n$ and edges $\{v_1, v_2\}, \{v_2, v_3\}, \dots, \{v_n, v_1\}$.
*   **Wheel ($W_n$):** Obtained by adding an additional vertex to $C_n$ and connecting it to all $n$ vertices.
*   **Bipartite Graph:** Vertex set $V$ can be partitioned into two disjoint sets $V_1$ and $V_2$ such that every edge connects a vertex in $V_1$ to one in $V_2$. (No edges connect vertices within the same subset).

#### Degrees of Vertices
*   **Undirected Graph:**
    *   **Degree ($deg(v)$):** Number of edges incident with vertex $v$.
    *   *Crucial Rule:* A **loop** contributes **2** to the degree.
    *   **Handshaking Theorem:** $2|E| = \sum_{v \in V} deg(v)$. (Total degree count is always even).
*   **Directed Graph:**
    *   **In-degree ($deg^-(v)$):** Number of edges coming **into** $v$.
    *   **Out-degree ($deg^+(v)$):** Number of edges going **out of** $v$.
    *   **Theorem:** $|E| = \sum_{v \in V} deg^-(v) = \sum_{v \in V} deg^+(v)$.

### 4.2 Graph Representation
Choosing the right representation depends on the graph's density and operations needed.

1.  **Adjacency List:**
    *   Specifies the vertices adjacent to each vertex.
    *   **Pros:** Space efficient for **sparse graphs**.
    *   **Example:**
        *   $a \to b, c, e$
        *   $b \to a$
2.  **Adjacency Matrix:**
    *   An $n \times n$ matrix $A_G$ where $a_{ij} = 1$ if there is an edge from $v_i$ to $v_j$, and $0$ otherwise.
    *   **Pros:** Fast edge lookups ($O(1)$). Good for **dense graphs**.
    *   *Note:* For undirected graphs, the matrix is symmetric ($a_{ij} = a_{ji}$). Loops result in $1$s on the main diagonal.
3.  **Incidence Matrix:**
    *   An $n \times m$ matrix (vertices $\times$ edges) where $m_{ij} = 1$ if edge $e_j$ is incident with vertex $v_i$.

### 4.3 Connectivity
*   **Path:** A sequence of edges that begins at a vertex and travels along edges to other vertices.
*   **Connected Graph (Undirected):** There is a path between every pair of distinct vertices.
*   **Connected Components:** Disjoint connected subgraphs that make up a non-connected graph.
*   **Directed Connectivity:**
    *   **Strongly Connected:** There is a directed path from $a$ to $b$ **AND** from $b$ to $a$ for every pair of vertices.
    *   **Weakly Connected:** The underlying undirected graph is connected (ignoring edge directions).

### 4.4 Shortest Path: Dijkstra’s Algorithm
An algorithm to find the shortest path from a specific **source node** to all other nodes in a **weighted graph** (where edges have non-negative weights).

> [!EXAMPLE] Algorithm Logic
> 1.  Assign a tentative distance value to every node: set it to zero for the initial node and to infinity for all other nodes.
> 2.  Set the initial node as current. Mark all other nodes as unvisited.
> 3.  For the current node, consider all of its unvisited neighbors and calculate their tentative distances through the current node. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one.
> 4.  After considering all of the unvisited neighbors of the current node, mark the current node as visited. A visited node will never be checked again.
> 5.  Select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node," and go back to step 3.

**Example Trace:**
Given nodes $0$ to $8$ with weights.
*   Start at $0$. Distance to neighbors updated.
*   Shortest path from $0 \to 1$ might be $4$.
*   Shortest path from $0 \to 2$ might be $12$ (via intermediate nodes).
*   **Output:** List of minimum costs to reach each node (e.g., $0, 4, 12, 19, 21, 11, 9, 8, 14$).

---

## 🌳 Chapter 5: Trees

### 5.1 Introduction to Trees
*   **Tree:** A connected undirected graph with no simple circuits.
*   **Forest:** A graph that contains no simple circuits but is not necessarily connected. Each connected component of a forest is a tree.

### 5.2 Rooted Trees
A **rooted tree** is a tree in which one vertex has been designated as the **root** and every edge is directed away from the root.

#### Terminology
*   **Parent:** If $u \to v$, $u$ is the parent of $v$.
*   **Child:** If $u \to v$, $v$ is the child of $u$.
*   **Siblings:** Vertices with the same parent.
*   **Ancestors:** Vertices on the path from the root to a vertex (excluding the vertex itself, usually).
*   **Descendants:** Vertices that have a specific vertex as an ancestor.
*   **Leaf:** A vertex with no children.
*   **Internal Vertex:** A vertex that has children.

#### Types of Rooted Trees
*   **m-ary Tree:** A rooted tree where every internal vertex has no more than $m$ children.
*   **Full m-ary Tree:** Every internal vertex has **exactly** $m$ children.
*   **Binary Tree:** An m-ary tree with $m=2$.
*   **Ordered Rooted Tree:** A rooted tree where the children of each internal vertex are ordered (e.g., first child, second child).

#### Properties
*   **Level of a vertex:** The length of the unique path from the root to the vertex. (Root is at level 0).
*   **Height of a tree:** The maximum of the levels of the vertices.

### 5.3 Tree Traversal
Procedures for systematically visiting every vertex of an ordered rooted tree.

#### 1. Preorder Traversal
**Order:** Root $\to$ Left Subtree $\to$ Right Subtree
```pascal
procedure preorder(T: ordered rooted tree)
   r := root of T
   list r
   for each child c of r from left to right
      T(c) := subtree with c as root
      preorder(T(c))
```

#### 2. Inorder Traversal
**Order:** Left Subtree $\to$ Root $\to$ Right Subtree
*(Typically used for binary trees)*
```pascal
procedure inorder(T: ordered rooted tree)
   r := root of T
   if r is a leaf then list r
   else
      l := first child of r from left to right
      T(l) := subtree with l as root
      inorder(T(l))
      list r
      for each child c of r from left to right (except l)
         T(c) := subtree with c as root
         inorder(T(c))
```

#### 3. Postorder Traversal
**Order:** Left Subtree $\to$ Right Subtree $\to$ Root
```pascal
procedure postorder(T: ordered rooted tree)
   r := root of T
   for each child c of r from left to right
      T(c) := subtree with c as root
      postorder(T(c))
   list r
```

### 5.4 Spanning Trees
Let $G$ be a simple graph. A **spanning tree** of $G$ is a subgraph of $G$ that is a tree containing **every vertex** of $G$.

#### Depth-First Search (DFS)
*   **Strategy:** Explore as far as possible along each branch before backtracking.
*   **Data Structure:** Stack (or Recursion).
*   **Memory:** More efficient.
*   **Backtracking:** Yes.

#### Breadth-First Search (BFS)
*   **Strategy:** Explore all neighbor nodes at the present depth prior to moving to the nodes at the next depth level.
*   **Data Structure:** Queue.
*   **Memory:** Less efficient (requires storing all nodes at current level).
*   **Backtracking:** No.
*   **Optimality:** Finds the shortest path (minimum number of edges) in unweighted graphs.

#### Comparison: BFS vs DFS

| Feature | BFS (Breadth-First) | DFS (Depth-First) |
| :--- | :--- | :--- |
| **Data Structure** | Queue | Stack |
| **Backtracking** | No | Yes |
| **Optimal Path** | Yes (Shortest Path) | No |
| **Speed** | Slower | Faster |
| **Memory Efficiency** | Low | High |

---

## 🔢 Chapter 6: Matrices

### 6.1 Matrix Arithmetic
* **Matrix:** A rectangular array of numbers ($m$ rows $\times$ n columns).
* **Addition:** Sum of corresponding elements ($C_{ij} = A_{ij} + B_{ij}$). Matrices must have the same dimensions.
* **Transposition ($A^T$):** The matrix obtained by interchanging the rows and columns of $A$.
* **Multiplication ($AB$):** The product of an $m \times k$ matrix $A$ and a $k \times n$ matrix $B$ is an $m \times n$ matrix. The element at row $i$, column $j$ is the **dot product** of row $i$ of $A$ and column $j$ of $B$.
    * *Condition:* The number of columns in $A$ must equal the number of rows in $B$.

### 6.2 Zero-One Matrices
Matrices with entries 0 or 1, used to represent discrete structures.
* **Join ($A \lor B$):** The bitwise OR of corresponding elements.
* **Meet ($A \land B$):** The bitwise AND of corresponding elements.
* **Boolean Product ($A \odot B$):** Similar to matrix multiplication but uses $\lor$ (OR) in place of addition and $\land$ (AND) in place of multiplication.

---

## 🔄 Chapter 7: Induction and Recursion

### 7.1 Mathematical Induction
A powerful technique used to prove a statement $P(n)$ for all positive integers $n$.

> [!TIP] The Ladder Analogy
> 1.  **Basis Step:** Verify that $P(1)$ is true (You can step onto the first rung).
> 2.  **Inductive Step:** Show that the conditional statement $P(k) \to P(k+1)$ is true for all positive integers $k$ (If you are on rung $k$, you can move to rung $k+1$).
> 3.  **Conclusion:** Therefore, $P(n)$ is true for all positive integers $n$ (You can climb the ladder forever).

### 7.2 Strong Induction
A variant of induction where the inductive step assumes stronger information.
* **Basis Step:** Verify $P(1)$ is true.
* **Inductive Step:** Show that $[P(1) \land P(2) \land \dots \land P(k)] \to P(k+1)$ is true.
* **Usage:** Necessary when proving a result for $k+1$ requires assuming the truth of the statement for integers smaller than $k$ (not just $k$).
* **Example:** Proving the Fundamental Theorem of Arithmetic (every integer $>1$ is a prime or a product of primes).

### 7.3 Recursive Algorithms: Merge Sort
A recursive sorting algorithm based on the divide-and-conquer paradigm.
1.  **Divide:** If the list has more than one element, split it into two halves.
2.  **Conquer:** Recursively sort each half.
3.  **Merge:** Combine (merge) the two sorted halves back into a single sorted list.
* **Complexity:** $O(n \log n)$.

---

## 🎲 Chapter 8: Counting Principles

### 8.1 Basic Rules
* **Product Rule:** If a procedure can be broken down into a sequence of two tasks, where there are $n_1$ ways to do the first task and $n_2$ ways to do the second task, then there are $n_1 \cdot n_2$ ways to do the procedure.
* **Sum Rule:** If a task can be done either in one of $n_1$ ways or in one of $n_2$ ways, where none of the set of $n_1$ ways is the same as any of the set of $n_2$ ways, then there are $n_1 + n_2$ ways to do the task.

### 8.2 The Pigeonhole Principle
> [!INFO] Theorem
> If $k+1$ or more objects are placed into $k$ boxes, then there is at least one box containing two or more objects.
> * **Generalized Pigeonhole Principle:** If $N$ objects are placed into $k$ boxes, then there is at least one box containing at least $\lceil N/k \rceil$ objects.

### 8.3 Permutations and Combinations
* **Permutation:** An ordered arrangement of objects.
    * Formula: $P(n,r) = \frac{n!}{(n-r)!}$
* **Combination:** An unordered selection of objects (subset).
    * Formula: $C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$
    * Identity: $C(n,r) = C(n, n-r)$.

---

## 📈 Chapter 9: Advanced Counting

### 9.1 Recurrence Relations
A recurrence relation for a sequence {a_n} is an equation that expresses $a_n$ in terms of one or more of the previous terms of the sequence.
* **Example:** The Fibonacci sequence is defined by $f_n = f_{n-1} + f_{n-2}$ with initial conditions $f_0=0, f_1=1$.

### 9.2 Solving Linear Homogeneous Relations
For a relation of the form $a_n = c_1 a_{n-1} + c_2 a_{n-2}$:
1.  Form the **Characteristic Equation:** $r^2 - c_1 r - c_2 = 0$.
2.  Find the roots $r_1$ and $r_2$.
3.  **General Solution:**
    * If roots are distinct: $a_n = \alpha r_1^n + \beta r_2^n$.
    * If there is one repeated root $r_0$: $a_n = \alpha r_0^n + \beta n r_0^n$.
    * The constants $\alpha$ and $\beta$ are determined by the initial conditions.

### 9.3 Inclusion-Exclusion Principle
A technique to count the size of the union of multiple sets by accounting for overcounting.
* **For 2 sets:** $|A \cup B| = |A| + |B| - |A \cap B|$.
* **For 3 sets:** $|A \cup B \cup C| = |A| + |B| + |C| - (|A \cap B| + |A \cap C| + |B \cap C|) + |A \cap B \cap C|$.

---

## 🎲 Chapter 10: Discrete Probability

### 10.1 Finite Probability (Laplace)
If $S$ is a finite sample space of equally likely outcomes, and $E$ is an event (a subset of $S$):
$$p(E) = \frac{|E|}{|S|}$$ 

### 10.2 Probability Rules
* **Probability of Complement:** $p(\overline{E}) = 1 - p(E)$.
* **Probability of Union:** $p(E \cup F) = p(E) + p(F) - p(E \cap F)$.

### 10.3 Conditional Probability & Independence
* **Conditional Probability:** The probability of event $E$ given that event $F$ has occurred ($p(F) > 0$):
    $$p(E|F) = \frac{p(E \cap F)}{p(F)}$$
* **Independence:** Two events $E$ and $F$ are independent if and only if the probability of their intersection is the product of their individual probabilities:
    $$p(E \cap F) = p(E) \cdot p(F)$$
