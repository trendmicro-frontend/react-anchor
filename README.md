# react-anchor [![build status](https://travis-ci.org/trendmicro-frontend/react-anchor.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-anchor) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-anchor/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-anchor?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-anchor.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-anchor/)

Demo: https://trendmicro-frontend.github.io/react-anchor

## Installation

```
npm install --save react@latest
npm install --save @trendmicro/react-anchor
```

```js
import Anchor from '@trendmicro/react-anchor';
```

## Usage

```js
<Anchor
    className="btn btn-default"
    href="https://github.com"
>
    <i className="fa fa-github fa-fw" />
    GitHub
</Anchor>
```


## API

### Properties

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>href</td>
      <td>String</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>Function(event)</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Boolean</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>role</td>
      <td>String</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>tabIndex</td>
      <td>Number|String</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>componentClass</td>
      <td>Element</td>
      <td>'a'</td>
      <td></td>
    </tr>
  </tbody>
</table>

## License

MIT
