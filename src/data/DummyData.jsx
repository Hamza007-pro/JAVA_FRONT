import {
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,

  CodeBracketSquareIcon,
  CircleStackIcon,
  CodeBracketIcon,
  PuzzlePieceIcon,


  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,

  PlusIcon,
  ArrowDownTrayIcon,
  BookmarkIcon,
  RectangleStackIcon,
  Cog8ToothIcon

} from '@heroicons/react/24/outline'

const solutions = [
  {
    name: 'Web Site Builder',
    description: 'Generate a full web site from your database schema',
    href: '#',
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Database Generator',
    description: 'Create your tables and generate your database schema',
    href: 'DataBaseService',
    icon: CircleStackIcon,
  },
  {
    name: 'Web page builder',
    description: "Build your pages for your web site",
    href: '#',
    icon: CodeBracketIcon,
  },
  {
    name: 'Custom Service',
    description: "Add Custom Features to your application",
    href: '#',
    icon: PuzzlePieceIcon,
  },
]

const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: BuildingOfficeIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkSquareIcon },
  { name: 'Webinars', href: '#', icon: ComputerDesktopIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]

//database service data  

const navigation = [
  {
    name: 'Dashboard', href: '#', icon: HomeIcon, current: true,
    links: [
      { name: 'New Schema', value: 1, icon: PlusIcon },
      { name: 'Load Schema', value: 1, icon: ArrowDownTrayIcon },
      { name: 'Save Schema', value: 1, icon: BookmarkIcon },
      { name: 'Template', value: 1, icon: RectangleStackIcon },
      { name: 'Properties', value: 1, icon: Cog8ToothIcon }
    ]
  },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

export { solutions, company, resources, blogPosts, navigation, userNavigation }