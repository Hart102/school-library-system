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
import Login from './Pages/Admin/Login';
import Borrowers from './Pages/Admin/Borrowers';
import { getAllBooks, getAllMembers, initializeSession } from './components/Modules/Api';


const App = () => {
  // Call Api while App is loading
  initializeSession()
  getAllMembers()
  getAllBooks()


  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Login />} />
        <Route element={<MainLayout />}>
          <Route element={<ContentLayOut />}>
            <Route index path='/dashboard' element={<Index />} />
            <Route path='/books' element={<Books />} />
            <Route path='/add/books' element={<AddBooks />} />
            <Route path='/add/member' element={<AddMember />} />
            <Route path='/member/profile' element={<Profile />} />
            <Route path='/lendBooks' element={<LendBooks />} />
            <Route path='/borrowers' element={<Borrowers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


  // < Route path = '/dashboard/books' element = {< Books />} />
  //   < Route path = '/dashboard/add/books' element = {< AddBooks />} />
  //     < Route path = '/dashboard/add/member' element = {< AddMember />} />
  //       < Route path = '/dashboard/member/profile' element = {< Profile />} />
  //         < Route path = '/dashboard/lendBooks' element = {< LendBooks />} />