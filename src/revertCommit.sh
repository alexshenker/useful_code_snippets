#To revert branch to a previous commit

git checkout branch_to_revert
git log
git reset --hard commit-hash
git push origin branch_to_revert --force