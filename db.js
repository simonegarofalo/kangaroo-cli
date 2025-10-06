import Database from 'better-sqlite3';

const db = new Database('links.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS links (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        url TEXT NOT NULL,
        description TEXT,
        category TEXT DEFAULT ''
    )
`);

// Add new link
export function addLink(url, description = "", category = "") {
    if (!url || !url.trim()) {
        console.log("Error: URL cannot be empty");
        return false;
    }
    
    const exists = db.prepare("SELECT COUNT(*) AS count FROM links WHERE url = ?").get(url);
    if (exists.count > 0) {
        console.log("This link already exists in your collection");
        return false;
  }

    const add = db.prepare('INSERT INTO links (url, description, category) VALUES (?, ?, ?)');
    add.run(url, description, category);
    return true;
}


// Remove link
export function removeLink(id) {
    const remove = db.prepare('DELETE FROM links WHERE id = ?');
    const result = remove.run(id);
    if(result.changes === 0) {
        console.log(`No link found with id ${id}`);
        return(false);
    }
    return(true)
}


// List link
export function listLinks() {
    const list = db.prepare('SELECT * FROM links ORDER BY id DESC').all();
    return list;
}


// Search link
export function searchLink(term) {
    const rows = db.prepare(
        `SELECT * FROM links WHERE LOWER(url) LIKE LOWER(?) OR LOWER(description) LIKE LOWER(?) OR LOWER(category) LIKE LOWER(?)`
    ).all(`%${term}%`, `%${term}%`, `%${term}%`);
    return rows;
}