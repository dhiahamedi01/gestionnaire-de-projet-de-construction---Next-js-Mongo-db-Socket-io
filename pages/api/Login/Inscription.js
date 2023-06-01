import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import nc from "next-connect";
import bcrypt from "bcrypt";

dbConnect();

const handler = nc().post(async (req, res) => {
  const { nom, prenom, email, password, Role, tel } = req.body;

  // Vérifier si l'email ou le numéro de téléphone existe déjà
  const existingUser = await User.findOne({ $or: [{ email }, { tel }] });
  if (existingUser) {
    return res.status(400).json({ message: "Email ou numero de Telephone existe !" });
  }

  const maxId = await User.findOne().sort({ id: -1 }).select("id");
  const newId = maxId ? maxId.id + 1 : 1;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ id: newId, nom, prenom, email, password: hashedPassword,Role,tel,});
    await newUser.save();
    res.status(200).json({ message: "New post added!" });
  } catch (error) {
    return res.status(400).json({ message: "Sorry, something went wrong!" });
  }
})

export default handler;
