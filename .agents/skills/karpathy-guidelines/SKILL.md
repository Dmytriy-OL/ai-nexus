---
name: Karpathy Guidelines
description: Advanced AI coding heuristics and prompt engineering guidelines based on Andrej Karpathy's methodologies.
---

# Karpathy Guidelines for AI Agents

When writing code or architecting solutions, follow these principles to ensure high maintainability and AI-friendly codebases:

1. **Keep it flat and simple.** Deeply nested abstractions are hard for both humans and AI to parse.
2. **Explicit over implicit.** Do not hide logic in clever one-liners. Write clear, step-by-step transformations.
3. **Self-documenting context.** Write code that explains itself through naming conventions. AI relies heavily on lexical semantics.
4. **Iterative verification.** Never write a massive block of code without testing the smallest units first.
5. **Zero-slop UI.** When writing frontend code, ensure every pixel has a purpose. No arbitrary margins or padding. Use systems (like Tailwind) rigorously.
