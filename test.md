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

## 🔢Chapter 6: Basic Structures

## 1. Introduction to Discrete Mathematics
**Discrete Mathematics** deals with objects that can assume only distinct, separated values (e.g., integers, graphs, logic statements). This is in contrast to **Continuous Mathematics**, which deals with objects that vary smoothly (e.g., real numbers, calculus).

### Applications
* **Google Maps**: Models roads as a **Graph**.
    * **Nodes (Vertices)**: Intersections or Points of Interest (POIs).
    * **Edges**: Roads connecting nodes (can be directed or undirected).
    * **Weights**: Distance, time, or cost (fuel/tolls).
    * **Goal**: Find the **shortest path** using logic and algorithms.

---

## 2. Sets
### Definitions
* **Set**: An unordered collection of objects.
* **Element ($a \in A$)**: An object belonging to set $A$.
* **Empty Set ($\emptyset$ or $\{\})$**: A set with no elements.
* **Universal Set ($U$)**: The set containing everything currently under consideration.

### Describing Sets
1.  **Roster Method**: Lists elements explicitly.
    * Example: $V = \{a, e, i, o, u\}$
    * *Note*: Order does not matter, and duplicates are ignored ($\{1, 2, 2\} = \{1, 2\}$).
2.  **Set-Builder Notation**: Specifies properties satisfied by members.
    * Notation: $S = \{ x \mid P(x) \}$
    * Example: $O = \{ x \in \mathbb{Z}^+ \mid x \text{ is odd and } x < 10 \}$
3.  **Venn Diagram**: Graphical representation using geometric shapes.

### Important Sets
* $\mathbb{N}$: Natural numbers $\{0, 1, 2, \dots\}$
* $\mathbb{Z}$: Integers $\{\dots, -2, -1, 0, 1, 2, \dots\}$
* $\mathbb{Z}^+$: Positive integers $\{1, 2, 3, \dots\}$
* $\mathbb{R}$: Real numbers
* $\mathbb{Q}$: Rational numbers ($p/q$ where $p, q$ are integers, $q \neq 0$)

### Subsets and Equality
* **Subset ($A \subseteq B$)**: Every element of $A$ is also in $B$.
    * $\forall x (x \in A \rightarrow x \in B)$
    * **Theorem**: For any set $S$, $\emptyset \subseteq S$ and $S \subseteq S$.
* **Proper Subset ($A \subset B$)**: $A \subseteq B$ but $A \neq B$.
* **Set Equality ($A = B$)**: $A$ and $B$ have exactly the same elements.
    * $A = B \iff (A \subseteq B \land B \subseteq A)$.

### Power Sets
* **Power Set ($P(A)$)**: The set of all subsets of $A$.
* **Cardinality**: If $|A| = n$, then $|P(A)| = 2^n$.
    * Example: If $A = \{a, b\}$, then $P(A) = \{\emptyset, \{a\}, \{b\}, \{a, b\}\}$.

### Tuples and Cartesian Products
* **Ordered n-tuple**: $(a_1, a_2, \dots, a_n)$. Order matters.
* **Cartesian Product ($A \times B$)**: The set of all ordered pairs $(a, b)$ where $a \in A$ and $b \in B$.
    * $A \times B = \{ (a, b) \mid a \in A \land b \in B \}$
    * **Cardinality**: $|A \times B| = |A| \cdot |B|$.

---

## 3. Set Operations
### Basic Operations
1.  **Union ($A \cup B$)**: Elements in $A$ OR $B$.
    * $\{ x \mid x \in A \lor x \in B \}$
2.  **Intersection ($A \cap B$)**: Elements in BOTH $A$ and $B$.
    * $\{ x \mid x \in A \land x \in B \}$
    * *Disjoint*: If $A \cap B = \emptyset$.
3.  **Difference ($A - B$)**: Elements in $A$ but NOT in $B$.
    * $\{ x \mid x \in A \land x \notin B \}$
4.  **Complement ($\overline{A}$)**: Elements in $U$ but NOT in $A$.
    * $\{ x \mid x \in U \land x \notin A \}$

### Set Identities (Key Laws)
* **De Morgan's Laws**:
    * $\overline{A \cup B} = \overline{A} \cap \overline{B}$
    * $\overline{A \cap B} = \overline{A} \cup \overline{B}$
* **Distributive Laws**:
    * $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
    * $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
* **Inclusion-Exclusion Principle**:
    * $|A \cup B| = |A| + |B| - |A \cap B|$

