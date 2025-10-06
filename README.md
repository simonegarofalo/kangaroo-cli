# Kangaroo

**Keep everything in one safe place.**

Kangaroo CLI is a lightweight terminal-based bookmark manager that lets you save, search, and manage your favorite links directly from the command line.

Built with Node.js and powered by SQLite, it helps you organize your URLs locally.

---

## Features

- **Add Links** — Save a URL with optional description and category.
- **View Saved** Links — Display your collection, sorted by newest first.
- **Search Links** — Quickly find any link by keyword.
- **Remove Links** — Delete a link easily by ID.
- **Offline & Local** — All data is stored locally in SQLite.
- **Zero Setup** — No external dependencies or servers required.

---

## Tech stack

### Core

- **Node.js**
- **Commander.js** — for CLI command handling
- **better-sqlite3** — for local database management

### Database

- **SQLite** - a single links.db file saved in your project folder

---

## Project Structure

```
kangaroo-cli/
├── commands/
│   ├── add.js
│   ├── remove.js
│   ├── list.js
│   ├── search.js
│   └── info.js
├── db.js
├── index.js
├── links.db
├── package.json
└── README.md

```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/simonegarofalo/kangaroo-cli.git
cd kangaroo-cli
```

### 2. Install Dependencies

```
npm install
```

### 3. Make It Global (optional)

Create a **.env** file

```
npm link
```

---

## Usage

### Show CLI Help

```
kangaroo --help (standard)
```

or

```
kangaroo info (custom)
```

---

### Add a New Link

```
kangaroo add <url> -d "Description" -c "Category"
```

---

#### Example

```
kangaroo add https://github.com -d "GitHub" -c "Work"
```

---

### List All Saved Links

```
kangaroo list
```

---

### Search for a Link

```
kangaroo search <term>
```

---

### Remove a Link by ID

```
kangaroo remove <id>
```

---

## Example Output

```
$ kangaroo list
Your saved links:
[1] - https://app-mywallet.netlify.app/ - myWallet - Finance
[2] - https://blog.leonardotamiano.xyz/tech/ - Blog Leonardo Tamiano (Hexdump) - Education
```

```
$ kangaroo search "wallet"
[1] - https://app-mywallet.netlify.app/ - myWallet - Finance

```

---

## How It Works

- Each link is stored in a local links.db SQLite file.
- The CLI is built with Commander.js, making it easy to extend or customize.
- All commands return clean, human-readable output.
- The entire tool runs offline and is fully open source.

---

Developed by <a href="https://github.com/simonegarofalo">simonegarofalo</a>

Feel free to fork, use, or contribute to the project.
