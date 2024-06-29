import { IMenuItem } from '../types';
import { ROUTES } from './routes';
import {
  UsersIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/solid';

export const MENU_LIST: IMenuItem[] = [
  {
    route: ROUTES.users,
    literal: 'Users',
    Icon: UsersIcon,
  },
  {
    route: ROUTES.conversations,
    literal: 'Conversations',
    Icon: ChatBubbleBottomCenterIcon,
  },
];