---

## 4. Functions
### Definitions
* **Function ($f: A \rightarrow B$)**: Assigns each element of $A$ (Domain) to exactly one element of $B$ (Codomain).
    * **Image**: If $f(a) = b$, $b$ is the image of $a$.
    * **Preimage**: $a$ is the preimage of $b$.
    * **Range**: The set of all images ($f(A) \subseteq B$).

### Types of Functions
1.  **Injective (One-to-One)**: Distinct elements in $A$ map to distinct elements in $B$.
    * $\forall a, b \in A, f(a) = f(b) \rightarrow a = b$.
2.  **Surjective (Onto)**: Every element in $B$ is the image of some element in $A$.
    * Range = Codomain.
3.  **Bijective (One-to-One Correspondence)**: Both injective and surjective.

### Inverse and Composition
* **Inverse Function ($f^{-1}$)**: Exists only if $f$ is a bijection.
    * $f^{-1}(b) = a \iff f(a) = b$.
* **Composition ($f \circ g$)**: $(f \circ g)(x) = f(g(x))$.

### Special Functions
* **Floor ($\lfloor x \rfloor$)**: Largest integer $\le x$.
    * $\lfloor 3.5 \rfloor = 3, \lfloor -1.5 \rfloor = -2$.
* **Ceiling ($\lceil x \rceil$)**: Smallest integer $\ge x$.
    * $\lceil 3.5 \rceil = 4, \lceil -1.5 \rceil = -1$.
* **Factorial ($n!$)**: Product of first $n$ positive integers. $0! = 1$.

---

## 5. Sequences and Summations
* **Sequence**: An ordered list of elements, often defined as a function from integers to a set.
    * Notation: $\{a_n\}$ where $a_n$ is the $n$-th term.
* **Recurrence Relation**: Expresses $a_n$ in terms of previous terms (e.g., $a_n = a_{n-1} + 3$).
    * **Fibonacci Sequence**: $f_n = f_{n-1} + f_{n-2}$, with $f_0 = 0, f_1 = 1$.
* **Summations**:
    * Notation: $\sum_{j=m}^{n} a_j$ represents the sum $a_m + a_{m+1} + \dots + a_n$.

---

## 6. Matrices
### Basics
* **Matrix**: A rectangular array of numbers.
* **Order (Size)**: $m \times n$ matrix has $m$ rows and $n$ columns.
* **Equality**: Two matrices are equal if they have the same size and corresponding entries are equal.
* **Types**:
    * **Square Matrix**: Rows = Columns ($n \times n$).
    * **Row Matrix**: $1 \times n$.
    * **Column Matrix**: $m \times 1$.
    * **Identity Matrix ($I_n$)**: Square matrix with 1s on the diagonal and 0s elsewhere.

### Arithmetic
* **Addition**: Add corresponding elements ($C = A + B \iff c_{ij} = a_{ij} + b_{ij}$). Requires same size.
* **Multiplication**:
    * Matrix multiplication is valid if columns of 1st matrix = rows of 2nd matrix.
    * $(AB)_{ij} = \sum_{k} a_{ik} b_{kj}$.

---
*Based on uploaded file: Chapter 6.pdf (CKC111 Discrete Structures)*

---

## 🔄 Chapter 7: Induction and Recursion

## 1. Mathematical Induction

Mathematical Induction is a powerful proof technique used to prove that a propositional function $P(n)$ is true for all positive integers $n$.

### The Principle of Mathematical Induction
To prove that $P(n)$ is true for all positive integers $n$, we must complete two steps:

1.  **Basis Step:** Verify that $P(1)$ is true.
2.  **Inductive Step:** Show that the conditional statement $P(k) \rightarrow P(k+1)$ is true for all positive integers $k$.

**The Logic:**
* **Intuition:** This is often compared to climbing an infinite ladder or the domino effect.
    * If you can get on the first rung (Basis Step)...
    * And if standing on rung $k$ implies you can reach rung $k+1$ (Inductive Step)...
    * Then you can reach *every* rung on the ladder.

**Formal Logic Rule:**
$$[P(1) \wedge \forall k (P(k) \rightarrow P(k+1))] \rightarrow \forall n P(n)$$

---

