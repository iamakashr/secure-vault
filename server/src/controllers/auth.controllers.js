import { registerSchema } from "../validators/auth.validator.js";

export const register = async (req, res) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.issues[0].message,
    });
  }

  const { name, email, password } = result.data;

  res.json({
    name,email,password
  })
  
};