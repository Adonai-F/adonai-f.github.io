/**
 * Lab 1
 * Adonai Ford-Williams 100384369, Alexis Morales 100770880
 * February 6th, 2022
 * Durham College
 */
// IIFE -- Immediately Invoked Function Expression
// AKA Anonymous Self-Executing Function
(function()
{
    ChangeProductLabel();

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

    function DisplayContactPage()
    {
        console.log("Contact Page");
        // Add Human Resources to Navbar
        AddNavBar();
        // Add Human Resources to Navbar
        AddHr();

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
                    setTimeout(window.location.href = "index.html", 1000);
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

    // Change Products to Projects
    function ChangeProductLabel()
    {
        document.getElementById("projects").innerHTML = "<i class='fas fa-box'></i> Projects";                
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
        let HrLink = document.getElementById("contact-us");
        HrLink.before(HumanResources);
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

    function redirects()
    {
        location.href = "index.html";
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