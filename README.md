# Fragaria.cz website

[![Build Status](https://travis-ci.com/fragaria/karmen-web.svg?branch=master)](https://travis-ci.com/fragaria/karmen-web)

## Table of contents

- [karmen.fragaria.cz website](#fragariacz-website)
    - [Table of contents](#table-of-contents)
- [Content](#content)
    - [Providing images](#providing-images)
    - [Including images within the page body](#including-images-within-the-page-body)
    - [Including Youtube videos in the page body](#including-youtube-videos-in-the-page-body)
    - [Including embeddables like iframes](#including-embeddables-like-iframes)
    - [Highlighting code blocks](#highlighting-code-blocks)
- [Development](#development)
    - [Installation](#installation)
        - [Install build dependencies](#install-build-dependencies)
            - [Ubuntu 18.04](#ubuntu-1804)
            - [Fedora 28](#fedora-28)
        - [Install rbenv](#install-rbenv)
        - [Installing dependencies on macOS](#installing-dependencies-on-macos)
        - [Installing the app](#installing-the-app)
    - [Launching the app](#launching-the-app)
    - [Viewing future articles and drafts](#viewing-future-articles-and-drafts)
    - [Using Docker](#using-docker)

# Content

## Providing images

Images should be provided in high resolution so that we can serve it in good
quality for retina displays too. Always make sure your image is at least in
Full-HD resolution. More is even better.

All post images are hosted on Cloudinary. There is a image upload script in
the `__tools` directory that you can use to upload your image.

Simply navigate to the directory, run `npm install` and then run the command:

    ./images upload [path to your image]

The result will be something like:

    Upload successful.
    Public ID:  posts/osi_rllzfu

Note the `Public ID` string. You can use this string as `cloudinary_src`
attribute in the post **front matter**. This will serve as the post's main
image.

## Including images within the page body

To include image within the post body, start by uploading the image using
the `__tools/images` script described above. Once you have your `Public ID`,
you can embed your image by typing:

    {% include figure.html cloudinary_src='[Public ID]' caption='[optional caption]' %}

You can omit the the `caption` argument.

## Including Youtube videos in the page body

Just type:

    {% include youtube.html id='[youtube video id]' %}

## Including embeddables like iframes

You can embed iframes normally like you would do in a HTML document. Jekyll
understands HTML syntax within markdown documents too.

## Highlighting code blocks

Use `{% highlight %}` tag for that:

    {% highlight html %}
    <my-code></my-code>
    {% endhighlight %}

You can also enable line numbers with: `{% highlight html linenos %}`.

# Development

This project requires Ruby to be installed on your computer (best installed
using [rbenv](https://github.com/rbenv/rbenv)).

## Installation

The process is practically the same on any Linux. Only difference is build dependencies.

### Install build dependencies

First, install required development dependencies:

#### Ubuntu 18.04


```
sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common
```

#### Fedora 28

```
sudo dnf install git-core zlib zlib-devel gcc-c++ patch readline readline-devel libyaml-devel libffi-devel openssl-devel make bzip2 autoconf automake libtool bison curl
```

### Install rbenv

Next, install Ruby using rbenv:

```
cd
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.5.1
rbenv global 2.5.1
ruby -v # Verify ruby@2.5.1 is installed
```

### Installing dependencies on macOS

```
brew install rbenv
rbenv init
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL
rbenv install 2.5.1
ruby -v # Verify ruby@2.5.1 is installed
```

### Installing the app

Once you have Ruby installed, clone the `fragaria/karmen-web` repository:

```
git clone https://github.com/fragaria/karmen-web.git karmen.fragaria.cz
```

Switch to the cloned repository:

```
cd fragaria.cz
```

Then, install Ruby gems using following from *within the
repository directory*:

```
rbenv install         # Installs Ruby version required by the project
gem install bundler   # Installs bundler
bundle install        # Installs Ruby gems
```

## Launching the app

Start the application using:

```
bundle exec jekyll serve --livereload
```

Testing site will be available at `http://localhost:4000/`.

## Viewing future articles and drafts

Simple! Just run the app using:

```
bundle exec jekyll serve --livereload --future --drafts
```

## Using Docker

This theme has built-in Docker support. For many users, it's the easiest option
to get things up and running.

First, make sure you have Docker along with `docker-comopose` installed. To do
so, please follow a guide according to you OS of choice:

* [Windows](https://docs.docker.com/docker-for-windows/install/)
* [macOS](https://docs.docker.com/docker-for-mac/install/)
* [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* [Fedora](https://docs.docker.com/install/linux/docker-ce/fedora/)

`docker-compose` can be installed by following
[official resources](https://docs.docker.com/compose/install/).


**Note for Fedora**: It's better to run docker-compose without `sudo`. Please
follow [this guide](https://bluntinstrumentsoftesting.com/2016/12/03/run-docker-without-sudo-in-fedora-25/)
to allow running without it.

Once you have Docker deamon running, just navigate to a cloned repository and
run:

```
docker-compose up
```

First boot might take some time, but you should be presented with a running
app after a while.
