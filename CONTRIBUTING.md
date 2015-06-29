# Contributing

## General Workflow

please run `gulp integrate` in your command line for a list of tasks.

Our team forewent CI tools in preference to a manual CI box. Future teams can ditch our approach for something more simpler/automated, as we found this process somewhat cumbersome.


1. Fork
1. Create a namespaced feature branch from master
  - bug/...
  - feat/...
  - test/...
  - doc/...
  - refactor/...
1. Make commits to your feature branch. Prefix each commit like so:
  - [feat] Added a new feature
  - [fix] Fixed inconsistent tests [Fixes #0]
  - [refactor] ...
  - [cleanup] ...
  - [test] ...
  - [doc] ...
1. When you've finished with your fix or feature, pull upstream master to integrate latest known-good code.
1. Fix conflicts if they arise. run gulp to build and test.
1. Fix any issues and push your fixes to origin staging.
1. Create pull request on Github
1. Once your pull request has been reviewed and tested, it will be merged by another member of the team.

#### Integration Box For Scrum master

1. Create an 'Integration Box' in a different directory of your machine. This represents known-good production code.
1. Pull from origin staging in group repo.
1. Run tests
1. Merge into master branch and push to origin master.


**The strength here is that you get to see the code moving to the production repo. Code review can be more streamlined with this process, as well, and only 'known-good' code will make it to your master branch.**




## Detailed Workflow

### Cut a namespaced feature branch from master

Your branch should follow this naming convention:
  - bug/...
  - feat/...
  - test/...
  - doc/...
  - refactor/...

These commands will help you do this:

``` bash

# Creates your branch and brings you there
git checkout -b `your-branch-name`
```

### Make commits to your feature branch.

Prefix each commit like so
  - (feat) Added a new feature
  - (fix) Fixed inconsistent tests [Fixes #0]
  - (refactor) ...
  - (cleanup) ...
  - (test) ...
  - (doc) ...

Make changes and commits on your branch, and make sure that you
only make changes that are relevant to this branch. If you find
yourself making unrelated changes, make a new branch for those
changes.

#### Commit Message Guidelines

- Commit messages should be written in the present tense; e.g. "Fix continuous
  integration script".
- The first line of your commit message should be a brief summary of what the
  commit changes. Aim for about 70 characters max. Remember: This is a summary,
  not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should
  be a blank line and then a more detailed description of the commit. This can be
  as detailed as you want, so dig into details here and keep the first line short.

### Pull master changes into your branch

Once you are done making changes, you can begin the process of getting
your code merged into the main repo. Step 1 is to rebase upstream
changes to the master branch into yours by running this command
from your branch:

```bash
git pull --rebase upstream master
```

This will start the rebase process. You must commit all of your changes
before doing this. If there are no conflicts, this should just roll all
of your changes back on top of the changes from upstream, leading to a
nice, clean, linear commit history.

If there are conflicting changes, git will start yelling at you part way
through the rebasing process. Git will pause rebasing to allow you to sort
out the conflicts. You do this the same way you solve merge conflicts,
by checking all of the files git says have been changed in both histories
and picking the versions you want. Be aware that these changes will show
up in your pull request, so try and incorporate master changes as much
as possible.

You pick a file by `git add`ing it - you do not make commits during a
rebase.

Once you are done fixing conflicts for a specific commit, run:

```bash
git rebase --continue
```

This will continue the rebasing process. Once you are done fixing all
conflicts you should run the existing tests to make sure you didn’t break
anything, then run your new tests (there are new tests, right?) and
make sure they work also.

If rebasing broke anything, fix it, then repeat the above process until
you get here again and nothing is broken and all the tests pass.

### Push to staging

**git push origin staging**

Thanks for contributing!

### Guidelines

1. Uphold the current code standard:
    - Keep your code [DRY][].
    - Follow the **super-strict** rules of ESHint for styling.
1. Run `gulp` before submitting a pull request. This will **lint**, **test**, and **compile sass**
1. Tests are very, very important. Submit tests commit includes
   new, testable behavior.

## Checklist:

1. **Did I run gulp integrate and follow each step properly?**
