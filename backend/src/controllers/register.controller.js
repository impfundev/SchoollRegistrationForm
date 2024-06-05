const prisma = require("../prisma");

const register = async (req, res) => {
  const data = req.body;

  try {
    const register = await prisma.school.create({ data });
    if (!register)
      return res.status(500).json({
        message: "register failed, try again leter!",
      });

    return res.status(200).json({
      message: "register success!",
      data: register,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "register failed, try again leter!",
    });
  }
};

module.exports = { register };
