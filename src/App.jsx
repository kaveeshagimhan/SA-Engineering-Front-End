import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { 
  EngineeringServicesPage, 
  PlaceholderPage, 
  HomePage,
  OurTeamPage,
  InvestorsPage, 
  NewsNotificationPage,
  ConstructionProjectsPage,
  OurClientPage,
  SustainablePage,
  OurStoryPage,
  ProjectDetailsPage,
  ContactUsPage,
} from './components/pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<OurStoryPage title="About Us" />} />
      <Route path="/values" element={<PlaceholderPage title="Our Values" />} />
      <Route path="/engineering-services" element={<EngineeringServicesPage />} />
      <Route path="/consulting" element={<PlaceholderPage title="Consulting" />} />
      <Route path="/projects" element={<ConstructionProjectsPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/sustainability" element={<SustainablePage title="Sustainability" />} />
      <Route path="/join" element={<PlaceholderPage title="Join" />} />
      <Route path="/news" element={<NewsNotificationPage />} />
      <Route path="/investors" element={<InvestorsPage />} />
      <Route path="/team" element={<OurTeamPage />} />
      <Route path="/client" element={<OurClientPage />} />
      <Route path="/construction-projects" element={<ConstructionProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
