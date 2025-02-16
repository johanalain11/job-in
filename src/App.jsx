import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Help from './pages/Help';
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import Postulats from './pages/Postulats';
import Publications from './pages/Publications';
import Publication from './pages/Publication';
import Recherche from './pages/Recherche';
import Settings from './pages/Settings';
import Entreprises from './pages/Entreprises';
import Profile from './pages/Profile';

import Dashboard2 from './pages2/Dashboard2';
import Publication2 from './pages2/Publication2';
import Candidatures from './pages2/Candidatures';
import Offres from './pages2/Offres';
import Profile2 from './pages2/Profile'
import Settings2 from './pages2/Settings';
import Help2 from './pages2/Help';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          {/*JOBBERS */}
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/publications" element={<Publications />} />
          <Route path='/publications/:pubid' element={<Publication />} />
          <Route path='/postulats' element={<Postulats />} />
          <Route path='/recherche' element={<Recherche />} />
          <Route path='/recherche/:jobid' element={<Jobs />} />
          <Route path='/help' element={<Help />} />
          <Route path='/login' element={<Login />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/entreprises' element={<Entreprises />} />
          <Route path='/profile' element={<Profile />} />
          {/*ENTREPRISES */}
          <Route path='/dashboard-E' element={<Dashboard2 />} />
          <Route path='/publications-E' element={<Publication2 />} />
          <Route path='/candidatures-E' element={<Candidatures />} />
          <Route path='/offres-E' element={<Offres />} />
          <Route path='/profile-E' element={<Profile2 />} />
          <Route path='/settings-E' element={<Settings2 />} />
          <Route path='/help-E' element={<Help2 />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
