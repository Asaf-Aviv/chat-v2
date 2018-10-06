// export default (state = {
//   nickname: null,
//   roomsList: [],
//   myRooms: [],
//   usersList: {},
//   roomMessages: {},
//   privateMessages: {},
// }, action) => {
//   switch (action.type) {
//     case 'SET_NICKNAME':
//       return {
//         ...state,
//         nickname: action.payload,
//       };
//     case 'SET_USERS_LIST':
//       return {
//         ...state,
//         usersList: {
//           ...state.usersList,
//           [action.payload.roomName]: action.payload.usersList,
//         },
//       };
//     case 'SET_ROOMS_LIST':
//       return {
//         ...state,
//         roomsList: action.payload,
//       };
//     case 'NEW_ROOM':
//       return {
//         ...state,
//         roomsList: [...state.roomsList, action.payload],
//       };
//     case 'SELF_JOIN_ROOM':
//       return {
//         ...state,
//         myRooms: [...state.myRooms, action.payload],
//         roomMessages: {
//           ...state.roomMessages,
//           [action.payload]: [],
//         },
//         usersList: {
//           ...state.usersList,
//           [action.payload]: {},
//         },
//       };
//     case 'SELF_LEAVE_ROOM':
//       return {
//         ...state,
//         myRooms: state.myRooms
//           .filter(roomName => roomName !== action.payload),
//         roomMessages: Object.keys(state.roomMessages)
//           .reduce((newObj, roomName) => {
//             if (roomName !== action.payload) {
//               /* eslint-disable no-param-reassign */
//               newObj[roomName] = state.roomMessages[roomName];
//               /* eslint-enable no-param-reassign */
//             }
//             return newObj;
//           }, {}),
//         usersList: Object.keys(state.usersList)
//           .reduce((newObj, roomName) => {
//             if (roomName !== action.payload) {
//               /* eslint-disable no-param-reassign */
//               newObj[roomName] = state.usersList[roomName];
//               /* eslint-enable no-param-reassign */
//             }
//             return newObj;
//           }, {}),
//       };
//     case 'USER_JOIN_ROOM':
//       return {
//         ...state,
//         usersList: {
//           ...state.usersList,
//           [action.payload.roomName]: {
//             ...state.usersList[action.payload.roomName],
//             [action.payload.user.nickname]: action.payload.user,
//           },
//         },
//       };
//     case 'USER_LEFT_ROOM':
//       return {
//         ...state,
//         usersList: {
//           ...state.usersList,
//           [action.payload.roomName]: Object
//             .values(state.usersList[action.payload.roomName])
//             .reduce((newObj, user) => {
//               if (user.nickname !== action.payload.user.nickname) {
//                 /* eslint-disable no-param-reassign */
//                 newObj[user.nickname] = user;
//                 /* eslint-enable no-param-reassign */
//               }
//               return newObj;
//             }, {}),
//         },
//       };
//     case 'USER_LEFT_MESSAGE':
//       return {
//         ...state,
//         roomMessages: {
//           ...state.roomMessages,
//           [action.payload.roomName]: [
//             ...state.roomMessages[action.payload.roomName],
//             action.payload,
//           ],
//         },
//       };
//     case 'USER_JOIN_MESSAGE':
//       return {
//         ...state,
//         roomMessages: {
//           ...state.roomMessages,
//           [action.payload.roomName]: [
//             ...state.roomMessages[action.payload.roomName],
//             action.payload,
//           ],
//         },
//       };
//     case 'USER_DISCONNECTED':
//       return {
//         ...state,
//         roomMessages: {
//           ...state.roomMessages,
//           [action.payload.roomName]: [
//             ...state.roomMessages[action.payload.roomName],
//             action.payload,
//           ],
//         },
//       };
//     case 'NEW_PRIVATE_MESSAGE':
//       return {
//         ...state,
//         privateMessages: {
//           ...state.privateMessages,
//           [action.payload.nickname]: [
//             ...state.privateMessages[action.payload.nickname],
//             action.payload,
//           ],
//         },
//       };
//     case 'NEW_ROOM_MESSAGE':
//       return {
//         ...state,
//         roomMessages: {
//           ...state.roomMessages,
//           [action.payload.roomName]: [
//             ...state.roomMessages[action.payload.roomName],
//             action.payload,
//           ],
//         },
//       };
//     case 'USER_STATUS_CHANGE':
//       return {
//         ...state,
//         usersList:
//         Object
//           .keys(state.usersList).reduce((newObj, roomName) => {
//             if (action.payload.roomsList.includes(roomName)) {
//               /* eslint-disable no-param-reassign */
//               newObj[roomName] = {
//                 ...state.usersList[roomName],
//                 [action.payload.user.nickname]: {
//                   ...action.payload.user,
//                 },
//               };
//               return newObj;
//             }
//             newObj[roomName] = { ...state.usersList[roomName] };
//             /* eslint-enable no-param-reassign */
//             return newObj;
//           }, {}),
//       };
//     default: {
//       return state;
//     }
//   }
// };
