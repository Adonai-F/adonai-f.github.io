(function (core){
    class Contact
{
    // Public Properties (Getters and Setters)
    get FullName()
    {
        return this.m_fullName;
    }

    set FullName(fullName)
    {
        this.m_fullName = fullName; 
    }

    // Contact Number
    get ContactNumber()
    {
        return this.m_contactNumber;
    }

    set ContactNumber(contactNumber)
    {
        this.m_contactNumber = contactNumber; 
    }

    // Email Address
    get EmailAddress()
    {
        return this.m_emailAddress;
    }

    set EmailAddress(emailAddress)
    {
        this.m_emailAddress = emailAddress; 
    }

    // Constructors
    // Adding = "" sets default parameters
    constructor(fullName = "", contactNumber = "", emailAddress = "")
    {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }


    // Public Methods
    serialize()
    {
        if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
        {
            return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
        }
        else
        {
            console.error("One or More properties from Contact Object is Missing");
            return null;
        }
    }

    deserialize(data) // Assume data object is comma-seperated list of properties 
    {
        // Split at the comma
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];

    }

    // Overriden Methods
    toString()
    {
        return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\nEmail Address: ${this.EmailAddress}`;
    }
}
    core.Contact = Contact;
})(core || (core = {}));

