/* Routes: Users. */
export default function addUserRoutes (base, app) { 
  app.get(`${base}/users/`, getUsers)
  return app
}

function getUsers (req, res) {
  res.status(200).json({
    success: true
  })
}
