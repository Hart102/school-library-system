import axios from 'axios'
import { useEffect, useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteMember } from '../../Reducers/membersReducer'
import PopUp from '../Modal/PopUp'
import DeleteRequest from '../APIs/DeleteRequest'

const Members = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const membersList = useSelector((state) => state.members.value)

    const updatePofile = (member) => {
        navigate('/dashboard/add/member', { state: member })
    }

    const viewProfile = (member) => {
        navigate('/dashboard/member/profile', { state: member })
    }

    const deleteMembers = (Obj) => {
        DeleteRequest( //Delete Book function
            "http://localhost:3000/api/deleteMember", Obj,

            setIsLoading,
            setIsModelOpen,
            setMessage,
            dispatch(deleteMember(Obj.id))
        )
    }

    useEffect(() => {
        if (membersList.success) {
            setIsLoading(false)

        } else if (membersList.error) {
            setIsModelOpen(true)
            setIsLoading(false)
            setMessage({
                title: 'Network Error',
                err: membersList.error
            })
        }
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
                            <td className='pt-3'>
                                <Icon.Pencil
                                    className='me-4'
                                    role='button'
                                    onClick={() => updatePofile(member)}
                                />
                                {isLoading ? <p>Loading...</p> :
                                    <Icon.Trash
                                        role='button'
                                        onDoubleClick={() => deleteMembers({ id: member._id })}
                                    />
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            <PopUp
                message={message.msg}
                title={message.title}
                action={isModelOpen}
                onclick={() => setIsModelOpen(false)}
            />
        </>
    )
}

export default Members

// onDoubleClick={() => viewProfile(member)}