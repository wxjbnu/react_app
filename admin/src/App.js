import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import routes from './router'

import logo from './logo.svg';
import './App.css';
import { Button ,Nav ,Navbar ,NavItem  } from 'reactstrap';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class App extends Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Router>
        <div className="App">

          <div style={{width:'100%',height:60,background:'#108ee9'}}>
            {/* <div style={{width:50,height:50,background:'red'}}> */}
              <h1 style={{paddingLeft:'5%',paddingTop:12,color:'#fff',fontSize:24,textAlign:'left'}}>后台管理</h1>
            {/* </div> */}
          </div>
          
          <div style={{width:240,position:'fixed',top:60,bottom:0,left:0,background:'#404040'}}>
            <Menu
              onClick={this.handleClick}
              style={{ width: 240 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
            >
              {/* <SubMenu key="sub1" title={<span>Navigation One</span>}>
                <MenuItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu> */}
              
              <SubMenu key="sub1" title={<span><span>菜单</span></span>}>
                <Menu.Item key="t0"><Link to="/">首页</Link></Menu.Item>
                <Menu.Item key="11"><Link to="/t1">用户反馈</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><span>问题答案</span></span>}>
                <Menu.Item key="t4"><Link to="/question">提问题</Link></Menu.Item>
                <Menu.Item key="15"><Link to="/answer">回答</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </div>

          <div 
            className="content"
            style={{paddingLeft:'240px'}}
            >
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            ))}

          </div>
          
          
        </div>
      </Router>
    );
  }
}

export default App;
