import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PageNotFound from '@/pages/404';
import Home from '@/pages/Home';
import PublicLayout from '@/layouts/PublicLayout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