### Guidelines for Writing Induction Proofs
1.  **Define:** Clearly state the proposition $P(n)$.
2.  **Basis Step:** Show $P(1)$ (or the starting integer $b$) is valid. Write "LHS = ...", "RHS = ...", "Therefore LHS = RHS".
3.  **Inductive Step:**
    * State the **Inductive Hypothesis (IH)**: "Assume $P(k)$ is true for an arbitrary positive integer $k$."
    * State the **Goal**: "We must show that $P(k+1)$ is true."
    * **Derivation**: Use algebra and the IH to transform the expression for $k$ into the expression for $k+1$.
4.  **Conclusion:** State that by the principle of mathematical induction, $P(n)$ is true for all $n$.

---

### Examples of Proofs

#### A. Summation Formulas
**Proposition:** Show that $1 + 2 + \dots + n = \frac{n(n+1)}{2}$.

1.  **Basis Step ($P(1)$):**
    * LHS: $1$
    * RHS: $\frac{1(1+1)}{2} = 1$
    * $P(1)$ is true.
2.  **Inductive Step:**
    * **Assume $P(k)$:** $1 + 2 + \dots + k = \frac{k(k+1)}{2}$
    * **Show $P(k+1)$:** We need to show $1 + \dots + k + (k+1) = \frac{(k+1)(k+2)}{2}$
    * **Proof:**
        $$\begin{aligned} [1 + \dots + k] + (k+1) &= \frac{k(k+1)}{2} + (k+1) \quad \text{(Substitute IH)} \\ &= \frac{k(k+1) + 2(k+1)}{2} \\ &= \frac{(k+1)(k+2)}{2} \end{aligned}$$
    * This matches the formula for $P(k+1)$.

#### B. Inequalities
**Proposition:** Prove $n < 2^n$ for all positive integers $n$.

1.  **Basis Step:** $1 < 2^1 \Rightarrow 1 < 2$ (True).
2.  **Inductive Step:**
    * **Assume $P(k)$:** $k < 2^k$
    * **Show $P(k+1)$:** $k+1 < 2^{k+1}$
    * **Proof:**
        $$\begin{aligned} k &< 2^k \\ k + 1 &< 2^k + 1 \quad \text{(Add 1 to both sides)} \\ &< 2^k + 2^k \quad \text{(Since } 1 < 2^k \text{ for } k \ge 1) \\ &= 2 \cdot 2^k \\ &= 2^{k+1} \end{aligned}$$

#### C. Divisibility
**Proposition:** $n^3 - n$ is divisible by 3.

1.  **Basis Step:** $1^3 - 1 = 0$. 0 is divisible by 3.
2.  **Inductive Step:**
    * **Assume $P(k)$:** $k^3 - k$ is divisible by 3.
    * **Consider $(k+1)$:**
        $$\begin{aligned} (k+1)^3 - (k+1) &= (k^3 + 3k^2 + 3k + 1) - k - 1 \\ &= (k^3 - k) + 3(k^2 + k) \end{aligned}$$
    * $(k^3 - k)$ is divisible by 3 (by IH).
    * $3(k^2 + k)$ is clearly divisible by 3.
    * The sum of two multiples of 3 is divisible by 3.

---

## 2. Strong Induction

Strong induction is useful when proving $P(k+1)$ requires assuming the truth of $P(j)$ for values smaller than $k$, not just $k$ itself.

### Principle of Strong Induction
* **Basis Step:** Verify $P(1)$ is true.
* **Inductive Step:** Show that $[P(1) \wedge P(2) \wedge \dots \wedge P(k)] \rightarrow P(k+1)$.
* **Inductive Hypothesis:** Assume $P(j)$ is true for all $1 \le j \le k$.

### Example: The Postage Stamp Problem
**Proposition:** Every amount of postage of 12 cents or more can be formed using just 4-cent and 5-cent stamps.

* **Basis Steps:**
    * $P(12): 4 + 4 + 4$
    * $P(13): 4 + 4 + 5$
    * $P(14): 4 + 5 + 5$
    * $P(15): 5 + 5 + 5$
* **Inductive Step:**
    * Assume $P(j)$ holds for $12 \le j \le k$, where $k \ge 15$.
    * We want to form postage for $k+1$.
    * Since $k \ge 15$, we know $k-3 \ge 12$.
    * By the hypothesis, $P(k-3)$ is true (we can form postage for $k-3$).
    * Add one **4-cent stamp** to the solution for $k-3$.
    * $(k-3) + 4 = k+1$.
    * Thus, $P(k+1)$ is true.

---

## 3. Recursive Definitions

Recursion defines an object in terms of itself.

