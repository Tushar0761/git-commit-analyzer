# Git Commit Stats Analyzer

## Overview

**Git Commit Stats Analyzer** is a Node.js command-line application that generates detailed CSV reports of Git commit statistics for a specified author. The tool is designed to help developers and teams track contributions and analyze commit histories with ease. 

---

### Features

- **Dynamic Author Search**: Easily search for commits by any author without hardcoding their names. The app supports case-insensitive searches and allows for partial name matching.
- **Detailed Commit Analysis**: Compare consecutive commits to track added and removed lines of code, along with commit messages and dates.
- **CSV Report Generation**: Export commit statistics to a well-structured CSV file for further analysis or record-keeping.
- **Interactive Command-Line Interface**: User-friendly interface that guides you through the process, making it accessible even for those who aren't command-line experts.

---

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/git-commit-analyzer.git
   cd git-commit-analyzer
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

### Usage

1. Navigate to the project directory:

   ```bash
   cd git-commit-analyzer
   ```

2. Run the application:

   ```bash
   node index.js
   ```

3. The application will list all the authors from the commit history of the current repository. You will be prompted to enter the author's name you want to search for.

4. If no match is found, the application will ask you to try again until a valid author is selected.

5. Once a valid author is selected, the application will generate a CSV file (`commit_stats.csv`) with the commit statistics for that author.

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

---
