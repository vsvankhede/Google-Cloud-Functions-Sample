/**
 * Respond to http call with name.
 */
exports.helloGreeting = (req, res) => {

    console.log(req.body);

    if(req.body.name === undefined) {
        res.status(400).send('No name defined!');
    } else {
        console.log(req.body.name);
        res.status(200).send('Hello ' + req.body.name);
    }

}