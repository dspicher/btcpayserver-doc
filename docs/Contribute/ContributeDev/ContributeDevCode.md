# Setup Developer Environment 

This guide will help you set up your developer environment to prepare you for later contributions to the BTCPay Server repositories. A variety of beginner tools are used in the guide below to help you get started with development. Once you understand the general setup process, feel free to use any tools that you like. 

If you are looking for how to make a simple code change such as fixing a typo or copy change, check out the simplified [WriteSoftware](ContributeWrite/WriteSoftware.md) tutorial instead. If you are an advanced developer with a local environment already set up for development, you can skip ahead to the [LocalDevelopment](../LocalDev.md) documentation.

## Developer Resources

- [Github Guides](https://guides.github.com/)
- [BTCPay Commands and Concepts](../LocalDev.md)
- [Environment Setup Videos (Linux, Mac, Windows)](../LocalDev.md#videos)

## Windows Setup Software

 Software to install to follow this guide:
 1. [Visual Studio Community Edition](https://visualstudio.microsoft.com/downloads/)
 1. [.NET Core SDK 3.1+](https://dotnet.microsoft.com/download)
 1. [Docker Desktop](https://www.docker.com/products/docker-desktop)
 1. PowerShell (included in Windows OS)
 1. [GitBash](https://gitforwindows.org/)
 1. [GitHub Desktop](https://desktop.github.com/)
 1. [www.Github.com account](https://github.com/) (sign up)

Note: _This guide assumes installations in default locations. Take note if you have a different file directory structure._

## Git Setup

### Fork BTCPayServer Repository
- Open a web browser and login to your www.Github.com account.
- Navigate to the [BTCPayServer Repository](https://github.com/btcpayserver/btcpayserver) and press the `Fork` button to create your own copy of the BTCPayServer repository on Github.
- Next open Github Desktop and login so that Github Desktop knows about your www.Github.com account and connects to it. 

### Clone BTCPayServer Repository
- In GitHub Desktop, use the `Add` button and see the option clone repository. 
- If you are using your www.Github.com credentials in GitHub Desktop, you will see your BTCPayServer repository that you just forked on www.Github.com. Select it and take note of the local path shown below. (by default it will be something like C:\Users\SatoshisComputer\Documents\GitHub\btcpayserver for clarity, lets call it our: _clone local path_) then press clone. 
- Now you will see the BTCPayServer repository has been cloned in your GitHub Desktop and you will be on the _master branch_.

### Create a Development Feature Branch
- Next we will practice working with our BTCPayServer repository that we just cloned to our computer using Github Desktop.
- When developing, you may want to work on different features at once. To do that, we typically want to create multiple feature branches instead of making all changes to the master branch.
- We're using GitBash and some Git commands, so open GitBash. (If you prefer to only use GitHub desktop instead of GitBash, you can create branches there instead.)
- Once you have a GitBash terminal open, we need to change directory to our clone of BTCPayServer repository.
- To do this, navigate to our _clone local path_ with the change directory command: `$ cd Documents/Github/btcpayserver`
- You can see your clone of BTCPayServer is on the branch called `master`
- Make a copy of your master branch to do some development on it, with the command: `$ git branch OurNewDevelopmentBranch`
- Let's view all the branches we have now, with the command: `$ git branch` you can see we have master and OurNewDevelopmentBranch
- In Git, we now have a copy of our forked BTCPayServer repository (our clone). When we want to switch between branches (copies of our clone), we need to tell Git which branch our development code changes should be assigned to. We do this by checking out our branch, with the command: `$ git checkout OurNewDevelopmentBranch`
- Now you are now on OurNewDevelopmentBranch in GitBash.
- Open your GitHub Desktop and you can see you are no longer on master and you are now on `OurNewDevelopmentBranch`
- In the top menu in Github Desktop click: `Repository > Show In Explorer` 

## Visual Studio Setup

- It will open a File Explorer to the BTCPayServer repository folder. Without opening any of the folders shown, look for the `btcpayserver.sln` item and right click it to `Open with > Visual Studio`. You may need to choose Open with > Choose another app ... and look for Visual Studio if you have never opened this kind of file before. 
- To get your Visual Studio set up choose `View > Solution Explorer` from the top menu. In this solution explorer you will see all the BTCPayServer files and folders. 
- The top project is BTCPayServer, make sure it's in bold. If it isn't, right click it and choose Set as StartUp Project.
- Your Visual Studio is now set up and ready.

## Bitcoin Regtest Network Setup

- For the next step make sure that you have Docker-Compose installed (included with Docker Desktop). Open a PowerShell terminal and navigate to your _clone local path_ and into the BTCPayServer.Tests directory with the command: `$ cd Documents/Github/btcpayserver/BTCPayServer.Tests`
- The BTCPayServer.Tests project contains the docker files needed to run our docker commands that will start all the project dependencies and create a local Regtest network.
- In Powershell, start the docker services with the command: `docker-compose up dev`(you must be in the BTCPayServer.Tests to run this command).
- In your PowerShell terminal you will first see the necessary docker images being pulled, then containers being built. If the build is successful the containers will all show as done. 

## Build Local BTCPayServer

- Back in Visual Studio, click: `Build > Build Solution`
- In the output window, a successful build will look something like this: `========== Build: 6 succeeded, 0 failed, 0 up-to-date, 0 skipped ==========`
- Next press `Debug > Start Debugging`
- First a Visual Studio debug console will open which shows information about the status of your local BTCPayServer. 
- Next a local BTCPay Server will be created in a web browser, showing on the home page that it's in `REGTEST` mode.
- You now will have three windows to view: BTCPayServer browser session, our Visual Studio debug console and our BTCPayServer.Tests powershell terminal. 
- Register a new user in your BTCPay Server and see the registration and login event is shown in your Visual Studio debug console. 

## Visual Studio Code Changes In Your Local BTCPayServer
- Make changes to code in Visual Studio (Ex: modify the `Welcome to your BTCPay` text in the `~\BTCPayServer\Views\Account\Login.cshtml` file)
- Refresh the page to see your text changes on the home page.
- Some code changes require re-start of Debugging for changes to take effect.
- Add breakpoints in Visual Studio and see those breakpoints get hit when you try to use a feature in your local BTCPayServer instance.

## Sync Forked BTCPayServer Repository
- With many contributors adding code changes to the Master BTCPayServer Repository, sometimes your forked copy can fall behind, unless you merge new changes into your fork.
- If you go to your Fork of BTCPayServer on www.Github.com you will see a message saying that your branch is behind by some commits. Example: This branch is 32 commits behind btcpayserver:master.
- To update, you can use GitBash or simply use Github Desktop by clicking through the synchronization prompts.
- Open a GitBash terminal and update your BTCPayServer repository with the following commands.
- First always navigate to your _clone local path_ with the command: `$ cd Documents/Github/btcpayserver` and make sure you are on `master` branch.

```bash
$ git fetch upstream
$ git merge upstream/master
$ git commit -m <SomeCommitMessage>

Message prompt: ...your branch is ahead of origin master by "X" commits... use git push to publish...

$ git add .
$ git push origin master 
```

## Commit Code To Make Pull Request

- After you have made some code changes on a feature branch (Example: A feature branch called `Fix/BugBranch`) and you want to make a Pull Request to the BTCPayServer Repository. Open a GitBash terminal and navigate to your _clone local path_ with the command: `$ cd Documents/Github/btcpayserver` and make sure you are on the **correct branch** that you want to commit and use git status to check the files changed are the ones you want to commit.

```bash
$ git status 
$ git add .
$ git commit

Text Editor appears to add your commit message...
Example Commit Message: Fix bug for update button

Accept Changes: Ctrl + x
Save Changes: Shift + y
Close Editor with: Enter

$ git push origin Fix/BugBranch
```
See your new branch has been created on you www.Github.com BTCPayServer Fork, review changes and create Pull Request.  

## Delete Local Branch

If you delete a branch on your forked BTCPay repository on Github.com, your local copy on your machine will still remain, unless you delete it:

```bash
$ git checkout master
$ git branch -D <branch name>
```
Note: You can't delete a branch if you have it checked out, so checkout another branch like `master` first, as shown in the example above.

## Working with Docker Containers

If you want to use Docker Commands when developing locally, you can run the following commands in the `BTCPayServer.Tests` directory. 

- Show running containers `docker ps`
- Show logs for a container `docker ps logs <container>`
- Start Docker containers `docker-compose up dev`
- Stop Docker containers `docker-compose down`
- Destroy Docker containers `docker-compoose down --v`

## Questions

If you have questions about the BTCPay Server local development setup, you can join the [community chat](https://chat.btcpayserver.org/). If you have questions about any of the other tools or commands, etc. it's likely you can find answers to your questions by doing a search on the internet or on [StackOverflow](https://stackoverflow.com/). 