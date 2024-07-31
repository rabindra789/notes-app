exports.dashboard = async (req, res) => {
  const locals = {
    title: "Dashboard - Notes App",
    description: "Open source notes app",
  };

  res.render("dashboard/index", { locals, layout: "../views/layouts/dashboard" });
};
