const getAccessToken = () => {
    const savedUser = window.localStorage.getItem('user')
    if (!savedUser) {
        return null
    }

    const currentUser = JSON.parse(savedUser)

    return currentUser.accessToken
}

