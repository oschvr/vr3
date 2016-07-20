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

Install npm using Homebrew

```brew install npm```

Install bower for dependency management

```brew install bower``

Using NodePackageManager, install [gulp](http://gulpjs.com/), the javascript taskrunner

```npm install gulp```

### Get the project

Clone the repository

```git clone http://github.com/ostocino/vr3```

### Start the server

Start the server using gulp (livereloading activated)

```gulp serve```

### Build

Gulp will automatically inject the bower dependencies, build them and uglify them in the dist folder

```gulp build```

Then you can grab the ./dist folder and upload it to the server

### Known issues

Scrollmagic dependencies doesn't get injected when build. But that's fine because we will deprecate this parallax lib for MozVR's [A-Frame](http://aframe.io)




