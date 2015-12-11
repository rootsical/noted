#GIT

##configuration
###user configuration
`git config --global`

###project configuration
`git config`

###global
`core.editor "sublime_text -wl1"`  
(-w flag is for terminal to wait for edit to be made and -l1 flag to start on line 1)

`color.ui true`  
(to get coloured output in terminal)

`core.excludesfile ~/.gitignore_global`  
(if you want to have user specific gitignore)

`push.default simple`  
(not sure what it does but avoids annoying message on doing `git push`)

###user
`user.name "rootsical"`  
`user.email "rootsical@gmail.com"`

###list configuration
`git config --list`

create .gitignore file in project root
```
node_modules/
# for comments
ignore:
compiled source code
packages (node_modules/)
logs
databases (db/)
```

now you can initialise git in project root:
`git init`

now set username and email  
`git config user.name "rootsical"`  
`git config user.email "rootsical@gmail.com"``

if you use the wrong username and email for the last commit, you can reset the git config and then do:
`git commit --amend --reset-author`

##BRANCHES and REMOTES
origins/master is local branch that references remote branch called master  
you still have a local branch called master  
push will send local branch info to remote and origin  
fetch will get from remote and put in origin but not local  
merge will get from origin and put into local  

##GITHUB SETUP
create new repository on github

locally in project root edit  
`.git/config`

add the following:
```
[remote "origin"]
	url = rootsical-github:rootsical/01-travis-test-01.git
```

rootsical-github is the name of the relevant host in the .ssh configuration  
the rest after the colon is the github repository name ending in .git, in this case:  
`rootsical/noted.git`

instead of editing local .git/config file you can do:  
`git remote add origin rootsical-github:rootsical/noted.git`

to put project onto remote repository now you can do:  
`git push -u origin master`

or if you are on another branch:  
`git push -u origin <name_of_branch>`






