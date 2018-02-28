export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'dashboard',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: false,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    icon: 'invert_colors'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'title'
  },
  {
    title: false,
    name: 'Components'
  },
  {
    name: 'Base',
    url: '/base',
    icon: 'build',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'credit_card'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'view_carousel'
      }
    ]
  },
  {
    name: 'DDFDFDf',
    url: '/base',
    icon: 'build',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'credit_card'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'view_carousel'
      }
    ]
  }

];

export const icons = [
  {
    url: '/dashboard',
    icon: 'dashboard'
  },
  {
    url: '/theme/colors',
    icon: 'invert_colors'
  },
  {
    url: '/theme/typography',
    icon: 'title'
  },
  {
    url: '/base',
    icon: 'build',
    children: [
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'credit_card'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'view_carousel'
      }
    ]
  }
];

