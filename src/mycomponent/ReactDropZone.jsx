import axios from 'axios';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ReactDropZone = ({ profileLink, setProfileLink }) => {

    const onDrop = useCallback(async acceptedFiles => {
        // Do something with the files
        // console.log("File is dragged")
        // files are sent in formData format and not as in json format
        let formData = new FormData()

        // formData.append("name", "MOMO") example of how formdata are sent

        formData.append("file1", acceptedFiles[0])

        try {
            let resultImage = await axios({
                url: `http://localhost:8000/files/single`,
                method: "post",
                data: formData,
            })
            // console.log(resultImage)
            setProfileLink(resultImage.data.result)
        } catch (error) {
            console.log(error)
        }
    })
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
                {profileLink ? <img alt="profile-image" src={profileLink}></img> : null}

            </div>
        </>
    )
}

export default ReactDropZone