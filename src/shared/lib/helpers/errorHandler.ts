export const showError = (errorMessage:string) => {
     if(process.env.NODE_ENV === 'development')
         console.error(errorMessage)
     else if (process.env.NODE_ENV === 'production')
            throw new Error(errorMessage)

}