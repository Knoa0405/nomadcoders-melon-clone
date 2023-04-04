import Song from "../models/Song";

const root = async (req, res) => {
  return res.render("song", { pageTitle: "Song" });
}

const create = async (req, res) => {
  const song = await Song.create({
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
  });

  return res.json(song);
};

const getAll = async (req, res) => {
  const songs = await Song.find({});

  return res.json(songs);
};

export default {
  root,
  create,
  getAll
};