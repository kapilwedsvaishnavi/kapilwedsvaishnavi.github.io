import Timeline_img_1 from '../Timeline-img-1.png';
import Timeline_img_2 from '../Timeline-img-2.png';
import Timeline_img_3 from '../Timeline-img-3.png';

import Timeline_flower_1 from '../timeline-flower-1.png';
import Timeline_flower_2 from '../timeline-flower-2.png';
import Timeline_flower_3 from '../timeline-flower-3.png';

export default {
    navBarDetails: {
        siteHeader: `Shubhamangala`,
        menu: [
            { label: "HOME", href: "#header" },
            { label: "COUPLE", href: "#couple" },
            { label: "STORY", href: "#story" },
            { label: "RSVP", href: "#rsvp" },
            { label: "EVENTS", href: "#events" }
        ]
    },

    headerHeading: {
        heading: `Save The Date`,
        subHeading: `We are getting married on March 14, 2026`,
        vaishnavi_name: `Vaishnavi Virkar`,
        kapil_name: `Kapil Khursade`
    },

    countdownTimeText: {
        day: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds'
    },

    coupleDetails: {
        vaishnavi_name: `Vaishnavi Ketan Virkar`,
        vaishnavi_details: `Daughter of Shubhada & Ketan Virkar`,
        kapil_name: `Kapil Keshav Khursade`,
        kapil_details: `Son of Suvarna & Keshav Khursade`
    },

    eventHeader: {
        header: `Our Wedding`,
        subHeading: `When & Where`
    },

    eventDetails: [
        {
            heading: 'The Engagement',
            date: 'Saturday, 14 March. 2026',
            time: '8.30 Am to 9.30 Am',
            address: 'Shree Haripriya Sabhagruha, Datar Farms, Sinhgad Rd, behind Navshya Maruti Mandir Lane, Sarita Vihar Phase 2, Dattawadi, Pune, Maharashtra 411030',
            location: 'https://maps.app.goo.gl/En3jUJW2ivB9ZBW28'
        },
        {
            heading: 'The Wedding',
            date: 'Saturday, 14 March. 2026',
            time: '12.40 PM',
            address: 'Shree Haripriya Sabhagruha, Datar Farms, Sinhgad Rd, behind Navshya Maruti Mandir Lane, Sarita Vihar Phase 2, Dattawadi, Pune, Maharashtra 411030',
            location: 'https://maps.app.goo.gl/En3jUJW2ivB9ZBW28'
        },
        {
            heading: 'The Reception',
            date: 'Monday, 16 March 2026',
            time: '7.00 Pm to 10 Pm',
            address: 'Mali Lawans, Shri Ram Housing Society, Bhusawal, Maharashtra 425201',
            location: 'https://maps.app.goo.gl/i9NgoEnpW9Hw8J9E6'
        },
    ],

    ourStoryHeader: {
        heading: `Our Story`,
        subHeading: `How it all began...`
    },

    timelineItems: [
        {
            image: Timeline_img_1,
            floater: Timeline_flower_1,
            floaterSide: 'right-50',
            date: "04 Feb, 2024",
            header: "💛How We Met",
            detail: `It started with a simple hello.
                What began as casual conversations slowly turned into something we both looked forward to every day.
                Without any big moment or drama, we simply found comfort in each other — and that’s how it all began.`
        },
        {
            image: Timeline_img_2,
            floater: Timeline_flower_2,
            floaterSide: 'left-50',
            date: "11 Oct, 2024",
            header: "💍The Decision",
            detail: `There wasn’t confusion.
                There wasn’t doubt.
                Just two hearts that knew this felt right.
                So we chose each other — not just for a moment, but for life`
        },
        {
            image: Timeline_img_3,
            floater: Timeline_flower_3,
            floaterSide: 'right-50',
            date: "20 Nov, 2025",
            header: "✨ It’s Now Official",
            detail: `With our families’ blessings and hearts full of excitement,
                we finally set the date.
                What started as “us” is now becoming “forever.”`
        }
    ],

    rsvpText: {
        heading: 'Are you attending our wedding?',
        name_lable: 'Name',
        email_lable: "Email",
        yes_text: 'Yes, I will attend',
        no_text: "No, I can't make it",
        rsvp_text: 'RSVP',
        success_msg: "Thank you! Your RSVP is submitted.",
        error_msg: "Something went wrong. Please try again."
    },

    footer: {
        heading: 'Kapil Weds Vaishnavi'
    }
}