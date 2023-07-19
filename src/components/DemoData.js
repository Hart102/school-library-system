import UserImage from '../assets/imgs/2.jpg'
import UserImage2 from '../assets/imgs/3.jpg'

import bookcover1 from '../assets/books/Poster (2).png'
import bookcover2 from '../assets/books/Poster (3).png'
import bookcover3 from '../assets/books/Poster (4).png'
import bookcover4 from '../assets/books/web3.png'

export const MembersData = [
    {
        _id: 1,
        avatar: UserImage,
        FullName: 'Johnathan Phelan',
        RegNo: 'Mouau/Cmp/16/103',
        Department: 'Computer Science',
        College: 'colpas',
        YearOfAdmission: '2018/209',
        Email: 'hartjust558@gmail.com',
    },
    {
        _id: 2,
        avatar: UserImage2,
        FullName: 'hart c justman',
        RegNo: 'Mouau/Cmp/16/123',
        Department: 'agric engineering',
        College: 'ceet',
        YearOfAdmission: '2018/209',
        Email: 'just@gmail.com',
    }
]

export const DemoBooks = [
    {
        _id: 1,
        coverImage: bookcover1,
        bookTitle: 'down the lane',
        publisher: 'prof. hart',
        totalBooks: 15,
        edition: '10th edition',
        pages: 30,
        category: 'science',
        borrowedDate: '2-5-2023',
        returningDate: '7-5-2023'
    },
    {
        _id: 2,
        coverImage: bookcover2,
        bookTitle: 'the laws of physics',
        publisher: 'kelvin albert',
        totalBooks: 20,
        edition: '1st edition',
        pages: 30,
        category: 'science',
        borrowedDate: '2-5-2023',
        returningDate: '7-5-2023'
    },
    {
        _id: 3,
        coverImage: bookcover3,
        bookTitle: 'more tale from shake spare',
        publisher: 'robet johnson',
        totalBooks: 45,
        edition: '13th edition',
        pages: 30,
        category: 'science',
        borrowedDate: '2-5-2023',
        returningDate: '7-5-2023'
    },
    {
        _id: 4,
        coverImage: bookcover4,
        bookTitle: 'history book',
        publisher: 'prof. peter',
        totalBooks: 28,
        edition: '4th edition',
        pages: 30,
        category: 'science',
        borrowedDate: '2-5-2023',
        returningDate: '7-5-2023'
    }
]