import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TasksClient from './tasks-client.component';
import registerServiceWorker from './registerServiceWorker';

const user = {
    id: 1,
    avatar_url: null,
    full_name: "Ricardo Oyarzun",
    status: "AVAILABLE"
};

const tasks = [
    {
        id: 1,
        created: "2017-12-13T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 90,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 2659
        }
    },
    {
        id: 2,
        created: "2017-12-23T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 199,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 2659
        }
    },
    {
        id: 3,
        created: "2017-12-23T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 199,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 2659
        }
    },
    {
        id: 4,
        created: "2017-12-23T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 199,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 265199
        }
    },
    {
        id: 5,
        created: "2017-12-23T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 199,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 2659
        }
    },
    {
        id: 6,
        created: "2017-12-23T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 199,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 2659
        }
    },
    {
        id: 7,
        created: "2017-12-23T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 199,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 2659
        }
    },
    {
        id: 8,
        created: "2017-12-23T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 199,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 2659
        }
    },
    {
        id: 9,
        created: "2017-12-23T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 1199,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 2659
        }
    },
    {
        id: 10,
        created: "2017-12-23T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 1199,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 2659
        }
    },
    {
        id: 11,
        created: "2017-12-23T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 199,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 2659
        }
    },
    {
        id: 12,
        created: "2017-12-23T03:29:22.177550Z",
        step: {
            actions: [],
        },
        workflow: {
            snoozing: [],
            priority: 199,
            name: "Pedido podría llegar tarde",
            description: "Revisa el feedback del Shopper creado por Customer Service. En el pedido <b><a target=\"_blank\" href=\"/cm/orders/CL-046184-75199533#feedback\">CL-046184-75199533</a></b><br><br>",
        },
        user: {
            full_name: "Ricardo Oyarzun",
            id: 2659
        }
    },
];
ReactDOM.render(<TasksClient user={user} tasks={tasks}/>, document.getElementById('root'));
registerServiceWorker();