### A. Recursively Defined Functions
To define a function with the set of non-negative integers as its domain:
1.  **Basis Step:** Specify the value of the function at zero ($f(0)$).
2.  **Recursive Step:** Give a rule for finding $f(n+1)$ based on values at smaller integers.

**Common Examples:**
* **Factorial ($n!$):**
    * Basis: $f(0) = 1$
    * Recursive: $f(n+1) = (n+1)f(n)$
* **Fibonacci Numbers ($f_n$):**
    * Basis: $f_0 = 0, f_1 = 1$
    * Recursive: $f_n = f_{n-1} + f_{n-2}$ for $n \ge 2$.

### B. Recursively Defined Sets
1.  **Basis Step:** Specify an initial collection of elements.
2.  **Recursive Step:** Rules for forming new elements from existing ones.

**Example: Multiples of 3 (Set $S$)**
* Basis: $3 \in S$
* Recursive: If $x \in S$ and $y \in S$, then $x + y \in S$.

**Example: Rooted Trees**
* Basis: A single vertex $r$ is a rooted tree.
* Recursive: If $T_1, \dots, T_n$ are disjoint rooted trees, connecting a new root $r$ to the roots of $T_1, \dots, T_n$ creates a new rooted tree.

**Example: Binary Trees**
* Basis: An empty set $\emptyset$ is an extended binary tree.
* Recursive: If $T_1$ and $T_2$ are extended binary trees, connecting a root $r$ to $T_1$ (left) and $T_2$ (right) creates a new tree.

---

## 4. Structural Induction

Structural induction is used to prove results about recursively defined sets.

**Method:**
1.  **Basis Step:** Show the result holds for the elements specified in the basis step of the recursive definition.
2.  **Recursive Step:** Show that if the statement is true for the existing elements used to construct a new element, the result holds for the new element.

**Example: Multiples of 3**
* **Definition of Set S:** $3 \in S$; if $x, y \in S \rightarrow x+y \in S$.
* **Claim:** Every element in $S$ is divisible by 3 ($3|x$).
* **Basis:** $3 \in S$, and $3|3$. (True).
* **Recursive Step:**
    * Assume $a \in S$ and $b \in S$ are divisible by 3.
    * Let $a = 3m$ and $b = 3n$.
    * The new element is $a+b$.
    * $a+b = 3m + 3n = 3(m+n)$.
    * Therefore, $3 | (a+b)$.

---

## 5. Recursive Algorithms

An algorithm is **recursive** if it solves a problem by reducing it to an instance of the same problem with smaller input.

### Key Algorithms

#### 1. Recursive Factorial
```pseudo
procedure factorial(n: nonnegative integer)
    if n = 0 then return 1
    else return n * factorial(n-1)
```

#### 2. Recursive Power ($a^n$)
```pseudo
procedure power(a: nonzero real, n: nonnegative integer)
    if n = 0 then return 1
    else return a * power(a, n-1)
```

#### 3. Greatest Common Divisor (GCD)
Based on $gcd(a, b) = gcd(b \mod a, a)$.
```pseudo
procedure gcd(a, b: nonnegative integers with a < b)
    if a = 0 then return b
    else return gcd(b mod a, a)
```

#### 4. Recursive Binary Search
* Compare target $x$ with the middle term $a_m$.
* If $x < a_m$, search the left subarray.
* If $x > a_m$, search the right subarray.
```pseudo
procedure binary_search(i, j, x)
    m := floor((i + j)/2)
    if x = a_m then return m
    else if (x < a_m and i < m) then return binary_search(i, m-1, x)
    else if (x > a_m and j > m) then return binary_search(m+1, j, x)
    else return 0
```

### Proving Correctness
We use induction to prove recursive algorithms work.
* **Basis:** Prove it works for the simplest input (e.g., $n=0$ or $n=1$).
* **Inductive Step:** Assume the algorithm works for input $k$ (or smaller inputs), then prove it works for input $k+1$.

---

## 6. Merge Sort

Merge Sort is a classic recursive sorting algorithm using the "Divide and Conquer" strategy.

**Logic:**
1.  Split a list into two halves.
2.  Recursively sort each half.
3.  **Merge** the two sorted halves into one sorted list.

**The Algorithm:**
```pseudo
procedure mergesort(L = a_1, ..., a_n)
    if n > 1 then
        m := floor(n/2)
        L1 := a_1, ..., a_m
        L2 := a_{m+1}, ..., a_n
        L := merge(mergesort(L1), mergesort(L2))
```

