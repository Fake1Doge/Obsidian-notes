# CKC111 Discrete Structures - Final Exam Revision Notes

## Chapter 1: Logic and Proofs
### 1.1 Propositional Logic
* **Proposition**: A declarative sentence that is either true ($T$) or false ($F$), but not both.
* **Logical Connectives**:
    * **Negation ($\neg p$)**: "Not $p$". Reverses truth value.
    * **Conjunction ($p \wedge q$)**: "p and q". True only if both are true.
    * **Disjunction ($p \vee q$)**: "p or q". True if at least one is true.
    * **Exclusive Or ($p \oplus q$)**: True if exactly one is true.
    * **Implication ($p \rightarrow q$)**: "If p, then q". False only if $p$ is true and $q$ is false.
    * **Biconditional ($p \leftrightarrow q$)**: "p if and only if q". True if $p$ and $q$ have the same truth value.

### 1.2 Logical Equivalences
* **De Morgan's Laws**:
    * $\neg (p \wedge q) \equiv \neg p \vee \neg q$
    * $\neg (p \vee q) \equiv \neg p \wedge \neg q$
* **Contrapositive**: $p \rightarrow q \equiv \neg q \rightarrow \neg p$
* **Tautology**: A statement that is always true.
* **Contradiction**: A statement that is always false.

### 1.3 Quantifiers
* **Universal Quantifier ($\forall x P(x)$)**: "For all $x$, $P(x)$ is true."
* **Existential Quantifier ($\exists x P(x)$)**: "There exists an $x$ such that $P(x)$ is true."

### 1.4 Rules of Inference
* **Modus Ponens**: $(p \wedge (p \rightarrow q)) \rightarrow q$
* **Modus Tollens**: $(\neg q \wedge (p \rightarrow q)) \rightarrow \neg p$
* **Hypothetical Syllogism**: $((p \rightarrow q) \wedge (q \rightarrow r)) \rightarrow (p \rightarrow r)$

---

## Chapter 2: Algorithms
### 2.1 Definition & Properties
* **Algorithm**: A finite set of precise instructions for performing a computation or solving a problem.
* **Key Properties**:
    1.  **Input**: Values from a specified set.
    2.  **Output**: Solution values produced.
    3.  **Definiteness**: Steps are precisely defined.
    4.  **Correctness**: Produces correct output for valid input.
    5.  **Finiteness**: Terminates after a finite number of steps.
    6.  **Effectiveness**: Steps can be performed exactly in finite time.
    7.  **Generality**: Applicable to all problems of the desired form.

### 2.2 Pseudocode Examples
* **Finding Max**:
    ```text
    procedure max(a1, a2, ..., an: integers)
    max := a1
    for i := 2 to n
        if max < ai then max := ai
    return max
    ```
* **Linear Search**: Scans list sequentially to find a target.

---

## Chapter 3: Relations
### 3.1 Binary Relations
* **Definition**: A subset $R$ of the Cartesian product $A \times B$.
* **Properties on Set $A$**:
    * **Reflexive**: $\forall a \in A, (a,a) \in R$. (Matrix diagonal is all 1s).
    * **Symmetric**: If $(a,b) \in R$, then $(b,a) \in R$. (Matrix is symmetric, $M = M^T$).
    * **Antisymmetric**: If $(a,b) \in R$ and $(b,a) \in R$, then $a=b$.
    * **Transitive**: If $(a,b) \in R$ and $(b,c) \in R$, then $(a,c) \in R$.

### 3.2 Combining Relations
* **Union/Intersection**: Standard set operations ($R_1 \cup R_2$, $R_1 \cap R_2$).
* **Composition ($S \circ R$)**: If $(a,b) \in R$ and $(b,c) \in S$, then $(a,c) \in S \circ R$.

### 3.3 Representation
* **Matrices**: Zero-one matrix where $m_{ij} = 1$ if $(a_i, b_j) \in R$.
* **Digraphs**: Directed graph where vertices are elements and edges represent relations.

---

## Chapter 4: Graphs
### 4.1 Terminology
* **Graph $G=(V, E)$**: Set of vertices $V$ and edges $E$.
* **Simple Graph**: No loops, no multiple edges between same vertices.
* **Degree ($deg(v)$)**: Number of edges incident to $v$ (Loop counts as 2).
* **Handshaking Theorem**: $2|E| = \sum_{v \in V} deg(v)$.

### 4.2 Special Graphs
* **Complete Graph ($K_n$)**: Every pair of distinct vertices is connected.
* **Cycle ($C_n$)**: $n \ge 3$, closed loop of $n$ vertices.
* **Wheel ($W_n$)**: $C_n$ with an extra central vertex connected to all others.
* **Bipartite**: Vertices can be partitioned into disjoint sets $V_1, V_2$ such that edges only go between sets (not within).

### 4.3 Connectivity
* **Path**: Sequence of edges traveling from vertex to vertex.
* **Connected**: Path exists between every pair of vertices.
* **Euler Circuit**: Contains every edge exactly once and returns to start (Requires all degrees to be even).
* **Hamilton Circuit**: Passes through every vertex exactly once and returns to start.

