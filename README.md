<p align="center">
  <a href="http://smartcooly.marstau.com/">
    <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width=72 height=72>
  </a>

  <h3 align="center">Smartcooly</h3>

  <p align="center">
    Sleek, intuitive, and powerful front-end framework for faster and easier web development.
    <br>
    <a href="http://smartcooly.marstau.com/docs/1.0"><strong>Explore Smartcooly docs »</strong></a>
    <br>
    <br>
    <a href="https://github.com/marstau/smartcooly.doc/issues/new?template=bug.md">Report bug</a>
    ·
    <a href="https://github.com/marstau/smartcooly.doc/issues/new?template=feature.md&labels=feature">Request feature</a>
  </p>
</p>

<br>

## Table of contents

- [Running documentation locally](#running-documentation-locally)
- [Publish to github](#publish-to-github)
- [Copyright and license](#copyright-and-license)
- [Denote](#denote)


# Running documentation locally

1. Run through the [tooling setup](https://getbootstrap.com/docs/4.0/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm run dist` to generate dist directory.
3. Run `npm run test` (or a specific NPM script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
4. From the root `/Smartcooly` directory, run `npm run docs-serve` in the command line.
5. Open `http://localhost:9001` in your browser, and voilà.

caution: if run `bundle install` occurs error, use `sudo bundle install` instead.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

## Publish to github

1. Create and push to gh-pages.

```
git subtree push --prefix=dist origin gh-pages
```

2. Compile project, run `npm run dist`, then run `npm run docs-compile`.


3. Push sub directory `_gh_pages` to gh-pages branch.

## Copyright and license

Code and documentation copyright @2018 by marstau and Code released under the [MIT License](https://github.com/marstau/smartcooly.doc/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/marstau/smartcooly.doc/blob/master/docs/LICENSE).

## [Denote](http://smartcooly.marstau.com/docs/1.0/about/denote/)