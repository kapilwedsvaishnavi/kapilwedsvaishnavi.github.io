import Timeline_img_1 from '../Timeline-img-1.png';
import Timeline_img_2 from '../Timeline-img-2.png';
import Timeline_img_3 from '../Timeline-img-3.png';

import Timeline_flower_1 from '../timeline-flower-1.png';
import Timeline_flower_2 from '../timeline-flower-2.png';
import Timeline_flower_3 from '../timeline-flower-3.png';

import kapil_patrika from '../kapil-patrika.jpeg';
import vaishnavi_patrika from '../vaishnavi-patrika.jpeg';

export default {
    navBarDetails: {
        siteHeader: `शुभमंगल`,
        menu: [
            { label: "मुखपृष्ठ", href: "#header" },
            { label: "वर–वधू", href: "#couple" },
            { label: "आमची गोष्ट", href: "#story" },
            { label: "उपस्थिती नोंदवा", href: "#rsvp" },
            { label: "कार्यक्रम", href: "#events" }
        ]
    },

    headerHeading: {
        heading: `सेव्ह द डेट`,
        subHeading: `आमचा विवाह १४ मार्च २०२६ रोजी आहे`,
        vaishnavi_name: `वैष्णवी वीरकर`,
        kapil_name: `कपिल खुरसडे`,
        congratulationsMessage: `आमच्या लग्नाला तुमचं स्वागत आहे!`
    },

    countdownTimeText: {
        day: 'दिवस',
        hours: 'तास',
        minutes: 'मिनिटे',
        seconds: 'सेकंद',
        countdownCompletedMessage: 'आमच्या लग्नाला तुमचं स्वागत आहे!'
    },

    coupleDetails: {
        vaishnavi_name: `वैष्णवी केतन वीरकर`,
        vaishnavi_details: `शुभदा आणि केतन वीरकर यांची कन्या`,
        kapil_name: `कपिल केशव खुरसडे`,
        kapil_details: `सुवर्णा आणि केशव खुरसडे यांचा पुत्र`
    },

    eventHeader: {
        header: `आमचे लग्न`,
        subHeading: `केव्हा आणि कुठे`
    },

    eventDetails: [
        {
            heading: 'साखरपुडा',
            date: 'शनिवार, १४ मार्च २०२६',
            time: 'सकाळी ८:३० ते ९:३०',
            address:
                'श्री हरिप्रिया सभागृह, दातार फार्म्स, सिंहगड रोड, नवस्मरणी मारुती मंदिर लेनच्या मागे, सरिता विहार फेज २, दत्तवाडी, पुणे, महाराष्ट्र ४११०३०',
            location: 'https://maps.app.goo.gl/En3jUJW2ivB9ZBW28',
            invitationCardUrl: vaishnavi_patrika
        },
        {
            heading: 'लग्न समारंभ',
            date: 'शनिवार, १४ मार्च २०२६',
            time: 'दुपारी १२:४०',
            address:
                'श्री हरिप्रिया सभागृह, दातार फार्म्स, सिंहगड रोड, नवस्मरणी मारुती मंदिर लेनच्या मागे, सरिता विहार फेज २, दत्तवाडी, पुणे, महाराष्ट्र ४११०३०',
            location: 'https://maps.app.goo.gl/En3jUJW2ivB9ZBW28',
            invitationCardUrl: vaishnavi_patrika
        },
        {
            heading: 'रिसेप्शन',
            date: 'सोमवार, १६ मार्च २०२६',
            time: 'सायं. ७:०० ते १०:००',
            address:
                'माळी लॉन्स, श्रीराम हौसिंग सोसायटी, भुसावळ, महाराष्ट्र ४२५२०१',
            location: 'https://maps.app.goo.gl/i9NgoEnpW9Hw8J9E6',
            invitationCardUrl: kapil_patrika
        }
    ],

    ourStoryHeader: {
        heading: `आमची गोष्ट`,
        subHeading: `सगळं कसं सुरू झालं...`
    },

    timelineItems: [
        {
            image: Timeline_img_1,
            floater: Timeline_flower_1,
            floaterSide: 'right-50',
            date: "०४ फेब्रुवारी, २०२४",
            header: "💛 आपण कसे भेटलो",
            detail: `सगळं एका साध्या “हॅलो” पासून सुरू झालं.
              साध्या गप्पा हळूहळू अशा झाल्या की
              त्या दोघांनाही दररोजची सवय बनल्या.
              कोणताही मोठा क्षण नाही, कोणतंही नाट्य नाही —
              फक्त एकमेकांत मिळालेली शांतता.
              आणि तिथूनच आमची गोष्ट सुरू झाली.`
        },
        {
            image: Timeline_img_2,
            floater: Timeline_flower_2,
            floaterSide: 'left-50',
            date: "११ ऑक्टोबर, २०२४",
            header: "💍 घेतलेला निर्णय",
            detail: `ना गोंधळ होता.
              ना शंका होती.
              फक्त दोन हृदयं — ज्यांना कळलं की हेच योग्य आहे.
              म्हणून आम्ही एकमेकांची निवड केली —
              क्षणभरासाठी नाही, तर आयुष्यभरासाठी.`
        },
        {
            image: Timeline_img_3,
            floater: Timeline_flower_3,
            floaterSide: 'right-50',
            date: "२० नोव्हेंबर, २०२५",
            header: "✨ आता अधिकृत झालं",
            detail: `कुटुंबीयांच्या आशिर्वादासह आणि मनातल्या उत्साहासह
              शेवटी दिवस ठरला.
              जिथे “आपण दोघं” होतं,
              ते आता “सदैव” होणार आहे.`
        }
    ],

    rsvpText: {
        heading: 'आपण आमच्या लग्नाला येणार आहात का?',
        name_lable: 'नाव',
        email_lable: "ईमेल",
        yes_text: 'हो, मी येईन',
        no_text: "नाही, मी येऊ शकत नाही",
        rsvp_text: 'उपस्थिती नोंदवा',
        success_msg: "धन्यवाद! आपली उपस्थिती नोंदवली गेली आहे.",
        error_msg: "काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा."
    },

    footer: {
        heading: 'कपिल संग वैष्णवी'
    }
}