const baseUrl = () =>{
    return 'https://api.staging.itsmadeinafrica.com/v1'
}

// Signup
export const businessSignUp =`${baseUrl()}/business/account/user/create`;
export const businessLogin =`${baseUrl()}/business/account/auth/login`;

//Upload KYC
export const kycUpload =`${baseUrl()}/business/account/kyc/create`;
