
    let isHungarian = true;

    const toggleLanguage = () => {
      isHungarian = !isHungarian;

      document.getElementById("flagIcon").src = isHungarian
        ? "https://raw.githubusercontent.com/lugosibalint/cv/refs/heads/main/img/flag_hun.gif"
        : "https://raw.githubusercontent.com/lugosibalint/cv/refs/heads/main/img/flag_us.gif";

      // Hungarian content
      const hungarianContent = {
        name: "Lugosi Bálint",
        title: "Informatikus",
        contactTitle: "Kapcsolat",
        location: "Magyarország / Hungary",
        phone: "+36 30 / 724 - 8919",
        email: "lugibalint42@gmail.com",
        bioTitle: "Bemutatkozás",
        bio: "Pályakezdő informatikus vagyok, jelenleg egyetemi tanulmányaimat végzem az informatika területén és részmunkaidőben dolgozom IT Szakértő munkakörben. Lelkes és nyitott vagyok, hogy minél több oldalát megismerjem az informatikának. Jelenlegi célom, hogy később a szoftverfejlesztés területén helyezkedjek el. Szeretem a kreatív problémamegoldást, és szívesen dolgozom csapatban.",
        educationTitle: "Tanulmányok",
        study1: "2019-09 – 2023-06: BMSZC Bláthy Ottó Titusz Informatikai Technikum – Informatika Ismeretek Középszint",
        study2: "2023-09 – 2024-05: BMSZC Bláthy Ottó Titusz Informatikai Technikum – Szoftverfejlesztő és tesztelő OKJ",
        study3: "2024-09 – : Budapesti Gazdasági Egyetem, Pénzügyi és Számviteli Kar – Gazdaságinformatikus",
        experienceTitle: "Szakmai tapasztalat",
        work1: "2023-09 – 2024-05: Lionsdale Studio KFT. – Gyakorlati képzés – Webfejlesztés",
        work2: "2025-04 – : Kínai-Magyar Vasúti Nonprofit Zrt. – IT Szakértő",
        languageTitle: "Nyelvtudás",
        language: "Angol nyelv – Középfok (B2)"
      };

      // English content
      const englishContent = {
        name: "Bálint Lugosi",
        title: "Software Engineer",
        contactTitle: "Contact",
        location: "Hungary",
        phone: "+36 30 / 724 - 8919",
        email: "lugibalint42@gmail.com",
        bioTitle: "About Me",
        bio: "I am a beginner software engineer currently studying Computer Science and working part-time as an IT Expert. I am eager to explore various aspects of the field. My goal is to work in software development. I enjoy creative problem-solving and working in teams.",
        educationTitle: "Education",
        study1: "2019-09 – 2023-06: BMSZC Bláthy Ottó Titusz Informatikai Technikum – Basic IT Knowledge",
        study2: "2023-09 – 2024-05: BMSZC Bláthy Ottó Titusz Informatikai Technikum – Software Developer and Tester",
        study3: "2024-09 – : Budapest Business School – Informatics in Finance",
        experienceTitle: "Experience",
        work1: "2023-09 – 2024-05: Lionsdale Studio KFT. – Internship – Web Development",
        work2: "2025-04 – : China-Hungary Railway Nonprofit Zrt. – IT Expert",
        languageTitle: "Languages",
        language: "English – Intermediate (B2)"
      };

      // Apply content based on language selection
      const content = isHungarian ? hungarianContent : englishContent;

      document.getElementById("name").textContent = content.name;
      document.getElementById("title").textContent = content.title;
      document.getElementById("contactTitle").textContent = content.contactTitle;
      document.getElementById("location").textContent = content.location;
      document.getElementById("phone").textContent = content.phone;
      document.getElementById("email").textContent = content.email;
      document.getElementById("bioTitle").textContent = content.bioTitle;
      document.getElementById("bio").textContent = content.bio;
      document.getElementById("educationTitle").textContent = content.educationTitle;
      document.getElementById("study1").textContent = content.study1;
      document.getElementById("study2").textContent = content.study2;
      document.getElementById("study3").textContent = content.study3;
      document.getElementById("experienceTitle").textContent = content.experienceTitle;
      document.getElementById("work1").textContent = content.work1;
      document.getElementById("work2").textContent = content.work2;
      document.getElementById("languageTitle").textContent = content.languageTitle;
      document.getElementById("language").textContent = content.language;
    };