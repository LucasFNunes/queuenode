import Mail from "../lib/Mail";

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };
    //add job registration na fila
    return res.json(user);
  },
};
