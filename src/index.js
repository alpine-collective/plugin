const AlpinePlugin = {
    start() {

    }
}

const alpine = window.deferLoadingAlpine || ((callback) => callback())

window.deferLoadingAlpine = function (callback) {
    AlpinePlugin.start()

    alpine(callback)
}

export default AlpinePlugin