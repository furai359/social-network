import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus]     = useState(props.status)

    const enableEdit     = () => {setEditMode(true)}
    const disableEdit    = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {setStatus(e.currentTarget.value)}

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return <div className={props.className}>
        {!editMode
            ? <div onDoubleClick={enableEdit} ><span>{!status ? 'no status' : status}</span></div>
            : <div><input onBlur={disableEdit} onChange={onStatusChange} autoFocus={true} value={status}/></div>
        }
    </div>
}

export default ProfileStatus;