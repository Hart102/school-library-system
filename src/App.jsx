import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import AddBooks from './Pages/Admin/AddBooks';
import AddMember from './Pages/Admin/AddMember';
import Books from './Pages/Admin/Books';
import Content from './components/Content';
import MainLayout from './layout/MainLayout';
import Index from './Pages/Admin/Index'
import Profile from './components/Profile/Profile';

import { getAllMembers } from './components/APIs/Api';


const App = () => {
  getAllMembers()
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Content />}>
            <Route index path='/' element={<Index />} />
            <Route path='/dashboard/books' element={<Books />} />
            <Route path='/dashboard/add/books' element={<AddBooks />} />
            <Route path='/dashboard/add/member' element={<AddMember />} />
            <Route path='/dashboard/member/profile' element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App