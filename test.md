# 📚 CKC111 Discrete Structures: Comprehensive Course Notes

## 📖 Chapter 1: Logic and Proofs

### 1.1 Propositional Logic
**Logic** serves as the foundation for mathematical reasoning and automated reasoning. It provides the rules for determining the truth of statements.

> [!INFO] Definition: Proposition
> A **proposition** is a declarative sentence that is either true ($T$) or false ($F$), but not both.
> * **Notation:** Variables $p, q, r, s, \dots$ are used to represent propositions.

**Examples:**
* $p$: "The sun rises in the East." (True Proposition)
* $q$: "$1 + 1 = 3$." (False Proposition)
* $r$: "What time is it?" (Not a proposition - Interrogative sentence)
* $s$: "$x + 1 = 2$." (Not a proposition - Truth value depends on variable $x$)

### 1.2 Logical Connectives & Truth Tables
Compound propositions are constructed by combining existing propositions using logical operators. The truth value of a compound proposition depends on the truth values of its components.

#### The Fundamental Operators

| Connective | Name | Notation | Meaning | Condition for Truth |
| :--- | :--- | :---: | :--- | :--- |
| **Negation** | NOT | $\neg p$ | It is not the case that $p$ | True when $p$ is False. |
| **Conjunction** | AND | $p \land q$ | $p$ and $q$ | True **only if both** $p$ and $q$ are True. |
| **Disjunction** | OR | $p \lor q$ | $p$ or $q$ (Inclusive) | True if **at least one** is True. |
| **Exclusive OR** | XOR | $p \oplus q$ | $p$ or $q$, but not both | True if exactly one is True (False if both are True). |
| **Implication** | IF-THEN | $p \to q$ | If $p$, then $q$ | False **only if** $p$ is True and $q$ is False. |
| **Biconditional** | IFF | $p \leftrightarrow q$ | $p$ if and only if $q$ | True if $p$ and $q$ have the **same** truth value. |

> [!WARNING] Critical Rule: Implication ($p \to q$)
> The implication $p \to q$ is defined to be **vacuously true** whenever the hypothesis $p$ is False, regardless of the truth value of the conclusion $q$.
> * Example: "If $1=2$, then I am the King of England." $\to$ **TRUE** (because the hypothesis "1=2" is false).

### 1.3 Logical Equivalences
Two compound propositions are **logically equivalent** ($p \equiv q$) if they have the same truth values in all possible cases (i.e., the biconditional $p \leftrightarrow q$ is a tautology).

#### Key Laws of Logic
1.  **Identity Laws:** $p \land T \equiv p$; $p \lor F \equiv p$
2.  **Domination Laws:** $p \lor T \equiv T$; $p \land F \equiv F$
3.  **Idempotent Laws:** $p \lor p \equiv p$; $p \land p \equiv p$
4.  **Double Negation:** $\neg(\neg p) \equiv p$
5.  **Distributive Laws:**
    * $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$
    * $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$
6.  **De Morgan's Laws:** (Crucial for manipulating negations)
    * $\neg(p \land q) \equiv \neg p \lor \neg q$
    * $\neg(p \lor q) \equiv \neg p \land \neg q$
7.  **Absorption Laws:**
    * $p \lor (p \land q) \equiv p$
    * $p \land (p \lor q) \equiv p$

#### Implication Equivalences
Understanding these forms is vital for proofs:
* **Contrapositive:** $p \to q \equiv \neg q \to \neg p$ (Logically Equivalent to original)
* **Implication Definition:** $p \to q \equiv \neg p \lor q$
* **Converse:** $q \to p$ (NOT equivalent to original)
* **Inverse:** $\neg p \to \neg q$ (NOT equivalent to original)

---

## 💻 Chapter 2: Algorithm Examples

### 2.1 Properties of Algorithms
An **algorithm** is a finite set of precise instructions for performing a computation or solving a problem.

> [!NOTE] 7 Essential Properties
> 1.  **Input:** Values supplied from a specified set.
> 2.  **Output:** Solution values produced by the algorithm.
> 3.  **Definiteness:** Each step must be precisely defined.
> 4.  **Correctness:** It must produce the correct output values for each set of input values.
> 5.  **Finiteness:** It must produce the output after a finite number of steps.
> 6.  **Effectiveness:** Each step must be capable of being performed exactly and in a finite amount of time.
> 7.  **Generality:** The procedure should be applicable for all problems of the desired form, not just a single specific instance.

