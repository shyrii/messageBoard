const prefix = "/api"

export default {
    register: prefix + '/register',
    login: prefix + '/login',
    index: userID =>`${prefix}/index/${userID}`,
    addMessage: prefix + '/message',
    getMyMessage: userID =>`${prefix}/myMessage/${userID}`,
    getLikeMessage: userID =>`${prefix}/myLikeMessage/${userID}`,
    like: userID =>`${prefix}/like/${userID}`,
    cancelLike: userID =>`${prefix}/cancel/${userID}`,
    deleteMessage: messageID =>`${prefix}/message/${messageID}`,
    getComment: messageID =>`${prefix}/comment/${messageID}`,
    addComment: messageID =>`${prefix}/comment/${messageID}`,
    logout: prefix + '/logout',
}


