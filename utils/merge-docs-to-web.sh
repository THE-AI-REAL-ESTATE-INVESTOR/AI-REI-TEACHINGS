#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting merge process of docs from main to web...${NC}"

# Check if we're on the main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${RED}Error: Please switch to the main branch first${NC}"
    exit 1
fi

# Check if there are any uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${RED}Error: You have uncommitted changes. Please commit or stash them first.${NC}"
    exit 1
fi

# Pull latest changes from main branch
echo -e "${YELLOW}Pulling latest changes from main branch...${NC}"
git pull origin main

# Checkout the web branch
echo -e "${YELLOW}Checking out web branch...${NC}"
git checkout web

# Pull latest changes from web branch
echo -e "${YELLOW}Pulling latest changes from web branch...${NC}"
git pull origin web

# Create a temporary branch
TEMP_BRANCH="temp-merge-$(date +%s)"
echo -e "${YELLOW}Creating temporary branch ${TEMP_BRANCH}...${NC}"
git checkout -b $TEMP_BRANCH

# Merge only the docs directory from main
echo -e "${YELLOW}Merging only the docs directory from main...${NC}"
git checkout main -- docs/

# Check if there are changes to commit
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}No changes to commit. Web branch is already up to date.${NC}"
    git checkout web
    git branch -D $TEMP_BRANCH
    echo -e "${GREEN}Merge process completed successfully!${NC}"
    exit 0
fi

# Commit the changes
echo -e "${YELLOW}Committing changes...${NC}"
git add docs/
git commit -m "Merge docs/ from main to web"

# Switch back to web branch
echo -e "${YELLOW}Switching back to web branch...${NC}"
git checkout web

# Merge the temporary branch
echo -e "${YELLOW}Merging temporary branch into web...${NC}"
git merge $TEMP_BRANCH

# Push changes to web
echo -e "${YELLOW}Pushing changes to web...${NC}"
git push origin web

# Delete the temporary branch
echo -e "${YELLOW}Cleaning up temporary branch...${NC}"
git branch -D $TEMP_BRANCH

# Switch back to main branch
echo -e "${YELLOW}Switching back to main branch...${NC}"
git checkout main

echo -e "${GREEN}Merge process completed successfully!${NC}" 