
const root = async (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export default {
  root,
}