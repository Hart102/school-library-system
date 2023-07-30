import Title from "../Title"

const ProfileContainer = ({children}) => {
    return (
        <div className="bg-white">
            <section className="col-md-9 d-flex flex-column align-items-center p-5 mx-auto">
                <Title text="Student profile" />
                <div className="py-5 w-100 text-uppercase">{children}</div>
            </section>
        </div>

    )
}

export default ProfileContainer