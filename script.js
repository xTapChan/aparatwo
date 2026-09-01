const translations = {
    en: {
        download: "Free download",
        requirements: "for Android (15+)",
        aboutTitle: "About this app",
        shortDesc: "AparaTwo is an offline camera app inspired by BeReal. Capture authentic moments using both front and back cameras simultaneously, without needing an internet connection.",
        fullDesc: "Take full control of your dual photos!<br>Features include:<br>• Change and preview the position of the small photo<br>• Front flash (bright white interface for better selfies)<br>• Photo gallery preview in the bottom left corner<br>• Two camera modes (main back / small front AND main front / small back)<br>• Elegant rounded corners for your photos.",
        readMore: "Read more",
        showLess: "Show less",
        installTitle: "How to install",
        step1: "Download the APK file using the 'Free download' button above.",
        step2: "Open your device's <b>Settings</b> and navigate to <b>Security</b> or <b>Privacy</b>.",
        step3: "Enable the option to <b>Install from Unknown Sources</b> (or allow your browser to install apps).",
        step4: "Locate the downloaded file in your <b>Downloads</b> folder and tap it to install.",
        contactTitle: "Developer Contact",
        aka: "also known as",
        supportNote: "If you'd like to support my work, feel free to reach out via email!",
        disclaimer: "AparaTwo is an independent project. This application and its developer are not affiliated with, associated with, authorized, endorsed by, or in any way officially connected to BeReal or any of its subsidiaries or its affiliates. Optional donations go solely toward supporting the independent developer's time."
    },
    pl: {
        download: "Pobierz za darmo",
        requirements: "na Androida (15+)",
        aboutTitle: "O aplikacji",
        shortDesc: "AparaTwo to aplikacja aparatu offline inspirowana BeReal. Rób autentyczne podwójne zdjęcia za pomocą przedniego i tylnego aparatu, bez potrzeby połączenia z internetem.",
        fullDesc: "Przejmij pełną kontrolę nad swoimi podwójnymi zdjęciami!<br>Funkcje:<br>• Zmiana i podgląd pozycji małego zdjęcia<br>• Przedni flesz (biały interfejs poprawiający selfie)<br>• Podgląd galerii zdjęć w lewym dolnym rogu<br>• Dwa tryby aparatu (główne z tyłu / małe z przodu ORAZ główne z przodu / małe z tyłu)<br>• Eleganckie zaokrąglone rogi na zdjęciach.",
        readMore: "Czytaj więcej",
        showLess: "Pokaż mniej",
        installTitle: "Jak zainstalować",
        step1: "Pobierz plik APK za pomocą przycisku 'Pobierz za darmo' powyżej.",
        step2: "Otwórz <b>Ustawienia</b> swojego urządzenia i przejdź do sekcji <b>Bezpieczeństwo</b> lub <b>Prywatność</b>.",
        step3: "Włącz opcję <b>Instalacja z nieznanych źródeł</b> (lub zezwól przeglądarce na instalację aplikacji).",
        step4: "Znajdź pobrany plik w folderze <b>Pobrane</b> i dotknij go, aby zainstalować.",
        contactTitle: "Kontakt z deweloperem",
        aka: "znany również jako",
        supportNote: "Jeśli chciałbyś wesprzeć moją pracę, skontaktuj się ze mną przez e-mail!",
        disclaimer: "AparaTwo to niezależny projekt. Ta aplikacja i jej twórca nie są powiązani, autoryzowani, popierani ani w żaden sposób oficjalnie związani z BeReal ani żadnymi podmiotami z nim powiązanymi. Opcjonalne darowizny przeznaczane są wyłącznie na wsparcie czasu niezależnego twórcy."
    }
};

let currentLang = 'pl'; // Ustawiony na PL na start by zaprezentować rodzimy język

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const langToggle = document.getElementById("lang-toggle");
    const readMoreBtn = document.getElementById("read-more-btn");
    const fullDesc = document.getElementById("full-desc");
    const body = document.body;

    // Załaduj tłumaczenia na start
    updateLanguage();

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-theme");
    });

    langToggle.addEventListener("click", () => {
        currentLang = currentLang === 'en' ? 'pl' : 'en';
        updateLanguage();
    });

    function updateLanguage() {
        document.querySelectorAll("[data-key]").forEach(elem => {
            const key = elem.getAttribute("data-key");
            if (translations[currentLang][key]) {
                elem.innerHTML = translations[currentLang][key];
            }
        });
        if (!fullDesc.classList.contains("hidden")) {
            readMoreBtn.textContent = translations[currentLang].showLess;
        } else {
            readMoreBtn.textContent = translations[currentLang].readMore;
        }
    }

    readMoreBtn.addEventListener("click", () => {
        const isHidden = fullDesc.classList.toggle("hidden");
        readMoreBtn.textContent = isHidden ? translations[currentLang].readMore : translations[currentLang].showLess;
    });

    const modal = document.getElementById("image-modal");
    const enlargedImg = document.getElementById("enlarged-img");
    const galleryContainer = document.querySelector(".gallery-container");

    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "flex";
            enlargedImg.src = this.src;
        });
    });

    modal.addEventListener("click", () => modal.style.display = "none");

    galleryContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        galleryContainer.scrollLeft += evt.deltaY;
    });
});