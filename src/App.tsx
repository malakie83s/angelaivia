import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DataAnalyticsConsultingPage from './pages/DataAnalyticsConsultingPage';
import BusinessIntelligenceConsultingPage from './pages/BusinessIntelligenceConsultingPage';
import InsightsPage from './pages/InsightsPage';
import InsightsArticlePage from './pages/InsightsArticlePage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/data-analytics-consulting" element={<DataAnalyticsConsultingPage />} />
        <Route path="/business-intelligence-consulting" element={<BusinessIntelligenceConsultingPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/how-enterprises-turn-data-into-decisions" element={<InsightsArticlePage />} />
        <Route path="/faq" element={<FAQPage />} />
				<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
