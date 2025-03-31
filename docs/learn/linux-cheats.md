---
layout: default
title: Linux Cheat Sheet
---

# Linux Command Reference Guide

## Basic Commands

| Command | Purpose | Mnemonic | Example |
|---------|---------|----------|----------|
| echo | Output text or variables to terminal | "Echo Chamber" | `echo "Hello" > file.txt` |
| cat | Display or concatenate file content | "Cat Reading" | `cat file1.txt` |
| ls | List directory contents | "List Stuff" | `ls -l` |
| pwd | Show current directory path | "Print Working Directory" | `pwd` |
| cd | Change to another directory | "Change Direction" | `cd /home/user` |
| touch | Create a new file or update timestamp | "Touch to Create" | `touch newfile.txt` |
| mkdir | Create a new directory | "Make Directory" | `mkdir my_folder` |
| rm | Delete files or directories | "Remove Mess" | `rm file.txt` |
| cp | Copy files or directories | "Copy Pieces" | `cp file1.txt backup.txt` |
| mv | Move or rename files/directories | "Move Values" | `mv oldname.txt newname.txt` |

## File Management

| Command | Purpose | Mnemonic | Example |
|---------|---------|----------|----------|
| nano | Open a simple text editor | "Nano: Small but mighty" | `nano file.txt` |
| vi | Open the vi text editor | "Visual Editor" | `vi file.txt` |
| less | View file contents page by page | "Less at a time" | `less bigfile.txt` |
| head | Display the first few lines | "Head of the file" | `head file.txt` |
| tail | Display the last few lines | "Tail of the file" | `tail file.txt` |
| find | Search for files in a directory | "Find things" | `find /home -name "*.txt"` |
| locate | Quickly locate files by name | "Locate faster" | `locate file.txt` |
| stat | Display detailed file info | "Statistics" | `stat file.txt` |
| file | Determine the file type | "What kind of file" | `file image.png` |

## User Management

| Command | Purpose | Mnemonic | Example |
|---------|---------|----------|----------|
| id | Display user ID and group info | "IDentity" | `id` |
| who | List logged-in users | "Who's online?" | `who` |
| groups | Show groups of current user | "Group Membership" | `groups` |
| adduser | Add a new user | "Add User" | `sudo adduser newuser` |
| passwd | Change user password | "Password Update" | `passwd` |

## Disk and System Info

| Command | Purpose | Mnemonic | Example |
|---------|---------|----------|----------|
| df | Show disk space usage | "Disk Free" | `df -h` |
| du | Show directory/file sizes | "Disk Usage" | `du -sh folder` |
| free | Display memory usage | "Free RAM" | `free -h` |
| top | Monitor system processes | "Top Programs" | `top` |
| htop | Interactive process viewer | "Human-friendly top" | `htop` |

## Networking

| Command | Purpose | Mnemonic | Example |
|---------|---------|----------|----------|
| ping | Check connectivity to a host | "Ping-pong" | `ping google.com` |
| wget | Download files from web | "Web GET" | `wget http://example.com/file.zip` |
| curl | Transfer data from/to server | "Client URL" | `curl http://example.com` |
| ifconfig | View/configure network interfaces | "Interface Config" | `ifconfig` |
| netstat | Show network connections | "Network Statistics" | `netstat -tuln` |

## Permissions and Ownership

| Command | Purpose | Mnemonic | Example |
|---------|---------|----------|----------|
| chmod | Change file permissions | "Change Mode" | `chmod 755 file.sh` |
| chown | Change file owner | "Change Owner" | `chown user:group file.txt` |
| umask | Set default permissions | "User Mask" | `umask 022` |
| sudo | Execute command as superuser | "Super User DO" | `sudo command` |

## Process Management

| Command | Purpose | Mnemonic | Example |
|---------|---------|----------|----------|
| ps | Show running processes | "Process Status" | `ps aux` |
| kill | Terminate processes | "Kill Program" | `kill -9 PID` |
| killall | Kill processes by name | "Kill All Matching" | `killall process_name` |
| nice | Set process priority | "Be Nice" | `nice -n 10 command` |

## System Information

| Command | Purpose | Mnemonic | Example |
|---------|---------|----------|----------|
| uname | Show system information | "Unix Name" | `uname -a` |
| hostname | Show/set system hostname | "Host Identity" | `hostname` |
| uptime | Show system uptime | "Up How Long?" | `uptime` |
| date | Show/set system date | "Date Check" | `date` |

## Tips & Tricks

1. Use tab completion to save typing
2. Use `history` to see previous commands
3. Press `Ctrl+R` to search command history
4. Use `man` command for detailed help
5. Add `--help` flag for quick command help

## Common Options

| Option | Meaning | Example |
|--------|---------|---------|
| `-h` | Human-readable sizes | `df -h` |
| `-r` | Recursive operation | `cp -r folder1 folder2` |
| `-f` | Force operation | `rm -f file.txt` |
| `-v` | Verbose output | `mv -v file1 file2` |
| `-a` | All files (including hidden) | `ls -a` |

## Attribution

This content is maintained by AI REI Teachings and is based on common Linux commands and best practices.

---

_Last updated: March 2024_ 