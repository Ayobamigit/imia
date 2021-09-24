import React from 'react';
import { ReactComponent as Upload } from '../../../../assets/icons/upload.svg';
import { ReactComponent as Remove } from '../../../../assets/icons/visibletrash.svg';

const Verification = (props) => {
    return (
        <div className="info-div">
            <p className="title-desc text-darker">
               Accepted documents include International Passport, Drivers’ License, National ID card. Ensure the bio-data page is visible on the file you upload.
            </p>

            <div className="verification-upload mt-21">

                {/* <div className="verify-remove">
                   <p className="title-desc" style={{color:'#4C4C4C'}}>michael_passport.pdf</p>
                   <Remove className="cursor-pointer" /> 
                </div> */}

                <div className="text-center">
                    <input  
                        type="file" 
                        id="verify-btn" 
                        hidden  
                        // accept=".png, .jpg, .jpeg" 
                        onChange={props.onFileChange}
                        // name="picture"
                    />

                    <label htmlFor="verify-btn">

                        <Upload />

                        <p className="title-desc mt-14"><span className="cursor-pointer" style={{color:'#737373'}}><u>Click to upload</u></span> or drag and drop file here.</p>

                    </label>
                </div>
            </div>
        </div>
    )
}

export default Verification