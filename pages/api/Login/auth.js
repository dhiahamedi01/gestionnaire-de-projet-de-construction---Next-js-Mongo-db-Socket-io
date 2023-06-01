import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import nc from "next-connect";

dbConnect();

const handler = nc().post(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Identifiants invalides" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Identifiants invalides" });
    }

    if (user.Role !== "Administrateur") {
      return res.status(403).json({ message: "Accès interdit" });
    }


    const token = jwt.sign({
        userId: user._id,
        nom: user.nom,
        prenom: user.prenom}
        ,process.env.JWT_SECRET || "yourdefaultsecret",{ expiresIn: "1h" });


    res.status(200).json({ token });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Une erreur s'est produite" });
  }
});

export default handler;
