import { listLinks } from "../db.js";
import { table } from 'table';

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

      const data = [
        ['ID', 'URL', 'Description', 'Category'],
        ...links.map(link => [
        link.id,
        link.url,
        link.description?.trim() || '',
        link.category?.trim() || '',
      ])
    ];

    const config = {
        columnDefault: {
          width: 15,
        },
        columns: {
          0: { width: 5 },
          1: { width: 80 },
        },
        header: {
          alignment: 'center',
          content: "Your saved links:",
        },
      };

      console.log(table(data, config));
    });
}