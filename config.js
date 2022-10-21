// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'ImDedInside',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Good night,',

  // Weather
  weatherKey: '25fc17626556e84f8d0ff370b478c67e',
  weatherIcons: 'Dark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '26.230077585503345',
  defaultLongitude: '50.58157440937727',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://gmail.com/',
    },
    {
      id: '3',
      name: 'Calendar',
      icon: 'trello',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },

  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Youtube Music',
        link: 'https://music.youtube.com/',
      },
      {
        name: 'Liked',
        link: 'https://music.youtube.com/playlist?list=LM',
      },
      {
        name: 'Hentai',
        link: 'https://www.youtube.com/watch?v=o-YBDTqX_ZU',
      },
      {
        name: 'Amazon AE',
        link: 'https://www.amazon.ae/',
      },
      {
        name: 'Amazon IN',
        link: 'https://www.amazon.in/',
      },
    ],
    secondList: [
      {
        name: 'KLE Mail',
        link: 'http://mail.kletech.ac.in/',
      },
      {
        name: 'Discord Bots',
        link: 'https://discord.com/developers/applications',
      },
      {
        name: 'WhatsApp',
        link: 'https://web.whatsapp.com',
      },
      {
        name: 'Bookmark 1',
        link: 'https://www.youtube.com/watch?v=ajeCWxkdte4&list=PLqjFFrfKcY5zWFDDQoBh2dQVUb0lzRoZL',
      },
      {
        name: 'Bookmark 2',
        link: '',
      },
    ],
  },
};
