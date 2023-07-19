import Webcam from "react-webcam"

const videoConstraints = {
    width: '100%',
    facingMode: "environment"
};

export const Camera = ({ webcamRef, }) => {
    return (
        <div className="pt-4 image-container">
            <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/png"
                videoConstraints={videoConstraints}
                mirrored={false}
                style={{ height: '100%', width: '100%' }}
            />
        </div>
    )
}


export const ImagePreview = ({ children, src }) => {
    return (
        <section className="image-preview mb-4">
            <div>
                {src && <img src={src} className="img-fluid h-100 w-100" />}
                {children}
            </div>
        </section>
    )
}