### 4.4 Algorithms
* **Dijkstra's Algorithm**: Finds shortest path in weighted graphs from a source node to all other nodes.

---

## Chapter 5: Trees
### 5.1 Properties
* **Tree**: Connected undirected graph with no simple circuits.
* **Forest**: Collection of disjoint trees.
* **Formula**: A tree with $n$ vertices has exactly $n-1$ edges.

### 5.2 Rooted Trees
* **m-ary Tree**: Every internal vertex has no more than $m$ children.
* **Full m-ary Tree**: Every internal vertex has exactly $m$ children.
* **Binary Tree**: $m=2$.

### 5.3 Traversal
* **Preorder**: Root $\to$ Left $\to$ Right.
* **Inorder**: Left $\to$ Root $\to$ Right.
* **Postorder**: Left $\to$ Right $\to$ Root.

### 5.4 Spanning Trees
* **Definition**: A subgraph that is a tree containing all vertices of $G$.
* **Search Methods**:
    * **DFS (Depth-First Search)**: Explores as far as possible along each branch before backtracking (uses Stack/Recursion).
    * **BFS (Breadth-First Search)**: Explores neighbor nodes first before moving to next level neighbors (uses Queue).

---

## Chapter 6: Sets, Functions, Matrices
### 6.1 Sets
* **Power Set $P(A)$**: Set of all subsets. $|P(A)| = 2^{|A|}$.
* **Cartesian Product**: $A \times B = \{(a,b) | a \in A, b \in B\}$.
* **Set Identities**: Union, Intersection, Difference, Complement rules.

### 6.2 Functions
* **Injective (One-to-One)**: Distinct elements map to distinct images.
* **Surjective (Onto)**: Range = Codomain (every element in $B$ is hit).
* **Bijective**: Both injective and surjective (Invertible).
* **Floor/Ceiling**: $\lfloor x \rfloor$ (round down), $\lceil x \rceil$ (round up).

### 6.3 Sequences & Summations
* **Arithmetic Progression**: $a, a+d, a+2d, \dots$
* **Geometric Progression**: $a, ar, ar^2, \dots$
* **Summations**: $\sum_{i=1}^n i = \frac{n(n+1)}{2}$.

---

## Chapter 7: Induction and Recursion
### 7.1 Mathematical Induction
To prove $P(n)$ for all $n \ge 1$:
1.  **Basis Step**: Verify $P(1)$ is true.
2.  **Inductive Step**: Show $P(k) \rightarrow P(k+1)$.
    * *Hypothesis*: Assume $P(k)$ is true.
    * *Goal*: Prove $P(k+1)$ is true using the hypothesis.

### 7.2 Strong Induction
* Assume $P(j)$ is true for all $1 \le j \le k$ to prove $P(k+1)$.

---

## Chapter 8: Counting (Basic)
### 8.1 Principles
* **Product Rule**: If task A has $n_1$ ways and task B has $n_2$ ways, doing both in sequence is $n_1 \cdot n_2$.
* **Sum Rule**: If task A has $n_1$ ways and task B has $n_2$ ways (disjoint), doing either A or B is $n_1 + n_2$.
* **Subtraction Rule (Inclusion-Exclusion)**: $|A \cup B| = |A| + |B| - |A \cap B|$.

### 8.2 Permutations & Combinations
* **Permutation ($P(n,r)$)**: Order matters. $P(n,r) = \frac{n!}{(n-r)!}$.
* **Combination ($C(n,r)$)**: Order does not matter. $C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$.

---

## Chapter 9: Advanced Counting
### 9.1 Recurrence Relations
* **Definition**: Formula expressing $a_n$ in terms of previous terms (e.g., $a_n = a_{n-1} + 3$).
* **Fibonacci**: $f_n = f_{n-1} + f_{n-2}$ with $f_0=0, f_1=1$.

### 9.2 Solving Linear Homogeneous Relations
For $a_n = c_1 a_{n-1} + c_2 a_{n-2}$:
1.  Form **Characteristic Equation**: $r^2 - c_1 r - c_2 = 0$.
2.  Find roots $r_1, r_2$.
3.  **General Solution**:
    * Distinct roots: $a_n = \alpha_1 r_1^n + \alpha_2 r_2^n$.
    * Repeated root ($r_1 = r_2$): $a_n = \alpha_1 r_1^n + \alpha_2 n r_1^n$.
4.  Use initial conditions to find constants $\alpha_1, \alpha_2$.

---

## Chapter 10: Discrete Probability
### 10.1 Finite Probability
* **Sample Space ($S$)**: Set of all possible outcomes.
* **Event ($E$)**: A subset of $S$.
* **Laplace Probability**: If outcomes are equally likely, $p(E) = \frac{|E|}{|S|}$.

### 10.2 Rules
* **Range**: $0 \le p(E) \le 1$.
* **Complement**: $p(\bar{E}) = 1 - p(E)$.
* **Union**: $p(E \cup F) = p(E) + p(F) - p(E \cap F)$.
* **Independence**: Events $E$ and $F$ are independent if $p(E \cap F) = p(E)p(F)$.