### 2.2 Searching Algorithms
The problem of locating an element $x$ in a list of distinct elements $a_1, a_2, \dots, a_n$, or determining that it is not in the list.

#### Linear Search
Locates an item by examining elements in the sequence one at a time, usually from the beginning.
* **Complexity:** $O(n)$
* **Requirement:** None (list can be unsorted).

```pascal
procedure linear_search(x: integer, a1...an: integers)
   i := 1
   while (i <= n and x != ai)
      i := i + 1
   if i <= n then return i else return 0
```

#### Binary Search
Locates an item by repeatedly splitting the list in half. It compares the target value to the middle element of the list.
* **Complexity:** $O(\log n)$
* **Requirement:** List **must be sorted** (increasing order).

```pascal
procedure binary_search(x: integer, a1...an: increasing integers)
   i := 1 {left endpoint}
   j := n {right endpoint}
   while i < j
      m := floor((i + j)/2)
      if x > am then i := m + 1
      else j := m
   if x = ai then return i else return 0
```

### 2.3 Sorting Algorithms
Sorting puts elements of a list into increasing order.

#### Bubble Sort
Makes multiple passes through a list. It repeatedly swaps adjacent elements if they are in the wrong order. The largest element "bubbles" to the end after the first pass.
* **Pass 1:** Largest element moves to $a_n$.
* **Pass 2:** Second largest moves to $a_{n-1}$.

#### Insertion Sort
Builds the final sorted array one item at a time. It assumes the first $j-1$ elements are already sorted and inserts the $j$-th element into its correct position among them.

### 2.4 Greedy Algorithms
Algorithms that solve optimization problems by making the "best" choice at each step (local optimum) with the hope of finding the global optimum.

**Example: The Change-Making Algorithm**
* **Goal:** Give change for $n$ cents using the minimum total number of coins.
* **Coin Set:** Quarters ($25$), Dimes ($10$), Nickels ($5$), Pennies ($1$).
* **Strategy:** At each step, choose the coin with the largest possible value that does not exceed the amount of change left.
* **Greedy Failure:** This approach works for standard US currency but fails for some arbitrary coin systems.
    * *Example:* If coins are $\{1, 3, 4\}$ and you need to make $6$ cents.
    * Greedy approach: $4, 1, 1$ (3 coins).
    * Optimal solution: $3, 3$ (2 coins).

---

## 🔗 Chapter 3: Relations

### 3.1 Binary Relations
A binary relation $R$ from a set $A$ to a set $B$ is a subset of the Cartesian product $A \times B$.
* **Notation:** If $(a,b) \in R$, we say $a$ is related to $b$ by $R$ (written $a R b$).
* If $A=B$, we call it a "relation on set $A$".

### 3.2 Properties of Relations
Let $R$ be a relation on set $A$.

| Property | Definition | Matrix $M_R$ Condition | Digraph Condition |
| :--- | :--- | :--- | :--- |
| **Reflexive** | $\forall a \in A, (a,a) \in R$ | Main diagonal is all 1s. | Every vertex has a self-loop. |
| **Symmetric** | If $(a,b) \in R \to (b,a) \in R$ | $M_R = M_R^T$ (Matrix is symmetric). | If there is an edge $a \to b$, there is an edge $b \to a$. |
| **Antisymmetric** | If $(a,b) \in R \land (b,a) \in R \to a=b$ | No 1s symmetric off the main diagonal. | No pair of vertices has bidirectional edges between them. |
| **Transitive** | If $(a,b) \in R \land (b,c) \in R \to (a,c) \in R$ | If $M^2$ has a non-zero entry at $(i,j)$, $M$ must have a 1 at $(i,j)$. | If a path $a \to b \to c$ exists, a direct edge $a \to c$ must exist. |

### 3.3 Equivalence Relations
A relation on a set $A$ is called an **Equivalence Relation** if it satisfies three properties:
1.  **Reflexive**
2.  **Symmetric**
3.  **Transitive**

**Equivalence Classes:**
Let $R$ be an equivalence relation on set $A$. The set of all elements that are related to an element $a$ is called the equivalence class of $a$, denoted by $[a]$.
* $[a] = \{s \mid (a,s) \in R\}$.
* Equivalence classes form a **partition** of the set $A$ (they are disjoint and their union is $A$).

