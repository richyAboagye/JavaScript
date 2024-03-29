export const parseRequestUrl = () => {
    const url = document.location.hash.toLocaleLowerCase()
    const request = url.split('/')
    // console.log('url= ', url, 'request = ', request)
    return {
        resource: request[1],
        id: request[2],
        verb: request[3],
    }

}

export const rerender = async (component) => {
    document.getElementById("main-container").innerHTML = await component.render()
    await component.after_render()
} 