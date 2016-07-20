![VR3 Icon](http://vr3.io/img/vr3_64.png)

## VR3 Technologies ® 
Todos los derechos reservados.
CG Logistica SAPI de CV.

* W: [VR3.io](http://vr3.io) 
* Tw: [@VR3io](http://twitter.com/vr3io)
* Fb: [VR3](http://facebook/vectorthree)
* M: [info@vr3.io](info@vr3.io)

---

# VR3 Webapp [VR3.io](http://vr3.io)

#### Author [ostocino](http://twitter.com/ostocino)

### Getting Started

Install npm using Homebrew, or you can always download [Node from here](https://nodejs.org/en/)

```brew install npm```

Install bower for dependency management

```brew install bower``

Using NPM (Node Package Manager), install [gulp](http://gulpjs.com/) globally, the javascript taskrunner

```npm install --global gulp-cli```

Or you can always use brew

```brew install gulp``

### Get the project

Clone the repository

```git clone http://github.com/ostocino/vr3```

Init NPM in the project

```npm init```

then install gulp locally

```npm install --save-dev gulp``

then install npm and bower

```npm intall```

```bower install```

### Start the server

Start the server using gulp (livereloading activated)

```gulp serve```

### Build

Gulp will automatically inject the bower dependencies, build them and uglify them in the dist folder

```gulp build```

Then you can grab the ./dist folder and upload it to the server

### Known issues

Scrollmagic dependencies doesn't get injected when build. But that's fine because we will deprecate this parallax lib for MozVR's [A-Frame](http://aframe.io)




