#To override a branch completely with another branch

git checkout branch_to_override
git reset --hard source_branch
git push origin branch_to_override --force