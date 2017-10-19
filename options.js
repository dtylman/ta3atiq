function saveOptions(e) {
    let conf = { lang: document.getElementById("lang").value };
    browser.storage.local.set(conf);
    e.preventDefault();
}

async function loadOptions() {
    try {
        let lang = await browser.storage.local.get("lang");
        if (!lang.lang){        
            document.getElementById("lang").value = "ar2heb";
        } else {
            document.getElementById("lang").value = lang.lang;
        }
    } catch (e) {
        console.log(e);
    }
}

function restoreOptions() {
    loadOptions();
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);