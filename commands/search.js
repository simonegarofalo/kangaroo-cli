import { searchLink } from "../db.js";

export function searchCommand(program) {
  program
    .command('search')
    .description('search links using keywords')
    .argument('<term>', 'Keyword to search')
    .action((term) => {
      const results = searchLink(term);
      if (results.length === 0) console.log('No links found!');
      else results.forEach(row => {
        console.log(`[${row.id}] - ${row.url} - ${row.description} - ${row.category}`);
      });
    });
}