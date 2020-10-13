import React from "react";

class ProfileStatusOLD extends React.Component{
    constructor(props) {
        super(props);
        this.editModeTrue   = this.editModeTrue.bind(this);
        this.editModeFalse  = this.editModeFalse.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
    }
    state = {
        editMode: false,
        status: this.props.status
    };
    editModeTrue() {
        this.setState({editMode:true});
    }
    editModeFalse(){
        this.setState({editMode:false});
        this.props.updateStatus(this.state.status);
    }
    onStatusChange(e) {
        this.setState({status:e.currentTarget.value});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) this.setState({ status: this.props.status});
    }

    render() {
        return <div>
            {!this.state.editMode
            ? <div onDoubleClick={this.editModeTrue}> <span>{!this.props.status ? 'no status' : this.props.status}</span> </div>
            : <div onBlur={this.editModeFalse}><input value={this.state.status} autoFocus={true}
                onChange={this.onStatusChange}/> </div>
            }
    </div>
    }
}

export default ProfileStatusOLD;