**The Merge Procedure:**
* Compare the first elements of the two lists.
* Remove the smaller element and append it to the result list.
* Repeat until one list is empty, then append the remainder of the other list.

**Complexity:**
* It splits the list $\log n$ times (height of the tree).
* At each level, it performs $O(n)$ work to merge.
* Total complexity: $O(n \log n)$.
---

## 🎲Chapter 8: Counting

## 1. Basic Principles of Counting

### 1.1 The Product Rule
Used when a procedure can be broken down into a sequence of tasks.

* **Definition:** If a procedure consists of a sequence of two tasks, and there are $n_1$ ways to do the first task and $n_2$ ways to do the second task, then there are $n_1 \cdot n_2$ ways to do the procedure.
* **General Formula (Cartesian Product):**
    If $A_1, A_2, \dots, A_m$ are finite sets, the number of elements in their Cartesian product is:
    $$|A_1 \times A_2 \times \dots \times A_m| = |A_1| \cdot |A_2| \cdot \dots \cdot |A_m|$$
* **Key Applications:**
    * **Bit Strings:** Since each bit is either 0 or 1, the number of bit strings of length $n$ is $2^n$.
    * **Functions:** The number of functions from a set with $m$ elements to a set with $n$ elements is $n^m$.
    * **One-to-One Functions:** The number of one-to-one functions from a set with $m$ elements to one with $n$ elements is $P(n,m) = n(n-1)(n-2)\dots(n-m+1)$.
    * **Subsets:** The number of different subsets of a finite set $S$ is $2^{|S|}$.

### 1.2 The Sum Rule
Used when a task can be done in one of several **disjoint** ways (mutually exclusive).

* **Definition:** If a task can be done either in one of $n_1$ ways or in one of $n_2$ ways, where none of the $n_1$ ways is the same as any of the $n_2$ ways, then there are $n_1 + n_2$ ways to do the task.
* **Set Theory Equivalent:**
    $$|A \cup B| = |A| + |B| \quad \text{if } A \cap B = \emptyset$$
* **Example:** Choosing a representative who is either a faculty member (37 people) or a student (83 people), with no overlap: $37 + 83 = 120$ ways.

### 1.3 The Subtraction Rule (Inclusion-Exclusion)
Used when the ways to perform a task are **not disjoint** (they overlap).

* **Definition:** If a task can be done in $n_1$ or $n_2$ ways, the total is the sum of the ways minus the number of ways common to both.
* **Formula:**
    $$|A \cup B| = |A| + |B| - |A \cap B|$$
* **Example:** Counting bit strings of length 8 that start with `1` OR end with `00`.
    * Start with `1`: $2^7 = 128$
    * End with `00`: $2^6 = 64$
    * Start with `1` AND end with `00`: $2^5 = 32$
    * **Result:** $128 + 64 - 32 = 160$

### 1.4 The Division Rule
Used when counting items where multiple outcomes are considered "the same" (equivalence).

* **Definition:** There are $n/d$ ways to do a task if it can be done in $n$ ways, but for every way $w$, exactly $d$ of the $n$ ways correspond to way $w$.
* **Application (Circular Seating):**
    * Seating $n$ people around a circular table where rotation doesn't change the arrangement.
    * For 4 people: Linear arrangements are $4! = 24$. Since 4 rotations result in the same seating, the total is $24/4 = 6$.
    * **General Formula:** $(n-1)!$

---

## 2. Tree Diagrams

Tree diagrams are visual tools used to solve counting problems by representing choices as branches and outcomes as leaves.

* **Structure:**
    * **Branches:** Represent possible choices at each step.
    * **Leaves:** Represent final outcomes.
* **Usage:** Useful when the number of choices available at a step depends on previous selections (e.g., specific T-shirt sizes only coming in certain colors).
* **Calculation:** The total number of leaves is the solution.

---

## 3. The Pigeonhole Principle

### 3.1 Basic Pigeonhole Principle
> If $k+1$ objects (pigeons) are placed into $k$ boxes (pigeonholes), then at least one box contains two or more objects.

* **Proof:** Proof by contraposition.
* **Corollary (Functions):** A function from a set with $k+1$ or more elements to a set with $k$ elements cannot be one-to-one.
* **Example 1 (Birthdays):** In a crowd of 367 people, at least two must have the same birthday (since there are only 366 possible birthdates).
* **Example 2 (Exam Scores):** If scores range from 0 to 100 (101 possibilities), a class of 102 students guarantees at least two students have the same score.

