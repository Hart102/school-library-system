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
        cover: bookcover1,
        title: 'down the lane',
        author: 'prof. hart',
        totalBooks: 15,
        edition: '10th edition',
        pages: 30,
        subject: 'science',
        borrowedDate: '2-5-2023',
        returningDate: '7-5-2023'
    },
    {
        _id: 2,
        cover: bookcover2,
        title: 'the laws of physics',
        author: 'kelvin albert',
        totalBooks: 20,
        edition: '1st edition',
        length: 30,
        subject: 'science',
        borrowedDate: '2-5-2023',
        returningDate: '7-5-2023'
    },
    {
        _id: 3,
        cover: bookcover3,
        title: 'more tale from shake spare',
        author: 'robet johnson',
        totalBooks: 45,
        edition: '13th edition',
        length: 30,
        subject: 'science',
        borrowedDate: '2-5-2023',
        returningDate: '7-5-2023'
    },
    {
        _id: 4,
        cover: bookcover4,
        title: 'history book',
        author: 'prof. peter',
        totalBooks: 28,
        edition: '4th edition',
        length: 30,
        subject: 'science',
        borrowedDate: '2-5-2023',
        returningDate: '7-5-2023'
    }
]