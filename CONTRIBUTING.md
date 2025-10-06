## Contributing

Thanks for your interest in contributing! This repository follows a simple workflow:

- Fork the repository and create a feature branch from `master`.
- Follow conventional commits (e.g., `feat:`, `fix:`, `chore:`).
- Keep PRs focused and small; include context and screenshots when UI changes.

### Development

- Install dependencies with `pnpm i`.
- Run the dev server with `pnpm dev`.
- Run tests with `pnpm test`.

### Code Style

- Use 2-space indentation and LF line endings.
- Prefer descriptive names and early returns.
- Add comments only for non-obvious logic or important caveats.

### Commit Messages

- Use the format: `type(scope): summary`.
- Examples:
  - `feat(auth): add OAuth flow with Google`
  - `fix(api): handle retries for 5xx responses`
  - `chore(ci): add workflow to run tests on PRs`

### Pull Requests

- Link related issues, describe the approach, and list trade-offs.
- Ensure the PR is rebased on latest `master` and CI is green.

### Security

- Do not include secrets in code or logs.
- Report vulnerabilities privately.

