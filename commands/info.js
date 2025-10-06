export function infoCommand(program) {
    program
      .command('info')
      .description('Show an overview of Kangaroo CLI and its commands')
      .action(() => {
        console.log(`
            Kangaroo CLI — manage your links from the terminal
            
            Commands:
            add       Add a new link (options: --desc, --cat)
            list      Show all links
            search    Find links by keyword
            remove    Delete a link by ID

            
            Tips:
            Use "kangaroo help <command>" to see options for a specific command.
            
            Examples:
            kangaroo add https://example.com -d "Example site" -c "Work"
            kangaroo list
            kangaroo search "google"
            kangaroo remove 3
            kangaroo update 3 -d "New description"
            `
        );
    });
}  