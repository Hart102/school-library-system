import { useEffect, useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { hideAddButton } from "../Reducers/Book"
import { deleteMember } from '../Reducers/membersReducer'
import DeleteRequest from './Modules/DeleteRequest'
import LoadingFunction from './Modules/LoadingFunction'
import PopUp from './Modal/PopUp'

const Members = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const membersList = useSelector((state) => state.members.value);

    // Redirect to update members profile page with members data
    const updatePofile = (member) => {
        navigate(
            '/add/member', { state: member }
        )
    }

    // Redirect to view members profile page
    const viewProfile = (memberId) => {
        navigate(
            '/member/profile', { state: memberId }
        )
    }

    //Delete Book function
    const deleteMembers = (Obj) => {
        DeleteRequest(
            "http://localhost:3000/api/deleteMember", Obj,

            setIsLoading,
            setIsModelOpen,
            setMessage,
            dispatch(deleteMember(Obj.id))
        )
    }


    // Load members when the page refresh
    useEffect(() => {
        LoadingFunction(
            membersList,
            setIsLoading,
            setIsModelOpen,
            setMessage,
            dispatch(
                hideAddButton(false)
            )
        )


    }, [membersList])

    return (
        <>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>REG NO</th>
                    <th>DEPT</th>
                    <th>COLLEGE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {isLoading ? <tr><td>Loading...</td></tr> :
                    membersList.success && membersList.success.map((member, index) => (
                        <tr className="text-capitalize" role='button' key={index} >
                            <td className='pe-5'>
                                <img src={member.Profile} className='me-3' />
                                {member.FullName}
                            </td>
                            <td className='pt-3'>{member.RegNo}</td>
                            <td className='pt-3'>{member.Department}</td>
                            <td className='pt-3'>{member.College}</td>
                            <td className='pt-3 d-flex flex-lg-row flex-column'>
                                <Icon.Person onClick={() => viewProfile(member._id && member._id)} />
                                <Icon.Pencil
                                    role='button'
                                    className='mx-lg-4 my-lg-0 my-3'
                                    onClick={() => updatePofile(member)}
                                />
                                {isLoading ? <p>Loading...</p> :
                                    <Icon.Trash
                                        role='button'
                                        className=''
                                        onDoubleClick={() => deleteMembers(member._id && { id: member._id })}
                                    />
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            <PopUp
                title={message.title}
                msg={message.msg}
                isModalOpen={isModelOpen}
                onclick={() => setIsModelOpen(false)}
            />
        </>
    )
}

export default Members