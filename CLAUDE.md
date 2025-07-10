# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal configuration repository for Surge proxy rules and modules. The repository contains network proxy configurations, rule sets, and scripts for managing network traffic routing.

## Repository Structure

```
surge/
├── module/        # Surge modules (.sgmodule files)
├── rule/          # Network routing rules (.list files)
└── script/        # JavaScript scripts for network interception
```

## Key Components

### Surge Module (`surge/module/kedoupi.sgmodule`)
- Main configuration module for Surge proxy
- Defines rule sets for DIRECT and proxy routing
- References external rule lists from this repository

### Rule Lists
- `surge/rule/Default.list` - Domains for direct connection
- `surge/rule/Proxy.list` - Domains that require proxy routing

### Scripts
- `surge/script/vconsole.js` - Injects vConsole debugging tool into web pages

## File Editing Guidelines

### Rule Lists
- Add one domain per line in format: `DOMAIN-SUFFIX,example.com`
- Default.list: domains that should connect directly
- Proxy.list: domains that require proxy routing

### Module Configuration
- Uses standard Surge module format with sections: [General], [Rule], [Host], [URL Rewrite]
- Rule sets reference the GitHub raw URLs of rule files in this repository

## Development Workflow

1. Edit rule files directly - no build process required
2. Commit changes to update the remote rule lists
3. Surge will automatically fetch updated rules from GitHub raw URLs

## Notes

- This is a configuration-only repository with no traditional build/test/lint commands
- Changes take effect immediately when Surge refreshes its rule sets
- All files are plain text configuration files