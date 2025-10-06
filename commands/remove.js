import { removeLink } from "../db.js";

export function removeCommand(program) {
    program
    .command('remove')
    .description('remove a link from your collection')
    .argument('id', 'ID to remove')
    .action((id) => {
        const success = removeLink(Number(id));
        if (success) {
            console.log('Link removed successfully!');
        }
    });
}