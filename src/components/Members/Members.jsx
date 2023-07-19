import axios from 'axios'
import { useEffect, useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteMember, getMembers } from '../../Reducers/membersReducer'
import PopUp from '../Modal/PopUp'

const Members = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [members, setMembers] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false)
    const membersList = useSelector((state) => state.members.value)


    const updatePofile = (member) => {
        navigate('/dashboard/add/member', { state: member })
    }

    useEffect(() => {
        if (membersList.success) {
            setMembers(membersList.success)
            setIsLoading(false)

        } else if (membersList.error) {
            setIsOpen(true)
            setIsLoading(false)
            setMessage({ title: 'Network Error', err: membersList.error })
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
                    members && members.map((member) => (
                        <tr className="text-capitalize" role='button' key={member._id}>
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
                                <Icon.Trash
                                    role='button'
                                    onDoubleClick={() => dispatch(deleteMember(member._id))}
                                />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            <PopUp
                message={message.err}
                title={message.title}
                action={isOpen}
                onclick={() => setIsOpen(false)}
            />
        </>
    )
}

export default Members