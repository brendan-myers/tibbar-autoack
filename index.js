const autoAck = (req, res, next) => {
	res.ack();
	next();
};

exports = module.exports = autoAck;