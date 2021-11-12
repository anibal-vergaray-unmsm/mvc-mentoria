import Mentor from "../model/Mentor";

export const renderMentores = async (req, res) => {
  try {
    const mentores = await Mentor.find().lean();
    res.render("index", {
      mentores,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

export const createMentor = async (req, res, next) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.redirect("/");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

export const renderMentorEdit = async (req, res, next) => {
  const mentor = await Mentor.findById(req.params.id).lean();
  res.render("edit", { mentor });
};

export const editMentor = async (req, res, next) => {
  const { id } = req.params;
  await Mentor.updateOne({ _id: id }, req.body);
  res.redirect("/");
};

export const deleteMentor = async (req, res, next) => {
  let { id } = req.params;
  await Mentor.remove({ _id: id });
  res.redirect("/");
};
