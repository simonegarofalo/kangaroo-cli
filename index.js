#!/usr/bin/env node

import { Command } from 'commander';
import { addCommand } from './commands/add.js';
import { removeCommand } from './commands/remove.js';
import { listLinkCommand } from './commands/list.js';
import { searchCommand } from './commands/search.js';
import { infoCommand } from './commands/info.js';


const program = new Command();

program
.name('kangaroo')
.description('A CLI application built with Commander.js')
.version('1.0.0')

addCommand(program);
removeCommand(program);
listLinkCommand(program);
searchCommand(program);
infoCommand(program);

program.parse();