---

## 🕸️ Chapter 4: Graphs

### 4.1 Graph Terminology
* **Simple Graph:** Undirected, no loops, and no multiple edges between the same pair of vertices.
* **Multigraph:** Undirected, allows multiple edges between the same vertices.
* **Pseudograph:** Undirected, allows loops and multiple edges.
* **Directed Graph (Digraph):** Edges have a direction ($u \to v$).
* **Complete Graph ($K_n$):** A simple graph with exactly one edge between each pair of distinct vertices.
* **Bipartite Graph:** Vertex set $V$ can be partitioned into two disjoint sets $V_1$ and $V_2$ such that every edge connects a vertex in $V_1$ to one in $V_2$.

**Degree of Vertex ($deg(v)$):** The number of edges incident with vertex $v$.
* *Important Note:* A loop contributes **2** to the degree of a vertex in an undirected graph.
* **Handshaking Theorem:** $2|E| = \sum_{v \in V} deg(v)$. (The sum of degrees is twice the number of edges, meaning the total degree count is always even).

### 4.2 Graph Representation
1.  **Adjacency List:** Specify the vertices adjacent to each vertex. Space efficient for sparse graphs.
2.  **Adjacency Matrix:** An $n \times n$ matrix where $A_{ij} = 1$ if there is an edge between $v_i$ and $v_j$, and $0$ otherwise. Space efficient for dense graphs.
3.  **Incidence Matrix:** An $n \times m$ matrix (vertices $\times$ edges) where $M_{ij} = 1$ if edge $e_j$ is incident with $v_i$.

### 4.3 Shortest Path: Dijkstra’s Algorithm
An algorithm to find the shortest path from a specific source node to all other nodes in a weighted graph (where edges have non-negative weights).

> [!EXAMPLE] Algorithm Logic
> 1.  Assign a tentative distance value to every node: set it to zero for the initial node and to infinity for all other nodes.
> 2.  Set the initial node as current. Mark all other nodes as unvisited.
> 3.  For the current node, consider all of its unvisited neighbors and calculate their tentative distances through the current node. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one.
> 4.  After considering all of the unvisited neighbors of the current node, mark the current node as visited. A visited node will never be checked again.
> 5.  Select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node," and go back to step 3.

---

## 🌳 Chapter 5: Trees

### 5.1 Tree Definitions
> [!INFO] Definition
> A **Tree** is a connected undirected graph with no simple circuits.
> * **Forest:** A graph that contains no simple circuits but is not connected. Each connected component of a forest is a tree.

**Rooted Trees:** A tree in which one vertex has been designated as the root and every edge is directed away from the root.
* **Parent/Child:** If $u \to v$, $u$ is the parent, $v$ is the child.
* **Leaf:** A vertex with no children (or degree 1 in unrooted context).
* **Internal Vertex:** A vertex that has children.
* **m-ary Tree:** A rooted tree where every internal vertex has no more than $m$ children.
* **Full m-ary Tree:** Every internal vertex has *exactly* $m$ children.

### 5.2 Tree Traversal
Systematic procedures for visiting every vertex of an ordered rooted tree.
1.  **Preorder Traversal:** Visit Root $\to$ Traverse Left Subtree $\to$ Traverse Right Subtree.
2.  **Inorder Traversal:** Traverse Left Subtree $\to$ Visit Root $\to$ Traverse Right Subtree (Typically for binary trees).
3.  **Postorder Traversal:** Traverse Left Subtree $\to$ Traverse Right Subtree $\to$ Visit Root.

### 5.3 Spanning Trees
Let $G$ be a simple graph. A spanning tree of $G$ is a subgraph of $G$ that is a tree containing every vertex of $G$.
* **DFS (Depth-First Search):** Explores as far as possible along each branch before backtracking. Typically implemented using a **Stack** (or recursion).
* **BFS (Breadth-First Search):** Explores all neighbor nodes at the present depth prior to moving to the nodes at the next depth level. Typically implemented using a **Queue**.

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
A recurrence relation for a sequence $\{a_n\}$ is an equation that expresses $a_n$ in terms of one or more of the previous terms of the sequence.
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