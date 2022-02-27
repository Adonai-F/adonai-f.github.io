class User {
    // getters and setters
    get FirstName()
    {
      return this.m_firstName;
    }
  
    set FirstName(fname)
    {
      this.m_firstName = fname;
    }

    get LastName()
    {
      return this.m_lastName;
    }
  
    set LastName(lname)
    {
      this.m_lastName = lname;
    }

    get Username()
    {
        return this.m_username;
    }

    set Username(username)
    {
        this.m_username = username;
    }

    get EmailAddress()
    {
        return this.m_emailAddress;
    }

    set EmailAddress(email_address)
    {
        this.m_emailAddress = email_address;
    }

    get Password()
    {
        return this.m_password;
    }

    set Password(password)
    {
        this.m_password = password;
    }

    // constructor
    constructor(firstName = "", lastName = "", emailAddress = "",  password = "")
    {
      this.FirstName = firstName;
      this.LastName = lastName;
      this.Username = firstName;
      this.EmailAddress = emailAddress;
      this.Password = password;
    }

    // method overrides
    toString()
    {
      return `First Name    : ${this.FirstName} \nEmail Address : ${this.EmailAddress}`;
    }
 
    serialize()
    {
        if(this.FirstName !== "" && this.EmailAddress !== "" && this.Username !== "")
        {
            return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
        }
        else
        {
            console.error("One or more properties of the User is empty");
            return null;
        }
    }

    deserialize(data)
    {
        let propertyArray = data.split(",");
        this.Username = propertyArray[0];
        this.EmailAddress = propertyArray[1];
        this.Username = propertyArray[2];
    }

    // utility methods
    toJSON()
    {
        return {
            "DisplayName": this.FirstName,
            "EmailAddress": this.EmailAddress,
            "Username": this.Username
        }
    }
}

