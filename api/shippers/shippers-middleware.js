const db = require('../../data/db-config')


async function checkId(req, res, next) {
  const shipper = await db('shippers').where('shipperid', req.param.id).first()
  if (!shipper) {
    next({ status: 404, message: 'that id does not asist'})
  } else {
    next()
  }
}

function checkPayload(req, res, next) {
  if (!req.body.Phone || ! req.body.ShipperName) {
    next({ status: 422, message: 'Phone and ShipperName are required'})
  } else {
    next()
  }
}


module.exports = {
  checkId,
  checkPayload,
}

