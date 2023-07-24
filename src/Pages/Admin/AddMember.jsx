import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import * as Icon from 'react-bootstrap-icons'
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { addMembers, upDateMember } from "../../Reducers/membersReducer"
import Button from "../../components/Button/Button"
import { Camera, ImagePreview } from "../../components/Camera/Camera"
import { FormInput } from "../../components/FormInput"
import PopUp from "../../components/Modal/PopUp"
import { Title } from "../../components/Title"
import FormLayout from "../../layout/FormLayout"

const AddMember = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const [memberToBeUpdated, setMemberToBeUpdated] = useState(location.state);
    const memberList = useSelector(state => state.members.value)

    // Camera hooks 
    const webcamRef = useRef(null);
    const [url, setUrl] = useState(null);
    const [switchCamera, setSwitchCamera] = useState(null);

    // Form Inputs 
    const [_id, setId] = useState('')
    const [RegNo, setRegNo] = useState('');
    const [Email, setEmail] = useState('');
    const [College, setCollege] = useState('');
    const [FullName, setFullName] = useState('');
    const [Department, setDepartment] = useState('');
    const [YearOfAdmission, setYearOfAdmission] = useState('');

    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false)


    const capturePhoto = React.useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc)
    }, [webcamRef]);

    const onCamera = () => {
        setSwitchCamera(true)
        setUrl('') // Clear old image when recapturing
    }

    const offCamera = () => {
        setSwitchCamera(false)
        capturePhoto()
    }

    const formData = new FormData()
    formData.append("id", _id)
    formData.append("Profile", url)
    formData.append("RegNo", RegNo)
    formData.append("Email", Email)
    formData.append("College", College)
    formData.append("FullName", FullName)
    formData.append("Department", Department)
    formData.append("YearOfAdmission", YearOfAdmission)

    // Clear input function 
    const clearInput = () => {
        setRegNo('');
        setEmail('');
        setCollege('');
        setFullName('');
        setDepartment('');
        setYearOfAdmission('');
    }

    let api, response, data;

    const registerMember = async () => {
        api = 'http://localhost:3000/api/membersRegistration'
        response = await axios.post(api, formData)
        data = response.data;

        if (data.success) {
            dispatch(
                addMembers({
                    url,
                    RegNo,
                    Email,
                    College,
                    FullName,
                    Department,
                    YearOfAdmission
                })
            )
            clearInput();
            setIsLoading(false)
            setIsModalOpen(true)
            setMessage({ title: 'Success', msg: data.success })

        } else {
            setMessage({ title: 'Error', msg: data.error })
        }
    }


    const updateProfile = async () => {
        api = 'http://localhost:3000/api/editMembersProfile'
        response = await axios.post(api, formData)
        data = response.data;

        if (data.success) {
            dispatch(
                upDateMember({
                    _id,
                    url,
                    RegNo,
                    Email,
                    College,
                    FullName,
                    Department,
                    YearOfAdmission
                })
            )
            clearInput();
            setIsLoading(false)
            setIsModalOpen(true)
            setMessage({ title: 'Success', msg: data.success })

        } else {
            setIsModalOpen(true)
            setMessage({ title: 'Error', msg: data.error })
        }
    }


    const submitForm = async () => {
        memberToBeUpdated ? updateProfile() : registerMember()
    }

    useEffect(() => {
        // Update member function 
        if (memberToBeUpdated) {
            setId(memberToBeUpdated._id)
            setUrl(memberToBeUpdated.Profile)
            setRegNo(memberToBeUpdated.RegNo)
            setEmail(memberToBeUpdated.Email)
            setCollege(memberToBeUpdated.College)
            setFullName(memberToBeUpdated.FullName)
            setDepartment(memberToBeUpdated.Department)
            setYearOfAdmission(memberToBeUpdated.YearOfAdmission)
        }

    }, [memberToBeUpdated])


    return (
        <>
            <FormLayout className={'justify-content-center pb-5'}>
                <Title
                    style={'text-center mb-3'}
                    text={memberToBeUpdated ? 'update profile' : 'register member'}
                />

                <ImagePreview src={url}>
                    {switchCamera && <Camera webcamRef={webcamRef} />}
                </ImagePreview>

                <div className="d-flex justify-content-center pb-5">
                    <Button
                        type="button"
                        onclick={() => !switchCamera ? onCamera() : offCamera()}
                        btnText={!switchCamera ? 'Take photo' : <Icon.Camera size={25} />}
                    />
                </div>


                <FormInput
                    label='FullName'
                    type='text' value={FullName}
                    onchange={(e) => setFullName(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='registration Number'
                    type='text' value={RegNo}
                    onchange={(e) => setRegNo(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='Departmant'
                    type='text' value={Department}
                    onchange={(e) => setDepartment(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='College'
                    type='text' value={College}
                    onchange={(e) => setCollege(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='Year of admission'
                    type='text' value={YearOfAdmission}
                    onchange={(e) => setYearOfAdmission(e.target.value.toLowerCase())}
                />

                <FormInput
                    label='Email Address'
                    type='text' value={Email}
                    onchange={(e) => setEmail(e.target.value.toLowerCase())}
                />

                <Button
                    type='button'
                    onclick={() => submitForm()}
                    btnText={
                        !isLoading ? 'Loading...' : memberToBeUpdated ? 'Update Profile' : 'Register member'
                    }
                    style={'col-md-5 self-align-right py-2 my-4'}
                />
            </FormLayout>

            <PopUp
                action={isModalOpen}
                message={message.msg}
                title={message.title}
                onclick={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default AddMember