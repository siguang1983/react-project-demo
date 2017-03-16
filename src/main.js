import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
// import $ from 'jquery'

import './assets/style/reset.css';
import 'antd/dist/antd.css';

import RouterConfig from './routers/'
import Mockjs from './mocks/mock';

let app = document.querySelector('#app');
render(<RouterConfig />, app);

