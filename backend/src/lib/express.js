module.exports = class Express {
    constructor(req, res) {
        this.req = req
        this.res = res
    }
    get (path, callback) {
        if (this.req.url == path && this.req.method == 'GET') {return callback(this.req, this.res)}
    }
}