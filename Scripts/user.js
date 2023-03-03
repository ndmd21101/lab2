(function (core) {
    class User {

        // Constructor
        constructor(firstname, lastname, emailaddress) {
            this.FirstName = firstname
            this.LastName = lastname
            this.EmailAddress = emailaddress
        }
    
        // Getters and Setters
        get FirstName() {
            return this.m_fname
        }
        set FirstName(fname) {
            this.m_fname = fname
        }
        get LastName() {
            return this.m_lname
        }
        set LastName(lname) {
            this.m_lname = lname
        }
    
        get EmailAddress() {
            return this.m_emailAddress
        }
        set EmailAddress(emailaddress) {
            this.m_emailAddress = emailaddress
        }
    
        // Public Utility Method
    
        // Serialize Method
        serialize() {
            if (this.FirstName !== "" && this.LastName !== "" && this.EmailAddress !== "")
                return `${ this.FirstName }, ${ this.LastName }, ${ this.EmailAddress }`
            console.error("One or more properties or fields of the User Object are missing or invalid!")
            return null
        }
    
        // Deserialize Method
        deserialize(data) {
            let propertyArray = data.split(",")
            this.FirstName = propertyArray[0]
            this.LastName = propertyArray[1]
            this.EmailAddress = propertyArray[2]
        }
    
        // Public Override Method
        toString() {
            return `First Name is ${ this.FirstName }\nLast Name is ${ this.LastName}\nEmail Address is ${ this.EmailAddress }`
        }
    }

    core.User = User
})
(core || (core = {}))
