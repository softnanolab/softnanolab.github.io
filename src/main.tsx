import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Team from './pages/Team'
import Publications from './pages/Publications'
import ProjectDetail from './pages/ProjectDetail'
import PersonDetail from './pages/PersonDetail'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/person/:id" element={<PersonDetail />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
)
