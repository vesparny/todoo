<h1 align="center">
  <br>
  <a href="https://github.com/vesparny/todoo"><img src="https://cloud.githubusercontent.com/assets/82070/16784974/bfc2d460-488b-11e6-9024-14d86505ba57.png" alt="todoo" width="200"></a>
  <br>
  Todoo
  <br>
  <br>
</h1>

<h4 align="center">Todo app for introverts</h4>
<h4 align="center">For OS X, Windows and Linux</h4>
<h5 align="center">Built with Electron and React + Redux</h5>


<p align="center">
  <a href="https://travis-ci.org/vesparny/todoo"><img src="https://img.shields.io/travis/vesparny/todoo/master.svg" alt="Travis"></a>
  <a href="https://github.com/vesparny/todoo/releases"><img src="https://img.shields.io/github/release/vesparny/todoo.svg" alt="Release"></a>
  <a href="https://github.com/vesparny/todoo/releases"><img src="https://img.shields.io/github/downloads/vesparny/todoo/total.svg" alt="Downloads"></a>
  <a href="https://david-dm.org/vesparny/todoo"><img src="https://david-dm.org/vesparny/todoo/status.svg" alt="Dependency status"></a>
  <a href="https://david-dm.org/vesparny/todoo#info=devDependencies"><img src="https://david-dm.org/vesparny/todoo/dev-status.svg" alt="Dev dependency status"></a>
</p>

## Download

**You can download the latest version from the [releases](https://github.com/vesparny/todoo/releases) page.**

Please note that binaries are not signed. If you need them to be signed you can easily do it with your own certificates.

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/82070/16784967/b3d9ed3c-488b-11e6-949a-d0c1f9e25f2a.gif" style="max-width:100%" alt="screenshot" align="center">
</p>

## Motivations

I know there is plenty of cool todo apps like Wunderlist or the like, but I wanted something privacy aware, because I do not like to share my personal todo list with big companies

Todoo works storing todos on a plain-old json file and allows you to configure its path.

This way you are free to move it inside your Dropbox folder if you like, or even better inside a  [Cryptomator](https://cryptomator.org/) vault 👌.

## Features

* Todos stored locally (because privacy matters, your data is yours and only yours)
* Place the todoo.json anywhere you want
* Always available right in the system tray (Windows/Linux) or menu bar (Mac)
* Global shortcut to open the app window (`control+shift+space`)

## Tech stack

* [Electron](https://github.com/electron/electron)
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

Build app binaries for OS X, Linux, and Windows.

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
