# Contributing to Lex-Impact

Welcome to the Lex-Impact repository! As a team, we follow a structured workflow to ensure smooth collaboration and maintain high code quality. Please follow these guidelines when contributing.

## 🚀 Getting Started

### 1. Fork and Clone the Repository
First, fork the repository to your own GitHub account, then clone it:
```bash
git clone https://github.com/your-username/project-name.git
cd lex-impact
```

### 2. Install Dependencies
Ensure you have Node.js installed, then run:
```bash
npm install
# or
yarn install
```

### 3. Set Up Your Branch
Create a branch and name it according to your assigned issue:
```bash
git checkout -b issue-[issue-number]-[short-description]
```

## 🌳 Branching Strategy
We follow the Git Flow model:
- `main`: Stable production-ready code.
- `develop`: Active development branch.
- `issue/[issue-number]-[short-description]`: Branch for working on a specific issue.

## 📝 Commit Message Guidelines
Follow the conventional commit format:
```plaintext
feat: add hero section 
fix: resolve issue with login form
chore: update dependencies
```
## Run Test Before Pushing Changes
```npm
npm run build
```
``` yarn
yarn build
```

## 🔄 Pushing Changes
```bash
git add .
git commit -m "feat: add dashboard UI"
git push origin issue-[issue-number]-[short-description]
```

## 🔀 Submitting a Pull Request (PR)
1. Push your branch to the remote repository.
2. Sync your code with the latest update.
3. Open a PR against `develop`.
4. Ensure all tests pass.
5. Request a review from the team.
6. Address any feedback before merging.

## ✅ Code Review & Merging
- PRs must be reviewed by at least one team member before merging.
- Use clear and constructive comments during reviews.
- Merge only when approved and tested.

## 🎨 Tech Stack & Styling
- Use **Tailwind CSS** for styling.
- Write components in **React JSX or TSX**.

## 📚 Best Practices
- Follow the project’s coding standards.
- Write clear and concise code with proper documentation.
- Ensure all tests pass before submitting a PR.
- Keep PRs small and focused.

## 📞 Need Help?
For any questions, reach out via the WhatsApp group or GitHub Issues.

Happy coding! 🚀

