import React, { useEffect, useRef, useState } from "react"
import * as Icon from 'react-bootstrap-icons'
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { addMembers, upDateMember } from "../../Reducers/membersReducer"
import { PostRequest } from "../../components/Modules/PostRequest"
import Button from "../../components/Button"
import { Camera, ImagePreview } from "../../components/Camera/Camera"
import FormInput from "../../components/FormInput"
import Title from "../../components/Title"
import FormLayout from "../../layout/FormLayout"
import { modalAction, setMessageAction} from "../../Reducers/ModalAction"

const AddMember = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const [memberToBeUpdated, setMemberToBeUpdated] = useState(location.state);

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

    const submitForm = () => {
        if (!memberToBeUpdated) {
            PostRequest( // Register members function 
                "http://localhost:3000/api/membersRegistration", formData,

                setIsLoading,
                setIsModalOpen,
                clearInput,
                setMessage,

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
            )


        } else {
            PostRequest( // Update profile function 
                "http://localhost:3000/api/editMembersProfile", formData,

                setIsLoading,
                setIsModalOpen,
                clearInput,
                setMessage,

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
            )
            // SWitch to register mode 
            if (message.title == "success") {
                setMemberToBeUpdated('')
            }
        }
    }

    if (message) {
        dispatch(
            setMessageAction({
                title: message.title,
                msg: message.msg
            })
        )
        dispatch(modalAction(true))
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
        </>
    )
}

export default AddMember