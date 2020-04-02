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

# Development

This project requires NodeJS.

## Installation

```
git clone https://github.com/fragaria/karmen-web.git karmen.tech
cd karmen.tech
npm i
```

## Launching for development

Start the application using:

```
gatsby develop
```

Testing site will be available at `http://localhost:8000/`.

## Bundling for production

Create bundle using:

```
gatsby build
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
