exports.clientError = (req, res) => {
  res.status(404).send({ message: "Page Not Found", statusCode: 404 });
};

exports.serverError = (err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") console.error(err);

  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode).send(payload);
};
