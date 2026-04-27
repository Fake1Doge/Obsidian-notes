---
name: ckc112-assignment-1
description: Guidelines and constraints for the CKC112 Object-Oriented Programming Assignment 1 (Hotel Review System). Use this skill when writing code, generating documentation, or designing classes for this assignment.
---

# CKC112 Assignment 1: Hotel Review System

## Core Mandates & Constraints

When working on this assignment, adhere strictly to the following constraints:

1. **Language & Paradigm**: C++ Object-Oriented Programming.
2. **File I/O**: Adhere to the One-Time I/O Rule. Read from `Users.txt` and `Reviews.txt` exactly once at start-up, and write to output files exactly once before termination. All processing must happen in memory.
3. **No Manager Classes**: Your `main()` function must operate on a single primary entity object (e.g., an array of objects) that encapsulates all related data through composition. Utility classes like "Manager" or "System" are strictly prohibited.
4. **No STL Containers**: You CANNOT use `std::vector`, `std::list`, etc. You must use raw, fixed-size arrays for all collections.
5. **No Polymorphism**: Do not use the `virtual` keyword or polymorphism.
6. **No Circular Dependencies**: Ensure strict architectural integrity (e.g., A inherits from B, B is composed of C, and C is composed of A is prohibited).
7. **Logic Location**: All processing (matching, searching, calculating) must occur inside class member functions. No processing logic is allowed inside file-reading loops.

## Mandatory OOP Specifications

Your design must explicitly implement these four pillars:
- **Inheritance**: Implement a parent-child relationship demonstrating derived classes inheriting attributes while adding specialized data (e.g., `membershipLevel` or `budget`).
- **Composition (Has-A)**: A primary class must "own" an array of another class (e.g., `Review`).
- **Operator Overloading**: Overload at least one relational operator (e.g., `>>`, `>`, or `<`) for streams or to compare object states.
- **Friend Functions**: Implement at least one Friend Function (not a friend class) to allow an external utility to access private class members without breaking encapsulation.

## Mandatory Deliverables
The final submission must be a single `.ipynb` (Google Colab) file including:
1. Requirement Identification (Functional/non-functional requirements)
2. Process Identification (Execution logic in point form)
3. Class Definitions (Role/responsibility table)
4. UML Diagram (Digital diagram with proper access modifiers)
5. Documented Code (Clean C++ code with comments)
6. Test Cases (Screenshots/text outputs demonstrating functionality)

## Key Features to Implement
- **Console-based GUI**: Menu system to navigate operations.
- **Property Deep-Dive**: Find and summarize all reviews for a specific hotel.
- **Traveler Profile**: Manage a traveler's account, loyalty tier, budget, and authored reviews.
- **Top-Pick Matcher**: Compare reviews in memory to identify the highest-rated hotel fitting a specific user's budget.
