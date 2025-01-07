import { v4 as uuidv4 } from 'uuid';
import { Home, ListTodo } from 'lucide-react';

const menuItems = [
    {
        'id': 'home',
        'title': 'Home',
        'url': '/',
        'icon': Home
    },
    {
        'id': 'projects',
        'title': 'Projects',
        'url': '/projects',
        'icon': ListTodo
    },

]

export default menuItems;