// IIFE -- Immediately Invoked Function Expression
// AKA Anonymous Self-Executing Function
(function()
{
    ChangeProductLabel();

    function DisplayAboutPage()
    {
        // Determine where we are
        console.log("About Page");

        //document.body.style.background = "url('./Images/AdobeStock_346156119.png')";
        //document.body.style.backgroundColor = "red";

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
        //H2.setAttribute("class", "mt-5");
        //H2.setAttribute("style", "Width: 100px");
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

        // Adonai Resume Link
        let resume = document.createElement("p");
        resume.setAttribute("id", "AdonaiResume");
        resume.setAttribute("class", "AdonaiResume");
        let AdonaiLink = "https://www.linkedin.com/in/adonai-fordw/";
        resume.innerHTML = '<a href = "'+ AdonaiLink +'">Adonai Resume';
        MainContent.appendChild(resume);
        let AdonaiR = document.getElementById("second");
        AdonaiR.before(resume);

        // Add Human Resources to Navbar
        AddHr();

        // Add Bottom NavBar
        AddNavBar();

    }

    function DisplayProductPage()
    {
        console.log("Products Page");

        // Add Human Resources to Navbar
        AddHr();

        // Add Bottom NavBar
        AddNavBar();
    }

    function DisplayServicesPage()
    {
        console.log("Services");

        // Add Human Resources to Navbar
        AddHr();

        // Add Bottom NavBar
        AddNavBar();
    }
    function DisplayHomePage()
    {
        document.body.style.backgroundColor = "blue";
        //SetBackgroundImage();
        AddHr();
        // Add Bottom NavBar
        AddNavBar();
        let AboutUsButton = document.getElementById("AboutUsButton");
        console.log(AboutUsButton);
        AboutUsButton.addEventListener("click", function()
        {
            // Redirect to about.html
            location.href = "about.html";
        });

        // Step 1 get reference to an entry points(insertion/deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;
        
        // Step 2 create an element to insert
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id ="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;

        // Step 3 configure new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "";
        Article.setAttribute("class", "container");

        let FirstParagraphString = "Welcome to Our Homepage! Ice Cream is the best!";
        // example of Template String
        let SecondParagraphString = `${FirstParagraphString} `;

        MainParagraph.textContent = SecondParagraphString;
        Article.setAttribute("class", "container");

        // Step 4 add / insert new element
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);

        // Step 4 add/Insert new element
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);   
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");
        // Add Human Resources to Navbar
        AddNavBar();

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event)
        {
            //event.preventDefault(); // For Debugging
            if(subscribeCheckbox.checked)
            {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0,1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }

    function DisplayContactListPage()
    {
        console.log("Contact List Page");

        // Add Human Resources to Navbar
        AddHr();

        // Add Bottom NavBar
        AddNavBar();

        if(localStorage.length > 0) // Make sure not empty
        {
            let contactList = document.getElementById("contactList");
            let data = "";
            let keys = Object.keys(localStorage);
            let index = 1;

            // For each key in keys collection, loop
            for(const key of keys)
            {
                // Retrieve contact data from local storage
                let contactData = localStorage.getItem(key);

                // Create an empty contact object
                let contact = new Contact();
                contact.deserialize(contactData);

                data += `<tr>
                <th scope ="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>
                `;
                index++;
            }
            contactList.innerHTML = data;
        }
    }

    function ChangeProductLabel()
    {
        document.getElementById("projects").innerHTML = "<i class='fas fa-box'></i> Projects";                
    }

    function SetBackgroundImage()
    {
        document.body.style.background = "url('./Images/background.jpg')";
    }

    function AddHr()
    {
        // Entry point
        let MainContent = document.getElementsByTagName("main")[0];
        let HumanResources = document.createElement("li");
        HumanResources.setAttribute("class", "nav-item");
        HumanResources.innerHTML = '<a class="nav-link" href = "human-resources.html"><i class="fas fa-life-ring"></i> Human Resources';
        MainContent.appendChild(HumanResources);
        let HrLink = document.getElementById("contact-us");
        HrLink.before(HumanResources);
    }

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

    // Named Function
    function Start()
    {
        console.log("App Started!");

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
        }     
    }

    window.addEventListener("load", Start);

})();