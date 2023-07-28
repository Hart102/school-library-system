import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import AddBooks from './Pages/Admin/AddBooks';
import AddMember from './Pages/Admin/AddMember';
import Books from './Pages/Admin/Books';
import Index from './Pages/Admin/Index';
import LendBooks from './components/LendBooks/LendBooks';
import Profile from './components/Profile/Profile';
import ContentLayOut from './layout/ContentLayOut';
import MainLayout from './layout/MainLayout';

import { getAllBooks, getAllMembers } from './components/APIs/Api';


const App = () => {
  // Call Api while App is loading
  getAllMembers()
  getAllBooks()


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<ContentLayOut />}>
            <Route index path='/' element={<Index />} />
            <Route path='/dashboard/books' element={<Books />} />
            <Route path='/dashboard/add/books' element={<AddBooks />} />
            <Route path='/dashboard/add/member' element={<AddMember />} />
            <Route path='/dashboard/member/profile' element={<Profile />} />
            <Route path='/dashboard/lendBooks' element={<LendBooks />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App