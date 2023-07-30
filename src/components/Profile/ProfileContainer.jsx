import Title from "../Title"

const ProfileContainer = ({ children }) => {
    return (
        <section className="col-md-11 d-flex flex-column align-items-center p-5 mx-auto">
            <Title text="Student profile" />
            <div className="pb-5 w-100 text-capitalize">{children}</div>
        </section>
    )
}

export default ProfileContainer