import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
export default function App() {
    return (<Layout>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        {/* Add more routes as needed */}
        <Route path="*" element={<HomePage />}/>
      </Routes>
    </Layout>);
}