// IIFE -- Immediately Invoked Function Expression
// AKA Anonymous Self-Executing Function
(function()
{
    /**
     * This function uses AJAX to open a connection to the server and returns 
     * the data payload to the callback function
     *
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    function AjaxRequest(method, url, callback)
    {
          // AJAX STEPS
          // Step 1. - instantiate an XHR Object
          let XHR = new XMLHttpRequest();
  
          // Step 2. - add an event listener for readystatechange
          XHR.addEventListener("readystatechange", () =>
          {
              if(XHR.readyState === 4 && XHR.status === 200)
              {
                  if(typeof callback === "function")
                  {
                      callback(XHR.responseText);
                  }
                  else
                  {
                      console.error("ERROR: callback not a function");
                  }
              }
          });
  
          // Step 3. - Open a connection to the server
          XHR.open(method, url);
  
          // Step 4. - Send the request to the server
          XHR.send();
    }
 
     /**
      * This function loads the header.html content into a page
      *
      * @param {string} html_data
      */
     function LoadHeader(html_data)
     {
         $("header").html(html_data);
         $(`li>a:contains(${document.title})`).addClass("active"); // update active link
         checkLogin();
     }    
    
    function DisplayAboutPage()
    {
        // Determine where we are
        console.log("About Page");

        // Entry point
        let MainContent = document.getElementsByTagName("main")[0];    
        
        // About Us h1 header
        let AboutHeader = document.createElement("h1");
        AboutHeader.setAttribute("id", "H1" );
        AboutHeader.setAttribute("class", "mx-auto");
        AboutHeader.setAttribute("style", "Width: 200px");
        let aboutHeader = "About Us";
        AboutHeader.textContent = aboutHeader;
        MainContent.appendChild(AboutHeader);
        let head = document.getElementById("first");
        head.before(AboutHeader);

        // Details h2 header
        let H1 = document.createElement("h2");
        H1.setAttribute("id", "H1" );
        H1.setAttribute("class", "mx-auto");
        H1.setAttribute("style", "Width: 300px");
        let detailHeader = "Here are our Details:";
        H1.textContent = detailHeader;
        MainContent.appendChild(H1);
        let head1 = document.getElementById("first");
        head1.before(H1);

        // Name h2 Header
        let H2 = document.createElement("h2");
        H2.setAttribute("id", "H2");
        let nameHeader = "Adonai  Alexis";
        H2.textContent = nameHeader;
        MainContent.appendChild(H2);
        let head2 = document.getElementById("first");
        head2.before(H2);
        document.getElementById("H2").style.wordSpacing = "670px";
        document.getElementById("H2").style.textIndent = "100px";

        // Adonai p About paragraph
        let MainParagraph = document.createElement("p");
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "AdonaiParagraph");
        let AboutAdonai = "I am 24 years old. I am Computer Programmer at Durham College.";
        let SecondParagraphString = `${AboutAdonai}
         I like baking Strawberry Rhubarb Pies in the summer and apple pie in the fall!`;
        MainParagraph.textContent = SecondParagraphString;
        MainContent.appendChild(MainParagraph);
        let AdonaiP = document.getElementById("second");
        AdonaiP.before(MainParagraph);

        // Alexis p About paragraph
        let MainParagraph2 = document.createElement("p");
        MainParagraph2.setAttribute("id", "MainParagraph2");
        MainParagraph2.setAttribute("class", "AlexParagraph");
        let AboutAlexis = "Hi Im Alexis Morales, Im a CPGM student at Durham College."; 
        let FourthParagraphString = `${AboutAlexis}
        I love to program with the coding languages: C++, Java, Python;`
        MainParagraph2.textContent = FourthParagraphString;
        MainContent.appendChild(MainParagraph2);
        let AboutAlex = document.getElementById("second");
        AboutAlex.before(MainParagraph2);

        // Adonai Resume Link
        let resume = document.createElement("p");
        resume.setAttribute("id", "AdonaiResume");
        resume.setAttribute("class", "AdonaiResume");
        let AdonaiLink = "https://www.linkedin.com/in/adonai-fordw/";
        resume.innerHTML = '<a href = "'+ AdonaiLink +'">Adonai Resume';
        MainContent.appendChild(resume);
        let AdonaiR = document.getElementById("second");
        AdonaiR.before(resume);

        // Alex Resume Link
        let alexresume = document.createElement("p");
        alexresume.setAttribute("id", "AlexResume");
        alexresume.setAttribute("class", "AlexResume");
        let AlexLink = "https://www.linkedin.com/in/alexis-morales-a31261221/";
        alexresume.innerHTML = '<a href = "'+ AlexLink + '">Alexis Resume';
        MainContent.append(alexresume);
        let AlexisM = document.getElementById("second");
        AlexisM.before(alexresume);

        // Add Human Resources to Navbar
        AddHr();

        // Add Bottom NavBar
        AddNavBar();

    }

    function DisplayProductPage()
    {
        console.log("Projects Page");
        // Entry point
        let MainContent = document.getElementsByTagName("main")[0];  

        // Favourite Projects
        let ProjectsH3 = document.createElement("h3");
        ProjectsH3.setAttribute("id", "ProjectsH3");
        let AdParagraph = "Adonai & Alex's Favourite Projects: ";
        ProjectsH3.textContent = AdParagraph;
        MainContent.appendChild(ProjectsH3);
        let ProjectsH = document.getElementById("row2");
        ProjectsH.before(ProjectsH3);


        // Favourite Projects Descriptions
        let ProjectParagraph1 = document.createElement("p");
        ProjectParagraph1.setAttribute("id", "ProjectParagraph1");
        ProjectParagraph1.innerHTML = "We Made A Tic Tac Toe Game in First Year!";
        MainContent.appendChild(ProjectParagraph1);

        // Description 2
        let ProjectParagraph2 = document.createElement("p");
        ProjectParagraph2.setAttribute("id", "ProjectParagraph2");
        ProjectParagraph2.innerHTML = "Every new language begins at Hello World!";
        MainContent.appendChild(ProjectParagraph2);

        // Description 3
        let ProjectParagraph3 = document.createElement("p");
        ProjectParagraph3.setAttribute("id", "ProjectParagraph3");
        ProjectParagraph3.innerHTML = "We created a program that can make a virtual car using OOP Principles!";
        MainContent.appendChild(ProjectParagraph3);

        // Insert Descriptions
        let img1 = document.getElementById("img1");
        img1.before(ProjectParagraph1);

        let img2 = document.getElementById("img2");
        img2.before(ProjectParagraph2);

        let img3 = document.getElementById("img3");
        img3.before(ProjectParagraph3);

        // Add Human Resources to Navbar
        AddHr();

        // Add Bottom NavBar
        AddNavBar();
    }

    function DisplayServicesPage()
    {
        console.log("Services");
        // Entry point
        let MainContent = document.getElementsByTagName("main")[0];   

        // Name h2 Header
        let H2 = document.createElement("h2");
        H2.setAttribute("id", "H2");
        let nameHeader = "Our Services";
        H2.textContent = nameHeader;
        MainContent.appendChild(H2);

        let AdService = document.createElement("h3");
        AdService.setAttribute("id", "AdService");
        let AdParagraph = "Adonai's Top 3 Skills are: ";
        AdService.textContent = AdParagraph;
        MainContent.appendChild(AdService);

        let AdList = document.createElement("ol");
        AdList.setAttribute("id", "AdList");
        AdList.innerHTML = '<li>Object-Oriented Programming</li>'
            +'<li>UX Design</li><li>Full Stack Development</li>';
        MainContent.appendChild(AdList);

        let ImageDescriptions = document.createElement("p");
        ImageDescriptions.setAttribute("id", "ImageDescriptions");
        ImageDescriptions.innerHTML = "Designed a potential User Experience Flowchart&emsp;&emsp;"
        + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
        +"Designed a mock User Graphical Interface";
        MainContent.appendChild(ImageDescriptions);

        let AlexDescriptions = document.createElement("p");
        AlexDescriptions.setAttribute("id", "AlexDescriptions");
        AlexDescriptions.innerHTML = "Professionally Editing Videos&emsp;&emsp;"
        + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
        +"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Program in any language";
        MainContent.append(AlexDescriptions);

        let AlexService = document.createElement("h3");
        AlexService.setAttribute("id", "AlexService");
        let AlexParagraph = "Alex's Top 3 Skills are: ";
        AlexService.textContent = AlexParagraph;
        MainContent.appendChild(AlexService);

        let AlexList = document.createElement("ol");
        AlexList.setAttribute("id", "AlexList");
        AlexList.innerHTML = '<li>Web Design</li>'
        +'<li>HTML, PHP, CSS, Java, Python, C++</li><li>Video Editing</li>';
        MainContent.appendChild(AlexList);
        
        // Insert Items at Specific location
        let ServiceContent = document.getElementById("row1");
        AdService.after(ServiceContent);        
        AdList.after(ServiceContent);
        let ServiceContent1 = document.getElementById("img5");
        ServiceContent1.before(ImageDescriptions);

        let AlexContent = document.getElementById("img5");
        AlexContent.before(AlexService);
        AlexContent.before(AlexList);
        

        // Add Human Resources to Navbar
        AddHr();

        // Add Bottom NavBar
        AddNavBar();
    }

    function DisplayHomePage()
    {
        // Add Human Resources to Navbar
        AddHr();
        // Add Bottom NavBar
        AddNavBar();

        ChangeProductLabel();

        // About Us button redirect
        let AboutUsButton = document.getElementById("AboutUsButton");
        console.log(AboutUsButton);
        AboutUsButton.addEventListener("click", function()
        {
            // Redirect to about.html
            location.href = "about.html";
        });

        // Entry Point
        let MainContent = document.getElementsByTagName("main")[0];

        // Header with Homepage Title
        let HomeHeader = document.createElement("h1");
        HomeHeader.setAttribute("id", "HomeHeader");
        let ATitle = "Adonai & Alex's Homepage";
        HomeHeader.textContent = ATitle;
        MainContent.appendChild(HomeHeader);
        let Home = document.getElementById("home");
        Home.before(HomeHeader);
        document.getElementById("HomeHeader").style.textIndent = "275px";
        
        // Homepage Main Paragraph
        let MainParagraph = document.createElement("p");
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        let FirstParagraphString = "Welcome to Our Homepage! Here you will learn more ";
        let SecondParagraphString = `${FirstParagraphString} about Adonai & Alex!`;
        MainParagraph.textContent = SecondParagraphString;
        MainContent.appendChild(MainParagraph);
        Home.before(MainParagraph);
    }

    /**
     * Adds a Contact Object to localStorage
     *
     * @param {string} fullName
     * @param {string} contactNumber
     * @param {string} emailAddress
     */
    function AddContact(fullName, contactNumber, emailAddress)
    {
        let contact = new core.Contact(fullName, contactNumber, emailAddress);
        if(contact.serialize())
        {
            let key = contact.FullName.substring(0, 1) + Date.now();

            localStorage.setItem(key, contact.serialize());
        }
    }

       /**
     * This method validates a field in the form and displays an error in the message area div element
     *
     * @param {string} fieldID
     * @param {RegExp} regular_expression
     * @param {string} error_message
     */
        function ValidateField(fieldID, regular_expression, error_message)
        {
            let messageArea = $("#messageArea").hide();
        
            $("#" + fieldID).on("blur", function()
            {
                let text_value = $(this).val();
                if(!regular_expression.test(text_value))
                {
                    $(this).trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger").text(error_message).show();
                }
                else
                {
                    messageArea.removeAttr("class").hide();
                }
            });
        }
    
        function ContactFormValidation()
        {
            ValidateField("fullName", /^([A-Z][a-z]{1,3}.?\s)?([A-Z][a-z]{1,})((\s|,|-)([A-Z][a-z]{1,}))*(\s|,|-)([A-Z][a-z]{1,})$/, "Please enter a valid Full Name. This must include at least a Capitalized First Name and a Capitalized Last Name.");
            ValidateField("contactNumber", /^(\+\d{1,3}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Please enter a valid Contact Number. Example: (416) 555-5555");
            ValidateField("emailAddress", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/, "Please enter a valid Email Address.");
        }

    function DisplayContactPage()
    {
        console.log("Contact Page");
        ContactFormValidation();

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event)
        {

            if(subscribeCheckbox.checked)
            {
                let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0, 1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");

        if(localStorage.length > 0) // check if localStorage has something in it 
        {
            let contactList = document.getElementById("contactList");

            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;

            //for every key in the keys collection loop
            for(const key of keys)
            {
                let contactData = localStorage.getItem(key); // retrieve contact data from localStorage

                let contact = new core.Contact(); // create an empty Contact Object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
                <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
                </tr>
                `;               
                index++;
            }

            contactList.innerHTML = data;

            $("#addButton").on("click", () =>
            {
                location.href = "edit.html#add";
            });

            $("button.delete").on("click", function()
            {
                if(confirm("Are you sure?"))
                {
                    localStorage.removeItem($(this).val());
                }
                
                location.href = "contact-list.html";
            });

            $("button.edit").on("click", function() 
            {
                location.href = "edit.html#" + $(this).val();
            });
        }
    }

    // Change Products to Projects
    function ChangeProductLabel()
    {
        //document.getElementById("projects").innerHTML = "<i class='fas fa-box'></i> Projects";
        $("#projects").html("<i class='fas fa-box'></i> Projects")                
    }

    // Add Human Resources link to top nav bar
    function AddHr()
    {
        // Entry point
        let MainContent = document.getElementsByTagName("main")[0];
        let HumanResources = document.createElement("li");
        HumanResources.setAttribute("class", "nav-item");
        HumanResources.innerHTML = '<a class="nav-link" href = "human-resources.html"><i class="fas fa-life-ring"></i> Human Resources';
        MainContent.appendChild(HumanResources);
        $("#contact-us").before('<a class="nav-link" href = "human-resources.html"><i class="fas fa-life-ring"></i> Human Resources');
        //let HrLink = document.getElementById("contact-us");
        //HrLink.before(HumanResources);
    }

    // Add Fixed Bottom Nav Bar
    function AddNavBar()
    {
        // Entry point
        let MainContent = document.getElementsByTagName("main")[0];
        let navBar = document.createElement("nav");
        navBar.setAttribute("class", "navbar fixed-bottom navbar-light bg-light");
        let footer = '<div class="container-fluid"><a class="navbar-brand" href="#">&#169;Copyright 2022</a></div>';
        navBar.innerHTML = footer;
        MainContent.appendChild(navBar);
    }

    function DisplayEditPage()
    {
        console.log("Edit Page");

        ContactFormValidation();

        let page = location.hash.substring(1);

        switch(page)
        {
            case "add":
                {
                    $("main>h1").text("Add Contact");

                    $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);

                    $("#editButton").on("click", (event) => 
                    {
                        event.preventDefault();
                        // Add Contact
                        AddContact(fullName.value, contactNumber.value, emailAddress.value);
                        // Refresh the contact-list page
                        location.href ="contact-list.html";
                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href ="contact-list.html";
                    });

                }
                break;
            default:
                {
                    // get the contact info from localStorage
                    let contact = new core.Contact();
                    contact.deserialize(localStorage.getItem(page));

                    // display the contact info in the edit form
                    $("#fullName").val(contact.FullName);
                    $("#contactNumber").val(contact.ContactNumber);
                    $("#emailAddress").val(contact.EmailAddress);

                    // when Edit is pressed - update the contact
                    $("#editButton").on("click", (event)=>
                    {
                        event.preventDefault();

                        // get any changes from the form
                        contact.FullName = $("#fullName").val();
                        contact.ContactNumber = $("#contactNumber").val();
                        contact.EmailAddress = $("#emailAddress").val();

                        // replace the item in localStorage
                        localStorage.setItem(page, contact.serialize());

                        // return to the contact-list
                        location.href ="contact-list.html";
                    });

                    $("#cancelButton").on("click", () =>
                    {
                        location.href ="contact-list.html";
                    });
                    
                }
                break;
        }
    }

    function DisplayLoginPage()
    {
        console.log("Login Page");

        // Add Bottom NavBar
        AddNavBar();

        let messageArea =  $("#messageArea");
        messageArea.hide();        
        $("#loginButton").on("click", function()
        {
            let success = false;
            // create an empty user object
            let newUser = new core.User();

            // uses jQuery shortcut to load the users.json file
            $.get("./Data/users.json", function(data)
            {
                // for every user in the users.json file
                for (const user of data.users) 
                {
                    // check if the username and password entered in the form matches this user
                    if(username.value == user.Username && password.value == user.Password)
                    {
                        // get the user data from the file and assign to our empty user object
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }

                 // if username and password matches - success.. the perform the login sequence
                if(success)
                {
                    // add user to session storage
                    sessionStorage.setItem("user", newUser.serialize());

                    // hide any error message
                    messageArea.removeAttr("class").hide();

                    // redirect the user to the secure area of our site - contact-list.html
                    location.href = "contact-list.html";                                       
                }
                // else if bad credentials were entered...
                else
                {
                    // display an error message
                    $("#username").trigger("focus").trigger("select");
                    messageArea.addClass("alert alert-danger").text("Error: Invalid Login Information").show();
                }
                
            });
        });

        $("#cancelButton").on("click", function()
        {
            // clear the login form
            document.forms[0].reset();

            // return to the home page
            location.href = "index.html";
        });
    }

    function GetUsername()
    {
        let userData = sessionStorage.getItem("user");
        let user = new core.User();
        user.deserialize(userData);
        console.log(user.DisplayName);
        $("#login").before(`<a class="nav-link" href="#">
        <i class="fa-regular fa-user"></i> ${user.DisplayName}</a>`);
    }

    function checkLogin()
    {
        // if user is logged in
        if(sessionStorage.getItem("user"))
        {
            // swap out the login link for logout
            $("#login").html(
                `<a id="logout" class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
            );
            
            // get the username
            GetUsername(); 

            $("#logout").on("click", function()
            {
                // perform logout
                sessionStorage.clear();

                // redirect back to login
                location.href = "login.html";
            });
        }
        else{
            // Remove contact list button 
            let contactButton = $("#contactButton").hide();
        }
    }

      /**
     * This method validates a field in the form and displays an error in the message area div element
     *
     * @param {string} fieldID
     * @param {RegExp} regular_expression
     * @param {string} error_message
     */
       function ValidateRegistration(fieldID, regular_expression, error_message)
       {
           let messageArea = $("#errorMessage").hide();
       
           $("#" + fieldID).on("blur", function()
           {
               let text_value = $(this).val();
               if(!regular_expression.test(text_value))
               {
                   $(this).trigger("focus").trigger("select");
                   messageArea.addClass("alert alert-danger").text(error_message).show();
               }
               else
               {
                   messageArea.removeAttr("class").hide();
               }
           });
       }

       function RegisterValidationField(){
        ValidateRegistration("firstName",/^[A-Za-z]{2,}/, "Please enter a valid first name");
        ValidateRegistration("lastName", /^[A-Za-z]{2,}/, "Please enter a valid last name");
        ValidateRegistration("emailAddress",/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/, "Please enter a valid Email Address.");
        ValidateRegistration("password",/^[0-9a-zA-Z]{6,}$/, "Please enter a valid password");
        ValidateRegistration("confirmPassword",/[0-9a-zA-Z]{6,}/, "Please confirm your password");
    }

    function DisplayRegisterPage()
    {
        console.log("Register Page");
        RegisterValidationField();

        // Add Bottom NavBar
        AddNavBar();

        let ErrorMessage = $("#errorMessage");
        //ErrorMessage.addClass("alert alert-danger").text("Error: Invalid Login Information").show();
        ErrorMessage.hide();
        
        $("#submitButton").on("click", function()
        {
            // Prevent Form Submission
            event.preventDefault();

             // Instantiate new User Object
            let newUser = new User(firstName.value, lastName.value, emailAddress.value, password.value);
            
            // Display User info in console
            console.log(newUser);

            // Clear Registration form
            document.forms[0].reset();
        });
        
    }

    // Named Function
    function Start()
    {
        console.log("App Started!");
        AjaxRequest("GET", "header.html", LoadHeader);
        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;

            case "Contact":
                DisplayContactPage();
                break;

            case "Contact-List":
                DisplayContactListPage();
                break;

            case "About":
                DisplayAboutPage();
                break;
            
            case "Product":
                DisplayProductPage();
                break;

            case "Services":
                DisplayServicesPage();
                break;
            
            case "Edit":
                DisplayEditPage();
                break;
            
            case "Login":
                DisplayLoginPage();
                break;
            
            case "Register":
                DisplayRegisterPage();
                break;
        }     
    }

    window.addEventListener("load", Start);

})();
