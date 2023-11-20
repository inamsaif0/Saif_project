function Validation(values){
    let error ={}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA=Z0-9]{8,}$/
    const name_pattern = /$/
    const projectname_pattern = /$/
    const message_pattern = /$/

    if(values.email === ""){
        error.email = "Name should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email didn't match"
    }else {
        error.email = ""
    }

    if(values.name === ""){
        error.name = "Name should not be empty"
    }
    else if(!name_pattern.test(values.name)) {
        error.name = "Name didn't match"
    }else {
        error.name = ""
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