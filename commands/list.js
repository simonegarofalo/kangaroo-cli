import { listLinks } from "../db.js";

export function listLinkCommand(program) {
  program
    .command('list')
    .description('show all saved links')
    .action(() => {
      const links = listLinks();
      if (links.length === 0) console.log('Your collection is empty!');
      else links.forEach(row => {
        console.log(`[${row.id}] - ${row.url} - ${row.description} - ${row.category}`);
      });
    });
}