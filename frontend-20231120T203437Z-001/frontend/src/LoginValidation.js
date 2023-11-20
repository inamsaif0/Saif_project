function Validation(values){
    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const youremail_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA=Z0-9]{8,}$/
    const name_pattern = /$/
    const yourname_pattern = /$/
    const projectname_pattern = /$/
    const message_pattern = /$/
    const company_pattern = /$/
    const companyslogan_pattern = /$/

    if(values.email === ""){
        error.email = "Name should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email didn't match"
    }else {
        error.email = ""
    }

    if(values.youremail === ""){
        error.youremail = "Name should not be empty"
    }
    else if(!youremail_pattern.test(values.youremail)) {
        error.youremail = "Email didn't match"
    }else {
        error.youremail = ""
    }

    if(values.yourname === ""){
        error.yourname = "Name should not be empty"
    }
    else if(!yourname_pattern.test(values.yourname)) {
        error.yourname = "Email didn't match"
    }else {
        error.yourname = ""
    }

    if(values.name === ""){
        error.name = "Name should not be empty"
    }
    else if(!name_pattern.test(values.name)) {
        error.name = "Name didn't match"
    }else {
        error.name = ""
    }

    if(values.company === ""){
        error.company = "Company should not be empty"
    }
    else if(!company_pattern.test(values.company)) {
        error.company = "Name didn't match"
    }else {
        error.company = ""
    }

    if(values.companyslogan === ""){
        error.companyslogan = "Company Slogan should not be empty"
    }
    else if(!companyslogan_pattern.test(values.companyslogan)) {
        error.companyslogan = "Name didn't match"
    }else {
        error.companyslogan = ""
    }


    if(values.projectname === ""){
        error.projectname = "Project name should not be empty"
    }
    else if(!projectname_pattern.test(values.projectname)) {
        error.projectname = "Name didn't match"
    }else {
        error.projectname = ""
    }

    if(values.message === ""){
        error.message = "Message should not be empty"
    }
    else if(!message_pattern.test(values.message)) {
        error.message = "Name didn't match"
    }else {
        error.message = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password didn't match"
    }else {
        error.password = ""
    }

    
    return error;

    
}
export default Validation;