### 3.2 Generalized Pigeonhole Principle
> If $N$ objects are placed into $k$ pigeonholes, then there is at least one pigeonhole with at least $\lceil N/k \rceil$ objects.

* **Formula:** $\lceil N/k \rceil$ (Ceiling function: round up to the nearest integer).
* **Example (Grades):**
    * Class size ($N$) = 52.
    * Possible grades ($k$) = 5 (A, B, C, D, F).
    * **Guarantee:** At least $\lceil 52/5 \rceil = 11$ students have the same grade.
* **Example (Months):**
    * Saturdays in a year ($N$) = 52.
    * Months ($k$) = 12.
    * **Guarantee:** At least one month has $\lceil 52/12 \rceil = 5$ Saturdays.

---

## 4. Permutations and Combinations

### 4.1 Permutations (Order Matters)
A permutation is an ordered arrangement of distinct objects.

* **Notation:** $P(n,r)$ = Number of $r$-permutations of a set with $n$ distinct elements.
* **Formula:**
    $$P(n,r) = n(n-1)(n-2)\dots(n-r+1) = \frac{n!}{(n-r)!}$$
* **Key Concept:** Order matters (e.g., selecting winners for 1st, 2nd, and 3rd place).
* **Factorial Definition:** $P(n,n) = n!$.

### 4.2 Combinations (Order Does Not Matter)
An $r$-combination is an unordered selection of $r$ elements from a set.

* **Notation:** $C(n,r)$ or $\binom{n}{r}$.
* **Formula:**
    $$C(n,r) = \frac{n!}{r!(n-r)!}$$
* **Relation to Permutations:** $C(n,r) = \frac{P(n,r)}{P(r,r)}$.
* **Symmetry Corollary:** $C(n,r) = C(n, n-r)$.
* **Example:** Selecting a hand of 5 cards from 52. Order drawn doesn't matter.

---

## 5. Generalized Permutations and Combinations

### 5.1 Summary Table

| Type | Repetition Allowed? | Formula |
| :--- | :---: | :--- |
| **r-permutations** | No | $\frac{n!}{(n-r)!}$ |
| **r-combinations** | No | $\frac{n!}{r!(n-r)!}$ |
| **r-permutations** | **Yes** | $n^r$ |
| **r-combinations** | **Yes** | $C(n+r-1, r)$ |

### 5.2 Permutations with Repetition
* **Rule:** The number of $r$-permutations of a set of $n$ objects with repetition allowed is $n^r$.
* **Example:** Strings of length $r$ from the English alphabet (26 letters) $\rightarrow 26^r$.

### 5.3 Combinations with Repetition
Choosing $r$ items from a set of $n$ elements where items can be selected multiple times.

* **Formula:**
    $$C(n+r-1, r) = \frac{(n+r-1)!}{r!(n-1)!}$$
* **Analogy:** Often solved using **Stars and Bars** (separators).
* **Example (Cookie Shop):**
    * 4 kinds of cookies ($n=4$).
    * Choose 6 cookies ($r=6$).
    * **Calculation:** $C(4+6-1, 6) = C(9,6) = 84$ ways.
* **Example (Integer Solutions):**
    * Find non-negative integer solutions for $x_1 + x_2 + x_3 = 11$.
    * $n=3$ (variables/bins), $r=11$ (items/sum).
    * **Calculation:** $C(3+11-1, 11) = C(13, 11) = 78$ solutions.

### 5.4 Permutations with Indistinguishable Objects
Arranging $n$ objects where some are identical/indistinguishable.

* **Theorem:** The number of different permutations of $n$ objects, where there are $n_1$ indistinguishable objects of type 1, $n_2$ of type 2, ..., $n_k$ of type k is:
    $$\frac{n!}{n_1! n_2! \dots n_k!}$$
* **Example:** Reordering letters of "SUCCESS".
    * Total ($n$) = 7.
    * $S$ appears 3 times ($n_1=3$).
    * $C$ appears 2 times ($n_2=2$).
    * $U$ appears 1 time ($n_3=1$).
    * $E$ appears 1 time ($n_4=1$).
    * **Calculation:** $\frac{7!}{3!2!1!1!} = 420$.
---

## 📈Chapter 9: Advanced Counting Techniques

## 1. Applications of Recurrence Relations

### 1.1 Definition
A **recurrence relation** for a sequence $\{a_n\}$ is an equation that expresses $a_n$ in terms of one or more of the previous terms of the sequence (e.g., $a_0, a_1, \dots, a_{n-1}$) for all integers $n \ge n_0$.

