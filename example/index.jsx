'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;

import Emergency from './demo/emergency/index.jsx';
import Diodes from './demo/diodes/index.jsx';
import Force from './demo/force/index.jsx';
import ServerLess from './demo/serverless/index.jsx';
import RelationalNetwork from './demo/relationalNetwork/index.jsx';
import RelationalBooks from './demo/relationalBooks/index.jsx';
import System from './demo/system/index.jsx';
import liteGraph from './demo/liteGraph/index.jsx';
import EntityRelationship from './demo/entityRelationship/index.jsx';
import CompactBoxTree from './demo/compactBoxTree/index.jsx';
import CompactBoxTreeNew from './demo/compactBoxTree-new/index.jsx';
import EntityRelationshipNew from './demo/entityRelationship-new/index.jsx';
import EmergencyNew from './demo/emergency-new/index.jsx';
import IndustryNew from './demo/industry-new/index.jsx';
import DecisionNew from './demo/decision-new/index.jsx';
import FlowNew from './demo/flow-new/index.jsx';
import Scene4New from './demo/scene-4-new/index.jsx';
import Scene5New from './demo/scene-5-new/index.jsx';
import Scene6New from './demo/scene-6-new/index.jsx';

import 'antd/dist/antd.css';
import './static/iconfont.css';
import './index.less';

ReactDOM.render((
  <Router>
    <Layout>
        <Header className='header'>小蝴蝶DEMO</Header>
        <Layout>
          <Sider>
            <Menu
              className='menu'
              mode='inline'
              theme="dark"
            >
              <Menu.Item key="emergency">
                <Link to="/emergency">Emergency</Link>
              </Menu.Item>
              <Menu.Item key="diodes">
                <Link to="/diodes">Diodes</Link>
              </Menu.Item>
              <Menu.Item key="force">
                <Link to="/force">Force</Link>
              </Menu.Item>
              <Menu.Item key="serverLess">
                <Link to="/serverless">ServerLess</Link>
              </Menu.Item>
              <Menu.Item key="relationalNetwork">
                <Link to="/relational_network">Relational Network</Link>
              </Menu.Item>
              <Menu.Item key="system">
                <Link to="/system">System</Link>
              </Menu.Item>
              <Menu.Item key="liteGraph">
                <Link to="/lite_graph">LiteGraph</Link>
              </Menu.Item>
              <Menu.Item key="entity">
                <Link to="/entity">Entity Relationship</Link>
              </Menu.Item>
              <Menu.Item key="compactBoxTree">
                <Link to="/compactBoxTree">CompactBoxTree</Link>
              </Menu.Item>
              <Menu.Item key="relationarBooks">
                <Link to="/relational_books">RelationalBooks</Link>
              </Menu.Item>
              <Menu.Item key="compactBoxTree-new">
                <Link to="/compactBoxTree-new">compactBoxTree-new</Link>
              </Menu.Item>
              <Menu.Item key="entityRelationship-new">
                <Link to="/entityRelationship-new">entityRelationship-new</Link>
              </Menu.Item>
              <Menu.Item key="emergency-new">
                <Link to="/emergency-new">emergency-new</Link>
              </Menu.Item>
              <Menu.Item key="industry-new">
                <Link to="/industry-new">industry-new</Link>
              </Menu.Item>
              <Menu.Item key="decision-new">
                <Link to="/decision-new">decision-new</Link>
              </Menu.Item>
              <Menu.Item key="flow-new">
                <Link to="/flow-new">flow-new</Link>
              </Menu.Item>
              <Menu.Item key="scene-4-new">
                <Link to="/scene-4-new">scene-4-new</Link>
              </Menu.Item>
              <Menu.Item key="scene-5-new">
                <Link to="/scene-5-new">scene-5-new</Link>
              </Menu.Item>
              <Menu.Item key="scene-6-new">
                <Link to="/scene-6-new">scene-6-new</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Redirect from="/" to="/scene-6-new" />
            <Route path="/emergency" component={Emergency} />
            <Route path="/diodes" component={Diodes} />
            <Route path="/force" component={Force} />
            <Route path="/serverless" component={ServerLess} />
            <Route path="/relational_network" component={RelationalNetwork} />
            <Route path="/system" component={System} />
            <Route path="/lite_graph" component={liteGraph} />
            <Route path="/entity" component={EntityRelationship} />
            <Route path="/compactBoxTree" component={CompactBoxTree} />
            <Route path="/relational_books" component={RelationalBooks} />
            <Route path="/compactBoxTree-new" component={CompactBoxTreeNew} />
            <Route path="/entityRelationship-new" component={EntityRelationshipNew} />
            <Route path="/emergency-new" component={EmergencyNew} />
            <Route path="/industry-new" component={IndustryNew} />
            <Route path="/decision-new" component={DecisionNew} />
            <Route path="/flow-new" component={FlowNew} />
            <Route path="/scene-4-new" component={Scene4New} />
            <Route path="/scene-5-new" component={Scene5New} />
            <Route path="/scene-6-new" component={Scene6New} />
          </Content>
        </Layout>
      </Layout>
  </Router>
), document.getElementById('main'));