import React from 'react'

const Country_dropdown = () => {
    return (
        <div className="country-div">
            <div className="mb-12">
                <label>Shipping to</label>
                <div className="input-group">
                    <select className="formcontrol">
                        <option>United States (US)</option>
                        <option>Nigeria</option>
                        <option>Canada</option>
                    </select>
                </div>
            </div>
            <div className="mb-12">
                <label>Language</label>
                <div className="input-group">
                    <select className="formcontrol">
                        <option>English</option>
                        <option>Nigeria</option>
                        <option>Canada</option>
                    </select>
                </div>
            </div>
            <div className="mb-12">
                <label>Currency</label>
                <div className="input-group">
                    <select className="formcontrol">
                        <option>United States Dollar (USD)</option>
                        <option>Nigeria</option>
                        <option>Canada</option>
                    </select>
                </div>
            </div>
            <div className="general-button full-width">
            Save preferences
                </div>
        </div>
    )
}

export default Country_dropdown