* **Solution:** A sequence is a solution if its terms satisfy the recurrence relation.
* **Initial Conditions:** Specify the terms that precede the first term where the relation takes effect (required to find a unique solution).

> [!EXAMPLE] Basic Sequence
> **Relation:** $a_n = a_{n-1} + 3$ for $n=1, 2, 3 \dots$
> **Initial Condition:** $a_0 = 2$
>
> * $a_1 = a_0 + 3 = 2 + 3 = 5$
> * $a_2 = 5 + 3 = 8$
> * $a_3 = 8 + 3 = 11$

### 1.2 Modeling: Rabbits and Fibonacci
This classic problem models population growth (pairs of rabbits) where:
1.  Rabbits do not breed until 2 months old.
2.  Once fertile, every pair produces one new pair per month.
3.  Rabbits never die.

**The Logic:**
$$Total = (\text{Pairs from previous month}) + (\text{Newborn pairs})$$
$$f_n = f_{n-1} + f_{n-2}$$

* **Recurrence:** $f_n = f_{n-1} + f_{n-2}$ for $n \ge 3$.
* **Initial Conditions:** $f_1 = 1$, $f_2 = 1$.

### 1.3 Modeling: Counting Bit Strings
**Problem:** Find the number of bit strings of length $n$ without two consecutive 0s. Let $a_n$ be this number.

**Breakdown:**
Bit strings must end in either a `1` or a `0`.
1.  **Ending in 1:** The previous $n-1$ bits can be any valid string. ($a_{n-1}$ ways).
2.  **Ending in 0:** To avoid consecutive 0s, the bit before the last 0 *must* be a 1. So the string ends in `10`. The remaining $n-2$ bits can be any valid string. ($a_{n-2}$ ways).

**Relation:**
$$a_n = a_{n-1} + a_{n-2}$$
* **Initial Conditions:**
    * $a_1 = 2$ (Strings: 0, 1)
    * $a_2 = 3$ (Strings: 01, 10, 11) note: 00 is invalid.
* *Note:* This satisfies the same relation as Fibonacci, but with different starting values ($a_n = f_{n+2}$).

---

## 2. Solving Linear Recurrence Relations

### 2.1 Linear Homogeneous Recurrence Relations
A relation of degree $k$ with constant coefficients takes the form:
$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \dots + c_k a_{n-k}$$
* **Linear:** RHS is a sum of previous terms multiplied by constants.
* **Homogeneous:** No terms occur that are not multiples of the $a_j$'s (i.e., no standalone $F(n)$).
* **Constant Coefficients:** $c_1, c_2 \dots$ are fixed real numbers.

#### Solving Method (Degree 2)
To solve $a_n = c_1 a_{n-1} + c_2 a_{n-2}$:

1.  **Form the Characteristic Equation:** Replace $a_n$ with $r^n$.
    $$r^2 - c_1 r - c_2 = 0$$
2.  **Find the Roots ($r_1, r_2$):** Factor the quadratic.
3.  **General Solution:**
    If roots are distinct ($r_1 \ne r_2$):
    $$a_n^{(h)} = c_1 r_1^n + c_2 r_2^n$$
4.  **Find Constants:** Use initial conditions (e.g., $a_0, a_1$) to solve for $c_1$ and $c_2$.

> [!EXAMPLE] Solving Homogeneous
> **Relation:** $a_n = a_{n-1} + 2a_{n-2}$ with $a_0=2, a_1=7$.
> 1.  **Characteristic Eq:** $r^2 - r - 2 = 0 \Rightarrow (r-2)(r+1) = 0$.
> 2.  **Roots:** $r_1 = 2, r_2 = -1$.
> 3.  **General Form:** $a_n = c_1(2)^n + c_2(-1)^n$.
> 4.  **Solve Constants:**
>     * $n=0: c_1 + c_2 = 2$
>     * $n=1: 2c_1 - c_2 = 7$
>     * Result: $c_1 = 3, c_2 = -1$.
> 5.  **Final Solution:** $a_n = 3(2^n) - (-1)^n$.

### 2.2 Linear Non-homogeneous Recurrence Relations
Form:
$$a_n = c_1 a_{n-1} + \dots + c_k a_{n-k} + F(n)$$
where $F(n)$ is a function not identically zero.

#### Solving Method
The solution is the sum of the homogeneous solution and a particular solution:
$$a_n = a_n^{(h)} + a_n^{(p)}$$

