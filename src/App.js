import React from "react";

import "./App.css";

const _ = require("lodash");

function App() {
  const renderSome = () => {
    const messagez = [];
    messa.map(item => {
      if (_.isEmpty(messagez)) {
        messagez.push({ sender: item.sender, mess: [item.mess] });
      } else if (messagez[messagez.length - 1].sender === item.sender) {
        messagez[messagez.length - 1].mess.push(item.mess);
      } else {
        messagez.push({ sender: item.sender, mess: [item.mess] });
      }
      console.log(messagez);
    });

    return messagez.map(item => {
      const clazz = item.sender === 1 ? "sender" : "mine";
      return (
        <div className={clazz}>
          {item.mess.map((mess, index) => {
            return <li key={mess}>{mess}</li>;
          })}
        </div>
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <ul>{renderSome()}</ul>
      </header>
    </div>
  );
}

const messa = [
  {
    sender: 1,
    mess:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works."
  },
  {
    sender: 1,
    mess:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!"
  },
  {
    sender: 2,
    mess:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component!"
  },
  {
    sender: 1,
    mess:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!"
  },
  {
    sender: 2,
    mess: "Hello world! This is a long message that will hopefully"
  },
  {
    sender: 2,
    mess: "ok"
  },
  {
    sender: 2,
    mess: "Hello world! This is a long message that will.."
  }
];

//! REAL DATA
const data = {
  messages: {
    "100343674": {
      id: 100343674,
      senderId: "37162",
      roomId: "b303155f-7baf-4fc0-92bc-c90caa223be0",
      createdAt: "2019-09-09T11:31:02Z",
      updatedAt: "2019-09-09T11:31:02Z",
      text: "а ты кто?",
      userStore: {
        instance: "Object",
        presenceStore: "Object",
        logger: "Object",
        reqs: "Object",
        onSetHooks: "Array[1]",
        users: "Object",
        set: "bound value()",
        get: "bound value()",
        fetchMissingUsers: "bound value()",
        fetchBasicUsers: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      },
      roomStore: {
        instance: "Object",
        userStore: "Object",
        isSubscribedTo: "isSubscribedTo()",
        logger: "Object",
        rooms: "Object",
        setSync: "bound value()",
        set: "bound value()",
        get: "bound value()",
        popSync: "bound value()",
        pop: "bound value()",
        addUserToRoom: "bound value()",
        removeUserFromRoom: "bound value()",
        updateSync: "bound value()",
        update: "bound value()",
        fetchBasicRoom: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      }
    },
    "100343680": {
      id: 100343680,
      senderId: "1",
      roomId: "b303155f-7baf-4fc0-92bc-c90caa223be0",
      createdAt: "2019-09-09T11:32:57Z",
      updatedAt: "2019-09-09T11:32:57Z",
      text: "))))",
      userStore: {
        instance: "Object",
        presenceStore: "Object",
        logger: "Object",
        reqs: "Object",
        onSetHooks: "Array[1]",
        users: "Object",
        set: "bound value()",
        get: "bound value()",
        fetchMissingUsers: "bound value()",
        fetchBasicUsers: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      },
      roomStore: {
        instance: "Object",
        userStore: "Object",
        isSubscribedTo: "isSubscribedTo()",
        logger: "Object",
        rooms: "Object",
        setSync: "bound value()",
        set: "bound value()",
        get: "bound value()",
        popSync: "bound value()",
        pop: "bound value()",
        addUserToRoom: "bound value()",
        removeUserFromRoom: "bound value()",
        updateSync: "bound value()",
        update: "bound value()",
        fetchBasicRoom: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      }
    },
    "100343681": {
      id: 100343681,
      senderId: "37162",
      roomId: "b303155f-7baf-4fc0-92bc-c90caa223be0",
      createdAt: "2019-09-09T11:33:07Z",
      updatedAt: "2019-09-09T11:33:07Z",
      text: "это тестовый?",
      userStore: {
        instance: "Object",
        presenceStore: "Object",
        logger: "Object",
        reqs: "Object",
        onSetHooks: "Array[1]",
        users: "Object",
        set: "bound value()",
        get: "bound value()",
        fetchMissingUsers: "bound value()",
        fetchBasicUsers: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      },
      roomStore: {
        instance: "Object",
        userStore: "Object",
        isSubscribedTo: "isSubscribedTo()",
        logger: "Object",
        rooms: "Object",
        setSync: "bound value()",
        set: "bound value()",
        get: "bound value()",
        popSync: "bound value()",
        pop: "bound value()",
        addUserToRoom: "bound value()",
        removeUserFromRoom: "bound value()",
        updateSync: "bound value()",
        update: "bound value()",
        fetchBasicRoom: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      }
    },
    "100343682": {
      id: 100343682,
      senderId: "37162",
      roomId: "b303155f-7baf-4fc0-92bc-c90caa223be0",
      createdAt: "2019-09-09T11:33:14Z",
      updatedAt: "2019-09-09T11:33:14Z",
      text: "))",
      userStore: {
        instance: "Object",
        presenceStore: "Object",
        logger: "Object",
        reqs: "Object",
        onSetHooks: "Array[1]",
        users: "Object",
        set: "bound value()",
        get: "bound value()",
        fetchMissingUsers: "bound value()",
        fetchBasicUsers: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      },
      roomStore: {
        instance: "Object",
        userStore: "Object",
        isSubscribedTo: "isSubscribedTo()",
        logger: "Object",
        rooms: "Object",
        setSync: "bound value()",
        set: "bound value()",
        get: "bound value()",
        popSync: "bound value()",
        pop: "bound value()",
        addUserToRoom: "bound value()",
        removeUserFromRoom: "bound value()",
        updateSync: "bound value()",
        update: "bound value()",
        fetchBasicRoom: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      }
    },
    "100343684": {
      id: 100343684,
      senderId: "1",
      roomId: "b303155f-7baf-4fc0-92bc-c90caa223be0",
      createdAt: "2019-09-09T11:33:31Z",
      updatedAt: "2019-09-09T11:33:31Z",
      text: "нет!",
      userStore: {
        instance: "Object",
        presenceStore: "Object",
        logger: "Object",
        reqs: "Object",
        onSetHooks: "Array[1]",
        users: "Object",
        set: "bound value()",
        get: "bound value()",
        fetchMissingUsers: "bound value()",
        fetchBasicUsers: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      },
      roomStore: {
        instance: "Object",
        userStore: "Object",
        isSubscribedTo: "isSubscribedTo()",
        logger: "Object",
        rooms: "Object",
        setSync: "bound value()",
        set: "bound value()",
        get: "bound value()",
        popSync: "bound value()",
        pop: "bound value()",
        addUserToRoom: "bound value()",
        removeUserFromRoom: "bound value()",
        updateSync: "bound value()",
        update: "bound value()",
        fetchBasicRoom: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      }
    },
    "100343687": {
      id: 100343687,
      senderId: "37162",
      roomId: "b303155f-7baf-4fc0-92bc-c90caa223be0",
      createdAt: "2019-09-09T11:33:57Z",
      updatedAt: "2019-09-09T11:33:57Z",
      text: "удали себя",
      userStore: {
        instance: "Object",
        presenceStore: "Object",
        logger: "Object",
        reqs: "Object",
        onSetHooks: "Array[1]",
        users: "Object",
        set: "bound value()",
        get: "bound value()",
        fetchMissingUsers: "bound value()",
        fetchBasicUsers: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      },
      roomStore: {
        instance: "Object",
        userStore: "Object",
        isSubscribedTo: "isSubscribedTo()",
        logger: "Object",
        rooms: "Object",
        setSync: "bound value()",
        set: "bound value()",
        get: "bound value()",
        popSync: "bound value()",
        pop: "bound value()",
        addUserToRoom: "bound value()",
        removeUserFromRoom: "bound value()",
        updateSync: "bound value()",
        update: "bound value()",
        fetchBasicRoom: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      }
    },
    "100344032": {
      id: 100344032,
      senderId: "1",
      roomId: "b303155f-7baf-4fc0-92bc-c90caa223be0",
      createdAt: "2019-09-09T13:27:37Z",
      updatedAt: "2019-09-09T13:27:37Z",
      text: "dsadsa",
      userStore: {
        instance: "Object",
        presenceStore: "Object",
        logger: "Object",
        reqs: "Object",
        onSetHooks: "Array[1]",
        users: "Object",
        set: "bound value()",
        get: "bound value()",
        fetchMissingUsers: "bound value()",
        fetchBasicUsers: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      },
      roomStore: {
        instance: "Object",
        userStore: "Object",
        isSubscribedTo: "isSubscribedTo()",
        logger: "Object",
        rooms: "Object",
        setSync: "bound value()",
        set: "bound value()",
        get: "bound value()",
        popSync: "bound value()",
        pop: "bound value()",
        addUserToRoom: "bound value()",
        removeUserFromRoom: "bound value()",
        updateSync: "bound value()",
        update: "bound value()",
        fetchBasicRoom: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      }
    },
    "100344053": {
      id: 100344053,
      senderId: "1",
      roomId: "b303155f-7baf-4fc0-92bc-c90caa223be0",
      createdAt: "2019-09-09T13:35:14Z",
      updatedAt: "2019-09-09T13:35:14Z",
      text: "dsadsa",
      userStore: {
        instance: "Object",
        presenceStore: "Object",
        logger: "Object",
        reqs: "Object",
        onSetHooks: "Array[1]",
        users: "Object",
        set: "bound value()",
        get: "bound value()",
        fetchMissingUsers: "bound value()",
        fetchBasicUsers: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      },
      roomStore: {
        instance: "Object",
        userStore: "Object",
        isSubscribedTo: "isSubscribedTo()",
        logger: "Object",
        rooms: "Object",
        setSync: "bound value()",
        set: "bound value()",
        get: "bound value()",
        popSync: "bound value()",
        pop: "bound value()",
        addUserToRoom: "bound value()",
        removeUserFromRoom: "bound value()",
        updateSync: "bound value()",
        update: "bound value()",
        fetchBasicRoom: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      }
    },
    "100344054": {
      id: 100344054,
      senderId: "1",
      roomId: "b303155f-7baf-4fc0-92bc-c90caa223be0",
      createdAt: "2019-09-09T13:35:15Z",
      updatedAt: "2019-09-09T13:35:15Z",
      text: "dsada",
      userStore: {
        instance: "Object",
        presenceStore: "Object",
        logger: "Object",
        reqs: "Object",
        onSetHooks: "Array[1]",
        users: "Object",
        set: "bound value()",
        get: "bound value()",
        fetchMissingUsers: "bound value()",
        fetchBasicUsers: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      },
      roomStore: {
        instance: "Object",
        userStore: "Object",
        isSubscribedTo: "isSubscribedTo()",
        logger: "Object",
        rooms: "Object",
        setSync: "bound value()",
        set: "bound value()",
        get: "bound value()",
        popSync: "bound value()",
        pop: "bound value()",
        addUserToRoom: "bound value()",
        removeUserFromRoom: "bound value()",
        updateSync: "bound value()",
        update: "bound value()",
        fetchBasicRoom: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      }
    },
    "100344055": {
      id: 100344055,
      senderId: "1",
      roomId: "b303155f-7baf-4fc0-92bc-c90caa223be0",
      createdAt: "2019-09-09T13:35:17Z",
      updatedAt: "2019-09-09T13:35:17Z",
      text: "dsad",
      userStore: {
        instance: "Object",
        presenceStore: "Object",
        logger: "Object",
        reqs: "Object",
        onSetHooks: "Array[1]",
        users: "Object",
        set: "bound value()",
        get: "bound value()",
        fetchMissingUsers: "bound value()",
        fetchBasicUsers: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      },
      roomStore: {
        instance: "Object",
        userStore: "Object",
        isSubscribedTo: "isSubscribedTo()",
        logger: "Object",
        rooms: "Object",
        setSync: "bound value()",
        set: "bound value()",
        get: "bound value()",
        popSync: "bound value()",
        pop: "bound value()",
        addUserToRoom: "bound value()",
        removeUserFromRoom: "bound value()",
        updateSync: "bound value()",
        update: "bound value()",
        fetchBasicRoom: "bound value()",
        snapshot: "bound value()",
        getSync: "bound value()",
        decorate: "bound value()"
      }
    }
  },
  createConvo: "createConvo()"
};

export default App;
