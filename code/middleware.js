// for temporary uses
app.get('/test', function (req, res, next) {
    clog.debug('1');
    next();
}, function (req, res) {
    clog.debug('2');
    res.send('3')
});