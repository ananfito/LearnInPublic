# Git Cheatsheet 

These are the most common `git` commands I use while working on a project. 

## `git init`

```
git init
```

What it does: 

- Initializes git repo in from CLI

Useful when:

- You start your project! Git will track changes within your repo, but first you've got to initialize it. 

## `git clone <URL>`

```
git clone <URL>
```

What it does: 

- Clones a remote repo (i.e., creates a copy on your local machine)

Useful when:

- Cloning an open-source repo to your local machine so you can make contributions
- Cloning your own remote repo to your local machine

## `git status`

```
git status
```

What it does:

- Checks the status of the repo
  - Are there any unstaged files? 
  - Are files staged and ready to commit?

Useful when: 

- You can't remember if you're last set of changes were committed or not

## `git remote add origin <URL>`

```
git remote add origin <URL>
```

What it does:

- Adds a remote origin to a local repo

Useful when: 

- You've created a local repo and need to connect it to a remote repo
  - In other words, this tells `git` where to send the files when you use the `git push` command

## `git add <FILENAME>`

```
git add <FILENAME>
```

What it does: 

- Adds untracked changes in file to staging (i.e., they're ready to commit to the repo)

Useful when: 

- You've made changes to a project and need to stage those changes *before* you commit the changes to the repo
  - In other words, you're happy with the changes and ready to "store" them

### Variant

```
git add .
```

What it does: 

- Adds all files with untracked changes to staging 

Useful when: 

- You've made mutliple changes to multiple changes. With `git add` you need to list individual file names after the command so this is useful when you've made lots changes. 

**CAUTION**: Including *all* files may also include hidden files (e.g., `.DS_Store`) within the directory where your repo is located. These kinds of files often contain system metadata, however you may not want them in your repo repository, especially if it's a public one. 

Further, you may be working on a project that contains access keys. If you add these files and commit them, then push them to a public repo they become available to the public. This could be bad news if these keys give access to a private database.

To solve this, you can either move these files to another directory or add them to a `.gitignore` file. This file contains a list of files and directories that git will ignore (i.e., it won't track any changes, stage them for commits, or push them to remote repos). 

## `git commit -m "<COMMIT MSG GOES HERE>"`

```
git commit -m "<COMMIT MSG GOES HERE>"
```

What it does:

- Commits the file changes to the repo along with a message about the changes made (e.g., `"fix broken link"`)

Useful when: 

- You're satisfied with the changes you made and want to "save" them

### Variant

```
git commit -am "<COMMIT MSG GOES HERE>"
```

What it does: 

- Adds all untrack files to staging, then commits them (it's a 2-for-1 command)
  - Here the `-am` tag is for adding the untracked files to staging (the `a` part) and attaching the message (`m`) for the commit 

Useful when: 

- You've made **a lot of changes** and don't want to have to type two separate commands for `add` and `commit` (i.e., ~~you're feeling lazy~~ you're a productive programmer and want to save time)
 
## `git push`

```
git push
```

What it does:

- Pushes commits to remote repo

Useful when: 

- You've made your changes and its time to share them with the world! 

### Variant

```
git push --all --set-upstream origin
```

What it does:

- This sets the upstream of the repo to the remote repo so it will push future commits to the remote repo

Useful when:

- You've created a repo on your local machine and you want to push the files to a remote repo

Note: Unless you decide to change the upstream, you only need to this once. I usually do it on my first push.

## Other commands

- `git branch <NAME>`: Creates a new branch with desired name (e.g., `"add-feature"`)
- `git checkout <NAME>`: Moves to specified branch (e.g., from `main` to `add-feature`)
- `git checkout -b <NAME>`: Creates new branch and moves to that branch
- `git branch -d <NAME>`: Deletes specified branch
- `git fetch`: Fetches new changes from remote repo
- `git merge <NAME>`: Merges changes from the named branch into the current branch

## Resources 

- [Git Documentation](https://git-scm.com/doc) - Docs are always a good starting place when you want to learn how to use a tool
- [Learn Git Branching](https://learngitbranching.js.org/) - Fun interactive resource for beginners to learn how git branching works

## References

- [What is a .DS_Store file?](https://osxdaily.com/2009/12/31/what-is-a-ds_store-file/)
