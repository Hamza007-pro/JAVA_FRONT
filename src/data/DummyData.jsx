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


  CubeTransparentIcon,
  TableCellsIcon,
  DocumentArrowUpIcon,
  DocumentMagnifyingGlassIcon,

  PlusIcon,
  ArrowDownTrayIcon,
  BookmarkIcon,
  RectangleStackIcon,
  Cog8ToothIcon,
  DocumentPlusIcon,
  RectangleGroupIcon,
  PhotoIcon,
  DocumentIcon,
  UserPlusIcon,
  UserMinusIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon




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
    name: 'Schema', href: '#', icon: CubeTransparentIcon, current: true,
    links: [
      { name: 'New Schema', value: 1, icon: PlusIcon, BtnEvent: 'CreateSchema' },
      { name: 'Load Schema', value: 2, icon: ArrowDownTrayIcon, BtnEvent: 'LoadSchema' },
      { name: 'Save Schema', value: 3, icon: BookmarkIcon, BtnEvent: 'SaveSchema' },
      { name: 'Template', value: 4, icon: RectangleStackIcon, BtnEvent: 'Template' },
      { name: 'Properties', value: 5, icon: Cog8ToothIcon, BtnEvent: 'Properties' }
    ]
  },
  {
    name: 'Table', href: '#', icon: TableCellsIcon, current: false,
    links: [
      { name: 'New Table', value: 1, icon: PlusIcon, BtnEvent: 'CreateSchema' },
      { name: 'Add Note', value: 1, icon: DocumentPlusIcon, BtnEvent: 'CreateSchema' },
      { name: 'Add Group', value: 1, icon: RectangleGroupIcon, BtnEvent: 'CreateSchema' }
    ]
  },
  {
    name: 'Export', href: '#', icon: DocumentArrowUpIcon, current: false,
    links: [
      { name: 'SQL', value: 1, icon: CircleStackIcon, BtnEvent: 'CreateSchema' },
      { name: 'MySQL', value: 1, icon: CircleStackIcon, BtnEvent: 'CreateSchema' },
      { name: 'SQL Lite', value: 1, icon: CircleStackIcon, BtnEvent: 'CreateSchema' },
      { name: 'PostgreSQL', value: 1, icon: CircleStackIcon, BtnEvent: 'CreateSchema' },
      { name: 'Image', value: 1, icon: PhotoIcon, BtnEvent: 'CreateSchema' },
      { name: 'PDF', value: 1, icon: DocumentIcon, BtnEvent: 'CreateSchema' }
    ]
  },
  {
    name: 'Users', href: '#', icon: UserGroupIcon, current: false,
    links: [
      { name: 'Invite User', value: 1, icon: UserPlusIcon, BtnEvent: 'CreateSchema' },
      { name: 'Block User', value: 1, icon: UserMinusIcon, BtnEvent: 'CreateSchema' },
      { name: 'Send Message', value: 1, icon: ChatBubbleLeftRightIcon, BtnEvent: 'CreateSchema' }
    ]
  },
  {
    name: 'Documentation', href: '#', icon: DocumentIcon, current: false,
    links: [
      { name: 'New', value: 1, icon: PencilSquareIcon, BtnEvent: 'CreateSchema' },

    ]
  },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

// schema Tables Dummy Data

const tablesData = [
  {
    id: 1, name: 'User',
    attributes: [{ name: 'Id', type: 'Integer', size: 20,constraints:[] },
    { name: 'Name', type: 'String', size: 20,constraints:[] },
    { name: 'Age', type: 'Integer', size: 20,constraints:[] }]
  },
  {
    id: 2, name: 'Category',
    attributes: [{ name: 'Id', type: 'Integer', size: 20,constraints:[] },
    { name: 'Name', type: 'String', size: 20,constraints:[] },
    { name: 'Matricule', type: 'Integer', size: 50,constraints:[] }]
  },
  {
    id: 3, name: 'Work',
    attributes: [{ name: 'Id', type: 'Integer', size: 20,constraints:[] },
    { name: 'Name', type: 'String', size: 20,constraints:[] },
    { name: 'Local', type: 'String', size: 50,constraints:[] }]
  }
]
const colors = [
  '#e63f66', '#462173',
  '#2c32d6', '#10becb',
  '#0b3641', '#03302c',
  '#10cb7a', '#01321f',
  '#99cb10', '#dddd15',
  '#3f2d09', '#7e5315',
  '#ac4c11', '#421806',
  '#ea1818', '#4a0505',]

export { solutions, company, resources, blogPosts, navigation, userNavigation, tablesData,colors }