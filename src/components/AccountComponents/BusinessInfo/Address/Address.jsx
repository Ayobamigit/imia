import React from 'react'

const Address = (props) => {
    return (
        <div className="info-div">
            <div className="transparent-button" onClick={props.onClickAdd}>
                Add address
            </div>
        </div>
    )
}

export default Address
