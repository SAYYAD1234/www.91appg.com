 Localization data object containing multiple languages
const locales = {
    md {
        name အမည်,
        tel ဖုန်း,
        save သိမ်း,
        confirm အတည်ပြု,
        cancel ပယ်,
        delete ဖျက်,
        loading ဖွင့်နေသည်...,
         ... (rest of Burmese translations)
    },
    my {
        name Nama,
        tel Telefon,
        save Simpan,
        confirm Sahkan,
         ... (rest of Malay translations)
    },
    ph {
        name Pangalan,
        tel Telepono,
        save I-save,
         ... (rest of Filipino translations)
    },
    pk {
        name پورا نام,
        tel فون نمبر,
        save محفوظ کریں,
         ... (rest of Urdu translations)
    },
    ta {
        name பெயர்,
        tel தொலைபேச,
        save சேமிக்கவும்,
         ... (rest of Tamil translations)
    },
    te {
        name పేరు,
        tel ఫోన్,
        save ఫోన్ కాల్,
         ... (rest of Telugu translations)
    },
     Other languages...
};

 Build info function (kept as per original)
window.getBuildInfo = function() {
    return {
        buildTime 4182025, 81429 PM,
        branch  commitId8f7cd864d454367470bdc5356c065914ead7b152
    };
};

 Export the raw localization data
export const localizationData = locales;