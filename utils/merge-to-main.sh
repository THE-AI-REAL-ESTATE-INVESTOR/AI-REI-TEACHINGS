#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting merge process from web to main...${NC}"

# Check if we're on the web branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "web" ]; then
    echo -e "${RED}Error: Please switch to the web branch first${NC}"
    exit 1
fi

# Check if there are any uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${RED}Error: You have uncommitted changes. Please commit or stash them first.${NC}"
    exit 1
fi

# Pull latest changes from web branch
echo -e "${YELLOW}Pulling latest changes from web branch...${NC}"
git pull origin web

# Switch to main branch
echo -e "${YELLOW}Switching to main branch...${NC}"
git checkout main

# Pull latest changes from main branch
echo -e "${YELLOW}Pulling latest changes from main branch...${NC}"
git pull origin main

# Merge web into main
echo -e "${YELLOW}Merging web into main...${NC}"
git merge web

# Check if merge was successful
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Merge successful!${NC}"
    
    # Push changes to main
    echo -e "${YELLOW}Pushing changes to main...${NC}"
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}Successfully pushed changes to main!${NC}"
    else
        echo -e "${RED}Error: Failed to push changes to main${NC}"
        exit 1
    fi
else
    echo -e "${RED}Error: Merge failed. Please resolve conflicts manually.${NC}"
    exit 1
fi

# Switch back to web branch
echo -e "${YELLOW}Switching back to web branch...${NC}"
git checkout web

echo -e "${GREEN}Merge process completed successfully!${NC}" 