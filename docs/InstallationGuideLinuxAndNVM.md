# Installation Guide - Linux

## What You Will Be Installing

1. Microsoft Teams
2. Git and Github
3. Node.js (latest LTS version) and NPM Packages
4. Visual Studio Code (Recommended) and Plugins
5. Chrome or Firefox (Recommended)

Before installing anything, update your package manager. Depending on your linux distro, it could be:

```bash
sudo apt update
sudo apt-get update
sudo yum update
```

Many of the installation steps for Linux will be similar to Mac OS X. You can follow the [Mac Installation Guide](InstallationGuideMac.md), with these differences:

#### 1. You will not need to install Xcode or Homebrew

Mac OSX does not come with a package manager out of the box like Linux does. Homebrew is a package manager for Mac, and Xcode is a dependency for Homebrew.

#### 2. You will substitute the command _brew_ with your own operating system's command

For example, if you have Ubuntu, you would replace this command

```bash
brew install git
```

with

```bash
sudo apt-get install git
# You will probably need sudo
```

Depending on your Linux distro, you could be replacing _brew_ with _apt_, _apt-get_, _yum_ or something else.

#### 3. You will need to install Node.js with NVM

We will be using the latest even numbered version of Node.js, and the default Node.js packages are typically a few major versions behind. A command like e.g. `sudo apt-get install -y nodejs` will not get you the latest LTS version (18.x as of June 2023). NVM will allow you to install the latest LTS version.

# Node Version Manager (NVM)

Node Version Manager (NVM) is a version manager for Node.js. That means that it will allow you to manager and install multiple versions of Node.js on your computer. We recommend it if:

- You are working on a Linux machine
- You do not have the latest version of Node.js and you have Node.js projects that you wish to maintain
- You are serious about Node.js development and experienced in working with the command line

This is not for beginners. If you are new to the command line or installing node for the first time, we recommend following the instructions on how to install Nodes.js in the [Mac](InstallationGuideMac.md) or [Windows](InstallationGuideWindows.md) guide.

## If you already have Node.js installed

Write down what version of Node.js you have. You can find this out by typing `node -v`

If you have any existing projects, create a file called _.nvmrc_ your projects' root. Open the file and add your current Node.js version to it. So, for example, if current version of Node.js is 16.15.5 you would type and save the following:

```
v16.15.5
```

Finally, before installing NVM, you will need to uninstall your current version Node.js and NPM. How you uninstall depends on your Operating System and how you installed Node.js. For example:

```bash
# Newer Versions of Ubuntu and Debian
sudo apt remove nodejs
sudo apt purge nodejs
sudo apt autoremove

# Older Versions of Ubuntu
sudo apt-get remove nodejs
sudo apt-get purge nodejs
sudo apt-get autoremove

# Mac OS X with Homebrew
brew uninstall node
```

If you installed Node.js on Mac OSX from the Node.js website, there are many more steps involved. See https://stackabuse.com/how-to-uninstall-node-js-from-mac-osx/

If you have Windows, you can uninstall Node.js from the Control Panel.

## Creating a profile file

NVM writes to a profile file, and Mac OS X does not come with a profile file out of the box. If you do not have a profile file, you will need create one before installing NVM. First, find out which shell you are using.

```bash
echo $0
```

If this returns `zsh`, see if you have a `.zshrc` file.

```bash
ls -a ~
```

If you do not see `.zshrc` listed, create one.

```bash
touch ~/.zshrc
```

If `echo $0` returned `bash` or an error, see if you have a `.bash_profile` file by running `ls -a ~`. If you do not see a `.bash_profile`, create one.

```bash
touch ~/.bash_profile
```

## Installing NVM

These instructions to install NVM for Mac OSX, Linux and [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about). If you have Windows without some kind of virtualization of Linux, see [nvm-windows](https://github.com/coreybutler/nvm-windows) and then read the usage instructions below.

This will download and install NVM.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

In your terminal, you should see a success message like the following:

![Successful NVM installation output in your terminal](install-screens/terminal-nvm.png)

Pay attention to the last few lines, beginning with `export NVM_DIR="$HOME/.nvm"`. Double check that what you see here is in your profile file. One of these commands should work. That is, one of these commands should return the contents of the file, instead of an error.

```bash
cat ~/.zshrc
cat ~/.bash_profile
cat ~/.bashrc
cat ~/.profile
```

If you see the `export NVM_DIR="$HOME/.nvm"` ... at the end of the file, then you know that NVM has been added to your path. If not, you will need to manually add it. Copy all three lines beginning with beginning with `export NVM_DIR="$HOME/.nvm"`. You will need to open each file that exists with nano or another text editor.

```bash
nano ~/.zshrc
nano ~/.bash_profile
nano ~/.bashrc
nano ~/.profile
```

Paste the `export NVM_DIR="$HOME/.nvm"` ... lines, save and exit. Repeat for each profile file that already exists.

Restart your terminal. Type `nvm --version`. You should see a version number like e.g. _0.39.3_.

## Using NVM

You have NVM installed, but you still need to install Node.js. You will need to have the latest LTS version of Node installed as of June 2023 (18.x).

```
nvm install --lts
```

If you are working with NVM because you have older Node.js projects, you can install older versions of Node.js by specificizing the version number. For example, if need version 16.15.5:

```bash
nvm install 16.15.5
```

To switch between node versions, you can specify the version.

```bash
nvm use node # latest version installed
nvm use 16.15.5 # specific version
```

If you have a _.nvmrc_ file in your project root, then you do not need to specify the version number from inside your project.

```bash
nvm use
```

However, `nvm use` will only set the node version in the terminal window that you are working in. When you close your terminal window, it will revert to a default version. Here is how you to set the default version:

```bash
nvm alias default node # latest version installed
nvm alias default 16.15.5 # specific version
```

See more [usage instructions](https://github.com/nvm-sh/nvm#usage) and ["How to Lock down Your Project’s Node Version Using .Nvmrc Or engines"](https://medium.com/@faith__ngetich/locking-down-a-project-to-a-specific-node-version-using-nvmrc-and-or-engines-e5fd19144245).
