import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ReactHome from './modules/react/ReactHome';
import EventHandler from './modules/react/EventHandler';
import Architecture from './modules/architecture/index';
import MemoAndUseCallback from './modules/react/MemoAndUseCallback';
import PerformanceOptimization from './modules/react/PerformanceOptimization';
import AdvancedComponentPatterns from './modules/react/AdvancedComponentPatterns';
import ReduxHome from './modules/redux/ReduxHome';
import ReduxPerformanceOptimization from './modules/redux/PerformanceOptimization';
import ReduxMiddleware from './modules/redux/Middleware';
import CypressHome from './modules/cypress/CypressHome';
import EndToEndTesting from './modules/cypress/EndToEndTesting';
import VisualRegressionTesting from './modules/cypress/VisualRegressionTesting';
import ContainerHome from './modules/container/ContainerHome';
import Docker from './modules/container/Docker';
import Kubernetes from './modules/container/Kubernetes';
import NodeJSHome from './modules/nodejs/NodeJSHome';
import PerformanceTuning from './modules/nodejs/PerformanceTuning';
import Microservices from './modules/nodejs/Microservices';
import StorybookHome from './modules/storybook/StorybookHome';
import BuildingComponents from './modules/storybook/BuildingComponents';
import VisualTesting from './modules/storybook/VisualTesting';
import GoogleCloudHome from './modules/googlecloud/GoogleCloudHome';
import GKE from './modules/googlecloud/GKE';
import Firebase from './modules/googlecloud/Firebase';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> {/* 应用flex布局 */}
      <Router>
        <Navigation />
        <div style={{ flex: 1, paddingTop: '20px' }}> {/* flex: 1 确保内容区占据剩余空间 */}
          <Routes>
            <Route path="/" element={<ReactHome />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/react" element={<ReactHome />} />
            <Route path="/react/EventHandler" element={<EventHandler />} />
            <Route path="/react/MemoAndUseCallback" element={<MemoAndUseCallback />} />
            <Route path="/react/performance-optimization" element={<PerformanceOptimization />} />
            <Route path="/react/advanced-component-patterns" element={<AdvancedComponentPatterns />} />
            <Route path="/redux" element={<ReduxHome />} />
            <Route path="/redux/performance-optimization" element={<ReduxPerformanceOptimization />} />
            <Route path="/redux/middleware" element={<ReduxMiddleware />} />
            <Route path="/cypress" element={<CypressHome />} />
            <Route path="/cypress/end-to-end-testing" element={<EndToEndTesting />} />
            <Route path="/cypress/visual-regression-testing" element={<VisualRegressionTesting />} />
            <Route path="/container" element={<ContainerHome />} />
            <Route path="/container/docker" element={<Docker />} />
            <Route path="/container/kubernetes" element={<Kubernetes />} />
            <Route path="/nodejs" element={<NodeJSHome />} />
            <Route path="/nodejs/performance-tuning" element={<PerformanceTuning />} />
            <Route path="/nodejs/microservices" element={<Microservices />} />
            <Route path="/storybook" element={<StorybookHome />} />
            <Route path="/storybook/building-components" element={<BuildingComponents />} />
            <Route path="/storybook/visual-testing" element={<VisualTesting />} />
            <Route path="/googlecloud" element={<GoogleCloudHome />} />
            <Route path="/googlecloud/gke" element={<GKE />} />
            <Route path="/googlecloud/firebase" element={<Firebase />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
