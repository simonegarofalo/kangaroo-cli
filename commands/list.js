import { listLinks } from "../db.js";

export function listLinkCommand(program) {
  program
    .command('list')
    .description('show all saved links')
    .action(() => {
      const links = listLinks();

      if (links.length === 0) {
        console.log('Your collection is empty!');
        return;
      }

      const formattedLinks = links.map(link => ({
        ID: link.id,
        URL: link.url,
        Description: link.description?.trim() || '-',
        Category: link.category?.trim() || '-',
      }));

      console.log('\nYour saved links:\n');
      console.table(formattedLinks);
    });
}