import icon1 from '/src/assets/icon1.svg';
import icon2 from '/src/assets/icon2.svg';
import icon3 from '/src/assets/icon3.svg';
import icon4 from '/src/assets/icon4.svg';
import icon5 from '/src/assets/icon5.svg';

interface Rule{
    icon:string;
    title: string;
    description : string
}

export const Rules: Rule[] = [
    {
        icon: icon1,
        title: 'Invite your Friends',
        description: 'hare the link tutedude.com with your friends'
    },
    {
        icon: icon2,
        title: 'Friend purchases any course',
        description: 'Using your REFERRAL CODE in the payments page'
    },
    {
        icon: icon3,
        title: 'You get ₹ 200 as referral money',
        description: 'On total purchase the friend makes, into your wallet'
    },
    {
        icon: icon4,
        title: 'Your Friend gets ₹ 200 Off ',
        description: 'On his overall fee on successful purchase using your referral code'
    },
    {
        icon: icon5,
        title: 'Transfer money from wallet',
        description: 'When the wallet balance reaches ₹200 or more, you can withdraw it'
    },
]