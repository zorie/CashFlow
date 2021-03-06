'use strict';

const environment = process.env.NODE_ENV || 'production',
    config = require('./config/config')(environment),
    app = require('./config/application')(config),
    data = require('./data')(),
    path = require('path');

require('./config/database')(config.connectionString);
require('./auth')(app, config, data);
require('./router')(app, config, data);

app
    .get('/', function(req, res) {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/../../dist/index.html'));
    })
    .get('*', function(req, res) {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/../../dist/index.html'));
    });

/* Testing data */

//Income
// let income = {
//     user_id: 'sajkdasjd9122389',
//     incomes: {
//         company: 'Best Company',
//         amount: '123',
//         startDate: new Date(),
//         accounts: [{}]
//     }
// }
// data.createUserIncomeData(income);

// User Bills
// let userBills = {
//     user_id: '58694bf182f2b31ee0c98087',
//     bills: [{
//         amount: 250,
//         startDueDate: new Date(),
//         endDueDate: new Date(),
//         accountPaidFrom: {},
//         recurrence: {},
//         category: {},
//         notes: 'long notes here',
//         status: {}
//     }]
// }
// data.createUserBill(userBills);

// let userIncomeId = 'sajkdasjd9122389';
// data.getIncomeByUserId(userIncomeId)
//     .then((income) => {
//         console.log(income);
//         if (!income) {
//             reject(err);
//         }
//         resolve(income);

//     });

/* USERS */
let user = {
    firstName: 'admin',
    lastName: 'adminski',
    username: 'admin',
    password: 'admin123456',
    email: 'email@email.com',
    age: 20,
    role: 'admin'
};

// data.getUserByName(user.username)
//     .then((userFound) => {
//         if (!userFound) {
//             data.createUser(user);
//         }
//     });


/* SERVICES */
let ourServices = {
    type: 'Standard',
    title: 'Standard',
    price: 'Free',
    content: 'Gravrida amet nulla. Lorem usce volutpat lectus justo, ut suscipit felis congue ut. Vivamus ut ultricies.',
    modules: [{
            title: 'Accounts',
            isAvailable: true
        },
        {
            title: 'Bills',
            isAvailable: true
        },
        {
            title: 'Income',
            isAvailable: true
        },
        {
            title: 'Calendar',
            isAvailable: true
        },
        {
            title: 'Transactions',
            isAvailable: false
        }
    ]
};

let ourServices2 = {
    type: 'Premium',
    title: 'Premium',
    price: '$10',
    content: 'Gravrida amet nulla. Lorem usce volutpat lectus justo, ut suscipit felis congue ut. Vivamus ut ultricies.',
    modules: [{
            title: 'Accounts',
            isAvailable: true
        },
        {
            title: 'Bills',
            isAvailable: true
        },
        {
            title: 'Income',
            isAvailable: true
        },
        {
            title: 'Calendar',
            isAvailable: true
        },
        {
            title: 'Transactions',
            isAvailable: true
        }
    ]
};
data.getAllOurServices()
    .then((servicesFound) => {
        if (servicesFound.length < 2) {
            data.createOurServicesData(ourServices);
            data.createOurServicesData(ourServices2);
        }
    });

/* ABOUT */
let about = {
    title: 'Who We Are',
    content: 'We are young and tough and we are trying to rock the world with this app. Unfortunately we r using Angular 2 ><',
    team: [{
            avatar: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/14702243_1455497067799478_955787893861110435_n.jpg?oh=672068d2a17145e80da2812619bbc08a&oe=5922CECB',
            name: 'Vasil Penev',
            jobTitle: 'CEO',
            socialMediaIcons: []
        },
        {
            avatar: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/425116_235117463238050_1408560973_n.jpg?oh=f0e09072f195b7936a1a7abcd89a930c&oe=58E19476',
            name: 'Dimitar Kalaydzhiev',
            jobTitle: 'CEO',
            socialMediaIcons: []
        },
        {
            avatar: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/13906970_10210535840300100_2497753137668459306_n.jpg?oh=e9faadf031de7ee3bb96199c11a26af8&oe=58EE0C6F',
            name: 'Zorka Shindova',
            jobTitle: 'CEO',
            socialMediaIcons: []
        }
    ]
};

data.getAllAboutData()
    .then((aboutFound) => {
        if (aboutFound.length == 0) {
            data.createAboutData(about);
        }
    });

/* BILL CATEGORIES */
let tv = {
    name: 'TV'
};
let internet = {
    name: 'Internet'
};
let houseRent = {
    name: 'House rent'
};
let electricity = {
    name: 'Electricity'
};

data.getAllBillCategories()
    .then((categories) => {
        if (categories.length < 4) {
            data.createBillCategory(tv);
            data.createBillCategory(internet);
            data.createBillCategory(houseRent);
            data.createBillCategory(electricity);
        }
    });


/* BILL RECURRENCES */
let monthly = {
    name: 'Monthly'
};
let daily = {
    name: 'Daily'
};
let yearly = {
    name: 'Yearly'
};
let weekly = {
    name: 'Weekly'
};

data.getAllBillRecurrences()
    .then((recurrences) => {
        if (recurrences.length < 4) {
            data.createBillRecurrence(daily);
            data.createBillRecurrence(weekly);
            data.createBillRecurrence(monthly);
            data.createBillRecurrence(yearly);
        }
    });

/* TESTIMONIALS */
let testimonial = {
    content: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametlor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
    avatar: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/13906970_10210535840300100_2497753137668459306_n.jpg?oh=e9faadf031de7ee3bb96199c11a26af8&oe=58EE0C6F',
    name: 'Zorka jiasjva',
    jobTitle: 'CEO'
};


let testimonial2 = {
    content: 'Lorem ipsum dolor sit ametLosit ametLorem ipsum dolor sit amet',
    avatar: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/13906970_10210535840300100_2497753137668459306_n.jpg?oh=e9faadf031de7ee3bb96199c11a26af8&oe=58EE0C6F',
    name: 'Zorka jiasjva',
    jobTitle: 'CEO'
};

data.getAllTestimonial()
    .then((testimonialsFound) => {
        if (testimonialsFound.length < 20) {
            data.createTestimonialData(testimonial);
            data.createTestimonialData(testimonial2);
        }
    });

let SITE_ADDRESS = {
    key: 'SITE_ADDRESS',
    title: 'Address',
    value: 'Aleksandar Malinov, Sofia, Bulgaria',
    icon: 'home'
};

let SITE_EMAIL = {
    key: 'SITE_EMAIL',
    title: 'Email',
    value: 'cashflowsup@gmail.com',
    icon: 'envelope'
};

let SITE_PHONE = {
    key: 'SITE_PHONE',
    title: 'Phone',
    value: '+359123456789',
    icon: 'phone'
};

data.getSettingByName('SITE_ADDRESS')
    .then((settingFound) => {
        if (!settingFound) {
            data.createSiteSetting(SITE_ADDRESS);
        }
    });

data.getSettingByName('SITE_EMAIL')
    .then((settingFound) => {
        if (!settingFound) {
            data.createSiteSetting(SITE_PHONE);
        }
    });

data.getSettingByName('SITE_PHONE')
    .then((settingFound) => {
        if (!settingFound) {
            data.createSiteSetting(SITE_EMAIL);
        }
    });

app.start();