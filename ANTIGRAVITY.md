# Antigravity Guidelines

## Context
- You are operating in a local environment supported by **Antigravity**, working alongside the **Bolt.new** base environment.
- **Bolt.new** is the primary environment for the project structure and initial scaffolding.
- **Antigravity** provides advanced local capabilities.

## Allowed Actions
### ✅ What You CAN Do (Antigravity Specific)
1. **Execute Terminal Commands**: Run shell commands for setup, testing, git operations, and file management.
2. **Manage Local Files**: Create, edit, delete, and move files directly on the local filesystem.
3. **Run Local Processes**: Start and manage local development servers, database instances, and test runners.
4. **Create Artifacts**: Generate documentation, implementation plans, and other artifacts to support the development workflow.
5. **Full Project Access**: Read and modify any file in the workspace, respecting the project structure.

## Restricted Actions
### ❌ What You CANNOT Do
1. **Production Deployment**: Do not deploy to production environments directly.
2. **Production Database Access**: Do not access production databases directly; use migrations or approved interfaces.
3. **Destructive System Commands**: Do not run commands that could cause irreversible system damage without explicit user approval.
4. **Ignore Project Constraints**: Do not violate the core constraints defined in `AGENTS.md` (e.g., type safety, i18n).

## Workflow
- Respect the existing **Bolt.new** patterns and constraints (see `AGENTS.md`).
- Use `task.md` and `implementation_plan.md` to track progress and plan changes.
- When in doubt, refer to `AGENTS.md` for project-specific rules.
