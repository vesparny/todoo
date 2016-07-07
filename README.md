<h1 align="center">
  <br>
  <a href="https://github.com/vesparny/todoo"><img src="https://cloud.githubusercontent.com/assets/82070/16650981/4d6ef78e-4441-11e6-8c81-7b146874e887.png" alt="todoo" width="200"></a>
  <br>
  Todoo
  <br>
  <br>
</h1>

<h4 align="center">Todos for introverts</h4>
<h4 align="center">For OS X, Windows and Linux</h4>
<h5 align="center">Built with Electron and React + Redux</h5>


<p align="center">
  <a href="https://travis-ci.org/vesparny/todoo"><img src="https://img.shields.io/travis/vesparny/todoo/master.svg" alt="Travis"></a>
  <a href="https://github.com/vesparny/todoo/releases"><img src="https://img.shields.io/github/release/vesparny/todoo.svg" alt="Release"></a>
  <a href="https://github.com/vesparny/todoo/releases"><img src="https://img.shields.io/github/downloads/vesparny/todoo/total.svg" alt="Downloads"></a>
  <a href="https://david-dm.org/vesparny/todoo"><img src="https://david-dm.org/vesparny/todoo/status.svg" alt="Dependency status"></a>
  <a href="https://david-dm.org/vesparny/todoo#info=devDependencies"><img src="https://david-dm.org/vesparny/todoo/dev-status.svg" alt="Dev dependency status"></a>
</p>

## Install

**Todoo** is still under development.

**You can download the latest version from the [releases](https://github.com/vesparny/todoo/releases) page.**

Please note that binaries are not signed. If you need them to be signed you can easily do it with your own certificates.

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/82070/16650965/2e0d48a0-4441-11e6-84ba-75e103b234c4.gif" style="max-width:100%" alt="screenshot" align="center">
</p>

## Features

* Todos stored locally (because pricavy matters, your data is your data)
* Emoji Support
* Always available in your Tray

## Technologies used

* [electron](https://github.com/electron/electron)
* [React](https://facebook.github.io/react/)
* [Redux](https://github.com/reactjs/redux/)
* [Lowdb](https://github.com/typicode/lowdb)


## Roadmap

Refer to open [issues](https://github.com/vesparny/todoo/issues). Also feel free to propose features and report bugs.


## Development

In order to run the development version locally, you need to:

### Install dependencies

```
$ npm install
```

### Run app

```
$ npm run dev
```

### Package app

Builds app binaries for OS X, Linux, and Windows.

```bash
$ npm run pack-all
```

#### Windows build notes

To package the Windows app from non-Windows platforms, [Wine](https://www.winehq.org/) needs
to be installed.

On OS X, first install [XQuartz](http://www.xquartz.org/), then run:

```
brew install wine
```

(Requires the [Homebrew](http://brew.sh/) package manager.)

### Code Style

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Credits

* Google for providing Icons https://design.google.com/icons
* [r-park](https://github.com/r-park) for making https://github.com/r-park/todo-react-redux (I've shamelessly stolen the style from there)

## License

MIT. Copyright (c) [Alessandro Arnodo](https://alessandro.arnodo.net).
