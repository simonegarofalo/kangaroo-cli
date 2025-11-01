import { addLink } from "../db.js";

export function addCommand(program) {
    program
    .command('add')
    .description('save a new link to your collection (use --desc for description, --cat for category)')
    .argument('<url>', 'URL to save')
    .option('-d, --desc <description>', 'Description')
    .option('-c, --cat <category>', 'Category')
    .action((url, options) => {
        const success = addLink(url, options.desc, options.cat || "");
        if (success) {
            console.log('Link saved successfully!');
        }
    })
};