**Steps:**
1.  **Find $a_n^{(h)}$:** Ignore $F(n)$ and solve as a homogeneous relation (see 2.1).
2.  **Find $a_n^{(p)}$:** Guess the form based on $F(n)$ and solve for coefficients.
    * If $F(n)$ is a polynomial of degree $t$, guess a polynomial of degree $t$ (e.g., $Cn + D$).
    * If $F(n) = s^n$, guess $C \cdot s^n$.
3.  **Combine:** Add them together.

> [!EXAMPLE] Solving Non-homogeneous
> **Relation:** $a_n = 3a_{n-1} + 2n$ with $a_1=3$.
>
> 1.  **Homogeneous Part ($a_n - 3a_{n-1} = 0$):**
>     * Root $r=3$.
>     * $a_n^{(h)} = \alpha \cdot 3^n$.
> 2.  **Particular Part ($F(n) = 2n$):**
>     * Since $F(n)$ is linear, guess $a_n^{(p)} = cn + d$.
>     * Substitute into original relation: $cn+d = 3(c(n-1)+d) + 2n$.
>     * Simplify and compare coefficients to find $c = -1, d = -3/2$.
>     * $a_n^{(p)} = -n - \frac{3}{2}$.
> 3.  **General Solution:** $a_n = \alpha \cdot 3^n - n - \frac{3}{2}$.
> 4.  **Find $\alpha$:** Using $a_1 = 3$, we find $\alpha = 11/6$.
> 5.  **Final:** $a_n = \frac{11}{6}3^n - n - \frac{3}{2}$.

---

## 3. Generating Functions

### 3.1 Definition
The generating function for a sequence $a_0, a_1, \dots, a_k, \dots$ is the infinite series:
$$G(x) = \sum_{k=0}^{\infty} a_k x^k = a_0 + a_1x + a_2x^2 + \dots$$

### 3.2 Applications
Useful for solving counting problems (like choosing items). The exponent of $x$ represents the "size" or "number of items," and the coefficient represents the number of ways to select them.

**Example: Finite Sequence**
Sequence: $1, 4, 6, 4, 1, 0 \dots$ (Pascal's/Binomial coefficients for $n=4$)
Generating Function:
$$G(x) = 1 + 4x + 6x^2 + 4x^3 + x^4$$

**Standard Examples:**
* Sequence $a_k = 1$ (all ones): $G(x) = \sum x^k = 1 + x + x^2 + \dots = \frac{1}{1-x}$
* Sequence $a_k = 2^k$: $G(x) = \sum (2x)^k = \frac{1}{1-2x}$

---

## 4. Inclusion-Exclusion Principle

This principle generalizes the method of finding the size of the union of finite sets.

### 4.1 Two Finite Sets
$$|A \cup B| = |A| + |B| - |A \cap B|$$
*You subtract the intersection because it was counted twice (once in A, once in B).*

### 4.2 Three Finite Sets
To find the union of three sets, we include single sets, exclude pairs, and include the triple intersection.

$$|A \cup B \cup C| = |A| + |B| + |C| - (|A \cap B| + |A \cap C| + |B \cap C|) + |A \cap B \cap C|$$

**Pattern:**
1.  Sum sizes of individual sets ($+$).
2.  Subtract sizes of all pairwise intersections ($-$).
3.  Add size of the intersection of all three ($+$).

> [!EXAMPLE] Class Enrollment
> * $|S|$ (Spanish) = 1232
> * $|F|$ (French) = 879
> * $|R|$ (Russian) = 114
> * Intersections: $|S \cap F|=103$, $|S \cap R|=23$, $|F \cap R|=14$
> * Total Union $|S \cup F \cup R| = 2092$
>
> **Find $|S \cap F \cap R|$:**
> $2092 = 1232 + 879 + 114 - 103 - 23 - 14 + |S \cap F \cap R|$
> $2092 = 2085 + |S \cap F \cap R|$
> $|S \cap F \cap R| = 7$

---

## 5. Summary
* **Recurrence Relations** allow us to define sequences based on previous terms (e.g., Fibonacci).
* **Homogeneous** linear relations are solved using roots of a polynomial characteristic equation.
* **Non-homogeneous** relations require finding a particular solution based on the "extra" term $F(n)$.
* **Generating Functions** transform sequences into power series to solve complex counting problems.
* **Inclusion-Exclusion** provides an accurate count for unions of overlapping sets by alternating addition and subtraction of intersections.
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
